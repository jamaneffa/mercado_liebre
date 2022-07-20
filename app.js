const express = require('express')
const path = require('path')

const app = express();

const publicPath = path.resolve(__dirname,'./public')

const port = 3000;

app.listen(port, () => console.log("Servidor en linea"))

app.use(express.static(publicPath))

app.get('/', (req , res) => res.sendFile(path.resolve(__dirname,'./views/home.html')))
app.get('/login', (req , res) => res.sendFile(path.resolve(__dirname,'./views/login.html')))
app.get('/register', (req , res) => res.sendFile(path.resolve(__dirname,'./views/register.html')))