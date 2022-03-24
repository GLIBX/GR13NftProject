import React, { useCallback, useEffect, useState } from "react";
import NavSection from "../../components/headers";
import { Heading, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FooterSection from "../../components/footer";
import { useParams } from "react-router-dom";
import { getCollectionData } from "../../server"



const CollectionPage: React.FC = () => {
    const { chainId, address } = useParams();
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        // fetch collection metadata and other info
        if (address !== "") {
            await Promise.all([getCollectionData(parseInt(chainId), address)])
                .then((res) => {
                    let newData = []
                    res[0].data.items.forEach((data, index) => {
                        console.log(data)
                        newData.push(data)     
                    })
                    setData(newData)
                    return newData
                })
                .catch((err) => {
                    // SEND ERROR MESSAGE
                    console.log(err)
                })
        }
    }, [chainId, address])

    useEffect(() => {
        fetchData()
    })

    return (
        <Stack bg={'#E5E5E5'} direction="column">
            <NavSection />
            {data === [] ? (
                <Stack textAlign={'center'} alignSelf={'center'} py={'5em'}>
                    <Heading>
                        No Matching Collection Found!
                    </Heading>
                    <Text as={Link} to={'/explore-all'} color={'blue'}>View all categories</Text>
                </ Stack>
            ) : null}

            <FooterSection />
        </Stack>
    )
};

export default CollectionPage;