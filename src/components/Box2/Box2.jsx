import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Box2() {
    const [isAnimating, setIsAnimating] = useState(false)
    return (
        <div className="box-container">
            <motion.div
                className="box"
                drag
                dragConstraints={{
                    right: 30,
                    left: -20,
                    top: 10,
                    bottom: 10
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
                onClick={() => setIsAnimating(!isAnimating)}
            >

            </motion.div>
        </div>
    )
}

export default Box2
