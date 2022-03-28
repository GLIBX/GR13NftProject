import React from "react";
import {
    Image,
    Text,
    Stack
} from "@chakra-ui/react";


interface NftSectionCardProps {
    logo_url: string
    token_id: number
    floor_price?: string
    address: string
}


const NftSectionCard: React.FC<NftSectionCardProps> = ({ logo_url, token_id, floor_price, address }) => {


    return (
        <Stack h={'20vh'} w={'20vw'}>
            <Image src={logo_url} w={30} h={30} />
            <Text>{token_id}</Text>
        </Stack>
    )
}
 

export default NftSectionCard