import { Address, OpenedContract, toNano } from "@ton/core";
import { useTonClient } from "./useTonClient";
import { useEffect, useState } from "react";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { MainContract } from "../contracts/MainContract";
import { useTonConnect } from "./useTonConnect";

export function useMainContract () {
    const client = useTonClient();
    const { sender } = useTonConnect();
    const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

    const [contractData, setContractData] = useState<null | {
        counter_value: number;
        recent_address: Address;
        owner_address: Address;
        contract_balance: number;
    }>();

    // EQAGHOC4VDnXpWVz752DxcKuOGofrfO9qXjkYnztJhmJhTfs - tonhub
    // EQDTpkVuvZDz4Vjaqo57kk-oYsgvxWuo7btErelrYwpT0vZv - tonkeeper

    const mainContract = useAsyncInitialize(async () => {
        if(!client) return;
        const contract = new MainContract(
            Address.parse('EQDTpkVuvZDz4Vjaqo57kk-oYsgvxWuo7btErelrYwpT0vZv')
        );
        return client.open(contract) as OpenedContract<MainContract>;
    }, [client]);

    useEffect(() => {
        async function getValue () {
            if(!mainContract) return;
            //const _contractData = {...contractData, counter_value: 0};
            //setContractData(_contractData);
            const val = await mainContract.getData();
            const { number: contract_balance } = await mainContract.getBalance();
            setContractData({
                counter_value: val.number,
                recent_address: val.recent_sender,
                owner_address: val.owner_address,
                contract_balance 
            });
            await sleep(5000);
            getValue();
        }
        getValue();
    }, [mainContract]);

    return {
        contract_address: mainContract?.address.toString(),
        ...contractData,
        sendIncrement: async () => await mainContract?.sendIncrement(sender, toNano("0.05"), 2),
        sendWithdrawRequest: async () => await mainContract?.sendWithdrawRequest(sender, toNano("0.05"), toNano("0.5"))
    }
}