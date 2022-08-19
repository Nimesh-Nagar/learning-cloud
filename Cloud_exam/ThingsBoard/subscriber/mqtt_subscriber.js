const mqtt = require('mqtt')
const fs = require('fs')
const client = mqtt.connect("mqtt://3.110.43.39:1883") //MQTT  broker is on AWS EC2 instance

topic = "cloud"

//connecting to Cloud Broker and Subscribed to topic
client.on("connect",function(res,error){
    if(error){
        console.log(error)
    }else{
        console.log("-------- Connected to Broker Successfully --------")
        client.subscribe(topic,function(error){
            if(error){
                console.log(error)
            }else{
                console.log(`Subscribed to Topic: ${topic}`)
            }
        })
    }
});

// After receiving data from publisher again send (publish) data to IoT platform (ThingsBoard)
client.on("message",function(topic,data){
    var things = mqtt.connect("mqtt://demo.thingsboard.io/",{username :"nimesh_n"})

    things.on("connect",function(){
        //console.log("connected")
        things.publish("v1/devices/me/telemetry",data,function(error){
            if(error){
                console.log(error)
            }
            else{
                console.log("..Data Received..")
            }
            
        })
    })
})