
sap.ui.controller("pvs3.Promolist", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf pvs3.Promolist
	 */

	onInit: function() {

		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);
		oModel.oHeaders = {
				"DataServiceVersion": "3.0",
				"MaxDataServiceVersion": "3.0"
		};
		// debugger;
		/*if (!jQuery.support.touch) { // apply compact mode if touch is not supported
    	  this.getView().addStyleClass("sapUiSizeCompact");
      }*/
		/* else
    		  {
    		  this.getView().addStyleClass("sapUiSizeCozy");
    		  }*/



	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf pvs3.Promolist
	 */
	onBeforeRendering: function() {

		// debugger;
		var userid = sap.ui.getCore().byId("uid").getValue();
		console.log(userid);	
		var urole = sap.ui.getCore().byId("urole").getValue();
		console.log(urole);		
		var uintern = sap.ui.getCore().byId("uintern").getValue();
		console.log(uintern);	
		var firstname = sap.ui.getCore().byId("firstname").getValue();
		console.log(firstname);
		var shellfirstname = sap.ui.getCore().byId("fname");
		shellfirstname.setText(firstname);	
		debugger;
		var ModelFromBack =	sap.ui.getCore().getModel("ModelFromBack");
		if (ModelFromBack != null){	
			var oShell = sap.ui.getCore().byId("myShell");
			var oSelectedWorkSetItem = ModelFromBack.getData().SelectedWorkSetItem;
			if (oSelectedWorkSetItem != null){
				oShell.setSelectedWorksetItem(oSelectedWorkSetItem);
				var obj = {};
				obj.Internid = uintern;
				obj.SalesRep = userid;
				this.FillInternShellContent(oSelectedWorkSetItem, oShell, obj);		
			}
		}else if( ( userid == "" && urole == "" )){
			var but = sap.ui.getCore().byId("home").setVisible(true);
			var but1 = sap.ui.getCore().byId("searchpromo").setVisible(true);
			var but2 = sap.ui.getCore().byId("searchacc").setVisible(true);
			var but4 = sap.ui.getCore().byId("chng_pass").setVisible(true);
			var but5 = sap.ui.getCore().byId("checkpromo").setVisible(true);
			var f1 = new  sap.ui.model.odata.Filter('Internid', [{operator:"EQ",value1:uintern}]);
			// var f2 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"INTERN"}]);
			var oHtable = sap.ui.getCore().byId("iHome");
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);
			oHtable.setFirstVisibleRow(0);
			oHtable.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oHtable.bindRows({path:"/PVSInternsSet" ,  filters: [f1]} );
			var internform = sap.ui.getCore().byId("H1");
			console.log(internform);
			var oShell = sap.ui.getCore().byId("myShell");
			var internform = sap.ui.getCore().byId("H1");

			oShell.setContent(internform);

		}
		else
			if ( urole == "SALESREP")
			{
				var but = sap.ui.getCore().byId("home").setVisible(true);
				var but1 = sap.ui.getCore().byId("searchpromo").setVisible(true);
				var but2 = sap.ui.getCore().byId("searchacc").setVisible(true);
				var but4 = sap.ui.getCore().byId("chng_pass").setVisible(false);
				var but5 = sap.ui.getCore().byId("checkpromo").setVisible(true);
				var f1 = new  sap.ui.model.odata.Filter('SalesRep', [{operator:"EQ",value1:userid}]);
				// var f2 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]);
				var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
				var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
						false);
				var oHtable1 = sap.ui.getCore().byId("iHome1")
				oHtable1.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oHtable1.bindRows({path:"/PVSSalesRepSet", filters: [f1]}  );
				var oShell = sap.ui.getCore().byId("myShell");
				var salesrepform = sap.ui.getCore().byId("H2");
				console.log(salesrepform);
				oShell.setContent(salesrepform);
			}
		/*		debugger;
		var ModelFromBack =	sap.ui.getCore().getModel("ModelFromBack");
		if (ModelFromBack != null){			
		var oSelectedWorkSetItem = ModelFromBack.getData().SelectedWorkSetItem;
		if (oSelectedWorkSetItem != null){
		oShell.setSelectedWorksetItem(oSelectedWorkSetItem);
		var obj = {};
		obj.Internid = uintern;
		obj.SalesRep = userid;
		this.FillInternShellContent(oSelectedWorkSetItem, oShell, obj);		
			}
		}*/


	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf pvs3.Promolist
	 */
	onAfterRendering: function() {
		//$("span:contains('Promo Verification System')").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Promo Verification System");
		var h1Elements = document.getElementsByTagName("h1");
		var length = +h1Elements.length - 1;		
		while(length >= 0){
			h1Elements[length].style.color = "white";
			if(jQuery.device.is.desktop){
				h1Elements[length].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Promo Verification System";
			}
			length = length - 1;
		}
		var spanParent = $('span[title="Promo Verification System"]');
		var spanChildren = spanParent.children();
		if(jQuery.device.is.desktop){
		spanChildren[1].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Promo Verification System";
		}
		spanChildren[1].style.color = "white";
		$('#myShell-logoImg').css({'height' : '42px', 'max-height' : '42px'});
		/*		$('#myShell-canvas').css({'left' : '0px'});
		document.getElementById("myShell-canvas").style.left = "0px";*/

	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf pvs3.Promolist
	 */
//	onExit: function() {

//	}


//	If Intern or Salesrep is logged in  Check promos page dropdown
	CheckPromosSearch: function(oEvent)
	{
		//jQuery.sap.require("sap.ui.core.format.DateFormat");
		debugger;
		var userid = sap.ui.getCore().byId("uid").getValue();
		console.log(userid);	
		var urole = sap.ui.getCore().byId("urole").getValue();
		console.log(urole);		
		var uintern = sap.ui.getCore().byId("uintern").getValue();
		console.log(uintern);
		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);

		var searchvalue = sap.ui.getCore().byId("CheckPromosSearch").getSelectedItem().getText();
		var oTab = sap.ui.getCore().byId("CheckPromos");
		oTab.setFirstVisibleRow(0);
//		oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
//		If Intern filters data on  Check promos page
		if( ( userid == "" && urole == "" ))
		{  

			oTab.setModel(oModel);
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"INTERN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
			var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"INTERN"}]); 
			var f4 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:uintern}]);
			if (searchvalue == " ")
			{
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ,f4] } );
			}
			else if (searchvalue == "Overdue")
			{
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"OVERDUE"}]);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ,f4 , f5] } );
			}
			else if (searchvalue == "Due Today")
			{
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"DUETODAY"}]);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ,f4 , f5] } );
			}
		}
