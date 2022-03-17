import React from "react";
import { TabPanels, TabPanel, Flex } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { getNFTMarket } from '../../server/index'
import CollectionCard from "./CollectionCard";

interface CollectionPanelProps {
    key: number
    chainId: number
}


const CollectionPanel: React.FC<CollectionPanelProps> = ({ chainId }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        await Promise.all([getNFTMarket(chainId)])
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
                alert(err);
                return [];
            })
    }

    useEffect(() => {
        fetchData()
    }, [chainId])

    return (
        <TabPanels>
            <TabPanel p={4} key={chainId}>
            {data.map((tab, index) => (
                <>
                <p key={index}>{tab.collection_address}</p>
                <Flex>
                    <CollectionCard
                        collection_name={tab.collection_name}
                        collection_address={tab.collection_address}
                        chain_id={chainId}
                        first_nft_image={tab.first_nft_image}
                    />
                </Flex>
                </>
            ))}
            </TabPanel>
        </TabPanels>
    )
};

export default CollectionPanel;