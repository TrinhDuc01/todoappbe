import express from 'express';
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
import initApiRoutes from './route/api';



const app = express();
app.use(cors());
const port = process.env.PORT || 8080


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

initApiRoutes(app)

app.get('/', (req, res) => {
    res.status(200).json([{ id: 1, toDoName: 'Quét nhà', status: true }, { id: 3, toDoName: 'Đi làm', status: false }])
})

app.listen(port, console.log('vl'))