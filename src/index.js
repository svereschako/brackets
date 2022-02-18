module.exports = function check(str, bracketsConfig) {
  // your solution
  var stck = [];
  function isopen(s) {
    for(var j=0;j<bracketsConfig.length;j++){
      if(s == bracketsConfig[j][0])
        return true;      
    }
    return false;
  }
  
  function ispair(o,c) {
    for(var j=0;j<bracketsConfig.length;j++){
      if(o == bracketsConfig[j][0] && c == bracketsConfig[j][1])
        return true;
    }
    return false;
  }
  
  for (var i=0;i<str.length;i++){    
      if(ispair(str[i], str[i])){
        if(stck[stck.length-1] !== str[i]){
          stck.push(str[i]);          
        }
        else{ 
          stck.pop();          
        }
      }             
      else if(isopen(str[i])){        
        stck.push(str[i]);        
      }
      else if(ispair(stck[stck.length-1], str[i])){        
        stck.pop();        
      }
      else{        
       console.log(stck);
       return false;
      }     
  }
  console.log(stck);
  return stck.length ? false : true;
}