//		If Salesrep filters data on Check Promos page
		else if ( urole == "SALESREP" )	
		{ 
			/*			var searchvalue = sap.ui.getCore().byId("SalesrepCheckPromosSearch").getSelectedItem().getText();
			var oTab = sap.ui.getCore().byId("SalesRep");*/
			oTab.setModel(oModel);
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
			var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
			var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
			if (searchvalue == " ")
			{
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ,f4] } );
			}
			else if (searchvalue == "Overdue")
			{
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"OVERDUE"}]);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ,f4 , f5] } );
			}
			else if (searchvalue == "Due Today")
			{
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"DUETODAY"}]);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ,f4 , f5] } );
			}

		}
		else if ( urole == "ADMIN" )	
		{
			var searchvalue = sap.ui.getCore().byId("CheckPromosSearch").getSelectedItem().getText();
			var oTab = sap.ui.getCore().byId("CheckPromos");
			oTab.setFirstVisibleRow(0);
			oTab.setModel(oModel);
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
			var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"ADMIN"}]); 
			//	var f4 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:uintern}]);
			if (searchvalue == " ")
			{
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ] } );
			}
			else if (searchvalue == "Overdue")
			{
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"OVERDUE"}]);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 , f5] } );
			}
			else if (searchvalue == "Due Today")
			{
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"DUETODAY"}]);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 , f5] } );
			}
		}
	},

//	Intern or Salesrep clicks on apply in search promos page
	onInternApplyPress: function(oEvent){

//		Data filtering for Search promos for both Intern and Salesrep
		debugger;
		var uintern = sap.ui.getCore().byId("uintern").getValue();
		var userid = sap.ui.getCore().byId("uid").getValue();
		var urole = sap.ui.getCore().byId("urole").getValue();

		var filterOperator, fieldNameVal;
		if ( userid == ""  && urole == "" )
		{  	var fieldName = sap.ui.getCore().byId("Intern-Fieldsearch").getSelectedItem().getText();
		var searchKey = sap.ui.getCore().byId("Intern-Fieldsearchkey").getSelectedItem().getText();
		var fieldContent = sap.ui.getCore().byId("Internsearchinput").getValue();
		var dateContent = sap.ui.getCore().byId("InternDP").getValue();
		

		}
		else if ( urole == "SALESREP")
		{
			var fieldName = sap.ui.getCore().byId("Salesrep-Fieldsearch").getSelectedItem().getText();
			var searchKey = sap.ui.getCore().byId("Salesrep-Fieldsearchkey").getSelectedItem().getText();
			var fieldContent = sap.ui.getCore().byId("Salesrepsearchinput").getValue();
			var dateContent = sap.ui.getCore().byId("SalesrepDP").getValue();
		}
		dateContent = dateContent+"T00:00:00";

		if (searchKey == "Contains"){

			filterOperator = "Contains";

		} else if (searchKey == "equals"){

			filterOperator = "EQ";

		} else if (searchKey == "does not equals"){

			filterOperator = "NE";

		} else if (searchKey == "is less than"){

			filterOperator = "LT";

		} else if (searchKey == "is less than or equals to"){

			filterOperator = "LE";

		} else if (searchKey == "is greater than"){

			filterOperator = "GT";

		} else if (searchKey == "is greater than or equals to"){

			filterOperator = "GE";

		} else if (searchKey == "like"){

			filterOperator = "Contains";

		} else if (searchKey == "starts with"){

			filterOperator = "StartsWith";

		} else if (searchKey == "ends with"){

			filterOperator = "EndsWith";
		}


		if (fieldName == "Customer ID"){
			var filter = new sap.ui.model.odata.Filter('Customer', [{operator:filterOperator ,value1:fieldContent}]); 

		} else if (fieldName == "Customer Name"){

			var filter = new sap.ui.model.odata.Filter('Customername', [{operator:filterOperator,value1:fieldContent}]); 

		}  else if (fieldName == "Promo From"){

			var filter = new sap.ui.model.odata.Filter('Promofrom', [{operator:filterOperator,value1:dateContent}]);   

		} else if (fieldName == "Promo To"){

			var filter = new sap.ui.model.odata.Filter('Promoto', [{operator:filterOperator,value1:dateContent}]); 

		} else if (fieldName == "Product"){

			var filter = new sap.ui.model.odata.Filter('Product', [{operator:filterOperator,value1:fieldContent}]); 

		}  else if (fieldName == "MIR"){

			var filter = new sap.ui.model.odata.Filter('Miramount', [{operator:filterOperator,value1:fieldContent}]); 

		} else if (fieldName == "IR"){

			var filter = new sap.ui.model.odata.Filter('Iramount', [{operator:filterOperator,value1:fieldContent}]); 

		}else if (fieldName == "Promo ID"){

			var filter = new sap.ui.model.odata.Filter('Promoid', [{operator:filterOperator,value1:fieldContent}]);   

		}
		   /*CODE COMMENTED 17.06*/
		/*else if (fieldName == "Item ID"){

			var filter = new sap.ui.model.odata.Filter('Itemid', [{operator:filterOperator ,value1:fieldContent}]);   
		}*/

		if ( urole == "SALESREP" )
		{
			var filter1 = new sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]); 
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSSEARCH"}]); 
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);
		
			var oTab = sap.ui.getCore().byId("SalesRep");	
			sap.ui.getCore().byId("SalesrepExport").setVisible(true);			/*28-04 */
			var OFSRTAB = sap.ui.getCore().byId("OFSRTAB");						/*28-04 */
			OFSRTAB.addField(oTab);												/*28-04 */
		}
		else
		{
			var filter1 = new sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:uintern}]); 
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"INTERN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSSEARCH"}]); 
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);
			var oTab = sap.ui.getCore().byId("CheckPromos");
			sap.ui.getCore().byId("InternExport").setVisible(true);				/*28-04 */
			var OFITAB = sap.ui.getCore().byId("OFITAB");						/*28-04 */
			OFITAB.addField(oTab);												/*28-04 */
			
		}
		if ( fieldName  == "Promo From" || fieldName == "Promo" )
		{
			if ( filterOperator == "EQ" || filterOperator == "NE" || filterOperator == "LE" || filterOperator == "LT" || filterOperator == "GT"
				|| filterOperator == "GE" )
			{
				oTab.setFirstVisibleRow(0);
				
				oTab.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [ filter , filter1, f1 , f2 ] } );
			}
			else
			{
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
						"Please select valid filter option for Date", {
							icon: sap.m.MessageBox.Icon.WARNING,
							title: "Date:",
							actions: [sap.m.MessageBox.Action.OK],
							onClose: function(oAction) { / * do something * / }
						}
				);
				sap.ui.getCore().byId("Internsearchinput").setVisible(true);
				sap.ui.getCore().byId("Intern-Fieldsearch").setSelectedItem("sp1");
				sap.ui.getCore().byId("Intern-Fieldsearchkey").setSelectedItem("skp1");
				sap.ui.getCore().byId("Internsearchinput").setValue();	
				sap.ui.getCore().byId("InternDP").setValue();	
				sap.ui.getCore().byId("InternDP").setVisible(false);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [ filter1, f1 , f2 ] } );
			}

		} 
		else
		{
			oTab.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oTab.bindRows({path:"/PromoListSet" ,  filters: [ filter , filter1, f1 , f2 ] } );
		}


	},
