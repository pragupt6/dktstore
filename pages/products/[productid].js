import React from 'react'
import { useRouter } from 'next/router'
const products = () => {
    const router = useRouter();
    const { productid } = router.query;
    return (
        <div>
            <h1>Details about products - {productid}</h1>
        </div>
    )
}

export default products
