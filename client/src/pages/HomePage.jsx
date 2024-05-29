import React from 'react'
import Banner from '../components/home/Banner'
import BestSellerBooks from '../components/home/BestSeller'
import FavBook from '../components/home/FavBook'
import PromoBanner from '../components/home/PromoBanner'
import OtherBooks from '../components/home/OtherBooks'
import Review from '../components/home/Review'



const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  )
}

export default Home