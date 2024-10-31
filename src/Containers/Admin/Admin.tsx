import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { IPage, ISelect } from '../../types';
import requestAxios from '../../requestAxios.ts';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Admin = () => {
  const [selectPage, setSelectPage] = useState<ISelect>({
    pageName: '',
  });

  const [page, setPage] = useState<IPage>({
    title: '',
    content: '',
  });

  const navigate = useNavigate();
  const quillRef = useRef<ReactQuill | null>(null);

  const onSelectPage = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;

    setSelectPage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getSelectPage = useCallback(async (pageName: string) => {
    try {
      const response: { data: IPage } = await requestAxios<IPage>(`pages/${pageName}.json`);
      const responseData = response.data;

      if (responseData) {
        setPage(responseData);
      }
    } catch (e) {
      alert(e);
    }
  }, []);

  useEffect(() => {
    if (selectPage.pageName) {
      void getSelectPage(selectPage.pageName);
    }
  }, [selectPage, getSelectPage]);


  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const onChangeContent = (value: string) => {
    setPage((prevState) => ({
      ...prevState,
      content: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (selectPage.pageName.trim().length === 0 || page.title.trim().length === 0 || page.content.trim().length === 0) {
        alert('Выберите страницу которую хотите отредактировать!');
      } else {
        if (page) {
          await requestAxios.put(`pages/${selectPage.pageName}.json`, { ...page });

          if (selectPage.pageName === 'home') {
            navigate(`/`);
          } else {
            navigate(`/pages/${selectPage.pageName}`);
          }
        }
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <Box style={{ background: 'url(https://img.freepik.com/premium-photo/green-leaves-with-coffee-beans-as-background_1254992-110661.jpg) center center no-repeat fixed', backgroundSize: 'cover', paddingBottom: '5%' }}>
        <Container>
          <Typography variant="h1" sx={{ textAlign: 'center', color: 'white', padding: '50px 0', fontWeight: 0 }}>
            Edit page
          </Typography>
          <form onSubmit={onSubmit} style={{ border: '1px solid lightgrey', width: '70%', margin: '0 auto 70px', padding: '50px 0', borderRadius: '20px', backgroundColor: 'white' }}>
            <Grid container spacing={2} sx={{ mx: 'auto', width: '80%' }}>
              <Grid size={12}>
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="demo-multiple-name-label">Select page</InputLabel>
                  <Select
                    required
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    variant="outlined"
                    name="pageName"
                    value={selectPage.pageName}
                    onChange={onSelectPage}
                    input={<OutlinedInput label="name" />}
                  >
                    <MenuItem value="home">Home</MenuItem>
                    <MenuItem value="about">About</MenuItem>
                    <MenuItem value="history">History</MenuItem>
                    <MenuItem value="news">News</MenuItem>
                    <MenuItem value="contacts">Contacts</MenuItem>
                    <MenuItem value="comment">Comment</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={12}>
                <TextField
                  sx={{ width: '100%' }}
                  id="outlined-basic"
                  label="Title"
                  name="title"
                  variant="outlined"
                  value={page.title}
                  onChange={onChangeTitle}
                  required
                />
              </Grid>
              <Grid size={12}>
                <ReactQuill
                  ref={quillRef}
                  theme="snow"
                  value={page.content}
                  onChange={onChangeContent}
                />
              </Grid>
              <Grid size={12}>
                <Button sx={{ width: '100%' }} variant="contained" type="submit">
                  Edit page
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Admin;
