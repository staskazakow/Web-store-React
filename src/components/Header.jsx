import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Items from './Items';
import ShopItems from './ShopItems';

export default function Header({clearShop,deleteItems,shop}) {
  let [cartOpen,setCartOpen] = useState(false)
 
  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaShoppingCart key={shop.id} onClick={() => setCartOpen(cartOpen=!cartOpen)} className={`shop ${cartOpen && "active"}`}/>
            {cartOpen && (
              <div className="shopOpen">
                {shop.map((el) => {
                  return(
                    <div key={el.id}>
                      {shop.length === 0 
                      ? <div> Корзина пуста</div>
                      : <ShopItems el={el} deleteItems={deleteItems}/>
                      }
                    </div>
                  )
                })}
                {shop.length>0
                ? <button className='clearShop' onClick={clearShop}>Очистить корзину</button>
                : <div className="ShopNull">Корзина пуста</div>
                }
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
