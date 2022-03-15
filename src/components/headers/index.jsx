import React, { useState, useRef, useEffect } from "react";
import { Box, Flex, Input, Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerOverlay, DrawerFooter, DrawerCloseButton, DrawerBody, Image, Stack, Avatar, AvatarBadge, Badge, MenuItem, MenuList, Heading, Button, Spacer, useDisclosure, VStack, HStack, Tooltip, Text, Select, Menu, MenuButton } from '@chakra-ui/react';
import { useWeb3React } from "@web3-react/core";
import { Link } from 'react-router-dom'
import SelectWalletModal from "../modals/selectWalletModal";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { SearchBox } from "../search";
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { connectors } from '../../connectors'
import { networkParams } from '../../connectors/networks'
import AvatarIcon from '../../assets/imgicon.jpeg'
import { BiWallet } from "react-icons/bi";

const NavSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const walletRef = useRef()
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

    const truncateText = str =>  {
        return `${str.slice(0, 4)}` + "..." + `${str.slice(37)}`
    }

    useEffect(() => {
        const provider = window.localStorage.getItem("provider");
        if (provider) activate(connectors[provider]);
    }, []);

    return (
    <Box textAlign="center" fontSize="xl" minH="10vh" minW="100vw" p={20} pt={10}>
        <Stack direction="row" spacing={10}>
            <Heading fontSize="3xl" pt={2}>MintWave.</Heading>

            <SearchBox placeholder="Search items, collections and accounts.."/>

            <Spacer />
            <Menu>
                <MenuButton as={Button} variant={'outline'} rightIcon={<ChevronDownIcon />}>
                    Explore
                    <Badge ml='1' colorScheme='red'>
                        Hot
                    </Badge>
                </MenuButton>
                <MenuList>
                    <MenuItem>All NFTs</MenuItem>
                    <MenuItem>Ethereum</MenuItem>
                    <MenuItem>Binanace Chanin</MenuItem>
                    <MenuItem>Tezos</MenuItem>
                    <MenuItem>Flow</MenuItem>
                </MenuList>
            </Menu>

            <Menu>
                <MenuButton as={Button} variant={'outline'} rightIcon={<ChevronDownIcon />}>
                    Stats
                </MenuButton>
                <MenuList>
                    <MenuItem>Rakings</MenuItem>
                    <MenuItem>Activity</MenuItem>
                </MenuList>
            </Menu>
            <Button variant={'outline'} as={Link} to="/">Resources</Button>
            <Button variant={'outline'} as={Link} to="/">Create</Button>


            {!active ? (
                <>
                    <Avatar src='https://bit.ly/broken-link' size={'md'} />
                    <Button onClick={onOpen} bg={'#575FCC'} color={'#fff'}>Connect Wallet</Button>
                    <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
                </>
            ) : (
                <>
                    <Menu>
                        <MenuButton as={Avatar}  src={AvatarIcon} size={'md'} />
                        <MenuList>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Favorites</MenuItem>
                            <MenuItem>Watchlist</MenuItem>
                            <MenuItem>My Collections</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem onClick={disconnect}>Log Out</MenuItem>
                        </MenuList>
                    </Menu>
                    <Avatar as={BiWallet} bg={'none'} onClick={onOpen} ref={walletRef}/>
                    {/* <Button onClick={disconnect} bg={'#575FCC'} color={'#fff'}>{truncateText(account)}</Button> */}
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={walletRef}
                        paddingTop='20vh'
                        sizer='md'
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>My Wallet</DrawerHeader>
                        <hr></hr>

                        <br></br>
                        <br></br>

                        <DrawerBody>
                            <b>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{truncateText(account)}</b>
                            <br></br>
                            <b>Balance:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$0.0</b>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button bg={'#575FCC'} color="#fff">Update Balance</Button>
                        </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </>
            )}
            {/* <VStack justifyContent="center" alignItems="center" padding="10px 0">
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
            </VStack> */}

            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        </Stack>
        <Stack direction="row" borderBottom={'1px solid'} pt={'1em'} spacing={10} opacity="0.1" />

        
    </Box>
    )
};

export default NavSection;