
$(document).ready(function(){
    
    WhiteboardUi.init($("#canvas"));
    var arrayVariable = ['ali hasani','mina nayernia','zahra sedaqat','mamad bastin','yekta kamane','ali hasani','mina nayernia','zahra sedaqat','mamad bastin','yekta kamane'],
      arrayLength = arrayVariable.length;
    var arrayVariablerole = ['host','presenter','presenter','presenter','presenter' ,'host','presenter','presenter','presenter','presenter'];
  for (i = 0; i < arrayLength; i++) {
   
    var div = document.createElement('div');
    div.id = i;
    div.innerHTML = arrayVariable[i] + "        (" + arrayVariablerole[i] + ")";
    document.getElementById('Attendees').appendChild(div);
    $("#" +i).prepend('<i class="fa fa-user" style="margin : 5px;"></i>');
    $("#" + i ).css({"background-color": "rgb(216, 211, 211)", "border-color": "#111" , "border-radius" : "20px" , "margin" : "5px"  , "height" : "30px" , "padding" : "6px 3px " , }); ;
    $("#" +i).prepend('<div class="dropdown" style="float : right; "> <button class="button-user"> <i class="fa fa-ellipsis-v" style="float : right;"></i> </button> <div class="dropdown-content" class="dropdoen-left" style="right: 4px;left: auto;width:50px;background-color:white;" ><button class="dropdown-userbt chng-host">change to host</button><button class="dropdown-userbt chng-pres" >change to presenter</button> <button class="dropdown-userbt chng-mic" id="chng-mic" onclick="allow_mic(this)" value="#000" >Disable/Enalble mic</button> </div></div>');
  }

  var user_role ="host";
  if (user_role == "host"){
    $(".presenter").show();
    $(".activate_mic").show();
    $(".leftslidebar").show();
    $(".button-user").show();
    $(".chng-host").show();
    $(".chng-pres").show();
    $(".chng-mic").show();

  }
  if(user_role == "presenter"){
    $(".presenter").show();
    $(".activate_mic").show();
    $(".leftslidebar").show();
    $(".button-user").show();
    $(".chng-mic").show();
  }
  groupChat.init();


});


function opentab(evt, tabname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
  
  
}

function allow_mic(){
  alert("disable or enable mic");
}

function des_en_mic(){

  var x = $("#activate_mic").val();
  alert(x);

  if ( x == "#009900"){
    $("#activate_mic").css({'background': '#e60000' , 'border-radius' : '30px' ,}) ; //red
    $("#activate_mic").val("#e60000");
  }
  else{
    $("#activate_mic").css({'background': '#009900', 'border-radius' : '30px' ,}) ; //green
    $("#activate_mic").val("#009900");
  }
}