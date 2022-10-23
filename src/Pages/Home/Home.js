import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Home = () => {
    const Allnews = useLoaderData();
    return (
        <div>
            <h3>this is home {Allnews.length}</h3>
            {
                Allnews.map(news => < NewsCard
                    key={news._id}
                    news= {news}
                >
                </NewsCard>)
        }


        </div>
    )
};

export default Home;