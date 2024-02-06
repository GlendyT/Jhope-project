// import styles from './Botones.module.css'

import "./botones.css"


export default function Botones({ htmlToImageConvert, handleLogout, notify }) {

  const handleDownload = () => {
    htmlToImageConvert()
    // notify()
  }
  return (
    <div className='btnContainer'>
      <button className='button1' onClick={handleDownload}>Download</button>
      <button className='button' onClick={handleLogout}>Log Out</button>
    </div>
  )
}