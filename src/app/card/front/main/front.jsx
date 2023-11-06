import global from '@standard/global'
import h from '@standard/h'

function component () {
  /**
   * TODO: Depois que padronizar a contrucao do front, variavel
   * heading sera removido
   */
  const content = global.front?.includes('#')
    ? global.front
    : `#${global.front ?? ''}`

  return (
    <m-markdown>
      <template>{content}</template>
    </m-markdown>
  )
}

export default component
