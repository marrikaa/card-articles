import { Link } from "react-router-dom";

function Card(props) {
    return (
      <div>
        <div  className="frame flex-item">
            <h1> {props.article.title} </h1>
            <img className="img" src={props.article.imageUrl }></img>
            <p>{(props.article.summary) }</p>
            <Link to={props.article.link}> See full article</Link>
        </div>
      </div>
    );
  }

  export default Card;