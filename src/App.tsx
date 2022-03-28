import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import DefaultView from "./pages/DefaultView";
import CollectionPage from "./pages/CollectionsView";
import ExploreCollectionsView from "./pages/ExploreView";
import NftDetailView from "./pages/NftDetailView";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<DefaultView />} />
      <Route path="/explore-all" element={<ExploreCollectionsView />} />
      <Route path="/collections/:chainId/:address" element={<CollectionPage />} />
      <Route path="/collections/:chainId/:address/:tokenId" element={<NftDetailView />} />
    </Routes>
  </ChakraProvider>
)
