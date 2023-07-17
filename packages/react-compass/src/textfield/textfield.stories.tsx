import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {StoryDecorator} from '@ladle/react'
import React from 'react'
import {Column, Row} from '../utils/components'
import Textfield from './index'

const Select = (
  <input
    value={'+64'}
    onChange={() => {
      /* do nothing */
    }}
    style={{
      fontSize: '0.8em',
      lineHeight: '1em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      appearance: 'none',
      border: 'none',
      width: '3rem',
    }}
  />
)

export const Variants: React.FC = () => (
  <Column>
    <Row>
      <Textfield
        placeholder='Enter your name'
        isErrored
        helperText='my helper text'
        errorMessage='my error message'
        // onChange={(e) => console.log('onChange', e)}
        // onChangeEvent={(e) => console.log('onChangeEvent', e)}
        className='my-class'
        onKeyDown={(e) => console.log('onKeyDownTest', e)}
      />
    </Row>

    <h3>With Label</h3>
    <Row>
      <Textfield
        label={
          <>
            Name <FontAwesomeIcon icon={faBug} />
          </>
        }
        placeholder='Enter your name'
        isRequired
      />
    </Row>

    <h3>With Helper Text</h3>
    <Row>
      <Textfield
        label='Name'
        placeholder='Enter your name'
        helperText='Helper Text'
      />
    </Row>

    <h3>Error</h3>
    <Row>
      <Textfield
        isErrored
        label='Name'
        placeholder='Enter your name'
        helperText='This is helpers text'
        errorMessage='Errror'
      />
    </Row>

    <h3>With Icons</h3>
    <Row>
      <Textfield
        label='Name'
        leftIcon={<FontAwesomeIcon icon={faBug} />}
        placeholder='Enter your name'
      />
      <Textfield
        label='Name'
        rightIcon={<FontAwesomeIcon icon={faBug} />}
        placeholder='Enter your name'
      />
      <Textfield
        label='Name'
        leftIcon={<FontAwesomeIcon icon={faBug} />}
        rightIcon={<FontAwesomeIcon icon={faBug} />}
        placeholder='Enter your name'
      />
    </Row>

    <h3>Disabled</h3>
    <Row>
      <Textfield label='Name' placeholder='Enter your name' isDisabled />
      <Textfield
        label='Name'
        leftIcon={<FontAwesomeIcon icon={faBug} />}
        placeholder='Enter your name'
        isDisabled
      />
      <Textfield
        label='Name'
        rightIcon={<FontAwesomeIcon icon={faBug} />}
        placeholder='Enter your name'
        isDisabled
      />
      <Textfield
        label='Name'
        leftIcon={<FontAwesomeIcon icon={faBug} />}
        rightIcon={<FontAwesomeIcon icon={faBug} />}
        placeholder='Enter your name'
        isDisabled
      />
    </Row>
    <h3>Prefix</h3>
    <Row>
      <Textfield
        label='Name'
        prefix={Select}
        placeholder='Enter your phone number'
      />
    </Row>
    <h3>Password</h3>
    <Textfield
      css={{width: '16rem'}}
      label='Password'
      placeholder='Enter your password'
      helperText='Your password should contain at least 18 characters.'
      password={true}
    />
  </Column>
)

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: #eee; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}