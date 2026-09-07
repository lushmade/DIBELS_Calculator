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

// Benchmark bands, lowest to highest. The key order defines their severity.
const BENCHMARK_LABELS = {
  "BELOW": {
    "label": "Well Below Benchmark",
    "color": "Red"
  },
  "AT_OR_BELOW": {
    "label": "Below Benchmark",
    "color": "Yellow"
  },
  "AT": {
    "label": "At or Above Benchmark",
    "color": "Green"
  },
  "ABOVE": {
    "label": "Above Benchmark",
    "color": "Blue"
  }
}

// Minimum score for each benchmark band, by grade, grade phase and test.
const RANGE_LABELS = {
  "1": {
    "BOY": {
      "Composite": {
        "BELOW": 300,
        "AT_OR_BELOW": 321,
        "AT": 330,
        "ABOVE": 354
      },
      "LNF": {
        "BELOW": 0,
        "AT_OR_BELOW": 32,
        "AT": 42
      },
      "PSF": {
        "BELOW": 0,
        "AT_OR_BELOW": 19,
        "AT": 31,
        "ABOVE": 47
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 25,
        "AT": 30,
        "ABOVE": 47
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 1,
        "AT": 5,
        "ABOVE": 16
      },
      "WRF": {
        "BELOW": 0,
        "AT_OR_BELOW": 8,
        "AT": 12,
        "ABOVE": 20
      },
      "ORF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 5,
        "AT": 10,
        "ABOVE": 35
      },
      "ORC-ACC": {
        "BELOW": 0,
        "AT_OR_BELOW": 0.41,
        "AT": 0.67
      }
    },
    "MOY": {
      "Composite": {
        "BELOW": 340,
        "AT_OR_BELOW": 377,
        "AT": 389,
        "ABOVE": 424
      },
      "LNF": {
        "BELOW": 0,
        "AT_OR_BELOW": 51,
        "AT": 57
      },
      "PSF": {
        "BELOW": 0,
        "AT_OR_BELOW": 34,
        "AT": 43,
        "ABOVE": 57
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 41,
        "AT": 52,
        "ABOVE": 78
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 10,
        "AT": 14,
        "ABOVE": 26
      },
      "WRF": {
        "BELOW": 0,
        "AT_OR_BELOW": 14,
        "AT": 17,
        "ABOVE": 33
      },
      "ORF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 10,
        "AT": 21,
        "ABOVE": 57
      },
      "ORC-ACC": {
        "BELOW": 0,
        "AT_OR_BELOW": 0.54,
        "AT": 0.87
      }
    },
    "EOY": {
      "Composite": {
        "BELOW": 380,
        "AT_OR_BELOW": 427,
        "AT": 441,
        "ABOVE": 480
      },
      "LNF": {
        "BELOW": 0,
        "AT_OR_BELOW": 53,
        "AT": 59
      },
      "PSF": {
        "BELOW": 0,
        "AT_OR_BELOW": 37,
        "AT": 45,
        "ABOVE": 61
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 45,
        "AT": 55,
        "ABOVE": 87
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 11,
        "AT": 15,
        "ABOVE": 28
      },
      "WRF": {
        "BELOW": 0,
        "AT_OR_BELOW": 17,
        "AT": 25,
        "ABOVE": 50
      },
      "ORF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 26,
        "AT": 39,
        "ABOVE": 76
      },
      "ORC-ACC": {
        "BELOW": 0,
        "AT_OR_BELOW": 0.85,
        "AT": 0.91
      }
    }
  },
  "2": {
    "BOY": {
      "Composite": {
        "BELOW": 286,
        "AT_OR_BELOW": 316,
        "AT": 329,
        "ABOVE": 361
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 41,
        "AT": 50,
        "ABOVE": 86
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 10,
        "AT": 15,
        "ABOVE": 25
      },
      "WRF": {
        "BELOW": 0,
        "AT_OR_BELOW": 18,
        "AT": 26,
        "ABOVE": 50
      },
      "ORF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 29,
        "AT": 49,
        "ABOVE": 85
      },
      "ORC-ACC": {
        "BELOW": 0,
        "AT_OR_BELOW": 0.84,
        "AT": 0.92
      },
      "MAZE": {
        "BELOW": 0,
        "AT_OR_BELOW": 2.5,
        "AT": 5,
        "ABOVE": 11
      }
    },
    "MOY": {
      "Composite": {
        "BELOW": 326,
        "AT_OR_BELOW": 373,
        "AT": 389,
        "ABOVE": 423
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 54,
        "AT": 68,
        "ABOVE": 103
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 15,
        "AT": 20,
        "ABOVE": 36
      },
      "WRF": {
        "BELOW": 0,
        "AT_OR_BELOW": 23,
        "AT": 36,
        "ABOVE": 63
      },
      "ORF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 59,
        "AT": 78,
        "ABOVE": 117
      },
      "ORC-ACC": {
        "BELOW": 0,
        "AT_OR_BELOW": 0.91,
        "AT": 0.96
      },
      "MAZE": {
        "BELOW": 0,
        "AT_OR_BELOW": 6.5,
        "AT": 9,
        "ABOVE": 14.5
      }
    },
    "EOY": {
      "Composite": {
        "BELOW": 0,
        "AT_OR_BELOW": 421,
        "AT": 439,
        "ABOVE": 474
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 54,
        "AT": 76,
        "ABOVE": 117
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 17,
        "AT": 22,
        "ABOVE": 39
      },
      "WRF": {
        "BELOW": 0,
        "AT_OR_BELOW": 27,
        "AT": 43,
        "ABOVE": 70
      },
      "ORF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 77,
        "AT": 94,
        "ABOVE": 128
      },
      "ORC-ACC": {
        "BELOW": 0,
        "AT_OR_BELOW": 0.91,
        "AT": 0.96
      },
      "MAZE": {
        "BELOW": 0,
        "AT_OR_BELOW": 7,
        "AT": 9.5,
        "ABOVE": 18
      }
    }
  },
  "3": {
    "BOY": {
      "Composite": {
        "BELOW": 268,
        "AT_OR_BELOW": 314,
        "AT": 332,
        "ABOVE": 365
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 52,
        "AT": 76,
        "ABOVE": 121
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 18,
        "AT": 24,
        "ABOVE": 34
      },
      "WRF": {
        "BELOW": 0,
        "AT_OR_BELOW": 30,
        "AT": 40,
        "ABOVE": 60
      },
      "ORF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 55,
        "AT": 73,
        "ABOVE": 105
      },
      "ORC-ACC": {
        "BELOW": 0,
        "AT_OR_BELOW": 0.91,
        "AT": 0.96
      },
      "MAZE": {
        "BELOW": 0,
        "AT_OR_BELOW": 5,
        "AT": 8,
        "ABOVE": 15
      }
    },
    "MOY": {
      "Composite": {
        "BELOW": 308,
        "AT_OR_BELOW": 377,
        "AT": 393,
        "ABOVE": 427
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 78,
        "AT": 94,
        "ABOVE": 138
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 23,
        "AT": 30,
        "ABOVE": 46
      },
      "WRF": {
        "BELOW": 0,
        "AT_OR_BELOW": 40,
        "AT": 50,
        "ABOVE": 65
      },
      "ORF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 85,
        "AT": 105,
        "ABOVE": 141
      },
      "ORC-ACC": {
        "BELOW": 0,
        "AT_OR_BELOW": 0.91,
        "AT": 0.96
      },
      "MAZE": {
        "BELOW": 0,
        "AT_OR_BELOW": 9.5,
        "AT": 12,
        "ABOVE": 20.5
      }
    },
    "EOY": {
      "Composite": {
        "BELOW": 0,
        "AT_OR_BELOW": 424,
        "AT": 442,
        "ABOVE": 467
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 80,
        "AT": 105,
        "ABOVE": 141
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 24,
        "AT": 31,
        "ABOVE": 45
      },
      "WRF": {
        "BELOW": 0,
        "AT_OR_BELOW": 47,
        "AT": 55,
        "ABOVE": 70
      },
      "ORF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 96,
        "AT": 114,
        "ABOVE": 136
      },
      "ORC-ACC": {
        "BELOW": 0,
        "AT_OR_BELOW": 0.91,
        "AT": 0.96
      },
      "MAZE": {
        "BELOW": 0,
        "AT_OR_BELOW": 12,
        "AT": 15.5,
        "ABOVE": 22.5
      }
    }
  },
  "K": {
    "BOY": {
      "Composite": {
        "BELOW": 243,
        "AT_OR_BELOW": 280,
        "AT": 306,
        "ABOVE": 332
      },
      "LNF": {
        "BELOW": 0,
        "AT_OR_BELOW": 16,
        "AT": 25
      },
      "PSF": {
        "BELOW": 0,
        "AT_OR_BELOW": 1,
        "AT": 5,
        "ABOVE": 15
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 4,
        "AT": 9,
        "ABOVE": 20
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT": 1
      },
      "WRF": {
        "BELOW": 0,
        "AT": 1
      }
    },
    "MOY": {
      "Composite": {
        "BELOW": 318,
        "AT_OR_BELOW": 356,
        "AT": 371,
        "ABOVE": 393
      },
      "LNF": {
        "BELOW": 0,
        "AT_OR_BELOW": 31,
        "AT": 37
      },
      "PSF": {
        "BELOW": 0,
        "AT_OR_BELOW": 23,
        "AT": 29,
        "ABOVE": 43
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 16,
        "AT": 25,
        "ABOVE": 36
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 1,
        "AT": 3,
        "ABOVE": 9
      },
      "WRF": {
        "BELOW": 0,
        "AT_OR_BELOW": 1,
        "AT": 4,
        "ABOVE": 10
      }
    },
    "EOY": {
      "Composite": {
        "BELOW": 0,
        "AT_OR_BELOW": 406,
        "AT": 420,
        "ABOVE": 450
      },
      "LNF": {
        "BELOW": 0,
        "AT_OR_BELOW": 35,
        "AT": 42
      },
      "PSF": {
        "BELOW": 0,
        "AT_OR_BELOW": 37,
        "AT": 44,
        "ABOVE": 53
      },
      "NWF-CLS": {
        "BELOW": 0,
        "AT_OR_BELOW": 24,
        "AT": 31,
        "ABOVE": 49
      },
      "NWF-WRC": {
        "BELOW": 0,
        "AT_OR_BELOW": 4,
        "AT": 7,
        "ABOVE": 13
      },
      "WRF": {
        "BELOW": 0,
        "AT_OR_BELOW": 6,
        "AT": 10,
        "ABOVE": 18
      }
    }
  }
}

