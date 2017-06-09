sap.ui.controller("pvs3.Promolist_Manager_Admin", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf pvs3.Promolist_Manager_Admin
	 */
	onInit: function() {
		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);
		oModel.oHeaders = {
				"DataServiceVersion": "3.0",
				"MaxDataServiceVersion": "3.0"
		};

	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf pvs3.Promolist_Manager_Admin
	 */
	onBeforeRendering: function() {
		debugger;
		var userid = sap.ui.getCore().byId("uid").getValue();
		console.log(userid);	
		var urole = sap.ui.getCore().byId("urole").getValue();
		console.log(urole);		
		var uintern = sap.ui.getCore().byId("uintern").getValue();
		console.log(uintern);	
		var firstname = sap.ui.getCore().byId("firstname").getValue();
		console.log(firstname);
		var shellfirstname = sap.ui.getCore().byId("mfname");
		shellfirstname.setText(firstname);

		debugger;

		var ModelFromBack =	sap.ui.getCore().getModel("ModelFromBack");
		if (ModelFromBack != null){		
			var tmodel = sap.ui.getCore().getModel("homemodel");

			//var sermodel =	sap.ui.getCore().getModel("serialnomodel");

			var oSelectedWorkSetItem = ModelFromBack.getData().SelectedWorkSetItem;
			if (oSelectedWorkSetItem != null){
				var oShell = sap.ui.getCore().byId("AdminShell");
				oShell.setSelectedWorksetItem(oSelectedWorkSetItem);
				var obj = {};
				if ( tmodel != null) {
					obj.Internid = tmodel.getData().Internid;
					//obj.Salesrep = tmodel.getData().Salesrep;
					obj.SalesRep = tmodel.getData().Salesrep;
					obj.Customer = tmodel.getData().customer;
				}
				this.FillInternShellContent(oSelectedWorkSetItem, oShell, obj);	
			}
		}else if ( urole == "ADMIN" )
		{ 
			var but = sap.ui.getCore().byId("mhome").setVisible(true);
			var but1 = sap.ui.getCore().byId("msearchpromo").setVisible(true);
			var but2 = sap.ui.getCore().byId("msearchacc").setVisible(true);
			var but3 = sap.ui.getCore().byId("mcheckpromo").setVisible(true);
			var but4 = sap.ui.getCore().byId("minternres").setVisible(true);
			var but5 = sap.ui.getCore().byId("mreassign").setVisible(true);
			var but6 = sap.ui.getCore().byId("msrres").setVisible(true);
			var f1 = new  sap.ui.model.odata.Filter('Internid', [{operator:"EQ",value1:'INTERN'}]);
			var f2 = new  sap.ui.model.odata.Filter('SalesRep', [{operator:"EQ",value1:'SALESREP'}]);
			var f3 = new  sap.ui.model.odata.Filter('Customer', [{operator:"EQ",value1:'CUSTOMER'}]);
//			For home page
			var oHtable2 = sap.ui.getCore().byId("iHome2");
			var oHtable3 = sap.ui.getCore().byId("iHome3");
			var oHtable4 = sap.ui.getCore().byId("iHome4");
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);
			oHtable2.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oHtable2.bindRows({ path:"/PVSAdminsSet" , filters: [f1] } );			
			oHtable3.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oHtable3.bindRows({ path:"/PVSAdminsSet" , filters: [f2] } );
			oHtable4.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oHtable4.bindRows({ path:"/PVSAdminsSet" , filters: [f3] } );

			var NoOfRows = oHtable2._getRowCount();
			oHtable2.setVisibleRowCount(NoOfRows);
			//oHtable2.setVisibleRowCount(20);
			NoOfRows = oHtable3._getRowCount();
			oHtable3.setVisibleRowCount(NoOfRows);
			//oHtable3.setVisibleRowCount(20);
			NoOfRows = oHtable4._getRowCount();
			oHtable4.setVisibleRowCount(NoOfRows);
			//oHtable4.setVisibleRowCount(20);
			var adminform1 = sap.ui.getCore().byId("H31");
			sap.ui.getCore().byId("F1H31").setTitle("Admin: Home");
			var adminform2 = sap.ui.getCore().byId("H32");
			var adminform3 = sap.ui.getCore().byId("H33");
			var oShell = sap.ui.getCore().byId("AdminShell");
			if(sap.ui.Device.system.phone || ( sap.ui.Device.system.tablet && (!(sap.ui.Device.system.combi)) && (!(sap.ui.Device.os.name == "win")))){
				var mScrollContainer = sap.ui.getCore().byId("maScroll");
				mScrollContainer.addContent( adminform1 );
				mScrollContainer.addContent( adminform2 );
				mScrollContainer.addContent( adminform3 );
				oShell.addContent(mScrollContainer);
			}else{
				/*oShell.setContent( adminform2,adminform1,adminform3 );*/
				oShell.addContent( adminform1 );
				oShell.addContent( adminform2 );
				oShell.addContent( adminform3 );
			}

		}
		else if ( urole == "MANAGER" )
		{ 
			var but = sap.ui.getCore().byId("mhome").setVisible(true);
			var but1 = sap.ui.getCore().byId("msearchpromo").setVisible(true);
			var but2 = sap.ui.getCore().byId("msearchacc").setVisible(true);
			var but3 = sap.ui.getCore().byId("mcheckpromo").setVisible(false);
			var but4 = sap.ui.getCore().byId("minternres").setVisible(false);
			var but5 = sap.ui.getCore().byId("mreassign").setVisible(false);
			var but6 = sap.ui.getCore().byId("msrres").setVisible(false);
			var f1 = new  sap.ui.model.odata.Filter('Internid', [{operator:"EQ",value1:'INTERN'}]);
			var f2 = new  sap.ui.model.odata.Filter('SalesRep', [{operator:"EQ",value1:'SALESREP'}]);
			var f3 = new  sap.ui.model.odata.Filter('Customer', [{operator:"EQ",value1:'CUSTOMER'}]);
			var oHtable2 = sap.ui.getCore().byId("iHome2");
			var oHtable3 = sap.ui.getCore().byId("iHome3");
			var oHtable4 = sap.ui.getCore().byId("iHome4");
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);
			oHtable2.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oHtable2.bindRows({ path:"/PVSAdminsSet" , filters: [f1] } );
			oHtable3.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oHtable3.bindRows({ path:"/PVSAdminsSet" , filters: [f2] } );
			oHtable4.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oHtable4.bindRows({ path:"/PVSAdminsSet" , filters: [f3] } );
			var NoOfRows = oHtable2._getRowCount();
			oHtable2.setVisibleRowCount(NoOfRows);
			//oHtable2.setVisibleRowCount(20);
			NoOfRows = oHtable3._getRowCount();
			oHtable3.setVisibleRowCount(NoOfRows);
			//oHtable3.setVisibleRowCount(20);
			NoOfRows = oHtable4._getRowCount();
			oHtable4.setVisibleRowCount(NoOfRows);
			//oHtable4.setVisibleRowCount(20);
			var adminform1 = sap.ui.getCore().byId("H31");
			sap.ui.getCore().byId("F1H31").setTitle("Manager : Home");
			var adminform2 = sap.ui.getCore().byId("H32");
			var adminform3 = sap.ui.getCore().byId("H33");
			var oShell = sap.ui.getCore().byId("AdminShell");

			if(sap.ui.Device.system.phone || ( sap.ui.Device.system.tablet && (!(sap.ui.Device.system.combi)) && (!(sap.ui.Device.os.name == "win")))){
				var mScrollContainer = sap.ui.getCore().byId("maScroll");
				mScrollContainer.addContent( adminform1 );
				mScrollContainer.addContent( adminform2 );
				mScrollContainer.addContent( adminform3 );
				oShell.addContent( mScrollContainer );

			}else{
				/*oShell.setContent( adminform2,adminform1,adminform3 );*/
				oShell.addContent( adminform1 );
				oShell.addContent( adminform2 );
				oShell.addContent( adminform3 );
			}
		}

		/*		debugger;

		var ModelFromBack =	sap.ui.getCore().getModel("ModelFromBack");
		if (ModelFromBack != null){		
		var tmodel = sap.ui.getCore().getModel("homemodel");

		//var sermodel =	sap.ui.getCore().getModel("serialnomodel");

		var oSelectedWorkSetItem = ModelFromBack.getData().SelectedWorkSetItem;
		if (oSelectedWorkSetItem != null){
		oShell.setSelectedWorksetItem(oSelectedWorkSetItem);
		var obj = {};
		if ( tmodel != null) {
		obj.Internid = tmodel.getData().Internid;
		//obj.Salesrep = tmodel.getData().Salesrep;
		obj.SalesRep = tmodel.getData().Salesrep;
		obj.Customer = tmodel.getData().customer;
		}
		this.FillInternShellContent(oSelectedWorkSetItem, oShell, obj);		
			}*/



	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf pvs3.Promolist_Manager_Admin
	 */
	onAfterRendering: function() {

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
		$('#AdminShell-logoImg').css({'height' : '42px', 'max-height' : '42px'});

	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf pvs3.Promolist_Manager_Admin
	 */
//	onExit: function() {

//	}


//	If Manager or Admin is logged in  Check promos page dropdown
	CheckPromosSearch: function(oEvent)
	{
		// debugger;
		var userid = sap.ui.getCore().byId("uid").getValue();
		console.log(userid);	
		var urole = sap.ui.getCore().byId("urole").getValue();
		console.log(urole);		
		var uintern = sap.ui.getCore().byId("uintern").getValue();
		console.log(uintern);
		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);

//		If Admin filters data on  Check promos page

		var searchvalue = sap.ui.getCore().byId("ManagerCheckPromosSearch").getSelectedItem().getText();
		var oTab = sap.ui.getCore().byId("Manager_Admin");
		oTab.setModel(oModel);
//		oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
		if ( urole == "ADMIN" )
		{
			if (searchvalue == " ")
			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
				//	var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"ADMIN"}]); 
				//	var f4 = new  sap.ui.model.odata.Filter('Admin', [{operator:"EQ",value1:userid}]);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 ] } );
			}
			else if (searchvalue == "Overdue")
			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
				//	var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"ADMIN"}]);  
				//	var f4 = new  sap.ui.model.odata.Filter('Admin', [{operator:"EQ",value1:userid}]);
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"OVERDUE"}]);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f5] } );
			}
			else if (searchvalue == "Due Today")
			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
				//	var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"ADMIN"}]); 
				//	var f4 = new  sap.ui.model.odata.Filter('Admin', [{operator:"EQ",value1:userid}]);
				var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"DUETODAY"}]);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 ,  f5] } );
			}
		}
