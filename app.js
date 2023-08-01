const express=require("express");

const https=require("https");
require('dotenv').config();

const app=express();

const bodyparser=require("body-parser");


app.use(bodyparser.urlencoded({extended: true}));
//static folder
app.use(express.static("public"));


app.get("/",function (req, res) {
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function (req,res) {

    const city=req.body.cityname;
    // const apikey="427597dcc859ce20a38ad6fa10f0c171";
    const apikey = process.env.API_KEY;

    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + apikey+ "&units=metric";
    https.get(url,function (response) {
        console.log(response.statusCode);
    
        response.on("data" , function (data) {
            console.log(data);//hexadecimal format of data
            
            const weatherdata = JSON.parse(data);//parse into json
    
            console.log(weatherdata);
    
            const temp= weatherdata.main.temp;
            console.log("TEMPERATURE = "+temp);
            
            const feelslike= weatherdata.main.feels_like;
            console.log("FEELS LIKE = "+feelslike);
            
            const description =weatherdata.weather[0].description;
            console.log("DESCRIPTION = "+description);
    
            const icon=weatherdata.weather[0].icon;
            const imgurl="https://openweathermap.org/img/wn/" +icon+ "@2x.png";
    
            //We use res.write to print different lines of code
            // res.write("<h1> Weather of " + city + ":</h1>");
            // res.write("<h1>The weather status is "+description+"</h1>");
            // res.write("<h1>Temperature = "+ temp+ " Degree Celcius</h1>");
            // res.write("<img src=" + imgurl + ">");
            // res.send();//res.send can be only once in a file
            // res.sendFile(__dirname+"/output.html");
            res.render("output", cityn : city,
            tempn : temp,
            descriptionn:description,
            );
        });
    })
})

app.listen(3000, function (req,res) {
    console.log("Server is running on port 3000");
})
