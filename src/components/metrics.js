import React from 'react'

import Breakout from './breakout'
import Card from './card'

export default function Metrics({
  label,
  metrics,
}) {
  return (
    <div>
      <h3 className="m-0 mb-2 font-bold text-sm uppercase">
        {label}
      </h3>

      <Breakout>
        <Card>
          <div className="gap-4 grid px-4 py-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {metrics.map(({
              change,
              label,
              value,
            }) => {
              const trend = change ? Number.parseFloat(value / (value - change) * 100 - 100).toFixed(0) : 0

              return (
                <React.Fragment key={label}>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2.5">
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

                    <h4 className="font-medium mb-0.5 text-gray-600 text-sm dark:text-gray-300">
                      {label}
                    </h4>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
      </Card>
      </Breakout>
    </div>
  )
}