//		If Manager filters data on Check Promos page
		/* else if ( urole == "MANAGER" )	
 { 

		if (searchvalue == " ")
			{
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
		//	var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
		//	var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
			oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 ] } );
			}
		else if (searchvalue == "Overdue")
		{
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
		//	var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
		//	var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
			var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"OVERDUE"}]);
			oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f5] } );
		}
		else if (searchvalue == "Due Today")
		{
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
	//		var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
	//		var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
			var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"DUETODAY"}]);
			oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f5] } );
		}

	 }*/
	},
//	Manager or Admin clicks on apply in search promos page
	onManagerApplyPress: function(oEvent){

//		Data filtering for Search promos for both Manager and Admin
		//debugger;
		var uintern = sap.ui.getCore().byId("uintern").getValue();
		var userid = sap.ui.getCore().byId("uid").getValue();
		var urole = sap.ui.getCore().byId("urole").getValue();

		var filterOperator, fieldNameVal;
		var oTab = sap.ui.getCore().byId("Manager_Admin");	
		var fieldName = sap.ui.getCore().byId("Manager-Fieldsearch").getSelectedItem().getText();
		var searchKey = sap.ui.getCore().byId("Manager-Fieldsearchkey").getSelectedItem().getText();
		var fieldContent = sap.ui.getCore().byId("Managersearchinput").getValue();
		var dateContent = sap.ui.getCore().byId("ManagerDP").getValue();
		sap.ui.getCore().byId("ManagerExport").setVisible(true);					/*28-04 */
		var OFMATAB = sap.ui.getCore().byId("OFMATAB");								/*28-04 */
		OFMATAB.addField(oTab);														/*28-04 */		
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

		dateContent = dateContent+"T00:00:00";	
		if (fieldName == "Promo Status"){

			fieldNameVal = "Status";
			var filter = new sap.ui.model.odata.Filter('Status', [{operator:filterOperator ,value1:fieldContent}]); 

		}
		else if (fieldName == "Customer"){

			fieldNameVal = "Customer";
			var filter = new sap.ui.model.odata.Filter('Customer', [{operator:filterOperator ,value1:fieldContent}]); 

		} else if (fieldName == "Customer Name"){

			fieldNameVal = "Customername";
			var filter = new sap.ui.model.odata.Filter('Customername', [{operator:filterOperator,value1:fieldContent}]); 

		}  else if (fieldName == "Promo From Date"){

			fieldNameVal = "Promofrom";
			var filter = new sap.ui.model.odata.Filter('Promofrom', [{operator:filterOperator,value1:dateContent}]);   

		} else if (fieldName == "Promo To Date"){

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


			var filter = new sap.ui.model.odata.Filter('Itemid', [{operator:filterOperator ,value1:fieldContent}]);   
		}*/
		else if (fieldName == "Sales Rep"){


			var filter = new sap.ui.model.odata.Filter('Salesrep', [{operator:filterOperator ,value1:fieldContent}]);   
		}
		else if (fieldName == "Channel"){


			var filter = new sap.ui.model.odata.Filter('Channel', [{operator:filterOperator ,value1:fieldContent}]);   
		}
		else if (fieldName == "Plan Type"){


			var filter = new sap.ui.model.odata.Filter('Plantype', [{operator:filterOperator ,value1:fieldContent}]);   
		}
		else if (fieldName == "How Advertised"){


			var filter = new sap.ui.model.odata.Filter('Adtype', [{operator:filterOperator ,value1:fieldContent}]);   
		}
/*27.04*/
		else if (fieldName == "Queue"){


			var filter = new sap.ui.model.odata.Filter('Queue', [{operator:filterOperator ,value1:fieldContent}]);   
		}
		/*27.04*/
		else if (fieldName == "Customer Part ID"){


			var filter = new sap.ui.model.odata.Filter('Partid', [{operator:filterOperator ,value1:fieldContent}]);   
		}	
		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);
		oTab.setModel(oModel);
//		oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
		if ( urole == "MANAGER" )
		{
			//	var filter1 = new sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]); 
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSSEARCH"}]); 

		}
		if ( urole == "ADMIN")
		{
			//	var filter1 = new sap.ui.model.odata.Filter('Admin', [{operator:"EQ",value1:userid}]); 
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSSEARCH"}]); 

		}
		if ( fieldName  == "Promo From Date" || fieldName == "Promo To Date" )
		{
			if ( filterOperator == "EQ" || filterOperator == "NE" || filterOperator == "LE" || filterOperator == "LT" || filterOperator == "GT"
				|| filterOperator == "GE" )
			{
				oTab.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [ filter ,  f1 , f2 ] } );
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
				sap.ui.getCore().byId("Managersearchinput").setVisible(true);
				sap.ui.getCore().byId("Manager-Fieldsearch").setSelectedItem("sp1");
				sap.ui.getCore().byId("Manager-Fieldsearchkey").setSelectedItem("skp1");
				sap.ui.getCore().byId("Managersearchinput").setValue();	
				sap.ui.getCore().byId("ManagerDP").setValue();	
				sap.ui.getCore().byId("ManagerDP").setVisible(false);
				oTab.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [  f1 , f2 ] } );
			}


		} 
		else
		{
			oTab.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oTab.bindRows({path:"/PromoListSet" ,  filters: [ filter , f1 , f2 ] } );
		}


	},

