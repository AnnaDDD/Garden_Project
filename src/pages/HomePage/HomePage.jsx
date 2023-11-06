import React from 'react'
import MainSection from '../../components/MainSection/MainSection'
import Catalog  from '../../components/Catalog/Catalog'
import CouponForm from '../../components/CouponForm/CouponForm'
import MainSaleSection from '../../components/MainSaleSection/MainSaleSection'


function HomePage() {
  return (
    <main>
    <MainSection />
    <Catalog />
    <CouponForm />
    <MainSaleSection />
    </main>
  )
}

export default HomePage

