import React, {Key} from 'react'
import {DragAndDropList} from '@comfortdelgro/react-compass'

export const DragAndDrop: React.FC = () => {
  const [arr, setArr] = React.useState<Key[]>(['red', 'green', 'blue'])
  return (
    <DragAndDropList onReorderByKeys={(a) => setArr(a)}>
      {arr.map((a) => (
        <DragAndDropList.Item key={a}>
          <div>{a}</div>
        </DragAndDropList.Item>
      ))}
    </DragAndDropList>
  )
}
