const express = require('express');
const dotenv = require('dotenv');
const categoryroutes = require('./routes/category');
const subcategoryroutes =require('./routes/subcategory');
const natureofcompliance =require('./routes/natureofcompliance');
const states =require('./routes/states');
const compliancerouter =require('./routes/compliance');

const cors = require('cors');
const db = require('./config/db');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use('/api',categoryroutes);
app.use('/api',subcategoryroutes);
app.use('/api',natureofcompliance);
app.use('/api',states);
app.use('/api',compliancerouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));