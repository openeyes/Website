// Change the options in the _select according to subsection
function updateSelect(_selectId, _subsection)
{
	// Get reference to the select
	var sel = document.getElementById(_selectId);
	
	var specialty = document.getElementById("specialty").value;
	
	// Remove all options
	sel.options.length = 0;

	// First title
	sel.options[sel.options.length] = new Option("Common procedures","");
				
	// Repopulate with correct format
	switch (specialty)
	{
		case "Adnexal":

			switch (_subsection)
			{
				case "Adjunctive":
					sel.options[sel.options.length] = new Option("Fascia lata harvest", "FL harvest");
					break;
					
				case "Lacrimal":
					sel.options[sel.options.length] = new Option("Dacrocystogram", "DCG ");
					sel.options[sel.options.length] = new Option("Dacryocystorhinostomy (complex)", "DCR complex");
					sel.options[sel.options.length] = new Option("Dacryocystorhinostomy (routine)", "DCR routine");
					sel.options[sel.options.length] = new Option("Examination under anaesthetic", "EUA");
					sel.options[sel.options.length] = new Option("Excision of lacrimal gland", "Excision of lacrimal gland");
					sel.options[sel.options.length] = new Option("Lester Jones tube", "LJ tube");
					sel.options[sel.options.length] = new Option("Removal of tube from nasolacrimal duct", "Removal tube");
					sel.options[sel.options.length] = new Option("Sizler trephine and tube and endoscopy", "Sizler");
					sel.options[sel.options.length] = new Option("Syringe and probe nasolacrimal duct", "S&P");
					break;
				
				case "Lid":
					sel.options[sel.options.length] = new Option("Three snip procedure ", "Three snip");
					sel.options[sel.options.length] = new Option("Biopsy of lid", "Lid biopsy");
					sel.options[sel.options.length] = new Option("Blepharoplasty of both lids", "Bleph both lids");
					sel.options[sel.options.length] = new Option("Blepharoplasty of lower lid", "Bleph lower lid");
					sel.options[sel.options.length] = new Option("Blepharoplasty of upper lid", "Bleph upper lid");
					sel.options[sel.options.length] = new Option("Brow suspension with fascia lata", "Brow susp with FL");
					sel.options[sel.options.length] = new Option("Brow suspension without facia lata", "Brow susp no FL");
					sel.options[sel.options.length] = new Option("Cryotherapy with Collin cryoprobe", "Cryo Collin");
					sel.options[sel.options.length] = new Option("Cryotherapy with liquid nitrogen", "Cryo Nitro");
					sel.options[sel.options.length] = new Option("Ectropion correction", "Ectropion");
					sel.options[sel.options.length] = new Option("Entropion correcton", "Entropion");
					sel.options[sel.options.length] = new Option("Excision of lesion of canthus", "Excision cathal lesion");
					sel.options[sel.options.length] = new Option("Excision of lesion of eyebrow", "Excision eyebrow lesion");
					sel.options[sel.options.length] = new Option("Insertion of gold weight into upper eyelid", "Gold weight");
					sel.options[sel.options.length] = new Option("Lateral canthal sling", "Canthal sling");
					sel.options[sel.options.length] = new Option("Ptosis correction", "Ptosis");
					sel.options[sel.options.length] = new Option("Reconstruction of lid with graft", "Lid recon & graft");
					sel.options[sel.options.length] = new Option("Reconstruction of lid without graft", "Lid recon");
					sel.options[sel.options.length] = new Option("Repair of canthus", "Repair of canthus");
					sel.options[sel.options.length] = new Option("Tarsorrhaphy", "Tarsorrhaphy");
					sel.options[sel.options.length] = new Option("Upper lid lowering", "Upper lid lowering");
					break;
		
				case "Minor":
					sel.options[sel.options.length] = new Option("Biopsy of conjunctiva", "Conj biopsy");
					sel.options[sel.options.length] = new Option("Electrolysis", "Electrolysis");
					sel.options[sel.options.length] = new Option("Incision and curettage of cyst", "I&C");
					sel.options[sel.options.length] = new Option("Punctoplasty", "Punctoplasty");
					break;
		
				case "Orbit":
					sel.options[sel.options.length] = new Option("Anterior orbitotomy", "Ant Orbitotomy");
					sel.options[sel.options.length] = new Option("Biopsy of orbit", "Orbital biopsy");
					sel.options[sel.options.length] = new Option("Canthal orbitotomy", "Canth Orbitotomy");
					sel.options[sel.options.length] = new Option("Decompression of orbit", "Orbital decomp");
					sel.options[sel.options.length] = new Option("Lateral orbitotomy", "Lat Orbitotomy");
					sel.options[sel.options.length] = new Option("Reconstruction of orbit", "Orbital reconstruction");
					sel.options[sel.options.length] = new Option("Removal of orbital implant", "Removal of orbital implant");
					sel.options[sel.options.length] = new Option("Repair of orbital fracture", "Orbital fracture");
					break;
					
				case "Socket":
					sel.options[sel.options.length] = new Option("Enucleation of eye", "Enucleation");
					sel.options[sel.options.length] = new Option("Evisceration of eye", "Evisceration");
					sel.options[sel.options.length] = new Option("Exenteration of orbit", "Exenteration");
					sel.options[sel.options.length] = new Option("Fornix reconstruction with mucus membrane graft", "Fornix MM graft");
					sel.options[sel.options.length] = new Option("Orbital floor implant", "Floor implant");
					break;
															
				default:
					console.log("default");
					break;
			}
			break;

		case "Cataract":
			sel.options[sel.options.length] = new Option("Adjustment of corneal suture", "Corn sut adjust");
			sel.options[sel.options.length] = new Option("Anterior capsulotomy", "Ant capsulotomy");
			sel.options[sel.options.length] = new Option("Anterior vitrectomy", "Ant vity");
			sel.options[sel.options.length] = new Option("Capsulectomy", "Capsulectomy");
			sel.options[sel.options.length] = new Option("Extracapsular extraction of lens", "ECCE");
			sel.options[sel.options.length] = new Option("Insertion of IOL", "IOL");
			sel.options[sel.options.length] = new Option("Irrigation of anterior chamber", "Irrigatn AC");
			sel.options[sel.options.length] = new Option("Phakoemulsification", "Phako");
			sel.options[sel.options.length] = new Option("Posterior capsulotomy", "Post Capsulotomy");
			sel.options[sel.options.length] = new Option("Removal of corneal suture", "Remove corn sut");
			sel.options[sel.options.length] = new Option("Removal of IOL", "Remove IOL");
			sel.options[sel.options.length] = new Option("Repair of prolapsed iris", "Repair iris prolapse");
			sel.options[sel.options.length] = new Option("Repositioning of IOL", "Move IOL");
			sel.options[sel.options.length] = new Option("Surgical iridotomy", "Surgical PI");
			sel.options[sel.options.length] = new Option("Suture of cornea", "Corneal suture");
			break;
		
		case "Cornea":
			sel.options[sel.options.length] = new Option("Amniotic membrane graft", "AmniotiGrft");
			sel.options[sel.options.length] = new Option("Anterior vitrectomy", "Ant Vity");
			sel.options[sel.options.length] = new Option("Astigmatic keratotomy", "Astig keratotom");
			sel.options[sel.options.length] = new Option("Bandage contact lens", "Bandage");
			sel.options[sel.options.length] = new Option("Biopsy lesion of conjunctiva", "BiopsylesionCon");
			sel.options[sel.options.length] = new Option("Biopsy of lesion of cornea", "Corneal biopsy");
			sel.options[sel.options.length] = new Option("Botulinum toxin ptosis", "BTXptosis");
			sel.options[sel.options.length] = new Option("Capsulotomy (surgical)", "CapsulotomyPost");
			sel.options[sel.options.length] = new Option("Capsulotomy (YAG)", "CapsulotomyPost");
			sel.options[sel.options.length] = new Option("Chelation of cornea", "EDTA chelation");
			sel.options[sel.options.length] = new Option("Compresssion suture of graft", "Compression sut");
			sel.options[sel.options.length] = new Option("Conjunctival flap", "Creatn ConjHood");
			sel.options[sel.options.length] = new Option("Conjunctival lesion excision", "ExcisConjLesion");
			sel.options[sel.options.length] = new Option("Corneal debridement", "Debride");
			sel.options[sel.options.length] = new Option("Corneal glue", "Glue");
			sel.options[sel.options.length] = new Option("Corneal inlay insertion", "Inlay insert");
			sel.options[sel.options.length] = new Option("Corneal inlay removal", "Inlay removal");
			sel.options[sel.options.length] = new Option("Corneal suture adjustment", "AdjustSuture");
			sel.options[sel.options.length] = new Option("Corneal suture removal", "removal of sutu");
			sel.options[sel.options.length] = new Option("Corneal vessel diathermy", "CornDiath");
			sel.options[sel.options.length] = new Option("Corneal wound suture", "Closure cornea");
			sel.options[sel.options.length] = new Option("Cross-linking of cornea", "Cross-linking");
			sel.options[sel.options.length] = new Option("DSAEK repositioning", "DSAEK reposition");
			sel.options[sel.options.length] = new Option("Epikeratoplasty", "Epikeratoplasty");
			sel.options[sel.options.length] = new Option("Examination under anaesthesia", "EUA");
			sel.options[sel.options.length] = new Option("Extracapsular cataract extraction", "ECCE");			
			sel.options[sel.options.length] = new Option("Foreign body removal", "Corneal FB");
			sel.options[sel.options.length] = new Option("Injection into eye", "inj eye");
			sel.options[sel.options.length] = new Option("Intrastromal corneal injection", "Intrastromal");
			sel.options[sel.options.length] = new Option("IOL exchange", "Exchange IOL");
			sel.options[sel.options.length] = new Option("IOL insertion - anterior chamber", "IOLantcham");
			sel.options[sel.options.length] = new Option("IOL insertion - posterior chamber", "IOLpostcham");
			sel.options[sel.options.length] = new Option("IOL insertion - sutured", "IOLsuture");
			sel.options[sel.options.length] = new Option("IOL reposition", "IOLrepos");
			sel.options[sel.options.length] = new Option("Iridoplasty (occluder)", "Pupiloplasty");
			sel.options[sel.options.length] = new Option("Iridoplasty (suture)", "Pupiloplasty");
			sel.options[sel.options.length] = new Option("Keratoplasty - anterior lamellar", "Ant lam keratop");
			sel.options[sel.options.length] = new Option("Keratoplasty - automated Moria", "Moria ALK");
			sel.options[sel.options.length] = new Option("Keratoplasty - penetrating", "Corneal graft");
			sel.options[sel.options.length] = new Option("Keratoplasty - posterior DMEK", "DSAEK");
			sel.options[sel.options.length] = new Option("Keratoplasty - posterior DSAEK", "DMEK");
			sel.options[sel.options.length] = new Option("Keratoplasty - rotation autograft", "RotationlCorGft");
			sel.options[sel.options.length] = new Option("Keratoplasty - tectonic", "Graft tectonic");
			sel.options[sel.options.length] = new Option("Keratoprosthesis", "Kpro");
			sel.options[sel.options.length] = new Option("LASEK/PRK", "LASEK/PRK");
			sel.options[sel.options.length] = new Option("LASIK", "LASIK");
			sel.options[sel.options.length] = new Option("LASIK flap reposition", "LASIK flap");
			sel.options[sel.options.length] = new Option("Limbal cell transplant", "Limbal");
			sel.options[sel.options.length] = new Option("Mucous membrane graft", "Mmgraft");
			sel.options[sel.options.length] = new Option("Occlusion of lacrimal punctum", "punctal occlusn");
			sel.options[sel.options.length] = new Option("Phakic IOL insertion", "Phakic IOL");
			sel.options[sel.options.length] = new Option("Pingueculum excision", "ExcBxPinguecula");
			sel.options[sel.options.length] = new Option("Pterygium excision & conj auto-grft", "ExPteryConjAuGf");
			sel.options[sel.options.length] = new Option("PTK - Laser superficial keratectomy", "PTK");
			sel.options[sel.options.length] = new Option("Reformation of AC", "Reformation AC");
			sel.options[sel.options.length] = new Option("Repair of penetrating injury", "Penetrating inj");
			sel.options[sel.options.length] = new Option("Scleral graft", "Graft to Sclera");
			sel.options[sel.options.length] = new Option("Subconjunctival injection", "Conj inject");
			sel.options[sel.options.length] = new Option("Superficial keratectomy", "Superficial K");
			sel.options[sel.options.length] = new Option("Tarsorrhaphy", "CntProteSutrLid");
			sel.options[sel.options.length] = new Option("Tattooing of cornea", "Tattooing corne");
			break;
			
		case "Glaucoma":
			sel.options[sel.options.length] = new Option("Anterior vitrectomy", "Ant Vity");
			sel.options[sel.options.length] = new Option("Application of 5FU", "5FU");
			sel.options[sel.options.length] = new Option("Application of beta radation", "Beta irradiation");
			sel.options[sel.options.length] = new Option("Application of MMC", "MMC");
			sel.options[sel.options.length] = new Option("Cyclodialysis cleft repair", "CyclodiaClftRep");
			sel.options[sel.options.length] = new Option("Examination under anaesthetic", "EUA");
			sel.options[sel.options.length] = new Option("Goniotomy", "Goniotomy");
			sel.options[sel.options.length] = new Option("Graft to sclera", "DonorSclera");
			sel.options[sel.options.length] = new Option("Insertion of aqueous shunt", "InsAqueousShunt");
			sel.options[sel.options.length] = new Option("Insertion of IOL", "IOL");
			sel.options[sel.options.length] = new Option("Iridoplasty", "Iridoplasty");
			sel.options[sel.options.length] = new Option("Laser capsulotomy of lens", "Lasrcapsulotomy");
			sel.options[sel.options.length] = new Option("Laser coagulation ciliary body", "Cyclodiode");
			sel.options[sel.options.length] = new Option("Laser iridotomy", "Laser PI");
			sel.options[sel.options.length] = new Option("Laser trabeculoplasty", "ALT");
			sel.options[sel.options.length] = new Option("Needling of bleb", "NeedlingBleb");
			sel.options[sel.options.length] = new Option("Phakoemulsification", "Phako");
			sel.options[sel.options.length] = new Option("Revision of anterior chamber", "Revision AC");
			sel.options[sel.options.length] = new Option("Revision of aqueous shunt", "RevAqueousShunt");
			sel.options[sel.options.length] = new Option("Revision of intraocular lens", "Revision IOL");
			sel.options[sel.options.length] = new Option("Revision of trabeculectomy", "Revision traby");
			sel.options[sel.options.length] = new Option("Secondary lens implant", "Secondary IOL");
			sel.options[sel.options.length] = new Option("Surgical peripheral iridectomy", "Surgical PI");
			sel.options[sel.options.length] = new Option("Trabeculectomy", "Traby");
			sel.options[sel.options.length] = new Option("Trabeculotomy", "Trabeculotomy");
			break;
			
		case "Medical Retina":
			sel.options[sel.options.length] = new Option("Cryotherapy to lesion of retina", "Cryo");
			sel.options[sel.options.length] = new Option("Extracapsular extraction of lens", "ECCE");
			sel.options[sel.options.length] = new Option("Insertion of IOL", "IOL");
			sel.options[sel.options.length] = new Option("Panretinal laser photocoagulation", "PRP");
			sel.options[sel.options.length] = new Option("Phakoemulsification", "Phako");
			break;
			
		case "Paediatric":
			sel.options[sel.options.length] = new Option("Aspiration of lens", "Aspiration Lens");
			sel.options[sel.options.length] = new Option("Examination under anaesthetic", "EUA");
			sel.options[sel.options.length] = new Option("Syringe and probe", "S&P");
			break;
			
		case "Strabismus":
			sel.options[sel.options.length] = new Option("Insertion of Intacs", "Intacs ");
			sel.options[sel.options.length] = new Option("Laser assisted in situ keratomileusis", "LASIK");
			sel.options[sel.options.length] = new Option("Removal of Intacs", "Removal of Intacs");
			sel.options[sel.options.length] = new Option("Adjustable suture", "Adjustable");
			sel.options[sel.options.length] = new Option("Botulinum injection eye muscle", "BTXA-muscle");
			sel.options[sel.options.length] = new Option("Faden", "Faden");
			sel.options[sel.options.length] = new Option("Inferior oblique anterior transposition", "IO transposition");
			sel.options[sel.options.length] = new Option("Inferior oblique disinsertion", "IO disinsertion");
			sel.options[sel.options.length] = new Option("Inferior rectus recession", "IR recess");
			sel.options[sel.options.length] = new Option("Inferior rectus resection", "IR resect");
			sel.options[sel.options.length] = new Option("Inverse Knapp procedure", "Inv Knapp");
			sel.options[sel.options.length] = new Option("Knapp procedure", "Knapp");
			sel.options[sel.options.length] = new Option("Lateral rectus recession", "LR recess");
			sel.options[sel.options.length] = new Option("Lateral rectus resection", "LR resect");
			sel.options[sel.options.length] = new Option("Medial rectus recession", "MR recess");
			sel.options[sel.options.length] = new Option("Medial rectus resection", "MR resect");
			sel.options[sel.options.length] = new Option("Superior oblique Harada-Ito", "Haradi-Ito");
			sel.options[sel.options.length] = new Option("Superior oblique medial transposition", "SO medial transposition");
			sel.options[sel.options.length] = new Option("Superior oblique tenotomy", "SO tenotomy");
			sel.options[sel.options.length] = new Option("Superior oblique tuck", "SO tuck");
			sel.options[sel.options.length] = new Option("Superior rectus recession", "SR recess");
			sel.options[sel.options.length] = new Option("Superior rectus resection", "SR resect");
			break;
							
		case "Vitreoretinal":
			sel.options[sel.options.length] = new Option("Cryotherapy  retinopexy", "Cryo");
			sel.options[sel.options.length] = new Option("Delamination", "Delam");
			sel.options[sel.options.length] = new Option("Epiretinal membrane peel", "Peel");
			sel.options[sel.options.length] = new Option("Examination under anaesthetic", "EUA");
			sel.options[sel.options.length] = new Option("External drainage of SRF", "Drain");
			sel.options[sel.options.length] = new Option("Fragmatome lensectomy", "Frag");
			sel.options[sel.options.length] = new Option("Injection of gas", "Gas");
			sel.options[sel.options.length] = new Option("Injection of silicone oil", "Oil");
			sel.options[sel.options.length] = new Option("Insertion of  IOL", "IOL");
			sel.options[sel.options.length] = new Option("Internal limiting membrane peel", "ILM");
			sel.options[sel.options.length] = new Option("Intravitreal injection", "Intravit");
			sel.options[sel.options.length] = new Option("Laser retinopexy", "Laser");
			sel.options[sel.options.length] = new Option("Panretinal photocoagulation", "PRP");
			sel.options[sel.options.length] = new Option("Peripheral iridectomy", "PI");
			sel.options[sel.options.length] = new Option("Phakoemulsification", "Phako");
			sel.options[sel.options.length] = new Option("Removal of buckle", "RO buckle");
			sel.options[sel.options.length] = new Option("Removal of gas", "Removal of gas");
			sel.options[sel.options.length] = new Option("Removal of intraocular foreign body", "IOFB");
			sel.options[sel.options.length] = new Option("Removal of IOL", "RO IOL");
			sel.options[sel.options.length] = new Option("Removal of oil", "ROO");
			sel.options[sel.options.length] = new Option("Repositioning of IOL          ", "Move IOL");
			sel.options[sel.options.length] = new Option("Retinal biopsy", "Ret biopsy");
			sel.options[sel.options.length] = new Option("Retinectomy", "Retinectomy");
			sel.options[sel.options.length] = new Option("Scleral buckle", "Buckle");
			sel.options[sel.options.length] = new Option("Subretinal membranectomy", "Removal of CNV");
			sel.options[sel.options.length] = new Option("Vitrectomy", "Vity");
			sel.options[sel.options.length] = new Option("Vitreous biopsy", "Vit biopsy");
			break;
			
		default:
			
			break;
	}
	
	// Set focus to select
	document.getElementById("common").focus();
}

