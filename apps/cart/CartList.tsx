import React from "react";
import CartProducts from "./CartProducts";
type Props = {};

const CartList = function ({}: Props) {
    return (
        <div>
            <div className="flex w-full items-center relative overflow-hidden bg-[#bee3f8] py-[0.75rem] mb-[17px]">
                <div className="flex items-center px-[16px]">
                    <div className="flex items-center justify-center text-[17px] text-[#ffffff] mr-[16px] rounded-full w-[20px] h-[20px]  bg-blue-500">
                        <div>ｉ</div>
                    </div>
                    <div className="flex items-center font-[500] text-[#333] text-[17px]">
                        Your Cart
                    </div>
                </div>
            </div>
            <CartProducts />
        </div>
    );
};

export default CartList;
