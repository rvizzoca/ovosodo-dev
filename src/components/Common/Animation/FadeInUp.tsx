import { motion } from 'framer-motion'
import React, { memo } from 'react'
import { useInView } from 'react-intersection-observer'

export const FadeInUp = memo(function FadeInUp({ children }: any) {
  const [ref, isVisible] = useInView({ threshold: 0.25 })
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        bounce: 0,
        duration: 0.8,
        type: 'spring',
      },
    },
    hidden: {
      opacity: 0,
      y: 60,
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  )
})
