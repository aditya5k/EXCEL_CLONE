// const { text } = require("express");

// alert("hello ");\

let toprow=document.querySelector(".top-row");
let leftcol=document.querySelector(".left-col");
let topleftcell=document.querySelector(".top-left-cell");
let allcells = document.querySelectorAll(".cell");
let adressinput= document.querySelector("#adress");
cellscontentdiv.addEventListener("scroll",function(e){
    let scrollfromtop=e.target.scrollTop;
    let scrollfrleft=e.target.scrollLeft;
    toprow.style.top=scrollfromtop+"px";
    leftcol.style.left=scrollfrleft+"px";
    topleftcell.style.top=scrollfromtop+"px";
    topleftcell.style.left=scrollfrleft+"px"

})
for(let i=0;i<allcells.length;i++)
{
    allcells[i].addEventListener("click",function(e){
        let rowId=Number(e.target.getAttribute("rowid"));
        let colId=Number(e.target.getAttribute("colid"));
        console.log(colId);
        let adress=String.fromCharCode(65+colId)+(rowId+1)+"";
        // console.log(adress);
        adressinput.value=adress;
    })
    allcells[i].addEventListener("blur",function(e){
        let cellvalue=e.target.textContent;
        let {rowId,colId}=getrowidcolidfromelement(e.target);
        
        let cellobject=db[rowId][colId];
        if(cellobject.value==cellvalue.value){
            return;
        }
        cellobject.value=cellvalue;
        console.log("after update",cellobject);
    })
}
function getrowidcolidfromelement(element){
    let rowId = element.getAttribute("rowid");
    let colId = element.getAttribute("colid");
    return{
        rowId,
        colId
    }
}