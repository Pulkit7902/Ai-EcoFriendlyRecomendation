import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"electronics"} heading={"Top's Electronics"}/>
      <HorizontalCardProduct category={"fashion"} heading={"Popular Fashion"}/>

      <VerticalCardProduct category={"personalcare"} heading={"Personal Care"}/>
      <VerticalCardProduct category={"offocesupplies"} heading={"Office Supplies"}/>
      <VerticalCardProduct category={"beauty"} heading={"Beauty"}/>
      <VerticalCardProduct category={"furniture"} heading={"Furniture"}/>
      {/* <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/> */}
    </div>
  )
}

export default Home