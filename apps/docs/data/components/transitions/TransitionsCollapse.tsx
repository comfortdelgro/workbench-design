import Toggle from '@comfortdelgro/react-compass/toggle'
import Transitions from '@comfortdelgro/react-compass/transitions'
import React from 'react'

const Collapse: React.FC = () => {
  const [show, setShow] = React.useState(false)

  const Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10rem',
    width: '10rem',
    backgroundColor: '#ADD8E6',
    borderRadius: '0.5rem',
    border: '1px solid black',
    color: 'black',
    fontWeight: '600',
  }
  return (
    <div style={{display: 'flex', justifyContent: 'start', gap: '30%'}}>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          height: 'fit-content',
          alignItems: 'center',
          marginTop: '6rem',
        }}
      >
        <span style={{fontSize: '13px'}}>Click here:</span>
        <Toggle size='sm' onChange={(status) => setShow(status)} />
      </div>

      <div style={{padding: '5px'}}>
        <div
          style={{
            marginBottom: '5px',
            marginTop: '5px',
            height: '165px',
            width: '165px',
          }}
        >
          <Transitions effect='collapse' show={show}>
            <div style={{...Style}}>Basic</div>
          </Transitions>
        </div>
        <div style={{marginBottom: '5px', height: '165px', width: '165px'}}>
          <Transitions effect='collapse' show={show} speed={2}>
            <div style={{...Style}}>Custom Speed: 2s</div>
          </Transitions>
        </div>
        <div style={{marginBottom: '5px', height: '165px', width: '165px'}}>
          <Transitions effect='collapse' show={show} collapsedSize='100px'>
            <div
              style={{
                ...Style,
                textAlign: 'center',
                alignItems: 'start',
                padding: '3px',
              }}
            >
              Custom Collapsed Size: 100px. Default is 1000px
            </div>
          </Transitions>
        </div>
        <div style={{marginBottom: '5px', height: '165px', width: '165px'}}>
          <Transitions effect='collapse' show={show} orientation='horizontal'>
            <div style={{...Style}}>Horizontal</div>
          </Transitions>
        </div>
      </div>
    </div>
  )
}

export default Collapse