//	If interns click on Reset button in search promos page
	onInternResetPress: function()
	{
		sap.ui.getCore().byId("Intern-Fieldsearch").setSelectedItem("sp1");
		sap.ui.getCore().byId("Intern-Fieldsearchkey").setSelectedItem("skp1");
		sap.ui.getCore().byId("Internsearchinput").setValue();	
		sap.ui.getCore().byId("InternDP").setValue();	
		sap.ui.getCore().byId("InternDP").setVisible(false);	
		sap.ui.getCore().byId("Internsearchinput").setVisible(true);	
		var uintern = sap.ui.getCore().byId("uintern").getValue();
		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);
		var oTab = sap.ui.getCore().byId("CheckPromos");
		oTab.setFirstVisibleRow(0);
		var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"INTERN"}]);
		var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSDATA"}]); 
		var f3 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:uintern}]);
		oTab.setModel(oModel);
		//    oTab.setTitle("Intern:Search Promotions");
//		oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
		oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ] } );

	},
	//If sales rep click on Reset button in search promos page
	onSalesrepResetPress: function()
	{
		sap.ui.getCore().byId("Salesrep-Fieldsearch").setSelectedItem("srp1");
		sap.ui.getCore().byId("Salesrep-Fieldsearchkey").setSelectedItem("srkp1");
		sap.ui.getCore().byId("Salesrepsearchinput").setValue();	
		sap.ui.getCore().byId("SalesrepDP").setValue();	
		sap.ui.getCore().byId("SalesrepDP").setVisible(false);	
		sap.ui.getCore().byId("Salesrepsearchinput").setVisible(true);	
		var userid = sap.ui.getCore().byId("uid").getValue();
		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);
		var oTab = sap.ui.getCore().byId("SalesRep");
		oTab.setFirstVisibleRow(0);
		var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
		var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSDATA"}]); 
		var f3 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
		oTab.setModel(oModel);
//		oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
//		oTab.setTitle("Sales Representative:Search Promotions");
		oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ] } );

	},
//	When Internid cliks on Export table button
	onExportCheckPromosPress : sap.m.Table.prototype.exportData || function(oEvent) {
		debugger;
		var shell = sap.ui.getCore().byId("myShell").getSelectedWorksetItem();
		var shell1 = sap.ui.getCore().byId("AdminShell").getSelectedWorksetItem();
		var filters = new Array(); 
		var uintern = sap.ui.getCore().byId("uintern").getValue();
		var userid = sap.ui.getCore().byId("uid").getValue();
		var urole = sap.ui.getCore().byId("urole").getValue();
		var oType = new sap.ui.model.type.DateTime({source: {pattern: "MMM dd,YYYY"}});
		var oDateFormat = sap.ui.core.format.DateFormat.getInstance({pattern: "MM.dd.yyyy"});		
		if ( shell == "checkpromo" || shell1 == "mcheckpromo" )
		{
			var searchvalue = sap.ui.getCore().byId("CheckPromosSearch").getSelectedItem().getText();
			var oTab = sap.ui.getCore().byId("CheckPromos");
			oTab.setFirstVisibleRow(0);
			//	oTab.setModel(oModel);
			if ( urole == "ADMIN" )
			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"ADMIN"}]); 
			}
			else if (urole == "SALESREP" )
			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
				var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
				filters.push(f4);

			}
			else
			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"INTERN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"INTERN"}]); 
				var f4 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:uintern}]);
				filters.push(f4);
			}
			filters.push(f1);
			filters.push(f2);
			filters.push(f3);


			if (searchvalue == "Overdue")
			{		
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"OVERDUE"}]);
				filters.push(f5);

			}
			else if (searchvalue == "Due Today")
			{
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"DUETODAY"}]);
				filters.push(f5);
			}

		}
		else if ( shell == "searchpromo")
		{
			var fieldName = sap.ui.getCore().byId("Intern-Fieldsearch").getSelectedItem().getText();
			var searchKey = sap.ui.getCore().byId("Intern-Fieldsearchkey").getSelectedItem().getText();
			var fieldContent = sap.ui.getCore().byId("Internsearchinput").getValue();
			if (searchKey == "Contains"){

				filterOperator = "Contains";

			} else if (searchKey == "equals"){

				filterOperator = "EQ";

			} else if (searchKey == "does not equals"){

				filterOperator = "NE";

			} else if (searchKey == "is less than"){

				filterOperator = "LT";

			} else if (searchKey == "is less than or equals to"){

				filterOperator = "LE";

			} else if (searchKey == "is greater than"){

				filterOperator = "GT";

			} else if (searchKey == "is greater than or equals to"){

				filterOperator = "GE";

			} else if (searchKey == "like"){

				filterOperator = "Contains";

			} else if (searchKey == "starts with"){

				filterOperator = "StartsWith";

			} else if (searchKey == "ends with"){

				filterOperator = "EndsWith";
			}

			var dateContent = sap.ui.getCore().byId("InternDP").getValue();
			dateContent = dateContent+"T00:00:00";
			if (fieldName == "Customer ID"){

				//	fieldNameVal = "Customer";
				var filter = new sap.ui.model.odata.Filter('Customer', [{operator:"EQ" ,value1:fieldContent}]); 

			} else if (fieldName == "Customer Name"){

				//	fieldNameVal = "Customername";
				var filter = new sap.ui.model.odata.Filter('Customername', [{operator:filterOperator,value1:fieldContent}]); 

			}  else if (fieldName == "Promo From"){

				fieldNameVal = "Promofrom";
				var filter = new sap.ui.model.odata.Filter('Promofrom', [{operator:filterOperator,value1:dateContent}]);   

			} else if (fieldName == "Promo To"){

				fieldNameVal = "Promoto";
				var filter = new sap.ui.model.odata.Filter('Promoto', [{operator:filterOperator,value1:dateContent}]); 

			} else if (fieldName == "Product"){

				fieldNameVal = "Product";
				var filter = new sap.ui.model.odata.Filter('Product', [{operator:filterOperator,value1:fieldContent}]); 

			}  else if (fieldName == "MIR"){

				fieldNameVal = "Miramount";
				var filter = new sap.ui.model.odata.Filter('Miramount', [{operator:filterOperator,value1:fieldContent}]); 

			} else if (fieldName == "IR"){

				fieldNameVal = "Iramount";
				var filter = new sap.ui.model.odata.Filter('Iramount', [{operator:filterOperator,value1:fieldContent}]); 

			}else if (fieldName == "Promo ID"){

				fieldNameVal = "Promoid";
				var filter = new sap.ui.model.odata.Filter('Promoid', [{operator:filterOperator,value1:fieldContent}]);   

			} 
			/*CODE COMMENTED 17.06*/
			/*else if (fieldName == "Item ID"){

				fieldNameVal = "Itemid";
				var filter = new sap.ui.model.odata.Filter('Itemid', [{operator:filterOperator ,value1:fieldContent}]);   
			}*/

			var filter1 = new sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:uintern}]); 
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"INTERN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSSEARCH"}]); 
			filters.push(filter);
			filters.push(filter1);
			filters.push(f1);
			filters.push(f2);

		}

