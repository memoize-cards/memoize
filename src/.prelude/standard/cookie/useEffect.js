import echo from '@standard/echo'

function useEffect (functionRef, keys) {
  keys?.length
    ? keys.forEach((key) => echo.on(`cookie:${key}`, functionRef))
    : echo.on('cookie:', functionRef)
}

export default useEffect
