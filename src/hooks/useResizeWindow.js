import {useState, useEffect} from 'react'

const getSizeWindow = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

const useResizeWindow = () => {
  const [windowDim, setWindowDim] = useState(getSizeWindow())

  useEffect(() => {
    const handleResize = () => {
      setWindowDim(getSizeWindow())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDim
}

export default useResizeWindow