import React from 'react'
import {Box,Image} from '@chakra-ui/react'
import chart from '../assets/chart.png'
export default function History() {
  return (
    <div>

        <Box
        boxSizing='border-box'
        position='absolute'
        width='846px'
        height='408px'
        left='117px'
        top='1032px'
        background='#FFFFFF'
        border='1px solid rgba(41, 55, 95, 0.2)'
        borderRadius='6px'
        >
            <Image src={chart} />

        </Box>
    </div>
  )
}
