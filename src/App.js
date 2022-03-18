import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Products from './pages/Products';
import ProductDetail from "./pages/ProductDetail";
import Article from './pages/Article';
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate replace to="products" />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="article" element={<Article />} />
        <Route path="article/:articleId" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;