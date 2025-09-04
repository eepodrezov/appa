#!/usr/bin/env node
/* eslint-disable no-undef */
const fs = require('fs')
const path = require('path')

const thresholds = require('./thresholds.js')

function checkCoverage() {
  const coveragePath = path.join(
    process.cwd(),
    'coverage',
    'coverage-summary.json',
  )

  if (!fs.existsSync(coveragePath)) {
    console.error('Coverage report not found. Run tests with coverage first.')
    process.exit(1)
  }

  try {
    const coverageData = JSON.parse(fs.readFileSync(coveragePath, 'utf8'))
    const total = coverageData.total

    let hasError = false

    for (const [metric, threshold] of Object.entries(thresholds)) {
      const actual = total[metric]?.pct

      if (actual === undefined) {
        console.error(`Coverage metric '${metric}' not found in report`)
        hasError = true
        continue
      }

      if (actual < threshold) {
        console.error(
          `❌ Coverage for ${metric} is ${actual}%, which is below the threshold of ${threshold}%`,
        )
        hasError = true
      } else {
        console.log(`✅ ${metric}: ${actual}% (threshold: ${threshold}%)`)
      }
    }

    if (hasError) {
      process.exit(1)
    } else {
      console.log('🎉 All coverage thresholds passed!')
    }
  } catch (error) {
    console.error('Error reading coverage report:', error.message)
    process.exit(1)
  }
}

// Запускаем проверку
checkCoverage()
