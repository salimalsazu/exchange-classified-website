import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import useTitle from '../../../Hook/useTitle';

const AddCategory = () => {

    //dynamic title
    useTitle('Add Category')

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleAddCategory = (data) => {
        console.log(data);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = 'https://api.imgbb.com/1/upload?key=a6f9b9970dcebe796e264ecdc5083f85'
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url);


                    const category = {
                        category: data.category,
                        description: data.description,
                        img: imgData.data.url,

                    }
                    //save information to the database 

                    fetch('https://host-server.vercel.app/categories', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(category)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            navigate('/dashboard/addproduct');
                            Swal.fire({
                                text: 'Category added succssfully'
                            })
                        })

                }
            })




    }

    return (
        <div>

            <form onSubmit={handleSubmit(handleAddCategory)} novalidate="" action="" className="flex flex-col w-full  p-12 rounded shadow-lg ng-untouched ng-pristine ng-valid  bg-blue-600 text-white">
                <h1 className='text-3xl text-center' >Add Category</h1>

                <label for="password" className="self-start mt-3 text-xs font-semibold">Category Name</label>
                <input {...register('category', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />


                <label className="label"> <span className="self-start mt-3 text-xs font-semibold">Photo</span></label>
                <input type="file" {...register("img", {
                    required: 'Photo is required'
                })} className="input input-bordered w-full max-w-xs px-4 mt-2 text-black" />


                <label for="password" className="self-start mt-3 text-xs font-semibold">Description</label>
                <input {...register('description', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />


                <button type="submit" className="flex items-center justify-center bg-white text-black mt-5 h-12 ">Add Category</button>


            </form>



        </div>
    );
};

export default AddCategory;


