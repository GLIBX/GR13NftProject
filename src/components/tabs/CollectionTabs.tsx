import React from "react";
import {
    Tab,
    Tabs,
    TabList
} from '@chakra-ui/react'
import CollectionPanel from "./CollectionPanel";
import { getChainIds } from '../../server/utils'


const CollectionTab: React.FC = () => {
    
    const data = getChainIds()
    
    return (
        <Tabs>
            <TabList>
                {data.map((tab) => (
                    <Tab key={parseInt(tab.id)}>{tab.label}</Tab>
                ))}
            </TabList>
                {data.map((tab, index) => (
                    <>
                    <CollectionPanel
                        key={index}
                        chainId={parseInt(tab.id)}
                    />
                    </>
                ))}

        </Tabs>
    )
};

export default CollectionTab;