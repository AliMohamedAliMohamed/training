"use client"
import Stripe from "stripe"
import { Card } from "./ui/card"
import { useEffect, useState } from "react"
import Image from "next/image"
interface props{
    products:Stripe.Product[]
}
export default function Coursel({ products }: props) {
    const [current, setCurrent] = useState<number>(0)
    useEffect(() => {
        const interval=setInterval(() => {
            setCurrent((prev)=>prev+1 % products.length)
        }, 3000);
        return()=>clearInterval(interval)
    }, [products.length])
    
    const currentProudect = products[current]
    const price=currentProudect.default_price as Stripe.Price
    return <Card>
        {currentProudect.images && currentProudect.images[0] && (<div>
            <Image alt={currentProudect.name} src={currentProudect.images[0] } layout="fill" objectFit="cover"/>
</div>)}
    </Card>
}