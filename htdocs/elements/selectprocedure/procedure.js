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
					sel.options[sel.options.length] = new Option("Allogenic implant", "Al implnt");
					sel.options[sel.options.length] = new Option("Dermis fat graft", "DFG");
					sel.options[sel.options.length] = new Option("Ear cartilage graft", "Aur cart");
					sel.options[sel.options.length] = new Option("Endoscopy", "Enscpy");
					sel.options[sel.options.length] = new Option("Fascia lata harvest", "FLG");
					sel.options[sel.options.length] = new Option("Hardpalate graft", "HPG");
					sel.options[sel.options.length] = new Option("Liquid nitrogen - Order 1 week prior", "N2");
					sel.options[sel.options.length] = new Option("Mucous membrane graft", "MMG");
					sel.options[sel.options.length] = new Option("Sentinel node biopsy", "SNB");
					sel.options[sel.options.length] = new Option("Skin graft - split skin", "Splt skn");
					break;
					
				case "Lacrimal":
					sel.options[sel.options.length] = new Option("Dacrocystogram", "DCG ");
					sel.options[sel.options.length] = new Option("Dacryocystorhinostomy (routine)", "DCR routine");
					sel.options[sel.options.length] = new Option("Dacryocystorhinostomy (complex)", "DCR complex");
					sel.options[sel.options.length] = new Option("Examination under anaesthetic", "EUA");
					sel.options[sel.options.length] = new Option("Lester Jones tube", "LJ tube");
					sel.options[sel.options.length] = new Option("Lacrimal other - complex", "Lacrimal other - complex");
					sel.options[sel.options.length] = new Option("Lacrimal gland - biopsy", "Lacrimal gland - biopsy");
					sel.options[sel.options.length] = new Option("Lacrimal gland - other", "Lacrimal gland - other");
					sel.options[sel.options.length] = new Option("Lacrimal sac - biopsy", "Lacrimal sac - biopsy");
					sel.options[sel.options.length] = new Option("Lacrimal sac - excision", "Lacrimal sac - excision");
					sel.options[sel.options.length] = new Option("Punctal occlusion", "OcclLacrPunctm");
					sel.options[sel.options.length] = new Option("Punctoplasty", "DilatnLacPunctm");
					sel.options[sel.options.length] = new Option("Removal tube from nasolac duct", "RemovTubeFrNLC");
					sel.options[sel.options.length] = new Option("Repair of lacrimal canaliculus", "RepairLacCanali");
					sel.options[sel.options.length] = new Option("Sizzler trephine and tube", "Sizzler trephine and tube");
					sel.options[sel.options.length] = new Option("Syringe and probe NLD", "Syringe");
					break;
				
				case "Lid":
					sel.options[sel.options.length] = new Option("Biopsy of lid", "Lid biopsy");
					sel.options[sel.options.length] = new Option("Reconstruction of lid local flaps", "Lid recn flps");
					sel.options[sel.options.length] = new Option("Reconstruction of lid specify graft(s)", "Lid recon & graft");
					sel.options[sel.options.length] = new Option("Blepharoplasty of upper lid", "Bleph UL");
					sel.options[sel.options.length] = new Option("Blepharoplasty of lower lid", "Bleph LL");
					sel.options[sel.options.length] = new Option("Brow suspension with fascia lata", "Brow susp");
					sel.options[sel.options.length] = new Option("Brow suspension - synthetic", "Brow susp synth");
					sel.options[sel.options.length] = new Option("Cryotherapy with Collin cryoprobe", "Cryo Collin");
					sel.options[sel.options.length] = new Option("Cryotherapy with liquid nitrogen", "Cryo Nitro");
					sel.options[sel.options.length] = new Option("Entropion correction", "Ent");
					sel.options[sel.options.length] = new Option("Ectropion correction", "Ectr");
					sel.options[sel.options.length] = new Option("Ptosis correction", "Ptosis");
					sel.options[sel.options.length] = new Option("Tarsorrhaphy", "Tarsorrhaphy");
					sel.options[sel.options.length] = new Option("Lid lowering anterior approach", "Ld low ant");
					sel.options[sel.options.length] = new Option("Lid lowering posterior approach", "Ld low post");
					sel.options[sel.options.length] = new Option("Skin crease reformation", "SC refrmtn");
					sel.options[sel.options.length] = new Option("Tarsorrhaphy -medial pillar", "Tars med");
					sel.options[sel.options.length] = new Option("Tarsorrhaphy - lateral", "Tars lat");
					sel.options[sel.options.length] = new Option("Medial canthoplasty", "Med cnthplsty");
					sel.options[sel.options.length] = new Option("Lateral canthoplasty", "Lat cnthplsty");
					sel.options[sel.options.length] = new Option("Lateral canthopexy", "Lat cnthpxy");
					sel.options[sel.options.length] = new Option("Brow lift - direct", "Brw lft dir");
					sel.options[sel.options.length] = new Option("Brow lift - indirect", "Brw lft indir");
					sel.options[sel.options.length] = new Option("Cheek lift", "Chk lft");
					sel.options[sel.options.length] = new Option("Lower lid elevation - specify material", "LL elvtn");
					sel.options[sel.options.length] = new Option("Correction of telecanthus with wire", "Telecnth wire");
					sel.options[sel.options.length] = new Option("Conjunctival lesion - biopsy / excision", "Conjunctival lesion - biopsy / excision");
					sel.options[sel.options.length] = new Option("Electrolysis", "Electrolysis");
					sel.options[sel.options.length] = new Option("I & C cyst", "I & C cyst");
					sel.options[sel.options.length] = new Option("Punctoplasty", "Punctoplasty");
					sel.options[sel.options.length] = new Option("Blepharospasm - avulsion of nerve of eyelid", "LidNvAvulsion");
					sel.options[sel.options.length] = new Option("Blepharospasm - botulinum injection", "InjBotulinumMus");
					sel.options[sel.options.length] = new Option("Blepharospasm - orbicularis muscle stripping", "OrbicularisMsSt");
					sel.options[sel.options.length] = new Option("Canthoplasty lateral", "Canthoplasty lateral");
					sel.options[sel.options.length] = new Option("Canthoplasty medial", "Canthoplasty medial");
					sel.options[sel.options.length] = new Option("Caruncle - biopsy / excision", "ExcLesionCanthu");
					sel.options[sel.options.length] = new Option("Conjunctival lesion - excision / biopsy", "BiopsyConjLesio");
					sel.options[sel.options.length] = new Option("Cryotherapy lesion of eyelid", "CryoLesionEyeli");
					sel.options[sel.options.length] = new Option("Distichiasis - cryotherapy", "ReconLidTarsoco");
					sel.options[sel.options.length] = new Option("Distichiasis - electrolysis", "ReconLdChondrom");
					sel.options[sel.options.length] = new Option("ECtropion correction - cicatricial / complex", "ECtropion correction - cicatricial / complex");
					sel.options[sel.options.length] = new Option("ECtropion correction lower lid (routine)", "ECtropion correction lower lid (routine)");
					sel.options[sel.options.length] = new Option("ENtropion correction lower lid (complex)", "Electrolysis");
					sel.options[sel.options.length] = new Option("ENtropion correction lower lid (routine)", "ENtropion correction lower lid (routine)");
					sel.options[sel.options.length] = new Option("ENtropion correction upper lid (complex)", "Epilatn Eyelash");
					sel.options[sel.options.length] = new Option("ENtropion correction upper lid (routine)", "ENtropion correction upper lid (routine)");
					sel.options[sel.options.length] = new Option("EUA ? Proceed to lid surgery", "EUA ? Proceed to lid surgery");
					sel.options[sel.options.length] = new Option("Exploration of eyelid", "ExploratnLid");
					sel.options[sel.options.length] = new Option("Eyebrow - biopsy", "ExcLesioEyebrow");
					sel.options[sel.options.length] = new Option("Eyelid - debulk", "ResectLevPalpeb");
					sel.options[sel.options.length] = new Option("Eyelid - OTHER operation", "OtherEyelid Opn");
					sel.options[sel.options.length] = new Option("Foreign body removal from eyelid", "Foreign body removal from eyelid");
					sel.options[sel.options.length] = new Option("Fornix reconstruction - +/- mucous membrane graft", "RepCantLocaSkFl");
					sel.options[sel.options.length] = new Option("Incision and curettage cyst", "Incision and curettage cyst");
					sel.options[sel.options.length] = new Option("Injection into eyelid", "InjIntoLid");
					sel.options[sel.options.length] = new Option("Lid lowering - graded Koorneef", "Lid lowering - graded Koorneef");
					sel.options[sel.options.length] = new Option("Lid lowering - Insertion gold weight", "InsGoldwtUpLid");
					sel.options[sel.options.length] = new Option("Lid tightening: Lateral canthal sling", "LCS");
					sel.options[sel.options.length] = new Option("Lid tightening: pentagon wedge / suture / other", "Lid tightening: pentagon wedge / suture / other");
					sel.options[sel.options.length] = new Option("Ptosis correction - anterior levator resection ", "Ptosis repair");
					sel.options[sel.options.length] = new Option("Ptosis correction - aponeurosis repair (complex)", "Medial Lee");
					sel.options[sel.options.length] = new Option("Ptosis correction - aponeurosis repair (standard)", "Ptosis correction - aponeurosis repair (standard)");
					sel.options[sel.options.length] = new Option("Ptosis correction - posterior levator resection", "Ptosis correction - posterior levator resection");
					sel.options[sel.options.length] = new Option("Reconstrn eyelid: complex (+/- skin, mucous membrane, else)", "");
					sel.options[sel.options.length] = new Option("Reconstrn eyelid: local flap  / direct closure", "TC Diamond");
					sel.options[sel.options.length] = new Option("Scar revision", "Scar Revision");
					sel.options[sel.options.length] = new Option("Tarsorrhaphy: lateral", "ExicOfGranuloma");
					sel.options[sel.options.length] = new Option("Tarsorrhaphy: medial Lee", "ReconLid+Flap");
					sel.options[sel.options.length] = new Option("Tarsorrhaphy: medial pillar", "Tarsorrhaphy: medial pillar");
					sel.options[sel.options.length] = new Option("Tarsorrhaphy: temporary", "Tarsorrhaphy: temporary");
					sel.options[sel.options.length] = new Option("Telecanthus correction", "CorrctTelecanth");
					sel.options[sel.options.length] = new Option("Trauma - complex - repair ", "Trauma - complex - repair ");
					sel.options[sel.options.length] = new Option("Trauma - lid only - repair ", "SutureEyelid");
					sel.options[sel.options.length] = new Option("Trichiasis - electrolysis", "CorrectTrichias");
					sel.options[sel.options.length] = new Option("Trichiasis - follicle excision", "ReconLdDistFlp");
					sel.options[sel.options.length] = new Option("OTHER lid surgery", "Lattarsorrhaphy");
					break;
		
				case "Minor":
					break;
		
				case "Orbit":
					sel.options[sel.options.length] = new Option("Decompression of orbit - unilateral", "Decompression of orbit - unilateral");
					sel.options[sel.options.length] = new Option("Fracture repair", "Fracture repair");
					sel.options[sel.options.length] = new Option("Orbitotomy - anterior - complex", "Orbitotomy - anterior - complex");
					sel.options[sel.options.length] = new Option("Orbitotomy - anterior - simple", "Orbitotomy - anterior - simple");
					sel.options[sel.options.length] = new Option("Orbitotomy - canthal - complex", "Orbitotomy - canthal - complex");
					sel.options[sel.options.length] = new Option("Orbitotomy - canthal - simple", "Orbitotomy - canthal - simple");
					sel.options[sel.options.length] = new Option("Orbitotomy - lateral - complex", "Orbitotomy - lateral - complex");
					sel.options[sel.options.length] = new Option("Orbitotomy - lateral - simple", "Orbitotomy - lateral - simple");
					sel.options[sel.options.length] = new Option("OTHER orbit - complex", "OTHER orbit - complex");
					sel.options[sel.options.length] = new Option("OTHER orbit - simple", "OTHER orbit - simple");
					sel.options[sel.options.length] = new Option("Decompression of orbit - standard", "Decompression of orbit - standard");
					sel.options[sel.options.length] = new Option("Decompression of orbit - transcaruncular", "Decompression of orbit - transcaruncular");
					sel.options[sel.options.length] = new Option("Enucleation - NO implant", "Enucleation - NO implant");
					sel.options[sel.options.length] = new Option("Enucleation - primary implant", "Enucleation - primary implant");
					sel.options[sel.options.length] = new Option("EUA ? Proceed orbital surgery", "EUA ? Proceed orbital surgery");
					sel.options[sel.options.length] = new Option("Evisceration  - NO implant", "Evisceration  - NO implant");
					sel.options[sel.options.length] = new Option("Evisceration - primary implant", "Evisceration - primary implant");
					sel.options[sel.options.length] = new Option("Exenteration orbital contents", "Exenteration orbital contents");
					sel.options[sel.options.length] = new Option("Orbital fat prolapse - trans conjunctival reduction", "Orbital fat prolapse - trans conjunctival reduction");
					sel.options[sel.options.length] = new Option("Orbital volume - dermis fat graft", "Orbital volume - dermis fat graft");
					sel.options[sel.options.length] = new Option("Orbital volume - implant exchange / removal", "Orbital volume - implant exchange / removal");
					sel.options[sel.options.length] = new Option("Orbital volume - orbital floor implant", "Orbital volume - orbital floor implant");
					sel.options[sel.options.length] = new Option("Orbital volume - secondary ball implant", "Orbital volume - secondary ball implant");
					sel.options[sel.options.length] = new Option("Orbitotomy - anterior - lateral canthotomy", "Orbitotomy - anterior - lateral canthotomy");
					sel.options[sel.options.length] = new Option("Orbitotomy - anterior - swinging lower lid", "Orbitotomy - anterior - swinging lower lid");
					sel.options[sel.options.length] = new Option("Orbitotomy - anterior - transcaruncular", "Orbitotomy - anterior - transcaruncular");
					sel.options[sel.options.length] = new Option("Orbitotomy - anterior - translid", "Orbitotomy - anterior - translid");
					sel.options[sel.options.length] = new Option("Orbitotomy - complex", "Orbitotomy - complex");
					sel.options[sel.options.length] = new Option("Orbitotomy - lateral", "Orbitotomy - lateral");
					sel.options[sel.options.length] = new Option("Socket - reconstrn - complex", "Socket - reconstrn - complex");
					sel.options[sel.options.length] = new Option("Socket - reconstrn - mucosal graft", "Socket - reconstrn - mucosal graft");
					sel.options[sel.options.length] = new Option("Trauma - removal of orbital foreign body", "Trauma - removal of orbital foreign body");
					sel.options[sel.options.length] = new Option("Trauma - repair fracture", "Trauma - repair fracture");
					sel.options[sel.options.length] = new Option("OTHER orbital surgery", "OTHER orbital surgery");
					break;
					
				case "Socket":
					sel.options[sel.options.length] = new Option("Enucleation - specify IF implant", "Enuc & impnlt");
					sel.options[sel.options.length] = new Option("Evisceration - specify IF implant", "Evisc");
					sel.options[sel.options.length] = new Option("Exenteration", "Exent");
					sel.options[sel.options.length] = new Option("Orbital floor implant - primary", "OFI");
					sel.options[sel.options.length] = new Option("Fornix reconstruction", "Frnx recon");
					sel.options[sel.options.length] = new Option("Primary orbital implant - ball", "Prmry orb ball implnt");
					sel.options[sel.options.length] = new Option("Secondary orbital implant - ball", "2y orb ball implnt");
					sel.options[sel.options.length] = new Option("Secondary orbital implant - floor", "2y OFI");
					sel.options[sel.options.length] = new Option("Orbital implant exchange", "Orb implnt exch");
					sel.options[sel.options.length] = new Option("Moulding", "Mld");
					sel.options[sel.options.length] = new Option("Enucleation no implant", "Enuc no implnt");
					sel.options[sel.options.length] = new Option("Sulcus volume enhancement", "Sulc vol");
					sel.options[sel.options.length] = new Option("Dermis fat graft", "DFG");
					sel.options[sel.options.length] = new Option("Socket reconstruction local flap", "Sckt recn loc flap");
					sel.options[sel.options.length] = new Option("Socket reconstruction - specify graft", "Sckt recn grft");
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
			sel.options[sel.options.length] = new Option("Gr	aft to sclera", "DonorSclera");
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
