import React from "react";
import {
    Image,
    Text,
    Box,
    Stack,
    Heading,
    Button
} from "@chakra-ui/react";
import { truncateText } from '../../../server/utils'

interface NftHeroCardProps {
    bgUrl: string
    name: string
    ethPrice?: string
    description: string
    owner: string
    originalOwner: string
    tokenUrl: string
    animationUrl?: string
    supports: any[]
}


const NftHeroCard: React.FC<NftHeroCardProps> = ({
    bgUrl,
    name,
    ethPrice,
    description,
    owner,
    originalOwner,
    tokenUrl,
    animationUrl,
    supports
}) => {

    return (
        <Stack h={'50vh'} direction={'row'}>
            <Box p={40} pt={0}>
                <Box bg="#000" borderRadius={'40px'} h={'50vh'} w={'30vw'} display="block" alignItems="center" justifyContent="space-between" p={'1.5em'}>
                    <Box bgPosition="center" bgSize={'cover'} bgRepeat="no-repeat"  h={'45vh'} w={'27vw'} p={'1em'} bgImage={bgUrl} borderRadius={'40px'} />
                </Box>
            </Box>

            <Stack textAlign={'left'} spacing={5} py={10}>
                <Heading fontSize={'3xl'}>{name}</Heading>
                <Text fontSize={'xl'} pb={10} w={'40vw'}>{description}</Text>


                <Stack direction={'row'} spacing={2}>
                    <Text fontWeight={'500'}>Floor Price: </Text>
                    <Image src={'https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png'} w={'1em'} mx={2} />
                    <Text>{( ethPrice === 'null' ? 0 : ethPrice )} ETH</Text>
                </Stack>    

                <Stack direction={'row'} spacing={2}>
                    <Text fontWeight={'500'}>Contract Address: </Text>
                    <Text>{originalOwner}</Text>
                </Stack>

                <Stack direction={'row'} spacing={2}>
                    <Text fontWeight={'500'}>Current Owner: </Text>
                    <Text>{truncateText(owner)}</Text>
                </Stack>

                <Stack direction={'row'} spacing={2}>
                    <Text fontWeight={'500'}>Accepts: </Text>
                    {supports.map((each, index) => {
                        return (
                            <Text key={index}>{each},</Text>
                        )
                    })}
                </Stack>

                <a href={tokenUrl}>
                    <Button w={'15vw'} bg={'#575FCC'} color="#fff">Open Website</Button>
                </a>

            </Stack>
        </Stack>
    )
}
 

export default NftHeroCard