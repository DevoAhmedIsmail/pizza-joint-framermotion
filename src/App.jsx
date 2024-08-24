import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false)

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  const removeBase = ()=>{
    setPizza({...pizza, base: ""})
  }

  const removeAllTopping = ()=>{
    setPizza({...pizza, toppings: []})
  }

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.key}>

          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} removeBase={removeBase} />}
          />

          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} removeAllTopping={removeAllTopping} />}
          />

          <Route
            path="/order"
            element={<Order pizza={pizza} setShowModal={setShowModal} />}
          />

          <Route
            path="/"
            element={<Home />}
          />


        </Routes>

      </AnimatePresence>
    </>
  );
}

export default App;