const { times } = require("lodash");

let Event="placeholderevent";
let Username="somex";
// params


function sendMail() {


    var tempParams = {

    // contact_number: "12344567890",
    // from_gmail: "bmuroboticsclub@bmu.edu.in",
    // to_name:" "+ Username +".",
    // reply_to:"grpnpraveen@gmail.com",
    // message: "Thank you for registering in "+Event+".",
  
    
    
    from_name:"Confirmation Mail | BMU Robotics Club",
  
    contact_number: document.getElementById("number").value,
    from_gmail: "bmuroboticsclub@bmu.edu.in",
    to_name: " " + document.getElementById("firstname").value,
    reply_to: document.getElementById("gmail").value,
    message: "Thank you for registering in "+ document.getElementById("eventname").value+".",
        
    
    };

    // alert(tempParams["contact_number"] + "1");

    emailjs.send('service_7vmu1d5','template_7yz7myp',tempParams)
    .then(function(res){
        console.log("success", res.status);
    })

    
    alert("Your Name is :" + tempParams["to_name"] + "\n" +"Your Email is :" + tempParams["reply_to"] + "\n"+ "Your Mobile is :" + tempParams["contact_number"] + "\n");


    //alert(tempParams["contact_number"]);

   
    
}




    // first_name: document.getElementById("firstname").value,
    // contact_number: document.getElementById("number").value,
    // from_gmail: document.getElementById("Gmail id").value,
    // to_name: document.getElementById("toName").value,
    // message: document.getElementById("msg").value,


 
