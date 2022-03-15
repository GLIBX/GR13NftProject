import React from "react";
import {  Stack } from '@chakra-ui/react'
import NavSection from "../../components/headers";
import HeroOneSection from "../../components/heros/firstHero"

const DefaultView: React.FC = props => {
    return (
        <Stack bg={'#E5E5E5'} direction="column">
            <NavSection />
            <HeroOneSection />
        </Stack>
    )
};

export default DefaultView;