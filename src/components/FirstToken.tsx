'use client'

import { useContractRead } from 'wagmi'
import { abi } from "../utils/Token1ABI.json";

export function FirstToken(){

    const {data, isError, isLoading } = useContractRead({
        address: '0x89401213D639aEDC04042079254Fb9deBDf9176F',
        abi: abi,
        functionName: "decimals",
    })

    return(
        <div>
            {data?.toString()}
        </div>
    )
}
