var obj = {  
  "a": 1,  
  "b": 2,  
  "c": 3  
};  
  
for (var prop in obj) {  
  if (obj.hasOwnProperty(prop)) {   
  // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...  
    alert("prop: " + prop + " value: " + obj[prop])  
  }  
}  



双重Map循环 
var msg = "";  
for(var key in Pin) {  
   for(var i in Pin[key]){  
    msg+=i+": "+Pin[key][i]+"\n";  
   }  
}  
alert(msg); 


