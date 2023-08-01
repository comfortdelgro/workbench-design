import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {Key} from 'react'
import Dropdown from '.'
import {Column} from '../utils'
import ADFlag from './flags/ad'
import AEFlag from './flags/ae'
import AFFlag from './flags/af'

function generateRandomName() {
  const firstNames = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Emily',
    'Frank',
    'Gina',
    'Haley',
    'Isaac',
    'John',
  ]
  const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Moore',
    'Taylor',
  ]
  const firstName =
    firstNames[Math.floor(Math.random() * firstNames.length)] ?? ''
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)] ?? ''
  return {name: `${firstName} ${lastName}`, firstName, lastName}
}

function generateRandomData(numData: number, startNumber = 1): SampleData[] {
  const data = []

  for (let i = 0; i < numData; i++) {
    const id = i + startNumber // generate a random ID between 0 and 9999
    const nameObj = generateRandomName() // generate a random name
    const name = nameObj.name
    const firstName = nameObj.firstName
    const lastName = nameObj.lastName
    const age = Math.floor(Math.random() * 60 + 5)
    const gender = Math.floor(Math.random() * 10) % 2 === 1 ? 'Male' : 'Female'
    data.push({
      id,
      name,
      age,
      gender,
      firstName,
      lastName,
    }) // add the ID and name to the data array as an object
  }

  return data
}

interface SampleData {
  id: number
  name: string
  age: number
  gender: string
  firstName: string
  lastName: string
}

