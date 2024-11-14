import express from 'express';

var app = express();

app.listen(3001, () => {
    console.log('Server is ok...');
});

app.get('/user/:id', (req,res) => {
    if(isNaN(req.params.id)){
        res.status(400).json({error: 'The id was not a number'})
    }else{
        let user = null; //fetch the user from the database

        if(user){
            res.json(user);
        }else{
            res.status(404).json({error: 'The user was not found..'});
        }
    }
});

app.get('/excer2/:text', (req,res) => {
    let text = req.params.text;
    res.send('The lenght of the text is ' + text.length);
});

app.get('/excer3/:num1/:num2', (req,res) => {
    let n1 = Number(req.params.num1);
    let n2 = Number(req.params.num2);
    let sum = n1 + n2;

    res.send(`Sum of numbers ${n1} and ${n2} equals ${sum}`);
});

app.get('/excer4', (req,res) => {
    let n1 = Number(req.query.num1);
    let n2 = Number(req.query.num2);
    let sum = n1 + n2;

    res.send(`Sum of numbers ${n1} and ${n2} equals ${sum}`);
});

app.get('/excer5', (req,res) => {
    let n1 = Number(req.query.num1);
    let n2 = Number(req.query.num2);

    if(n2 == 0){
        res.status(400).send('Cannot divide by zero!');
    }else{
        let sum = n1 + n2;
        res.send(`Sum of numbers ${n1} and ${n2} equals ${sum}`);
    }
});

const users = ['repe','matt','lassenator', 'liza'];

app.get('/excer6', (req, res) => {
    let username = req.query.username;

    if( users.some( u => u == username ) )
    {
        res.send('User found!!')
    }else{
        res.status(404).send('The user was not found');
    }

});