//	If Manager or Admin  click on Reset button in search promos page
	onManagerResetPress: function()
	{


		sap.ui.getCore().byId("ManagerCheckPromosSearch").setSelectedItem("maitem1");
		sap.ui.getCore().byId("Manager-Fieldsearch").setSelectedItem("map1");
		sap.ui.getCore().byId("Manager-Fieldsearchkey").setSelectedItem("makp1");
		sap.ui.getCore().byId("Managersearchinput").setValue("");
		sap.ui.getCore().byId("ManagerDP").setValue();	
		sap.ui.getCore().byId("ManagerDP").setVisible(false);	
		sap.ui.getCore().byId("Managersearchinput").setVisible(true);	

		var userid = sap.ui.getCore().byId("uid").getValue();
		var urole  = sap.ui.getCore().byId("urole").getValue();
		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);
		var oTab = sap.ui.getCore().byId("Manager_Admin");
		if ( urole == "ADMIN")
		{
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSDATA"}]); 
//			var f3 = new  sap.ui.model.odata.Filter('Admin', [{operator:"EQ",value1:userid}]);
			oTab.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			//  oTab.setTitle("Admin:Search Promotions");
			oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 ] } );
		}
		else if ( urole == "MANAGER")
		{
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSDATA"}]); 
			//	var f3 = new  sap.ui.model.odata.Filter('Admin', [{operator:"EQ",value1:userid}]);
			oTab.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
//			oTab.setTitle("Manager:Search Promotions");
			oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2  ] } );

		}

	},
//	When Manager or Admin  cliks on Export table button
	onExportMACheckPromosPress : sap.m.Table.prototype.exportData || function(oEvent) {
		//debugger;
		var shell = sap.ui.getCore().byId("AdminShell").getSelectedWorksetItem();
		var filters = new Array(); 
		var userid = sap.ui.getCore().byId("uid").getValue();
		var urole = sap.ui.getCore().byId("urole").getValue();
		var oTab = sap.ui.getCore().byId("Manager_Admin");
		if ( shell == "minternres" )
		{
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"RESPONSES"}]);
			var f3 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"INTERN"}]);
			filters.push(f1);
			filters.push(f2);
			filters.push(f3);
		}
		else if ( shell == "msrres")
		{
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"RESPONSES"}]);
			var f3 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"SALESREP"}]);
			filters.push(f1);
			filters.push(f2);
			filters.push(f3);
		}
		else if ( shell == "mcheckpromo" )
		{
			var searchvalue = sap.ui.getCore().byId("ManagerCheckPromosSearch").getSelectedItem().getText();
			if ( urole == "ADMIN" )
			{
				if (searchvalue == " ")
				{
					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
					//	var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"ADMIN"}]); 
					//	var f4 = new  sap.ui.model.odata.Filter('Admin', [{operator:"EQ",value1:userid}]);
					filters.push(f1);
					filters.push(f2);
					//	filters.push(f3);
					//	filters.push(f4);
				}
				else if (searchvalue == "Overdue")
				{
					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
					//var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"ADMIN"}]);  
					//	var f4 = new  sap.ui.model.odata.Filter('Admin', [{operator:"EQ",value1:userid}]);
					var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"OVERDUE"}]);
					filters.push(f1);
					filters.push(f2);
					//	filters.push(f3);
					//	filters.push(f4);
					filters.push(f5);

				}
				else if (searchvalue == "Due Today")
				{
					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
					//	var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"ADMIN"}]); 
					//	var f4 = new  sap.ui.model.odata.Filter('Admin', [{operator:"EQ",value1:userid}]);
					var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"DUETODAY"}]);
					filters.push(f1);
					filters.push(f2);
					//	filters.push(f3);
					//	filters.push(f4);
					filters.push(f5);

				}
			}
			/*else if ( urole == "MANAGER" )	
			{
			if (searchvalue == " ")
			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]);
			filters.push(f1);
			filters.push(f2);

			}
		else if (searchvalue == "Overdue")
		{
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
		//	var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
		//	var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
			var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"OVERDUE"}]);
			oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f5] } );
			filters.push(f1);
			filters.push(f2);
			filters.push(f5);

		}
		else if (searchvalue == "Due Today")
		{
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
	//		var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
	//		var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
			var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"DUETODAY"}]);
			filters.push(f1);
			filters.push(f2);

			filters.push(f5);
		}

		}*/
		}
		else if ( shell == "msearchpromo")
		{
			var fieldName = sap.ui.getCore().byId("Manager-Fieldsearch").getSelectedItem().getText();
			var searchKey = sap.ui.getCore().byId("Manager-Fieldsearchkey").getSelectedItem().getText();
			var fieldContent = sap.ui.getCore().byId("Managersearchinput").getValue();
			var dateContent = sap.ui.getCore().byId("ManagerDP").getValue();
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
			dateContent = dateContent+"T00:00:00";	
			if (fieldName == "Promo Status"){

				fieldNameVal = "Status";
				var filter = new sap.ui.model.odata.Filter('Status', [{operator:filterOperator ,value1:fieldContent}]); 

			}

			else if (fieldName == "Customer"){

				//	fieldNameVal = "Customer";
				var filter = new sap.ui.model.odata.Filter('Customer', [{operator:filterOperator ,value1:fieldContent}]); 

			} else if (fieldName == "Customer Name"){

				//	fieldNameVal = "Customername";
				var filter = new sap.ui.model.odata.Filter('Customername', [{operator:filterOperator,value1:fieldContent}]); 

			}  else if (fieldName == "Promo From Date"){

				fieldNameVal = "Promofrom";
				var filter = new sap.ui.model.odata.Filter('Promofrom', [{operator:filterOperator,value1:dateContent}]);   

			} else if (fieldName == "Promo To Date"){

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
			}*/
			else if (fieldName == "Sales Rep"){


				var filter = new sap.ui.model.odata.Filter('Salesrep', [{operator:filterOperator ,value1:fieldContent}]);   
			}
			else if (fieldName == "Channel"){


				var filter = new sap.ui.model.odata.Filter('Channel', [{operator:filterOperator ,value1:fieldContent}]);   
			}
			else if (fieldName == "Plan Type"){


				var filter = new sap.ui.model.odata.Filter('Plantype', [{operator:filterOperator ,value1:fieldContent}]);   
			}
			else if (fieldName == "How Advertised"){


				var filter = new sap.ui.model.odata.Filter('Adtype', [{operator:filterOperator ,value1:fieldContent}]);   
			}
			else if (fieldName == "Queue"){


				var filter = new sap.ui.model.odata.Filter('Queue', [{operator:filterOperator ,value1:fieldContent}]);   
			}	
			else if (fieldName == "Customer Part ID"){
				var filter = new sap.ui.model.odata.Filter('Partid', [{operator:filterOperator ,value1:fieldContent}]);   
			}		 
			/*if ( urole == "ADMIN" )
		 			{
				var filter1 = new sap.ui.model.odata.Filter('Admin', [{operator:"EQ",value1:userid}]); 
		 			}
				filters.push(filter1);*/
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:urole}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSSEARCH"}]); 
			filters.push(filter);	
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
			models : sap.ui.getCore().byId("Manager_Admin").getModel(),

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
			        	   template : {  content : "{Channel}"  }
			           },   
			           {
			        	   name : "Plan Type",
			        	   template : { content : "{Plantype}"  }
			           },
			           {
			        	   name : "How Advertised",
			        	   template : { content : "{Adtype}"  }
			           },
			           {
			        	   name : "Promo From Date" ,
			        	   template : { content : "{Adtype}"  }
			           },


			           {
			        	   name : "Promo To Date",
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



			           ]
		});

		// download exported file
		oExport.saveFile("CheckinPromos").always(function() {
			this.destroy();
		});


	},
