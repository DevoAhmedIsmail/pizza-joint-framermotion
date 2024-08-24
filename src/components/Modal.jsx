import { motion,AnimatePresence } from 'framer-motion'
import React from 'react'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const Modal = ({showModal, setShowModal}) => {
  return (
    <AnimatePresence mode='wait'>
        {
            showModal && (
                <motion.div 
                    className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="modal"

                    >
                        <p>Want to make another pizza?</p>
                        <button>Start Again</button>
                    </motion.div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default Modal