//		oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
		jQuery.sap.require("sap.ui.core.util.Export");
		jQuery.sap.require("sap.ui.core.util.ExportTypeCSV");

		var oExport = new sap.ui.core.util.Export({

			// Type that will be used to generate the content. 
			exportType : new sap.ui.core.util.ExportTypeCSV({
				separatorChar : ","
			}),

			// Pass the model 
			models : sap.ui.getCore().byId("CheckPromos").getModel(),

			// binding information for the rows aggregation
			rows : {
				path : "/PromoListSet",
				filters : filters
			},

			// column definitions with column name and binding info for the content

			columns : [
			           {
			        	   name : "Customer ID",
			        	   template : { content : "{Customer}"  }
			           },
			           {
			        	   name : "Customer Name",
			        	   template : {  content : "{Customername}"  }
			           },   
			           {
			        	   name : "Check Date",
			        	   template : { content : "{Checkfrom}" ,
			        		   formatter : function(d)
			        		   {
			        			   return oDateFormat.format(new Date(d));
			        		   }}
			           },

			           {
			        	   name : "Promo From",
			        	   template : { content : "{Promofrom}"  ,
			        		   type : new sap.ui.model.type.DateTime({source: {pattern: "MMM dd,YYYY"}}),
			        		   formatter : function(d)
			        		   { 
			        			   return sap.ui.core.format.DateFormat.getInstance({pattern: "MM.dd.yyyy"}).format(new Date(d));}
			        	   }
			           },

			           {
			        	   name : "Promo To",
			        	   template : {  content : "{Promoto}" ,
			        		   type :new sap.ui.model.type.Date({source: {pattern: "yyyy-MM-ddTHH:MM:SS"}, pattern: "MM.dd.yyyy"})}
			           },    
			           {
			        	   name : "Product",
			        	   template : {
			        		   content : "{Product}"
			        	   }
			           },
			           {
			        	   name : "IR",
			        	   template : {
			        		   content : "{Iramount}"
			        	   }
			           },
			           {
			        	   name : "MIR",
			        	   template : {
			        		   content : "{Miramount}"
			        	   }
			           },

			           {
			        	   name : "Promo ID",
			        	   template : {
			        		   content : "{Promoid}"
			        	   }
			           },
			           {
			        	   name : "Item ID",
			        	   template : {
			        		   content : "{Itemid}"
			        	   }
			           },
			           {
			        	   name : "Customer Part ID",
			        	   template : {
			        		   content : "{Partid}"
			        	   }
			           },
			           {
			        	   name : "Last Response",
			        	   template : {
			        		   content : "{Lastresp}"
			        	   }
			           },
			           {
			        	   name : "Inaccurate Reason",
			        	   template : {
			        		   content : "{Inaccursns}"
			        	   }
			           }

			           ]
		});

		// download exported file
		oExport.saveFile("CheckinPromos").always(function() {
			this.destroy();
		});


	},
//	When Sales rep clicks on export table in both Check promos and Intern promos
	onExportSalesrepPress : sap.m.Table.prototype.exportData || function(oEvent) {
		debugger;
		var shell = sap.ui.getCore().byId("myShell").getSelectedWorksetItem();
		var filters = new Array(); 
		var uintern = sap.ui.getCore().byId("uintern").getValue();
		var userid = sap.ui.getCore().byId("uid").getValue();
		var urole = sap.ui.getCore().byId("urole").getValue();

		if ( shell == "checkpromo" )
		{
			var searchvalue = sap.ui.getCore().byId("SalesrepCheckPromosSearch").getSelectedItem().getText();
			var oTab = sap.ui.getCore().byId("SalesRep");
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
			var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
			var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
			filters.push(f1);
			filters.push(f2);
			filters.push(f3);
			filters.push(f4);
			//	oTab.setModel(oModel);

			if (searchvalue == "Overdue")
			{
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"OVERDUE"}]);
				filters.push(f5);

			}
			else if (searchvalue == "Due Today")
			{
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"DUETODAY"}]);
				filters.push(f5);
			}

		}
		else if ( shell == "searchpromo")
		{
			var fieldName = sap.ui.getCore().byId("Salesrep-Fieldsearch").getSelectedItem().getText();
			var searchKey = sap.ui.getCore().byId("Salesrep-Fieldsearchkey").getSelectedItem().getText();
			var fieldContent = sap.ui.getCore().byId("Salesrepsearchinput").getValue();
			if (searchKey == "Contains"){

				filterOperator = "Contains";

			} else if (searchKey == "equals"){

				filterOperator = "EQ";

			} else if (searchKey == "does not equals"){

				filterOperator = "NE";

			} else if (searchKey == "is less than"){

				filterOperator = "LT";

			} else if (searchKey == "is less than or equals to"){

				filterOperator = "LE";

			} else if (searchKey == "is greater than"){

				filterOperator = "GT";

			} else if (searchKey == "is greater than or equals to"){

				filterOperator = "GE";

			} else if (searchKey == "like"){

				filterOperator = "Contains";

			} else if (searchKey == "starts with"){

				filterOperator = "StartsWith";

			} else if (searchKey == "ends with"){

				filterOperator = "EndsWith";
			}

			var dateContent = sap.ui.getCore().byId("SalesrepDP").getValue();
			dateContent = dateContent+"T00:00:00";
			if (fieldName == "Customer ID"){

				//	fieldNameVal = "Customer";
				var filter = new sap.ui.model.odata.Filter('Customer', [{operator:filterOperator ,value1:fieldContent}]); 

			} else if (fieldName == "Customer Name"){

				//	fieldNameVal = "Customername";
				var filter = new sap.ui.model.odata.Filter('Customername', [{operator:filterOperator,value1:fieldContent}]); 

			}  else if (fieldName == "Promo From"){

				fieldNameVal = "Promofrom";
				var filter = new sap.ui.model.odata.Filter('Promofrom', [{operator:filterOperator,value1:dateContent}]);   

			} else if (fieldName == "Promo To"){

				fieldNameVal = "Promoto";
				var filter = new sap.ui.model.odata.Filter('Promoto', [{operator:filterOperator,value1:dateContent}]); 

			} else if (fieldName == "Product"){

				fieldNameVal = "Product";
				var filter = new sap.ui.model.odata.Filter('Product', [{operator:filterOperator,value1:fieldContent}]); 

			}  else if (fieldName == "MIR"){

				fieldNameVal = "Miramount";
				var filter = new sap.ui.model.odata.Filter('Miramount', [{operator:filterOperator,value1:fieldContent}]); 

			} else if (fieldName == "IR"){

				fieldNameVal = "Iramount";
				var filter = new sap.ui.model.odata.Filter('Iramount', [{operator:filterOperator,value1:fieldContent}]); 

			}else if (fieldName == "Promo ID"){

				fieldNameVal = "Promoid";
				var filter = new sap.ui.model.odata.Filter('Promoid', [{operator:filterOperator,value1:fieldContent}]);   

			}
			   /*CODE COMMENTED 17.06*/
		/*	else if (fieldName == "Item ID"){

				fieldNameVal = "Itemid";
				var filter = new sap.ui.model.odata.Filter('Itemid', [{operator:filterOperator ,value1:fieldContent}]);   
			}
*/
			var filter1 = new sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]); 
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSSEARCH"}]); 
			filters.push(filter);
			filters.push(filter1);
			filters.push(f1);
			filters.push(f2);

		}



		jQuery.sap.require("sap.ui.core.util.Export");
		jQuery.sap.require("sap.ui.core.util.ExportTypeCSV");
