import React from "react";
import { Link } from "react-router-dom";
import {  Flex, Stack } from '@chakra-ui/react'
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