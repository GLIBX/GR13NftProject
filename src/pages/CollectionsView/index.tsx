import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavSection from "../../components/headers";
import { Heading, Text, Stack, Image, Table, TableCaption, Tbody, Tr, Td, Thead, Th, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FooterSection from "../../components/footer";
import { getCollectionNFTs } from "../../server";
import PreloaderComponent from "../../components/Proloader";

const CollectionPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const { chainId, address } = useParams();
    const [data, setData] = useState([]);


    const navigate = useNavigate();
    const handleClick = (token: number) => {
        navigate(`/collections/${chainId}/${address}/${token}`)
    }

    const fetchData = useCallback(async () => {
        // fetch collection metadata and other info
        if (address !== "") {
            await Promise.all([getCollectionNFTs(parseInt(chainId), address)])
                .then((res) => {
                    let newData = []
                    res[0].data.items.forEach((data, index) => {
                        // console.log(data)
                        newData.push(data)     
                    })
                    setData(newData)
                    setLoading(false)
                })
                .catch((err) => {
                    // SEND ERROR MESSAGE
                    console.log(err)
                    setLoading(false)
                })
        }
    }, [chainId, address])

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
                    {data && !data.length ? (
                        <Stack textAlign={'center'} py={'5em'}>
                            <Heading>
                                No Matching Collection Found!
                            </Heading>
                            <Text as={Link} to={'/explore-all'} color={'blue'}>View all categories</Text>
                        </ Stack>
                    ) : (
                        <Stack textAlign={'center'} display={'flex'} py={'2em'}>
                            <Heading>
                                {`${data[0].contract_name} (${data[0].contract_ticker_symbol})`} Collection
                            </Heading>
                            <Stack p={10} alignSelf={'center'} w={'80vw'}>
                                <Table variant="simple">
                                    <TableCaption>Comprehensive list of {data[0].contract_ticker_symbol} Tokens</TableCaption>
                                    <Thead>
                                        <Tr>
                                            <Th>#</Th>
                                            <Th>Logo</Th>
                                            <Th>Token </Th>
                                            <Th></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {data.map((tab, index) => {
                                            return (
                                                <Tr key={index} p={'2rem'}>
                                                    <Td>{index}</Td>
                                                    <Td><Image src={tab.logo_url} /></Td>
                                                    <Td>{`${tab.contract_name} #${tab.token_id} `}</Td>
                                                    <Td><Button onClick={() => handleClick(parseInt(tab.token_id))}> More Info.</Button></Td>
                                                </Tr>
                                            )
                                        })}
                                    </Tbody>
                                </Table>
                            </Stack>
                        </ Stack>
                    )}
                <FooterSection />
                </>
            )}

            
        </Stack>
    )
};

export default CollectionPage;