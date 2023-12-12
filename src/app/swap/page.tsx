import { useContractRead } from 'wagmi'
import { abi } from "../../utils/Token1ABI.json"
import { FirstToken } from "../../components/FirstToken";
import { Swapper } from '../../components/Swap';

function Swap(){
    return(
        <div>
            <FirstToken/>
            <Swapper/>
        </div>
    )
}

export default Swap;