//	chandana code
	onSummaryApplyPress: function(oEvent){
		debugger;
		var userid = sap.ui.getCore().byId("uid").getValue();
		var urole = sap.ui.getCore().byId("urole").getValue();
		var filterOperator, fieldNameVal;
		var oTab = sap.ui.getCore().byId("Manager_Admin_Home");	
		var fieldName = sap.ui.getCore().byId("Home-Fieldsearch").getSelectedItem().getText();
		var searchKey = sap.ui.getCore().byId("Home-Fieldsearchkey").getSelectedItem().getText();
		var fieldContent = sap.ui.getCore().byId("Managerhomesearchinput").getValue();
		var dateContent = sap.ui.getCore().byId("ManagerHomeDP").getValue();
		var json = sap.ui.getCore().getModel("homemodel");
		var HomeFilter = json.getData().HomeFilter;
		var Intern = json.getData().Internid;
		var salesrep = json.getData().Salesrep;
		var customer = json.getData().customer;

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

		dateContent = dateContent+"T00:00:00";	

		if (fieldName == "Customer Name"){

			//	fieldNameVal = "Customername";
			var filter = new sap.ui.model.odata.Filter('Customername', [{operator:filterOperator,value1:fieldContent }]); 

		} else if (fieldName == "Customer"){

			//	fieldNameVal = "Customer";
			var filter = new sap.ui.model.odata.Filter('Customer', [{operator:filterOperator,value1:fieldContent}]); 

		}  else if (fieldName == "Promo From Date"){

			fieldNameVal = "Promofrom";
			var filter = new sap.ui.model.odata.Filter('Promofrom', [{operator:filterOperator,value1:dateContent}]);   

		} else if (fieldName == "Promo To Date"){

			fieldNameVal = "Promoto";
			var filter = new sap.ui.model.odata.Filter('Promoto', [{operator:filterOperator,value1:dateContent}]); 

		} else if (fieldName == "Product"){

			fieldNameVal = "Product";
			var filter = new sap.ui.model.odata.Filter('Product', [{operator:filterOperator,value1:fieldContent}]); 

		}  else if (fieldName == "IR"){

			fieldNameVal = "Iramount";
			var filter = new sap.ui.model.odata.Filter('Iramount', [{operator:filterOperator,value1:fieldContent}]); 

		}else if (fieldName == "MIR"){

			fieldNameVal = "Miramount";
			var filter = new sap.ui.model.odata.Filter('Miramount', [{operator:filterOperator,value1:fieldContent}]); 

		} else if (fieldName == "Promo ID"){

			fieldNameVal = "Promoid";
			var filter = new sap.ui.model.odata.Filter('Promoid', [{operator:filterOperator,value1:fieldContent}]);   

		}
		   /*CODE COMMENTED 17.06*/
		/*else if (fieldName == "Item ID"){


			var filter = new sap.ui.model.odata.Filter('Itemid', [{operator:filterOperator,value1:fieldContent }]);   
		}*/
		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);
		oTab.setModel(oModel);


		if ( urole == "ADMIN")
		{
			if( Intern != "" )
			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:Intern}]); 
				var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);

			}
			else if ((salesrep != ""))
			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:salesrep}]); 
				var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);

			}
			else if ((customer != ""))
			{

				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Customer', [{operator:"EQ",value1:customer}]); 
				var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
			}

		}
		if ( fieldName  == "Promo From Date" || fieldName == "Promo To Date" )
		{
			if ( filterOperator == "EQ" || filterOperator == "NE" || filterOperator == "LE" || filterOperator == "LT" || filterOperator == "GT"|| filterOperator == "GE" )
			{
				oTab.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [ filter ,  f1 , f2, f3,f4 ] } );
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
				sap.ui.getCore().byId("Managerhomesearchinput").setVisible(true);
				sap.ui.getCore().byId("Home-Fieldsearch").setSelectedItem("mahi10");
				sap.ui.getCore().byId("Home-Fieldsearchkey").setSelectedItem("mahp1");
				sap.ui.getCore().byId("Managerhomesearchinput").setValue();	
				sap.ui.getCore().byId("ManagerHomeDP").setValue();	
				sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
				oTab.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [  f1 , f2 , f3, f4 ] } );
			}


		} 
		else
		{
			oTab.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oTab.bindRows({path:"/PromoListSet" ,  filters: [ filter , f1 , f2, f3, f4 ] } );
		}



	},
	onSummaryResetPress:function(oEvent){
		var userid = sap.ui.getCore().byId("uid").getValue();
		var urole = sap.ui.getCore().byId("urole").getValue();
		var json = sap.ui.getCore().getModel("homemodel");
		var HomeFilter = json.getData().HomeFilter;
		var Intern = json.getData().Internid;
		var salesrep = json.getData().Salesrep;
		var customer = json.getData().customer;

		var filterOperator, fieldNameVal;
		var oTab = sap.ui.getCore().byId("Manager_Admin_Home");	
		sap.ui.getCore().byId("Managerhomesearchinput").setVisible(true);
		sap.ui.getCore().byId("Home-Fieldsearch").setSelectedItem("mahi5");
		sap.ui.getCore().byId("Home-Fieldsearchkey").setSelectedItem("mahp1");
		sap.ui.getCore().byId("Managerhomesearchinput").setValue();	
		sap.ui.getCore().byId("ManagerHomeDP").setValue();	
		sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);

		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel = new sap.ui.model.odata.ODataModel( sServiceUrl,
				false);
		if ( urole == "ADMIN")

		{
			if( ( Intern != ""))
			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:Intern}]);
				var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
				var f5 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"INTERN"}]);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4,f5 ]});
			}
			else if ((salesrep != ""))
			{

				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:salesrep}]);
				var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
				var f5 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4,f5 ]});
			}
			else if ((customer != ""))

			{
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Customer', [{operator:"EQ",value1:obj.Customer}]);
				var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4 ]});
			}

		}



	},

	onSummaryExportCheckPromosPress:function(oEvent){
		var shell = sap.ui.getCore().byId("AdminShell").getSelectedWorksetItem();
		var filters = new Array(); 
		var userid = sap.ui.getCore().byId("uid").getValue();
		var urole = sap.ui.getCore().byId("urole").getValue();
		var oTab = sap.ui.getCore().byId("Manager_Admin_Home");
		var json = sap.ui.getCore().getModel("homemodel");
		var HomeFilter = json.getData().HomeFilter;
		var Intern = json.getData().Internid;
		var salesrep = json.getData().Salesrep;
		var customer = json.getData().customer;
		var dateContent = sap.ui.getCore().byId("ManagerHomeDP").getValue();

		var fieldName = sap.ui.getCore().byId("Home-Fieldsearch").getSelectedItem().getText();
		var searchKey = sap.ui.getCore().byId("Home-Fieldsearchkey").getSelectedItem().getText();
		var fieldContent = sap.ui.getCore().byId("Managerhomesearchinput").getValue();

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
		dateContent = dateContent+"T00:00:00";	

		if (fieldName == "Customer"){

			//	fieldNameVal = "Customer";
			var filter = new sap.ui.model.odata.Filter('Customer', [{operator:filterOperator ,value1:fieldContent}]); 

		} else if (fieldName == "Customer Name"){

			//	fieldNameVal = "Customername";
			var filter = new sap.ui.model.odata.Filter('Customername', [{operator:filterOperator,value1:fieldContent}]); 

		}  else if (fieldName == "Promo From Date"){

			fieldNameVal = "Promofrom";
			var filter = new sap.ui.model.odata.Filter('Promofrom', [{operator:filterOperator,value1:dateContent}]);   

		} else if (fieldName == "Promo To Date"){

			fieldNameVal = "Promoto";
			var filter = new sap.ui.model.odata.Filter('Promoto', [{operator:filterOperator,value1:dateContent}]); 

		} else if (fieldName == "Product"){

			fieldNameVal = "Product";
			var filter = new sap.ui.model.odata.Filter('Product', [{operator:filterOperator,value1:fieldContent}]); 

		} else if (fieldName == "IR"){

			fieldNameVal = "Iramount";
			var filter = new sap.ui.model.odata.Filter('Iramount', [{operator:filterOperator,value1:fieldContent}]); 

		} else if (fieldName == "MIR"){

			fieldNameVal = "Miramount";
			var filter = new sap.ui.model.odata.Filter('Miramount', [{operator:filterOperator,value1:fieldContent}]); 

		} else if (fieldName == "Promo ID"){

			fieldNameVal = "Promoid";
			var filter = new sap.ui.model.odata.Filter('Promoid', [{operator:filterOperator,value1:fieldContent}]);   

		}
		   /*CODE COMMENTED 17.06*/
	/*	else if (fieldName == "Item ID"){

			fieldNameVal = "Itemid";
			var filter = new sap.ui.model.odata.Filter('Itemid', [{operator:filterOperator ,value1:fieldContent}]);   
		}
*/





		if( ( Intern != ""))
		{
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
			var f3 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:Intern}]); 
			var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
			/*var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
		var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
		var f3 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:Intern}]);*/
			filters.push(filter);	
			filters.push(f1);
			filters.push(f2);
			filters.push(f3);
			filters.push(f4);
		}
		else if ((salesrep != ""))
		{
			/*  var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
			var f3 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:salesrep}]); */
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
			var f3 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:salesrep}]); 
			var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);

			filters.push(filter);	
			filters.push(f1);
			filters.push(f2);
			filters.push(f3);
			filters.push(f4);

		}
		else if ((customer != ""))
		{
			/* var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
		  var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
		  var f3 = new  sap.ui.model.odata.Filter('Customer', [{operator:"EQ",value1:customer}]);*/ 
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
			var f3 = new  sap.ui.model.odata.Filter('Customer', [{operator:"EQ",value1:customer}]); 
			var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
			filters.push(filter);	
			filters.push(f1);
			filters.push(f2);
			filters.push(f3);
			filters.push(f4);
		}


		if ( fieldName  == "Promo From Date" || fieldName == "Promo To Date" )
		{
			if ( filterOperator == "EQ" || filterOperator == "NE" || filterOperator == "LE" || filterOperator == "LT" || filterOperator == "GT"|| filterOperator == "GE" )
			{
				filters.push(filter);	
				filters.push(f1);
				filters.push(f2);
				filters.push(f3);
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
				sap.ui.getCore().byId("Managerhomesearchinput").setVisible(true);
				sap.ui.getCore().byId("Home-Fieldsearch").setSelectedItem("mahi5");
				sap.ui.getCore().byId("Home-Fieldsearchkey").setSelectedItem("mahp1");
				sap.ui.getCore().byId("Managerhomesearchinput").setValue();	
				sap.ui.getCore().byId("ManagerHomeDP").setValue();	
				sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
				filters.push(filter);	
				filters.push(f1);
				filters.push(f2);
				filters.push(f3);
			}


		} 
		else
		{
			filters.push(filter);	
			filters.push(f1);
			filters.push(f2);
			filters.push(f3);
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
			models : sap.ui.getCore().byId("Manager_Admin_Home").getModel(),

			// binding information for the rows aggregation
			rows : {
				path : "/PromoListSet",
				filters : filters
			},

			// column definitions with column name and binding info for the content

			columns : [
			           {
			        	   name : "Customer Name",
			        	   template : {  content : "{Customername}"  }
			           },  
			           {
			        	   name : "Customer",
			        	   template : { content : "{Customer}"  }
			           },
			           {
			        	   name : "Promo From Date" ,
			        	   template : { content : "{Promofrom}"  }
			           },


			           {
			        	   name : "Promo To Date",
			        	   template : {  content : "{Promoto}" }
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



			           ]
		});

		// download exported file
		oExport.saveFile("CheckinSummaryPromos").always(function() {
			this.destroy();
		});



	},
