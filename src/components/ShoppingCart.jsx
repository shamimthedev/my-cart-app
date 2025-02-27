import { ShoppingCartIcon, XIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useCart } from "../context/cartContext"
import CartItem from "./CartItem"
import { formatCurrency } from "../utilities/formatCurrency"

const ShoppingCart = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const { allItems, setLocalStorage } = useCart()

    useEffect(() => {
        const inCartItems = allItems.filter((item) => item.inCart)
        setCartItems(inCartItems?.reverse())

        const price = inCartItems.reduce((acc, item) => {
            return (acc += item.price * item.quantity)
        }, 0)

        setTotalPrice(price)
        setLocalStorage()
    }, [allItems])

    return (
        <>
            {cartItems.length !== 0 && (
                <div className={`w-[300px] h-screen bg-gray-200 fixed top-0 z-30 border-l-4 border-red-400 rounded-tl-lg ${isOpen ? 'right-0' : '-right-[300px]'}`}>
                    <div className="w-full h-16 bg-white absolute left-0 top-0 z-10 grid place-items-center border rounded-lg">
                        <h1 className="text-lg text-gray-600">Shopping Cart</h1>
                        <button className="w-9 h-9 absolute right-3 z-20 bg-yellow-400 grid place-items-center border-2 rounded-full hover:bg-yellow-500 transition-colors cursor-pointer" onClick={() => setIsOpen(false)}>
                            <XIcon className=" text-white" />
                        </button>
                    </div>
                    <button className="w-9 h-9 absolute top-4 -left-14 z-20 bg-yellow-400 grid place-items-center border-2 rounded-full cursor-pointer" onClick={() => setIsOpen(true)}>
                        <ShoppingCartIcon className="text-xs text-white" />
                        <span className="w-6 h-6 absolute -bottom-4 -left-2 bg-pink-400 grid place-items-center text-sm text-white rounded-full border border-gray-300">
                            {cartItems?.length > 9 ? '9+' : cartItems?.length}
                        </span>
                    </button>
                    <div className="flex h-screen flex-col gap-y-3 overflow-y-scroll px-5 pt-20 pb-24">
                        {cartItems?.map((item) => {
                            return <CartItem key={item.id} item={item} fromCart={true} />
                        })
                        }
                    </div>
                    <div className="grid place-items-center border rounded-lg w-full h-20 absolute bottom-0 left-0 bg-white z-10">
                        <h1 className="text-xl text-gray-600">Total: {formatCurrency(totalPrice)}</h1>
                        <button className="px-2 rounded-md text-white bg-blue-300 hover:bg-blue-400 transition-colors cursor-pointer">Buy now</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ShoppingCart