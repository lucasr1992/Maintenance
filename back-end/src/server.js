const express = require('express');
const routes = require('./routes');
const cors = require('cors')

require('./database/index');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3001, () => console.log("Port Server 3001"));