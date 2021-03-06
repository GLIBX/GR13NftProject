import React from "react";
import {  Stack, Text, Heading } from '@chakra-ui/react'
import NavSection from "../../components/headers";
import CollectionTab from "../../components/tabs/collections/CollectionTabs";
import FooterSection from "../../components/footer";

const ExploreCollectionsView: React.FC = props => {
    return (
        <Stack bg={'#E5E5E5'} direction="column" textAlign={'center'}>
            <NavSection />
            <Stack pb={10}>
                <Heading fontSize={'2em'}>Explore Collections</Heading>
                <Text>NFTs on MintWave are categorized by the blockchain network they exist on.</Text>
            </Stack>
            <Stack alignSelf={'center'}>
                <CollectionTab />
            </Stack>

            <FooterSection />
        </Stack>
    )
};

export default ExploreCollectionsView;