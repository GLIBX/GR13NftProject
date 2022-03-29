import axios from 'axios';


const API_KEY = "ckey_d61ddf27023340ddbb7db439978"

export function getNFTMarket(chainId: number) {
    return axios
        .get(`https://api.covalenthq.com/v1/${chainId}/nft_market/?quote-currency=USD&format=JSON&page-number=1&page-size=50&key=${API_KEY}`)
        .then((resp) => {
            console.log(resp.data)
            return resp.data;
        })
        .catch((err) => {
            console.log(err.error_message);
            return err;
        });
}



export function getTopNFTs() {

}



export function getCollectionHistory( chainId: number, collectionAddress: string ) {
    return axios
        .get(`https://api.covalenthq.com/v1/${chainId}/nft_market/collection/${collectionAddress}/?quote-currency=USD&format=JSON&page-number=0&page-size=50&key=${API_KEY}`)
        .then((resp) => {
            console.log(resp.data)
            return resp.data;
        })
        .catch((err) => {
            console.log(err.error_message);
            return err;
        });

}


export function getCollectionNFTs( chainId: number, collectionAddress: string ) {
    return axios
    .get(`https://api.covalenthq.com/v1/${chainId}/tokens/${collectionAddress}/nft_token_ids/?quote-currency=USD&format=JSON&page-number=0&page-size=50&key=${API_KEY}`)
    .then((resp) => {
        console.log(resp.data)
        return resp.data;
    })
    .catch((err) => {
        console.log(err.error_message);
        return err;
    });   
}

export function getTokenData ( chainId: number, collectionAddress: string, tokenId: number ) {
    return axios
    .get(`https://api.covalenthq.com/v1/${chainId}/tokens/${collectionAddress}/nft_metadata/${tokenId}/?quote-currency=USD&format=JSON&page-number=0&page-size=50&key=${API_KEY}`)
    .then((resp) => {
        console.log(resp.data)
        return resp.data;
    })
    .catch((err) => {
        console.log(err.error_message);
        return err;
    });    
}