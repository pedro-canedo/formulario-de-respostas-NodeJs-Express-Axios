import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { Button, Grid, TextField } from '@mui/material';
import Axios from 'axios';


function App() {
  const [values, setValues] = useState();


  const SubmitReview = () => {
    if(values?.pergunta1 | values?.pergunta2 | values?.pergunta3 | values?.pergunta4 | values?.pergunta5 === undefined || '' || null){
      alert('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Atenção !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \n(O envio só é possível se todas as perguntas estiverem preenchidas)');
    }else{
      Axios.post('http://localhost:3001/api/insert', {
        pergunta1: values.pergunta1,
        pergunta2: values.pergunta2,
        pergunta3: values.pergunta3,
        pergunta4: values.pergunta4,
        pergunta5: values.pergunta5,
      }).then(res => {
        if(!alert('Suas respostas já foram enviadas, Obrigado por participar da pesquisa ! \n Clicke em OK para recarregar a página')){window.location.reload();}
      });
    }
  };

  console.log(values)

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };
  
  return (
    <Grid container
    fullWidth
    style={{
      backgroundImage: 'url(https://wallpapersfull.com/wallpapers/2019/Papel-de-Parede-textura-gradiente-de-listras-azul-35336.jpg)',
    }}
    >

      <Container 
      >
        <Box
        style={{
          backgroundColor: 'rgba(255,255,240, 0.8)',
          color: 'rgba(0.0.0)',
          padding: '20px',
          margin: '155px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
          marginlow: '0px',
          marginLeft: '0px',
        }}
        ><h1 style={{
          color: 'rgba(25,118,250)',
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '20px',
        }}>
          Formulário de respostas
        </h1>
          <Grid
          >

            <TextField
            name='pergunta1'
            onChange={handleaddValues}
            style={{margin: '10px'}} 
            fullWidth id="respostas" 
            label="Como você se auto declara, sobre sua cor? De acordo com as seguintes opções: branca, preta, parda, indígena ou amarela?"
            variant="outlined" />
            <TextField
            name='pergunta2'
            onChange={handleaddValues}
            style={{margin: '10px'}} 
            fullWidth id="respostas" 
            label="Sobre sua descendência, você tem alguma informação?" 
            variant="outlined"
            />
            <TextField
            name='pergunta3'
            onChange={handleaddValues}
            style={{margin: '10px'}} 
            fullWidth id="respostas" 
            label="Durante seus estudos você teve algum conhecimento sobre os povos africanos ou indígenas? Qual(is) " 
            variant="outlined"
            />
            <TextField
            name='pergunta4'
            onChange={handleaddValues}
            style={{margin: '10px'}} 
            fullWidth id="respostas" 
            label="Em seus estudos houve uma disciplina que abordava exclusivamente sobre a Educação para as relações étnico-raciais e cultura afro-brasileira, africana e indígena? "
            variant="outlined"
            />
            <TextField
            name='pergunta5'
            onChange={handleaddValues}
            color="primary"
            style={{margin: '10px'}} 
            fullWidth id="respostas" 
            label="Sabe que já existem Leis e Resoluções que devem ser cumpridas com intuito de abordar o tema em disciplinas específicas? conhece a Lei nº 10.639 (9 de Janeiro de 2003)?" 
            variant="outlined"
            />
          </Grid>
          <Button
          onClick={SubmitReview}
          variant="contained"
          color="primary"
          xs="xs"
          fullWidth
          style={{margin: '10px',
          padding: '10px',
        }}
          >
            Enviar Respostas
            </Button>
        </Box>
      </Container>
    </Grid>
  );
}

export default App;
