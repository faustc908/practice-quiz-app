       
var bills = [124, 48, 268];
var tips = [1, 2 ,3];

function calculateTips(bill){
  var percentage;
  if(bill < 50){
  percentage = .2;
  }
  else if(bill >= 50 && bill < 200){
  percentage = .15;
  }
  else(bill > 200){
  percentage = .1;
  }  
    
  return percentage * bill 
}
         