import axios from 'axios';

const API_KEY = process.env.REACT_APP_COVALENT_API_KEY

export function getNFTMarket(chainId: number) {
    return axios
        .get(`https://api.covalenthq.com/v1/${chainId}/nft_market/?key${API_KEY}`)
        .then((resp) => {
            return resp.data;
        })
        .catch((err) => {
            console.log(err.message);
            return err;
        });
}


export function getTopNFTs() {

}
