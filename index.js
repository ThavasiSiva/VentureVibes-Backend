const express = require('express');
const HTTP_SERVER = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('./Database/DbConfig');

const path = require('path');


const PORT = process.env.PORT ;

const staticcategoryImagesPath = path.join(process.cwd(), 'Controllers', 'categoryImageUpload', 'Image');
HTTP_SERVER.use('/api/categoryImageUpload/Image', express.static(staticcategoryImagesPath));

const staticplaceImagePath = path.join(process.cwd(), 'Controllers', 'placeImageUpload', 'Image');
HTTP_SERVER.use('/api/placeImageUpload/Image', express.static(staticplaceImagePath));

const staticcityImagePath = path.join(process.cwd(), 'Controllers', 'cityImageUpload', 'Image');
HTTP_SERVER.use('/api/cityImageUpload/Image', express.static(staticcityImagePath));

HTTP_SERVER.use(express.json())
HTTP_SERVER.use(bodyParser.json())
HTTP_SERVER.use(express.urlencoded({extended:false}))
HTTP_SERVER.use(cors())

HTTP_SERVER.get('/', (req, res) => {
    console.log('Server is running.');
    res.send('Server is running.');   // res.send use - display that contains.
});

HTTP_SERVER.listen(PORT , ()=> {
    console.log(`Listening at port ${PORT}`);
});


HTTP_SERVER.use('/',require('./app'));