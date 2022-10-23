import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link, useLoaderData } from 'react-router-dom';


const News = () => {
    const detailsNews = useLoaderData();
    
    return (
        <Card >
            <Card.Img variant="top" src={detailsNews.image_url} />
            <Card.Body>
                <Card.Title>{detailsNews.title}</Card.Title>
                <Card.Text>
                    {detailsNews.details}
                </Card.Text>
                <Link to={`/category/${detailsNews.category_id}`}><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default News;