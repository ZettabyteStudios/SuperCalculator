

// const light = document.getElementById('light');
// const div = document.getElementsByClassName("container")
// document.addEventListener('mousemove', function(event) {
//   myFunction(event);
// });

//   function myFunction(e) {
//   // light.style.top = (e.clientY/1080 * 100)-(80/1080 * 100) + "%"  ;
//   // light.style.left = (e.clientX/1920 * 100)-(585/1920 * 100) + "%" ;

//     X = e.clientX - ((window.innerWidth-380)/2);
//     Y = e.clientY - ((window.innerHeight-600)/2);

//   light.style.top = Y + "px";
//   light.style.left = X + "px";

// };




let result = document.getElementById("result").value ;
var length = document.getElementById("result").value.length ;

// document.getElementById("result").style.color = 'red' ;
if(document.getElementById("result").value.length > 4){
  document.getElementById("result").style.color = 'red' ;
}

function text(input) {


  // switch (input) {
  //   case document.getElementById("result").value == '' && input==0:
  //     document.getElementById("result").value = '' ;
  //     document.getElementById("History").textContent = '';
  //     break;
     
  //    case document.getElementById("History").textContent.indexOf("+") > -1 :
  //     document.getElementById("History").textContent =  document.getElementById("History").textContent + input;
  //     document.getElementById("result").value = '' + elem ;

  //     break;
  
  //   default:
  //     document.getElementById("result").value = document.getElementById("result").value + input ;
  //     document.getElementById("History").textContent = document.getElementById("result").value;
  //     console.log(document.getElementById("result").value.length);
  //     console.log(typeof document.getElementById("result").value.length);
  //      if(document.getElementById("result").value.length > 4 &&  document.getElementById("result").value.length < 8){
  //        document.getElementById("result").style.fontSize = '60px' ;
  //        }
  //     break;
  // }

  if (document.getElementById("result").value == '' && input==0) {
    document.getElementById("result").value = '' ;
    document.getElementById("History").textContent = '';
  }
  else if(document.getElementById("History").textContent.indexOf("+") > -1){
    document.getElementById("History").textContent =  document.getElementById("History").textContent + input;
    document.getElementById("result").value = '' + input ;

  }
  else if(document.getElementById("History").textContent.indexOf("×") > -1){
    document.getElementById("History").textContent =  document.getElementById("History").textContent + input;
    document.getElementById("result").value = '' + input ;

  }
  else if(document.getElementById("History").textContent.indexOf("÷") > -1){
    document.getElementById("History").textContent =  document.getElementById("History").textContent + input;
    document.getElementById("result").value = '' + input ;

  }
  else if(document.getElementById("History").textContent.indexOf("-") > -1){
    document.getElementById("History").textContent =  document.getElementById("History").textContent + input;
    document.getElementById("result").value = '' + input ;

  }
  
  else{
    document.getElementById("result").value = document.getElementById("result").value + input ;
      document.getElementById("History").textContent = document.getElementById("result").value;
      console.log(document.getElementById("result").value.length);
      console.log(typeof document.getElementById("result").value.length);
       if(document.getElementById("result").value.length > 4 &&  document.getElementById("result").value.length < 8){
         document.getElementById("result").style.fontSize = '60px' ;
         }
  }
// if (result == '' && input==0) {
//   result = '' ;
// }
// else{
//   document.getElementById("result").value = document.getElementById("result").value + input ;
//   document.getElementById("History").textContent = document.getElementById("result").value;
//   console.log(document.getElementById("result").value.length);
//   console.log(typeof document.getElementById("result").value.length);
//   if(document.getElementById("result").value.length > 4){
//     document.getElementById("result").style.fontSize = '50px' ;
//   }

// }

}
function operator(o){

  var withOp = document.getElementById("result").value + o ;
  document.getElementById("History").textContent = withOp ;
  console.log(withOp);

}

function FindResult(){
  var x = eval(document.getElementById("History").textContent);
  document.getElementById("result").value = x ;
}




