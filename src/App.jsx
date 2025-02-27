import { useEffect } from 'react'
import CartItem from './components/CartItem.jsx'
import { useCart } from './context/cartContext.jsx'
import ShoppingCart from './components/ShoppingCart.jsx'
import { getItemFromStorage, getParsedItemFromStorage } from './utilities/localStorageFns.jsx'

function App() {
  const { allItems, setItems, setCartItemsFromStorage } = useCart()

  useEffect(() => {
    setItems()
    if(getItemFromStorage('cartItems')?.length !== 0 && getItemFromStorage('cartItems') !== null) {
      setCartItemsFromStorage()
    }
  }, [])

  return (
    <>
      <div className="grid py-20 place-items-center">
        <h1 className="lg:text-5xl md:text-4xl text-3xl px-10 text-center text-gray-500 mb-16 italic">Trend Alert: Must-Have Outfits of the Season</h1>
        <ShoppingCart />
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 place-items-start gap-10 xl:px-6 px-10">
          {allItems?.map((item) => {
            return <CartItem key={item.id} item={item} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
