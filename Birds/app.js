const express = require("express");
const app = express();
app.use(express.json());

class Bird {
  species;
  flyingCapabilites;
  inEurope;
  constructor(name, species, flyingCapabilites, inEurope) {
    this.name = name;
    this.species = species;
    this.flyingCapabilites = flyingCapabilites;
    this.inEurope = inEurope;
  }
}

const penguin = new Bird("SuitBuddy", "Penguin", false, false);
const egglayer1 = new Bird("egglayer1", "Chicken", false, false);
const egglayer2 = new Bird("egglayer2", "Chicken", false, false);
const dove = new Bird("flyingRat01", "Dove", true, true);

const allBirds = [penguin, egglayer1, egglayer2, dove];

app.get("/", (req, res) => {
  res.send(
    `
    <h1>Birds API</h1>
    <h3>"/"</h3>  
    <p>Shows info about the api</p>

    <h3>"/birds"</h3>  
    <p>Shows all birds in the api</p>

    <h3>"/birds/{species}"</h3>  
    <p>Shows all birds of a species</p>

    <h3>"/birds/flying/:flyingCapabilites"</h3>  
    <p>Takes either true or false and shows all birds that can fly or not</p>

    <h3>"/birds/flying/:inEurope"</h3>  
    <p>Takes either true or false and shows all birds that are in europe or not</p>

    `
  );
});

app.get("/api/birds", (req, res) => {
  res.send(allBirds);
});

app.get("/api/birds/:species", (req, res) => {
  res.send(allBirds.filter((bird) => bird.species == req.params.species));
});

app.get("/api/birds/flying/:flyingCapabilites", (req, res) => {
  //Below is false therefore use String() on birds object to compare boolean and string
  console.log(true === "true");
  res.send(
    allBirds.filter(
      (bird) => String(bird.flyingCapabilites) == req.params.flyingCapabilites
    )
  );
});

app.get("/api/birds/inEurope/:inEurope", (req, res) => {
  res.send(
    allBirds.filter(
      (bird) => String(bird.flyingCapabilites) == req.params.inEurope
    )
  );
});

app.listen(8080);
