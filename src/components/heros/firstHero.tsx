import React from "react";
import { Box, Stack, Heading, AvatarGroup, Avatar, Button, Text, Image, Spacer } from '@chakra-ui/react';
import Logo from '../../assets/logo.png'

const HeroOneSection = () => {
    return (
        <Box textAlign="left" fontSize="xl" minH="50vh" minW="100vw" p={20} pt={10}>
            <Stack direction="row">
                    <Box>
                        <Stack direction='column' spacing={5}>
                            <Text fontSize={'1.5em'} color={'#575FCC'}>NFT MARKETPLACE</Text>
                            <Heading fontSize={'5em'}>Discover The Best</Heading>
                            <Heading fontSize={'5em'}>Digital Art and</Heading>
                            <Stack direction={'row'}>
                                <Heading fontSize={'5em'}>Collect</Heading>
                                <Heading fontSize={'5em'} color={'#575FCC'}>&nbsp;NFTs.</Heading>
                            </Stack>
                            <Stack direction={'row'}>
                                <Text>Real time digital asset tracking to help you to navigate</Text>
                                <Text color={'#575FCC'}>NFT</Text>
                                <Text>markets with  transparency and confidence.</Text>
                            </Stack>
                            <Stack direction={'row'} spacing={10}>
                                <Button bg={'#575FCC'} size={'lg'} px={8} color="#fff">Explore Now</Button>
                                
                                <Button bg={'#000'} size={'lg'} px={8} color="#fff">Learn More</Button>
                            </Stack>
                            <br></br>

                            <Text>Sponsored by: <Image src={Logo} w={'8em'} h={'3em'}/></Text>
                        </Stack>
                    </Box>

                    <Spacer />

                    <Box p={10} pt={0}>
                        <Box bg="#000" borderRadius={'40px'} h={'60vh'} w={'30vw'} display="block" alignItems="center" justifyContent="space-between" p={5}>
                            <Box bg="orange" borderRadius={'40px'} h={'45vh'} p={5}>
                                <AvatarGroup size='md' max={2}>
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                </AvatarGroup>

                            </Box>

                            <Stack direction={'row'} color="#FFF" p={10}>
                                <Stack direction={'column'}>
                                    <p>Current bid:</p>
                                    <Stack direction={'row'}>
                                        <Text color={'#575FCC'} fontSize={'2xl'} fontWeight={700}>2.08ETH</Text>
                                        <Text fontSize={'2xl'} fontWeight={700}>($13,564) </Text>
                                    </Stack>
                                </Stack>

                                <Spacer />

                                <Button bg={'#575FCC'} size={'lg'} borderRadius={'20px'} px={10} py={8} color="#fff">Bid Now</Button>
                            </Stack>
                        </Box>
                    </Box>
            </Stack>
        </Box>
    )
};


export default HeroOneSection;