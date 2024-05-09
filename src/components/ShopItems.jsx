import React from "react";

const ShopItems = ({deleteItems,el}) => {

    return(
        <div className="shopDesc">
            <button onClick={() => deleteItems(el.id)} className='delete'>-</button>
            <img src={"./img/" + el.img} alt="" className='shopImg'/>
                <div >
                 <h1>{el.title}</h1>
                 <div> {el.price}$</div>
                 </div>
         </div>
    )
}
export default ShopItems;