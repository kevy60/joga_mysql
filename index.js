const express = require('express')
const app = express()

const path = require('path')


const hbs = require('express-handlebars');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
	extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
}))

app.use(express.static('public'));



const mysql = require('mysql2')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))



const articleRoutes = require('./routes/article');

app.use('/', articleRoutes);
app.use('article', articleRoutes);
app.use('/author/:author_id', articleRoutes);


app.listen(3000, () => {
	console.log('App is started at http://localhost:3000');
});
