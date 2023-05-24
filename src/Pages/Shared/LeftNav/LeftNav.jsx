import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/categories')
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
        </div>
    );
};

export default LeftNav;          