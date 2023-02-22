import * as React from 'react'
const LAFlag: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id='flag-icons-la'
    viewBox='0 0 640 480'
    width='1em'
    height='1em'
  >
    <defs>
      <clipPath id='a'>
        <path fillOpacity={0.7} d='M0 0h640v480H0z' />
      </clipPath>
    </defs>
    <g fillRule='evenodd' clipPath='url(#a)'>
      <path fill='#ce1126' d='M-40 0h720v480H-40z' />
      <path fill='#002868' d='M-40 119.3h720v241.4H-40z' />
      <path
        fill='#fff'
        d='M423.4 240a103.4 103.4 0 1 1-206.8 0 103.4 103.4 0 1 1 206.8 0z'
      />
    </g>
  </svg>
)
export default LAFlag
