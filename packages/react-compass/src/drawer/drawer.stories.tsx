import ArrowLeft from '@comfortdelgro/compass-icons/react/arrow-left'
import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import CrossIcon from '@comfortdelgro/compass-icons/react/cross'
import {faChevronRight, faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {FormEventHandler, useState} from 'react'
import Button from '../button'
import List from '../list'
import ListImage from '../list/list-image'
import TextField from '../textfield'
import Typography from '../typography'
import {Row} from '../utils'
import {Column} from '../utils/components'
import Drawer, {DrawerProps} from './index'

const imgSrc =
  'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

export function H5() {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <h3>H5 Drawer</h3>
      <Button type='button' onClick={() => setOpenDrawer(true)}>
        Open Drawer
      </Button>

      <Drawer
        open={openDrawer}
        css={{height: '40dvh', '& .drawer-content': {padding: 0}}}
        onClose={() => setOpenDrawer(false)}
        variant='h5'
      >
        <Typography.Body
          variant='body2'
          css={{textAlign: 'center', paddingBlock: '$4'}}
        >
          Pull up for more rides
        </Typography.Body>

        <Column>
          <List
            title='ComfortRIDE'
            description='Car or Taxi, Flat Fare'
            descriptionIcon={
              <FontAwesomeIcon
                style={{width: 14, height: 14, color: '#0142AF'}}
                icon={faFaceSmile}
              />
            }
            variant='h5'
            leftInfo={
              <ListImage variant='h5' isRounded src={imgSrc} alt='singapore' />
            }
            rightInfo={{
              text: '$9.90',
              description: 'Fees may apply',
              icon: <FontAwesomeIcon icon={faChevronRight} />,
            }}
          />
          <List
            title='ComfortRIDE'
            description='Car or Taxi, Flat Fare'
            variant='h5'
            leftInfo={
              <ListImage variant='h5' isRounded src={imgSrc} alt='singapore' />
            }
            rightInfo={{text: '$9.90', description: 'Fees may apply'}}
          />
          <List
            title='ComfortRIDE'
            description='Car or Taxi, Flat Fare'
            variant='h5'
            leftInfo={
              <ListImage variant='h5' isRounded src={imgSrc} alt='singapore' />
            }
            rightInfo={{text: '$9.90', description: 'Fees may apply'}}
            descriptionIcon={
              <FontAwesomeIcon
                style={{width: 14, height: 14, color: '#0142AF'}}
                icon={faFaceSmile}
              />
            }
          />
          <List
            title='ComfortRIDE'
            description='Car or Taxi, Flat Fare'
            variant='h5'
            leftInfo={
              <ListImage variant='h5' isRounded src={imgSrc} alt='singapore' />
            }
            rightInfo={{text: '$9.90', description: 'Fees may apply'}}
          />
          <List
            title='ComfortRIDE'
            description='Car or Taxi, Flat Fare'
            variant='h5'
            leftInfo={
              <ListImage variant='h5' isRounded src={imgSrc} alt='singapore' />
            }
            rightInfo={{text: '$9.90', description: 'Fees may apply'}}
          />
        </Column>
      </Drawer>
    </>
  )
}

export function Default() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [keyword, setKeyword] = useState('')

  const [openDrawerPosition, setOpenDrawerPosition] = useState(false)
  const [drawerPosition, setDrawerPosition] =
    useState<DrawerProps['position']>(undefined)

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    setKeyword((formData.get('keyword') as string) || '')

    if (!formData.get('keep')) {
      e.currentTarget.reset()
    }

    handleCloseDrawer()
  }

  const handleCloseDrawer = () => {
    setOpenDrawer(false)
  }

  const listenOnCloseDrawer = () => {
    setOpenDrawer(false)

    // Do other stuff when drawer close
  }

  const handleChangePosition = (position: DrawerProps['position']) => {
    setDrawerPosition(position)
    setOpenDrawerPosition(true)
  }

  return (
    <>
      <h3>1. Drawer</h3>
      <p>Drawer form value: {keyword}</p>
      <Button type='button' onClick={() => setOpenDrawer(true)}>
        Open Drawer
      </Button>

      <Drawer open={openDrawer} onClose={listenOnCloseDrawer}>
        <Drawer.Header>
          <h2 style={{marginBlock: 0}}>Drawer controlled by form</h2>

          <Button
            css={{
              padding: '$1',
              svg: {
                width: 'fit-content !important',
              },
            }}
            type='button'
            variant='ghost'
            onClick={handleCloseDrawer}
          >
            <CrossIcon />
          </Button>
        </Drawer.Header>

        <form id='form-in-drawer' method='dialog' onSubmit={handleFormSubmit}>
          <h3>Drawer Form</h3>

          <TextField
            label='Keyword'
            name='keyword'
            id='keyword'
            placeholder='Enter anything'
          />
          <label htmlFor='keepValue'>Keep form value: </label>
          <input
            name='keep'
            type='checkbox'
            id='keepValue'
            style={{marginTop: '1rem'}}
          />
        </form>

        <section style={{height: '50vh', marginTop: '5rem'}}>
          <h3
            style={{
              position: 'sticky',
              insetInline: 0,
              top: '-1rem',
              paddingBlock: '1rem',
              marginBlock: 0,
              backgroundColor: 'white',
            }}
          >
            Section 1: Very long content here, scroll down ⏬ for more content
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            molestiae tenetur in, dicta veniam quisquam iste officia deleniti,
            nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa
            quis modi.
          </p>
        </section>

        <section style={{height: '100vh'}}>
          <h3
            style={{
              position: 'sticky',
              insetInline: 0,
              top: '-1rem',
              paddingBlock: '1rem',
              marginBlock: 0,
              backgroundColor: 'white',
            }}
          >
            Section 2: No idea
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            molestiae tenetur in, dicta veniam quisquam iste officia deleniti,
            nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa
            quis modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem quidem omnis architecto aliquam id dicta dolor magnam,
            sapiente, itaque quaerat laboriosam reiciendis placeat tempore animi
            ratione! Neque doloribus vel esse.
          </p>
        </section>

        <Drawer.Footer css={{display: 'flex', gap: '$2'}}>
          <Button
            variant='secondary'
            form='form-in-drawer'
            type='reset'
            onClick={handleCloseDrawer}
          >
            Cancel
          </Button>

          <Button form='form-in-drawer' type='submit'>
            Submit
          </Button>
        </Drawer.Footer>
      </Drawer>

      <h3>2. Position</h3>
      <Row>
        <Button
          type='button'
          leftIcon={<ArrowLeft />}
          onClick={() => handleChangePosition('left')}
        >
          Open on the left
        </Button>

        <Button
          variant='secondary'
          type='button'
          onClick={() => handleChangePosition('bottom')}
        >
          Open on the bottom
        </Button>

        <Button
          type='button'
          rightIcon={<ArrowRight />}
          onClick={() => handleChangePosition('right')}
        >
          Open on the right
        </Button>
      </Row>

      <Drawer
        open={openDrawerPosition}
        onClose={() => setOpenDrawerPosition(false)}
        position={drawerPosition}
      >
        <Drawer.Header>
          <h2>Drawer {drawerPosition || ''}</h2>
        </Drawer.Header>

        <p>Article contents</p>

        <Button type='button' onClick={() => setOpenDrawerPosition(false)}>
          Close Drawer
        </Button>
      </Drawer>
    </>
  )
}
