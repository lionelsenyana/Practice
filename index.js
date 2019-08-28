import express from 'express';
import bodyParser from 'body-parser';



const app = express();
app.use(bodyParser.json());
const Users = [
    { id: 1, names: "Jonah" },
   { id: 2, names: "Josia" },
   { id: 3, names: "Peter" }
];

app.get('/', (req, res) => {
     return res.status(200).send({
    status: 200,
   message: 'welcome'
   })
});
app.get('/api/v1/Users', (req, res) => {
    return res.status(200).send({
         status: 200,
         message: "all users sucessfull retrieved",
         data: Users
     })
 });
 app.post('/users', (req, res) => {
    const newUser = {
        id: Users.length + 1,
        names: req.body.names
     }
     Users.push(newUser);
     return res.status(201).send({
         data: newUser
     });

    });
     app.delete('users/:id',(req,res)=>{
         const checkUser=users.find(userId=>userId.id===parseInt(req.params.id,10));
         if(checkUser){
             return res.status(404).send({
                 status:404,
                 message: `User with is ${req.params.id} not found`
             })
         }
         const index=User.indexOf(checkUser);
         user
     })
const port = 3000;
app.listen(port, () => console.log("app listening on port 3000"))