const WEIGHT = {
  "K": {
    "BOY": {
      "LNF": 35.44,
      "PSF": 4.13,
      "NWF-CLS": 14.93,
      "NWF-WRC": 3.56,
      "WRF": 5.62
    },
    "MOY": {
      "LNF": 8.86,
      "PSF": 4.13,
      "NWF-CLS": 14.93,
      "NWF-WRC": 3.56,
      "WRF": 5.62
    },
    "EOY": {
      "LNF": 8.86,
      "PSF": 4.13,
      "NWF-CLS": 14.93,
      "NWF-WRC": 3.56,
      "WRF": 5.62
    }
  },
  "1": {
    "BOY": {
      "LNF": 10.72,
      "PSF": 2.13,
      "NWF-CLS": 23.13,
      "NWF-WRC": 7.79,
      "WRF": 13.51,
      "ORF-WRC": 25.36,
      "ORC-ACC": 0.25
    },
    "MOY": {
      "LNF": 10.72,
      "PSF": 2.13,
      "NWF-CLS": 23.13,
      "NWF-WRC": 7.79,
      "WRF": 13.51,
      "ORF-WRC": 25.36,
      "ORC-ACC": 0.25
    },
    "EOY": {
      "LNF": 10.72,
      "PSF": 2.13,
      "NWF-CLS": 23.13,
      "NWF-WRC": 7.79,
      "WRF": 13.51,
      "ORF-WRC": 25.36,
      "ORC-ACC": 0.25
    }
  },
  "2": {
    "BOY": {
      "NWF-CLS": 32.74,
      "NWF-WRC": 10.95,
      "WRF": 21.26,
      "ORF-WRC": 35.36,
      "ORC-ACC": 0.15,
      "MAZE": 4.28
    },
    "MOY": {
      "NWF-CLS": 32.74,
      "NWF-WRC": 10.95,
      "WRF": 21.26,
      "ORF-WRC": 35.36,
      "ORC-ACC": 0.15,
      "MAZE": 4.28
    },
    "EOY": {
      "NWF-CLS": 32.74,
      "NWF-WRC": 10.95,
      "WRF": 21.26,
      "ORF-WRC": 35.36,
      "ORC-ACC": 0.15,
      "MAZE": 4.28
    }
  },
  "3": {
    "BOY": {
      "NWF-CLS": 40.02,
      "NWF-WRC": 11.8,
      "WRF": 19.83,
      "ORF-WRC": 39.42,
      "ORC-ACC": 0.09,
      "MAZE": 4.79
    },
    "MOY": {
      "NWF-CLS": 40.02,
      "NWF-WRC": 11.8,
      "WRF": 19.83,
      "ORF-WRC": 39.42,
      "ORC-ACC": 0.09,
      "MAZE": 4.79
    },
    "EOY": {
      "NWF-CLS": 40.02,
      "NWF-WRC": 11.8,
      "WRF": 19.83,
      "ORF-WRC": 39.42,
      "ORC-ACC": 0.09,
      "MAZE": 4.79
    }
  }
}

const TEST_NAMES = {
  "LNF": "Letter Naming Fluency",
  "PSF": "Phonemic Segmentation Fluency",
  "NWF-CLS": "Nonsense Word Fluency - Correct Letter Sounds",
  "NWF-WRC": "Nonsense Word Fluency - Words Recoded Correctly",
  "WRF": "Word Reading Fluency",
  "ORF-WRC": "Oral Reading Fluency - Words Correct",
  "ORC-ACC": "Oral Reading Fluency - Accuracy",
  "MAZE": "Maze"
}

