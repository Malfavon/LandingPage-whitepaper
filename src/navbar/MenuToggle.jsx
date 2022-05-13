import { Box } from '@chakra-ui/react'
import React from 'react'

function MenuToggle({ toggle, isOpen }) {
  return (
    <Box display={{ base: "block", md: "none"}} onClick={toggle}>
        
    </Box>
  )
}

export default MenuToggle