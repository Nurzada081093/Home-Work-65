import ToolBar from '../../Components/ToolBar/ToolBar.tsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Home/Home.tsx';
import About from '../About/About.tsx';
import History from '../History/History.tsx';
import News from '../News/News.tsx';
import Offer from '../Offer/Offer.tsx';
import Comment from '../Comment/Comment.tsx';
import Admin from '../Admin/Admin.tsx';

const MyCoffee = () => {

  const location = useLocation();
  console.log(location);

  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pages" element={<Home/>}></Route>
          <Route path="/pages/about" element={<About/>}></Route>
          <Route path="/pages/history" element={<History/>}></Route>
          <Route path="/pages/news" element={<News/>}></Route>
          <Route path="/pages/offer" element={<Offer/>}></Route>
          <Route path="/pages/comment" element={<Comment/>}></Route>
          <Route path="/pages/admin" element={<Admin/>}></Route>
          <Route path="*" element={<h1>Not found</h1>}></Route>
        </Routes>
      </main>

    </>
  );
};

export default MyCoffee;