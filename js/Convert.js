
function CharCodeMaker()
{ 
	var input = document.getElementById("input").value; //get input value 
	//var input = prompt("ENTER YOUR TEXT");
	var spot = document.getElementById("output");
	output = "";
	for(i=0; i<input.length; ++i)
	{
		if(output != "") output += " ,";
		output += input.charCodeAt(i);
	}
    spot.innerHTML = output;
	document.charCodeAt.output.value = output;
}