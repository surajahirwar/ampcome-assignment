import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import question from "../assets/question.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person from "../assets/person.png";
import finalize from "../assets/Unpaid.png";
import profile3 from "../assets/profile3.png";
import finalize2 from "../assets/Unpaid2.png";
import arrow from '../assets/arrow-right.png'

export default function AppointMents() {
  return (
    <div>
      <Box
        boxSizing="border-box"
        position="absolute"
        width="407px"
        height="500px"
        left="117px"
        top="435px"
        background="#FFFFFF"
        border="1px solid rgba(41, 55, 95, 0.2)"
        borderRadius="6px"
      >
        <Box
          boxSizing="border-box"
          width="406px"
          height="56px"
          left="117px"
          top="435px"
          background="#FFFFFF"
          borderRight="1px solid rgba(41, 55, 95, 0.2)"
          borderBottom="1px solid rgba(41, 55, 95, 0.2)"
        >
          <Text
            font-family="Inter"
            fontStyle="normal"
            fontWeight="700"
            fontSize="18px"
            lineHeight="135.19%"
            letterSpacing="0.06em"
            textTransform="uppercase"
            color="rgba(41, 55, 95, 0.4)"
            position="absolute"
            top="2.5%"
            left="4%"
          >
            Appointments
          </Text>
          <Image position="absolute" top="2.5%" right="5%" src={question} />
        </Box>

        <Box>
          <Text
            font-family="Inter"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="17px"
            color="rgba(41, 55, 95, 0.6)"
            position="relative"
            top="10px"
            left="10px"
          >
            Waiting Queue (6)
          </Text>

          <Text
            font-family="Inter"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="17px"
            display="flex"
            alignItems="center"
            position="relative"
            top="20%"
            left="70%"
            color="#FC6964"
          >
            View Queue
          </Text>
        </Box>

        <Box>
          <Image position="relative" top="10px" left="10px" src={profile1} />
          <Text
            position="absolute"
            top="19%"
            left="20%"
            font-family="Inter"
            fontStyle="normal"
            fontWeight="500"
            fontSize="16px"
            line-height="19px"
            color="#29375F"
          >
            Prajeesh
          </Text>
          <Image position="absolute" top="24%" left="20%" src={person} />
          <Image position="absolute" top="20%" left="60%" src={finalize} />
        </Box>

        <Box>
          <Image position="relative" top="40px" left="10px" src={profile2} />
          <Text
            position="absolute"
            top="34%"
            left="20%"
            font-family="Inter"
            fontStyle="normal"
            fontWeight="500"
            fontSize="16px"
            line-height="19px"
            color="#29375F"
          >
            Risha Mahin
          </Text>
          <Image position="absolute" top="39%" left="20%" src={person2} />
          <Image position="absolute" top="35%" left="60%" src={finalize2} />
        </Box>

        <Box>
          <Image position="relative" top="70px" left="10px" src={profile3} />
          <Text
            position="absolute"
            top="50%"
            left="20%"
            font-family="Inter"
            fontStyle="normal"
            fontWeight="500"
            fontSize="16px"
            line-height="19px"
            color="#29375F"
          >
            Riju K
          </Text>
          <Image position="absolute" top="55%" left="20%" src={person3} />
          <Image position="absolute" top="51%" left="60%" src={finalize2} />
        </Box>

        <Box>
          <Image position="relative" top="100px" left="10px" src={profile3} />
          <Text
            position="absolute"
            top="65%"
            left="20%"
            font-family="Inter"
            fontStyle="normal"
            fontWeight="500"
            fontSize="16px"
            line-height="19px"
            color="#29375F"
          >
            Setia S
          </Text>
          <Image position="absolute" top="70%" left="20%" src={person3} />
          <Image position="absolute" top="66%" left="60%" src={finalize2} />
        </Box>

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
            
            font-family='Inter'
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
  );
}
