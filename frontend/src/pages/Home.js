import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
import Chatbot from '../components/Chatbot'
import EcoFriendlyRecommendations from '../components/EcoFriendlyProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"electronics"} heading={"Top's Electronics"}/>
      <HorizontalCardProduct category={"fashion"} heading={"Popular Fashion"}/>
    

      <VerticalCardProduct category={"personalcare"} heading={"Personal Care"}/>
      <VerticalCardProduct category={"officesupplies"} heading={"Office Supplies"}/>
      <VerticalCardProduct category={"beauty"} heading={"Beauty"}/>
      <VerticalCardProduct category={"furniture"} heading={"Furniture"}/>
      {/* <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/> */}
      <EcoFriendlyRecommendations/>
      <Chatbot/>

    </div>
    
  )
}

export default Home