//		oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
		var oExport = new sap.ui.core.util.Export({

			// Type that will be used to generate the content. 
			exportType : new sap.ui.core.util.ExportTypeCSV({
				separatorChar : ","
			}),

			// Pass the model 
			models : sap.ui.getCore().byId("SalesRep").getModel(),

			// binding information for the rows aggregation
			rows : {
				path : "/PromoListSet",
				filters : filters
			},

			// column definitions with column name and binding info for the content

			columns : [
			           {
			        	   name : "Promo Status",
			        	   template : {  content : "{Status}"  }
			           },   
			           {
			        	   name : "Promo ID",
			        	   template : {
			        		   content : "{Promoid}"
			        	   }
			           },
			           {
			        	   name : "Item ID",
			        	   template : {
			        		   content : "{Itemid}"
			        	   }
			           },
			           {
			        	   name : "Customer",
			        	   template : { content : "{Customer}"  }
			           },
			           {
			        	   name : "Customer Name",
			        	   template : {  content : "{Customername}"  }
			           },   
			           {
			        	   name : "Sales Rep",
			        	   template : {  content : "{Salesrep}"  }
			           },   
			           {
			        	   name : "Channel",
			        	   template : { content : "{Channel}"  }
			           },
			           {
			        	   name : "Plan Type",
			        	   template : { content : "{Plantype}"  }
			           },
			           {
			        	   name : "How Advertised",
			        	   template : { content : "{Advtype}"  }
			           },
			           {
			        	   name : "Promo From",
			        	   template : { content : "{Promofrom}"  }
			           },

			           {
			        	   name : "Promo To",
			        	   template : {  content : "{Promoto}" }
			           },    
			           {
			        	   name : "Product",
			        	   template : {
			        		   content : "{Product}"
			        	   }
			           },
			           {
			        	   name : "Customer Part ID",
			        	   template : {
			        		   content : "{Partid}"
			        	   }
			           },
			           {
			        	   name : "Final Response",
			        	   template : {
			        		   content : "{Checkresptext}"
			        	   }
			           },
			           {
			        	   name : "Queue",
			        	   template : {
			        		   content : "{Queue}"
			        	   }
			           },
			           {
			        	   name : "MIR",
			        	   template : {
			        		   content : "{Miramount}"
			        	   }
			           },
			           {
			        	   name : "IR",
			        	   template : {
			        		   content : "{Iramount}"
			        	   }
			           },
			           {
			        	   name : "Last Response",
			        	   template : {
			        		   content : "{Lastresp}"
			        	   }
			           },
			           {
			        	   name : "Inaccurate Reason",
			        	   template : {
			        		   content : "{Inaccursns}"
			        	   }
			           }

			           ]
			
		});

		// download exported file
		oExport.saveFile("SalesRepPromos").always(function() {
			this.destroy();
		});


	},
	//Data filtering on Search Accounts page
	onAccountsApplyPress: function(oEvent){
		debugger;
		var urole = sap.ui.getCore().byId("urole").getValue();
		var filterOperator, fieldNameVal;
		var fieldName = sap.ui.getCore().byId("Accounts-Fieldsearch").getSelectedItem().getText();
		var searchKey = sap.ui.getCore().byId("Accounts-Fieldsearchkey").getSelectedItem().getText();
		var fieldContent = sap.ui.getCore().byId("Accounts-searchinput").getValue();

		if (searchKey == "Contains"){

			filterOperator = "Contains";

		} else if (searchKey == "equals"){

			filterOperator = "EQ";

		} else if (searchKey == "does not equals"){

			filterOperator = "NE";

		} else if (searchKey == "is less than"){

			filterOperator = "LT";

		} else if (searchKey == "is less than or equals to"){

			filterOperator = "LE";

		} else if (searchKey == "is greater than"){

			filterOperator = "GT";

		} else if (searchKey == "is greater than or equals to"){

			filterOperator = "GE";

		} else if (searchKey == "like"){

			filterOperator = "Contains";

		} else if (searchKey == "starts with"){

			filterOperator = "StartsWith";

		} else if (searchKey == "ends with"){

			filterOperator = "EndsWith";
		}

		if (fieldName == "Customer ID"){
			var filter = new sap.ui.model.odata.Filter('Customer', [{operator:filterOperator ,value1:fieldContent}]); 

		} else if (fieldName == "Customer Name"){

			var filter = new sap.ui.model.odata.Filter('Name', [{operator:filterOperator,value1:fieldContent}]); 	
		}  

		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);
		var oTab = sap.ui.getCore().byId("Search_Accounts");	  
		oTab.setModel(oModel);

//		oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
		oTab.bindRows({path:"/PVSAccountsSet" ,  filters:[filter]} );

	},
	//If Userclick on Reset button in Search Accounts page
	onAccountsResetPress: function()
	{   debugger;
	var urole = sap.ui.getCore().byId("urole").getValue();
	sap.ui.getCore().byId("Accounts-Fieldsearch").setSelectedItem("s_acc1");
	sap.ui.getCore().byId("Accounts-Fieldsearchkey").setSelectedItem("acc_kp1");
	sap.ui.getCore().byId("Accounts-searchinput").setValue();	
	var userid = sap.ui.getCore().byId("uid").getValue();
	var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
	var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
			false);
	var oTab = sap.ui.getCore().byId("Search_Accounts");	 

	oTab.setModel(oModel);
