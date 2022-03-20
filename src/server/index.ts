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
            console.log(err.message);
            return err;
        });
}


export function getTopNFTs() {

}