// Called when specialty changes;
function specChanged(_value)
{
	switch (_value)
	{
		case "Adnexal":
			document.getElementById("subsection").style.display = 'inline';
			document.getElementById("subsection").selectedIndex = 0;			
			updateSelect("common","Adjunctive");
			break;
		default:
			document.getElementById("subsection").style.display = 'none';
			updateSelect("common","All");	
			break;
	}
	
	
}


// Calls php script to do incremental search
function incrementalSearch(searchText)
{
	// Name of results namelist
	var selectName = 'namelist';
    			
	// Define server connection
    http.open('get', 'ajaxSearchProcedures.php?txt=' + searchText + '&select=' + selectName);
    
    // Assign handler for the response
    http.onreadystatechange = processResponse;
	
    // Send the request to the server
    http.send(null);
}

// Set hidden value to code and submit form
function setProcedure(_value)
{
	// Get reference to select
	var sel = document.getElementById("common");
	
	// Set procedure
	var sep = document.getElementById('procedure_display').innerHTML == ""?"":"/";
	document.getElementById('procedure_display').innerHTML = document.getElementById('procedure_display').innerHTML + sep + _value;

	// Show clear button
	document.getElementById('clearButton').style.display = "block";
	
	// Reset select to first option
	sel.selectedIndex = 0;
}

// Function called from selection in namelist by double click or CR key press
function nameSelected(id, _value)
{
	// Set procedure
	var sep = document.getElementById('procedure_display').innerHTML == ""?"":"/";
	document.getElementById('procedure_display').innerHTML = document.getElementById('procedure_display').innerHTML + sep + _value;

	// Show clear button
	document.getElementById('clearButton').style.display = "block";
	
	// Clear nameselected
	document.getElementById('results').innerHTML = "";
	
	// Clear text box
	document.getElementById('is_entry').value = "";
	
	// Set focus to select
	document.getElementById("common").focus();
}

function newProcedure(type)
{
	// Reload page with user_id = 0
	//var url = "viewAdmins.php?edit=true&type=users&id=0";
	//window.location = url;
}

function clearProcedure()
{
	// Clear procedure box
	document.getElementById('procedure_display').innerHTML = "";

	// Hide clear button
	document.getElementById('clearButton').style.display = "none";
	
	// Clear incremental search box
	document.getElementById('is_entry').value = "";
	
	// Reset focus to select element
	document.getElementById("common").focus();	
}
