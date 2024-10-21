import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';

const AdminPannel = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user);
  const[allUser , setAllUser ] = useState([])
  const [allproduct, setAllProduct] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [allorder, setallorderData] = useState([]);
  const fetchalluser = async() =>{
    const dataResponse = await fetch(SummaryApi.alluser.url , {
        method: SummaryApi.alluser.method,
        credentials:'include'
    })
    const dataApi = await dataResponse.json()
    console.log(dataApi)
    if(dataApi.success){
        setAllUser(dataApi.data)

    }
    if(dataApi.error){
      
    }

}



useEffect(()=>{
    fetchalluser();


},[])

  useEffect(() => {
    // if (user?.role !== 'ADMIN') {
    //   navigate('/');
    // }
  }, [user]);
  const fetchAllProduct = async () => { // Removed unused parameter
    try {
      const response = await fetch(SummaryApi.getproduct.url);
      const dataresponse = await response.json();
      setAllProduct(dataresponse?.data || []);
    } catch (error) {
      console.error('Error fetching products:', error); // Added error handling
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, []); 
 

  const fetchOrderDetails = async () => {
    const response = await fetch(SummaryApi.allorderdetail.url, {
      method: SummaryApi.allorderdetail.method,
      credentials: 'include'
    });
    const responsedata = await response.json();
    setallorderData(responsedata.data);
    console.log('Order is ->', responsedata);
    const total = responsedata.data.reduce((acc, order) => acc + order.totalAmount, 0);
    setTotalSales(total);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);// Dependencies should be included if needed


  return (
    <div className='flex flex-col md:flex-row h-full min-h-[calc(100vh-120px)]'>
      <aside className='w-full md:w-1/4 lg:w-1/5 customShadow bg-green-300'>
        <div className='flex flex-col items-center p-4'>
          <div className='relative flex justify-center text-4xl cursor-pointer mb-4'>
            {user?.profilepic ? (
              <img
                src={user?.profilepic}
                className='w-20 h-20 rounded-full'
                alt={user?.name}
              />
            ) : (
              <FaUser />
            )}
          </div>
          <p className='text-lg capitalize font-semibold'>{user?.name}</p>
          <p className='text-sm'>{user?.role}</p>
        </div>
        {/* Navigation */}
        <nav className='flex flex-col'>
          <Link
            to='/all-user'
            className='px-4 py-2 hover:bg-slate-100'
          >
            All Users
          </Link>
          <Link
            to='/product'
            className='px-4 py-2 hover:bg-slate-100'
          >
            Products
          </Link>
          <Link
            to='/orderdetail'
            className='px-4 py-2 hover:bg-slate-100'
          >
            Orders
          </Link>
        </nav>
      </aside>
      <main className='w-full md:w-3/4 lg:w-4/5 p-4 h-2'>
      <div className="grid grid-cols-2 gap-4 p-8 h-[600px]">
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Number of Users Login</h2>
        <p className='text-center relative top-5 text-9xl '>{allUser.length}</p>
      </div>
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Total Sales</h2>
        <p className='text-center relative top-5 text-9xl '>{totalSales}</p>
      </div>
     <Link to={"/individualcategory"}>
     <div className="bg-red-500 text-white p-6 rounded-lg shadow-md h-full">
        <h2 className="text-xl font-bold">Total Number of Products</h2>
        <p className='text-center relative top-5 text-9xl '>{allproduct.length}</p>
      </div>
     </Link>
      <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Total Number of Orders</h2>
        <p className='text-center relative top-5 text-9xl '>{allorder.length}</p>
      </div>
    </div>
      </main>
    </div>
  );
};

export default AdminPannel;
