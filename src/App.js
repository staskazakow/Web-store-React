import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ListItems from './components/ListItems';
import Modal from './components/Modal';
function App() {
  const [items,setItems] = useState([{
    id:1,
    title:"Стул",
    img:'stul1.jpg',
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dolor aspernatur natus.",
    price:"49.99"
},
{
  id:2,
  title:"Стул",
  img:'stul2.jpeg',
  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dolor aspernatur natus.",
  price:"69.99"
},
{
  id:3,
  title:"Стул",
  img:'stul1.jpg',
  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dolor aspernatur natus.",
  price:"69.99"
},
{
  id:4,
  title:"Стул",
  img:'stul1.jpg',
  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dolor aspernatur natus.",
  price:"69.99"
},
{
  id:2,
  title:"Стул",
  img:'stul2.jpeg',
  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dolor aspernatur natus.",
  price:"69.99"
},
{
  id:2,
  title:"Стул",
  img:'stul2.jpeg',
  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dolor aspernatur natus.",
  price:"69.99"
}
])
let [shop,setShop] = useState([])
let [modal,setModal] = useState(false)
let [fullItem,setFullItem] = useState({})
const addItems = (item) => {
  setShop([...shop,item])
}
const deleteItems = (id) => {
  setShop(shop.filter(el => el.id !== id))
}
const clearShop = () => {
  setShop([])
}
const getModal = (item) => {
  setModal(!modal)
  setFullItem(item)
}
  return (
    <div className="App">
      <Header clearShop = {clearShop} deleteItems={deleteItems} shop ={shop}/>
      <ListItems getModal={getModal} modal={modal} addItems={addItems} items={items} key={items.id}/>
      {modal && <Modal getModal={getModal} addItems={addItems} item={fullItem} />}
      <Footer/>
    </div>
  );
}

export default App;
