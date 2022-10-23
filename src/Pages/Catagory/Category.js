import React from 'react';
import { useLoaderData } from 'react-router-dom'
import NewsCard from '../Shared/NewsCard/NewsCard';

const Category = () => {
    // const categoryNews = useLoaderData();
    const Singlenews = useLoaderData();
    console.log(Singlenews);
    return (
        <div>
            <h2>All Category {Singlenews.length}</h2>
            {/* <NewsCard ></NewsCard> */}
            {
                Singlenews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;