(function () {
    var CharacterPos = 0;
    var MsgBuffer = "";
    var TypeDelay = 100; 
    var NxtMsgDelay = 1000;
    var MsgIndex = 0;
        var delay;
    var MsgArray = ["BMU Robotics Club"];
     
    function StartTyping() {
       var id = document.getElementById("typing-text");
       if (CharacterPos != MsgArray[MsgIndex].length) {
          MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
          id.value = MsgBuffer+"|";
          delay = TypeDelay;
          id.scrollTop = id.scrollHeight; 
       } else {
          delay = NxtMsgDelay;
          MsgBuffer   = "";
          CharacterPos = -1;
          if (MsgIndex!=MsgArray.length-1){
            MsgIndex++;
          }else {
            MsgIndex = 0;
              }
        }
        CharacterPos++;
        setTimeout(StartTyping,delay);
    }
     StartTyping();
})();

// !Project JS 
let flex_img = document.getElementById("flex-img");
let flex_content = document.getElementById("flex-content");

function FBbot(){
  flex_img.setAttribute("src","/Images/food.jpg");
  flex_content.innerHTML = "<h4>By Charith Reddy</h4><h4>Batch: 2021 </h4><h4>About : </h4><p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>";
}

function FFbot(){
  flex_img.setAttribute("src","/Images/firefighting.jpg");
  flex_content.innerHTML = "<h4>By Harshith Tunuguntla</h4><h4>Batch: 2023 </h4><h4>About : </h4><p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>";
}

function RFid(){
  flex_img.setAttribute("src","/Images/rfid.jpg");
  flex_content.innerHTML = "<h4>By Gali Ravi Praveen</h4><h4>Batch: 2023 </h4><h4>About : </h4><p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>";
}
function RCplane(){
  flex_img.setAttribute("src","/Images/rcplane.jpg");
  flex_content.innerHTML = "<h4>By Charith Reddy</h4><h4>Batch: 2023 </h4><h4>About : </h4><p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>";
}