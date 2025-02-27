import CartButtons from "./CartButtons"


const CartItem = ({ item, fromCart }) => {
    const { id, name, imageUrl, price } = item
    return (
        <div  key={id} className="group relative flex flex-col gap-y-2 border border-zinc-200 bg-white p-24 rounded-md">
            <img src={imageUrl} alt={name} width={300} height={300} className={`${!fromCart && ('group-hover:-translate-y-2 transition-all')} duration-500`} />
            <div className="absolute left-5 bottom-5">
                <h1 className={`text-zinc-700 ${fromCart && 'text-sm'}`}>{name}</h1>
                <span className={`text-pink-400 ${fromCart && 'text-sm'}`}>${price}</span>
            </div>
            <CartButtons item={item} fromCart={fromCart}/>
        </div>
    )
}

export default CartItem