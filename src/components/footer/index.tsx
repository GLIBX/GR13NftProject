import React from "react";
import { Link } from "@chakra-ui/react";
import { Stack, Spacer, Text, Heading } from "@chakra-ui/react";

const FooterSection: React.FC = () => {
    return (
        <Stack direction={'column'} h={'60vh'} bg={'white'} p={20} textAlign={'left'}>
            <Stack direction={'row'} h={'50vh'}>
                <Stack direction={'column'} w={'30vw'}>
                    <Heading fontSize="xl" pt={2} as={Link} to="/">MintWave.</Heading>
                    <Text fontSize={'sm'}>Real time digital asset tracking to help you to navigate NFT
markets with  transparency and confidence.</Text>
                </Stack>

                <Spacer />

                <Spacer />

                <Stack direction={'column'} >
                    <Heading fontSize="xl" pt={2} as={Link} to="/">Marketplaces</Heading>
                    <Text fontSize={'sm'} as={Link} to="/explore-all">All Collections</Text>
                    <Text fontSize={'sm'} as={Link} to="/explore-all">Ethereum Network</Text>
                    <Text fontSize={'sm'} as={Link} to="/explore-all">Matic Network</Text>
                    <Text fontSize={'sm'} as={Link} to="/explore-all">Moonbeam Network</Text>
                    <Text fontSize={'sm'} as={Link} to="/explore-all">Fantom Network</Text>
                    <Text fontSize={'sm'} as={Link} to="/explore-all">Arbitrum Network</Text>
                    <Text fontSize={'sm'} as={Link} to="/explore-all">Astar Shiden Network</Text>
                </Stack>

                <Spacer />

                <Stack direction={'column'} >
                    <Heading fontSize="xl" pt={2} as={Link} to="/">My Account</Heading>
                    <Text fontSize={'sm'} as={Link} to="/">Profile</Text>
                    <Text fontSize={'sm'} as={Link} to="/">Favourites</Text>
                    <Text fontSize={'sm'} as={Link} to="/">Watchlist</Text>
                    <Text fontSize={'sm'} as={Link} to="/">My Collection</Text>
                    <Text fontSize={'sm'} as={Link} to="/">Settings</Text>

                </Stack>

                <Spacer />

                <Stack direction={'column'} >
                    <Heading fontSize="xl" pt={2} as={Link} to="/">Resources</Heading>
                    <Text fontSize={'sm'}>Help Center</Text>
                    <Text fontSize={'sm'}>Platform Status</Text>
                    <Text fontSize={'sm'}>Rankings</Text>
                    <Text fontSize={'sm'}>Blog</Text>
                    <Text fontSize={'sm'}>Docs</Text>
                    <Text fontSize={'sm'}>Newsletter</Text>
                </Stack>

                <Spacer />

                <Stack direction={'column'} >
                    <Heading fontSize="xl" pt={2} as={Link} to="/">Company</Heading>
                    <Text fontSize={'sm'}>About</Text>
                    <Text fontSize={'sm'}>Pariticipants</Text>
                </Stack>

            </Stack>

            <Spacer />         

            <Stack direction={'row'}>

                <Text fontSize={'sm'}>© MintWave 2022 , Inc</Text>
                <Spacer />
                <Text fontSize={'sm'}> Back To Top </Text>
                <Spacer />
                <Text fontSize={'sm'}>All rights reserved.</Text>
            </Stack>
        </Stack>
    )

};

export default FooterSection;