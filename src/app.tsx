//@ts-nocheck
import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Products } from "@components/products"
import { Money } from "@components/money"
import { Months } from "@components/months"
import { Display } from "@components/display"

var products = require("../build/public/products.json")

const App = () => {
    const [count, setCount] = useState(12)
    const [product, setProduct] = useState(products[0])
    const [amount, setAmount] = useState("0")
    useEffect(() => {
        setAmount(product.min_amount.split(",")[0] * 1)
        setCount(product.min_tenure * 1)
    }, [product])
    return (
        <div className="flex justify-center ">
            <div className="">
                <h1 className="text-center m-[20px]" style={{ fontSize: 20, color: "#1B31A8" }}>
                    Let's Plan Your <span className="font-bold">loan</span>
                </h1>
                <div
                    className="w-[560px] sm:w-screen h-[511px] bg-white px-[40px] py-[10px]"
                    style={{ borderRadius: 8 }}>
                    <div>
                        <Products setProduct={setProduct} products={products} />
                        <div className="flex justify-between items-center flex-wrap">
                            <Money
                                min={product.min_amount}
                                max={product.max_amout}
                                setAmount={setAmount}
                                amount={amount}
                            />
                            <Months
                                count={count}
                                setCount={setCount}
                                min={product.min_tenure}
                                max={product.max_tenure}
                            />
                        </div>
                        <Display product={product} count={count} amount={amount} />
                        <div className="flex justify-center">
                            <button
                                className="w-[320px] h-[56px]"
                                style={{
                                    color: "white",
                                    backgroundColor: "#1B31A8",
                                    borderRadius: 32,
                                }}>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
