import React, {
    useEffect,
    useState,
    createContext,
    ReactNode,
} from "react";
import { useRouter } from "next/router";
import { useWallet } from "@martifylabs/mesh-react";
import { BrowserWallet } from "@martifylabs/mesh";


interface ListWallet {
    name: string;
    icon: string;
    version: string;
}

interface Balance {
    quantity: number | null;
    unit: string | null;
}

interface AppContextInterface {
    address: string | null;
    connected: boolean | null;
    disconnect: () => void;
    connectWallet: (walletName: string) => Promise<void>;
    nameWallet: string;
}

export const ShopContext = createContext<
    AppContextInterface | Balance[] | ListWallet[] | null
>(null);

const ShopContextProvider = function ({ children }: { children: ReactNode }) {
    const { connect, connected, disconnect } = useWallet();
    const [nameWallet, setNameWallet] = useState<string>();
    const [balance, setBalance] = useState<Array<Balance>>([]);
    const [address, setAddress] = useState<string>("");
    const [wallets, setWallets] = useState<Array<ListWallet>>();

    const connectWallet = async function (walletName: string) {
        try {
            await connect(walletName);
            setNameWallet(walletName);
            const wallet = await BrowserWallet.enable(walletName);
            setWallets(BrowserWallet.getInstalledWallets());
            const balances = await wallet.getBalance();
            setBalance(balances);
            const address = await wallet.getChangeAddress();
            setAddress(address);
        } catch (error) {
            console.log(error);
        }
    };

    const disconnectWallet = async function () {
        try {
            if (!connected) {
                return;
            }
            await disconnect();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ShopContext.Provider
            value={{
                address,
                balance,
                wallets,
                connected,
                disconnect,
                connectWallet,
                nameWallet,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
