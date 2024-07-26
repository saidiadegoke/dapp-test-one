import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from "@ton/core";

export type MainContractType = {
    number: number,
    address: Address,
    owner_address: Address
}

export function mainContractConfigToCell (config: MainContractType): Cell {
    return beginCell()
        .storeUint(config.number, 32)
        .storeAddress(config.address)
        .storeAddress(config.owner_address)
        .endCell();
}

export class MainContract implements Contract {
    constructor(
        readonly address: Address,
        readonly init?: {code: Cell, data: Cell} 
    ) {}

    static createFromConfig (config: MainContractType, code: Cell, workchain = 0) {
        const data = beginCell()
            .storeUint(config.number, 32)
            .storeAddress(config.address)
            .storeAddress(config.owner_address)
            .endCell();
        const init = {code, data};
        const address = contractAddress(workchain, init);

        return new MainContract(address, init);
    }

    async sendDeploy(
        provider: ContractProvider,
        sender: Sender,
        value: bigint
    ) {
        await provider.internal(
            sender,
            {
                value,
                sendMode: SendMode.PAY_GAS_SEPARATELY,
                body: beginCell().endCell()
            }
        )
    }

    async sendIncrement(
        provider: ContractProvider,
        sender: Sender,
        value: bigint,
        increment: number
    ) {
        const body = beginCell()
            .storeUint(1, 32)
            .storeUint(increment, 32)
            .endCell();

        await provider.internal(sender, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body
        })
    }

    async sendDeposity(provider: ContractProvider, sender: Sender, value: bigint) {
        const body = beginCell()
            .storeUint(2, 32)
            .endCell();
        
            await provider.internal(sender, {
                value,
                sendMode: SendMode.PAY_GAS_SEPARATELY,
                body
            });
    }

    async sendNoCodeMessage(provider: ContractProvider, sender: Sender, value: bigint) {
        const body = beginCell()
            .endCell();
        
        await provider.internal(sender, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body
        });
    }

    async sendWithdrawRequest(provider: ContractProvider, sender: Sender, value: bigint, amount: bigint) {
        const body = beginCell()
            .storeUint(3, 32)
            .storeCoins(amount)
            .endCell();

        await provider.internal(sender, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body
        })
    }

    async getData (provider: ContractProvider) {
        const { stack } = await provider.get('get_contract_storage_data', []);
        return {
            number: stack.readNumber(),
            recent_sender: stack.readAddress(),
            owner_address: stack.readAddress()
        }
    }

    async getBalance (provider: ContractProvider) {
        const { stack } = await  provider.get('balance', []);
        return {
            number: stack.readNumber()
        }
    }
}