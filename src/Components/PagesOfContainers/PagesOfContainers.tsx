import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import requestAxios from '../../requestAxios.ts';
import { IPage } from '../../types';

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
    if (pageName !== undefined) {
      void getPage(pageName);
    }

  }, [getPage, pageName]);

  let contentPage;

  if (pageName === undefined) {
    contentPage = (
      <>
        <Box sx={{background: 'url(https://s1.afisha.ru/mediastorage/0f/c9/c823d8334db141e1bd060e90c90f.jpg) center center no-repeat fixed', backgroundSize: 'cover'}}>
          <Container>
            <Typography variant="h1" sx={{padding: '50px 0', color: 'white', textAlign:'center'}}>Home</Typography>
          </Container>
        </Box>
        <Container>
          <Typography variant="body1" sx={{padding: '50px 0'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis, cumque esse ex fugit ipsam magnam maxime natus veniam voluptas.
          </Typography>
        </Container>
      </>
    );
  } else {
    contentPage = (
      <>
        {page && (
          <>
            <Typography variant="h1">{page.title}</Typography>
            <Typography variant="body1">{page.content}</Typography>
          </>
        )}
      </>
    );
  }

  return contentPage;
};

export default PagesOfContainers;