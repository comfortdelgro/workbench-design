import Toggle from '@comfortdelgro/react-compass-old/toggle'

function ToggleIsDisabled() {
  return (
    <div style={{display: 'flex', gap: '12px'}}>
      <Toggle size='lg' isDisabled />
      <Toggle size='lg' isSelected={true} isDisabled />
    </div>
  )
}

export default ToggleIsDisabled
