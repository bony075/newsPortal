import React from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShare, FaStar } from "react-icons/fa";
const NewsCard = ({ news }) => {
    const { title, _id, details, author, image_url, rating, total_view } = news;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image
                        roundedCircle
                        src={author?.img}
                        style={{ height: '60px' }}
                    >
                    </Image>
                    <div className='ms-3'>
                        <p className='mb-0'>{author?.name}</p>
                        <p className='mt-0'>{author?.published_date}</p>

                    </div>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShare className='ms-2'></FaShare>

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>
                                {details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link>
                            </p> : <p>{details }</p>
                    }
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div className='d-flex align-items-center' >
                    <FaStar className='text-warning me-3' ></FaStar>
                    {rating?.number}
                </div>
                <div>
                    <FaEye className='me-3'></FaEye>{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;