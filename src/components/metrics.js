import React from 'react'

import Card from './card'

export default ({
  label,
  metrics,
}) => (
  <div>
    <h3 className="m-0 mb-1.5 font-bold text-sm uppercase">
      {label}
    </h3>

    <div className="grid gap-2 grid-cols-2 mb-3 sm:grid-cols-3 xl:grid-cols-4">
      {metrics.map(({
        change,
        label,
        value,
      }) => {
        const trend = change ? Number.parseFloat(value / (value - change) * 100 - 100).toFixed(0) : 0

        return (
          <Card key={label}>
            <div className="px-4 py-3 flex flex-col-reverse">
              <h4 className="font-medium mb-0.5 text-gray-600 text-sm dark:text-gray-300">
                {label}
              </h4>

              <div className="flex items-center justify-between">
                <p className="font-bold m-0 text-3xl text-gray-900 dark:text-gray-100">
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
