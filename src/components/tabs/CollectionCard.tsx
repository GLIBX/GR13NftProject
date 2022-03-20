import React from "react";
import {
    Box,
    Text,
    Stack,
    AvatarGroup,
    Avatar,
    Spacer,
    SlideFade,
    Button,
    Image,
    Heading,
    useDisclosure
} from '@chakra-ui/react';

interface CollectionCardProps {
    collection_name: string
    collection_address: string
    chain_id: number
    first_nft_image: string

}
const CollectionCard: React.FC<CollectionCardProps> = (props) => {
    return (
        <SlideFade in={true} offsetY='20px'>
            <Box textAlign={'center'} display={'block'} bg={'#000'} borderRadius={'15px'} h={'25vh'} w={'15vw'} alignItems="center" justifyContent="space-between" p={'1em'}>
                <Image src={props.first_nft_image} alt={props.first_nft_image} h={'14vh'} w={'13vw'} borderTopRadius={'15px'} />

                <Box py={'1em'}>
                    <Box>
                        <Text color={'#fff'} fontSize={'lg'} fontWeight={'600'}>{props.collection_name}</Text>
                    </Box>

{/* 
                    <Box display={'flex'} justifyContent={'space-between'} alignItems='baseline' py={'1em'}>
                            <Text color={'#fff'}>0.5 ETH</Text>
                            <Text color={'#fff'}>❤️</Text>
                        </Box> */}
                </Box>
            </Box>
        </SlideFade>
    )
};

export default CollectionCard;