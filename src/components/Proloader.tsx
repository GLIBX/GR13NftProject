import React from "react";
import { Center } from '@chakra-ui/react'
import { Preloader, Grid } from 'react-preloader-icon'

const PreloaderComponent: React.FC = () => {


    return (
        <Center h={'100vh'} w={'100vw'}>
            <Preloader
                use={Grid}
                size={60}
                strokeWidth={6}
                strokeColor="#262626"
                duration={2000}        
            />
        </Center>
    )
}

export default PreloaderComponent