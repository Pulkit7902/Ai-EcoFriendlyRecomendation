import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import DisplayCurrency from '../helper/DisplayCurrency';
import moment from 'moment';

const OrderPage = () => {
  const [data, setData] = useState([]);

  const fetchOrderDetails = async () => {
    const response = await fetch(SummaryApi.allorderdetail.url, {
      method: SummaryApi.allorderdetail.method,
      credentials: 'include'
    });
    const responsedata = await response.json();
    setData(responsedata.data);
    console.log('Order is ->', responsedata);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div>
      {data.length === 0 && <p>No Order Found</p>}
      <div className='p-4 w-full'>
        {data.map((item, index) => {
          return (
            <div key={item.userId || index}>
              <p>{moment(item.createdAt).format('LL')}</p>
              <div className='border rounded bg-purple-100'>
                <div className='flex justify-between'>
                
                  <div className='grid gap-1'>
                    {item?.ProductDetail?.map((prod, index) => {
                      return (
                        <div className='flex gap-3' key={index}>
                          <img
                            src={prod?.image?.[0]}
                            alt='Product'
                            className='bg-white w-28 h-28 object-scale-down p-2'
                          />
                          <div>
                            <div className='font-medium text-lg text-ellipsis line-clamp-1'>{prod.name}</div>
                            

                            <div className='flex items-center gap-5 mt-1'>
                              <div className='text-purple-500'>{DisplayCurrency(prod.price)}</div>
                              <p>Quantity: {prod.quantity}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className='flex gap-4 flex-col p-2 '>
                    <div>
                    <div className='flex items-center justify-center gap-1 font-bold text-green-600'>
                      <p>Email:</p>
                      <p>{item.email}</p>
                    </div>
                      <div className='text-lg font-bold ml-1'>Payment Details:</div>
                      <p className='font-medium ml-1'>
                        Payment method: {item?.paymentDetails?.payment_method_type?.[0]}
                      </p>
                      <p className='font-medium ml-1'>
                        Payment Status: {item?.paymentDetails?.payment_status}
                      </p>
                    </div>
                    <div>
                      <div className='font-bold text-lg ml-1'>Shipping Details</div>
                      {item?.shipping_option?.map((shipping, index) => {
                        return (
                          <div key={index} className='ml-1'>
                            Shipping Amount: {DisplayCurrency(shipping?.shipping_amount)}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className='font-semibold ml-auto w-fit'>
                  Total Amount: {DisplayCurrency(item?.totalAmount)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const OrderDetail = () => {
  return <OrderPage />;
};

export default OrderDetail;

