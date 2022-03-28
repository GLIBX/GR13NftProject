import React from "react";
import {
    Box,
    Text,
    SlideFade,
    Image
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
interface CollectionCardProps {
    collectionName: string
    collectionAddress: string
    chainId: number
    firstNftImage: string

}
const CollectionCard: React.FC<CollectionCardProps> = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/collections/${props.chainId}/${props.collectionAddress}`)
    }
    
    return (
        <SlideFade in={true} offsetY='20px'>
            <Box
                textAlign={'center'}
                display={'block'}
                boxShadow={'base'}
                bg={'#000'}
                borderRadius={'15px'}
                h={'25vh'}
                w={'15vw'}
                alignItems="center"
                justifyContent="space-between"
                p={'1em'}
                _hover={{
                    boxShadow: 'dark-lg'
                }}
                onClick={handleClick}
            >
                <Image src={props.firstNftImage} alt={props.firstNftImage} h={'14vh'} w={'13vw'} borderTopRadius={'15px'} />

                <Box py={'1em'}>
                    <Box>
                        <Text color={'#fff'} fontSize={'lg'} fontWeight={'600'}>{props.collectionName}</Text>
                    </Box>
                </Box>
            </Box>
        </SlideFade>
    )
};

export default CollectionCard;