//	oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
	oTab.bindRows({path:"/PVSAccountsSet" } );

	},
//	*****************************New Code Ajay************************************//	
	FillInternShellContent : function(sId, oShell, obj){
		debugger;
		switch (sId) {
		case "home":
			var userid = sap.ui.getCore().byId("uid").getValue();
			var urole = sap.ui.getCore().byId("urole").getValue();
			var uintern = sap.ui.getCore().byId("uintern").getValue();

			if( ( userid == "" && urole == "" ))
			{
				var but = sap.ui.getCore().byId("home").setVisible(true);
				var but1 = sap.ui.getCore().byId("searchpromo").setVisible(true);
				var but2 = sap.ui.getCore().byId("searchacc").setVisible(true);
				var but4 = sap.ui.getCore().byId("chng_pass").setVisible(true);
				var but5 = sap.ui.getCore().byId("checkpromo").setVisible(true);

				var f1 = new  sap.ui.model.odata.Filter('Internid', [{operator:"EQ",value1:uintern}]);
				// var f2 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"INTERN"}]);
				var oHtable = sap.ui.getCore().byId("iHome");
				var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
				var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
						false);
				oHtable.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oHtable.bindRows({path:"/PVSInternsSet" ,  filters: [f1]} );
				var internHome = sap.ui.getCore().byId("H1");
				oShell.setContent(internHome);
				break;
			}
			else if ( urole == "SALESREP")
			{
				var but = sap.ui.getCore().byId("home").setVisible(true);
				var but1 = sap.ui.getCore().byId("searchpromo").setVisible(true);
				var but2 = sap.ui.getCore().byId("searchacc").setVisible(true);
				var but4 = sap.ui.getCore().byId("chng_pass").setVisible(false);
				var but5 = sap.ui.getCore().byId("checkpromo").setVisible(true);
				var f1 = new  sap.ui.model.odata.Filter('SalesRep', [{operator:"EQ",value1:userid}]);
				// var f2 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]);
				var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
				var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
						false);
				var oHtable1 = sap.ui.getCore().byId("iHome1")
				oHtable1.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oHtable1.bindRows({path:"/PVSSalesRepSet", filters: [f1]}  );				
				var salesRepHome = sap.ui.getCore().byId("H2");
				oShell.setContent(salesRepHome);
				break;
			}

		case "checkpromo" :
			debugger;
			var userid = sap.ui.getCore().byId("uid").getValue();
			var urole = sap.ui.getCore().byId("urole").getValue();	
			var uintern = sap.ui.getCore().byId("uintern").getValue();
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);
			var oTab = sap.ui.getCore().byId("CheckPromos");
			var oFormintern =   sap.ui.getCore().byId("FINTERN");

			sap.ui.getCore().byId("InternApply").setVisible(false);
			sap.ui.getCore().byId("InternReset").setVisible(false);
			sap.ui.getCore().byId("InternExport").setVisible(true);
			sap.ui.getCore().byId("Intern-Fieldsearch").setVisible(false);
			sap.ui.getCore().byId("Intern-Fieldsearchkey").setVisible(false);
			sap.ui.getCore().byId("InternDP").setVisible(false);
			sap.ui.getCore().byId("CheckPromosSearch").setVisible(true);
			sap.ui.getCore().byId("Internlabel").setVisible(true);

			sap.ui.getCore().byId("Internsearchinput").setVisible(false);
			sap.ui.getCore().byId("Intern-Fieldsearch").setSelectedItem("sp1");
			sap.ui.getCore().byId("Intern-Fieldsearchkey").setSelectedItem("skp1");
			sap.ui.getCore().byId("CheckPromosSearch").setSelectedItem("item1");
			sap.ui.getCore().byId("Internsearchinput").setValue();	
			sap.ui.getCore().byId("InternDP").setValue();	

			oTab.setFirstVisibleRow(0);
			oTab.setModel(oModel);			
			// oTab.setTitle("");
			if( ( userid == "" && urole == "" ))
			{  

				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"INTERN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"INTERN"}]); 
				var f4 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:uintern}]);

				/*oTab.bindRows({path:"/PromoListSet" , parameters: {
operationMode: "Client"
},
filters: [f1, f2 , f3 ,f4] });*/
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ,f4] } );
				sap.ui.getCore().byId("FINTERN1").setTitle("Intern: Check Promos");				
				oShell.setContent(oFormintern);
				var ofItabElement = sap.ui.getCore().byId("OFITAB");
				if(ofItabElement.indexOfField(oTab) == -1){
					ofItabElement.addField(oTab);
				}
				
				//oTab.setVisibleRowCount(oTab._getRowCount());
				if(sap.ui.Device.system.phone){
					oTab.setVisibleRowCount(9);

				}else{
					oTab.setVisibleRowCount(20);
				}
				break;
			}
			else if ( urole == "SALESREP")

			{

				/*var oTab = sap.ui.getCore().byId("SalesRep");
				sap.ui.getCore().byId("srepLabel").setVisible(true);
				sap.ui.getCore().byId("SalesrepApply").setVisible(false);
				sap.ui.getCore().byId("SalesrepReset").setVisible(false);
				sap.ui.getCore().byId("SalesrepExport").setVisible(true);
				sap.ui.getCore().byId("Salesrep-Fieldsearch").setVisible(false);
				sap.ui.getCore().byId("Salesrep-Fieldsearchkey").setVisible(false);
				sap.ui.getCore().byId("SalesrepCheckPromosSearch").setVisible(true);
				sap.ui.getCore().byId("SalesrepDP").setVisible(false);	
				sap.ui.getCore().byId("Salesrepsearchinput").setVisible(false);
				sap.ui.getCore().byId("Salesrep-Fieldsearch").setSelectedItem("srp1");
				sap.ui.getCore().byId("Salesrep-Fieldsearchkey").setSelectedItem("srkp1");
				sap.ui.getCore().byId("Salesrepsearchinput").setValue();	
				sap.ui.getCore().byId("SalesrepDP").setValue();	
				var oFormsalesrep =   sap.ui.getCore().byId("FSALESREP");*/
				sap.ui.getCore().byId("FINTERN1").setTitle("Sales Rep: Check Promos");
				//sap.ui.getCore().byId("FSALESREP1").setTitle("Sales Representative:Check Promotions");
				oTab.setModel(oModel);
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
				var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ,f4] } );
				oShell.setContent( oFormintern);
				var ofItabElement = sap.ui.getCore().byId("OFITAB");
				if(ofItabElement.indexOfField(oTab) == -1){
					ofItabElement.addField(oTab);
				}
				//	oTab.setVisibleRowCount(oTab._getRowCount());
				if(sap.ui.Device.system.phone){
					oTab.setVisibleRowCount(9);

				}else{
					oTab.setVisibleRowCount(20);
				}
				break;
			}



		case "searchpromo":
			//Fetching login user
			var userid = sap.ui.getCore().byId("uid").getValue();
			var urole = sap.ui.getCore().byId("urole").getValue();	
			var uintern = sap.ui.getCore().byId("uintern").getValue();
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);

			if( ( userid == "" && urole == "" ))
			{  
				//Hiding buttons and dropdown in toolbar
				sap.ui.getCore().byId("CheckPromosSearch").setVisible(false);
				sap.ui.getCore().byId("InternApply").setVisible(true);
				sap.ui.getCore().byId("InternReset").setVisible(true);
				sap.ui.getCore().byId("InternExport").setVisible(false);				/*28-04 */
				sap.ui.getCore().byId("Intern-Fieldsearch").setVisible(true);
				sap.ui.getCore().byId("Intern-Fieldsearchkey").setVisible(true);
				sap.ui.getCore().byId("InternDP").setVisible(false);
				sap.ui.getCore().byId("CheckPromosSearch").setVisible(false);
				sap.ui.getCore().byId("Internsearchinput").setVisible(true);
				sap.ui.getCore().byId("Intern-Fieldsearch").setSelectedItem("sp1");
				sap.ui.getCore().byId("Intern-Fieldsearchkey").setSelectedItem("skp1");
				sap.ui.getCore().byId("Internsearchinput").setValue();	
				sap.ui.getCore().byId("InternDP").setValue();	
				var oFormintern =   sap.ui.getCore().byId("FINTERN");
				var oTab1 = sap.ui.getCore().byId("CheckPromos");
				sap.ui.getCore().byId("FINTERN1").setTitle("Intern: Search Promos");
				sap.ui.getCore().byId("OFITAB").removeAllFields();						/*28-04 */		
				/*27.4.2016*/
			/*	var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"INTERN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:uintern}]);
				oTab1.setModel(oModel);
				//oTab1.setTitle("");
				oTab1.setFirstVisibleRow(0);
				oTab1.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ] } );	*/			
				/*27.4.2016*/
				
				oShell.setContent(oFormintern);
				//oTab1.setVisibleRowCount(oTab1._getRowCount());
				if(sap.ui.Device.system.phone){
					oTab1.setVisibleRowCount(9);

				}else{
					oTab1.setVisibleRowCount(20);
				}
				break;
			}
			else if ( urole == "SALESREP")

			{

				var oTab1 = sap.ui.getCore().byId("SalesRep");
				sap.ui.getCore().byId("SalesrepApply").setVisible(true);
				sap.ui.getCore().byId("SalesrepReset").setVisible(true);
				sap.ui.getCore().byId("SalesrepExport").setVisible(false);			/*28-04 */
				sap.ui.getCore().byId("Salesrep-Fieldsearch").setVisible(true);
				sap.ui.getCore().byId("Salesrep-Fieldsearchkey").setVisible(true);
				sap.ui.getCore().byId("SalesrepCheckPromosSearch").setVisible(false);
				sap.ui.getCore().byId("SalesrepDP").setVisible(false);
				sap.ui.getCore().byId("Salesrepsearchinput").setVisible(true);
				sap.ui.getCore().byId("Salesrep-Fieldsearch").setSelectedItem("srp1");
				sap.ui.getCore().byId("Salesrep-Fieldsearchkey").setSelectedItem("srkp1");
				sap.ui.getCore().byId("SalesrepCheckPromosSearch").setSelectedItem("sritem1");
				sap.ui.getCore().byId("Salesrepsearchinput").setValue();	
				sap.ui.getCore().byId("SalesrepDP").setValue();
				/*27.4.2016*/
			/*	oTab1.setFirstVisibleRow(0);
				oTab1.setModel(oModel);*/
				var oFormsalesrep =   sap.ui.getCore().byId("FSALESREP");
				sap.ui.getCore().byId("FSALESREP1").setTitle("Sales Rep: Search Promos");
				debugger;
				sap.ui.getCore().byId("OFSRTAB").removeAllFields();					/*28-04 */
			/*	var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
				oTab1.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ] } );*/
				/*27.4.2016*/
				oShell.setContent(oFormsalesrep);
				//	oTab1.setVisibleRowCount(oTab1._getRowCount());
				if(sap.ui.Device.system.phone){
					oTab1.setVisibleRowCount(9);

				}else{
					oTab1.setVisibleRowCount(20);
				}
				break;
			}



		case "searchacc":

			sap.ui.getCore().byId("Accounts-Fieldsearch").setSelectedItem("s_acc1");
			sap.ui.getCore().byId("Accounts-Fieldsearchkey").setSelectedItem("acc_kp1");
			sap.ui.getCore().byId("Accounts-searchinput").setValue();	
			//	sap.ui.getCore().byId("Accounts-searchinput").setVisible(false);	
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);


			var oTab1 = sap.ui.getCore().byId("Search_Accounts");
			var urole = sap.ui.getCore().byId("urole").getValue();
			if ( urole == "SALESREP" )
			{
				sap.ui.getCore().byId("FACCC1").setTitle("Sales Rep: Search Accounts");  
			}
			else if ( urole == "ADMIN" )
			{
				sap.ui.getCore().byId("FACCC1").setTitle("Admin: Search Accounts");  
			}
			else if ( urole == "MANAGER" )
			{
				sap.ui.getCore().byId("FACCC1").setTitle("Manager: Search Accounts");  
			}
			else if ( urole == "" )
			{
				sap.ui.getCore().byId("FACCC1").setTitle("Intern: Search Accounts");  
			}
			oTab1.setFirstVisibleRow(0);
			oTab1.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oTab1.bindRows({path:"/PVSAccountsSet" } );
			var oForm1 = sap.ui.getCore().byId("FACC");
			oShell.setContent(oForm1);
			//oTab1.setVisibleRowCount(oTab1._getRowCount());
			if(sap.ui.Device.system.phone){
				oTab1.setVisibleRowCount(9);

			}else{
				oTab1.setVisibleRowCount(20);
			}
			break;

		case "dummyItem":
			debugger;
			var oTab = sap.ui.getCore().byId("CheckPromos");	
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);
			oTab.setFirstVisibleRow(0);
			oTab.setModel(oModel);
			sap.ui.getCore().byId("Internlabel").setVisible(false);
			sap.ui.getCore().byId("Intern-Fieldsearch").setVisible(false);
			sap.ui.getCore().byId("InternDP").setVisible(false);
			sap.ui.getCore().byId("Internsearchinput").setVisible(false);	
			sap.ui.getCore().byId("Intern-Fieldsearchkey").setVisible(false);
			sap.ui.getCore().byId("CheckPromosSearch").setVisible(false);
			sap.ui.getCore().byId("InternApply").setVisible(false);
			sap.ui.getCore().byId("InternReset").setVisible(false);	
			sap.ui.getCore().byId("InternExport").setVisible(false);
			var json = sap.ui.getCore().getModel("homemodel");
			var HomeFilter = json.getData().HomeFilter;
			var urole = sap.ui.getCore().byId("urole").getValue();
			if ( urole == "")
			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"INTERN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"INTERN"}]); 
				var f4 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:obj.Internid}]);
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
				if ( HomeFilter ==  "OVERDUE")
				{
					sap.ui.getCore().byId("FINTERN1").setTitle("Intern Overdue Summary for" + " " + obj.Internid);
				}
				else if (HomeFilter == "DUETODAY")
				{
					sap.ui.getCore().byId("FINTERN1").setTitle("Intern DueToday Summary for" + " " + obj.Internid);
				}
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4,f5 ]});
			}
			else if ( urole == "SALESREP")
			{
				var userid = sap.ui.getCore().byId("uid").getValue();
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
				var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:obj.SalesRep}]);
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
				var f6 = new  sap.ui.model.odata.Filter('Userid', [{operator:"EQ",value1:userid}]);
				if ( HomeFilter ==  "OVERDUE")
				{
					sap.ui.getCore().byId("FINTERN1").setTitle("SalesRep Overdue Summary for" + " " + obj.SalesRep);
				}
				else if (HomeFilter == "DUETODAY")
				{
					sap.ui.getCore().byId("FINTERN1").setTitle("SalesRep DueToday Summary for" + " " + obj.SalesRep);
				}
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4,f5,f6 ]});
			}
			var oFormIntern = sap.ui.getCore().byId("FINTERN");

			oShell.setContent(oFormIntern);
			debugger;