export const Select: React.FC = () => {
  const [value, setValue] = React.useState<Key>('aardvark1')
  const [valueHeader, setValueHeader] = React.useState<Key>('')
  const [flag, setFlag] = React.useState<Key>('')
  const [loadMoreValue, setLoadMoreValue] = React.useState<Key>('')
  const [loadingMoreStatus, setLoadingMoreStatus] = React.useState(false)
  const [data, setData] = React.useState<SampleData[]>(generateRandomData(10))
  const [value1, setValue1] = React.useState<Key>('cat')

  const handlePrefix = (key: Key) => {
    if (key === 'afghanistan') {
      return (
        <div
          style={{
            marginRight: '0.7rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ADFlag />
        </div>
      )
    }
    if (key === 'albania') {
      return (
        <div
          style={{
            marginRight: '0.7rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AEFlag />
        </div>
      )
    }
    if (key === 'algeria') {
      return (
        <div
          style={{
            marginRight: '0.7rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AFFlag />
        </div>
      )
    }
    return null
  }

  return (
    <Column>
      <h3>Controlled</h3>
      <Dropdown.Select
        isRequired
        label={
          <>
            Favorite Animal <FontAwesomeIcon icon={faBug} />
          </>
        }
        placeholder='Choose an animal'
        value={value}
        onValueChange={(k: Key) => setValue(k)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      >
        <Dropdown.Item
          checkmark='checkbox'
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
        <Dropdown.Item value='dog1'>Dog1</Dropdown.Item>
        <Dropdown.Item value='aardvark1'>Aardvark1</Dropdown.Item>
        <Dropdown.Item value='kangaroo1'>Kangaroo1</Dropdown.Item>
        <Dropdown.Item value='snakessss1'>Snake1</Dropdown.Item>
      </Dropdown.Select>
      <h3>Prefix</h3>
      <Dropdown.Select
        isRequired
        label={<>Phone Code Select</>}
        placeholder='Choose an animal'
        value={flag}
        onValueChange={(k: Key) => setFlag(k)}
        prefix={
          <div
            style={{
              marginRight: '0.7rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {handlePrefix(flag)}
          </div>
        }
      >
        <Dropdown.Item value='afghanistan'>Afghanistan (+93)</Dropdown.Item>
        <Dropdown.Item value='albania'>Albania (+355)</Dropdown.Item>
        <Dropdown.Item value='algeria'>Algeria (+213)</Dropdown.Item>
      </Dropdown.Select>
      <h3>Disable the whole thing</h3>
      <Dropdown.Select
        isDisabled
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={value1}
        onValueChange={(k: Key) => setValue1(k)}
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Disable only one item</h3>
      <Dropdown.Select
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={value1}
        onValueChange={(k: Key) => setValue1(k)}
        disabledValues={['dog']}
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>UnControlled</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        defaultValue={'cat'}
        disabledValues={['dog']}
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          textValue='pandared'
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Allow deselect with double click</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        defaultValue={'dog'}
        shouldDeselect
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          textValue='pandared'
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Erorr</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>With Header</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={valueHeader}
        onValueChange={(value: Key) => setValueHeader(value)}
      >
        <Dropdown.Header>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '8px 16px',
              borderBottom: '2px solid #EDEBE9',
            }}
          >
            <span
              style={{
                color: '#323130',
                fontSize: '12px',
                fontWeight: 'bold',
                padding: 0,
                margin: 0,
              }}
            >
              Filter
            </span>
            <button
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#A4262C',
                border: 0,
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
              onClick={() => setValueHeader('')}
            >
              Clear
            </button>
          </div>
        </Dropdown.Header>
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Loading</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>With Icon</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Number of rows</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>With Section</h3>
      <Dropdown.Select label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item value='fly'>Fly</Dropdown.Item>
        <Dropdown.Section title='Group 1'>
          <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
          <Dropdown.Item value='cat'>Cat</Dropdown.Item>
          <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title='Group 2'>
          <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
          <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
          <Dropdown.Item value='snake'>Snake</Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Select>
      <h3>Don't close after select item</h3>
      <Dropdown.Select
        label='Favorite Animal'
        isCloseOnSelect={false}
        placeholder='Choose an animal'
      >
        <Dropdown.Item value='fly' checkmark='tick'>
          Fly
        </Dropdown.Item>
        <Dropdown.Item value='cat' checkmark='tick'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' checkmark='tick'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' checkmark='tick'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' checkmark='tick'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' checkmark='tick'>
          Snake
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>Load more</h3>
      <Dropdown.Select
        isRequired
        label='Using load more'
        placeholder='Select name'
        value={loadMoreValue}
        isLoadingMore={loadingMoreStatus}
        onValueChange={(k: Key) => setLoadMoreValue(k)}
        onLoadMore={() => {
          setLoadingMoreStatus(true)
          setData((currentData) => {
            setTimeout(() => {
              setLoadingMoreStatus(false)
            })
            return [
              ...currentData,
              ...generateRandomData(10, currentData.length + 1),
            ]
          })
        }}
      >
        {data.map((item) => (
          <Dropdown.Item value={item.id} key={item.id}>
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Select>
    </Column>
  )
}

export const Combobox: React.FC = () => {
  const [value, setValue] = React.useState<Key>('cat')
  const [valueHeader, setValueHeader] = React.useState<Key>('')
  const [disabledValue] = React.useState<Key>('dog')
  const [customValue, setCustomValue] = React.useState<Key>('kangaroo')

  return (
    <Column>
      <h3>Controlled</h3>
      <Dropdown.ComboBox
        isRequired
        label={
          <>
            Favorite Animal <FontAwesomeIcon icon={faBug} />
          </>
        }
        placeholder='Choose an animal'
        value={value}
        onValueChange={(k: Key) => setValue(k)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      >
        {/* <Dropdown.Item lear Data</Dropdown.Item> */}
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
        <Dropdown.Item value='dog1'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark1'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo1'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake1'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>Allow deselect with double click</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        shouldDeselect
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>Disabled</h3>
      <Dropdown.ComboBox
        isDisabled
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={disabledValue}
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>UnControlled</h3>
      <Dropdown.ComboBox label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Erorr</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>with allowsCustomValue</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={customValue}
        onValueChange={(k: Key) => setCustomValue(k)}
        allowsCustomValue
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>With Header</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={valueHeader}
        onValueChange={(value: Key) => setValueHeader(value)}
      >
        <Dropdown.Header>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '8px 16px',
              borderBottom: '2px solid #EDEBE9',
            }}
          >
            <span
              style={{
                color: '#323130',
                fontSize: '12px',
                fontWeight: 'bold',
                padding: 0,
                margin: 0,
              }}
            >
              Filter
            </span>
            <button
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#A4262C',
                border: 0,
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
              onClick={() => setValueHeader('')}
            >
              Clear
            </button>
          </div>
        </Dropdown.Header>
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Loading</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>With Icon</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Number of rows</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>Disabled Clearable</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        disableClearable
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>With Section</h3>
      <Dropdown.ComboBox label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item value='fly'>Fly</Dropdown.Item>
        <Dropdown.Section title='Group 1'>
          <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
          <Dropdown.Item value='cat'>Cat</Dropdown.Item>
          <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title='Group 2'>
          <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
          <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
          <Dropdown.Item value='snake'>Snake</Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.ComboBox>

      <h3>Don't close after select item</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        isCloseOnSelect={false}
        placeholder='Choose an animal'
      >
        <Dropdown.Item value='fly' checkmark='tick'>
          Fly
        </Dropdown.Item>
        <Dropdown.Item value='red panda' checkmark='tick'>
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' checkmark='tick'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' checkmark='tick'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' checkmark='tick'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' checkmark='tick'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' checkmark='tick'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>
    </Column>
  )
}
