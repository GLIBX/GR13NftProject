import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import DefaultView from "./pages/DefaultView";
import DefaultCollectionsPage from "./pages/CollectionsView";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<DefaultView />} />
      <Route path="/collections" element={<DefaultCollectionsPage />} />
    </Routes>
  </ChakraProvider>
)
