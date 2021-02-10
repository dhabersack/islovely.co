import React from 'react'

export default function Breakout({
  children,
}){
  return (
    <div className="sm:-mx-6 md:-mx-12 lg:-mx-20 xl:-mx-32 2xl:-mx-40">
      {children}
    </div>
  )
}
