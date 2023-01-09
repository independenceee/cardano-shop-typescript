import React from "react";
import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@martifylabs/mesh-react";
import ImageSlider from "../apps/home/ImageSlider";

import ListProduct from "../apps/home/ListProduct";
export default function Home() {
    return (
        <main className="scroll-smooth overflow-hidden mt-[60px]">
            <ImageSlider />
            <ListProduct />
        </main>
    );
}
