import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

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
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=606aacaa1da640daa9dfbf280305b3b9&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState(
            {
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            }
        );
    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=606aacaa1da640daa9dfbf280305b3b9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState(
                {
                    articles: parsedData.articles,
                    page: this.state.page + 1,
                    loading: false
                }
            )
        }
    }
    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=606aacaa1da640daa9dfbf280305b3b9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState(
            {
                articles: parsedData.articles,
                page: this.state.page - 1,
                loading: false
            }
        )
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
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
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News
