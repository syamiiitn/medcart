var exp=require('express');
var app=exp();
var path=require('path');
var bodyParser=require('body-parser');
var mongoclient=require('mongodb').MongoClient;
var bcrypt=require('bcryptjs');
var mongoose=require('mongoose');

var dbo;
var url="mongodb://sivachandra:sivachandra422@ds261644.mlab.com:61644/pharmacure";

mongoclient.connect(url,(err,client)=>{
    if(err)
    {
        console.log('Error is occured');
    }
    else{
        dbo=client.db('pharmacure');
        console.log('connected to database');
    }

})


app.use(bodyParser.json());

//To connect angular with server

app.use(exp.static(path.join(__dirname,'dist/pharmacure')))

app.post('/home/signup',(req,res,next)=>{
    dbo.collection('registration').find({username:req.body.username}).toArray((err,data)=>{
        if(err)
        {
            console.log('Error occured,please recheck again')
        }
        else if(data.length===0)
        {
            bcrypt.hash(req.body.password,10,(err,hashcode)=>{
                if(err)
                {
                    console.log('err')
                }
                else{
                    dbo.collection('registration').insertOne({firstname:req.body.firstname,middlename:req.body.middlename,lastname:req.body.lastname,username:req.body.username,email:req.body.email,password:hashcode,gender:req.body.gender},(err,success)=>{
                        if(err)
                        {
                            console.log('errorrr')
                        }
                        else
                        {
                            res.json("registered successfully")
                        }
                    })
                }
            })
        }
        else
        {
            res.json("username alredy existed...please select another username");
        }
    })

})

var name={};

 app.post('/home/login',(req,res,next)=>{
    dbo.collection('registration').find({username:req.body.username}).toArray((err,data)=>{
        if(err)
        {
            console.log('err......')
        }
        else{
            if(data.length==1)
            {
                bcrypt.compare(req.body.password,data[0].password,(err,success)=>{
                    if(err)
                    {
                        console.log('errrrrrrrrrr')
                    }
                    else if(success==true)
                    {
                        res.json("logged in successfully")
                        name=req.body.username;
                        
                    }
                    else if(success==false){
                        res.json("wrong password")
                    }
                })
            }
            else
            {
                res.json("Invalid username");
            }
        }
    })
 })

app.post('/admin/medicines',(req,res,next)=>{
        dbo.collection('medicinecollection').insertOne(req.body,(err,data)=>{
            if(err)
            {
                console.log('error please check....')
            }
            else{
                res.send("data is saved successfully");
            }
        })
})

app.post('/user/pharma',(req,res,next)=>{    
    dbo.collection(name).insertOne(req.body,(err,data)=>{
        if(err)
        {
            console.log('err in pharma')
        }
        else{
        
        res.json("success")
        }
    })
    
})

app.get('/admin/medicines',(req,res)=>{
    dbo.collection('medicinecollection').find({}).toArray((err,data)=>{
        if(err)
        {
            console.log('medicine error')
        }
        else{
            res.send(data);
        }
    })

})


app.get('/admin/stock',(req,res,next)=>{
    dbo.collection('medicinecollection').find({}).toArray((err,data)=>{
        if(err)
        {
            console.log('medicine error')
        }
        else{
            res.send(data);
        }
    })
})

app.get('/home/pharma',(req,res,next)=>{
    dbo.collection('medicinecollection').find({}).toArray((err,data)=>{
        if(err)
        {
            console.log('medicine error')
        }
        else{
            res.send(data);
        }
    })
})

    app.get('/admin/userdetails',(req,res,next)=>{
        dbo.collection('registration').find({}).toArray((err,data)=>{
            if(err){
                console.log('erorr in user')
            }
            else{
                res.send(data);
            }
        })
    })

    app.get('/user/cart',(req,res,next)=>{
        dbo.collection(name).find({}).toArray((err,data)=>{
            if(err)
            {
                console.log('error in cart')
            }
            else{
                res.send(data);
            }
        })
    })

   

    app.put('/admin/medicines',(req,res)=>{

        var objectid=new mongoose.Types.ObjectId(req.body._id);
        console.log(objectid._id);
        dbo.collection('medicinecollection').update({_id:objectid},{$set:{category:req.body.category,medicine:req.body.medicine,price:req.body.price,quantity:req.body.quantity,expiry:req.body.expiry}},(err,success)=>{
                if(err)
                {
                    console.log('err in update')
                }
                else{
                    if(success)
                    {
                        res.json("success");
                    }
                    else{
                        console.log('invalid data')
                    }
                }
        })

    })

    app.delete('/admin/medicines',(req,res)=>{
        dbo.collection('medicinecollection').remove({medicine:req.body.medicine},(err,success)=>{
            if(err)
            {
                console.log('err in delete')
            }
            else{
                dbo.collection('medicinecollection').find({}).toArray((err,data)=>{
                    if(err)
                    {
                        console.log('err in data')
                    }
                    else
                    {
                        res.send(data);
                        res.json("success")
                    }
                })
            }
        })
    })

    app.delete('/user/cart',(req,res)=>{
        dbo.collection(name).remove({medicine:req.body.medicine},(err,success)=>{
            if(err)
            {
                console.log('err in cart')
            }
            else
            {
                dbo.collection(name).find({}).toArray((err,data)=>{
                    if(err)
                    {
                        console.log("errr...in cart")
                    }
                    else{
                     
                    res.send(data)
                    res.json("success")      
                }
            })
            }
        })
        })

app.listen(process.env.PORT || 8080,()=>{
    console.log('server started...')
})