const RANGE_LABELS = {
  "K": {
    "BOY": {
      "Composite": [
        {
          "minScore": 243,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 280,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 306,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 332,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "LNF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 16,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 25,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "PSF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 1,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 5,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 15,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 4,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 9,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 20,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 1,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 1,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ]
    },
    "MOY": {
      "Composite": [
        {
          "minScore": 318,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 356,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 371,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 393,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "LNF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 31,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 37,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "PSF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 23,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 29,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 43,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 16,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 25,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 36,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 1,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 3,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 9,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 1,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 4,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 10,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ]
    },
    "EOY": {
      "Composite": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 406,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 420,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 450,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "LNF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 35,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 42,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "PSF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 37,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 44,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 53,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 24,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 31,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 49,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 4,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 7,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 13,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 6,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 10,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 18,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ]
    }
  },
  "1": {
    "BOY": {
      "Composite": [
        {
          "minScore": 300,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 321,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 330,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 354,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "LNF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 32,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 42,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "PSF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 19,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 31,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 47,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 25,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 30,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 47,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 1,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 5,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 16,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 8,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 12,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 20,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 5,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 10,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 35,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORC-ACC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 0.41,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 0.67,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ]
    },
    "MOY": {
      "Composite": [
        {
          "minScore": 340,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 377,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 389,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 424,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "LNF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 51,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 57,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "PSF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 34,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 43,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 57,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 41,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 52,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 78,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 10,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 14,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 26,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 14,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 17,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 33,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 10,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 21,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 57,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORC-ACC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 0.54,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 0.87,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ]
    },
    "EOY": {
      "Composite": [
        {
          "minScore": 380,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 427,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 441,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 480,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "LNF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 53,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 59,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "PSF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 37,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 45,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 61,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 45,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 55,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 87,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 11,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 15,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 28,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 17,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 25,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 50,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 26,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 39,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 76,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORC-ACC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 0.85,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 0.91,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ]
    }
  },
  "2": {
    "BOY": {
      "Composite": [
        {
          "minScore": 286,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 316,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 329,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 361,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 41,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 50,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 86,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 10,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 15,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 25,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 18,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 26,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 50,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 29,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 49,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 85,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORC-ACC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 0.84,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 0.92,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "MAZE": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 2.5,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 5,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 11,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ]
    },
    "MOY": {
      "Composite": [
        {
          "minScore": 326,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 373,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 389,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 423,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 54,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 68,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 103,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 15,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 20,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 36,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 23,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 36,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 63,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 59,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 78,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 117,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORC-ACC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 0.91,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 0.96,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "MAZE": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 6.5,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 9,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 14.5,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ]
    },
    "EOY": {
      "Composite": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 421,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 439,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 474,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 54,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 76,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 117,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 17,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 22,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 39,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 27,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 43,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 70,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 77,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 94,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 128,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORC-ACC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 0.91,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 0.96,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "MAZE": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 7,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 9.5,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 18,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ]
    }
  },
  "3": {
    "BOY": {
      "Composite": [
        {
          "minScore": 268,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 314,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 332,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 365,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 52,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 76,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 121,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 18,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 24,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 34,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 30,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 40,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 60,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 55,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 73,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 105,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORC-ACC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 0.91,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 0.96,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "MAZE": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 5,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 8,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 15,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ]
    },
    "MOY": {
      "Composite": [
        {
          "minScore": 308,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 377,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 393,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 427,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 78,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 94,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 138,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 23,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 30,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 46,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 40,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 50,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 65,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 85,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 105,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 141,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORC-ACC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 0.91,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 0.96,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "MAZE": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 9.5,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 12,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 20.5,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ]
    },
    "EOY": {
      "Composite": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 424,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 442,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 467,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-CLS": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 80,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 105,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 141,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "NWF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 24,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 31,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 45,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "WRF": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 47,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 55,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 70,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORF-WRC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 96,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 114,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 136,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ],
      "ORC-ACC": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 0.91,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 0.96,
          "label": "At or Above Benchmark",
          "color": "Green"
        }
      ],
      "MAZE": [
        {
          "minScore": 0,
          "label": "Well Below Benchmark",
          "color": "Red"
        },
        {
          "minScore": 12,
          "label": "Below Benchmark",
          "color": "Yellow"
        },
        {
          "minScore": 15.5,
          "label": "At or Above Benchmark",
          "color": "Green"
        },
        {
          "minScore": 22.5,
          "label": "Above Benchmark",
          "color": "Blue"
        }
      ]
    }
  }
}
