import React, { forwardRef, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import { Button } from '../UI/Button/Button'
import styles from './Alert.module.css';

const Alert = forwardRef(({showMessage, setShowMessage, cleanCart, context}, ref) => {

    // console.log(showMessage);
    useEffect(() => {
        //  if (context === "coupon"){
        //   const verticalScrollPosition = window.scrollY;
        //   window.scrollTo(verticalScrollPosition, 0);
        //  } else {
        //   window.scrollTo(0, 0);
        //  }
            window.scrollTo(0, 0);
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
            document.body.style.overflow = 'hidden';
    
            return () => {
              document.documentElement.style.paddingRight = '';
              document.body.style.overflow = 'auto';
            };
       
    
      }, []);

  return (
    <div
    className={`${styles.allert_wrapper} ${styles[showMessage ? 'active' : null]}`}
    ref={ref}
    style={{
      // top: window.scrollY,
      height: '100vh',
    }}
  >
    <div className={styles.alert}>
      <IoMdClose
        className={styles.close_btn}
        onClick={() => setShowMessage(false)}
      />
      <p className={styles.alert_message}>{
       context==="coupon" ? 
        `Number` :
      `Finish order and clean cart`
      }</p>

      <Button text="Finish" content="order" onClick={cleanCart} />
    </div>
  </div>
  )
})

export default Alert