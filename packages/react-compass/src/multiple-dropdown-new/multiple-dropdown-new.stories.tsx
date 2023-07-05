import React from 'react'
import MultipleDropdown from './'

export const Default: React.FC = () => {
  return (
    <MultipleDropdown>
      <MultipleDropdown.Item value={1}>Item 1</MultipleDropdown.Item>
      <MultipleDropdown.Item value={2}>Item 2</MultipleDropdown.Item>
      <MultipleDropdown.Item value={3}>Item 3</MultipleDropdown.Item>
      <MultipleDropdown.Item value={11}>Item 11</MultipleDropdown.Item>
      <MultipleDropdown.Item value={22}>Item 22</MultipleDropdown.Item>
      <MultipleDropdown.Item value={33}>Item 33</MultipleDropdown.Item>
      <MultipleDropdown.Item value={111}>Item 111</MultipleDropdown.Item>
      <MultipleDropdown.Item value={222}>Item 222</MultipleDropdown.Item>
      <MultipleDropdown.Item value={333}>Item 333</MultipleDropdown.Item>
    </MultipleDropdown>
  )
}
