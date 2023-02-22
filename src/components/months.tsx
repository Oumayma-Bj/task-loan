//@ts-nocheck
import React from "react"
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

export const Months = ({ count, setCount, min, max }) => {

    return (
        <div>
            <p>Number of Months</p>
            <div className="flex justify-between items-center w-[192px] h-[56px] sm:w-[442px]" style={{ border: "1px solid  #F4F8FA" }}>
                <IoIosArrowBack className="cursor-pointer" onClick={() => {
                    if (count > min) {
                        let aux = count - 1
                        setCount(aux)
                    }
                }} />
                <p>{count}</p>
                <IoIosArrowForward className="cursor-pointer" onClick={() => {
                    if (count < max) {
                        let aux = count + 1
                        setCount(aux)
                    }
                }} />
            </div>
        </div>
    )
}

