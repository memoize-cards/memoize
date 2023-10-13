import Box from './box'
import h from '@standard/h'
import Label from './label'
import Value from './value'

function component (target) {
  return (
    <Box>
      <Value>{target.value}</Value>
      <Label>{target.label}</Label>
    </Box>
  )
}

export default component
