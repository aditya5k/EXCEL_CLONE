let cellscontentdiv =document.querySelector(".cells-content");
function initcells(){
    let cellscontent ="<div class='top-left-cell'></div>";
    cellscontent+="<div class = 'top-row'>"
    for(let i=0;i<26;i++){
        cellscontent+=`<div class='top-row-cell'>${String.fromCharCode(65+i)}</div>`
    }
    cellscontent+="</div>";
    

    cellscontent+="<div class='left-col'>"
    for(let i=0;i<100;i++){
        cellscontent+=`<div class='left-col-cell'>${i+1}</div>`
    }
    cellscontent+="</div>";
    cellscontent+="<div class='cells'>";
    for(let i=0;i<100;i++){
        cellscontent+="<div class = 'row'>";
        for(let j=0;j<26;j++){
            cellscontent+= `<div class='cell' rowid='${i}' colid='${j}'contentEditable></div>`
        }
        cellscontent+="</div>"
    }
    cellscontent+="</div>";
    cellscontentdiv.innerHTML=cellscontent;

}
initcells();
let db;
function initdb(){
    db=[];
    for(let i=0;i<100;i++){
       let row=[];
       
       for(let j=0;j<26;j++){
        let name=String.fromCharCode(65+j)+(i+1)+"";
        let cellobject={
            name:name,
            value:""
        }
        row.push(cellobject);
       }
       db.push(row); 
    }
}
initdb();

