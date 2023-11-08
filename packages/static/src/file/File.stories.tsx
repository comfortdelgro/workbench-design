import type {Meta} from '@storybook/react'
import React from 'react'
import File from './index'

export const State: React.FC = () => (
  <>
    <h4>Close</h4>
    <div style={{width: '100%'}}>
      <File.State
        fileName='Filename.png'
        icon={
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path
              d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'
              fill='currentColor'
            />
          </svg>
        }
      />
    </div>
    <h4>Error</h4>
    <div style={{width: '100%'}}>
      <File.State
        fileName='Filename.png'
        icon={
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path
              d='M14.8437 12.3125L9.01106 2.5625C8.56452 1.8125 7.43764 1.8125 6.9881 2.5625L1.1582 12.3125C0.709472 13.0598 1.26837 14 2.16777 14H13.833C14.7288 14 15.2894 13.0625 14.8437 12.3125ZM7.34303 5.64286C7.34303 5.28795 7.63699 5 7.9993 5C8.36162 5 8.65558 5.28929 8.65558 5.64286V9.07143C8.65558 9.42634 8.36162 9.71429 8.02391 9.71429C7.68621 9.71429 7.34303 9.42768 7.34303 9.07143V5.64286ZM7.9993 12.2857C7.5246 12.2857 7.13959 11.9086 7.13959 11.4436C7.13959 10.9786 7.52433 10.6014 7.9993 10.6014C8.47428 10.6014 8.85902 10.9786 8.85902 11.4436C8.85793 11.908 8.4751 12.2857 7.9993 12.2857Z'
              fill='#A4262C'
            />
          </svg>
        }
      />
    </div>
    <h4>Success</h4>
    <div style={{width: '100%'}}>
      <File.State
        fileName='Filename.png'
        icon={
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path
              d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM11.1664 6.79141C11.4645 6.49336 11.4645 6.00664 11.1664 5.70859C10.8684 5.41055 10.3816 5.41055 10.0836 5.70859L7.125 8.66719L5.91641 7.45859C5.61836 7.16055 5.13164 7.16055 4.83359 7.45859C4.53555 7.75664 4.53555 8.24336 4.83359 8.54141L6.58359 10.2914C6.88164 10.5895 7.36836 10.5895 7.66641 10.2914L11.1664 6.79141Z'
              fill='#107C10'
            />
          </svg>
        }
      />
    </div>
    <h4>Download</h4>
    <div style={{width: '100%'}}>
      <File.State
        fileName='Filename.png'
        icon={
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path
              d='M14.125 10.625H10.4746L9.2373 11.8623C8.90781 12.1918 8.46758 12.375 8 12.375C7.53242 12.375 7.09328 12.193 6.7627 11.8623L5.52539 10.625H1.875C1.39184 10.625 1 11.0168 1 11.5V14.125C1 14.6082 1.39184 15 1.875 15H14.125C14.6082 15 15 14.6082 15 14.125V11.5C15 11.016 14.609 10.625 14.125 10.625ZM12.8125 13.4688C12.4516 13.4688 12.1562 13.1734 12.1562 12.8125C12.1562 12.4516 12.4516 12.1562 12.8125 12.1562C13.1734 12.1562 13.4688 12.4516 13.4688 12.8125C13.4688 13.1734 13.1734 13.4688 12.8125 13.4688ZM7.38203 11.243C7.55156 11.4152 7.77578 11.5 8 11.5C8.22422 11.5 8.44789 11.4146 8.61852 11.2437L12.1185 7.74365C12.46 7.40186 12.46 6.84814 12.1185 6.50635C11.7767 6.16455 11.2227 6.16455 10.8812 6.50635L8.875 8.51406V1.875C8.875 1.39184 8.48316 1 8 1C7.51602 1 7.125 1.39184 7.125 1.875V8.51406L5.11797 6.50703C4.77645 6.16523 4.22246 6.16523 3.88066 6.50703C3.53914 6.84883 3.53914 7.40254 3.88066 7.74434L7.38203 11.243Z'
              fill='currentColor'
            />
          </svg>
        }
      />
    </div>
    <h4>Loading</h4>
    <div style={{width: '100%'}}>
      <File.State
        fileName='Filename.png'
        icon={
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path
              d='M14.125 10.625H10.4746L9.2373 11.8623C8.90781 12.1918 8.46758 12.375 8 12.375C7.53242 12.375 7.09328 12.193 6.7627 11.8623L5.52539 10.625H1.875C1.39184 10.625 1 11.0168 1 11.5V14.125C1 14.6082 1.39184 15 1.875 15H14.125C14.6082 15 15 14.6082 15 14.125V11.5C15 11.016 14.609 10.625 14.125 10.625ZM12.8125 13.4688C12.4516 13.4688 12.1562 13.1734 12.1562 12.8125C12.1562 12.4516 12.4516 12.1562 12.8125 12.1562C13.1734 12.1562 13.4688 12.4516 13.4688 12.8125C13.4688 13.1734 13.1734 13.4688 12.8125 13.4688ZM7.38203 11.243C7.55156 11.4152 7.77578 11.5 8 11.5C8.22422 11.5 8.44789 11.4146 8.61852 11.2437L12.1185 7.74365C12.46 7.40186 12.46 6.84814 12.1185 6.50635C11.7767 6.16455 11.2227 6.16455 10.8812 6.50635L8.875 8.51406V1.875C8.875 1.39184 8.48316 1 8 1C7.51602 1 7.125 1.39184 7.125 1.875V8.51406L5.11797 6.50703C4.77645 6.16523 4.22246 6.16523 3.88066 6.50703C3.53914 6.84883 3.53914 7.40254 3.88066 7.74434L7.38203 11.243Z'
              fill='currentColor'
            />
          </svg>
        }
        isLoading
      />
    </div>
  </>
)

export const Preview: React.FC = () => (
  <>
    <div style={{width: '100%'}}>
      <File.Preview  
        css={{
          '.cdg-file-preview-image': {
            background: 'red'
          }
        }}
        imageSrc='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />
    </div>

    <h3>With File.State</h3>
    <div style={{width: '100%'}}>
      <File.Preview imageSrc='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'>
        <File.State
          fileName='Filename.png'
          icon={
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
              <path
                d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'
                fill='currentColor'
              />
            </svg>
          }
        />
      </File.Preview>
    </div>
  </>
)

const meta = {
  title: 'Example/File',
  component: State,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof State>

export default meta
