
// const app = require("express")();
const express = require("express");
const app = express();
app.use(express.json())


//Route
app.get("/", (req, res) => {
    res.send({ message: "our first route"});
});

let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) =>{
    bicycleSpins += 1;
    res.send({message: `people have spun the wheel ${bicycleSpins} times`});
});


app.get("/kickthedino", (req, res) =>{
    res.send({message: "Dino: ow ow ow"})
})


app.get("/about", (req, res) => {
    res.send(`
    <h1>About</h1>
    <h3>this is my about page</h3>  
    <p>test</p>
    `)
})


// /bat?adjective=spooky
app.get("/bat", (req, res) => {
    console.log(req.query);

    res.send({message: `The bat is ${req.query.adjective}`});
})


// /bottle/large
app.get("/bottle/:bottleSize", (req,res) =>{
    console.log(req.params.bottleSize);
    res.send( {bottleSize:  req.params.bottleSize })
})



app.post("/package", (req, res) => {
    console.log(req.body)
    res.send({message: req.body})
})




app.listen(8080);

