/* eslint-disable react/prop-types */

import {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmoutChange,
    onCurrencyChange,
    currencyOptions=[],
    selectcurrency ="usd",
}){
    const amountInputId = useId()

    return(
        <div className="bg-white p-3 rounded-lg text-sm flex">
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block ">
                   {label}
                </label>
                <input 
                className='outline-none w-full bg-transparent py-1.5'
                   id={amountInputId}
                   type='number'
                   placeholder='Amount'
                   value={amount}
                   onChange={(e)=> onAmoutChange && onAmoutChange(Number(e.target.value))}
                />
            </div>
            <div>
                <p className='text-black/40 mb-2 w-full'>
                    Currency Type
                </p>
                <select
                className='rounded-lg px-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectcurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                  >
                        {
                            currencyOptions.map((curr)=>{
                                <option key={curr} value={curr}>
                                    {curr}
                                </option>
                            })
                        }
                </select>
            </div>
        </div>
    )
}
export default InputBox