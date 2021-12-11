import Card from './card';
import './App.css';
import articles from './data'


function App() {
  return (
    <div>
      <h1 id="tit">Today's articles</h1>
      <div className="flex-container">
          {
            articles.map((article, i) => { return (<Card article={ article } id={ i }/>) } )
          }
      </div>
    </div>
  );
}

export default App;
