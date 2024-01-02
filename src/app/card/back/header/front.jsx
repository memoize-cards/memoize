import global from '@standard/global'
import h from '@standard/h'

function component () {
  const content = (global.front ?? '')

  return (
    <m-markdown>
      <template>{content}</template>
    </m-markdown>
  )
}

export default component
