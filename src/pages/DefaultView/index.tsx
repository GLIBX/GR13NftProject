import React from "react";
import {  Stack } from '@chakra-ui/react'
import NavSection from "../../components/headers";
import HeroOneSection from "../../components/heros/firstHero"
import CreateNFTSection from "../../components/infoCards/createCard";
import FooterSection from "../../components/footer";

const DefaultView: React.FC = props => {
    return (
        <Stack bg={'#E5E5E5'} direction="column">
            <NavSection />
            <HeroOneSection />
            <CreateNFTSection />




            
            <FooterSection />
        </Stack>
    )
};

export default DefaultView;