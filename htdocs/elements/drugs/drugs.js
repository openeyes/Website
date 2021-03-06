// Change the options in the _select according to filters
function updateSelect(_selectId, _specialty)
{
	// Get reference to the select
	var sel = document.getElementById(_selectId);
	
	// Remove all options
	sel.options.length = 0;
	
	// Repopulate with correct format
	switch (_specialty)
	{
		case "Vitreoretinal":
		
			// Populate select according to state of no preservative flag and type
			sel.options[sel.options.length] = new Option("Common drugs","");
			for (var i = 0; i < lastIndex; i++) {
				sel.options[sel.options.length] = new Option(this.commonDrugSet[i].name, this.commonDrugSet[i].id);
			}
			
			break;					
		default:
			alert("default");
			break;
	}
}

// Clear table
function clearTable()
{
	if (scriptCount > 0)
	{
		for (scriptCount--; scriptCount >= 0; scriptCount--)
		{
			document.getElementById('presTable').deleteRow(scriptCount + 1);
		}
	}
	
	scriptCount = 0;
}

// Delete row
function deleteRow(obj)
{
	// Get index of row
	var rowIndex = obj.parentNode.parentNode.sectionRowIndex + 1;
	
	// Delete it
	document.getElementById('drugTable').deleteRow(rowIndex);
	
	// Augment row counter
	scriptCount--;
}

// Add end date
function addEnd(_obj) {

	// Get index of row
	var rowIndex = _obj.parentNode.parentNode.sectionRowIndex + 1;
	
	// Make reason mennu visible
	document.getElementById('reason' + rowIndex).style.display = '';
	
	// Today
	var dt = new Date();
	var dts = dt.getDate() + '/' + dt.getMonth() + '/' + dt.getFullYear();
	
	// Get cell containing end button
	var cell = document.getElementById('end' + rowIndex);
	
	// Remove content
	while(cell.firstChild) {
	    cell.removeChild(cell.firstChild);
	}
	
	// Replace with today's date
	var textNode = document.createTextNode(dts);
	cell.appendChild(textNode);
	
	// Uncheck management plan
	var check = document.getElementById('mp' + rowIndex);
	check.checked = false;	
}

// Add row
function addRow(_value)
{
	// Get index of selected drug
	var index = _value
	
	// Get reference to table
	var table = document.getElementById('drugTable');
	
	// Index of next row is equal to number of rows
	var nextRowIndex = table.tBodies[0].rows.length;
	
	// Add new row
	var newRow = table.tBodies[0].insertRow(nextRowIndex);
	
	// Name
	var paraNode = document.createElement("p");
	paraNode.setAttribute('class','tableText');
	var textNode = document.createTextNode(this.commonDrugSet[index].name);
	paraNode.appendChild(textNode);
	var cell0 = newRow.insertCell(0);
	//cell0.setAttribute('width', '40%');
	cell0.appendChild(paraNode);
				
	// Dose
	var cell1 = newRow.insertCell(1);
	if (!this.commonDrugSet[index].is_ophthalmic)
	{
		var numbers = ['1', '2', '3', '4', ,'5', '6', '7', '8', '9', '10'];
		cell1.appendChild(tableSelect(numbers, 1, 'number'));
	}
	
	// Route
	var cell2 = newRow.insertCell(2);
	var routes = ['Topical', 'Sub-Tenons', 'Sub-Conj', 'Intravitreal', 'PO', 'PR', 'IM', 'IV', 'To skin'];
	cell2.appendChild(tableSelect(routes, this.commonDrugSet[index].route, 'route'));

	// Options
	var cell3 = newRow.insertCell(3);
	if (this.commonDrugSet[index].is_ophthalmic)
	{
		var eyes = ['', 'RE', 'LE', 'BE'];
		cell3.appendChild(tableSelect(eyes, this.principalEye, 'eye'));
	}
		
	// Frequency
	var cell4 = newRow.insertCell(4);
	var frequencies = ['od', 'bd', 'tid', 'qid', '5/day', '2 hourly', 'hourly', 'nocte', 'prn'];
	cell4.appendChild(tableSelect(frequencies, this.commonDrugSet[index].frequency, 'frequency'));

	// Start date
	var cell5 = newRow.insertCell(5);
	var dt = new Date();
	var dts = dt.getDate() + '/' + dt.getMonth() + '/' + dt.getFullYear();
	textNode = document.createTextNode(dts);
	cell5.appendChild(textNode);
	
	// End date
	var cell6 = newRow.insertCell(6);
	cell6.setAttribute('id', 'end' + (nextRowIndex + 1));
	var endButton = document.createElement('a');
	endButton.setAttribute('onClick','addEnd(this);');
	endButton.innerText = "End";
	cell6.appendChild(endButton);
	
	// Reason for stopping
	var cell7 = newRow.insertCell(7);
	var reasons = ['--Please Select--', 'Allergy', 'Intolerance', 'Non-responder', 'Systemic side effects', 'Local side effects', 'Tachyphylaxis'];
	var sel = tableSelect(reasons, '', 'Reasons')
	sel.setAttribute('id', 'reason' + (nextRowIndex + 1));
	sel.setAttribute('style', 'display:none;');
	cell7.appendChild(sel);

	// Management plan
	var cell8 = newRow.insertCell(8);
	var check = document.createElement('input');
	check.setAttribute('id', 'mp' + (nextRowIndex + 1));
	check.type = 'checkbox';
	cell8.appendChild(check);
					
	// Delete aref
	var cell9 = newRow.insertCell(9);
	var deleteButton = document.createElement('a');
	deleteButton.setAttribute('onClick','deleteRow(this);');
	deleteButton.innerText = "Delete";
	cell9.appendChild(deleteButton);
	
	// Reset select index
	document.getElementById('drugSelector').selectedIndex = 0;
	
	// Augment row counter
	scriptCount++;
}