//	For reassign promos
	handleSelectionChangeCustomer : function(oEvent){

		selectedKeys = []; 
		var oCustomers = sap.ui.getCore().byId("customers");
		var oCustomerItems = oCustomers.getItems();

		for (var i = 0; i < oCustomerItems.length; i++) {

			selectedKeys.push(oCustomerItems[i].getKey());      
		}
		//  oCustomers.addSelectedKeys(selectedKeys);
		filters = [];
	},

	handleSelectionChange: function(oEvent){

		var isSelected = oEvent.getParameter("selected");
		var customer = oEvent.getParameter("changedItem").getText();
		debugger;
		if (isSelected) {      
			var filterOperator = sap.ui.model.FilterOperator.EQ;
			var fieldName = "Customer";
			var filter = new sap.ui.model.Filter(fieldName, filterOperator, customer);        
			filters.push(filter);
		} else{
			for (var i = 0; i < filters.length; i++) {

				if(filters[i].oValue1 == customer){
					filters.splice(i,1);
					return;
				}
			}
		}
	},

	reAssignPromo : function(e) {

		jQuery.sap.require("sap.m.MessageBox");
		var fromIntern = sap.ui.getCore().byId("CBFromIntern").getValue();
		var toIntern = sap.ui.getCore().byId("CBToIntern").getValue();
		var fromDate = sap.ui.getCore().byId("fromDate").getValue();
		var toDate = sap.ui.getCore().byId("toDate").getValue();

		if (fromIntern == "") {
			sap.m.MessageBox.show("Please enter From Intern ID", {
				icon : sap.m.MessageBox.Icon.WARNING,
				title : "From Intern ID:",
				actions : [ sap.m.MessageBox.Action.OK ],
				onClose : function(oAction) {     }
			});
		} else if (toIntern == "") {
			sap.m.MessageBox.show("Please enter To Intern ID", {
				icon : sap.m.MessageBox.Icon.WARNING,
				title : "To Intern ID:",
				actions : [ sap.m.MessageBox.Action.OK ],
				onClose : function(oAction) {     }
			});
		} else if (fromDate == "") {
			sap.m.MessageBox.show("Please enter From Date", {
				icon : sap.m.MessageBox.Icon.WARNING,
				title : "From Date:",
				actions : [ sap.m.MessageBox.Action.OK ],
				onClose : function(oAction) {     }
			});
		} else if (toDate == "") {
			sap.m.MessageBox.show("Please enter To Date", {
				icon : sap.m.MessageBox.Icon.WARNING,
				title : "To Date:",
				actions : [ sap.m.MessageBox.Action.OK ],
				onClose : function(oAction) {     }
			});
		} else if (fromIntern == toIntern) {
			sap.m.MessageBox.show("From Intern ID & To Intern ID should not be same", {
				icon : sap.m.MessageBox.Icon.WARNING,
				title : "From/To Intern ID:",
				actions : [ sap.m.MessageBox.Action.OK ],
				onClose : function(oAction) {     }
			});
		} else if (fromDate > toDate) {
			sap.m.MessageBox.show("To Date should be greater than or equals to From Date", {
				icon : sap.m.MessageBox.Icon.WARNING,
				title : "To Date:",
				actions : [ sap.m.MessageBox.Action.OK ],
				onClose : function(oAction) {     }
			});
		}else {
			var filterOperator = sap.ui.model.FilterOperator.EQ;

			var fieldName = "Fromintern";
			var filter = new sap.ui.model.Filter(fieldName, filterOperator, fromIntern);
			filters.push(filter);

			var fieldName = "Tointern";
			var filter = new sap.ui.model.Filter(fieldName, filterOperator, toIntern);
			filters.push(filter);

			fromDate = fromDate + "T00:00:00";
			var fieldName = "Fromdate";
			var filter = new sap.ui.model.Filter(fieldName, filterOperator, fromDate);
			filters.push(filter);

			toDate = toDate + "T00:00:00";
			var fieldName = "Todate";
			var filter = new sap.ui.model.Filter(fieldName, filterOperator, toDate);
			filters.push(filter);

			var oIntern = sap.ui.getCore().byId("CBFromIntern");

			oIntern.getModel().read("/ReassignPromosSet",{
				context: {},  
				urlParameters: {},  
				async: true,  
				filters: filters,  
				sorters: [],  
				success: function(oData, oResponse){ 
					sap.m.MessageBox.show("Re-assigned Promotions Successfully",{
						icon : sap.m.MessageBox.Icon.SUCCESS,
						title : "Success ",
						actions : [ sap.m.MessageBox.Action.OK ],
						onClose : function(oAction) {     }
					});
				},  
				error: function(err) {  
					sap.m.MessageBox.show((JSON.parse(err.response.body).error.message.value),{
						icon : sap.m.MessageBox.Icon.WARNING,
						title : "Error ",
						actions : [ sap.m.MessageBox.Action.OK ],
						onClose : function(oAction) {     }
					});  
				}  
			});  
			filters = [];
			sap.ui.getCore().byId("CBFromIntern").setValue();
			sap.ui.getCore().byId("CBToIntern").setValue();
			sap.ui.getCore().byId("fromDate").setValue();
			sap.ui.getCore().byId("toDate").setValue();
			sap.ui.getCore().byId("customers").clearSelection();
            sap.ui.getCore().byId("CBFromIntern").setSelectedKey();
            sap.ui.getCore().byId("CBToIntern").setSelectedKey();			
		}
	},

	reSet: function(e){

		sap.ui.getCore().byId("CBFromIntern").setValue();
		sap.ui.getCore().byId("CBToIntern").setValue();
		sap.ui.getCore().byId("fromDate").setValue();
		sap.ui.getCore().byId("toDate").setValue(); 
		sap.ui.getCore().byId("customers").clearSelection();
		filters = [];

	},

