import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import BannerGigantes from './assets/BANNERS_GIGANTES.png'


function Dashboard() {
  return (
    <Box w='100%' h='738px' mt='10' mb='10'>
        <Image src={BannerGigantes} />
        <Box></Box>

    </Box>
  )
}

export default Dashboard