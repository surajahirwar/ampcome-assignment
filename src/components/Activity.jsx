import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import hospital from "../assets/hospital.svg";
import activity1 from "../assets/activity1.png";
import activity2 from "../assets/activity2.png";
import activity3 from "../assets/activity3.png";
import activity4 from "../assets/activity4.png";
import activity5 from "../assets/activity5.png";
import activity6 from "../assets/activity6.png";

export default function Activity() {
  return (
    <div>
      <Box
        boxSizing="border-box"
        position="absolute"
        width="330px"
        height="616px"
        left="999px"
        top="42px"
        background="#FFFFFF"
        border="1px solid rgba(41, 55, 95, 0.2)"
        borderRadius="6px"
      >
        <Image
          src={hospital}
          borderRadius="6px"
          boxSizing="border-box"
          position="absolute"
          width="149px"
          height="73px"
          left="30px"
          top="10px"
        />

        <Image
          src={activity1}
          position="absolute"
          //  width='149px'
          //  height='73px'
          left="30px"
          top="20%"
        />
        <Text
          position="absolute"
          //  width='149px'
          //  height='73px'
          left="20%"
          top="20%"
          font-family="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize="18px"
          lineHeight="135.19%"
          /* or 24px */

          letterSpacing="0.06em"
          textTransform="uppercase"
          color="rgba(41, 55, 95, 0.4)"
        >
          activity
        </Text>

        <Box>
          <Image
            src={activity2}
            position="absolute"
            left="20px"
            top="30%"
          />
          <Text
            position="absolute"
            left="25%"
            top="30%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"

            color="rgba(41, 55, 95, 0.8)"
          >
            User Activity
          </Text>
          <Text
            position="absolute"
            left="55%"
            top="30%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"
            color="rgba(41, 55, 95, 0.5)"
          >
            12:32
          </Text>
          <Text
            position="absolute"
            left="25%"
            top="34%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"
            color="rgba(41, 55, 95, 0.7)"
          >
            Vivek Kumar accepted the invitation
          </Text>
        </Box>


        <Box>
          <Image
            src={activity2}
            position="absolute"
            left="20px"
            top="40%"
          />
          <Text
            position="absolute"
            left="25%"
            top="40%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"

            color="rgba(41, 55, 95, 0.8)"
          >
            User Activity
          </Text>
          <Text
            position="absolute"
            left="55%"
            top="40%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"
            color="rgba(41, 55, 95, 0.5)"
          >
            8:16
          </Text>
          <Text
            position="absolute"
            left="25%"
            top="44%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"
            color="rgba(41, 55, 95, 0.7)"
          >
            Ritu M, blocked their calendar for 15th September
          </Text>
        </Box>


        <Box>
          <Image
            src={activity4}
            position="absolute"
            left="20px"
            top="55%"
          />
          <Text
            position="absolute"
            left="25%"
            top="55%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"

            color="rgba(41, 55, 95, 0.8)"
          >
            Summary
          </Text>
          <Text
            position="absolute"
            left="55%"
            top="55%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"
            color="rgba(41, 55, 95, 0.5)"
          >
            8:00
          </Text>
          <Text
            position="absolute"
            left="25%"
            top="60%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"
            color="rgba(41, 55, 95, 0.7)"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt
          </Text>
        </Box>

        <Box>
          <Image
            src={activity5}
            position="absolute"
            left="20px"
            top="75%"
          />
          <Text     
            position="absolute"
            left="25%"
            top="75%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"

            color="rgba(41, 55, 95, 0.8)"
          >
            Application Update
          </Text>
          <Text
            position="absolute"
            left="70%"
            top="75%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"
            color="rgba(41, 55, 95, 0.5)"
          >
            yesterday
          </Text>
          <Text
            position="absolute"
            left="25%"
            top="80%"
            font-family="Roboto"
            fontStyle="normal"
            fontWeight="500"
            fontSize="14px"
            lineHeight="165.2%"
            color="rgba(41, 55, 95, 0.7)"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt
          </Text>
        </Box>
        
      </Box>
    </div>
  );
}
