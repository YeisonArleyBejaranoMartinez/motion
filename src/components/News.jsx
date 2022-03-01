import React from 'react'
import {Link} from "react-router-dom"
import {motion} from "framer-motion";

const News = () => {
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
    <motion.div 
      className='newsLetter-contianer' 
      variants={containerVariants} 
      initial="hidden"  
      animate="show">
      <h1>Desea recibir mas informacion?</h1>
      <div>
        <button className='newsLetter-button'>Si deseo saber más</button>
        <Link className='link' to="/">
          <button className='newsLetter-button'>No, llevame a la  home</button>
        </Link>
      </div>
    </motion.div>
  )
}

export default News