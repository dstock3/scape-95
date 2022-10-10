import React, { useEffect } from 'react'
import loadingScreen from '../../assets/system/startup.gif'
import '../../style/startup.css'

const Loading = ({startup, setStartup}) => {
  useEffect(()=> {
    if (startup === 1) {
      setTimeout(() => {
        setStartup("start")
      }, "5000")
    }
  }, [startup])

  return (
    <div className="loading-screen">
      <img className="loading-img" src={loadingScreen} alt="loading screen"></img>
    </div>
  )
}

export default Loading