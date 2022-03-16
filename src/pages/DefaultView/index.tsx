import React from "react";
import {  Stack } from '@chakra-ui/react'
import NavSection from "../../components/headers";
import HeroOneSection from "../../components/heros/firstHero"
import CreateNFTSection from "../../components/infoCards/createCard";

const DefaultView: React.FC = props => {
    return (
        <Stack bg={'#E5E5E5'} direction="column">
            <NavSection />
            <HeroOneSection />
            <CreateNFTSection />
        </Stack>
    )
};

export default DefaultView;