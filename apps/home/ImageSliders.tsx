import React from "react";
import Link from "next/link";

type Props = {
    url: string;
};

const ImageSliders = function ({ url }: Props) {
    return (
        <div className="">
            <Link href="">
                <img src={url} alt="" />
            </Link>
        </div>
    );
};

export default ImageSliders;
