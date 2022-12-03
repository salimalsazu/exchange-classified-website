import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { category: categoryname, description, img, _id } = category;

    return (

        <div className="card w-80 shadow-xl flex justify-center items-center">
            <figure className=" w-28 px-5 mb-5 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{categoryname}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <Link to={`/categories/${_id}`} ><button className="bg-gradient-to-r from-primary to-secondary px-8 py-2 text-white mt-4">Details Product</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Category;