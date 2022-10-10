import React, { useEffect } from 'react'
import loadingScreen from '../../assets/system/startup.gif'
import '../../style/startup.css'

const Loading = ({setStartup}) => {
  
  useEffect(()=> {
      setTimeout(() => {
        setStartup("start")
      }, "5000")
  }, [])

  return (
    <div className="loading-screen">
      <img className="loading-img" src={loadingScreen} alt="loading screen"></img>
    </div>
  )
}

export default Loading