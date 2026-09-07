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

  showScore(document.getElementById("composite-score-value"), Math.round(total), ranges["Composite"])
}

// Shows a score, colored by the benchmark band it falls into.
function showScore(element, score, bands) {
  element.textContent = score
  showBenchmark(element, score, bands)
}

// Gives an element the background color of the benchmark band its score falls
// into. Kept separate from showScore because an input carries a value, not text.
function showBenchmark(element, score, bands) {
  const band = bandFor(bands, score)
  if (band) {
    element.dataset.color = band.color.toLowerCase()
    element.title = band.label
  } else {
    delete element.dataset.color
    element.removeAttribute("title")
  }
}

// The highest band the score reaches. A score under every band is treated as
// falling in the lowest one, since some Composite bands do not start at zero.
function bandFor(bands, score) {
  if (!bands || bands.length === 0) return null
  return bands.findLast(band => score >= band.minScore) ?? bands[0]
}

// Weighted scores keep two decimals; the composite is rounded to a whole number.
function round(number) {
  return Math.round(number * 100) / 100
}

document.getElementById("grade-level-selection").addEventListener("change", updateTestScores)
document.getElementById("grade-phase-selection").addEventListener("change", updateTestScores)
document.getElementById("raw-score-fields").addEventListener("input", updateWeightedScores)

updateTestScores()
