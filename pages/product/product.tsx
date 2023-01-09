import React from "react";
import Image from "next/image";
const styles = {};

type Props = {};

const Product = function ({}: Props) {
    return (
        <div className="grid grid-flow-col gap-[24px] p-[10px]">
            <div className="flex items-center justify-center border-[2px] border-[rgb(226,232,240)] shadow-lg rounded-[12px]">
                <span>
                    <Image
                        src="https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProductLarge1.581114ed.png&w=640&q=75"
                        alt=""
                    />
                </span>
            </div>
        </div>
    );
};

export default Product;
