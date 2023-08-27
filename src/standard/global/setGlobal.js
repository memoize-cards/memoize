import channel from './channel'
import echo from '@standard/echo'
import global from './global'

function setGlobal (data) {
  Object.assign(global, data)
  Object.keys(data).forEach((key) => echo.emit(`${channel}.${key}`, global[key]))
  echo.emit(channel, global)
}

export default setGlobal
