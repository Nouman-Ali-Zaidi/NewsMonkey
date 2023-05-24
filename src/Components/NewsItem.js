import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, url, newsUrl } = this.props;
        return (
            <div className="card my-3" style={{ width: "18rem" }}>
                <img src={url ? url : "https://img.jagranjosh.com/images/2023/May/2352023/Inouye-Solar-Telescope-What-is-Inouye-Solar-Telescope's-New-Images-min.jpg"} className="card-img-top" alt="https://img.jagranjosh.com/images/2023/May/2352023/Inouye-Solar-Telescope-What-is-Inouye-Solar-Telescope's-New-Images-min.jpg" />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target='-blank' className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
