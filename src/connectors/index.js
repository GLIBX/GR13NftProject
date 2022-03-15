import { InjectedConnector } from "@web3-react/injected-connector";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});

// const walletconnect = new WalletConnectConnector({
//   rpcUrl: `https://mainnet.infura.io/v3/84842078b09946638c03157f83405213`,
//   bridge: "https://bridge.walletconnect.org",
//   qrcode: true,
//   chainId: 1
// });

// const walletlink = new WalletLinkConnector({
//   url: `https://mainnet.infura.io/v3/84842078b09946638c03157f83405213`,
//   appName: "web3-react-demo",
//   supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 69, 420, 80001]
// });

export const connectors = {
  injected: injected,
  // walletConnect: walletconnect,
  // coinbaseWallet: walletlink
};
