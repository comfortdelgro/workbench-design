import * as React from 'react'
const UZFlag: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    id='flag-icons-uz'
    viewBox='0 0 640 480'
    width='1em'
    height='1em'
  >
    <path fill='#1eb53a' d='M0 320h640v160H0z' />
    <path fill='#0099b5' d='M0 0h640v160H0z' />
    <path fill='#ce1126' d='M0 153.6h640v172.8H0z' />
    <path fill='#fff' d='M0 163.2h640v153.6H0z' />
    <circle cx={134.4} cy={76.8} r={57.6} fill='#fff' />
    <circle cx={153.6} cy={76.8} r={57.6} fill='#0099b5' />
    <g fill='#fff' transform='matrix(1.92 0 0 1.92 261.1 122.9)'>
      <g id='e'>
        <g id='d'>
          <g id='c'>
            <g id='b'>
              <path id='a' d='M0-6-1.9-.3 1 .7' />
              <use
                xlinkHref='#a'
                width='100%'
                height='100%'
                transform='scale(-1 1)'
              />
            </g>
            <use
              xlinkHref='#b'
              width='100%'
              height='100%'
              transform='rotate(72)'
            />
          </g>
          <use
            xlinkHref='#b'
            width='100%'
            height='100%'
            transform='rotate(-72)'
          />
          <use
            xlinkHref='#c'
            width='100%'
            height='100%'
            transform='rotate(144)'
          />
        </g>
        <use xlinkHref='#d' width='100%' height='100%' y={-24} />
        <use xlinkHref='#d' width='100%' height='100%' y={-48} />
      </g>
      <use xlinkHref='#e' width='100%' height='100%' x={24} />
      <use xlinkHref='#e' width='100%' height='100%' x={48} />
      <use xlinkHref='#d' width='100%' height='100%' x={-48} />
      <use xlinkHref='#d' width='100%' height='100%' x={-24} />
      <use xlinkHref='#d' width='100%' height='100%' x={-24} y={-24} />
    </g>
  </svg>
)
export default UZFlag
