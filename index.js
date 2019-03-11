  function verify(){
    var y = document.getElementById("input").value;
    if ( isNaN(y)){
      text = "Input Declined";
      var a = document.getElementById("input").style.border = '2px solid red'
      var b = document.getElementById("display").innerHTML = text
      var c = document.getElementById("display").style.color = 'red'
      var d = document.getElementById("warning").style.display = 'inline-block'
      var z = document.getElementById("warning2").style.display = 'none'
    }
    else{
      text = "Input Allowed";
      var e = document.getElementById("input").style.border = '2px solid green'
      var f = document.getElementById("display").innerHTML = text
      var g = document.getElementById("display").style.color = 'green'
      var h = document.getElementById("warning").style.display = 'none'
      var m = document.getElementById("warning2").style.display = 'none'
    }
    if (y ==''){
      text = "No input"
      var i = document.getElementById("display").innerHTML = text
      var j = document.getElementById("input").style.border = '2px solid red'
      var k = document.getElementById("display").style.color = 'red'
      var d = document.getElementById("warning2").style.display = 'inline-block'
    } 
    else{
      return function verify(){
        var a,b,c,d,e,f,g,h
    } 
  }
}