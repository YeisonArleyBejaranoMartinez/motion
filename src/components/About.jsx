import { motion } from 'framer-motion'
import React from 'react'
import {Link} from "react-router-dom"

const About = () => {
  const containerVariants={
    hidden:{
      opacity: 0,
      y: "50vh"
    },
    show:{
      opacity: 1,
      y:0,
      transition: {
        type: "spring",
        stiffiness: 100,
      }
    }
  }
  return (
    <>
    <motion.div className='about-container' variants={containerVariants} initial="hidden" animate="show">
      <h1>About</h1>
      <div className='about-desc'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum explicabo enim assumenda velit corporis ullam odit non placeat. A aspernatur, sunt illo nesciunt suscipit tenetur omnis ducimus nostrum obcaecati?
        </p>
        <div className=''>svg</div>
      </div>
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
          <Link className='link' to="/News"> &#8659;</Link> 
          
          </motion.h1>     
      </div>
    </motion.div>
      </>
  )
}

export default About