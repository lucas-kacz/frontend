'use client'

import { useContractRead } from 'wagmi'
import { abi } from "../utils/SwapABI.json";

export function Swapper(){

    const {data, isError, isLoading } = useContractRead({
        address: '0x8aF3D15F612454A18026B5178811D9A70d6BED8E',
        abi: abi,
        functionName: "getPrice",
        args: [1],
    })

    return(
        <div>
            {data as number*1}
        </div>
    )
}
