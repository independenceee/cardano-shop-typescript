import { ShopContext } from "../contexts/ShopContext";
import { useContext } from "react";

const useConnected = function () {
    const { connected } = useContext(ShopContext);
    return connected;
};

export { useConnected };
