//@ts-nocheck
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

export const Display = ({ count, amount, product }) => {
    const [year, setYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth())
    const final_amount = (amount * 1)?.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })
    useEffect(() => {
        if (count) {
            let date = new Date().setMonth(count)
            setYear(new Date(date).getFullYear())
            setMonth(new Date(date).toLocaleString("en", { month: "long" }))
        }
    }, [count])
    return (
        <div className="my-[20px]" style={{ border: "1px solid #F4F8FA" }}>
            <div className="flex justify-between px-[32px] py-[20px] items-center">
                <h3>Monthly Amount</h3>
                <h2 style={{ fontSize: 32, fontWeight: 500, color: "#0079FF" }}>
                    {product?.interest
                        ? (
                            (amount * 1 + amount * 1 * ((product?.interest / 100) * 1)) /
                            count
                        ).toLocaleString("en-US", { style: "currency", currency: "USD" })
                        : ""}
                </h2>
            </div>
            <div
                style={{ backgroundColor: "#F4F8FA", fontSize: 12 }}
                className="px-[32px] py-[20px]">
                <p>
                    You’re planning {count} <span className="font-bold">monthly deposits</span> to
                    reach your <span className="font-bold"> {final_amount}</span> goal by{" "}
                    <span className="font-bold">
                        {month} {year}.
                    </span>{" "}
                    The total amount loaned will be{" "}
                    <span className="font-bold">
                        {" "}
                        {product?.interest
                            ? (
                                (amount * 1 + amount * 1 * ((product?.interest * 1) / 100)) /
                                1
                            ).toLocaleString("en-US", { style: "currency", currency: "USD" })
                            : ""}
                    </span>
                </p>
            </div>
        </div>
    )
}
