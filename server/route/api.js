
const exp=require('express');
const app=exp();
const jwt=require('jsonwebtoken')

const mongoclient=require('mongodb').MongoClient;
const bcrypt=require('bcryptjs');
const mongoose=require('mongoose');

const url="mongodb://sivachandra:sivachandra422@ds261644.mlab.com:61644/pharmacure";

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

let checkToken=(req,res,next)=>{

   //capture headers with names 'x-access-token' or 'Autthorization'
   //Express headers are auto converted to lowercase
   
   let token=req.headers['x-access-token'] || req.headers['authorization']
   if(token===undefined)
   {
       return res.json({message:'no token found'})
   }
   if(token.startsWith("Bearer "))
   {
       //Remove Bearer from string
       token=token.slice(7,token.length);
   }

   //Using jwt package and secret string,validate the token

   if(token!==undefined){
       jwt.verify(token,s,(err,decoded)=>{
           //If anything  goes wrong,reeturn an error immediately before passing control to next
           if(err)
           {
               return res.json({message:'Tokken is not valid'})
           }
        else{
        req.decoded=decoded;
        next();
        }
    });
    }
}


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

 var s='secrethere';

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
                        var jwtBearerToken=jwt.sign({username:req.body.username},s,{expiresIn:3600})
                        
                         res.json({message:"logged in successfully",
                            idToken:jwtBearerToken
                        });
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

app.post('/admin/medicines',checkToken,(req,res,next)=>{
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

app.post('/user/pharma',checkToken,(req,res,next)=>{    
    dbo.collection(req.decoded['username']).insertOne(req.body,(err,data)=>{
        if(err)
        {
            console.log('err in pharma')
        }
        else{
        
        res.json("success")
        }
    })
    
})

app.get('/admin/medicines',checkToken,(req,res)=>{
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


app.get('/admin/stock',checkToken,(req,res,next)=>{
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

    app.get('/admin/userdetails',checkToken,(req,res,next)=>{
        dbo.collection('registration').find({}).toArray((err,data)=>{
            if(err){
                console.log('erorr in user')
            }
            else{
                res.send(data);
            }
        })
    })

    app.get('/user/cart',checkToken,(req,res,next)=>{
        dbo.collection(req.decoded['username']).find({}).toArray((err,data)=>{
            if(err)
            {
                console.log('error in cart')
            }
            else{
                res.send(data);
            }
        })
    })

   

    app.put('/admin/medicines',checkToken,(req,res)=>{

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

    app.delete('/admin/medicines',checkToken,(req,res)=>{
        dbo.collection('medicinecollection').remove({medicine:req.body.medicine},(err,success)=>{
            if(err)
            {
                console.log('err in delete')
            }
            else{
                res.json("success")
            }
        })
    })

    app.delete('/user/cart',checkToken,(req,res)=>{
        dbo.collection(req.decoded['username']).remove({medicine:req.body.medicine},(err,success)=>{
            if(err)
            {
                console.log('err in cart')
            }
            else
            {
                    res.json("success")      
             }
            })
        })

        module.exports=app;
        
//app.listen(process.env.PORT || 4000,()=>{
 //   console.log('server started...')
//})
