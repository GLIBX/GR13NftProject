import React, { useState, useEffect, useCallback} from "react";
import { useParams, Link } from "react-router-dom";
import {
    Stack,
    Text,
    Heading,
} from "@chakra-ui/react"
import NavSection from "../../components/headers"
import FooterSection from "../../components/footer";
import { getTokenData } from "../../server";
import NftHeroCard from "../../components/tabs/nfts/NftHero";
import PreloaderComponent from "../../components/Proloader";



const NftDetailView: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const { chainId, address, tokenId } = useParams()
    const [data, setData] = useState({})

    const fetchData = useCallback(async () => {
        // fetch collection metadata and other info
        if (address !== "") {
            await Promise.all([getTokenData(parseInt(chainId), address, parseInt(tokenId))])
                .then((res) => {
                    setData(res[0].data.items[0].nft_data[0])
                    setLoading(false)
                })
                .catch((err) => {
                    // SEND ERROR MESSAGE
                    console.log(err)
                    setLoading(false)
                })
        }
    }, [chainId, address, tokenId])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <Stack bg={'#E5E5E5'} direction="column" alignSelf={'center'}>
            {loading ? (
                <PreloaderComponent />
            ) : (
                <>
                    <NavSection />
                

                    {Object.keys(data).length === 0 ? (
                        <Stack textAlign={'center'} py={'5em'}>
                            <Heading>
                                No Data Found!
                            </Heading>
                            <Text as={Link} to={'/explore-all'} color={'blue'}>View all collections</Text>
                        </ Stack>
                    ) : (
                        <Stack textAlign={'center'} display={'block'} pb={20}>
                            <NftHeroCard
                                bgUrl={`${data['external_data']['image_512']}`}
                                name={`${data['external_data']['name']}`}
                                ethPrice={`${data['token_quote_rate_eth']}`}
                                description={`${data['external_data']['description']}`}
                                owner={`${data['owner']}`}
                                originalOwner={`${data['original_owner']}`}
                                tokenUrl={`${data['token_url']}`}
                                animationUrl={`${data['external_data']['animation_url']}`}
                                supports={[...data['supports_erc']]}
                            />


                            <Stack p={40} textAlign={'left'} display={'flex'} spacing={5}>
                                <Heading fontSize={'lg'} as="u">Token Attributes Based on Trait</Heading>

                                {data['external_data']['attributes'].map((each, index) => {
                                    return (
                                    <Stack direction={'row'} spacing={2} key={index}>
                                        <Text fontWeight={'500'} fontSize={'sm'}>{each.trait_type}: </Text>
                                        <Text fontSize={'sm'}>{each.value}</Text>
                                    </Stack>
                                    )
                                })}

                            </Stack>

                        </Stack>
                    )}

                    <FooterSection />
                </>
            )}
        </Stack>
    )
}


export default NftDetailView