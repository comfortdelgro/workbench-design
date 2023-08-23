// ImageViewer.tsx
import Button from '@comfortdelgro/react-compass/button'
import ImageViewer from '@comfortdelgro/react-compass/image-viewer'
import React from 'react'

const images = Array.from(Array(8).keys()).map((index) => {
  return {
    src: `https://picsum.photos/id/${index + 1}/5000/3333`,
    alt: `Image ${index + 1}`,
  }
})

const ImageViewerDemo: React.FC = () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <>
      <Button variant='ghost' onClick={() => setVisible(true)}>
        Open image viewer
      </Button>
      <ImageViewer
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        images={images}
        onMaskClick={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

export default ImageViewerDemo