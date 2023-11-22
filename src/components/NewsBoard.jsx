/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import NewsItems from "./NewsItems";


const NewsBoard = ({category}) => {

    const [articles,setArticle] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setArticle(data.articles));
    },[category])

  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger ">News</span></h2>
        {
            articles.map((news,index)=>{
                return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })
        }
    </div>
  )
}

export default NewsBoard;