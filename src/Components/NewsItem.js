import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, url, newsUrl, date, author, source } = this.props;
        return (
            <div className="card my-3">
                <div className="card">
                    <div className='d-flex justify-content-end position-absolute ' style={{ right: 0 }}>
                        <span className=' badge rounded-pill bg-danger'>{source}</span>
                    </div>
                    <img src={url ? url : "https://img.jagranjosh.com/images/2023/May/2352023/Inouye-Solar-Telescope-What-is-Inouye-Solar-Telescope's-New-Images-min.jpg"} className="card-img-top" alt="https://img.jagranjosh.com/images/2023/May/2352023/Inouye-Solar-Telescope-What-is-Inouye-Solar-Telescope's-New-Images-min.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toDateString()}</small></p>
                        <a href={newsUrl} target='-blank' className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
