

    
$('#functionBlock').hide();
let tableWidth;
let rows, cols;
let magicTd;
let rndRow, rndCol;

function updateRowRange(){
   
       document.getElementById("rowRange").innerHTML = document.getElementById("rowInput").value;
    
}

function updateColRange(){
   
       document.getElementById("colRange").innerHTML = document.getElementById("colInput").value;
    
}

function addTable(){
    var body = document.querySelector("body"),
        tr = "",
        td = "",
		input = "",
		but = "";
	title = "";
    rows = document.getElementById("rowInput").value;
    cols = document.getElementById("colInput").value;  
    table = document.createElement("table");
	table.id = "generatedTable";
    table.border = "double";
	title = document.createElement("caption");
    title.id = "tableCaption";
    table.appendChild(title);
	
    for (var i = 0; i < rows; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < cols; j++) {
			td = document.createElement("td");
			input = document.createElement("textarea");
			but = document.createElement("input");
			but.type = "button";
			but.addEventListener("click", saveTextArea); 
			but.value = "Сохранить";
            
			td.appendChild(input);
			td.appendChild(but);
			tr.appendChild(td);
        }
        table.appendChild(tr);
    }
	
	$("#formContainer").slideUp();
	document.getElementById("functionBlock").appendChild(table);
    $("#functionBlock").show();
    
    tableWidth = $("#generatedTable").outerWidth();
    $("#tableWidthInput").attr("value", tableWidth);
    $("#tableWidth").text(tableWidth);
    
    $("#tableRowDelete").attr("max", rows);
    
    
    
}
	
function updateTableWidth(){
    document.getElementById("tableWidth").innerHTML=
    document.getElementById("tableWidthInput").value;
    
    document.getElementById("generatedTable").width=
    document.getElementById("tableWidthInput").value;
    
}

function showRemoveRow(){
            
    
    document.getElementById("rowToDelete").innerHTML=
    document.getElementById("tableRowDelete").value;
  
}

function removeRow(){
    if(rows!=0){
    var  currentTable = document.getElementById("generatedTable");
    let  rowToDelete = document.getElementById("tableRowDelete").value;
    currentTable.rows[rowToDelete-1].remove();
    if(rows==1){
        $("#tableRowDelete").hide(); 
        $("#rowToDelete").hide(); 
        $("#deleteButton").hide(); 
        document.getElementById("rowToDeleteLabel").innerHTML = " Вы удалили все строки!" ;
        }
    rows--;
    $("#tableRowDelete").attr("max", rows);
    document.getElementById("rowToDelete").innerHTML=
    document.getElementById("tableRowDelete").value;
        
    }
        
    
}

function addCaption(){
    $("caption").text(document.getElementById("captionInput").value);
}
	
function magicHappens(){
			var row = document.getElementById("table_row").value;
			var col = document.getElementById("table_col").value;
			var rndRow = Math.trunc(Math.random()*100)%row;
			var rndCol = Math.trunc(Math.random()*100)%col;
			var newId = "#tdId_" + rndRow + "_" + rndCol;
			//console.log(newId);
			var newColour = "#"+((1<<24)*Math.random()|0).toString(16);
			//console.log(newColour);
			var a = Math.trunc(Math.random()*10)%3;
				switch (a) {
				  case 0:
				    // Цвет
					$(newId).css("background-color", newColour);
				    break;
				  case 1:
				    //Шрифт 15-25
					newId = "#SaveTextarea_" + rndRow + "_" + rndCol;
					newColour = Math.trunc(Math.random()*10) + 15 + "px";
					$(newId).css("font-size", newColour);
				    break;
				  case 2:
				    //Удалить
					newId = "#Text_" + rndRow + "_" + rndCol;
					$(newId).css("font-size", newColour);
					//и вернуть форму
					$(newId).text("");
					document.getElementById("SaveButton_" + rndRow + "_" + rndCol).hidden = false;
					document.getElementById("SaveTextarea_" + rndRow + "_" + rndCol).hidden = false;
					// newId = "Text_" + rndRow + "_" + rndCol;
					// document.getElementById(newId).innerHTML = "";
				    break;
				  default:
				    alert( "make me come out" );
				}
		};

function resetTableBorder(){
    let newStyle = document.getElementById("tableStyleInput").value;
    $("#generatedTable").css("border",newStyle);
}

function saveTextArea(){
	var $mama = this.parentElement, 
		string = ""; 
		
	string = $mama.children[0].value;
	$mama.children[0].remove();
	$mama.children[0].remove();
	data = document.createElement("span");
	data.innerHTML = string;
	$mama.prepend(data);
} 

function deleteTable(){
    $("#generatedTable").remove(); 
    $("#functionBlock").hide();
    $("#formContainer").slideDown();
    $("#tableRowDelete").show(); 
    $("#rowToDelete").show(); 
    $("#deleteButton").show();
    $("#captionInput").val('');
    document.getElementById("rowToDeleteLabel").innerHTML = " Удалить строку:" ;
}

function magic(){
            
    var currentTable = document.getElementById("generatedTable");
	 rndRow = Math.trunc(Math.random()*100)%rows;
     rndCol = Math.trunc(Math.random()*100)%cols;   
    
    magicTd = currentTable.rows[rndRow].querySelectorAll('td')[rndCol];
    
   var newColour = "#"+((1<<24)*Math.random()|0).toString(16);	
   var a = Math.trunc(Math.random()*10)%4;
  
    switch (a) {
                 case 0:
				    // Цвет
					magicTd.style.backgroundColor = newColour;
				    break;
			     case 1:
				    //Шрифт 15-25

					let newFontSize = Math.trunc(Math.random()*10) + 15 + "px";
					magicTd.style.fontSize = newFontSize;
                    magicTd.querySelector('textarea').style.fontSize = newFontSize;
				    break;
				  case 2:
			    //Удалить
                    if(magicTd.querySelector('span') != null){
                        magicTd.children[0].remove();
            
                        let input = document.createElement("textarea");
			             let but = document.createElement("input");
			             but.type = "button";
			             but.addEventListener("click", saveTextArea); 
			             but.value = "Сохранить";
            
			             magicTd.appendChild(input);
			             magicTd.appendChild(but);
                    }
                    break;
				  case 3:
                    magicTd.style.color = newColour;
                    magicTd.querySelector('textarea').style.color = newColour;
				    break;
				  
				}
    
}

document.getElementById('captionInput').addEventListener('keydown', function(e) {
 
            if (e.keyCode == 13) {
   
                $("#tableCaption").text(document.getElementById("captionInput").value);
            }
 
            });















