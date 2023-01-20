import React from 'react'
import {Box , Image, Text} from '@chakra-ui/react'
import topbar1 from '../assets/Paper.png'
import input1 from '../assets/input1.png'
import input2 from '../assets/input2.png'

export default function TotalEarn() {
  return (
    <div>

        <Box
        position='absolute'
        width='851px'
        height='101px'
        left ='116px'
        top='168px'
        // border='1px solid red'
        background='#FFFFFF'
        boxShadow='0px 4px 8px rgba(0, 0, 0, 0.1)'
        borderRadius='6px'
        >

            <Image src={topbar1}
                position='absolute'
                left='20px'
                top='20px'                
            />
            <Text
              position='absolute'
              left='60px'
              top='20px'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='14px'
            lineHeight='135.19%'
            color='#29375F'
            
            >
            Total Earnings

            </Text>

            <Text
              position='absolute'
              left='60px'
              top='50px'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='600'
            fontSize='24px'
            line-height='197.7%'
            color='#29375F'
            
            >
            ₹4000

            </Text>

            <Image src={input1}
             position='absolute'
             left='75%'
             top='20%'
           fontFamily='Inter'
           fontStyle='normal'
           fontWeight='600'
           fontSize='24px'
           line-height='197.7%'
           color='#29375F'
           
            />
            <Image src={input2} 
             position='absolute'
             left='45%'
             top='20%'
           fontFamily='Inter'
           fontStyle='normal'
           fontWeight='600'
           fontSize='24px'
           line-height='197.7%'
           color='#29375F'
           
            />


        </Box>

        <Box
        boxSizing='border-box'
        zIndex='-1'
        position='absolute'
        width='851px'
        height='181px'
        left='116px'
        top='222px'
        background='#F0F6FE'
        border='1px solid rgba(41, 55, 95, 0.1)'
        border-radius='6px'
        >

          <Text
            position='absolute'
            left='10%'
            top='40%'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='14px'
            lineHeight='135.19%'
            color='#29375F'
          >Appointments</Text>
           <Text
            position='absolute'
            left='10%'
            top='60%'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='24px'
            lineHeight='29px'
            color='#29375F'
          >54</Text>

<Text
            position='absolute'
            left='30%'
            top='40%'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='14px'
            lineHeight='135.19%'
            color='#29375F'
          >EMR Finalised</Text>
           <Text
            position='absolute'
            left='30%'
            top='60%'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='24px'
            lineHeight='29px'
            color='#29375F'
          >47</Text>

<Text
            position='absolute'
            left='50%'
            top='40%'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='14px'
            lineHeight='135.19%'
            color='#29375F'
          >Patient Registrations</Text>
           <Text
            position='absolute'
            left='50%'
            top='60%'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='24px'
            lineHeight='29px'
            color='#29375F'
          >120</Text>

<Text
            position='absolute'
            left='75%'
            top='40%'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='14px'
            lineHeight='135.19%'
            color='#29375F'
          >KR4ALL Visits</Text>
           <Text
            position='absolute'
            left='75%'
            top='60%'
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='24px'
            lineHeight='29px'
            color='#29375F'
          >30</Text>


        </Box>
    </div>
  )
}
