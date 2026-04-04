'use client'

interface WaveDividerProps {
  fillColor: string        // hex or tailwind color of the NEXT section bg
  bgColor?: string         // hex or tailwind color of the CURRENT section bg
  direction?: 'down' | 'up' // wave points down (default) or up
  className?: string
}

export default function WaveDivider({
  fillColor,
  bgColor = 'transparent',
  direction = 'down',
  className = '',
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${className}`}
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 610"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full h-full block ${direction === 'up' ? 'rotate-180' : ''}`}
        style={{ display: 'block', marginBottom: '-1px' }}
      >
        <path
          d="M1280 128.432C1387 28.1533 1493 -17.3216 1600 5.9989C1707 28.1534 1813 117.937 1867 162.246L1920 206.556V610H0V475.907L53 442.093C107 408.278 213 341.814 320 352.308C427 363.969 533 453.752 640 498.061C747 542.37 853 542.371 960 464.247C1067 386.123 1173 229.876 1280 128.432Z"
          fill={fillColor}
        />
      </svg>
    </div>
  )
}
