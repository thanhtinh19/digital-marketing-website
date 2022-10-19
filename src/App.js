import './App.css';
import Footer from './Component/LayoutComponent/Footer';
import Header from './Component/LayoutComponent/Header';
import LayoutOurBlog from './Component/LayoutComponent/LayoutOurBlog';
import LayoutOurClient from './Component/LayoutComponent/LayoutOurClient';
import LayoutOurPortfolio from './Component/LayoutComponent/LayoutOurPortfolio';
import LayoutOurWork from './Component/LayoutComponent/LayoutOurWork';

function App() {

  return (
      <div className="App">
        <Header/>
        <LayoutOurWork/>
        <LayoutOurClient/>
        <LayoutOurPortfolio/>
        <LayoutOurBlog/>
        <Footer  />
      </div>
  );
}

export default App;
