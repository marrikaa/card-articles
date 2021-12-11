import Card from './card';
import './App.css';

let articles=[
  {
    title: "Global worming",
    imageUrl: "https://2.bp.blogspot.com/-NyeYKp2F4Rc/WR94zlDYT-I/AAAAAAAAADU/SKzbqkGREIQrnZF938zivkhUMrPGWZHaACLcB/s1600/global.jpg",
    summary: "Global worming is really bad",
    link: "https://www.ciwf.org.uk/factory-farming/environmental-damage/?gclid=CjwKCAiAtdGNBhAmEiwAWxGcUrvBfs8EAbU2BfPwjZwKVZGCQ6-bOGv1O8hDPpX5OTmFsxEdzBDxbxoCuEEQAvD_BwE"
  },
  {
    title: "Global worming",
    imageUrl: "https://2.bp.blogspot.com/-NyeYKp2F4Rc/WR94zlDYT-I/AAAAAAAAADU/SKzbqkGREIQrnZF938zivkhUMrPGWZHaACLcB/s1600/global.jpg",
    summary: "Global worming is really bad",
    link: "https://www.ciwf.org.uk/factory-farming/environmental-damage/?gclid=CjwKCAiAtdGNBhAmEiwAWxGcUrvBfs8EAbU2BfPwjZwKVZGCQ6-bOGv1O8hDPpX5OTmFsxEdzBDxbxoCuEEQAvD_BwE"
  },
  {
    title: "Global worming",
    imageUrl: "https://2.bp.blogspot.com/-NyeYKp2F4Rc/WR94zlDYT-I/AAAAAAAAADU/SKzbqkGREIQrnZF938zivkhUMrPGWZHaACLcB/s1600/global.jpg",
    summary: "Global worming is really bad",
    link: "https://www.ciwf.org.uk/factory-farming/environmental-damage/?gclid=CjwKCAiAtdGNBhAmEiwAWxGcUrvBfs8EAbU2BfPwjZwKVZGCQ6-bOGv1O8hDPpX5OTmFsxEdzBDxbxoCuEEQAvD_BwE"

  },
  {
    title: "Global worming",
    imageUrl: "https://2.bp.blogspot.com/-NyeYKp2F4Rc/WR94zlDYT-I/AAAAAAAAADU/SKzbqkGREIQrnZF938zivkhUMrPGWZHaACLcB/s1600/global.jpg",
    summary: "Global worming is really bad",
    link: "https://www.ciwf.org.uk/factory-farming/environmental-damage/?gclid=CjwKCAiAtdGNBhAmEiwAWxGcUrvBfs8EAbU2BfPwjZwKVZGCQ6-bOGv1O8hDPpX5OTmFsxEdzBDxbxoCuEEQAvD_BwE"
  },
  {
    title: "Global worming",
    imageUrl: "https://2.bp.blogspot.com/-NyeYKp2F4Rc/WR94zlDYT-I/AAAAAAAAADU/SKzbqkGREIQrnZF938zivkhUMrPGWZHaACLcB/s1600/global.jpg",
    summary: "Global worming is really bad",
    link: "https://www.ciwf.org.uk/factory-farming/environmental-damage/?gclid=CjwKCAiAtdGNBhAmEiwAWxGcUrvBfs8EAbU2BfPwjZwKVZGCQ6-bOGv1O8hDPpX5OTmFsxEdzBDxbxoCuEEQAvD_BwE"
  },
  {
    title: "Global worming",
    imageUrl: "https://2.bp.blogspot.com/-NyeYKp2F4Rc/WR94zlDYT-I/AAAAAAAAADU/SKzbqkGREIQrnZF938zivkhUMrPGWZHaACLcB/s1600/global.jpg",
    summary: "Global worming is really bad",
    link: "https://www.ciwf.org.uk/factory-farming/environmental-damage/?gclid=CjwKCAiAtdGNBhAmEiwAWxGcUrvBfs8EAbU2BfPwjZwKVZGCQ6-bOGv1O8hDPpX5OTmFsxEdzBDxbxoCuEEQAvD_BwE"
  }
];


function App() {
  return (
    <div>
      <h1 id="tit">Today's articles</h1>
      <div className="flex-container">
          {
            articles.map((article, i) => { return (<Card article={ article }/>) } )
          }
      </div>
    </div>
  );
}

export default App;
