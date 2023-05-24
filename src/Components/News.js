import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=606aacaa1da640daa9dfbf280305b3b9";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState(
            {
                articles: parsedData.articles,
                totalResults: parsedData.totalResults
            }
        );
    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=606aacaa1da640daa9dfbf280305b3b9&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState(
                {
                    articles: parsedData.articles,
                    page: this.state.page + 1
                }
            )
        }
    }
    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=606aacaa1da640daa9dfbf280305b3b9&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState(
            {
                articles: parsedData.articles,
                page: this.state.page - 1
            }
        )
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title : "No Title"}
                                    description={element.description ? element.description : "No description provided"}
                                    url={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePreviousClick}>&laquo; Previous</button>
                    <button type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News
