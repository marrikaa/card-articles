import { useParams } from "react-router-dom";
import articles from "./data";
import Card from "./card";

function Article(props) {
    const { id } = useParams();

    return (
        <div className="wholearticle">
            <h1 className="title"> {articles[id].title} </h1>
            <img className="bigimg" src={articles[id].imageUrl }></img>
            <p className="fullarticle">{articles[id].fullArticle}</p>
        </div>
        
    );
  }

  export default Article;