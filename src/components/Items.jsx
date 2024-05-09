import React from 'react'

export default function Items({modal,getModal,addItems,item}) {
  return (
    <div className='item'>
    <div >
      <div >
        <img onClick={() => getModal(item)} src={"./img/" + item.img} alt="" />
        <h1 onClick={() => getModal(item)}>{item.title}</h1>
        <div> {item.desc}</div>
        <div> {item.price}$</div>
      </div>
        <button onClick={() => addItems(item)}  className='addShop'>+</button>
      </div>
    </div>
  )
}
