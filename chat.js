groupChat = {

    mesgs : [
      { user: "reza", text: "asfjhdjkfasaasfasfkadskfhadshfjkasl", inchat: false },
      { user: "ali", text: "hello", inchat: false },
      { user: "reza", text: "asffaf", inchat: false },
      { user: "mmd", text: "asfjhdjkfkadskfhadshfjkasl", inchat: false },
      { user: "reza", text: "asfjhdjkfkadskfhadshfjkasl", inchat: false },
    ],
  
    chat_box : "",
    username : "",

    init : function(){
        this.chat_box = document.getElementById("chatbox");
        // this.username = attendees.user_name;
        this.username = "mina";
        for (var i in this.mesgs) {
            var node = document.createElement("p");
            var textnode = document.createTextNode(`${this.mesgs[i].user}: ${this.mesgs[i].text}`); 
            node.appendChild(textnode);
            this.chat_box.appendChild(node);
        }
       
    },
  
    send : function(){
      var msg = document.getElementById("msg");
      if (msg.value.length > 0) {
        var newmsg = { user: this.username , text: msg.value };
        //this.mesgs.push(newmsg); // get a newmsg and push it
        groupChat.pushMssg(newmsg);
        
      }

    },

    pushMssg : function(newMssg){
        this.mesgs.push(newMssg);
        var msg = document.getElementById("msg");
        msg.value = "";
        this.chat_box.value = "";
        var node = document.createElement("p");
        var textnode = document.createTextNode(`${newMssg.user}: ${newMssg.text}`);
        node.appendChild(textnode);
        this.chat_box.appendChild(node);
        
    }
  
  }