//	*****************************New lines added by chandana ************************************//	
	FillInternShellContent : function(sId, oShell, obj){
		debugger;
		switch (sId) {
		case "mhome":
			var adminHome1 = sap.ui.getCore().byId("H31");
			var adminHome2 = sap.ui.getCore().byId("H32");
			var adminHome3 = sap.ui.getCore().byId("H33");
			var urole = sap.ui.getCore().byId(
			"urole").getValue();
			if (urole == "ADMIN") {
				var but = sap.ui.getCore().byId("mhome").setVisible(true);
				var but1 = sap.ui.getCore().byId("msearchpromo").setVisible(true);
				var but2 = sap.ui.getCore().byId("msearchacc").setVisible(true);
				var but3 = sap.ui.getCore().byId("mcheckpromo").setVisible(true);
				var but4 = sap.ui.getCore().byId("minternres").setVisible(true);
				var but5 = sap.ui.getCore().byId("mreassign").setVisible(true);
				var but6 = sap.ui.getCore().byId("msrres").setVisible(true);
				var f1 = new  sap.ui.model.odata.Filter('Internid', [{operator:"EQ",value1:'INTERN'}]);
				var f2 = new  sap.ui.model.odata.Filter('SalesRep', [{operator:"EQ",value1:'SALESREP'}]);
				var f3 = new  sap.ui.model.odata.Filter('Customer', [{operator:"EQ",value1:'CUSTOMER'}]);
//				For home page
				var oHtable2 = sap.ui.getCore().byId("iHome2");
				var oHtable3 = sap.ui.getCore().byId("iHome3");
				var oHtable4 = sap.ui.getCore().byId("iHome4");
				var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
				var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
						false);
				oHtable2.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oHtable2.bindRows({ path:"/PVSAdminsSet" , filters: [f1] } );			
				oHtable3.setModel(oModel);
				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
//				oHtable3.bindRows({ path:"/PVSAdminsSet" , filters: [f2] } );
				oHtable4.setModel(oModel);
				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
//				oHtable4.bindRows({ path:"/PVSAdminsSet" , filters: [f3] } );

				var NoOfRows = oHtable2._getRowCount();
				oHtable2.setVisibleRowCount(NoOfRows);
				//	oHtable2.setVisibleRowCount(20);
				NoOfRows = oHtable3._getRowCount();
				oHtable3.setVisibleRowCount(NoOfRows);
				//oHtable3.setVisibleRowCount(20);
				NoOfRows = oHtable4._getRowCount();
				oHtable4.setVisibleRowCount(NoOfRows);
				//oHtable4.setVisibleRowCount(20);

				oShell.removeAllContent();

				if(sap.ui.Device.system.phone || ( sap.ui.Device.system.tablet && (!(sap.ui.Device.system.combi)) && (!(sap.ui.Device.os.name == "win")))){
					var mScrollContainer = sap.ui.getCore().byId("maScroll");
					mScrollContainer.removeAllContent();
					mScrollContainer.addContent( adminHome1);
					mScrollContainer.addContent( adminHome2 );
					mScrollContainer.addContent( adminHome3 );
					oShell.addContent( mScrollContainer);

				}else{
					oShell.addContent( adminHome1);
					oShell.addContent( adminHome2);
					oShell.addContent( adminHome3);
				}
			} else if (urole == "MANAGER") {
				var but = sap.ui.getCore().byId("mhome").setVisible(true);
				var but1 = sap.ui.getCore().byId("msearchpromo").setVisible(true);
				var but2 = sap.ui.getCore().byId("msearchacc").setVisible(true);
				var but3 = sap.ui.getCore().byId("mcheckpromo").setVisible(false);
				var but4 = sap.ui.getCore().byId("minternres").setVisible(false);
				var but5 = sap.ui.getCore().byId("mreassign").setVisible(false);
				var but6 = sap.ui.getCore().byId("msrres").setVisible(false);
				var f1 = new  sap.ui.model.odata.Filter('Internid', [{operator:"EQ",value1:'INTERN'}]);
				var f2 = new  sap.ui.model.odata.Filter('SalesRep', [{operator:"EQ",value1:'SALESREP'}]);
				var f3 = new  sap.ui.model.odata.Filter('Customer', [{operator:"EQ",value1:'CUSTOMER'}]);
				var oHtable2 = sap.ui.getCore().byId("iHome2");
				var oHtable3 = sap.ui.getCore().byId("iHome3");
				var oHtable4 = sap.ui.getCore().byId("iHome4");
				var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
				var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
						false);
				oHtable2.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oHtable2.bindRows({ path:"/PVSAdminsSet" , filters: [f1] } );
				oHtable3.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oHtable3.bindRows({ path:"/PVSAdminsSet" , filters: [f2] } );
				oHtable4.setModel(oModel);
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oHtable4.bindRows({ path:"/PVSAdminsSet" , filters: [f3] } );
				var NoOfRows = oHtable2._getRowCount();
				oHtable2.setVisibleRowCount(NoOfRows);
				//oHtable2.setVisibleRowCount(20);
				NoOfRows = oHtable3._getRowCount();
				oHtable3.setVisibleRowCount(NoOfRows);
				//oHtable3.setVisibleRowCount(20);
				NoOfRows = oHtable4._getRowCount();
				oHtable4.setVisibleRowCount(NoOfRows);
				//oHtable4.setVisibleRowCount(20);

				oShell.removeAllContent();


				if(sap.ui.Device.system.phone || ( sap.ui.Device.system.tablet && (!(sap.ui.Device.system.combi)) && (!(sap.ui.Device.os.name == "win")))){
					var mScrollContainer = sap.ui.getCore().byId("maScroll");
					mScrollContainer.removeAllContent();
					mScrollContainer.addContent( adminHome1);
					mScrollContainer.addContent( adminHome2 );
					mScrollContainer.addContent( adminHome3 );
					oShell.addContent( mScrollContainer);

				}else{
					oShell.addContent( adminHome1);
					oShell.addContent( adminHome2 );
					oShell.addContent( adminHome3 );
				}
			}
			break;

		case "mcheckpromo" :

			var userid = sap.ui.getCore().byId("uid").getValue();
			var urole = sap.ui.getCore().byId("urole").getValue();	
			var uintern = sap.ui.getCore().byId("uintern").getValue();
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false );

			if( ( urole == "ADMIN" ))
			{  
				var oTab = sap.ui.getCore().byId("CheckPromos");

				var oFormintern =   sap.ui.getCore().byId("FINTERN");
				sap.ui.getCore().byId("InternApply").setVisible(false);
				sap.ui.getCore().byId("InternReset").setVisible(false);
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

				oTab.setModel(oModel);
				 //oTab.setTitle("");
				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
				var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"ADMIN"}]); 
				//			var f4 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:uintern}]);
				/*oTab.bindRows({path:"/PromoListSet" , parameters: {
operationMode: "Client"
},
filters: [f1, f2 , f3 ,f4] });*/
//				oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ] } );
				sap.ui.getCore().byId("FINTERN1").setTitle("Admin: Check Promos");
				oShell.setContent(oFormintern);
				oTab.setFirstVisibleRow(0);
				//oTab.setVisibleRowCount(oTab._getRowCount());
				if(sap.ui.Device.system.phone){
					oTab.setVisibleRowCount(9);

				}else{
					oTab.setVisibleRowCount(20);
				}				break;
			}
			break;
		case "msearchpromo":

			sap.ui.getCore().byId("ManagerApply").setVisible(true);
			sap.ui.getCore().byId("ManagerReset").setVisible(true);
			sap.ui.getCore().byId("ManagerExport").setVisible(false);			/*28-04*/
			sap.ui.getCore().byId("Manager-Fieldsearch").setVisible(true);
			sap.ui.getCore().byId("Manager-Fieldsearchkey").setVisible(true);
			sap.ui.getCore().byId("ManagerDP").setVisible(false);
			sap.ui.getCore().byId("ManagerCheckPromosSearch").setVisible(false);
			sap.ui.getCore().byId("Managersearchinput").setVisible(true);
			sap.ui.getCore().byId("Manager-Fieldsearch").setSelectedItem("map1");
			sap.ui.getCore().byId("Manager-Fieldsearchkey").setSelectedItem("makp1");
			sap.ui.getCore().byId("Managersearchinput").setValue();	
			sap.ui.getCore().byId("ManagerDP").setValue();	
			var oFormmanager = sap.ui.getCore().byId("FMANAGER");

			sap.ui.getCore().byId("Managersearchinput").setValue("");
			var userid = sap.ui.getCore().byId("uid").getValue();
			var urole = sap.ui.getCore().byId("urole").getValue();	
			var uintern = sap.ui.getCore().byId("uintern").getValue();
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);
			//Hiding buttons and dropdown in toolbar
			sap.ui.getCore().byId("masrf").setVisible(true);
			var oTab1 = sap.ui.getCore().byId("Manager_Admin");
			//oTab1.setTitle("");
			oTab1.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oTab1.setFirstVisibleRow(0);
			if( ( urole == "ADMIN" ))
			{  
				sap.ui.getCore().byId("FMANAGER1").setTitle("Admin: Search Promos");
/*27.4.2016*/
				/*var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSDATA"}]); 
				//	var f3 = new  sap.ui.model.odata.Filter('Admin', [{operator:"EQ",value1:userid}]);

				oTab1.bindRows({path:"/PromoListSet" ,  filters: [f1, f2  ] } );*/
				/*27.4.2016*/
			}
			else if ( urole == "MANAGER")

			{
				sap.ui.getCore().byId("FMANAGER1").setTitle("Manager: Search Promos");
				/*27.4.2016*/
			/*	var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSDATA"}]); 
				//	var f3 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
				debugger;
				oTab1.bindRows({path:"/PromoListSet" ,  filters: [f1, f2] } );*/
				/*27.4.2016*/
			}
			sap.ui.getCore().byId("OFMATAB").removeAllFields();					/*28-04*/
			
			oShell.setContent(oFormmanager);
			//	oTab1.setVisibleRowCount(oTab1._getRowCount());
			if(sap.ui.Device.system.phone){
				oTab1.setVisibleRowCount(9);

			}else{
				oTab1.setVisibleRowCount(20);
			}

			break;
		case "msearchacc":
			//debugger;
			sap.ui.getCore().byId("Accounts-Fieldsearch").setSelectedItem("s_acc1");
			sap.ui.getCore().byId("Accounts-Fieldsearchkey").setSelectedItem("acc_kp1");
			sap.ui.getCore().byId("Accounts-searchinput").setValue();
			var oForm1 = sap.ui.getCore().byId("FACC");

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
			oTab1.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oTab1.bindRows({path:"/PVSAccountsSet"} );
			oShell.setContent(oForm1);
			oTab1.setFirstVisibleRow(0);
			//oTab1.setVisibleRowCount(oTab1._getRowCount());
			if(sap.ui.Device.system.phone){
				oTab1.setVisibleRowCount(9);

			}else{
				oTab1.setVisibleRowCount(20);
			}			break;
		case "minternres":
			var userid = sap.ui.getCore().byId("uid").getValue();
			var urole = sap.ui.getCore().byId("urole").getValue();	
			var uintern = sap.ui.getCore().byId("uintern").getValue();
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);
			//Hiding buttons and dropdown in toolbar
			sap.ui.getCore().byId("masrf").setVisible(false);
			sap.ui.getCore().byId("ManagerApply").setVisible(false);
			sap.ui.getCore().byId("ManagerReset").setVisible(false);
			sap.ui.getCore().byId("Manager-Fieldsearch").setVisible(false);
			sap.ui.getCore().byId("Manager-Fieldsearchkey").setVisible(false);
			sap.ui.getCore().byId("ManagerCheckPromosSearch").setVisible(false);
			sap.ui.getCore().byId("Managersearchinput").setVisible(false);
			sap.ui.getCore().byId("ManagerDP").setVisible(false);
			var oTab1 = sap.ui.getCore().byId("Manager_Admin");
			oTab1.setModel(oModel);
			var oFormmanager = sap.ui.getCore().byId("FMANAGER");
			sap.ui.getCore().byId("FMANAGER1").setTitle("Admin: Intern Responses");
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"RESPONSES"}]);
			var f3 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"INTERN"}]);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oTab1.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3] } );
			oShell.setContent(oFormmanager);
			oTab1.setFirstVisibleRow(0);
			var ofMAtabElement = sap.ui.getCore().byId("OFMATAB");
			if(ofMAtabElement.indexOfField(oTab1) == -1){
				ofMAtabElement.addField(oTab1);
			}
			
			//oTab1.setVisibleRowCount(oTab1._getRowCount());
			if(sap.ui.Device.system.phone){
				oTab1.setVisibleRowCount(9);

			}else{
				oTab1.setVisibleRowCount(20);
			}			break;
		case "msrres":
			//debugger;
			var userid = sap.ui.getCore().byId("uid").getValue();
			var urole = sap.ui.getCore().byId("urole").getValue();	
			var uintern = sap.ui.getCore().byId("uintern").getValue();
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);
			//Hiding buttons and dropdown in toolbar
			sap.ui.getCore().byId("masrf").setVisible(false);
			sap.ui.getCore().byId("ManagerApply").setVisible(false);
			sap.ui.getCore().byId("ManagerReset").setVisible(false);
			sap.ui.getCore().byId("Manager-Fieldsearch").setVisible(false);
			sap.ui.getCore().byId("Manager-Fieldsearchkey").setVisible(false);
			sap.ui.getCore().byId("ManagerCheckPromosSearch").setVisible(false);
			sap.ui.getCore().byId("Managersearchinput").setVisible(false);
			sap.ui.getCore().byId("ManagerDP").setVisible(false);
			var oTab1 = sap.ui.getCore().byId("Manager_Admin");
			oTab1.setModel(oModel);
			//     
			var oFormmanager = sap.ui.getCore().byId("FMANAGER");
			sap.ui.getCore().byId("FMANAGER1").setTitle("Admin: Sales Rep Responses");
			var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
			var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"RESPONSES"}]);
			var f3 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"SALESREP"}]);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oTab1.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3] } );
			oShell.setContent(oFormmanager);
			oTab1.setFirstVisibleRow(0);
			var ofMAStabElement = sap.ui.getCore().byId("OFMATAB");
			if(ofMAStabElement.indexOfField(oTab1) == -1){
				ofMAStabElement.addField(oTab1);
			}
			
			//oTab1.setVisibleRowCount(oTab1._getRowCount());
			if(sap.ui.Device.system.phone){
				oTab1.setVisibleRowCount(9);

			}else{
				oTab1.setVisibleRowCount(20);
			}			break;

		case "mreassign":
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					true);

			filters = new Array(); 
			var filterOperator = "EQ"; //sap.ui.model.FilterOperator.EQ;
			var fieldName = "Fromintern";
			var fieldValue = " ";
			//var filter = new sap.ui.model.Filter(fieldName, filterOperator, fieldValue);
			var filter = new sap.ui.model.odata.Filter(fieldName, [{operator:filterOperator ,value1:fieldValue}]); 
			filters.push(filter);

			sap.ui.getCore().byId("CBFromIntern").setValue();
			sap.ui.getCore().byId("CBToIntern").setValue();
			sap.ui.getCore().byId("fromDate").setValue();
			sap.ui.getCore().byId("toDate").setValue();
			sap.ui.getCore().byId("customers").clearSelection();
   	        sap.ui.getCore().byId("CBFromIntern").setSelectedKey();
   	        sap.ui.getCore().byId("CBToIntern").setSelectedKey();

			var oCBFromIntern = sap.ui.getCore().byId("CBFromIntern");
			oCBFromIntern.setModel(oModel);
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oCBFromIntern.bindItems("/ReassignPromosSet", sap.ui.getCore().byId("idFromInternTemplate"), null, filters);
			filters.pop();
			debugger;
			fieldName = "Tointern";
			//var filter = new sap.ui.model.Filter(fieldName, filterOperator, fieldValue);
			var filter = new sap.ui.model.odata.Filter(fieldName, [{operator:filterOperator ,value1:fieldValue}]); 
			filters.push(filter);

			var oCBToIntern = sap.ui.getCore().byId("CBToIntern");
			oCBToIntern.setModel(oModel);

			oCBToIntern.bindItems("/ReassignPromosSet", sap.ui.getCore().byId("idToInternTemplate"), null, filters);
			filters.pop();

			fieldName = "Customer";
			//var filter = new sap.ui.model.Filter(fieldName, filterOperator, fieldValue);
			var filter = new sap.ui.model.odata.Filter(fieldName, [{operator:filterOperator ,value1:fieldValue}]); 
			filters.push(filter);

			var oMCBCustomers = sap.ui.getCore().byId("customers");
			oMCBCustomers.setModel(oModel);
			/*            var oCustomerTemplate = new sap.ui.core.Item({
                   key : "{Customer}",  
                   text : "{Customer}"  
            });*/
