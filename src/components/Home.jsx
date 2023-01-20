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
  Button
} from "@chakra-ui/react";
import React from "react";
import {Link } from 'react-router-dom'
import Home_img from "../assets/home.svg";

export default function Home() {


  return (
    <div>
      <Box 
        position="absolute"
        height="100vh"
      >
        <Box
          position="absolute"
          width="775px"
          height="900px"
          left="0px"
          top="0px"
          bg="#F0F4FC"
        >
          <Text
            position="absolute"
            width="292px"
            height="30px"
            left="239px"
            top="141px"
            fontFamily="Montserrat"
            fontWeight="700"
            fontSize="24px"
            line-height="125%"
            text-align="center"
            color="#203765"
          >
            Welcome to App Name
          </Text>
          <Text
            position="absolute"
            width="471px"
            height="22px"
            left="149px"
            top="196px"
            fontFamily="Montserrat"
            fontStyle="normal"
            fontWeight="400"
            fontSize="14px"
            line-height="22px"
            text-align="center"
            color="rgba(32, 55, 101, 0.8)"
          >
            Get ahead of the curve. Join the next generation of health heroes.
          </Text>
          <Image
            position="absolute"
            width="528px"
            height="332px"
            left="135px"
            top="285px"
            src={Home_img}
          />
        </Box>
        <Spacer />
        <Box
          position="absolute"
          width="294px"
          height="316px"
          left="960px"
          top="292px"
          // border="2px solid red"
        >
          <Text
            // position='absolute'
            width="249px"
            height="28px"
            // left='960px'
            // top='292px'
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="600"
            fontSize="22px"
            line-height="125%"
            color="#29375F"
            mb="10px"
          >
            Sign-in to your account
          </Text>

          <Input width="294px" mb="10px" placeholder="Username" size="md" />

          <Input width="294px" mb="10px" placeholder="Password" size="md" />
          <InputGroup size="md">
            <Input width="294px" mb="20px" placeholder="Select Unit Name" />
            <InputRightAddon children="v" />
          </InputGroup>
          
        <Button
        width="294px"
        mb="20px"
        background="#FC6964"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="700"
        fontSize="16px"
        line-height="19px"
        text-align="center"
        color="#FFFFFF"
        border-radius="50%"
        placeholder="Username"
        size="md"
        type="button"
        ><Link to="/dash">Sign In</Link></Button>
        </Box>
        </Box>
     
    </div>
  );
}
