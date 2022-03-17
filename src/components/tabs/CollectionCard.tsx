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
        <Box textAlign={'center'} display={'flex'} borderRadius={'15px'} h={'20vh'} w={'20vw'}>
            <Image src={props.first_nft_image} />
            <Heading>{props.collection_name}</Heading>
        </Box>
    )
};

export default CollectionCard;