//			oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
			oMCBCustomers.bindItems("/ReassignPromosSet", sap.ui.getCore().byId("idCustomerTemplate"), null, filters);

			filters.pop();

			oShell.setContent(sap.ui.getCore().byId("RAF"));
			oShell.setSelectedWorksetItem("mreassign");						
			break;


		case "mdummyItem":
			debugger;
			var FMANAGERHOME = sap.ui.getCore().byId("FMANAGERHOME");
			var FMANAGER = sap.ui.getCore().byId("FMANAGER");
			var json = sap.ui.getCore().getModel("homemodel");
			var HomeFilter = json.getData().HomeFilter;
			var oTab = sap.ui.getCore().byId("Manager_Admin_Home");	
			var oTab1 = sap.ui.getCore().byId("Manager_Admin");
			var urole = sap.ui.getCore().byId("urole").getValue();
			var json = sap.ui.getCore().getModel("homemodel");
			var HomeFilter = json.getData().HomeFilter;
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
					false);
			oTab.setModel(oModel);
			oTab1.setModel(oModel);


			if ( urole == "ADMIN")
			{
				sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
				sap.ui.getCore().byId("HomeCheckPromosSearch").setVisible(false);
				if ( obj.Internid != '' )
				{
					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
					var f3 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:obj.Internid}]);
					var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
					var f5 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"INTERN"}]);
					if ( HomeFilter ==  "INTERNOVER")
					{
						sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Intern Overdue Summary for" + " " + obj.Internid);
					}
					else if (HomeFilter == "INTERNDUE")
					{
						sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Intern DueToday Summary for" + " " + obj.Internid);
					}
					else if (HomeFilter == "INTERNUPRW")
					{
						sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Intern Upcoming Review Summary for" + " " + obj.Internid);
					}
