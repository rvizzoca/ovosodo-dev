import { motion } from 'framer-motion'
import React, { memo } from 'react'
import { useInView } from 'react-intersection-observer'

export const FadeIn = memo(function FadeIn({ children }: any) {
  const [ref, isVisible] = useInView({ threshold: 0.25 })
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        bounce: 0,
        duration: 1,
        type: 'spring',
      },
    },
    hidden: {
      opacity: 0,
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
