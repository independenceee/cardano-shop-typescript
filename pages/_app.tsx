import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { MeshProvider } from "@martifylabs/mesh-react";
import Meta from "../components/Meta";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Provider } from "react-redux";
import { store } from "../store";

import ShopContextProvider from "../contexts/ShopContext";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <MeshProvider>
            <Provider store={store}>
                <ShopContextProvider>
                    <Meta
                        title="Cardano Shop"
                        keywords="Cardano Shop"
                        decription="Cardano Shop"
                        icon=""
                    />
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </ShopContextProvider>
            </Provider>
        </MeshProvider>
    );
}
