export type AppContextInterface = {
    connected: boolean;
    disconnect: () => void;
    connectWallet: (walletName: string) => Promise<void>;
};
