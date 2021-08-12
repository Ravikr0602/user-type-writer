var user_write = document.getElementById('user_write').value;
var type_writer = document.getElementById('type_writer');
type_writer.textContent = user_write;

var restart = document.getElementById('Restart_btn');

restart.onclick = function(){
  user_write = document.getElementById('user_write').value;
  type_writer = document.getElementById('type_writer');
  type_writer.textContent = user_write;
  TypeWriter();
}

function TypeWriter(){
  var text = type_writer.textContent;
  var text_length = text.length;
  var j = text_length;
  var text_Array = [];
  var text_First_Arr = [];
  var text_start = '';
  
  //remove text here
  type_writer.textContent = '';



  function create_textArr(){
    for( var i = 0; i < text_length; i++ ){
      text_Array.push([text.substring( 0, 1 ), i]);
      text = text.slice(1);
      text_First_Arr = text_Array;
    }
  }

  function write_text(){

    if(text_First_Arr.length > 0){
      text_start += text_Array[0][0];
      text_First_Arr.shift();
      type_writer.textContent = text_start;
    }else{
      clearInterval(intervall);
    }
  }

  //In One word max charcter 50 char

     var intervall = setInterval(write_text,50);
 


  create_textArr();

  //restart typing here
  function restart_typing(){
    console.log('click');
    create_textArr();
    type_writer.textContent = '';
    setInterval(write_text,50);
    write_text();
  }
}