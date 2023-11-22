/* eslint-disable react/prop-types */
import news from "../assets/news.png";

const NewsItems = ({title, description, src, url}) => {
  return (
    <div className="bg-dark text-light d-inline-block mb-3 my-3 mx-3 px-2 py-2">
        <div className="card bg-dark text-light d-flex mb-1 my-1 px-1 py-1" style={{maxWidth:"345px"}}>
            <img src={src?src:news} style={{height:"200px", width:"335px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{description? description.slice(0,90):""}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>

    </div>
  )
}

export default NewsItems;