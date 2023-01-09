import React from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";

type Props = {};

const CounterProduct = function ({}: Props) {
    return (
        <span className="text-[#822727] text-[12px] bg-[#FED7D7] px-[4px] ml-[8px] rounded-sm">
            0
        </span>
    );
};

export default CounterProduct;
