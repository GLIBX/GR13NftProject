import React from "react";
import { Stack, Box, Button, Text, Image, Heading, Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';

import WalletIcon from '../../assets/wallet-icon.png'
import CollectionIcon from '../../assets/collection-icon.png'
import ImageIcon from '../../assets/image-icon.png'
import SaleIcon from '../../assets/sell-icon.png'

const CreateNFTSection = () => {
    return (
        <Stack px={20} py={10} justify={'center'}>
            <Box textAlign={'center'} h={'auto'} w={"90vw"} bg={'white'} borderRadius={'15px'} p={'2em'} py={'5em'}>
                <Stack direction={'row'} textAlign={'left'}>

                    <Box width={'40vw'}>
                        <Stack direction={'column'}>
                            <Text fontSize={'1.5em'} color={'#575FCC'}>Create NFTs</Text>
                            <Heading py={'0.5em'}>
                                Create & sell your NFTs
                            </Heading>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vel tortor, turpis libero. Faucibus nulla neque elementum eget volutpat quam fermentum. Justo, quam scelerisque orci.</p>
                            <br />
                            <br />
                            <Button variant="outline" w={'10em'} size={'sm'}>View Guide &nbsp;<ArrowForwardIcon /></Button>
                        </Stack>
                    </Box>

                    <Spacer />

                    <Box width={'40vw'}>
                        <Stack direction={'column'}>
                            <Stack direction={'row'} spacing={5} p={2}>
                                <Box justifyContent={'left'} w={'20vw'} p={'1em'}>
                                    <Image src={WalletIcon} alt="wallet icon" />
                                    <Heading py={2} size={'md'} color={'#575FCC'}>Set up your wallet</Heading>
                                    <p>Once you’ve set up your wallet of choice connect it to <a href="https://gr-13-nft-project-4quqcrf76-glibx.vercel.app/" color='#575FCC'> MintWave.</a></p>
                                </Box>
                                <Box justifyContent={'left'} w={'20vw'} p={'1em'}>
                                    <Image src={CollectionIcon} alt="wallet icon" />
                                    <Heading py={2} size={'md'} color={'#575FCC'}>Create your collection</Heading>
                                    <p>Click <a href="https://gr-13-nft-project-4quqcrf76-glibx.vercel.app/" color='#575FCC'>Create</a> and set up your collection and customize your profile</p>
                                </Box>
                            </Stack>
                            <Stack direction={'row'} spacing={5} p={2}>
                                <Box justifyContent={'left'} w={'20vw'} p={'1em'}>
                                    <Image src={ImageIcon} alt="wallet icon" />
                                    <Heading py={2} size={'md'} color={'#575FCC'}>Add your NFTs</Heading>
                                    <p>Upload  your work (image, video, or 3D art) and other options.</p>
                                </Box>
                                <Box justifyContent={'left'} w={'20vw'} p={'1em'}>
                                    <Image src={SaleIcon} alt="wallet icon" />
                                    <Heading py={2} size={'md'} color={'#575FCC'}>List item for sale</Heading>
                                    <p>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    )
};

export default CreateNFTSection;