import React from 'react'
import{motion} from "framer-motion"
import {Link} from "react-router-dom"

const Home = () => {

  return (
    <div className='home-container'>
      <motion.h1
        initial={{y:-10}}
        animate={{
          y: 10,
          transition:{
            duration: 1,
            ease: 'easeIn',
            repeat:Infinity,
            repeatType: 'reverse',
          }
        }}
      >
      <Link to="/About"> &#8659;</Link> 
      
      </motion.h1>     
  </div>
  )
}

export default Home