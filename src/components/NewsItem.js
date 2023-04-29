import React, { Component } from 'react'

const NewsItem = (props) => {


    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card my-3" style={{ width: "18rem" }}>
                <img src={!imageUrl ? "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" : imageUrl} className="card-img-top" alt="..." />

                <div className="card-body">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">{source}
                        </span>
                    </div>

                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">author-{!author ? "Unknown" : author}</small></p>
                    <p className="card-text"><small className="text-body-secondary">{new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div >
    )
}
export default NewsItem
