import React, { useEffect, useState } from 'react';
import displayINRCurrency from '../helpers/displayCurrency';
import { Link } from 'react-router-dom';

const EcoFriendlyRecommendations = ({ productId }) => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRecommendations = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId }), // Send the product ID to get recommendations
            });
            const data = await response.json();
            setRecommendations(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (productId) {
            fetchRecommendations();
        }
    }, [productId]);

    return (
        <div className='container mx-auto px-4 my-6'>
            <h2 className='text-2xl font-semibold py-4'>Eco-Friendly Recommendations</h2>
            {loading ? (
                <p>Loading...</p>
            ) : recommendations.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {recommendations.map((product) => (
                        <Link to={`product/${product._id}`} key={product._id} className='w-full bg-white rounded-sm shadow'>
                            <div className='bg-slate-200 h-48 flex justify-center items-center'>
                                <img src={product.productImage[0]} className='object-scale-down h-full' alt={product.productName} />
                            </div>
                            <div className='p-4'>
                                <h3 className='font-bold text-green-500 text-base'>{product.brandName}</h3>
                                <h4 className='font-medium text-lg text-black'>{product.productName}</h4>
                                <p className='text-slate-500'>{product.category}</p>
                                <div className='flex gap-3'>
                                    <p className='text-green-500 font-medium'>{displayINRCurrency(product.sellingPrice)}</p>
                                    <p className='text-slate-500 line-through'>{displayINRCurrency(product.price)}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p>No eco-friendly products found.</p>
            )}
        </div>
    );
};

export default EcoFriendlyRecommendations;

