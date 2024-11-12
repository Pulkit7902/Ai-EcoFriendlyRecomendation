import React, { useContext, useEffect, useRef, useState } from 'react'
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct'
import displayINRCurrency from '../helpers/displayCurrency'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import addToCart from '../helpers/addToCart'
import Context from '../context'
import { FaArrowDown } from "react-icons/fa6";
import { FaSubscript } from 'react-icons/fa'

const HorizontalCardProduct = ({category, heading}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const loadingList = new Array(13).fill(null)

    const [scroll,setScroll] = useState(0)
    const scrollElement = useRef()


    const { fetchUserAddToCart } = useContext(Context)

    const handleAddToCart = async(e,id)=>{
       await addToCart(e,id)
       fetchUserAddToCart()
    }

    const fetchData = async() =>{
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)

        console.log("horizontal data",categoryProduct.data)
        setData(categoryProduct?.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const scrollRight = () =>{
        scrollElement.current.scrollLeft += 300
    }
    const scrollLeft = () =>{
        scrollElement.current.scrollLeft -= 300
    }


  return (
    <div className='container mx-auto px-4 my-6 relative'>

            <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

                
           <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all' ref={scrollElement}>

            <button  className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}><FaAngleLeft/></button>
            <button  className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}><FaAngleRight/></button> 

           {   loading ? (
                loadingList.map((product,index)=>{
                    return(
                        <div className='w-full min-w-[380px] md:min-w-[390px] max-w-[380px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                            <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'>

                            </div>
                            <div className='p-4 grid w-full gap-2'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full'></h2>
                                <p className='capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full'></p>
                                <div className='flex gap-3 w-full'>
                                    <p className='text-green-500 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                    <p className='text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                </div>
                                <button className='text-sm  text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse'></button>
                            </div>
                        </div>
                    )
                })
           ) : (
            data.map((product,index)=>{
                return(
                    <Link to={"product/"+product?._id} className='w-full min-w-[380px] md:min-w-[380px] max-w-[380px] md:max-w-[380px] h-48 bg-white rounded-sm shadow flex'>
                        <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]'>
                            <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply'/>
                        </div>
                        
                        <div className='p-4 grid'>
                           
                            {
                                product?.recyclable === 'Yes' &&(
                                    <div className='flex items-center justify-center gap-2'>
                                          <h2 className='text-center  text-sm font-medium'>Recycable:</h2>
                                          <p className='text-green-500'>Yes</p>
                                      
                                    </div>
                                )
                            }
                            {
                                product?.recyclable === 'No' &&(
                                    <div className='flex items-center justify-center gap-2'>
                                          <h2 className='text-center  text-sm font-medium'>Recycable:</h2>
                                          <p className='text-red-500'>No</p>
                                      
                                    </div>
                                )
                            }
                            <div className='flex items-center justify-center '>
                            <h2 className='font-bold text-green-500 text-base   border-green-500 text-ellipsis '>{product?.brandName}</h2>
                            <div className='flex justify-center items-center ml-auto gap-2  '>
                            <h2 className='font-bold text-green-500 text-base   border-green-500 text-ellipsis '>SR:</h2>
                            <h2 className='font-bold text-black text-base  border-green-500 text-ellipsis '>{product?.sustainabilityRating}</h2>

                            </div>
                            </div>
                            <div className='flex gap-2 items-center '>
                            <h2 className='font-bold text-xs text-green-400  border-green-500 text-ellipsis '>CarbonFootprint:</h2>
                            <div className='flex text-red-500 items-center '>
                            <h2 className='font-bold text-xs text-red-500   border-green-500 text-ellipsis '> {product?.carbonfootprint}kgCO2</h2>
                            <FaArrowDown className='text-red-500'/>

                            </div>
                            

                            </div>
                            
                           
                        

                          
                           <h2 className='font-medium text-base md:text-lg  text-black'>{product?.productName}</h2>
                          
                           
                            <p className='capitalize text-slate-500'>{product?.category}</p>
                            <div className='flex gap-3'>
                                <p className='text-green-500 font-medium'>{ displayINRCurrency(product?.sellingPrice) }</p>
                                <p className='text-slate-500 line-through'>{ displayINRCurrency(product?.price)  }</p>
                            </div>
                            <button className='text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-0.5 rounded-full' onClick={(e)=>handleAddToCart(e,product?._id)}>Add to Cart</button>
                        </div>
                    </Link>
                )
            })
           )
               
            }
           </div>
            

    </div>
  )
}

export default HorizontalCardProduct