// Construct and return select for array
function tableSelect(optionArray, selectedValue, name)
{
	var tableSelect = document.createElement('select');
	tableSelect.setAttribute('name', name + scriptCount);
	tableSelect.setAttribute('class', 'tableSelect');
	
	// Iterate through array adding options
	var i;
	for (i in optionArray)
	{
		var option = document.createElement('option');
		if (selectedValue == optionArray[i]) option.setAttribute('selected', 'true');
		option.innerText = optionArray[i];
		tableSelect.appendChild(option);
	}

	return tableSelect;
}

// Calls php script to do incremental search
function incrementalSearch(searchText)
{
	// Values
	var selectName = 'namelist';
	var noPresFlag = document.getElementById('chk_pres').checked;
	var category = document.getElementById('drugCategory').value;
    			
	// Define server connection
    http.open('get', 'ajaxSearchDrugs.php?txt=' + searchText + '&select=' + selectName + '&nonPreserved=' + noPresFlag + '&category=' + category);
    
    // Assign handler for the response
    http.onreadystatechange = processResponse;
	
    // Send the request to the server
    http.send(null);
}

// Function called from selection in namelist by double click or CR key press
function nameSelected(id, code)
{
	// Get selected option
	var sel = document.getElementById(id);
	var chosenOption = sel.options[sel.selectedIndex];
	
	//alert(chosenOption.value);
	var jsonString = chosenOption.value;
	var jsObject = JSON.parse(jsonString);
	console.log(jsObject.frequency);
	
	// Add to placeholder in commonDrugSet
	this.commonDrugSet[lastIndex].name = jsObject.name;
	this.commonDrugSet[lastIndex].route = jsObject.route;
	this.commonDrugSet[lastIndex].frequency = jsObject.frequency;
	this.commonDrugSet[lastIndex].duration = jsObject.duration;
	this.commonDrugSet[lastIndex].is_ophthalmic = jsObject.is_ophthalmic;

	// Insert into table
	addRow(lastIndex);

	// Display term 
	//document.getElementById('diagnosis_display').innerHTML = chosenOption.text;
	
	// Show clear button
	//document.getElementById('clearButton').style.display = "block";
	
	// Clear nameselected
	document.getElementById('results').innerHTML = "";
}

// Macros
function runMacro(_value)
{
	switch (_value)
	{
		case "Post-op":
			addRow(0);
			addRow(1);
			addRow(3);
			break;
				
		case "First clinic":
			addRow(1);		
			break;
				
		case "High pressure":
			addRow(3);
			addRow(4);		
			break;
								
		default:
			console.log('Default');
			break;
	}
	
	// Reset select index
	document.getElementById('setSelector').selectedIndex = 0;
}