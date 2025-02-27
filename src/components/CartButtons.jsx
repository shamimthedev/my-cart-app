import { useCart } from "../context/cartContext"


const CartButtons = ({ item, fromCart }) => {
    const { addToCart, removeFromCart, updateQuantity } = useCart()
    return (
        <div className={`w-max absolute top-5 right-5 ${fromCart && 'scale-90'}`}>
            <div className="space-x-2">
                {!item.inCart ? (
                    <button type="button" className="rounded-md border bg-zinc-400 py-1 px-2 text-sm text-white hover:bg-zinc-500 transition-colors cursor-pointer" onClick={() => addToCart(item)}>+ Add to Cart</button>) : (
                    <div>
                        <div className="flex">
                            <button className="px-3 border rounded-lg cursor-pointer" onClick={() => {
                                if (item.quantity === 1) {
                                    removeFromCart(item)
                                } else {
                                    updateQuantity(item, -1)
                                }
                            }
                            }>-</button>
                            <p className="flex items-center gap-x-1 mx-1">
                                <span className="grid place-items-center min-w-7 border bg-green-100 rounded-full">{item.quantity}</span>
                                <span className="text-xs">in cart</span>
                            </p>
                            <button className="px-3 border rounded-lg cursor-pointer" onClick={() => updateQuantity(item, 1)}>+</button>
                        </div>
                        <button className="bg-pink-300 text-white text-xs px-2 py-1 rounded-md block mx-auto mt-2 hover:bg-pink-400 cursor-pointer" onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartButtons