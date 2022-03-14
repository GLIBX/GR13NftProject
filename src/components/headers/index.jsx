import React, { useState, useEffect } from "react";
import { Box, Stack, Heading, Button, Spacer, useDisclosure, VStack, HStack, Tooltip, Text, Select } from '@chakra-ui/react';
import { useWeb3React } from "@web3-react/core";
import SelectWalletModal from "../modals/selectWalletModal";
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { connectors } from '../../connectors'
import { networkParams } from '../../connectors/networks'

interface NavSectionProps {
    wallet?: string
}

const NavSection: React.FC<NavSectionProps> = ({ wallet }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
      } = useWeb3React();
    const [signature, setSignature] = useState("");
    const [error, setError] = useState("");
    const [network, setNetwork] = useState(undefined);
    const [message, setMessage] = useState("");
    const [signedMessage, setSignedMessage] = useState("");
    const [verified, setVerified] = useState();

    const handleInput = (e) => {
        const msg = e.target.value;
        setMessage(msg);
    };

    const refreshState = () => {
        window.localStorage.setItem("provider", undefined);
        setNetwork("");
        setMessage("");
        setSignature("");
        setVerified(undefined);
    };

    const disconnect = () => {
        refreshState();
        deactivate();
    };

    useEffect(() => {
        const provider = window.localStorage.getItem("provider");
        if (provider) activate(connectors[provider]);
    }, []);

    return (
    <Box textAlign="center" fontSize="xl">
        <Stack direction="row" minH="100vh" p={5}>
            <Heading>MintWave</Heading>

            <Spacer />

            {!active ? (
                <Button onClick={onOpen}>Connect Wallet</Button>
            ) : (
                <Button onClick={disconnect}>Disconnect</Button>
            )}
            <VStack justifyContent="center" alignItems="center" padding="10px 0">
            <HStack>
                <Text>{`Connection Status: `}</Text>
                {active ? (
                <Text>Yes</Text>
                ) : (
                <Text>No</Text>
                )}
            </HStack>

            <Tooltip label={account} placement="right">
                <Text>{`Account: ${account}`}</Text>
            </Tooltip>
            <Text>{`Network ID: ${chainId ? chainId : "No Network"}`}</Text>
            </VStack>

            <ColorModeSwitcher justifySelf="flex-end" />
        </Stack>
        <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </Box>
    )
};

export default NavSection;