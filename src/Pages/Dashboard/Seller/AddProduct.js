import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { authContext } from '../../../ContextProvider/ContextProvider';
import useSeller from '../../../Hook/useSeller';
import useTitle from '../../../Hook/useTitle';
import Loader from '../../../Loader/Loader';



const AddProduct = () => {

    //dynamic title
    useTitle('Add Product')
    const { user } = useContext(authContext);
    const navigate = useNavigate();
    const [isSeller, isSellerLoading] = useSeller(user?.email)


    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { register, handleSubmit } = useForm();

    const posttime = new Date().toLocaleString();

    //fetch 
    const { data: categories = [], refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://host-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })



    if (isSellerLoading) {
        return <Loader></Loader>
    }

    if (!isSeller) {
        navigate('/')
    }



    const handleSignIn = (data) => {
        console.log(data);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url);


                    const products = {
                        sellername: data.sellername,
                        productname: data.productname,
                        category: categories.find(item => item._id === data.category)['category'],
                        categoryid: data.category,
                        condition: data.condition,
                        description: data.description,
                        location: data.location,
                        mobile: data.mobile,
                        originalprice: data.originalprice,
                        resaleprice: data.resaleprice,
                        yearsofuse: data.yearsofuse,
                        yearofpurchase: data.yearofpurchase,
                        img: imgData.data.url,
                        posttime,
                        email: user.email
                    }

                    // console.log(products);
                    //save information to the database 

                    fetch('https://host-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            refetch();
                            navigate('/dashboard/myproducts');
                            Swal.fire({
                                text: 'Product added succssfully'
                            })
                        })
                }
            })


    }

    return (
        <div >
            <form onSubmit={handleSubmit(handleSignIn)} novalidate="" action="" className="flex flex-col w-full  p-12 rounded shadow-lg ng-untouched ng-pristine ng-valid  bg-blue-600 text-white">

                <label for="password" className="self-start mt-3 text-xs font-semibold">Seller Name</label>
                <input {...register('sellername', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />


                <label for="username" className="self-start text-xs font-semibold"> Product Name</label>
                <input {...register('productname', { required: 'Field is required' })} className="flex items-center text-black h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2" />

                <label for="password" className="self-start mt-3 text-xs font-semibold">Mobile Number</label>
                <input {...register('mobile', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />

                <label for="password" className="self-start mt-3 text-xs font-semibold">Location</label>
                <input {...register('location', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />

                <label for="password" className="self-start mt-3 text-xs font-semibold">Resale Price</label>
                <input {...register('resaleprice', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />

                <label for="password" className="self-start mt-3 text-xs font-semibold">Original Price</label>
                <input {...register('originalprice', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />

                <label for="password" className="self-start mt-3 text-xs font-semibold">Year of Use</label>
                <input {...register('yearsofuse', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />

                <label for="password" className="self-start mt-3 text-xs font-semibold">Years of Purchase</label>
                <input {...register('yearofpurchase', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />

                <label for="password" className="self-start mt-3 text-xsfont-semibold">Category</label>
                <select className='mt-5 py-2 text-black' {...register('category', { required: 'Field is required' })}>
                    {
                        categories.map(category => <option className='text-black' value={category._id}> {category.category}</option>)
                    }
                </select>

                <label for="password" className="self-start mt-3 text-xsfont-semibold">Condition</label>
                <select className='mt-5 py-2 text-black' {...register('condition', { required: 'Field is required' })}>
                    <option className='text-black' > Excellent</option>
                    <option className='text-black' > Good</option>
                    <option className='text-black' > Fair</option>
                </select>

                <label className="label"> <span className="self-start mt-3 text-xs font-semibold">Photo</span></label>
                <input type="file" {...register("img", {
                    required: 'Photo is required'
                })} className="input input-bordered w-full max-w-xs text-black" />

                <label for="password" className="self-start mt-3 text-xs font-semibold">Description</label>
                <input {...register('description', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />


                <button type="submit" className="flex items-center justify-center bg-white text-black mt-5 h-12 ">Add Product</button>


            </form>

        </div>
    );
};

export default AddProduct;


