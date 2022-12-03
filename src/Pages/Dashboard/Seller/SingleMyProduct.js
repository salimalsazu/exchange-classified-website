import React from 'react';
import Swal from 'sweetalert2';

const SingleMyProduct = ({ user, index, handleDelete }) => {

    const { img, productname, location, resaleprice, originalprice, yearsofuse, posttime, sellername, condition, description, _id } = user;

    const handleAdvertisement = () => {

        const ad = {
            img,
            productname,
            location,
            resaleprice,
            originalprice,
            yearsofuse,
            sellername,
            condition,
            posttime,
            description,
            bookingid: _id
        }
        fetch('https://host-server.vercel.app/ads', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ad)
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                Swal.fire({
                    text: 'Your Product is now Advertising'
                })
            })

    }



    return (

        <tr>
            <th>{index + 1}</th>
            <td><img className='w-10' src={user.img} alt="" /></td>
            <td>{user.productname}</td>
            <td>{user.resaleprice}</td>
            <td>
                {user.resaleprice && !user.availability && <button className='btn btn-sm bg-gradient-to-r from-primary to-secondary text-white'  >Available</button>}

                {
                    user.resaleprice && user.availability && <button className='btn btn-sm bg-gradient-to-r from-primary to-secondary text-white' >Sold</button>
                }


            </td>
            <td>
                {
                    user.resaleprice && !user.availability && <button onClick={handleAdvertisement} className='btn btn-sm bg-gradient-to-r from-primary to-secondary text-white ' >Advertsie</button>
                }
                {
                    user.resaleprice && user.availability && <p className='btn btn-sm bg-gradient-to-r from-primary to-secondary text-white' >Not Avilable</p>
                }

            </td>
            <td><button onClick={() => handleDelete(user)} className='btn btn-sm bg-gradient-to-r from-primary to-secondary text-white' >Delete</button></td>

        </tr >

    );
};

export default SingleMyProduct;