import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'
import moment from 'moment/moment';
import { FaCalendar } from 'react-icons/fa';

const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://dragon-news-server-mdshafin90.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='my-3'>
            <h4 className='text-center'>All Category: {categories.length}</h4>
            <div className='my-3 ps-4'>
                {
                    categories.map(category => <p className='rounded bg-light fw-bold p-3' key={category.id}>
                        <Link className='text-dark text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>

            <div>
                <div>
                    <img className='w-100' src={img1} alt="" />
                    <h4 className='my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                    <div className='d-flex align-items-center'>
                        <p>Sports</p>
                        <p className='ms-3'><FaCalendar />  {moment().format('MMM D, YYYY')}</p>
                    </div>
                </div>

                <div>
                    <img className='w-100' src={img2} alt="" />
                    <h4 className='my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                    <div className='d-flex align-items-center'>
                        <p>Sports</p>
                        <p className='ms-3'><FaCalendar />  {moment().format('MMM D, YYYY')}</p>
                    </div>
                </div>

                <div>
                    <img className='w-100' src={img3} alt="" />
                    <h4 className='my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                    <div className='d-flex align-items-center'>
                        <p>Sports</p>
                        <p className='ms-3'><FaCalendar />  {moment().format('MMM D, YYYY')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;          