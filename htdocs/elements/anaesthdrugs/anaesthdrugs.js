// Change the options in the _select according to filters
function updateSelect(_selectId)
{
	// Get reference to the select
	var sel = document.getElementById(_selectId);
	
	// Remove all options
	sel.options.length = 0;
	
	// Populate select according to state of no preservative flag and type
	sel.options[sel.options.length] = new Option("Common drugs","");
	for (var i = 0; i < lastIndex; i++)
	{
		sel.options[sel.options.length] = new Option(this.commonDrugSet[i].name, this.commonDrugSet[i].id);
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
	document.getElementById('presTable').deleteRow(rowIndex);
	
	// Augment row counter
	scriptCount--;
}

// Add row
function addRow(_value)
{
	// Get index of selected drug
	var index = _value
	
	// Get reference to table
	var table = document.getElementById('presTable');
	
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
	
	// Route
	var cell1 = newRow.insertCell(1);
	var routes = ['PR', 'IM', 'IV'];
	cell1.appendChild(tableSelect(routes, this.commonDrugSet[index].route, 'route'));

	// Duration
	var cell2 = newRow.insertCell(2);
	var duration = document.createElement("canvas");
	duration.setAttribute('width', 600);
	duration.setAttribute('height', 20);
	duration.setAttribute('id', 'duration' + scriptCount);
	duration.setAttribute('class', 'durationCanvas');
	cell2.appendChild(duration);
	canvasInit('duration' + scriptCount);
	
	// Delete aref
	var cell3 = newRow.insertCell(3);
	var deleteButton = document.createElement('a');
	deleteButton.setAttribute('onClick','deleteRow(this);');
	deleteButton.innerText = "Delete";
	cell3.appendChild(deleteButton);
	
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

// Initialises canvas
function canvasInit(_canvasId)
{
    // Get reference to the drawingEdit canvas
    var canvasEdit = document.getElementById(_canvasId);

    // Create a drawingEdit (Set to scale on width (otherwise compresses doodle)
    drawingEdit = new ED.Drawing(canvasEdit, ED.eye.Right, 'RPS', true, {graphicsPath:'../../graphics/', scaleOn:'Width'});
    
    // Instantiate a controller object
    var controller = new eyeDrawController(drawingEdit);
    
    // Initialise drawing
    drawingEdit.init();
    
    // Set focus to canvasEdit element
    canvasEdit.focus();

    // Controller class
    function eyeDrawController(_drawing)
    {
        this.drawing = _drawing;
        
        // Specify call back function
        this.callBack = callBack;
        
        // Register for notifications with drawing object
        this.drawing.registerForNotifications(this, 'callBack', []);
        
        // Method called for notification
        function callBack(_messageArray)
        {
            //console.log("Notified for event: " + _messageArray['eventName']);

            switch (_messageArray['eventName'])
            {
                // Eye draw image files all loaded
                case 'ready':
                    doodle = this.drawing.addDoodle('AgentDuration');
                    //this.drawing.deselectDoodles();
                    break;
                case 'mouseout':
                	this.drawing.deselectDoodles();
                	break;
            }
        }
    }
}