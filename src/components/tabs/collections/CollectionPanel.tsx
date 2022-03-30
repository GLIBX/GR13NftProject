import React, { useCallback } from "react";
import { Wrap, WrapItem } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { getNFTMarket } from '../../../server/index'
import CollectionCard from "./CollectionCard";
import PreloaderComponent from "../../Proloader";
// import { getChainIds } from "../../server/utils";

interface CollectionPanelProps {
    chainId: number
}


const CollectionPanel: React.FC<CollectionPanelProps> = ({ chainId }) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState([]);
    
    const fetchData = useCallback(async () => {
        
        await Promise.all([getNFTMarket(chainId)])
            .then((res) => {
                let newData = []
                res[0].data.items.forEach((data, index) => {
                    console.log(data)
                    newData.push(data)     
                })
                setData(newData)
                setLoading(false)
            })
            .catch((err) => {
                // SEND ERROR MESSAGE
                console.log(err);
                setLoading(false)
            })
    }, [chainId])

    // const removeAll = async ()

    useEffect(() => {
        fetchData()
    })


    return (
        <Wrap>
            {loading ? (
                <PreloaderComponent />
            ) : (
                <>
                    {data.map((tab, index) => (
                        <WrapItem key={index} p={'2rem'}>
                            <CollectionCard
                                collectionName={tab.collection_name}
                                collectionAddress={tab.collection_address}
                                chainId={tab.chain_id}
                                firstNftImage={tab.first_nft_image_512}
                            />
                        </ WrapItem>
                    ))}
                </>
            )}
        </ Wrap>
    )
};

export default CollectionPanel;