import express from 'express';

const app = express();

app.get('/', (request, response) => {

  return response.json({message:'Hello'})

})

app.post('/', (request, response) => {

  return response.json({message:'Thats ok'})

})

app.listen(3000)