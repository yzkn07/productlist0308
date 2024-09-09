"use client"
import { createClient } from "@/utils/supabase/client"
import { createContext, useEffect, useState, useContext } from "react"

const CartContext = createContext()

// Sepet verisini sağlayan provider
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])
    const supabase = createClient()

    useEffect(() =>{
        const fetchCartData = async () => {
            const { data: cartData , error } = await supabase.from('basket').select("*")
            setCartItems(cartData || [])
        }
        fetchCartData()
    },[cartItems])

    
    return(
        <CartContext.Provider value={{ cartItems, setCartItems}}>
            { children }
        </CartContext.Provider>
    )
}

// Sepet verisini kullanmak için custom hook
export function useCart() {
    return useContext(CartContext);
}