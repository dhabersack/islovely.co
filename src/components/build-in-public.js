import React from 'react'

import Metrics from './metrics'

const METRICS_AUDIENCE = [
  {
    label: 'Twitter followers',
    value: 898,
    change: +200,
  }, {
    label: 'Newsletter subscribers',
    value: 14,
    change: +2,
  }, {
    label: 'YouTube subscribers',
    value: 46,
    change: +11,
  },
]

const METRICS_FINANCES = [
  {
    label: 'US$ revenue',
    value: 0,
    change: +0,
  }, {
    label: 'US$ MRR',
    value: 0,
    change: +0,
  },
]

const METRICS_CONTENT = [
  {
    label: 'Blog posts',
    value: 26,
    change: +0
  }, {
    label: 'Weekly newsletters',
    value: 74,
    change: +4
  }, {
    label: 'Videos published',
    value: 5,
    change: +2
  }, {
    label: 'Live streams',
    value: 0,
    change: +0
  },
]

export default function BuildInPublic() {
  return (
    <div>
      <h2 className="mb-0.5">
        Metrics (last 28 days)
      </h2>

      <p className="italic m-0 mb-3 text-gray-500 text-xs dark:text-gray-400">
        Updated: February 9, 2021
      </p>

      <p className="mb-6">
        As part of building in public, I share my numbers openly. If there is something else you’d like me to include here, tweet me at <a href="https://twitter.com/domhabersack">@domhabersack</a>.
      </p>

      <div className="mb-6 space-y-8">
        <Metrics
          label="Finances"
          metrics={METRICS_FINANCES}
        />

        <Metrics
          label="Content"
          metrics={METRICS_CONTENT}
        />

        <Metrics
          label="Audience"
          metrics={METRICS_AUDIENCE}
        />
      </div>
    </div>
  )
}
