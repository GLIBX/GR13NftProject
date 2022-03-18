import React from "react";
import {
    Box,
    Text,
    Stack,
    Image,
    Heading
} from '@chakra-ui/react';

interface CollectionCardProps {
    collection_name: string
    collection_address: string
    chain_id: number
    first_nft_image: string

}

const CollectionCard: React.FC<CollectionCardProps> = (props) => {
    return (
        <Box textAlign={'center'} display={'flex'} bgSize={'50vh'} bgImage={props.first_nft_image} bg={'gray'} borderRadius={'15px'} h={'20vh'} w={'25vw'}>
            <Image src={props.first_nft_image} w={'2em'} h={'3em'} p={2} />
            <Text>{props.collection_name}</Text>
        </Box>
    )
};

export default CollectionCard;