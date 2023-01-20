import React from "react";
import {
  Flex,
  Box,
  Spacer,
  Text,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import left1 from "../assets/left1.png";
import left2 from "../assets/left2.png";
import left3 from "../assets/left3.png";
import left4 from "../assets/left4.png";
import left5 from "../assets/left5.png";
import left6 from "../assets/left6.png";
import left7 from "../assets/left7.png";
import Topbar from "./Topbar";
import TotalEarn from "./TotalEarn";
import Activity from "./Activity";
import AppointMents from "./AppointMents";
import Schedule from "./Schedule";
import History from "./History";

export default function Doctor_dashboard() {
  return (
    <div>
      <Box>
        <Box
          position="absolute"
          width="77px"
          height="1726px"
          left="0px"
          top="0px"
          background="#203765"
        >
          <Image
            src={left1}
            position="absolute"
            left="33.87%"
            right="96.61%"
            top="13.31%"
            bottom="85.39%"
            // background='#FFFFFF'
          />

          <Image
            src={left2}
            position="absolute"
            left="33.87%"
            right="96.61%"
            top="17.31%"
            bottom="85.39%"
            // background='#FFFFFF'
          />

          <Image
            src={left3}
            position="absolute"
            left="33.87%"
            right="96.61%"
            top="21.31%"
            bottom="85.39%"
            // background='#FFFFFF'
          />

          <Image
            src={left4}
            position="absolute"
            left="33.87%"
            right="96.61%"
            top="25.31%"
            bottom="85.39%"
            // background='#FFFFFF'
          />

          <Image
            src={left5}
            position="absolute"
            left="33.87%"
            right="96.61%"
            top="29.31%"
            bottom="85.39%"
            // background='#FFFFFF'
          />
          <Image
            src={left6}
            position="absolute"
            left="33.87%"
            right="96.61%"
            top="33.31%"
            bottom="85.39%"
            // background='#FFFFFF'
          />
          <Image
            src={left7}
            position="absolute"
            left="20.87%"
            right="96.61%"
            top="45.31%"
            bottom="85.39%"
            // background='#FFFFFF'
          />
        </Box>
        <Topbar />
        <TotalEarn />
        <Activity />
        <AppointMents/> 
        <Schedule />
        <History />

        
      </Box>
    </div>
  );
}
