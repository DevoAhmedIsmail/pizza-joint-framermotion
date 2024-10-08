import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4, // higher mass means move slower      
      damping: 8, // damping controls the springiness (higher means less springy)
      when: "beforeChildren", //  happened before the children animation started (To make the animation start after this end )
      staggerChildren: 0.4, // animate children with a delay for each child (each child will be delayed one after the other)
    }
  },
  exit: {
    x: "-100vw",
    transition: { ease: 'easeInOut' }
  }
}

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000)

    return () => {
      setShowModal(false);
    }
    
  },[setShowModal])

  return (
    <motion.div 
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p
        variants={childVariants}
      >You ordered a {pizza.base} pizza with:</motion.p>

      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;