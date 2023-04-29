import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);


    const capitalizeFirstLetter = (String) => {
        return String.charAt(0).toUpperCase() + String.slice(1);
    }



    const updateNews = async () => {
        // props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=135dacda30e945179f19402b2bb5c13e&page=1&pagesize=${props.pageSize}`;

        setloading({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        // props.setProgress(100);
    }
    useEffect(() => {
        document.title = `NewsMonkey-${capitalizeFirstLetter(props.category)}`
        updateNews();
    }, [])


    // const handleprevClick = async () => {
    //     console.log("Previous");

    //     setpage({ page: page - 1 });
    //     updateNews();
    // }
    // const handleNextClick = async () => {
    //     console.log("Next");

    //     setpage({ page: page + 1 });
    //     updateNews();
    // }

    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=135dacda30e945179f19402b2bb5c13e&page=${page + 1}&pagesize=${props.pageSize}`;
        setpage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)





    };


    return (
        <>
            <h2 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>News Monkey-Top Headlines-{capitalizeFirstLetter(props.category)}</h2 >
            {loading && <Spinner />
            }
            <InfiniteScroll
                dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== articles} loader={loading && <Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                            </div>

                        })}
                    </div>
                </div>
            </InfiniteScroll >
            {/*<div className="container d-flex justify-content-center">
                            <button disabled={pageSize <= 1} type="button" className="btn btn-secondary  mx-3" onClick={handleprevClick}>&larr; Previous</button>
                            <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-info" onClick={handleNextClick}>Next &rarr;</button>
                        </div> */}



        </>
    )
}


export default News