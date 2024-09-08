import { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/server'; // Supabase client

const CartContext = createContext();

// Sepet verisini sağlayan provider
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const supabase = createClient();

    useEffect(() => {
        // Sepetteki ürün sayısını Supabase'den al
        const fetchCartData = async () => {
            const { data: cartData } = await supabase.from('cart').select('*');
            setCartItems(cartData);
        };
        fetchCartData();
    }, []);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
}

// Sepet verisini kullanmak için custom hook
export function useCart() {
    return useContext(CartContext);
}
