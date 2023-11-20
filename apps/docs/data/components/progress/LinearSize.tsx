import Progress from '@comfortdelgro/react-compass-old/progress'
// import {Progress as StaticProgress} from '@comfortdelgro/static'

function LinearSize() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <span>
        The default height is 4px. In this example, we tailored it to be 10px.
      </span>
      <br />
      <Progress.Linear variant='indeterminate' size={10} />
      {/* <StaticProgress.Linear variant='indeterminate' size={10} /> */}
    </div>
  )
}

export default LinearSize
