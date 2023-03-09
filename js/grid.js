

// make grid 
function makegrid(g)
{
    for (let i = 0; i <g; i++)
    {
        console.log(g);
        for (let k = 0; k< g; k++) {
            console.log("g"+g);
            $("#grid").append('<div class="box" id="box"></div>');  
        }
           $("#grid").append('<br>');
    }
}
// get value from user 
function no_of_grid(){
    let g = document.getElementById("usergrid").value;
       makegrid(g);
   };
   const eg=[];
// on click work 
function gridwork() {
    no_of_grid();
    let col = document.getElementById("pick_color");
      let sam=document.querySelectorAll(".box")
     sam.forEach((x)=>{
     x.addEventListener("mouseover",(e)=>{
    if(eg.length>9){
      let i=0;
      let dd;
      while(i<9){
        dd=eg.shift(); 
        dd.style.backgroundColor="black";
        i++
      }
    }
    if(col.value){
      e.target.style.backgroundColor= col.value;
      if(col.value!=='white'){
    eg.push(x)
      }
    }
  })
})
}