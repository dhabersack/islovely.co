import React from 'react'

import Card from './card'

const METRICS = [
  {
    label: 'Revenue (in €)',
    value: 0,
    change: +0,
  }, {
    label: 'Videos published',
    value: 4,
    change: +1
  }, {
    label: 'Live streams',
    value: 0,
    change: +0
  }, {
    label: 'Blog posts',
    value: 26,
    change: +0
  }, {
    label: 'Newsletter issues',
    value: 67,
    change: +4
  }, {
    label: 'Newsletter subscribers',
    value: 15,
    change: +2,
  }, {
    label: 'YouTube subscribers',
    value: 20,
    change: +9,
  }, {
    label: 'Twitter followers',
    value: 684,
    change: +44,
  }
]

export default () => (
  <div>
    <h3 className="mb-1.5 font-medium text-sm">
      Last 30 days
    </h3>

    <div
      className="grid gap-x-2.5 gap-y-1.5 grid-cols-2"
    >
      {METRICS.map(({
        change,
        label,
        value,
      }) => {
        const trend = change ? Number.parseFloat(value / (value - change) * 100 - 100).toFixed(2) : 0

        return (
          <Card
            key={label}
          >
            <div
              className="px-4 py-3"
            >
              <h4 className="font-medium mb-0.5 text-gray-600 text-sm dark:text-gray-300">
                {label}
              </h4>

              <div
                className="flex items-center justify-between"
              >
                <p className="font-bold m-0 text-4xl text-gray-900 dark:text-gray-100">
                  {value}
                </p>

                <span
                  className={`
                    ${trend > 0 ? 'bg-green-200' : 'bg-red-200'}
                    font-medium
                    inline-block
                    px-2
                    py-0.5
                    rounded-full
                    ${trend > 0 ? 'text-green-700' : 'text-red-700'}
                    text-xs
                  `}
                >
                  {trend >= 0 && '+'}{trend}%
                </span>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  </div>
)
