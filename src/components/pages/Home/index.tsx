import React from 'react'
import PaperInput from '../../UI/organisms/PaperInput'
import PaperReceiver from '../../UI/organisms/PaperReceiver'
import PaperViewer from '../../UI/organisms/PaperViewer/PaperViewer'


function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <PaperReceiver />
      <PaperInput />
      <PaperViewer />
    </div>
  )
}

export default HomePage