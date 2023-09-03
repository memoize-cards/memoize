import Box from './box'
import h from '@standard/h'
import text from '@elements/text'
import translate from './translate'

function component (total) {
  return (
    <Box>
      <text.Span master dark highlight sm bold>{total.value}</text.Span>
      <text.Span master xxxs>{translate.label}</text.Span>
    </Box>
  )
}

export default component
