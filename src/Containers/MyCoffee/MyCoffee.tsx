import ToolBar from '../../Components/ToolBar/ToolBar.tsx';
import { Route, Routes,  } from 'react-router-dom';
import PagesOfContainers from '../../Components/PagesOfContainers/PagesOfContainers.tsx';
import {Typography} from "@mui/material";
import Admin from "../Admin/Admin.tsx";

const MyCoffee = () => {
  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PagesOfContainers />} ></Route>
          <Route path="/pages/:pageName" element={<PagesOfContainers />} ></Route>
          <Route path="/pages/admin" element={<Admin />} ></Route>
          <Route path="*" element={<Typography variant="h1">Not found</Typography>} ></Route>
        </Routes>
      </main>

    </>
  );
};

export default MyCoffee;