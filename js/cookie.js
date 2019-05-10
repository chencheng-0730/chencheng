function setCookie(key,value,opt){
    opt = opt ? opt : {} ;
    var d = new Date();
    d.setDate(d.getDate()+opt.expires);
    var expires = opt.expires ? ";expires=" + d : "" ;
    var path = opt.path ?  ";path=" + opt.path : "" ;
     document.cookie = key + "=" + value + expires + path ;
 }    
 function removeCookie(key,opt){
  var opt = opt ? opt : {};
  var path = opt.path ? opt.path : null;
  setCookie(key,1,{
     expires:-1,
     path:path
  })
 }
function getCookie(key){
var arr =  document.cookie.split('; ');
var newArr =  arr.filter(value => {
   return value.split('=')[0] === key;
 });
 if(newArr[0]) {return  newArr[0].split('=')[1];}
 else{return '';}

 }

//   console.log( getCookie('user'))

 // removeCookie("d");
 // setCookie("user","admin",{
 //     expires:3,
 //     path:"/cookie",
 // })