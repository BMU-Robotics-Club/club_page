// params

function sendMail() {

    var tempParams = {
    // first_name: document.getElementById("firstname").value,
    // contact_number: document.getElementById("number").value,
    // from_gmail: document.getElementById("Gmail id").value,
    // to_name: document.getElementById("toName").value,
    // message: document.getElementById("msg").value,


    first_name:"prrkdssf",
    contact_number: "12344567890",
    from_gmail: "bmuroboticsclub@bmu.edu.in",
    to_name:"USer Name",
    reply_to:"grpnpraveen@gmail.com",
    message: "oh k then",
        
    };
    emailjs.send('service_7vmu1d5','template_7yz7myp',tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
    
}