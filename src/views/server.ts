import express from 'express';
import mainrouter from '../routes/mainrouter';
import alunorouter from '../routes/alunorouter';
import gruporouter from '../routes/gruporouter';
import avaliacaorouter from '../routes/avaliacaorouter';
import professorrouter from '../routes/professorrouter';

const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(mainrouter);
app.use(alunorouter)
app.use(gruporouter)
app.use(avaliacaorouter)
app.use(professorrouter)


app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})


