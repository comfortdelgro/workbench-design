import {Accordion, Flexbox} from '@comfortdelgro/react-compass-old'
import {useState} from 'react'

function ControlledAccordion() {
  const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
    officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
    iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
    error optio consequatur.`

  const [expand, setExpand] = useState<string | false>(false)

  const handleControlledAccordion = (id: string) => () => {
    setExpand((previous) => {
      if (previous === id) {
        return false
      }
      return id
    })
  }

  return (
    <Flexbox css={{flexDirection: 'column'}}>
      <Accordion
        expand={expand === 'first'}
        onExpandChange={handleControlledAccordion('first')}
      >
        <Accordion.Title>
          <p>{lorem}</p>
        </Accordion.Title>
        {lorem}
        {lorem}
      </Accordion>

      <Accordion
        expand={expand === 'second'}
        onExpandChange={handleControlledAccordion('second')}
      >
        <Accordion.Title>
          <p>{lorem}</p>
        </Accordion.Title>
        {lorem}
        {lorem}
      </Accordion>

      <Accordion
        expand={expand === 'third'}
        onExpandChange={handleControlledAccordion('third')}
      >
        <Accordion.Title>
          <p>{lorem}</p>
        </Accordion.Title>
        {lorem}
        {lorem}
      </Accordion>
    </Flexbox>
  )
}

export default ControlledAccordion
