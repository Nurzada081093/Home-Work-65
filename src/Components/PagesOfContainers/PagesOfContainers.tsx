import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';

const PagesOfContainers = () => {
  const location = useLocation();

  let content: string;

  if (location.pathname === '/') {
    content = 'Home page!';
  } else if (location.pathname === '/pages/about') {
    content = 'About page!';
  } else if (location.pathname === '/pages/history') {
    content = 'History page!';
  } else if (location.pathname === '/pages/news') {
    content = 'News page!';
  } else if (location.pathname === '/pages/offer') {
    content = 'Offers page!';
  } else if (location.pathname === '/pages/comment') {
    content = 'Comments page!';
  } else {
    content = 'Admin page!';
  }


  return (
    <Container>
      {content}
    </Container>
  );
};

export default PagesOfContainers;