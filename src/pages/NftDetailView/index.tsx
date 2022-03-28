import React, { useState, useEffect, useCallback} from "react";
import { useParams, Link } from "react-router-dom";
import {
    Stack,
    Text,
    Heading
} from "@chakra-ui/react"
import NavSection from "../../components/headers"
import FooterSection from "../../components/footer";
import { getTokenData } from "../../server";



const NftDetailView: React.FC = () => {
    const { chainId, address, tokenId } = useParams()
    const [data, setData] = useState({})

    const fetchData = useCallback(async () => {
        // fetch collection metadata and other info
        if (address !== "") {
            await Promise.all([getTokenData(parseInt(chainId), address, parseInt(tokenId))])
                .then((res) => {
                    let newData = res[0].data.items[0].nft_data[0]
                    setData(newData)
                    return newData
                })
                .catch((err) => {
                    // SEND ERROR MESSAGE
                    console.log(err)
                })
        }
    }, [chainId, address, tokenId])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <Stack bg={'#E5E5E5'} direction="column" alignSelf={'center'}>
            <NavSection />
        

            {Object.keys(data).length === 0 ? (
                <Stack textAlign={'center'} py={'5em'}>
                    <Heading>
                        No Data Found!
                    </Heading>
                    <Text as={Link} to={'/explore-all'} color={'blue'}>View all collections</Text>
                </ Stack>
            ) : (
                <Stack textAlign={'center'} display={'flex'} py={'2em'}>
                </Stack>
            )}

            <FooterSection />
        </Stack>
    )
}


export default NftDetailView