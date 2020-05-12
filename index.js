const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

//ROUTES
//get all
app.get("/house", async (req, res) => {
    try{
        const allHouse = await pool.query("select * from house");
        res.json(allHouse.rows);
    }catch(err){
        console.error(err.message)
    }
});


app.listen(5000, ()=>{
    console.log("server has started on port 5000")
});