import React from 'react'
import s from './Footer.module.css'
import Contacts from '../Contacts/Contacts'
import GoogleMap from '../GoogleMap/GoogleMap'

function Footer() {
  return (
    <div className={s.footerContainer}>
      <div className='container'>
        <Contacts/>
        <GoogleMap/>
        </div>
    </div>
  )
}

export default Footer