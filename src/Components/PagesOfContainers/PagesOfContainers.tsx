import { useParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import requestAxios from '../../requestAxios.ts';
import { IPage } from '../../types';
import parse from 'html-react-parser';
import Louder from '../UI/Louder/Louder.tsx';
import { AspectRatio, Card, CardCover } from '@mui/joy';
import { BookmarkAdd } from '@mui/icons-material';
import IconButton from '@mui/joy/IconButton';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

const PagesOfContainers = () => {
  const [page, setPage] = useState<IPage | null>(null);
  const [louder, setLouder] = useState<boolean>(false);
  const {pageName} = useParams();

  const getPage = useCallback(async (id: string) => {
    try {
      setLouder(true);
      const response: {data: IPage} = await requestAxios<IPage>(`pages/${id}.json`);
      const responseData = response.data;

      if (responseData) {
        setPage(responseData);
      }
    } catch (e) {
      alert(e);
    } finally {
      setLouder(false);
    }

  }, []);

  useEffect(() => {
    if (pageName === undefined) {
      void getPage('home');
    } else {
      void getPage(pageName);
    }

  }, [getPage, pageName]);

  let pageContainer;

  if (pageName === undefined) {
    pageContainer = (
      <>
        {page && (
          <>
            <Box sx={{background: 'url(https://s1.afisha.ru/mediastorage/0f/c9/c823d8334db141e1bd060e90c90f.jpg) center center no-repeat fixed', backgroundSize: 'cover'}}>
              <Container>
                <Typography level="title-lg" sx={{fontSize: '80px', padding: '50px 0', color: 'white', textAlign:'center'}}>{page.title}</Typography>
              </Container>
            </Box>
            <Container>
              <div style={{padding: '50px 0', fontSize: '20px'}}>{parse(page.content)}</div>
            </Container>
            <Container sx={{marginBottom: '10%', display: 'flex', justifyContent: 'space-between'}}>
              <Card sx={{ minHeight: '400px', width: '500px' }}>
                <CardCover>
                  <img
                    src="https://media.istockphoto.com/id/1428594094/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D0%B8-%D1%81-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%81%D1%82%D0%BE%D0%BB%D0%B0%D0%BC%D0%B8-%D0%BA%D0%BE%D1%84%D0%B5%D0%B2%D0%B0%D1%80%D0%BA%D0%BE%D0%B9-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%BE%D0%B9-%D0%B8-%D0%BF%D0%BE%D0%B4%D0%B2%D0%B5%D1%81%D0%BD%D1%8B%D0%BC%D0%B8-%D1%81%D0%B2%D0%B5%D1%82%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=Wevl1Qzi2D18El1kRzOwAiUoM2XGwylgy_-q6IiwH8Y="
                    srcSet="https://media.istockphoto.com/id/1428594094/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D0%B8-%D1%81-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%81%D1%82%D0%BE%D0%BB%D0%B0%D0%BC%D0%B8-%D0%BA%D0%BE%D1%84%D0%B5%D0%B2%D0%B0%D1%80%D0%BA%D0%BE%D0%B9-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%BE%D0%B9-%D0%B8-%D0%BF%D0%BE%D0%B4%D0%B2%D0%B5%D1%81%D0%BD%D1%8B%D0%BC%D0%B8-%D1%81%D0%B2%D0%B5%D1%82%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=Wevl1Qzi2D18El1kRzOwAiUoM2XGwylgy_-q6IiwH8Y="
                    loading="lazy"
                    alt="Cofee Bar"
                  />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                  }}
                />
                <CardContent sx={{ justifyContent: 'flex-end' }}>
                  <Typography level="title-lg" textColor="#fff">
                    Yosemite National Park
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    California, USA
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minHeight: '500px', width: 600 }}>
                <CardCover>
                  <img
                    src="https://lh3.googleusercontent.com/proxy/hR-NKk-WdbXK_wpMdTZs6cNQXxIaah_1D3tnQ611w1tFrYod2P5j8impX15OI5tWbrnyqOSGX_3n2ELetOMIFuGz9piVXCNQzIdUJPYuvlI7RtEiTgwy"
                    srcSet="https://lh3.googleusercontent.com/proxy/hR-NKk-WdbXK_wpMdTZs6cNQXxIaah_1D3tnQ611w1tFrYod2P5j8impX15OI5tWbrnyqOSGX_3n2ELetOMIFuGz9piVXCNQzIdUJPYuvlI7RtEiTgwy"
                    loading="lazy"
                    alt="Cofee Bar"
                  />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                  }}
                />
                <CardContent sx={{ justifyContent: 'flex-end' }}>
                  <Typography level="title-lg" textColor="#fff">
                    Yosemite National Park
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    California, USA
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          </>
        )}
      </>
    );
  } else if (pageName === 'about') {
    pageContainer = (
      <>
        {page && (
          <>
            <Box sx={{background: 'url(https://s1.afisha.ru/mediastorage/0f/c9/c823d8334db141e1bd060e90c90f.jpg) center center no-repeat fixed', backgroundSize: 'cover'}}>
              <Container>
                <Typography level="title-lg" sx={{fontSize: '80px', padding: '50px 0', color: 'white', textAlign:'center'}}>{page.title}</Typography>
              </Container>
            </Box>
            <Container>
              <div style={{padding: '50px 0', fontSize: '20px'}}>{parse(page.content)}</div>
            </Container>
            <Container sx={{marginBottom: '10%', display: 'flex', justifyContent: 'space-between'}}>
              <Card sx={{ width: 320 }}>
                <div>
                  <Typography level="title-lg">Boris studio</Typography>
                  <Typography level="body-sm">April 24 to May 02, 2021</Typography>
                  <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                  >
                    <BookmarkAdd />
                  </IconButton>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <img
                    src="https://borisstudio.com/wp-content/webp-express/webp-images/uploads/loft_cafe13-1.jpg.webp"
                    srcSet="https://borisstudio.com/wp-content/webp-express/webp-images/uploads/loft_cafe13-1.jpg.webp"
                    loading="lazy"
                    alt="about coffee"
                  />
                </AspectRatio>
              </Card>
              <Card sx={{ width: 320 }}>
                <div>
                  <Typography level="title-lg">Boris studio</Typography>
                  <Typography level="body-sm">May 15 to June 02, 2022</Typography>
                  <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                  >
                    <BookmarkAdd />
                  </IconButton>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <img
                    src="https://borisstudio.com/wp-content/webp-express/webp-images/uploads/loft_cafe14-1.jpg.webp"
                    srcSet="https://borisstudio.com/wp-content/webp-express/webp-images/uploads/loft_cafe14-1.jpg.webp"
                    loading="lazy"
                    alt="Boris studio"
                  />
                </AspectRatio>
              </Card>
              <Card sx={{ width: 320 }}>
                <div>
                  <Typography level="title-lg">Boris studio</Typography>
                  <Typography level="body-sm">September 02 to May 25, 2023</Typography>
                  <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                  >
                    <BookmarkAdd />
                  </IconButton>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjN87ZN5kV0VZn6H-AXSWaEwFM6ZCX_ea7BDc8YM7dS7_iRXTPDOMTyYEjAud3N_UkwG4&usqp=CAU"
                    srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjN87ZN5kV0VZn6H-AXSWaEwFM6ZCX_ea7BDc8YM7dS7_iRXTPDOMTyYEjAud3N_UkwG4&usqp=CAU"
                    loading="lazy"
                    alt="Boris studio"
                  />
                </AspectRatio>
              </Card>
            </Container>
          </>
        )}
      </>
    );
  } else if (pageName === 'history') {
    pageContainer = (
      <>
        {page && (
          <>
            <Box sx={{background: 'url(https://s1.afisha.ru/mediastorage/0f/c9/c823d8334db141e1bd060e90c90f.jpg) center center no-repeat fixed', backgroundSize: 'cover'}}>
              <Container>
                <Typography level="title-lg" sx={{fontSize: '80px', padding: '50px 0', color: 'white', textAlign:'center'}}>{page.title}</Typography>
              </Container>
            </Box>
            <Container>
              <div style={{padding: '50px 0', fontSize: '20px'}}>{parse(page.content)}</div>
            </Container>
            <Container sx={{marginBottom: '10%'}}>
              <Box
                component="ul"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
              >
                <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                  <CardCover>
                    <img
                      src="https://i-coffee.me/wp-content/uploads/2021/10/EVyTAudWsAAC4Br-1024x806.jpg"
                      srcSet="https://i-coffee.me/wp-content/uploads/2021/10/EVyTAudWsAAC4Br-1024x806.jpg"
                      loading="lazy"
                      alt="History"
                    />
                  </CardCover>
                </Card>
                <Card component="li" sx={{ minWidth: 300, minHeight: 400, flexGrow: 1 }}>
                  <CardCover>
                    <video
                      autoPlay
                      loop
                      muted
                      poster="https://assets.codepen.io/6093409/river.jpg"
                    >
                      <source
                        src="https://media.istockphoto.com/id/2148698786/ru/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0-%D0%BD%D0%B0%D1%81%D1%8B%D0%BF%D0%B0%D0%B5%D1%82-%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B5%D1%80%D0%BD%D0%B0.mp4?s=mp4-640x640-is&k=20&c=HmIvqkWPIhWVdmia3bNMx1fB7hqXDj9v9OdOt9NQZCg="
                        type="video/mp4"
                      />
                    </video>
                  </CardCover>
                </Card>
              </Box>
            </Container>
          </>
        )}
      </>
    );
  } else if (pageName === 'news') {
    pageContainer = (
      <>
        {page && (
          <>
            <Box sx={{background: 'url(https://s1.afisha.ru/mediastorage/0f/c9/c823d8334db141e1bd060e90c90f.jpg) center center no-repeat fixed', backgroundSize: 'cover'}}>
              <Container>
                <Typography level="title-lg" sx={{fontSize: '80px', padding: '50px 0', color: 'white', textAlign:'center'}}>{page.title}</Typography>
              </Container>
            </Box>
            <Container>
              <div style={{padding: '50px 0', fontSize: '20px'}}>{parse(page.content)}</div>
            </Container>
            <Container sx={{marginBottom: '10%'}}>
              <Box
                component="ul"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
              >
                <Card component="li" sx={{ minWidth: 300, minHeight: 400, flexGrow: 1 }}>
                  <CardCover>
                    <video
                      autoPlay
                      loop
                      muted
                      poster="https://assets.codepen.io/6093409/river.jpg"
                    >
                      <source
                        src="https://media.istockphoto.com/id/934141810/ru/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/%D0%B1%D0%B0%D1%80%D0%B8%D1%81%D1%82%D0%B0-%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%B8%D1%82-%D0%BA%D0%BE%D1%84%D0%B5%D0%BC%D0%B0-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%BA%D1%83-%D0%B8-%D0%B7%D0%B0%D0%B2%D0%B0%D1%80%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BA%D0%BE%D1%84%D0%B5-%D1%8D%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE-%D0%B2-%D0%BA%D0%B0%D1%84%D0%B5.mp4?s=mp4-640x640-is&k=20&c=ar7ZQErOiYMeXgl9p4mwTFwG0MBqSWtBC5RsP0HQSS0="
                        type="video/mp4"
                      />
                    </video>
                  </CardCover>
                </Card>
              </Box>
            </Container>
          </>
        )}
      </>
    );
  } else if (pageName === 'contacts') {
    pageContainer = (
      <>
        {page && (
          <>
            <Box sx={{background: 'url(https://s1.afisha.ru/mediastorage/0f/c9/c823d8334db141e1bd060e90c90f.jpg) center center no-repeat fixed', backgroundSize: 'cover'}}>
              <Container>
                <Typography level="title-lg" sx={{fontSize: '80px', padding: '50px 0', color: 'white', textAlign:'center'}}>{page.title}</Typography>
              </Container>
            </Box>
            <Container>
              <div style={{padding: '50px 0', fontSize: '20px', textAlign: 'center'}}>{parse(page.content)}</div>
            </Container>
            <Container sx={{marginBottom: '10%'}}>
              <Typography level="title-lg" sx={{fontSize: '30px', textAlign:'center'}}>Our address</Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd"
                width="600" height="535" style={{width: '100%', margin: '5% 0', borderRadius: '20px'}}>
              </iframe>
            </Container>
          </>
        )}
      </>
    );
  } else if (pageName === 'comment') {
    pageContainer = (
      <>
        {page && (
          <>
            <Box sx={{background: 'url(https://s1.afisha.ru/mediastorage/0f/c9/c823d8334db141e1bd060e90c90f.jpg) center center no-repeat fixed', backgroundSize: 'cover'}}>
              <Container>
               <Typography level="title-lg" sx={{fontSize: '80px', padding: '50px 0', color: 'white', textAlign:'center'}}>{page.title}</Typography>
              </Container>
            </Box>
            <Container>

            </Container>
            <Container sx={{marginBottom: '10%'}}>
              <Card sx={{ width: '100%', marginTop: '30px'}}>
                <div>
                  <Typography level="title-lg">Comments</Typography>
                  <Typography level="body-sm">October 31 2024</Typography>
                  <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{position: 'absolute', top: '0.875rem', right: '0.5rem'}}
                  >
                    <BookmarkAdd/>
                  </IconButton>
                  <hr/>
                </div>
                <CardContent orientation="horizontal">
                  <div style={{padding: '50px 0', fontSize: '20px', textAlign: 'center'}}>{parse(page.content)}</div>
                </CardContent>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <img
                    src="https://borisstudio.com/wp-content/webp-express/webp-images/uploads/ZWIN-SHOco_3-1536x741.jpg.webp"
                    srcSet="https://borisstudio.com/wp-content/webp-express/webp-images/uploads/ZWIN-SHOco_3-1536x741.jpg.webp"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </Card>
            </Container>
          </>
        )}
      </>
    );
  }

  return (
    <>
      {page && (
        <>
          {louder ? <Louder/> : pageContainer}
        </>
      )}
    </>
  );
};

export default PagesOfContainers;