//@ts-nocheck
import React from "react"

export const Money = ({ setAmount, max, min, amount }) => {
    return (
        <div className="" >
            <p>Loan amount</p>
            <div className="flex items-center " style={{ border: '1px solid #F4F8FA', borderRadius: 4, fontSize: 24 }}>
                <p className='text-center' style={{ color: '#CBD5DC', width: 42 }}>$</p>
                <input style={{ color: "#4D6475" }} className="w-[230px] h-[56px] sm:w-[400px]" type="number" aria-label="money" onChange={(e) => setAmount(() => e.target.value)} min={min} max={max} value={amount} />
            </div>
        </div>
    )
}

