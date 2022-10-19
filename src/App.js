import "./App.css";
import NewsBlock from "./components/news-block/news-block.component";
import OtherNewsBlock from "./components/other-news-block/other-news-block.component";

function App() {

  return (
    <div className="App">
      <NewsBlock />
      <OtherNewsBlock />
    </div>
  );
}

export default App;
