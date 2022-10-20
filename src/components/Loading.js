import { Box, CircularProgress } from '@material-ui/core'
import React from 'react'

function Loading() {
  return (
    <Box display="flex" width="100%" height="100vh" justifyContent="center" alignItems="center" >
        <CircularProgress />
    </Box>
  )
}

export default Loading