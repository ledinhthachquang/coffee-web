import React from 'react'
import './Header.css'
import './TextSpan'
import images from '../../constants/images';
import { TextSpan } from './TextSpan';
import { motion} from "framer-motion";
const Header = () => {
  const line1= 'Hương vị chuẩn người Việt'
  const line2 = 'Chất Tận Gốc,Giá tại vườn'
  const sentence = {
    hidden: {opacity:1},
    visible: {
      opacity: 1,
      transition:{
        delay: 0.5,
        staggerChildren: 0.08,
        yoyo: 3,
      },
    },
  }
  const letter = {
    hidden : {opacity :0 , y:50},
    visible:{
      opacity: 1,
      y :0,
    },
  }
  return (
    <div className='app__header app__bg  section__padding'>
        <div className='app__content'>
              <motion.h1 className='p__opensans app__content-h1'>
                <TextSpan/>
              </motion.h1>
            
            <img src={images.spoon} alt="spoon_image" className="spoon__img" /> 
            {/* <p className='p__opensans'>Hương vị chuẩn người Việt <br />
            Chất tận gốc,giá tại vườn</p> */}
            <motion.div 
            className='wrapper'
            >
                <motion.h3
                className='p__opensans p__vl'
                variants={sentence}
                initial="hidden"
                animate="visible"
                >
                  {line1.split("").map((char,index)=>{
                    return(
                      <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                      </motion.span>
                    )
                  })}
                  <br/>
                  {line2.split("").map((char,index) =>{
                    return(
                      <motion.span key ={char + "-" +index} variants={letter}>
                        {char}
                      </motion.span>
                    )
                  })}
                  {/* Hương vị chuẩn người Việt <br />
                 Chất tận gốc,giá tại vườn */}
                </motion.h3>
            </motion.div>
          
        </div>
    </div>
  )
}

export default Header