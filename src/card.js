function Card(props) {
    return (
      <div>
        <div id="frame" className="flex-item">
            <h1 id="title"> {props.article.title} </h1>
            <img id="img" src={props.article.imageUrl }></img>
            <p id="summary">{(props.article.summary) }</p>
            <a id="link" href={props.article.link}>See full article</a>
        </div>
      </div>
    );
  }

  export default Card;