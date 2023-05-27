import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { _id, title, details, image_url, author, rating, total_view } = news

    return (
        <div>
            <Card className='my-4'>
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '50px' }} src={author?.img} roundedCircle />
                    <div className='flex-grow-1 ps-3 align-items-center'>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{moment(author.published_date).format('YYYY-MM-D')}</p>
                    </div>
                    <div>
                        <FaRegBookmark /> <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length < 250 ? <>{details}</> :
                                <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>
                        }
                    </Card.Text>
                </Card.Body>

                <Card.Footer className="text-muted d-flex align-items-center">
                    <div className='flex-grow-1'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating?.number}
                            readonly
                        />
                        <span className='ps-3 fs-2 align-items-center'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye /> {total_view}
                    </div>
                </Card.Footer>

                {/* <Card.Footer className='d-flex'>
                    <div className='flex-grow-1'>

                        <div>
                            <FaEye /> {total_view}
                        </div>
                    </div>
                </Card.Footer> */}
            </Card>
        </div>
    );
};

export default NewsCard;