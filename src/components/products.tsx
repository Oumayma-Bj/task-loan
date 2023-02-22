//@ts-nocheck
import React from "react"



export const Products = ({ setProduct, products }) => {

    return (
        <div className="flex justify-center items-center gap-[10px]">
            {products.map((product, index) =>
                <div key={index} onClick={() => setProduct(product)} className="cursor-pointer">
                    <img alt="" src={product.image} className={`${product.name === 'Automobile Loan' ? 'w-[86px]' : product.name === 'Housing Loan' ? 'w-[74px] h-[69px]' : 'w-[69px] h-[69px]'}`} />
                </div>)}
        </div>
    )
}


