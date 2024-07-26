import { useTonConnect } from "./useTonConnect";

export function useCounterContract () {
    const { sender } = useTonConnect();
    const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
    
}