//			**************Updated Code Ajay*************************************************//					
			var oSelectedWorkSetItem = oShell.getSelectedWorksetItem();
			if ( oSelectedWorkSetItem == "home" )
			{
				oShell.setSelectedWorksetItem("dummyItem");						
			}
//			**************Updated Code Ajay Ends*************************************************//					
			//oTab.setVisibleRowCount(oTab._getRowCount());
			if(sap.ui.Device.system.phone){
				oTab.setVisibleRowCount(9);

			}else{
				oTab.setVisibleRowCount(20);
			}			break;


		default:
			break;
		}

	},

//	***************New Code Ends***********************************//	

	//When User clicks on export table in search accounts page
	onExportAccountsPress : sap.m.Table.prototype.exportData || function(oEvent) {
		debugger;

		var filters = []; 
		var urole = sap.ui.getCore().byId("urole").getValue();
		var fieldName = sap.ui.getCore().byId("Accounts-Fieldsearch").getSelectedItem().getText();
		var searchKey = sap.ui.getCore().byId("Accounts-Fieldsearchkey").getSelectedItem().getText();
		var fieldContent = sap.ui.getCore().byId("Accounts-searchinput").getValue();
		if (searchKey == "Contains"){

			filterOperator = "Contains";

		} else if (searchKey == "equals"){

			filterOperator = "EQ";

		} else if (searchKey == "does not equals"){

			filterOperator = "NE";

		} else if (searchKey == "is less than"){

			filterOperator = "LT";

		} else if (searchKey == "is less than or equals to"){

			filterOperator = "LE";

		} else if (searchKey == "is greater than"){

			filterOperator = "GT";

		} else if (searchKey == "is greater than or equals to"){

			filterOperator = "GE";

		} else if (searchKey == "like"){

			filterOperator = "Contains";

		} else if (searchKey == "starts with"){

			filterOperator = "StartsWith";

		} else if (searchKey == "ends with"){

			filterOperator = "EndsWith";
		}
		if (fieldName == "Customer ID"){
			var filter = new sap.ui.model.odata.Filter('Customer', [{operator:filterOperator ,value1:fieldContent}]); 

		} else if (fieldName == "Customer Name"){

			var filter = new sap.ui.model.odata.Filter('Name', [{operator:filterOperator,value1:fieldContent}]); 	
		}  

		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);
		var oTab = sap.ui.getCore().byId("Search_Accounts");
		oTab.setFirstVisibleRow(0);
		oTab.setModel(oModel);
