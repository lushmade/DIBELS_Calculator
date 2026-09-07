// returns the current grade level & grade phase
function currentSelection() {
  return {
    grade: document.querySelector('input[name="grade-level"]:checked').value,
    phase: document.querySelector('input[name="grade-phase"]:checked').value,
  }
}

// Weights for current grade & grade phase
function currentWeights() {
  const { grade, phase } = currentSelection()
  return WEIGHT[grade][phase]
}

// Ranges for current grade & grade phase
function currentRanges() {
  const { grade, phase } = currentSelection()
  return RANGE_LABELS[grade][phase]
}

// Test score inputs based on selected grade & grade phase
// Updates whenever grade or grade phase is updated
function updateTestScores() {
  const tests = currentWeights()

  const fields = document.getElementById("raw-score-fields")
  for (const row of fields.querySelectorAll(".test-score")) {
    row.remove()
  }

  const rows = document.createDocumentFragment()
  for (const test of Object.keys(tests)) {
    const row = document.createElement("div")
    row.className = "test-score"

    const label = document.createElement("label")
    label.htmlFor = `raw-score-${test}`
    label.textContent = TEST_NAMES[test]

    const input = document.createElement("input")
    input.type = "number"
    input.className = "raw-score"
    input.id = `raw-score-${test}`
    input.name = test
    input.min = "0"
    input.value = 0

    const times = document.createElement("span")
    times.className = "test-times"
    times.textContent = "x"

    const weight = document.createElement("span")
    weight.className = "test-weight"
    weight.textContent = tests[test]

    const equals = document.createElement("span")
    equals.className = "test-equals"
    equals.textContent = "="

    // Filled in by updateWeightedScores, which runs at the end of this render.
    const weighted = document.createElement("span")
    weighted.className = "weighted-score"
    weighted.id = `weighted-${test}`

    row.append(label, input, times, weight, equals, weighted)
    rows.append(row)
  }

  // The composite row is static markup and stays last, so insert ahead of it.
  fields.prepend(rows)

  updateWeightedScores()
}

// Updates the weighted scores by multiplying raw scores by weights
function updateWeightedScores() {
  const tests = currentWeights()

  const ranges = currentRanges()

  let total = 0
  for (const input of document.querySelectorAll(".raw-score")) {
    const raw = Number(input.value || 0)
    const weighted = raw * tests[input.name]

    // Benchmark cut points are raw score thresholds, so the raw input carries the color.
    showBenchmark(input, raw, ranges[input.name])
    document.getElementById(`weighted-${input.name}`).textContent = round(weighted)

    total += weighted
  }

  document.getElementById("total-weighted-score-value").textContent = round(total)
  showCalculationSteps(total)
  showScore(document.getElementById("composite-score-value"), compositeScore(total), ranges["Composite"])
}

// Puts the total weighted score on the composite scale: a z-score scaled by 40,
// rounded to the ones place, then offset by the grade phase's constant.
function compositeScore(total) {
  const { grade, phase } = currentSelection()
  const { Mean, SD } = ADJUSTMENT[grade]

  return Math.round(40 * (total - Mean) / SD) + ADJUSTMENT[grade][phase]
}

// Shows the arithmetic behind the composite, one row per step. The rows use the
// same six columns as the test rows: label, operand, operator, operand, =, result.
function showCalculationSteps(total) {
  const { grade, phase } = currentSelection()
  const { Mean, SD } = ADJUSTMENT[grade]
  const constant = ADJUSTMENT[grade][phase]

  const a = total - Mean
  const b = a / SD
  // B keeps four decimals so that B x 40 visibly reconciles with the rounded C.
  const c = Math.round(b * 40)

  const steps = [
    ["Subtract the mean", round(total), "-", Mean, round(a)],
    ["Divide by standard deviation", round(a), "/", SD, round(b, 4)],
    ["Multiply by 40 and round", round(b, 4), "x", 40, c],
    ["Add scaling constant", c, "+", constant, c + constant],
  ]

  const container = document.getElementById("calculation-step-rows")
  container.innerHTML = ""

  for (const [label, left, operator, right, result] of steps) {
    const row = document.createElement("div")
    row.className = "calculation-step"

    row.append(
      cell("step-label", label),
      cell("step-operand", left),
      cell("step-operator", operator),
      cell("step-operand", right),
      cell("step-equals", "="),
      cell("step-result", result),
    )
    container.append(row)
  }
}

function cell(className, text) {
  const span = document.createElement("span")
  span.className = className
  span.textContent = text
  return span
}

// Shows a score, colored by the benchmark band it falls into.
function showScore(element, score, cuts) {
  element.textContent = score
  showBenchmark(element, score, cuts)
}

// Gives an element the background color of the benchmark band its score falls
// into. Kept separate from showScore because an input carries a value, not text.
function showBenchmark(element, score, cuts) {
  const benchmark = benchmarkFor(cuts, score)
  if (benchmark) {
    const { label, color } = BENCHMARK_LABELS[benchmark]
    element.dataset.color = color.toLowerCase()
    element.title = label
  } else {
    delete element.dataset.color
    element.removeAttribute("title")
  }
}

// The highest benchmark the score reaches, as a BENCHMARK_LABELS key. A score
// under every cut is treated as the lowest one, since some Composite ranges do
// not start at zero.
function benchmarkFor(cuts, score) {
  if (!cuts) return null

  const benchmarks = Object.keys(BENCHMARK_LABELS).filter(key => key in cuts)
  if (benchmarks.length === 0) return null

  return benchmarks.findLast(key => score >= cuts[key]) ?? benchmarks[0]
}

// Weighted scores keep two decimals; the composite is rounded to a whole number.
function round(number, places = 2) {
  const factor = 10 ** places
  return Math.round(number * factor) / factor
}

document.getElementById("grade-level-selection").addEventListener("change", updateTestScores)
document.getElementById("grade-phase-selection").addEventListener("change", updateTestScores)
document.getElementById("raw-score-fields").addEventListener("input", updateWeightedScores)

updateTestScores()
