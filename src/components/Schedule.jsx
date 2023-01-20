import React from 'react'
import {Box,Text, Image} from '@chakra-ui/react'
import question from '../assets/question.png'
import buttonimg from '../assets/buttonimg.png'
import electric from '../assets/electric.png'
import vidoe from '../assets/video.png'
import personicon from '../assets/personicon.png'
import block from '../assets/block.png'
import arrow from '../assets/arrow-right.png'
export default function Schedule() {
  return (
    <div>
        <Box
        boxSizing='border-box'
        position='absolute'
        width='407px'
        height='500px'
        left='41.5%'
        top='435px'
        background='#FFFFFF'
        border='1px solid rgba(41, 55, 95, 0.2)'
        borderRadius='6px'
        >

            <Box
             boxSizing='border-box'
            //  position='absolute'
             width='406px'
             height='56px'
             left='117px'
             top='435px'
             background='#FFFFFF'
             borderRight='1px solid rgba(41, 55, 95, 0.2)'
             borderBottom = '1px solid rgba(41, 55, 95, 0.2)'
             
            >
                <Text
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='700'
                fontSize='18px'
                lineHeight='135.19%'
                letterSpacing='0.06em'
                textTransform='uppercase'
                color='rgba(41, 55, 95, 0.4)'
                position='absolute'
                top="2.5%"
                left="4%"
                >
                Schedule
                </Text>
                <Image position='absolute'
                top="2.5%"
                right="5%" src={question} /> 
            </Box>
            <Box
            boxSizing='border-box'
            position='absolute'
            width='375px'
            height='56px'
            left='16px'
            top='70px'
            background='rgba(238, 238, 241, 0.4)'
            border='1px solid rgba(41, 55, 95, 0.2)'
            borderRadius='6px'
            >
                <Image src={buttonimg} />
            </Box>
            <Text
            position="absolute"
            top="27%"
            left="20px"
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='600'
            fontSize='14px'
            lineHeight='125%'
            color='rgba(41, 55, 95, 0.8)'
            >TODAY  •  MONDAY</Text>
            <Box
             boxSizing='border-box'
             position='absolute'
             width='375px'
             height='40px'
             left='16px'
             top='33%'
            background='rgba(10, 148, 16, 0.04)'
            >

                <Text
                position="absolute"
                left="5%"
                top="20%"
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='600'
                fontSize='12px'
                lineHeight='152.52%'
                color='#008D17'
                >
                9:00 AM - 9:40 AM  •  40 minutes
                </Text>
                <Image position="absolute"
                 textAlign='center'
                left="75%"
                top="30%" src={electric} />
                <Text position="absolute"
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='400'
                fontSize='14px'
                lineHeight='192.2%'
                textAlign='center'
                left="80%"
                top="20%" color='rgba(41, 55, 95, 0.7)'>Anytime</Text>

            </Box>

            <Box
             boxSizing='border-box'
             position='absolute'
             width='375px'
             height='40px'
             left='16px'
             top='42%'
            //  background="red"
            background='rgba(10, 148, 16, 0.04)'
            >
                <Text
                position="absolute"
                left="5%"
                top="20%"
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='600'
                fontSize='12px'
                lineHeight='152.52%'
                color='#008D17'
                >
                3:30 PM - 7:30 PM  •  4 hours
                </Text>
                <Image position="absolute"
                 textAlign='center'
                left="73%"
                top="35%" src={vidoe} />

                <Text position="absolute"
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='400'
                fontSize='14px'
                lineHeight='192.2%'
                /* identical to box height, or 27px */
                
                textAlign='center'
                
                left="80%"
                top="20%" color='rgba(41, 55, 95, 0.7)'>Video</Text>

            </Box>

            <Text
            position="absolute"
            top="53%"
            left="20px"
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='600'
            fontSize='14px'
            lineHeight='125%'
            color='rgba(41, 55, 95, 0.8)'
            >TOMORROW  •  TUESDAY</Text>

        <Box
             boxSizing='border-box'
             position='absolute'
             width='375px'
             height='40px'
             left='16px'
             top='59%'
            background='rgba(10, 148, 16, 0.04)'
            >
                <Text
                position="absolute"
                left="5%"
                top="20%"
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='600'
                fontSize='12px'
                lineHeight='152.52%'
                color='#008D17'
                >
                3:30 PM - 7:30 PM  •  4 hours
                </Text>
                <Image position="absolute"
                 textAlign='center'
                left="73%"
                top="35%" src={personicon} />
                <Text position="absolute"
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='400'
                fontSize='14px'
                lineHeight='192.2%'
                textAlign='center'
                left="80%"
                top="20%" color='rgba(41, 55, 95, 0.7)'>In-person</Text>

            </Box>


            <Box
             boxSizing='border-box'
             position='absolute'
             width='375px'
             height='40px'
             left='16px'
             top='68%'
            background='rgba(10, 148, 16, 0.04)'
            >
                <Text
                position="absolute"
                left="5%"
                top="20%"
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='600'
                fontSize='12px'
                lineHeight='152.52%'
                color='#008D17'
                >
                12:20 PM - 6:30 PM  •  6 hours
                </Text>
                <Image position="absolute"
                 textAlign='center'
                left="73%"
                top="35%" src={electric} />
                <Text position="absolute"
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='400'
                fontSize='14px'
                lineHeight='192.2%'
                textAlign='center'
                left="80%"
                top="20%" color='rgba(41, 55, 95, 0.7)'>Anytime</Text>

            </Box>

            <Box
             boxSizing='border-box'
             position='absolute'
             width='375px'
             height='40px'
             left='16px'
             top='77%'
            background='rgba(252, 105, 100, 0.08)'
            >
                <Text
                position="absolute"
                left="5%"
                top="20%"
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='600'
                fontSize='12px'
                lineHeight='152.52%'
                color='#FC6964'
                >
                6:30 PM - 9:00 PM  •  2 hours 30 minutes
                </Text>
                <Image position="absolute"
                 textAlign='center'
                left="73%"
                top="35%" src={block} />
                <Text position="absolute"
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='400'
                fontSize='14px'
                lineHeight='192.2%'
                textAlign='center'
                left="80%"
                top="20%" color='#FC6964'>Block</Text>

            </Box>

            {/* <Text
            position="absolute"
            top="88%"
            left="20px"
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='600'
            fontSize='14px'
            lineHeight='125%'
            color='rgba(41, 55, 95, 0.8)'
            >WEDNESDAY</Text> */}


<Box
            padding="20px"
            // background="red"
            position="absolute"
            width="80%"
            left="40px"
            top="87%"
            borderTop="1px solid rgba(41, 55, 95, 0.2)"
            height="50px"
        >
            <Text
            
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='14px'
            lineHeight='17px'
            display='flex'
            alignItems='center'
            color='#FC6964'
            >View all Appointments</Text>
            <Image
                position='absolute'
                left='53%'
                top="22px"
            src={arrow} />

        </Box>


        </Box>
    </div>
  )
}
