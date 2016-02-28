

$(function(){
  var ele=document.getElementsByClassName("selectpicker");
var len=ele.length;
var button=document.getElementById("button");
var sp=document.getElementById("span");

(function show_hide(){
        $("#button").hover(function(){
    $("#span").css("visibility", "visible");
    }, function(){
    $("#span").css("visibility", "hidden");
  });
      })();



//alert(button.disabled);
for(var i=0;i<len;i++)
{
  if(i>0)ele[i].parentElement.parentElement.style.display="none";
  ele[i].addEventListener('change', change);
}
function change()
{


  for(var i=0;i<len-1;i++)
  {
    if(ele[i].value!=""){
      
      //alert("test");
      ele[i+1].parentElement.parentElement.parentElement.style.display="block";
      //alert(ele[i+1].parentElement.style.display);
      //ele[i+1].disabled=false;

    }
    else{
      ele[i+1].value="";

      ele[i+1].parentElement.parentElement.parentElement.style.display="none";   
     
      button.style.cursor = "not-allowed";
       button.style.backgroundColor="#e8e8e8";
        button.style.color="silver";
        $("#button").hover(function(){
    $("#span").css("visibility", "visible");
    }, function(){
    $("#span").css("visibility", "hidden");
  });

        $( "#button").unbind("click" );
    }
    if(ele[0].value!="" && ele[1].value!="" && ele[2].value!=""){
      button.style.cursor = "pointer";
      button.style.backgroundColor="#EBE4DD";
       button.style.color="black";
       $("#button").unbind("mouseenter mouseleave");
      
              $('#button').click(function(){
          window.location = "http://abctoyota.totalcustomerconnect.com/portal/appointments.tcc";
        });


    }
  }
}
});
