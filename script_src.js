



        function dofirst() {

            var button = document.getElementById("button");

        button.addEventListener("click",savecrap,false);

        }

        function savecrap()

        {

        var one=document.getElementById("one").value;

                var two=document.getElementById("two").value;

                localStorage.setItem(one,two);

                display(one);

        }

    function display(one)

    {

    var rightbox=document.getElementById("rightbox");

    var two=localStorage.getItem(one);
    
    
    //raido
        var rates = document.getElementById('rates').value;
var rate_value;
if(document.getElementById('r1').checked){
    rate_value = document.getElementById('r1').value;

}else if(document.getElementById('r2').checked){
    rate_value = document.getElementById('r2').value;

}else if(document.getElementById('r3').checked){
    rate_value = document.getElementById('r3').value;
} 
    
  
 
  
  
  //drop downlist
     var x = document.getElementById("mySelect").value;
  
    
    
    
    //cheek box
        var txt = " ";
       var rates = document.getElementById('Requirements').value;
var rate_value;
if(document.getElementById('r11').checked){
    
    txt = txt + document.getElementById('r11').value + "  ";

} if(document.getElementById('r22').checked){

    txt = txt + document.getElementById('r22').value + "  ";

} if(document.getElementById('r33').checked){
    txt = txt + document.getElementById('r33').value + "  ";
} 
    
    
    if(document.getElementById('r44').checked){
    txt = txt + document.getElementById('r44').value + "  ";
} 
    if(document.getElementById('r55').checked){
    txt = txt + document.getElementById('r55').value + "  ";
} 
    
   
    

    rightbox.innerHTML=" <h3>This event has been successfully published</h3><br>Event Title:  " +one+"<br>Event Description:  " +two+"<br>For program:  "+rate_value+"<br>Event Category:  " +x+"<br>Requirements:  "+txt;

      
    }
        
     
    window.addEventListener("load",dofirst,false);
    
    
   function hide(){
  
 document.getElementById('tab3').style.display = "none"; // hide body div tag
document.getElementById('open').style.display = "block"; 


   }