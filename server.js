    const exp=require('express');
const app=exp();
const path=require('path');
const bodyParser=require('body-parser');

//Get our APT routes
    const api=require('./server/route/api')

//Parsers for Post data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Point static path to dist

app.use(exp.static(path.join(__dirname,'dist/pharmacure')))

//Set our api routes

app.use('/api',api);

//catch all other routes and return the index file
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/pharmacure/index.html'))
})


app.listen(process.env.PORT || 8080,()=>{
    console.log('server started...')
})