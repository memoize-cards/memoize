import Box from '@app/deck/stats/box'
import h from '@standard/h'
import Label from '@app/deck/stats/label'
import translate from './translate'
import Value from '@app/deck/stats/value'

function component (relearn) {
  return (
    <Box>
      <Value>{relearn.value}</Value>
      <Label>{translate.label}</Label>
    </Box>
  )
}

export default component