// Standardization constants per grade, from the Adjustments table.
const ADJUSTMENT = {
  "K": {
    "Mean": 729,
    "SD": 630,
    "BOY": 289,
    "MOY": 364,
    "EOY": 398
  },
  "1": {
    "Mean": 3371,
    "SD": 2251,
    "BOY": 360,
    "MOY": 400,
    "EOY": 440
  },
  "2": {
    "Mean": 7085,
    "SD": 3811,
    "BOY": 360,
    "MOY": 400,
    "EOY": 440
  },
  "3": {
    "Mean": 10051,
    "SD": 4349,
    "BOY": 360,
    "MOY": 400,
    "EOY": 440
  },
  "4": {
    "Mean": 4563,
    "SD": 1771,
    "BOY": 360,
    "MOY": 400,
    "EOY": 440
  },
  "5": {
    "Mean": 4085,
    "SD": 1299,
    "BOY": 360,
    "MOY": 400,
    "EOY": 440
  },
  "6": {
    "Mean": 6087,
    "SD": 1685,
    "BOY": 360,
    "MOY": 400,
    "EOY": 440
  },
  "7": {
    "Mean": 6444,
    "SD": 1960,
    "BOY": 360,
    "MOY": 400,
    "EOY": 440
  },
  "8": {
    "Mean": 4824,
    "SD": 1506,
    "BOY": 360,
    "MOY": 400,
    "EOY": 440
  }
}