//		oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
		filters.push(filter);


		jQuery.sap.require("sap.ui.core.util.Export");
		jQuery.sap.require("sap.ui.core.util.ExportTypeCSV");

		var oExport = new sap.ui.core.util.Export({

			// Type that will be used to generate the content. 
			exportType : new sap.ui.core.util.ExportTypeCSV({
				separatorChar : ","
			}),

			// Pass the model 
			models : sap.ui.getCore().byId("Search_Accounts").getModel(),

			// binding information for the rows aggregation
			rows : {
				path : "/PVSAccountsSet",
				filters : filters
			},

			// column definitions with column name and binding info for the content

			columns : [

			           {
			        	   name : "Customer",
			        	   template : { content : "{Customer}"  }
			           },
			           {
			        	   name : "Customer Name",
			        	   template : {  content : "{Name}"  }
			           },   
			           {
			        	   name : "Customer Website",
			        	   template : {  content : "{Website}"  }
			           },   
			           {
			        	   name : "Comments",
			        	   template : { content : "{Instructns}"  }
			           },
			           ]
		});

		// download exported file
		oExport.saveFile("SearchAccounts").always(function() {
			this.destroy();
		});


	},	

	// PDF
	getPDF : function(customer)
	{
		debugger;
		//     var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/PVSAccountsSet(Customer='"+customer+"')");
		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/PVSAccountsSet(Customer='"+customer+"')/$value");
		OData
		.request(
				{

					requestUri : sServiceUrl,
					method : "GET",
					headers : {
						"X-Requested-With" : "XMLHttpRequest",
						"Content-Type" : "application/pdf",
						"DataServiceVersion" : "2.0",
					}
				},
				function(data, response) {
					debugger;
					console.log(response);
					console.log("response rendered");
					var oHTML = new sap.ui.core.HTML("iFRM");  
					//     oHTML.setContent("<div align=\"center\" style=\"width: 100%; height:100%; overflow: auto !important; -webkit-overflow-scrolling: touch !important;\"><object id=\"pdfObject\" width=\"100%\" height=\"1000000000000\" align=\"center\" data=\"pdf/HANADevGuide.pdf\" type=\"application/pdf\" >You have no plugin installed</object></div>"); 
					//   oShell.addContent(oHTML); 
					oHTML.setContent("<iframe src=" + data.Pdfattachment + " width='700' height='700'></iframe>"); 
					var oShell = sap.ui.getCore().byId("myShell");
					oShell.addContent(oHTML); 
				},
				function(err)
				{
					debugger;                        
					var request = err.request; // the request that was
					// sent.
					var response = err.response; // the response that was
				}
		);
	},	

});