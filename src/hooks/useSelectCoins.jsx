import {useState} from 'react'
import tw from "tailwind-styled-components";

const Label = tw.label`
    font-bold
    mt-2
    text-white
    block
    justify-self-auto
    text-lg 
`
const Select = tw.select`
    block
    m-1
    w-full
    p-1
    rounded-md

`

const useSelectCoins = (label,options) => {

    const [state,setState] = useState('');

    const SelectCoins = () =>{

        return(
        <>
        <Label>{label}</Label>
        <Select 
            value={state}
            onChange={e=>setState(e.target.value)}
            >
            <option value=''>Select</option>
            {
                options?.map(opt=>(

                    <option
                        key={opt.id}
                        value={opt.id}
                        >{opt.name}</option>
                ))}

        </Select>
        </>
        )
    }

    return [SelectCoins]
}

export default useSelectCoins