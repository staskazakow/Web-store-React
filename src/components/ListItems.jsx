import React, { useState } from 'react'
import Items from './Items'

export default function ListItems({modal,getModal,addItems,items}) {
   
  return (
    <div >
      <h1 className='list'>
        Список товаров
      </h1>
      <div className='ListItems'>
      {items.map(el => <Items modal={modal} getModal={getModal} addItems={addItems} key={el.id} item={el} />)}
      </div>
    </div>
      
  )
}
