import {
    Box,
    Container,
    Grid,
    Heading,
    HStack,
    SimpleGrid,
    Text,
    Stack,
} from "@chakra-ui/layout";
import {
    PhoneIcon,
    EmailIcon,
    Search2Icon,
    DownloadIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/agnelo.png";

export default function Footer() {
    return (
        <Box bg={"gray.100"}>
            <Container maxW={1050} fontFamily={"Roboto"}>
                <SimpleGrid
                    templateColumns={{
                        base: "repeat(1,1fr)",
                        md: "repeat(2,1fr)",
                        lg: "repeat(4,1fr)",
                    }}
                    py="50px"
                    gap={"20px"}
                >
                    <Box color={"green.500"}>
                        <Heading pb="10px" size="md">
                            ABOUT US
                        </Heading>
                        <Image
                            src={logo}
                            alt="All Sports Logo"
                            width={100}
                            height={100}
                        />
                        <Text color={"grey"} pr="30px" pt="10px">
                            Push your limits in style.
                        </Text>
                    </Box>
                    <Box color={"green.500"}>
                        <Heading pb="10px" size="md">
                        CUSTOMER SUPPORT
                        </Heading>
                        <Grid color={"grey"}>
                            <Link href="/">Track your order</Link>
                            <Link href="/syllabus">How to buy</Link>
                            <Link href="/courses">Shipping options</Link>
                            <Link href="/about">Right of withdrawal</Link>
                            <Link href="/contact">Payment methods</Link>
                        </Grid>
                    </Box>
                    <Box color={"green.500"}>
                        <Heading pb="10px" size="md">
                            FOLLOW US
                        </Heading>
                        <Grid color={"grey"}>
                            <Link href="">Facebook</Link>
                            <Link href="">Linkedin</Link>
                            <Link href="">Twitter</Link>
                            <Link href="">Instagram</Link>
                        </Grid>
                    </Box>
                    <Box color={"green.500"}>
                        <Heading pb="10px" size="md">
                            CONTACT US
                        </Heading>
                        <Stack spacing={2}>
                            <Text>
                                <EmailIcon mr={2} />
                                allsports@sports.com
                            </Text>
                            <Text>
                                <PhoneIcon mr={2} />
                                +351 291 143 852
                            </Text>
                        </Stack>
                    </Box>
                </SimpleGrid>
                <Box pb={4} textAlign="center" color={"green.500"}>
                    © 2023 AllSports. All rights reserved.
                </Box>
            </Container>
        </Box>
    );
}