//					oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
					oTab.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4,f5]});
				}

				else if ( obj.SalesRep != '' )
				{
					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
					var f3 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:obj.SalesRep}]);
					var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
					var f5 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]);
					if ( HomeFilter ==  "SREPODUE")
					{
						sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: SalesRep Overdue Summary for" + " " + obj.SalesRep);
					}
					else if (HomeFilter == "SREPDUE")
					{
						sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: SalesRep Due Today Summary for" + " " + obj.SalesRep);
					}
					else if (HomeFilter == "SREPUPRW")
					{
						sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: SalesRep Upcoming Review Summary for" + " " + obj.SalesRep);
					}
//					oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
					oTab.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4,f5]});
				}
				else if ( obj.Customer != '' )
				{
					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"ADMIN"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
					var f3 = new  sap.ui.model.odata.Filter('Customer', [{operator:"EQ",value1:obj.Customer}]);
					var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
					if ( HomeFilter ==  "CUSTODUE")
					{
						sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Account Overdue Summary for" + " " + obj.Customer);
					}
					else if (HomeFilter == "CUSTDUE")
					{
						sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Account Due Today Summary for" + " " + obj.Customer);
					}
					else if (HomeFilter == "CUSTUPRW")
					{
						sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Account Upcoming Review Summary for" + " " + obj.Customer);
					}
//					oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
					oTab.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4]});
				}



				var oShell = sap.ui.getCore().byId("AdminShell");
				oShell.setContent(FMANAGERHOME);
			}
			else if (urole == 'MANAGER')
			{
				sap.ui.getCore().byId("masrf").setVisible(false);
				sap.ui.getCore().byId("Manager-Fieldsearch").setVisible(false);
				sap.ui.getCore().byId("ManagerDP").setVisible(false);
				sap.ui.getCore().byId("Managersearchinput").setVisible(false);	
				sap.ui.getCore().byId("Manager-Fieldsearchkey").setVisible(false);
				sap.ui.getCore().byId("ManagerCheckPromosSearch").setVisible(false);
				sap.ui.getCore().byId("ManagerApply").setVisible(false);
				sap.ui.getCore().byId("ManagerReset").setVisible(false);	
				sap.ui.getCore().byId("ManagerExport").setVisible(false);
				if( obj.Internid != '' )
				{
					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
					var f3 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:obj.Internid}]);
					var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
					var f5 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"INTERN"}]);
					if ( HomeFilter ==  "INTERNOVER")
					{
						sap.ui.getCore().byId("FMANAGER1").setTitle("Manager: Intern Overdue Summary for" + " " + obj.Internid);
					}
					else if (HomeFilter == "INTERNDUE")
					{
						sap.ui.getCore().byId("FMANAGER1").setTitle("Manager: Intern DueToday Summary for" + " " + obj.Internid);
					}
					else if (HomeFilter == "INTERNUPRW")
					{
						sap.ui.getCore().byId("FMANAGER1").setTitle("Manager: Intern Upcoming Review Summary for" + " " + obj.Internid);
					}
//					oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
					oTab1.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4,f5]});
				}

				else if ( obj.SalesRep != '' )
				{
					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
					var f3 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:obj.SalesRep}]);
					var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
					var f5 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]);
					if ( HomeFilter ==  "SREPODUE")
					{
						sap.ui.getCore().byId("FMANAGER1").setTitle("Manager: SalesRep Overdue Summary for" + " " + obj.SalesRep);
					}
					else if (HomeFilter == "SREPDUE")
					{
						sap.ui.getCore().byId("FMANAGER1").setTitle("Manager: SalesRep Due Today Summary for" + " " + obj.SalesRep);
					}
					else if (HomeFilter == "SREPUPRW")
					{
						sap.ui.getCore().byId("FMANAGER1").setTitle("Manager: SalesRep Upcoming Review Summary for" + " " + obj.SalesRep);
					}
//					oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
					oTab1.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4,f5]});
				}
				else if ( obj.Customer != '' )
				{
					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"MANAGER"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"HOMEDATA"}]); 
					var f3 = new  sap.ui.model.odata.Filter('Customer', [{operator:"EQ",value1:obj.Customer}]);
					var f4 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:HomeFilter}]);
					if ( HomeFilter ==  "CUSTODUE")
					{
						sap.ui.getCore().byId("FMANAGER1").setTitle("Manager: Account Overdue Summary for" + " " + obj.Customer);
					}
					else if (HomeFilter == "CUSTDUE")
					{
						sap.ui.getCore().byId("FMANAGER1").setTitle("Manager: Account Due Today Summary for" + " " + obj.Customer);
					}
					else if (HomeFilter == "CUSTUPRW")
					{
						sap.ui.getCore().byId("FMANAGER1").setTitle("Manager: Account Upcoming Review Summary for" + " " + obj.Customer);
					}
//					oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
					oTab1.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4]});

				}

				var oShell = sap.ui.getCore().byId("AdminShell");
				oShell.setContent(FMANAGER);


			}	
			var oSelectedWorkSetItem = oShell.getSelectedWorksetItem();
			if ( oSelectedWorkSetItem == "mhome" )
			{
				oShell.setSelectedWorksetItem("mdummyItem");						
			}
			oTab.setFirstVisibleRow(0);
			oTab1.setFirstVisibleRow(0);
			//oTab.setVisibleRowCount(oTab._getRowCount());
			if(sap.ui.Device.system.phone){
				oTab.setVisibleRowCount(9);
				oTab1.setVisibleRowCount(9);


			}else{
				oTab.setVisibleRowCount(20);
				oTab1.setVisibleRowCount(20);

			}			//oTab1.setVisibleRowCount(oTab1._getRowCount());
			break;
		default:
			break;
		}
	},


});