import React from 'react';

const SingleAd = ({ ad }) => {

    const { img, productname, description, availability } = ad;

    return (
        <div>
            {
                !availability && <div className="card card-side shadow-md flex flex-col lg:flex-row ">
                    <div>
                        <figure><img src={img} alt="Movie" /></figure>
                    </div>
                    <div className="card-body flex flex-col justify-center items-center">
                        <h2 className="card-title text-4xl">{productname}</h2>
                        <p className='text-lg mt-5' >{description}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleAd;