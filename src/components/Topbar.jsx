import React from 'react'
import {Box,Text } from '@chakra-ui/react'
export default function Topbar() {
  return (
    <div>
        <Box
          position="absolute"
          // left='104.98%'
          // right='-104.98%'
          top="0%"
          width="100%"
          bottom="87.4%"
          padding="108px"
          background="#203765"
          // transform = 'matrix(-1, 0, 0, 1, 0, 0)'
          // border="1px solid red"
        >
          <Text
            position="absolute"
            left="172px"
            top="40px"
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="100"
            fontSize="30px"
            line-height="135.19%"
            /* identical to box height, or 46px */

            letter-spacing="0.06em"
            color="#FFFFFF"
          >
            Welcome <b>Anil Kumar</b>
          </Text>
          <Text
            position="absolute"
            width="88px"
            height="22px"
            left="172px"
            top="88px"
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="200"
            fontSize="16px"
            line-height="135.19%"
            letter-spacing="0.06em"
            color="#FFFFFF"
            
          >
            Cardiology
          </Text>
        </Box>
    </div>
  )
}
