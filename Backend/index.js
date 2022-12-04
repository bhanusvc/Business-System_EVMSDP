const path = require('path');
const express = require('express');
const users=require('./Medicine');
const app = express()
app.use(express.static(path.join(__dirname,'public')));
// Body Parser Middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => res.send('hello kluniversity'))
app.get('/about', (req, res) => res.send('app.use'))
app.get('/api/users',(req,res)=>res.json(users));
/*// GET Specific USER Based on ID */
app.get('/api/users/:id', (req, res) => { 
    const found = users.some(idFilter(req)); 
   
    if (found) { 
      res.json(users.filter(idFilter(req))); 
    } else { 
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` }); 
    } 
  });
//CREATE A NEW USER  
app.post('/api/users',(req,res)=>{ 
    const newMember={ 
      /*id: uuid.v4(), 
      name: req.body.name, 
      email: req.body.email, 
      status: 'guest' */
      name : req.body.name,
      company:req.body.company,
      price:req.body.price,
      purpose:req.body.purpose
 
    }; 
    if(!newMember.name || !newMember.company){ 
      return res.status(400).json({msg:'NAME and COMPANY Must be provided'}); 
    } 
    users.push(newMember); 
    res.json(users); 
 
  } 
  );
  app.put('/api/users/:price',(req,res)=> 
{ 
    const found = users.some(member=>member.price===parseInt(req.params.price)); 
 
  if(found) 
  { 
    const updMember=req.body; 
    users.forEach( 
        member=>{ 
            if(member.price===parseInt(req.params.price)) 
            { 
                member.name; 
                member.company;
            res.json({msg:'Updated Details',member}) 
              } 
        } 
    ); 
  } 
  else{ 
    res.status(400).json({msg:`No User found with ${req.params.price}`}); 
  } 
});


  app.listen(3001, () => console.log('Server ready'));