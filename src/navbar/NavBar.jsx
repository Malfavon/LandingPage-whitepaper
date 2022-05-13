import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Flex, Icon, Image, Menu, MenuButton, Spacer } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/SVG/logo.svg'

function NavBar() {
  return (
    <>
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={8} p='6' >
        <Box w='156px' h='auto' ml='8' ><Image src={logo}/></Box>
        <Spacer />
        <Button mr='6' h='55px' variant='outline' borderRadius='none' borderWidth='thick' color='#6A86E2' borderColor='#6A86E2' fontSize='lg'>CONTACT</Button>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button} mr='8' h='55px' variant='outline' borderRadius='none' borderWidth='thick' color='#6A86E2' borderColor='#6A86E2' w='55px'>
                {isOpen ? <CloseIcon boxSize={4} /> : <HamburgerIcon boxSize={4}/> }
              </MenuButton>
            </>
          )}
        </Menu>
    </Flex>
    <Divider />
    </>
  )
}

export default NavBar