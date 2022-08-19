const mqtt = require('mqtt')
const fs = require('fs')
const client = mqtt.connect("mqtt://3.110.43.39:1883")
var read_data
const topic="cloud"

//Reading json data from file
fs.readFile("./mainData.json",function(error,data){
    if(error){
        console.log("File not Found...")
    }else{
        read_data=data
        //console.log(read_data)
    }
}); 


//On connecting to Broker Publishing Data
client.on("connect",function(res,error){
    if(error){
        console.log(error)
    }else{
        console.log("Connected to broker sucessfully -----")
        function pub(){
            client.publish(topic,read_data)
            console.log("Data Published.")
        }
        setInterval(pub,5000)
        
    }

});