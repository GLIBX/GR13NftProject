import React, { useState, useRef, useEffect } from "react";
import { Box, Drawer, DrawerContent, DrawerHeader, DrawerOverlay, Image, DrawerFooter, DrawerCloseButton, DrawerBody, Stack, Avatar, Badge, MenuItem, MenuList, Heading, Button, Spacer, useDisclosure, Menu, MenuButton } from '@chakra-ui/react';
import { useWeb3React } from "@web3-react/core";
import { Link } from 'react-router-dom'
import SelectWalletModal from "../modals/selectWalletModal";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { SearchBox } from "../search";
import { Chains } from "../../server/chains";
// import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { connectors } from '../../connectors'
import AvatarIcon from '../../assets/imgicon.jpeg'
import { BiWallet } from "react-icons/bi";

const NavSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const walletRef = useRef()
    const {
        // library,
        // chainId,
        account,
        activate,
        deactivate,
        active
      } = useWeb3React();
    const [setSignature] = useState("");
    // const [error, setError] = useState("");
    const [setNetwork] = useState(undefined);
    const [setMessage] = useState("");
    // const [signedMessage, setSignedMessage] = useState("");
    const [setVerified] = useState();

    // const handleInput = (e) => {
    //     const msg = e.target.value;
    //     setMessage(msg);
    // };

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
        return str.slice(0, 4) + "..." + str.slice(37)
    }

    useEffect(() => {
        const provider = window.localStorage.getItem("provider");
        if (provider) activate(connectors[provider]);
    }, [activate]);

    const chainData = [...Chains]

    return (
    <Box textAlign="center" fontSize="xl" minH="10vh" minW="100vw" p={20} pt={10}>
        <Stack direction="row" spacing={10}>
            <Heading fontSize="3xl" pt={2} as={Link} to="/">MintWave.</Heading>

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
                    <MenuItem as={Link} to="/explore-all" pl={10}>All NFTs</MenuItem>
                    {chainData.map((each, id) => {
                        return (<MenuItem key={id}><Image src={each.logo_url} w={'1em'} mr={4} /> {each.label}</MenuItem>)
                    })}
                </MenuList>
            </Menu>

            <Menu>
                <MenuButton as={Button} variant={'outline'} rightIcon={<ChevronDownIcon />}>
                    Stats
                </MenuButton>
                <MenuList>
                    <MenuItem>Rankings</MenuItem>
                    <MenuItem>Activity</MenuItem>
                </MenuList>
            </Menu>
            <Button variant={'outline'} as={Link} to="/">Resources</Button>
            <Button variant={'outline'} as={Link} to="/">Create</Button>


            {!active ? (
                <>
                    <Avatar src='https://bit.ly/broken-link' size={'md'} />
                    <Button onClick={onOpen} bg={'#575FCC'} color={'#fff'} px={10} py={5}>Connect Wallet</Button>
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