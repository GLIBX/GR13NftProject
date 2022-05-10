import React, { useState, useRef, useEffect } from "react";
import { Box, useMediaQuery, Drawer, DrawerContent, DrawerHeader, DrawerOverlay, Image, DrawerFooter, DrawerCloseButton, DrawerBody, Stack, Avatar, MenuItem, MenuList, Heading, Button, Spacer, useDisclosure, Menu, MenuButton } from '@chakra-ui/react';
import { useWeb3React } from "@web3-react/core";
import { Link, useNavigate } from 'react-router-dom'
import SelectWalletModal from "../modals/selectWalletModal";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { SearchBox } from "../search";
import { truncateText } from "../../server/utils"
import { Chains } from "../../server/chains";
// import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { connectors } from '../../connectors'
import AvatarIcon from '../../assets/imgicon.jpeg'
import { BiWallet } from "react-icons/bi";

const NavSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const walletRef = useRef()
    const navigate = useNavigate()
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

    const handleExploreClick = id => {
        navigate('/explore-all')
    }

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
                    </MenuButton>
                    <MenuList p={2}>
                        <MenuItem as={Button} variant={'ghost'} pl={10} justifyContent={'left'}>
                            <Link to="/explore-all">All Collections</Link>
                        </MenuItem>
                        {chainData.map((each, id) => {
                            return (<MenuItem as={Button} variant={'ghost'} onClick={() => handleExploreClick(each.id)} justifyContent={'left'} key={id}><Image src={each.logo_url} w={'1em'} mx={2} /> {each.label} </MenuItem>)
                        })}
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton as={Button} variant={'outline'} rightIcon={<ChevronDownIcon />}>
                        Stats
                    </MenuButton>
                    <MenuList p={2}>
                        <MenuItem as={Button} variant={'ghost'} justifyContent={'left'}>Rankings</MenuItem>
                        <MenuItem as={Button} variant={'ghost'} justifyContent={'left'}>Activity</MenuItem>
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
                            <MenuList p={2}>
                                <MenuItem as={Button} variant={'ghost'} justifyContent={'left'}>Profile</MenuItem>
                                <MenuItem as={Button} variant={'ghost'} justifyContent={'left'}>Favorites</MenuItem>
                                <MenuItem as={Button} variant={'ghost'} justifyContent={'left'}>Watchlist</MenuItem>
                                <MenuItem as={Button} variant={'ghost'} justifyContent={'left'}>My Collections</MenuItem>
                                <MenuItem as={Button} variant={'ghost'} justifyContent={'left'}>Settings</MenuItem>
                                <MenuItem as={Button} variant={'ghost'} justifyContent={'left'} onClick={disconnect}>Log Out</MenuItem>
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
            </Stack>
            <Stack direction="row" borderBottom={'1px solid'} pt={'1em'} spacing={10} opacity="0.1" />

            
        </Box>
    )
};

export default NavSection;