import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import requestAxios from '../../requestAxios.ts';
import { IPage } from '../../types';
import parse from 'html-react-parser';

const PagesOfContainers = () => {
  const [page, setPage] = useState<IPage | null>(null);
  const {pageName} = useParams();


  const getPage = useCallback(async (id: string) => {
    const response: {data: IPage} = await requestAxios<IPage>(`pages/${id}.json`);
    const responseData = response.data;

    if (responseData) {
      setPage(responseData);
    }

  }, []);

  useEffect(() => {
    if (pageName === undefined) {
      void getPage('home');
    } else {
      void getPage(pageName);
    }

  }, [getPage, pageName]);

  return (
    <>
      {page && (
        <>
          <Box sx={{background: 'url(https://s1.afisha.ru/mediastorage/0f/c9/c823d8334db141e1bd060e90c90f.jpg) center center no-repeat fixed', backgroundSize: 'cover'}}>
            <Container>
              <Typography variant="h1" sx={{padding: '50px 0', color: 'white', textAlign:'center'}}>{page.title}</Typography>
            </Container>
          </Box>
          <Container>
            <div style={{padding: '50px 0', fontSize: '20px'}}>{parse(page.content)}</div>
          </Container>
        </>
      )}
    </>
  );
};

export default PagesOfContainers;