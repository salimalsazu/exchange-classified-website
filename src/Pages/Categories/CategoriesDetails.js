
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';
import CatagoryWiseSingleProduct from './CatagoryWiseSingleProduct';

const CategoriesDetails = () => {

    //dynamic title
    useTitle('Product')
    const detailsProduct = useLoaderData();
    // console.log(detailsProduct);


    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    detailsProduct.map(detail => <CatagoryWiseSingleProduct detail={detail} key={detail._id} ></CatagoryWiseSingleProduct>)
                }
            </div>

        </div>
    );
};

export default CategoriesDetails;
