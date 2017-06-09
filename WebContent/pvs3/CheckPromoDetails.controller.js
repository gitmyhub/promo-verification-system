sap.ui.controller("pvs3.CheckPromoDetails", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf pvs3.PromoDetails
	 */
	onInit: function() {
		//	this.router.attachRouteMatched(this.call , this);  
		var json = {};
		json.customer = "";
		var custmodel = new sap.ui.model.json.JSONModel();
		custmodel.setData(json);
		sap.ui.getCore().setModel(custmodel,"custmodel");

	},


	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf pvs3.PromoDetails
	 */
	onBeforeRendering: function() {
		//	window.location.reload();
		debugger;
		var promoid = sap.ui.getCore().byId("pid").getValue();

		var itemid = sap.ui.getCore().byId("pitemid").getValue();
		var weekid = sap.ui.getCore().byId("wid").getValue();
		var urole1 = sap.ui.getCore().byId("urole").getValue();
		var firstname = sap.ui.getCore().byId("firstname").getValue();
		/*			console.log(firstname);
			var shellfirstname = sap.ui.getCore().byId("fname");
		    shellfirstname.setText(firstname);*/	
		//********************Set User Name*******************************************//			
		var firstname = sap.ui.getCore().byId("firstname").getValue();
		var shellfname = sap.ui.getCore().byId("fname1");
		shellfname.setText(firstname);
//		*************To set Total on the top*****************************//		
		var urole = sap.ui.getCore().byId("urole").getValue();
		var shell =  sap.ui.getCore().byId("AdminShell").getSelectedWorksetItem();
		if ( urole == "ADMIN" )
		{
			if  ( shell == "minternres" || shell == "msrres" ) 
			{
				var PromoListTable = new sap.ui.table.Table({ id: "" });
				PromoListTable = sap.ui.getCore().byId("Manager_Admin");
				//var obj = sap.ui.getCore().byId("Manager_Admin").getModel().getProperty(path);
			}
			else if( shell == "mcheckpromo" ) {
				var PromoListTable = new sap.ui.table.Table({ id: "" });
				PromoListTable = sap.ui.getCore().byId("CheckPromos"); 

			}
			else
			{
				var PromoListTable = new sap.ui.table.Table({ id: "" });
				PromoListTable = sap.ui.getCore().byId("Manager_Admin_Home");
			}
		}
		else 
		{
			var PromoListTable = new sap.ui.table.Table({ id: "" });
			PromoListTable = sap.ui.getCore().byId("CheckPromos");
			// 	var obj = sap.ui.getCore().byId("CheckPromos").getModel().getProperty(path);
		}
		/*    END CODE*/
		//var model = this.getModel();
		TotalRows = PromoListTable._getRowCount();

		var remainingCount = TotalRows;		

		var form4 = sap.ui.getCore().byId("F4");
		var title = new sap.ui.core.Title("");
		title.setText("Check Promotion Details: "+remainingCount+" remaining promos for review");
		form4.setTitle(title);
//		*******************Total ends***********************************
		//	var  firstname = sap.ui.getCore().byId("uname");
		//    firstname.setText(firstname);

		//********************Function to set details to Promo Details Page************//
		this.fillPageData(promoid, itemid, weekid);

		//*******************************************vinay***********************************//
		var oShell = sap.ui.getCore().byId("myShell2");
		oShell.setSelectedWorksetItem("dummyItem_pd");
		if ( urole1 == 'SALESREP')
		{
			sap.ui.getCore().byId("home_pd").setVisible(true);
			sap.ui.getCore().byId("searchpromo_pd").setVisible(true);
			sap.ui.getCore().byId("searchacc_pd").setVisible(true);
			// sap.ui.getCore().byId("chng_pass").setVisible(true);
			sap.ui.getCore().byId("checkpromo_pd").setVisible(true);
			sap.ui.getCore().byId("internres_pd").setVisible(false);
			sap.ui.getCore().byId("srres_pd").setVisible(false);
			sap.ui.getCore().byId("reassign_pd").setVisible(false);

		}else if ( urole1 == 'ADMIN')
		{
			sap.ui.getCore().byId("home_pd").setVisible(true);
			sap.ui.getCore().byId("searchpromo_pd").setVisible(true);
			sap.ui.getCore().byId("searchacc_pd").setVisible(true);
			// sap.ui.getCore().byId("chng_pass").setVisible(true);
			sap.ui.getCore().byId("checkpromo_pd").setVisible(true);
			sap.ui.getCore().byId("internres_pd").setVisible(true);
			sap.ui.getCore().byId("srres_pd").setVisible(true);
			sap.ui.getCore().byId("reassign_pd").setVisible(true);
		}
		else if ( urole1 == 'MANAGER')
		{
			sap.ui.getCore().byId("home_pd").setVisible(true);
			sap.ui.getCore().byId("searchpromo_pd").setVisible(true);
			sap.ui.getCore().byId("searchacc_pd").setVisible(true);
			// sap.ui.getCore().byId("chng_pass").setVisible(true);
			sap.ui.getCore().byId("checkpromo_pd").setVisible(false);
			sap.ui.getCore().byId("internres_pd").setVisible(false);
			sap.ui.getCore().byId("srres_pd").setVisible(false);
			sap.ui.getCore().byId("reassign_pd").setVisible(false);
		}
		else 
		{
			sap.ui.getCore().byId("home_pd").setVisible(true);
			sap.ui.getCore().byId("searchpromo_pd").setVisible(true);
			sap.ui.getCore().byId("searchacc_pd").setVisible(true);
			// sap.ui.getCore().byId("chng_pass").setVisible(true);
			sap.ui.getCore().byId("checkpromo_pd").setVisible(true);
			sap.ui.getCore().byId("internres_pd").setVisible(false);
			sap.ui.getCore().byId("srres_pd").setVisible(false);
			sap.ui.getCore().byId("reassign_pd").setVisible(false);
		}

		//**********************************end***************************//

	},
	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf pvs3.PromoDetails
	 */
	onAfterRendering: function() {
		if(sap.ui.Device.system.desktop || sap.ui.Device.system.combi || ( sap.ui.Device.os.name == "win" )){
			$("#copyimage").load("ImageCopier.html");
		}


		//*********************************************vinay************************************//
		/*$('#myShell2-wsBar-list').hide();
		$('#myShell2-wsBar').hide();
		$('#myShell2-wBar').hide();*/
		//*********************************************end**************************************//
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
		//var img = document.getElementById("myShell2-logoImg");
		//img.css({'height' : '42px', 'max-height' : '42px'});
		//img.style.maxheight = "42px";
		$('#myShell2-logoImg').css({'height' : '42px', 'max-height' : '42px'});

		//$('#myShell2-logoImg').

	},


	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf pvs3.PromoDetails
	 */
	onExit: function() {
		//debugger;
		console.log("On exit has been triggered....");
	},




	/************new Version Code***********************************/	
	fillPageData : function(promoid, itemid, weekid){




		sap.ui.getCore().byId("next").setEnabled(false);
		sap.ui.getCore().byId("back").setEnabled(true);
		sap.ui.getCore().byId("previous").setEnabled(false);
		sap.ui.getCore().byId("submit").setEnabled(false);
		sap.ui.getCore().byId("reset").setEnabled(false);

		var promodetails = {
				"odata.type": "DETAILS.promo_verification_system.PromoDetails",
				"PROMOID" : promoid,
				"ITEMID":  itemid,
				"WEEKID":  weekid,

		};
		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
		var oModel3 = new sap.ui.model.odata.ODataModel(sServiceUrl,
				false);	


		oModel3.callFunction("DETAILS",
				"GET",   
				{
			"PROMOID" :  promoid,
			"ITEMID":    itemid,
			"WEEKID":    weekid,

				},
				null,

				function(oData, response){
					debugger;  		
					var promoitem;
					promoitem = +oData.Promoid +'/' +oData.Itemid;
					sap.ui.getCore().getElementById("TF-PI-Id").setValue(promoitem);
					if (sap.ui.getCore().byId("TF-P-Id") == null){  			
						promoi = new sap.m.Input("TF-P-Id");
					}
					promoi.setValue(oData.Promoid);
					sap.ui.getCore().getElementById("TF-Itemid").setValue(oData.Itemid);
					irmir =  +oData.Iramount +'/' +oData.Miramount;
					sap.ui.getCore().getElementById("TF-P-IR").setValue(irmir);
					sap.ui.getCore().getElementById("TF-Cust-ID").setValue(oData.Customer);
					var custmodel =	sap.ui.getCore().getModel("custmodel");
					customer = custmodel.getData().customer;
					if(customer != ""){
						if(customer != oData.Customer){
							sap.m.MessageToast.show("Account Has Changed");
						}
					}
					var json = {};
					json.customer = oData.Customer;
					custmodel.setData(json);
					sap.ui.getCore().setModel(custmodel,"custmodel");
					sap.ui.getCore().getElementById("TF-Cust-Name").setValue(oData.Customername);
					sap.ui.getCore().getElementById("TF-Srep").setValue(oData.Salesrep);

					if (oData.Checkfrom != null )
					{
						var cFrom = oData.Checkfrom;
						cFrom = cFrom.split("T");
						cFrom = cFrom[0];
						var year = cFrom.substring(0,4);
						var mon  = cFrom.substring(5,7);
						var date = cFrom.substring(8,10);
						cFrom = mon + '/' +date+ '/' +year;

						sap.ui.getCore().getElementById("TF-C-Fdate").setValue(cFrom);

					}

					if (oData.Promofrom != null )
					{
						var pFrom = oData.Promofrom;
						pFrom = pFrom.split("T");
						pFrom = pFrom[0];
						var year1 = pFrom.substring(0,4);
						var mon1  = pFrom.substring(5,7);
						var date1 = pFrom.substring(8,10);
						pFrom = mon1 + '/' +date1+ '/' +year1;

						//sap.ui.getCore().getElementById("TF-P-Fdate").setValue(pFrom);
						sap.ui.getCore().getElementById("TF-P-Fdate").setValue(pFrom);

					}

					if (oData.Promoto != null )					
					{
						var pTo = oData.Promoto;				
						pTo = pTo.split("T");
						pTo = pTo[0];
						year = pTo.substring(0,4);
						mon  = pTo.substring(5,7);
						date = pTo.substring(8,10);
						pTo = mon + '/' +date+ '/' +year;
						sap.ui.getCore().getElementById("TF-P-Tdate").setValue(pTo);
					}
					//*****************Vinay end changed*****************************// 

					//*****************Vinay end changed*****************************// 

					sap.ui.getCore().getElementById("TF-P-Pro").setValue(oData.Product);
					sap.ui.getCore().getElementById("TF-P-Website").setText(oData.Website);
					sap.ui.getCore().getElementById("TF-Channel").setValue(oData.Channel);					
					sap.ui.getCore().getElementById("TF-P-Type").setValue(oData.Plantype+'/'+oData.Channel);
					sap.ui.getCore().getElementById("TF-P-How").setValue(oData.Advtype);
					sap.ui.getCore().getElementById("TF-P-CustPart").setValue(oData.Partid);
					sap.ui.getCore().getElementById("TF-P-ItemStat").setValue(oData.Status);
					sap.ui.getCore().getElementById("TF-P-Pri").setValue(oData.Price);

//					Intern Review Summary  - 1ST Cycle
					var compOn;
					var str1;
					var str2;
					//Completed on for Intern
					if (oData.Completedon != null ) 
					{
						compOn = oData.Completedon;
						compOn = compOn.split("T");
						compOn = compOn[0];
					}
					var compAt;
					//Completed At for Intern
					if (oData.Completedat != null ) 
					{
						compAt = oData.Completedat;
						compAt = compAt.split("T");
						str2 = compAt[1];
						str2 = str2.replace("H", ':');
						str2 = str2.replace("M", ':');
						str2 = str2.replace("S", '');

					}
					//Concatenate for Intern time stamp 
					if (oData.Completedon != null && oData.Completedat != null ) 
					{
						str1 = compOn;
						str2 = str1 + ' ' + str2;																																																																	
					}
					sap.ui.getCore().getElementById("TF-II").setValue(oData.Userid);
					if ( str2 != null )
					{
						sap.ui.getCore().getElementById("TF-ITS").setValue(str2);	
					}
					//To pass Check Responses text to Intern Reports
					var checkresp1;
					var checktext;
					checkresp1 = oData.Checkresp;
					//Function to covert check responses to text stored in ZPVSRESPONSES table CHECKRESP field
					var chktxt = CheckPromoDetails_checkresponse ( checkresp1, checktext );
					if ( chktxt != null )
					{
						sap.ui.getCore().getElementById("TF-Irep").setValue(chktxt);
					}
					sap.ui.getCore().getElementById("TF-Irea").setValue(oData.Inaccursns);
					sap.ui.getCore().getElementById("TF-Icomm").setValue(oData.Comments);
					sap.ui.getCore().getElementById("TF-Accinfo").setValue(oData.Accinfo);

//					Sales Rep Review Summary - 1ST Cycle	
					var compOn1;
					var str3;
					var str4;
					var str5;
					var compAt1;
					//Completed on for Intern
					if (oData.Srepcompon != null ) 
					{
						compOn1 = oData.Srepcompon;
						compOn1 = compOn1.split("T");
						compOn1 = compOn1[0];
					}

					//Completed At for Intern
					if (oData.Srepcompon != null ) 
					{
						compAt1 = oData.Srepcompat;
						compAt1 = compAt1.split("T");
						str3 = compAt1[1];
						str3 = str3.replace("H", ':');
						str3 = str3.replace("M", ':');
						str3 = str3.replace("S", '');

					}
					//Concatenate for Sales Rep time stamp 
					if (oData.Srepcompon != null && oData.Srepcompat != null ) 
					{
						str4 = compOn1;
						str5 = str4 + ' ' + str3;																																																																	
					}
					sap.ui.getCore().getElementById("TF-SI").setValue(oData.Srepini);
					if ( str5 != null )
					{
						sap.ui.getCore().getElementById("TF-STS").setValue(str5);
					}
					//To pass Check Responses text to Intern Reports
					var checkresp2;
					var checktext1;
					checkresp2 = oData.Srepresp;
					//Function to covert check responses to text stored in ZPVSRESPONSES table CHECKRESP field
					var chktxt1 = CheckPromoDetails_checkresponse ( checkresp2, checktext1 );
					if ( chktxt1 != null )
					{
						sap.ui.getCore().getElementById("TF-Srept").setValue(chktxt1);
					}
					sap.ui.getCore().getElementById("TF-Srea").setValue(oData.Srepreas);
					sap.ui.getCore().getElementById("TF-Scomm").setValue(oData.Srepcomm);


					//Admin Review Summary - 1ST Cycle
					var str6;
					//Completed on for Intern
					if (oData.Admincomon != null ) 
					{
						compOn1 = oData.Admincomon;
						compOn1 = compOn1.split("T");
						compOn1 = compOn1[0];
					}

					//Completed At for Intern
					if (oData.Admincomat != null ) 
					{
						compAt1 = oData.Admincomat;
						compAt1 = compAt1.split("T");
						str3 = compAt1[1];
						str3 = str3.replace("H", ':');
						str3 = str3.replace("M", ':');
						str3 = str3.replace("S", '');

					}
					//Concatenate for Sales Rep time stamp 
					if (oData.Admincomon != null && oData.Admincomat != null ) 
					{
						str4 = compOn1;
						str6 = str4 + ' ' + str3;																																																																	
					}
					sap.ui.getCore().getElementById("TF-AI").setValue(oData.Admini);
					if ( str6 != null )
					{
						sap.ui.getCore().getElementById("TF-ATS").setValue(str6);	
					}
					//To pass Check Responses text to Intern Reports
					checkresp2 = oData.Admresp;
					//Function to covert check responses to text stored in ZPVSRESPONSES table CHECKRESP field
					var chktxtresp = CheckPromoDetails_checkresponse ( checkresp2, checktext1 );
					if ( chktxtresp != null )
					{
						sap.ui.getCore().getElementById("TF-Arept").setValue(chktxtresp);
					}
					sap.ui.getCore().getElementById("TF-Area").setValue(oData.Admreas);
					sap.ui.getCore().getElementById("TF-Acomm").setValue(oData.Admcomm);



//					Intern Review Summary  - 2nd Cycle
					var str20;
					//Completed on for Intern
					if (oData.Intcompon2 != null ) 
					{
						compOn = oData.Intcompon2;
						compOn = compOn.split("T");
						compOn = compOn[0];
					}
					var compAt;
					//Completed At for Intern
					if (oData.Intcompat2 != null ) 
					{
						compAt = oData.Intcompat2;
						compAt = compAt.split("T");
						str2 = compAt[1];
						str2 = str2.replace("H", ':');
						str2 = str2.replace("M", ':');
						str2 = str2.replace("S", '');

					}
					//Concatenate for Intern time stamp 
					if (oData.Intcompon2 != null && oData.Intcompat2 != null ) 
					{
						str1 = compOn;
						str20 = str1 + ' ' + str2;																																																																	
					}
					sap.ui.getCore().getElementById("TF-II2").setValue(oData.Intini2);
					if ( str20 != null )
					{
						sap.ui.getCore().getElementById("TF-ITS2").setValue(str20);	
					}
					//To pass Check Responses text to Intern Reports
					var checkresp1;
					var checktext;
					checkresp1 = oData.Intresp2;
					//Function to covert check responses to text stored in ZPVSRESPONSES table CHECKRESP field
					var chktxt = CheckPromoDetails_checkresponse ( checkresp1, checktext );
					if ( chktxt != null )
					{
						sap.ui.getCore().getElementById("TF-Irep2").setValue(chktxt);
					}
					sap.ui.getCore().getElementById("TF-Irea2").setValue(oData.Intreas2);
					sap.ui.getCore().getElementById("TF-Icomm2").setValue(oData.Intcomm2);



//					Sales Rep Review Summary - 2nd Cycle	
					var compOn1;
					var str3;
					var str4;
					var str50;
					var compAt1;
					//Completed on for Intern
					if (oData.Srepcompon2 != null ) 
					{
						compOn1 = oData.Srepcompon2;
						compOn1 = compOn1.split("T");
						compOn1 = compOn1[0];
					}

					//Completed At for Intern
					if (oData.Srepcompat2 != null ) 
					{
						compAt1 = oData.Srepcompat2;
						compAt1 = compAt1.split("T");
						str3 = compAt1[1];
						str3 = str3.replace("H", ':');
						str3 = str3.replace("M", ':');
						str3 = str3.replace("S", '');

					}
					//Concatenate for Sales Rep time stamp 
					if (oData.Srepcompon2 != null && oData.Srepcompat2 != null ) 
					{
						str4 = compOn1;
						str50 = str4 + ' ' + str3;																																																																	
					}
					sap.ui.getCore().getElementById("TF-SI2").setValue(oData.Srepini2);
					if ( str50 != null )
					{
						sap.ui.getCore().getElementById("TF-STS2").setValue(str50);
					}
					//To pass Check Responses text to Intern Reports
					var checkresp2;
					var checktext1;
					checkresp2 = oData.Srepresp2;
					//Function to covert check responses to text stored in ZPVSRESPONSES table CHECKRESP field
					var chktxt1 = CheckPromoDetails_checkresponse ( checkresp2, checktext1 );
					if ( chktxt1 != null )
					{
						sap.ui.getCore().getElementById("TF-Srept2").setValue(chktxt1);
					}
					sap.ui.getCore().getElementById("TF-Srea2").setValue(oData.Srepreas2);
					sap.ui.getCore().getElementById("TF-Scomm2").setValue(oData.Srepcomm2);


					//Admin Review Summary - 2nd Cycle
					var str60;
					//Completed on for Intern
					if (oData.Admincomon2 != null ) 
					{
						compOn1 = oData.Admincomon2;
						compOn1 = compOn1.split("T");
						compOn1 = compOn1[0];
					}

					//Completed At for Intern
					if (oData.Admincomat2 != null ) 
					{
						compAt1 = oData.Admincomat2;
						compAt1 = compAt1.split("T");
						str3 = compAt1[1];
						str3 = str3.replace("H", ':');
						str3 = str3.replace("M", ':');
						str3 = str3.replace("S", '');

					}
					//Concatenate for Sales Rep time stamp 
					if (oData.Admincomon2 != null && oData.Admincomat2 != null ) 
					{
						str4 = compOn1;
						str60 = str4 + ' ' + str3;																																																																	
					}
					sap.ui.getCore().getElementById("TF-AI2").setValue(oData.Admini2);
					if ( str60 != null )
					{
						sap.ui.getCore().getElementById("TF-ATS2").setValue(str60);	
					}
					//To pass Check Responses text to Intern Reports
					checkresp2 = oData.Admresp2;
					//Function to covert check responses to text stored in ZPVSRESPONSES table CHECKRESP field
					var chktxtresp = CheckPromoDetails_checkresponse ( checkresp2, checktext1 );
					if ( chktxtresp != null )
					{
						sap.ui.getCore().getElementById("TF-Arept2").setValue(chktxtresp);
					}
					sap.ui.getCore().getElementById("TF-Area2").setValue(oData.Admreas2);
					sap.ui.getCore().getElementById("TF-Acomm2").setValue(oData.Admcomm2);
//					*************vinay end added*************************************************************



					sap.ui.getCore().byId("display_image1").setVisible(true);
					sap.ui.getCore().byId("display_image2").setVisible(true);
					sap.ui.getCore().byId("display_image3").setVisible(true);
					sap.ui.getCore().byId("display_image4").setVisible(true);
					sap.ui.getCore().byId("display_image5").setVisible(true);
					sap.ui.getCore().byId("display_image6").setVisible(true);
					sap.ui.getCore().byId("display_image7").setVisible(true);
					sap.ui.getCore().byId("display_image8").setVisible(true);
					sap.ui.getCore().byId("display_image9").setVisible(true);
					sap.ui.getCore().byId("display_image10").setVisible(true);

					sap.ui.getCore().byId("display_simage1").setVisible(true);
					sap.ui.getCore().byId("display_simage2").setVisible(true);
					sap.ui.getCore().byId("display_simage3").setVisible(true);
					sap.ui.getCore().byId("display_simage4").setVisible(true);
					sap.ui.getCore().byId("display_simage5").setVisible(true);
					sap.ui.getCore().byId("display_simage6").setVisible(true);
					sap.ui.getCore().byId("display_simage7").setVisible(true);
					sap.ui.getCore().byId("display_simage8").setVisible(true);
					sap.ui.getCore().byId("display_simage9").setVisible(true);
					sap.ui.getCore().byId("display_simage10").setVisible(true);

					sap.ui.getCore().byId("display_aimage1").setVisible(true);
					sap.ui.getCore().byId("display_aimage2").setVisible(true);
					sap.ui.getCore().byId("display_aimage3").setVisible(true);
					sap.ui.getCore().byId("display_aimage4").setVisible(true);
					sap.ui.getCore().byId("display_aimage5").setVisible(true);
					sap.ui.getCore().byId("display_aimage6").setVisible(true);
					sap.ui.getCore().byId("display_aimage7").setVisible(true);
					sap.ui.getCore().byId("display_aimage8").setVisible(true);
					sap.ui.getCore().byId("display_aimage9").setVisible(true);
					sap.ui.getCore().byId("display_aimage10").setVisible(true);

					sap.ui.getCore().byId("display_i2mage1").setVisible(true);
					sap.ui.getCore().byId("display_i2mage2").setVisible(true);
					sap.ui.getCore().byId("display_i2mage3").setVisible(true);
					sap.ui.getCore().byId("display_i2mage4").setVisible(true);
					sap.ui.getCore().byId("display_i2mage5").setVisible(true);
					sap.ui.getCore().byId("display_i2mage6").setVisible(true);
					sap.ui.getCore().byId("display_i2mage7").setVisible(true);
					sap.ui.getCore().byId("display_i2mage8").setVisible(true);
					sap.ui.getCore().byId("display_i2mage9").setVisible(true);
					sap.ui.getCore().byId("display_i2mage10").setVisible(true);

					sap.ui.getCore().byId("display_s2image1").setVisible(true);
					sap.ui.getCore().byId("display_s2image2").setVisible(true);
					sap.ui.getCore().byId("display_s2image3").setVisible(true);
					sap.ui.getCore().byId("display_s2image4").setVisible(true);
					sap.ui.getCore().byId("display_s2image5").setVisible(true);
					sap.ui.getCore().byId("display_s2image6").setVisible(true);
					sap.ui.getCore().byId("display_s2image7").setVisible(true);
					sap.ui.getCore().byId("display_s2image8").setVisible(true);
					sap.ui.getCore().byId("display_s2image9").setVisible(true);
					sap.ui.getCore().byId("display_s2image10").setVisible(true);

					sap.ui.getCore().byId("display_a2image1").setVisible(true);
					sap.ui.getCore().byId("display_a2image2").setVisible(true);
					sap.ui.getCore().byId("display_a2image3").setVisible(true);
					sap.ui.getCore().byId("display_a2image4").setVisible(true);
					sap.ui.getCore().byId("display_a2image5").setVisible(true);
					sap.ui.getCore().byId("display_a2image6").setVisible(true);
					sap.ui.getCore().byId("display_a2image7").setVisible(true);
					sap.ui.getCore().byId("display_a2image8").setVisible(true);
					sap.ui.getCore().byId("display_a2image9").setVisible(true);
					sap.ui.getCore().byId("display_a2image10").setVisible(true);



//					*******************************Get Images*******************************************//   		
					debugger;
					var sectionrenderobj = { Intern1_Rendered : "",
							//	AdminAsInternDummy_Rendered: "",   // need this because we are unable to determine which flowType shows up in Intern1 section
							Salesrep1_Rendered: "",
							Admin1_Rendered: "",
							Intern2_Rendered: "",
							Salesrep2_Rendered: "",
							Admin2_Rendered: "",
							Responses_Rendered: "",
							ALLSAPCALLSCOMPLETED: false,
					};
					var section = "";
					var flowType;
					var ImageId = 1;
					var checkId =  0;//+oData.Checkid - 1;
					if ( oData.Flowtype == "INTTOSREP" || oData.Flowtype == "SREPADMIN" || oData.Flowtype == "INTADM" || oData.Flowtype == "ADMTOSREP" || oData.Flowtype == "ADMASINT" || oData.Flowtype == "ADMTOINT")
					{

						/*****For Case (C) in the diagram because CheckID and flow type don't change when ADMASINT marks it as accurate******/
						if ( ( oData.Flowtype == 'ADMASINT' && oData.Checkid == 1 ) && ( oData.Status == "COMPLETED" || oData.Status == "CANCELLED" ) ){
							ImageId = 1;						
							checkId = 1;
							flowType = 'ADMASINT';  						

							//section.push("intern1");
							section = "Intern1";
							sectionrenderobj.Intern1_Rendered = "false";
//							sectionrenderobj.AdminAsInternDummy_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						}else if( oData.Checkid > 1 &&  oData.Excptnpromo == "X" )/*For Case(d)*/{

							if(oData.Checkid > 2 && oData.Srepini == "" ){ /* For Case(b) after the promo changes to an exceptional Promo*/

								ImageId = 1;						
								checkId = 1;
								flowType = 'INTERN';  						

								//section.push("intern1");
								section = "Intern1";
								sectionrenderobj.Intern1_Rendered = "false";
								debugger;
								CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);								

							}else{ /* For Case (d), case(i) and Case(j) */
								ImageId = 1;						
								checkId = 1;
								flowType = 'ADMASINT';  						

								//section.push("intern1");
								section = "Intern1";
								sectionrenderobj.Intern1_Rendered = "false";
								debugger;
								CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
							}

						}else if(oData.Checkid > 1 && oData.Excptnpromo == "")/*For Case(a) and Case(b) and Case(e) and Case(f) and Case(g) and Case(h)*/{

							ImageId = 1;						
							checkId = 1;
							flowType = 'INTERN';  						

							//section.push("intern1");
							section = "Intern1";
							sectionrenderobj.Intern1_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

							if(oData.Flowtype == "INTADM" && ( oData.Status == "COMPLETED" || oData.Status == "CANCELLED") ){/* For Case (b) */

								ImageId = 1;
								checkId =  2;

								flowType = 'INTADM';
								section = 'Admin1';
								sectionrenderobj.Admin1_Rendered = "false";
								debugger;
								CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
							}

						}

					}

					if (  oData.Flowtype == "SREPADMIN" && oData.Checkid == 3 )   /* For Case (a) and Case (d) and Case(e) and Case(f)*/
					{

						ImageId = 1;
						checkId =  2;//+oData.Checkid - 1;

						flowType = 'INTTOSREP';
						//section.push("intern1");
						section = 'Salesrep1';
						sectionrenderobj.Salesrep1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED"){
							ImageId = 1;
							checkId = 3;
							flowType = 'SREPADMIN';
							section = 'Admin1';
							sectionrenderobj.Admin1_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}

					}



					if ( ( oData.Flowtype == "SREPADMIN" || oData.Flowtype == "INTTOSREP" || oData.Flowtype == "INTADM") && oData.Checkid == 5 && oData.Srepini != ""){ /* For Case(a) and Case(d) and Case(e) and Case(f) and Case(i)*/

						ImageId = 1;
						checkId =  2;//+oData.Checkid - 1;

						flowType = 'INTTOSREP';
						//section.push("intern1");
						section = 'Salesrep1';
						sectionrenderobj.Salesrep1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						ImageId = 1;
						checkId = 3;
						flowType = 'SREPADMIN';
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Flowtype == "SREPADMIN"){
							ImageId = 1;
							checkId = 4;
							flowType = 'ADMTOSREP';
							section = 'Salesrep2';
							sectionrenderobj.Salesrep2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}else if(oData.Flowtype == "INTTOSREP" || oData.Flowtype == "INTADM")/*for Case(e) OR Case(f) and Case(i)*/{
							if(oData.Excptnpromo == "X")/* for Case(i) */{
								ImageId = 1;
								checkId = 4;
								flowType = 'ADMASINT';
								section = 'Intern2';
								sectionrenderobj.Intern2_Rendered = "false";
								debugger;
								CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);								
							}else/* for Case(e) */{					
								ImageId = 1;
								checkId = 4;
								flowType = 'ADMTOINT';
								section = 'Intern2';
								sectionrenderobj.Intern2_Rendered = "false";
								debugger;
								CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
							}
						}

						if(oData.Flowtype == "SREPADMIN" && (oData.Status == "COMPLETED" || oData.Status == "CANCELLED" ) )/*for Case(a) */{
							ImageId = 1;
							checkId = 5;
							flowType = 'SREPADMIN';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}else if(oData.Flowtype == "INTADM" && (oData.Status == "COMPLETED" || oData.Status == "CANCELLED" ) )/* For Case(f)*/{
							ImageId = 1;
							checkId = 5;
							flowType = 'INTADM';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);						
						}
					}else if( oData.Flowtype == "SREPADMIN" && oData.Checkid == 5 && oData.Srepini == ""){ /* For Case (b) and Case(g) */

						checkId = 2;
						flowType = 'INTADM';
						ImageId =  1;
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						if( oData.Excptnpromo == "X" )/*for Case(b)*/{
							checkId = 3;
							flowType = 'ADMASINT';
							ImageId = 1;
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}else/*for Case(g)*/{
							checkId = 3;
							flowType = 'ADMTOINT';
							ImageId = 1;
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						}
						ImageId = 1;
						checkId =  4;//+oData.Checkid - 1;
						flowType = 'INTTOSREP';    
						section = 'Salesrep2';
						sectionrenderobj.Salesrep2_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED"){
							ImageId = 1;
							checkId = 5;
							flowType = 'SREPADMIN';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}


					}/*else if( oData.Flowtype == "SREPADMIN" && oData.Checkid == 5 && oData.Excptnpromo == "X" && oData.Srepini != ""){

						ImageId = 1;
						checkId =  2;//+oData.Checkid - 1;

						flowType = 'INTTOSREP';
						//section.push("intern1");
						section = 'Salesrep1';
						sectionrenderobj.Salesrep1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						ImageId = 1;
						checkId = 3;
						flowType = 'SREPADMIN';
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						ImageId = 1;
						checkId = 4;
						flowType = 'ADMTOSREP';
						section = 'Salesrep2';
						sectionrenderobj.Salesrep2_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED"){
							ImageId = 1;
							checkId = 5;
							flowType = 'SREPADMIN';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}


					} */

					if(oData.Flowtype == "SREPADMIN" && oData.Checkid == 6)/* For Case(e) and Case(i)*/{
						ImageId = 1;
						checkId =  2;//+oData.Checkid - 1;

						flowType = 'INTTOSREP';
						//section.push("intern1");
						section = 'Salesrep1';
						sectionrenderobj.Salesrep1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						ImageId = 1;
						checkId = 3;
						flowType = 'SREPADMIN';
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						if(oData.Excptnpromo == ""){
							ImageId = 1;
							checkId = 4;
							flowType = 'ADMTOINT';
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);	
						}else{
							ImageId = 1;
							checkId = 4;
							flowType = 'ADMASINT';
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);	

						}
						ImageId = 1;
						checkId =  5;//+oData.Checkid - 1;
						flowType = 'INTTOSREP';    
						section = 'Salesrep2';
						sectionrenderobj.Salesrep2_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED"){
							ImageId = 1;
							checkId = 6;
							flowType = 'SREPADMIN';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}


					}

					if ( (oData.Flowtype == "ADMTOSREP" && oData.Checkid == 4) || (oData.Flowtype == "ADMTOINT" && oData.Checkid == 4) || (oData.Flowtype == "ADMASINT" && oData.Checkid == 4)){/*For Case(a) and Case (d) and Case(e) and Case(f) and Case(i) and Case(j)*/

						ImageId = 1;
						checkId =  2;
						flowType = 'INTTOSREP';
						section = 'Salesrep1';
						sectionrenderobj.Salesrep1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						ImageId = 1;
						checkId = 3;
						flowType = 'SREPADMIN';
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						
						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED"){
							ImageId = 1;
							checkId = 4;
							flowType = 'ADMASINT';
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}

					}

					if ( ( oData.Flowtype == "ADMASINT" || oData.Flowtype == "ADMTOINT") && +oData.Checkid == 3)   /* For Case (b) and Case(g)*/
					{
						ImageId = 1;
						checkId =  2;

						flowType = 'INTADM';
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if( oData.Flowtype == "ADMASINT" && (oData.Status == "COMPLETED" || oData.Status == "CANCELLED") ){

							checkId = 3;
							flowType = 'ADMASINT';
							ImageId = 1;
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}
					}

					if ( ( oData.Flowtype == "INTTOSREP" || oData.Flowtype == "INTADM") && +oData.Checkid == 4)   /* For Case (b) and Case(g) and Case(h)*/
					{
						ImageId = 1;
						checkId =  2;

						flowType = 'INTADM';
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Excptnpromo == "X"){
							checkId = 3;
							flowType = 'ADMASINT';
							ImageId = 1;
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}else/*for Case(g) and Case(h)*/{
							checkId = 3;
							flowType = 'ADMTOINT';
							ImageId = 1;
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);						
						}
						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED")/*for Case(h) */{
							ImageId = 1;
							checkId = 4;
							flowType = 'INTADM';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}

					}

					if(oData.Flowtype != ""){
						sectionrenderobj.Responses_Rendered = "false";
						CheckPromoDetails_GetResponses(oData.Flowtype, sectionrenderobj);
					}

					if ( ( oData.Flowtype == "INTERN" ) || ( oData.Flowtype == "ADMASINT" && oData.Checkid == 1 && oData.Status == "ADMIN") )  
					{
						sap.ui.getCore().byId("back").setEnabled(true);
						sap.ui.getCore().byId("previous").setEnabled(true);
						sap.ui.getCore().byId("next").setEnabled(true);
						sap.ui.getCore().byId("submit").setEnabled(true);
						sap.ui.getCore().byId("reset").setEnabled(true);
					}

					sectionrenderobj.ALLSAPCALLSCOMPLETED = true;

					debugger;
					if ( ( sectionrenderobj.Intern1_Rendered != "false") && ( sectionrenderobj.Salesrep1_Rendered != "false") && ( sectionrenderobj.Admin1_Rendered != "false") 
							&& ( sectionrenderobj.Intern2_Rendered != "false") && ( sectionrenderobj.Salesrep2_Rendered != "false") && ( sectionrenderobj.Admin2_Rendered != "false") 
							&& ( sectionrenderobj.ALLSAPCALLSCOMPLETED != false ) && (sectionrenderobj.Responses_Rendered != "false")){

						sap.ui.getCore().byId("back").setEnabled(true);
						sap.ui.getCore().byId("previous").setEnabled(true);
						sap.ui.getCore().byId("next").setEnabled(true);
						sap.ui.getCore().byId("submit").setEnabled(true);
						sap.ui.getCore().byId("reset").setEnabled(true);
						CheckPromoDetails_HideEmptyImageContainers();

					}	

					$("#img1").css('background-image', 'none');
					$("#img2").css('background-image', 'none');
					$("#img3").css('background-image', 'none');
					$("#img4").css('background-image', 'none');
					$("#img5").css('background-image', 'none');
					$("#img6").css('background-image', 'none');
					$("#img7").css('background-image', 'none');
					$("#img8").css('background-image', 'none');
					$("#img9").css('background-image', 'none');
					$("#img10").css('background-image', 'none');

					if(!(document.getElementById('img1') == null)){
						document.getElementById("img1").innerHTML = "&lt;&lt; Image 1 >>";
					}
					if(!(document.getElementById('img2') == null))
						document.getElementById("img2").innerHTML = "&lt;&lt; Image 2 >>";
					if(!(document.getElementById('img3') == null))
						document.getElementById("img3").innerHTML = "&lt;&lt; Image 3 >>";
					if(!(document.getElementById('img4') == null))
						document.getElementById("img4").innerHTML = "&lt;&lt; Image 4 >>";
					if(!(document.getElementById('img5') == null))
						document.getElementById("img5").innerHTML = "&lt;&lt; Image 5 >>";
					if(!(document.getElementById('img6') == null))
						document.getElementById("img6").innerHTML = "&lt;&lt; Image 6 >>";
					if(!(document.getElementById('img7') == null))
						document.getElementById("img7").innerHTML = "&lt;&lt; Image 7 >>";
					if(!(document.getElementById('img8') == null))
						document.getElementById("img8").innerHTML = "&lt;&lt; Image 8 >>";
					if(!(document.getElementById('img9') == null))
						document.getElementById("img9").innerHTML = "&lt;&lt; Image 9 >>";
					if(!(document.getElementById('img10') == null))
						document.getElementById("img10").innerHTML = "&lt;&lt; Image 10 >>";

					debugger;


					if(!(document.getElementById('fileval1') == null)){
						document.getElementById('fileval1').innerHTML = "";
					}
					if(!(document.getElementById('fileval2') == null)){
						document.getElementById('fileval2').innerHTML = "";
					}					
					if(!(document.getElementById('fileval3') == null)){
						document.getElementById('fileval3').innerHTML = "";
					}					
					if(!(document.getElementById('fileval4') == null)){
						document.getElementById('fileval4').innerHTML = "";
					}
					if(!(document.getElementById('fileval5') == null)){
						document.getElementById('fileval5').innerHTML = "";
					}
					if(!(document.getElementById('fileval6') == null)){
						document.getElementById('fileval6').innerHTML = "";
					}
					if(!(document.getElementById('fileval7') == null)){
						document.getElementById('fileval7').innerHTML = "";
					}
					if(!(document.getElementById('fileval8') == null)){
						document.getElementById('fileval8').innerHTML = "";
					}
					if(!(document.getElementById('fileval9') == null)){
						document.getElementById('fileval9').innerHTML = "";
					}
					if(!(document.getElementById('fileval10') == null)){
						document.getElementById('fileval10').innerHTML = "";
					}



					/************** Get Images Ends*******************************/   		

					debugger;
					//console.log("Serial number is :", oData.Serialno);
					if (sap.ui.getCore().byId("promo") == null){  			
						promo = new sap.m.Input("promo");
					}
					promo.setValue(oData.Promoid);
					if (sap.ui.getCore().byId("fltyp") == null){  			
						flowtyp = new sap.m.Input("fltyp");
					}
					flowtyp.setValue(oData.Flowtype);
					if (sap.ui.getCore().byId("status") == null){  			
						status_dum = new sap.m.Input("status");
					}
					status_dum.setValue(oData.Status);
					if (sap.ui.getCore().byId("week") == null){  			
						week_dum = new sap.m.Input("week");
					}
					week_dum.setValue(oData.Weekid);
					if (sap.ui.getCore().byId("check") == null){  			
						check_dum = new sap.m.Input("check");
					}
					check_dum.setValue(oData.Checkid);
					if (sap.ui.getCore().byId("assigon") == null){  			
						assigon_dum = new sap.m.Input("assigon");
					}
					assigon_dum.setValue(oData.Assignedon);
					if (sap.ui.getCore().byId("assigat") == null){  			
						assigon_dum = new sap.m.Input("assigat");
					}
					assigon_dum.setValue(oData.Assignedon);    		

					if( ( oData.Flowtype == "INTERN" ))
					{

						//From Contains Radiobuttons and checkboxes for Intern
						sap.ui.getCore().byId("F65").setVisible(true);
						//Hide Form Contains radiobuttons with price of Sales Rep
						sap.ui.getCore().byId("F70").setVisible(false);
						//Show Intern Comments Text view with title
						sap.ui.getCore().byId("feAddcomminl").setVisible(true);
						sap.ui.getCore().byId("commin").setVisible(true);
						//Hide Sales Rep Comments Text view with title
						sap.ui.getCore().byId("feAddcommsrl").setVisible(false);
						sap.ui.getCore().byId("commsr").setVisible(false);
						//Hide Admin Comments Text view with title
						sap.ui.getCore().byId("commad").setVisible(false);
						sap.ui.getCore().byId("feAddcommadl").setVisible(false);
						//Hide Review Summary form container of Intern
						sap.ui.getCore().byId("F60C1IRS").setVisible(false);
						//Hide Review Summary form container of Sales Rep
						sap.ui.getCore().byId("F60C2SRS").setVisible(false);
						//Hide Review Summary form container of Admin
						sap.ui.getCore().byId("F60R3ARS").setVisible(false);
						//Hide Review Summary form container of Intern ---- 2nd Cycle
						sap.ui.getCore().byId("F60R4IRS2").setVisible(false);
						//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
						sap.ui.getCore().byId("F60R5SRS2").setVisible(false);
						//Hide Review Summary form container of Admin ---- 2nd Cycle
						sap.ui.getCore().byId("F60R6ARS2").setVisible(false);

					}
//*******************************vinay 11-07-2016**********************************************
//*If Admin press 'Intern Error - Reset' radio button then flow type become 'ADMTOINT'					
										else if( ( oData.Flowtype == "ADMTOINT" ))
										{

											//From Contains Radiobuttons and checkboxes for Intern
											sap.ui.getCore().byId("F65").setVisible(true);
											//Hide Form Contains radiobuttons with price of Sales Rep
											sap.ui.getCore().byId("F70").setVisible(false);
											//Show Intern Comments Text view with title
											sap.ui.getCore().byId("feAddcomminl").setVisible(true);
											sap.ui.getCore().byId("commin").setVisible(true);
											//Hide Sales Rep Comments Text view with title
											sap.ui.getCore().byId("feAddcommsrl").setVisible(false);
											sap.ui.getCore().byId("commsr").setVisible(false);
											//Hide Admin Comments Text view with title
											sap.ui.getCore().byId("commad").setVisible(false);
											sap.ui.getCore().byId("feAddcommadl").setVisible(false);
											//Review Summary form container of Intern
											if ( oData.Checkresp != "")
											{
												sap.ui.getCore().byId("F60C1IRS").setVisible(true);
											}
											else
											{
												sap.ui.getCore().byId("F60C1IRS").setVisible(false);
											}
											//Sales Rep Review Summary
											if ( oData.Srepresp != "")
											{
												sap.ui.getCore().byId("F60C2SRS").setVisible(true);
											}
											else
											{
												sap.ui.getCore().byId("F60C2SRS").setVisible(false);
											}
											//Admin Review Summary
											if ( oData.Admresp != "")
											{
												sap.ui.getCore().byId("F60R3ARS").setVisible(true);	
											}
											else
											{
												sap.ui.getCore().byId("F60R3ARS").setVisible(false);
											}

											//Review Summary form container of Intern ---- 2nd Cycle
											if ( oData.Intresp2 != "")
											{

												sap.ui.getCore().byId("F60R4IRS2").setVisible(true);
											}
											else
											{
												sap.ui.getCore().byId("F60R4IRS2").setVisible(false);
											}
											//Review Summary form container of Sales Rep ---- 2nd Cycle
											if ( oData.Srepresp2 != "")
											{
												sap.ui.getCore().byId("F60R5SRS2").setVisible(true);
											}
											else
											{
												sap.ui.getCore().byId("F60R5SRS2").setVisible(false);	
											}

											//Review Summary form container of Admin ---- 2nd Cycle
											if ( oData.Admresp2 != "")
											{
												sap.ui.getCore().byId("F60R6ARS2").setVisible(true);
											}
											else
											{
												sap.ui.getCore().byId("F60R6ARS2").setVisible(false);
											}

										}
										
//********************************************vinay end changes*************************************//						
					else if ( oData.Flowtype == "INTADM" )
					{

						if ( oData.Status !=  "COMPLETED" )
						{
							//Show Submit and Reset form when not in completed status
							sap.ui.getCore().byId("F90").setVisible(true);							
							//Show Add Comments form when not in completed status
							sap.ui.getCore().byId("F8").setVisible(true);
							//Show Radiobutton of Admin
							sap.ui.getCore().byId("F65").setVisible(true);							
							//Hide Not Sold By radio button
							//var orbg = sap.ui.getCore().getElementById("oRBG");	/*vinay*/
							//orbg.removeButton("notsold");						/*vinay*/							//Show Admin Comments Text view with title
							sap.ui.getCore().byId("feAddcommadl").setVisible(true);
							sap.ui.getCore().byId("commad").setVisible(true);
							//Hide Sales Rep Comments Text view with title
							sap.ui.getCore().byId("feAddcommsrl").setVisible(false);
							sap.ui.getCore().byId("commsr").setVisible(false);
							//Hide Intern Comments Text view with title
							sap.ui.getCore().byId("feAddcomminl").setVisible(false);
							sap.ui.getCore().byId("commin").setVisible(false);
							//Hide Form Contains radiobuttons with price of Sales Rep
							sap.ui.getCore().byId("F70").setVisible(false);
							//Hide Check Boxes form container for admin
							sap.ui.getCore().byId("F65C2CB").setVisible(false);
							//Hide Enter Price form container for admin
							sap.ui.getCore().byId("F65C3R2").setVisible(false);	
							//Hide Review Summary form container of Intern
							if ( oData.Checkresp != "")
							{
								sap.ui.getCore().byId("F60C1IRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60C1IRS").setVisible(false);
							}
							//Sales Rep Review Summary
							if ( oData.Srepresp != "")
							{
								sap.ui.getCore().byId("F60C2SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60C2SRS").setVisible(false);
							}
							//Admin Review Summary
							if ( oData.Admresp != "")
							{
								sap.ui.getCore().byId("F60R3ARS").setVisible(true);	
							}
							else
							{
								sap.ui.getCore().byId("F60R3ARS").setVisible(false);
							}

							//Review Summary form container of Intern ---- 2nd Cycle
							if ( oData.Intresp2 != "")
							{

								sap.ui.getCore().byId("F60R4IRS2").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60R4IRS2").setVisible(false);
							}
							//Review Summary form container of Sales Rep ---- 2nd Cycle
							if ( oData.Srepresp2 != "")
							{
								sap.ui.getCore().byId("F60R5SRS2").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60R5SRS2").setVisible(false);	
							}

							//Review Summary form container of Admin ---- 2nd Cycle
							if ( oData.Admresp2 != "")
							{
								sap.ui.getCore().byId("F60R6ARS2").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60R6ARS2").setVisible(false);
							}
						}

						else if ( oData.Status ==  "COMPLETED" )
						{

							//Hide Submit and Reset form when completed status
							sap.ui.getCore().byId("F90").setVisible(false);	
							//Hide Add Comments form when completed status
							sap.ui.getCore().byId("F8").setVisible(false);
							//Show Admin Comments Text view with title
							sap.ui.getCore().byId("feAddcommadl").setVisible(true);
							sap.ui.getCore().byId("commad").setVisible(true);
							//Hide Sales Rep Comments Text view with title
							sap.ui.getCore().byId("feAddcommsrl").setVisible(false);
							sap.ui.getCore().byId("commsr").setVisible(false);
							//Hide Intern Comments Text view with title
							sap.ui.getCore().byId("feAddcomminl").setVisible(false);
							sap.ui.getCore().byId("commin").setVisible(false);
							//From Contains Radiobuttons and checkboxes for Intern
							sap.ui.getCore().byId("F65").setVisible(false);
							//Hide Form Contains radiobuttons with price of Sales Rep
							sap.ui.getCore().byId("F70").setVisible(false);
							//Hide Check Boxes form container for admin
							sap.ui.getCore().byId("F65C2CB").setVisible(false);
							//Hide Enter Price form container for admin
							sap.ui.getCore().byId("F65C3R2").setVisible(false);	
							//Hide Review Summary form container of Intern
							if ( oData.Checkresp != "")
							{
								sap.ui.getCore().byId("F60C1IRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60C1IRS").setVisible(false);
							}
							//Sales Rep Review Summary
							if ( oData. Srepresp != "")
							{
								sap.ui.getCore().byId("F60C2SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60C2SRS").setVisible(false);
							}
							//Admin Review Summary
							if ( oData. Admresp != "")
							{
								sap.ui.getCore().byId("F60R3ARS").setVisible(true);	
							}
							else
							{
								sap.ui.getCore().byId("F60R3ARS").setVisible(false);
							}

							//Review Summary form container of Intern ---- 2nd Cycle
							if ( oData.Intresp2 != "")
							{
								sap.ui.getCore().byId("F60R4IRS2").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60R4IRS2").setVisible(false);
							}
							//Review Summary form container of Sales Rep ---- 2nd Cycle
							if ( oData. Srepresp2 != "" )
							{
								sap.ui.getCore().byId("F60R5SRS2").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60R5SRS2").setVisible(false);	
							}

							// Review Summary form container of Admin ---- 2nd Cycle
							if ( oData. Admresp2 != "")
							{
								sap.ui.getCore().byId("F60R6ARS2").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60R6ARS2").setVisible(false);
							}
						}

					}
					else if ( oData.Flowtype == "SREPADMIN" )
					{

						if ( oData.Status !=  "COMPLETED" )
						{
							//Show Submit and Reset form when not in completed status
							sap.ui.getCore().byId("F90").setVisible(true);							
							//Show Add Comments form when not in completed status
							sap.ui.getCore().byId("F8").setVisible(true);
							//Show Form Contains radiobuttons with price of Sales Rep
							sap.ui.getCore().byId("F70").setVisible(true);
							//From Contains Radiobuttons and checkboxes for Intern
							sap.ui.getCore().byId("F65").setVisible(false);
							//sap.ui.getCore().byId("notsoldpc").setVisible(false);
							//Show Admin Comments Text view with title
							sap.ui.getCore().byId("commad").setVisible(true);
							sap.ui.getCore().byId("feAddcommadl").setVisible(true);
							//Hide Sales Rep Comments Text view with title
							sap.ui.getCore().byId("feAddcommsrl").setVisible(false);
							sap.ui.getCore().byId("commsr").setVisible(false);
							//Hide Intern Comments Text view with title
							sap.ui.getCore().byId("feAddcomminl").setVisible(false);
							sap.ui.getCore().byId("commin").setVisible(false);
							//Intern Review Summary
							sap.ui.getCore().byId("F60C1IRS").setVisible(true);

							//Sales Rep Review Summary
							if ( oData. Srepresp != "")
							{
								sap.ui.getCore().byId("F60C2SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60C2SRS").setVisible(false);
							}

							//Admin Review Summary
							if ( oData.Admresp != "")
							{
								sap.ui.getCore().byId("F60R3ARS").setVisible(true);	
							}
							else
							{
								sap.ui.getCore().byId("F60R3ARS").setVisible(false);
							}
							//Hide Review Summary form container of Intern ---- 2nd Cycle
							if ( oData.Intresp2 != "")
							{

								sap.ui.getCore().byId("F60R4IRS2").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60R4IRS2").setVisible(false);
							}
							//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
							if ( oData. Srepresp2 != "")
							{
								sap.ui.getCore().byId("F60R5SRS2").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60R5SRS2").setVisible(false);	
							}
							//Hide Review Summary form container of Admin ---- 2nd Cycle
							sap.ui.getCore().byId("F60R6ARS2").setVisible(false);
						}

						else if ( oData.Status ==  "COMPLETED" )
						{

							//Hide Submit and Reset form when completed status
							sap.ui.getCore().byId("F90").setVisible(false);							
							//Hide Add Comments form when completed status
							sap.ui.getCore().byId("F8").setVisible(false);
							//Hide Form Contains radiobuttons with price of Sales Rep
							sap.ui.getCore().byId("F70").setVisible(false);
							//From Contains Radiobuttons and checkboxes for Intern
							sap.ui.getCore().byId("F65").setVisible(false);
							//sap.ui.getCore().byId("notsoldpc").setVisible(false);
							//Show Admin Comments Text view with title
							sap.ui.getCore().byId("commad").setVisible(false);
							sap.ui.getCore().byId("feAddcommadl").setVisible(false);
							//Hide Sales Rep Comments Text view with title
							sap.ui.getCore().byId("feAddcommsrl").setVisible(false);
							sap.ui.getCore().byId("commsr").setVisible(false);
							//Hide Intern Comments Text view with title
							sap.ui.getCore().byId("feAddcomminl").setVisible(false);
							sap.ui.getCore().byId("commin").setVisible(false);
							//Intern Review Summary
							sap.ui.getCore().byId("F60C1IRS").setVisible(true);
							//Sales Rep Review Summary
							if ( oData.Srepresp != "")
							{
								sap.ui.getCore().byId("F60C2SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60C2SRS").setVisible(false);
							}
							//Admin Review Summary
							if ( oData.Admresp != "")
							{
								sap.ui.getCore().byId("F60R3ARS").setVisible(true);	
							}
							else
							{
								sap.ui.getCore().byId("F60R3ARS").setVisible(false);
							}

							//Hide Review Summary form container of Intern ---- 2nd Cycle
							if ( oData.Intresp2 != "")
							{

								sap.ui.getCore().byId("F60R4IRS2").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60R4IRS2").setVisible(false);
							}
							//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
							if ( oData.Srepresp2 != "")
							{
								sap.ui.getCore().byId("F60R5SRS2").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60R5SRS2").setVisible(false);	
							}

							//Hide Review Summary form container of Admin ---- 2nd Cycle
							if ( oData.Admresp2 != "")
							{
								sap.ui.getCore().byId("F60R6ARS2").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("F60R6ARS2").setVisible(false);
							}

						}

					}

					else if ( oData.Flowtype == "INTTOSREP" ) 
					{
						//Show Form Contains radiobuttons with price of Sales Rep
						sap.ui.getCore().byId("F70").setVisible(true);
						//From Contains Radiobuttons and checkboxes for Intern
						sap.ui.getCore().byId("F65").setVisible(false);
						//Hide SR Error - Reset radio button
						//sap.ui.getCore().byId("resetr").setVisible(false);
						//Hide Not Corrected - Reset radio button
						//sap.ui.getCore().byId("notcorr").setVisible(false);
						//Show Sales Rep Comments Text view with title
						sap.ui.getCore().byId("feAddcommsrl").setVisible(true);
						sap.ui.getCore().byId("commsr").setVisible(true);
						//Hide Intern Comments Text view with title
						sap.ui.getCore().byId("feAddcomminl").setVisible(false);
						sap.ui.getCore().byId("commin").setVisible(false);	
						//Hide Admin Comments Text view with title
						sap.ui.getCore().byId("commad").setVisible(false);
						sap.ui.getCore().byId("feAddcommadl").setVisible(false);
						//Show Review Summary form container of Intern						
						sap.ui.getCore().byId("F60C1IRS").setVisible(true);		
						//Sales Rep Review Summary
						if ( oData.Srepresp != "")
						{
							sap.ui.getCore().byId("F60C2SRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60C2SRS").setVisible(false);
						}
						//Admin Review Summary
						if ( oData.Admresp != "")
						{
							sap.ui.getCore().byId("F60R3ARS").setVisible(true);	
						}
						else
						{
							sap.ui.getCore().byId("F60R3ARS").setVisible(false);
						}

						//Hide Review Summary form container of Intern ---- 2nd Cycle
						if ( oData.Intresp2 != "")
						{

							sap.ui.getCore().byId("F60R4IRS2").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60R4IRS2").setVisible(false);
						}
						//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
						if ( oData.Srepresp2 != "")
						{
							sap.ui.getCore().byId("F60R5SRS2").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60R5SRS2").setVisible(false);	
						}

						//Hide Review Summary form container of Admin ---- 2nd Cycle
						if ( oData.Admresp2 != "")
						{
							sap.ui.getCore().byId("F60R6ARS2").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60R6ARS2").setVisible(false);
						}
					}
					else if ( oData.Flowtype == "ADMTOSREP" )

					{

						//Show Form Contains radiobuttons with price of Sales Rep
						sap.ui.getCore().byId("F70").setVisible(true);
						//From Contains Radiobuttons and checkboxes for Intern
						sap.ui.getCore().byId("F65").setVisible(false);
						//Show Sales Rep Comments Text view with title
						sap.ui.getCore().byId("feAddcommsrl").setVisible(true);
						sap.ui.getCore().byId("commsr").setVisible(true);
						//Hide Intern Comments Text view with title
						sap.ui.getCore().byId("feAddcomminl").setVisible(false);
						sap.ui.getCore().byId("commin").setVisible(false);    
						//Hide Admin Comments Text view with title
						sap.ui.getCore().byId("commad").setVisible(false);
						sap.ui.getCore().byId("feAddcommadl").setVisible(false);
						//Show Review Summary form container of Intern                                    
						sap.ui.getCore().byId("F60C1IRS").setVisible(true);          
						//Sales Rep Review Summary
						if ( oData.Srepresp != "")
						{
							sap.ui.getCore().byId("F60C2SRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60C2SRS").setVisible(false);
						}
						//Admin Review Summary
						if ( oData.Admresp != "")
						{
							sap.ui.getCore().byId("F60R3ARS").setVisible(true);   
						}
						else
						{
							sap.ui.getCore().byId("F60R3ARS").setVisible(false);
						}

						//Hide Review Summary form container of Intern ---- 2nd Cycle
						if ( oData.Intresp2 != "")
						{

							sap.ui.getCore().byId("F60R4IRS2").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60R4IRS2").setVisible(false);
						}
						//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
						if ( oData.Srepresp2 != "")
						{
							sap.ui.getCore().byId("F60R5SRS2").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60R5SRS2").setVisible(false); 
						}

						//Hide Review Summary form container of Admin ---- 2nd Cycle
						if ( oData.Admresp2 != "")
						{
							sap.ui.getCore().byId("F60R6ARS2").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60R6ARS2").setVisible(false);
						}
					}

					else if ( oData.Flowtype == "ADMASINT")
					{
						//From Contains Radiobuttons and checkboxes for Intern	/*VINAY*/
						sap.ui.getCore().byId("F65").setVisible(true);
						//Hide Not Sold By Customer check box in Intern
						//sap.ui.getCore().byId("cb8").setVisible(true);
						//Hide form with Sales Rep radio buttons with price
						sap.ui.getCore().byId("F70").setVisible(false);
						//Show Intern Comments Text view with title
						sap.ui.getCore().byId("feAddcomminl").setVisible(false);
						sap.ui.getCore().byId("commin").setVisible(false);
						//Hide Sales Rep Comments Text view with title
						sap.ui.getCore().byId("feAddcommsrl").setVisible(false);
						sap.ui.getCore().byId("commsr").setVisible(false);
						//Hide Admin Comments Text view with title
						sap.ui.getCore().byId("commad").setVisible(true);
						sap.ui.getCore().byId("feAddcommadl").setVisible(true); 
						//Show Check Boxes form container for admin
						sap.ui.getCore().byId("F65C2CB").setVisible(true);			/*vinay*/
						//Show Enter Price form container for admin
						sap.ui.getCore().byId("F65C3R2").setVisible(true);			/*vinay*/
						//Hide Review Summary form container of Intern
						if ( oData.Checkresp != "" )
						{
							sap.ui.getCore().byId("F60C1IRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60C1IRS").setVisible(false);
						}
						//Sales Rep Review Summary
						if ( oData. Srepresp != "" )
						{
							sap.ui.getCore().byId("F60C2SRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60C2SRS").setVisible(false);
						}
						//Admin Review Summary
						if ( oData. Admresp != "" )
						{
							sap.ui.getCore().byId("F60R3ARS").setVisible(true);	
						}
						else
						{
							sap.ui.getCore().byId("F60R3ARS").setVisible(false);
						}

						//Hide Review Summary form container of Intern ---- 2nd Cycle
						if ( oData.Intresp2 != "" )
						{

							sap.ui.getCore().byId("F60R4IRS2").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60R4IRS2").setVisible(false);
						}
						//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
						if ( oData. Srepresp2 != "" )
						{
							sap.ui.getCore().byId("F60R5SRS2").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60R5SRS2").setVisible(false);	
						}

						//Hide Review Summary form container of Admin ---- 2nd Cycle
						if ( oData. Admresp2 != "" )
						{
							sap.ui.getCore().byId("F60R6ARS2").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("F60R6ARS2").setVisible(false);
						}

					}

					else if ( oData.Flowtype == "" && oData.Status ==  "COMPLETED" )
						//Open Status and Flow type 
					{
						//Hide Submit and Reset form when completed status
						sap.ui.getCore().byId("F90").setVisible(false);	
						//Hide Contains Radiobuttons and checkboxes for Intern
						sap.ui.getCore().byId("F65").setVisible(false);
						//Hide Form Contains radiobuttons with price of Sales Rep
						sap.ui.getCore().byId("F70").setVisible(false);
						//Show Intern Comments Text view with title
						sap.ui.getCore().byId("feAddcomminl").setVisible(false);
						sap.ui.getCore().byId("commin").setVisible(false);
						//Hide Sales Rep Comments Text view with title
						sap.ui.getCore().byId("feAddcommsrl").setVisible(false);
						sap.ui.getCore().byId("commsr").setVisible(false);
						//Hide Admin Comments Text view with title
						sap.ui.getCore().byId("commad").setVisible(false);
						sap.ui.getCore().byId("feAddcommadl").setVisible(false);
						//Hide Review Summary form container of Intern
						sap.ui.getCore().byId("F60C1IRS").setVisible(false);
						//Hide Review Summary form container of Sales Rep
						sap.ui.getCore().byId("F60C2SRS").setVisible(false);
						//Hide Review Summary form container of Admin
						sap.ui.getCore().byId("F60R3ARS").setVisible(false);
						//Hide Review Summary form container of Intern ---- 2nd Cycle
						sap.ui.getCore().byId("F60R4IRS2").setVisible(false);
						//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
						sap.ui.getCore().byId("F60R5SRS2").setVisible(false);
						//Hide Review Summary form container of Admin ---- 2nd Cycle
						sap.ui.getCore().byId("F60R6ARS2").setVisible(false);
					}

				},
				//************************************vinay change ended*************************//

				function(oError){
					var message = $(oError.response.body).find('message').first().text(); 
					alert(message);
				}
		);


	},
	//***************************************Ended Modified By Vinay**************************************************** 
	/***********************new version code ends**************************/
	navtoback : function(SubmittedSerialNumbers)
	{
		debugger;
		var urole1 = sap.ui.getCore().byId("urole").getValue();

		if( ( urole1 == "" ) || urole1 == "SALESREP"){
			var oShell = sap.ui.getCore().byId("myShell");
		}else if ( ( urole1 == "ADMIN" ) || ( urole1 == "MANAGER" ) ){
			var oShell = sap.ui.getCore().byId("AdminShell");	
		}
		var oSelectedWorkSetItem = oShell.getSelectedWorksetItem();

		var json = {};
		json.Serialnumbers = SubmittedSerialNumbers;
		json.SelectedWorkSetItem = oSelectedWorkSetItem;
		//json.Internid = 
		var submitmodel = new sap.ui.model.json.JSONModel();
		submitmodel.setData(json);
		sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
		//sap.ui.getCore().byId("CheckPromos").getModel("PromoListSet");


		if( ( urole1 == "" ) || urole1 == "SALESREP")
		{


			// app.backToPage("idPromolist");
			sap.ui.getCore().byId("idPromolist").invalidate();	
			app.to("idPromolist", "flip");




		}
		else if ( ( urole1 == "ADMIN" ) || ( urole1 == "MANAGER" ) )
		{
			sap.ui.getCore().byId("idPromolist1").invalidate();	
			app.to("idPromolist1", "flip");
		}
	},


//	*******************************vinay**************************//
	CheckPromoDetailsFillShellContent: function(sId, oShell, obj)
	{

		switch (sId) {
		case "home_pd":
			debugger;
			var urole1 = sap.ui.getCore().byId("urole").getValue();
			if( ( urole1 == "" ) || urole1 == "SALESREP"){
				var oShell = sap.ui.getCore().byId("myShell");
				var json = {};
				json.SelectedWorkSetItem = "home";
				var submitmodel = new sap.ui.model.json.JSONModel();
				submitmodel.setData(json);
				sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
				sap.ui.getCore().byId("idPromolist").invalidate();	
				app.to("idPromolist", "flip");
				break;
			}else if ( ( urole1 == "ADMIN" ) || ( urole1 == "MANAGER" ) ){
				var oShell = sap.ui.getCore().byId("AdminShell");
				var json = {};
				json.SelectedWorkSetItem = "mhome";
				var submitmodel = new sap.ui.model.json.JSONModel();
				submitmodel.setData(json);
				sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
				sap.ui.getCore().byId("idPromolist1").invalidate();	
				app.to("idPromolist1", "flip");
				break;
			}



		case "checkpromo_pd" :
			var urole1 = sap.ui.getCore().byId("urole").getValue();

			if( ( urole1 == "" ) || urole1 == "SALESREP"){
				var oShell = sap.ui.getCore().byId("myShell");
				var json = {};
				json.SelectedWorkSetItem = "checkpromo";
				var submitmodel = new sap.ui.model.json.JSONModel();
				submitmodel.setData(json);
				sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
				sap.ui.getCore().byId("idPromolist").invalidate();	
				app.to("idPromolist", "flip");
				break;
			}else if ( ( urole1 == "ADMIN" ) || ( urole1 == "MANAGER" ) ){
				var oShell = sap.ui.getCore().byId("AdminShell");
				var json = {};
				json.SelectedWorkSetItem = "mcheckpromo";
				var submitmodel = new sap.ui.model.json.JSONModel();
				submitmodel.setData(json);
				sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
				sap.ui.getCore().byId("idPromolist1").invalidate();	
				app.to("idPromolist1", "flip");
				break;
			}			            	    			


		case "searchpromo_pd":
			var urole1 = sap.ui.getCore().byId("urole").getValue();

			if( ( urole1 == "" ) || urole1 == "SALESREP"){
				var oShell = sap.ui.getCore().byId("myShell");
				var json = {};
				json.SelectedWorkSetItem = "searchpromo";
				var submitmodel = new sap.ui.model.json.JSONModel();
				submitmodel.setData(json);
				sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
				sap.ui.getCore().byId("idPromolist").invalidate();	
				app.to("idPromolist", "flip");
				break;
			}else if ( ( urole1 == "ADMIN" ) || ( urole1 == "MANAGER" ) ){
				var oShell = sap.ui.getCore().byId("AdminShell");
				var json = {};
				json.SelectedWorkSetItem = "msearchpromo";
				var submitmodel = new sap.ui.model.json.JSONModel();
				submitmodel.setData(json);
				sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
				sap.ui.getCore().byId("idPromolist1").invalidate();	
				app.to("idPromolist1", "flip");
				break;
			}			            	    			


		case "searchacc_pd":
			var urole1 = sap.ui.getCore().byId("urole").getValue();

			if( ( urole1 == "" ) || urole1 == "SALESREP"){
				var oShell = sap.ui.getCore().byId("myShell");
				var json = {};
				json.SelectedWorkSetItem = "searchacc";
				var submitmodel = new sap.ui.model.json.JSONModel();
				submitmodel.setData(json);
				sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
				sap.ui.getCore().byId("idPromolist").invalidate();	
				app.to("idPromolist", "flip");
				break;

			}else if ( ( urole1 == "ADMIN" ) || ( urole1 == "MANAGER" ) ){
				var oShell = sap.ui.getCore().byId("AdminShell");
				var json = {};
				json.SelectedWorkSetItem = "msearchacc";
				var submitmodel = new sap.ui.model.json.JSONModel();
				submitmodel.setData(json);
				sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
				sap.ui.getCore().byId("idPromolist1").invalidate();	
				app.to("idPromolist1", "flip");
				break;

			}	

		case "internres_pd":
			var oShell = sap.ui.getCore().byId("AdminShell");
			var json = {};
			json.SelectedWorkSetItem = "minternres";
			var submitmodel = new sap.ui.model.json.JSONModel();
			submitmodel.setData(json);
			sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
			sap.ui.getCore().byId("idPromolist1").invalidate();	
			app.to("idPromolist1", "flip");
			break;

		case "srres_pd":
			var oShell = sap.ui.getCore().byId("AdminShell");
			var json = {};
			json.SelectedWorkSetItem = "msrres";
			var submitmodel = new sap.ui.model.json.JSONModel();
			submitmodel.setData(json);
			sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
			sap.ui.getCore().byId("idPromolist1").invalidate();	
			app.to("idPromolist1", "flip");
			break;

		case "reassign_pd":
			var oShell = sap.ui.getCore().byId("AdminShell");
			var json = {};
			json.SelectedWorkSetItem = "mreassign";
			var submitmodel = new sap.ui.model.json.JSONModel();
			submitmodel.setData(json);
			sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
			sap.ui.getCore().byId("idPromolist1").invalidate();	
			app.to("idPromolist1", "flip");
			break;

		}	
	},


//	*********************************end**************************//
	//Submit 	
	Submit : function(error, xcsrf_token_ref, ImageSentChecker, oController)
	{
		debugger;

		var oData = {};
		var promoid = sap.ui.getCore().byId("promo").getValue();
		//var promoid = sap.ui.getCore().byId("TF-P-Id").getValue();
		var itemid  = sap.ui.getCore().byId("TF-Itemid").getValue();
		var week	= sap.ui.getCore().byId("week").getValue();
		var check   = sap.ui.getCore().byId("check").getValue();
		var status  = sap.ui.getCore().byId("status").getValue();
		var fltyp = sap.ui.getCore().byId("fltyp").getValue(); 
		var rbg = sap.ui.getCore().byId("oRBG").getSelectedButton();
		var rbgs = sap.ui.getCore().byId("oRBGSrep").getSelectedButton();
		var urole = sap.ui.getCore().byId("urole").getValue();
		var uid   	= sap.ui.getCore().byId("uid").getValue();				/*vinay added*/
		var comments  = new sap.m.TextArea();
		var resp;	// To store the Radio button responses 
		var text;	// To store the checkboxes text
		text = "undefined";

		//To assign intern Id when role is intern to pass userid to SAP
	
		if ( urole == "" )
		{
			uid = sap.ui.getCore().byId("uintern").getValue();
		}


			

		var RadioButtons = {};
		var oRBG = sap.ui.getCore().byId("oRBG");
		var oRBGSrep = sap.ui.getCore().byId("oRBGSrep");

		var rbgindexSelected = oRBG.getSelectedIndex();
		var srbgindexSelected = oRBGSrep.getSelectedIndex();

		var RadioButton_Model = sap.ui.getCore().getModel("Radio_Buttons_model");
		RadioButtons = RadioButton_Model.getData();
		var radiobuttonskeys = RadioButtons.Keys;
		var radiobuttontext = RadioButtons.Text;
		var id = "";
		var idnum = 0;
		var CheckBoxes = {};
		//var indexSelected = oRBG.getSelectedIndex();
		var CheckBoxes_Model = sap.ui.getCore().getModel("Check_Boxes_model");
		CheckBoxes = CheckBoxes_Model.getData();
		var checkboxeskeys = CheckBoxes.Keys;
		var checkboxestext = CheckBoxes.Text;

		
		
		if(fltyp  ==  "INTERN" || fltyp  ==  "ADMASINT" || fltyp  ==  "INTADM" || fltyp  ==  "ADMTOINT"){
			resp = radiobuttonskeys[rbgindexSelected];
		}else{
			resp = radiobuttonskeys[srbgindexSelected];
		}

		if (resp == "NOTACCU"){
			debugger;
			for(i=0;i<checkboxeskeys.length;i++){
				id = "";
				idnum = i + 1;
				id = "cb" + idnum;
				if (sap.ui.getCore().byId(id).getSelected()){
					text = text + '/' + sap.ui.getCore().byId(id).getText();
				}
			}


		}


	   
	
		error = false;
		//If admin selects Inter Reset for the second time
		if ( urole == "ADMIN" && ( ( check == "000005" || check == "000006" ) &&  resp == "INTRESET" )  ||  (( check == "000005" || check == "000006" ) &&  resp == "RESET" ) )
			{
			sap.ui.core.BusyIndicator.hide();
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
					"Intern Reset/SR Reset has already been performed for this promo", {
						icon: sap.m.MessageBox.Icon.error,
						title: "Intern Reset Error",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function(oAction){}
					}); 
			error = true;
			
			}		
		
		//Price(if different)		
		
		
		var price;
		var pricei	  = sap.ui.getCore().byId("idPridif").getValue();
		var prices	  = sap.ui.getCore().byId("idPridifs").getValue();


		if ( fltyp == 'INTERN' || fltyp == 'ADMASINT' || fltyp  ==  "ADMTOINT")
		{
			if(pricei == '')
			{

				price = '0.00';
			}
			else
			{

				price = pricei;
			}



		}
		else if ( fltyp == 'INTTOSREP' || fltyp == 'SREPADMIN' || fltyp == 'ADMTOSREP')
		{

			if(prices == '')
			{

				price = '0.00';
			}
			else
			{

				price = prices;
			}
		}
		else if ( fltyp == 'INTADM' )

		{

			price = '0.00';
		}




//		Replacing undefined in checkbox responses
		if ( text == 'undefined' )
		{

		}
		else
		{

			text = text.replace("undefined/", " ");
			console.log(text);
		}


		//Comments
		if ( urole == "" )
		{
			comments = sap.ui.getCore().byId("commin").getValue();
		}
		else if ( urole == 'SALESREP')

		{
			comments = sap.ui.getCore().byId("commsr").getValue();
		}
		else if ( urole == "ADMIN")
		{
			comments = sap.ui.getCore().byId("commad").getValue();

			if (  comments  == "undefined" || comments  == "" )
			{
				comments = sap.ui.getCore().byId("commin").getValue();

			}      
			if (  comments  == "undefined" || comments  == "" ) 
			{
				comments = sap.ui.getCore().byId("commsr").getValue();

			}
		}


//***********************Price is mandatory in INTERN and ADMTOINT queue*******************************************************//

		if ( ( fltyp == "INTERN" && price == "0.00" &&  resp != "NSBPCNAT" )  || ( fltyp == "ADMTOINT" && price == "0.00" &&  resp != "NSBPCNAT" )	)
		{
			sap.ui.core.BusyIndicator.hide();
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
					"Please Enter Price", {
						icon: sap.m.MessageBox.Icon.error,
						title: "Price is required",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function(oAction){}
					}); 
			error = true;
		}	else if ( price != "0.00" )
		{
			var len = price.length;
			if ( len > 11 )
			{
				sap.ui.core.BusyIndicator.hide();
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
						"Please Enter Valid Price", {
							icon: sap.m.MessageBox.Icon.error,
							title: "Price is greater",
							actions: [sap.m.MessageBox.Action.OK],
							onClose: function(oAction){}
						}); 
				error = true;

			}

		}


		if (error == false) 
		{


			var NotSoldOnSite = sap.ui.getCore().byId("cb1").getSelected();	
			
//			*************************Conditions to avoid images mandatory in different flow types**********************//			
//			Ô       In Intern queue, images are mandatory
//			Ô       In Sales rep queue, when CANCELLED, or CANONLINE or NSBEEJR


			if ( ( fltyp == 'INTERN' &&  resp != "NSBPCNAT" ) 		
					|| ( fltyp == 'ADMTOINT' &&  resp != "NSBPCNAT" )
					|| ( fltyp == 'INTTOSREP' &&  ( resp == "ACCURATE" || resp == "CORRECTED" ) ) 
					|| ( fltyp == 'ADMTOSREP' &&  ( resp == "ACCURATE" || resp == "CORRECTED" ) ) 				
					||  ( ( fltyp == 'ADMASINT' && resp == "NOTACCU" && NotSoldOnSite != true  ) )  
					||   ( fltyp == 'ADMASINT' && resp == "ACCURATE" )  ) /*vinay 26-04   */
				//||  ( fltyp == 'SREPADMIN' &&  resp != "CANCELLED" && resp != "CANONLINE" && resp != "RESET" )  )

			{
				debugger;
				if(sap.ui.Device.browser.chrome){

					var ImgValue1 = document.getElementById('img1').style.backgroundImage.slice(4,-1).replace(/"/g, ""); // .getAttribute('value');

					var ImgValue2 = document.getElementById('img2').style.backgroundImage.slice(4,-1).replace(/"/g, "");; // .getAttribute('value');

					var ImgValue3 = document.getElementById('img3').style.backgroundImage.slice(4,-1).replace(/"/g, "");; // .getAttribute('value');

					var ImgValue4 = document.getElementById('img4').style.backgroundImage.slice(4,-1).replace(/"/g, "");; // .getAttribute('value');

					var ImgValue5 = document.getElementById('img5').style.backgroundImage.slice(4,-1).replace(/"/g, "");; // .getAttribute('value');

					var ImgValue6 = document.getElementById('img6').style.backgroundImage.slice(4,-1).replace(/"/g, "");; // .getAttribute('value');

					var ImgValue7 = document.getElementById('img7').style.backgroundImage.slice(4,-1).replace(/"/g, "");; // .getAttribute('value');

					var ImgValue8 = document.getElementById('img8').style.backgroundImage.slice(4,-1).replace(/"/g, "");; // .getAttribute('value');

					var ImgValue9 = document.getElementById('img9').style.backgroundImage.slice(4,-1).replace(/"/g, "");; // .getAttribute('value');

					var ImgValue10 = document.getElementById('img10').style.backgroundImage.slice(4,-1).replace(/"/g, "");; // .getAttribute('value'); 

				}else if(sap.ui.Device.browser.firefox || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
					debugger;

					var ImgValue1 = CheckPromoDetails_getImageStringForId("img1");
					var ImgValue2 = CheckPromoDetails_getImageStringForId("img2");
					var ImgValue3 = CheckPromoDetails_getImageStringForId("img3");
					var ImgValue4 = CheckPromoDetails_getImageStringForId("img4");
					var ImgValue5 = CheckPromoDetails_getImageStringForId("img5");
					var ImgValue6 = CheckPromoDetails_getImageStringForId("img6");
					var ImgValue7 = CheckPromoDetails_getImageStringForId("img7");
					var ImgValue8 = CheckPromoDetails_getImageStringForId("img8");
					var ImgValue9 = CheckPromoDetails_getImageStringForId("img9");
					var ImgValue10 = CheckPromoDetails_getImageStringForId("img10");

				}


				if (ImgValue1 != '' || ImgValue2 != '' || ImgValue3 != '' || ImgValue4 != '' || ImgValue5 != '' 
					|| ImgValue6 != '' || ImgValue7 != '' || ImgValue8 != '' || ImgValue9 != '' ||ImgValue10 != '' )
				{

				}
				else

				{

					sap.ui.core.BusyIndicator.hide();
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show(
							"Please Paste Atleast one Image", {
								icon: sap.m.MessageBox.Icon.error,
								title: "Update Failed",
								actions: [sap.m.MessageBox.Action.OK],
								onClose: function(oAction){}
							}); 				
					error = true;
				}

			}
		}



//		*************************************Sending Request for Update Details from Promo Details Page**************//
		/*****Images Code**********/
		if (error == false){
			debugger;
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/PromoDetailsSet(Promoid='"+promoid+"',Itemid='"+itemid+"',Weekid='"+week+"',Checkid='"+check+"',Imageid='000001')");
			var hostName = window.location.host;
			var AuthToken = "";

			if(hostName == "ambrifiori.am.brothergroup.net:8443" || hostName == "webdispatcher-d.brother.com:8000"){
				AuthToken = "Basic VVNGSU9SSURFVjpkZVYxMGJmJGch";
				//AuthToken = "Basic YWFuaXJlZGR5OmJyb3RoZXIx";		
			}else if(hostName == "ambrifiori-t.am.brothergroup.net:8443" || hostName == "webdispatcher-d.brother.com:44800"){
				AuthToken = "Basic VVNGSU9SSVRFU1Q6VGVzQDAxQmZ0JQ==";			
			}else if(hostName == "ambrifiori-p.am.brothergroup.net:8443" || hostName == "extranet.brother.com:44800"){
				AuthToken = "Basic VVNGSU9SSVBST0Q6ZklvJHJpQmZAZyE=";
			}
			var csrftoken = xcsrf_token_ref.header_xcsrf_token;


			console.log("Fetch CSRF being called before PUT Promo.....");
			//	if(xcsrf_token_ref.header_xcsrf_token == ""){
			OData.request({

				requestUri : sServiceUrl,
				method : "GET",
				headers:  
				{       
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type": "application/atom+xml",   
					"DataServiceVersion" : "2.0",
					"Authorization" : AuthToken,
					"X-CSRF-Token": "Fetch"  
				}             
			},
			function (data, response) 
			{
				console.log("Fetch Response is:", response);
				console.log("Fetch data is:", data);
				debugger;
				if(sap.ui.Device.browser.chrome || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
					header_xcsrf_token = response.headers['x-csrf-token'];
				}else if(sap.ui.Device.browser.firefox){
					header_xcsrf_token = response.headers['X-CSRF-Token']; 
				}
				xcsrf_token_ref.header_xcsrf_token = header_xcsrf_token;
				csrftoken = xcsrf_token_ref.header_xcsrf_token;
				var sServiceUrl1 = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/PromoDetailsSet(Promoid='"+promoid+"',Itemid='"+itemid+"',Weekid='"+week+"',Checkid='"+check+"',Imageid='000001')");
				OData.request({

					requestUri : sServiceUrl1,
					method : "PUT",
					data : {			
						Promoid : promoid,
						Itemid	: itemid,
						Weekid	: week,
						Checkid : check,
						Imageid : '000001',
						Userid	: uid,			
						Status : status,					
						Checkresp : resp,
						Inaccursns : text,
						Price : price,
						Comments : comments,
					},

					headers:  
					{       
						"X-Requested-With" : "XMLHttpRequest",
						"DataServiceVersion" : "2.0",
						"Content-Type": "application/atom+xml",          
						"X-CSRF-Token": xcsrf_token_ref.header_xcsrf_token   
					} 

				},

				function (data, response) 
				{

					debugger;
					console.log("CSRF Token used For PUT ",csrftoken);
					console.log("PUT Promo Update Successfull response:",response);
					console.log("PUT Promo Update Successfull data:",data);

				},
				function (err) 
				{  
					debugger;
					sap.ui.core.BusyIndicator.hide();
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show(
							"Promo update failed", {
								icon: sap.m.MessageBox.Icon.error,
								title: "Promo Status",
								actions: [sap.m.MessageBox.Action.OK],
								onClose: function(oAction){}
							});
					sap.ui.getCore().byId("submit").setEnabled(true);
					sap.ui.core.BusyIndicator.hide();
					var request = err.request;
					var response = err.response;
					console.log("CSRF Token used For PUT ",csrftoken);
					console.log("PUT Promo error Request is:", err.request);
					console.log("PUT Promo error Response is:", err.response);
					error = true;
				});


				/*******************Send Images to SAP*****************************/
				if (error != true) {
					var imageId = 0;
					var slug = '';
					debugger;
					// oData.Checkid;
					if(sap.ui.Device.browser.chrome){
						var ImgValue1 = document.getElementById('img1').style.backgroundImage.slice(4,-1).replace(/"/g, ""); // .getAttribute('value');
					} else if(sap.ui.Device.browser.firefox || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
						var ImgValue1 = CheckPromoDetails_getImageStringForId("img1");
					}


					if (ImgValue1 != '') {
						//ImageSentChecker.image1Sent = "false";
						imageId = imageId + 1;
						CheckPromoDetails_SetImageSentForimageId(imageId, ImageSentChecker);
						ImageSentChecker.NoOfImages = imageId;
						slug = 'PROMOID'+ sap.ui.getCore().byId("TF-P-Id").getValue()+ ';ITEMID'+ sap.ui.getCore().byId("TF-Itemid").getValue()+ ';WEEKID'+ sap.ui.getCore().byId("week").getValue()+ ';CHECKID'+ sap.ui.getCore().byId("check").getValue()+ ';IMAGEID'+ imageId + ';FLOWTYPE' + sap.ui.getCore().byId("fltyp").getValue(); 
						CheckPromoDetails_SendImageToSAP(slug, ImgValue1, error, ImageSentChecker, ImageSentChecker.NoOfImages,xcsrf_token_ref);
					}

					if(sap.ui.Device.browser.chrome){
						var ImgValue2 = document.getElementById('img2').style.backgroundImage.slice(4,-1).replace(/"/g, ""); // .getAttribute('value');
					} else if(sap.ui.Device.browser.firefox || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
						var ImgValue2 = CheckPromoDetails_getImageStringForId("img2");
					}									//console.log("retrieved  dataURI value is:",ImgValue2);
					if (ImgValue2 != '') {
						//ImageSentChecker.image2Sent = "false";
						imageId = imageId + 1;
						CheckPromoDetails_SetImageSentForimageId(imageId, ImageSentChecker);
						ImageSentChecker.NoOfImages = imageId;
						slug = 'PROMOID'+ sap.ui.getCore().byId("TF-P-Id").getValue()+ ';ITEMID'+ sap.ui.getCore().byId("TF-Itemid").getValue()+ ';WEEKID'+ sap.ui.getCore().byId("week").getValue()+ ';CHECKID'+ sap.ui.getCore().byId("check").getValue()+ ';IMAGEID'+ imageId + ';FLOWTYPE' + sap.ui.getCore().byId("fltyp").getValue();
						CheckPromoDetails_SendImageToSAP(slug, ImgValue2, error, ImageSentChecker, ImageSentChecker.NoOfImages,xcsrf_token_ref);
					}

					if(sap.ui.Device.browser.chrome){
						var ImgValue3 = document.getElementById('img3').style.backgroundImage.slice(4,-1).replace(/"/g, ""); // .getAttribute('value');
					} else if(sap.ui.Device.browser.firefox || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
						var ImgValue3 = CheckPromoDetails_getImageStringForId("img3");
					}									//console.log("retrieved  dataURI value is:",ImgValue3);
					if (ImgValue3 != '') {
						//ImageSentChecker.image3Sent = "false";
						imageId = imageId + 1;
						CheckPromoDetails_SetImageSentForimageId(imageId, ImageSentChecker);
						ImageSentChecker.NoOfImages = imageId;
						slug = 'PROMOID'+ sap.ui.getCore().byId("TF-P-Id").getValue()+ ';ITEMID'+ sap.ui.getCore().byId("TF-Itemid").getValue()+ ';WEEKID'+ sap.ui.getCore().byId("week").getValue()+ ';CHECKID'+ sap.ui.getCore().byId("check").getValue()+ ';IMAGEID'+ imageId + ';FLOWTYPE' + sap.ui.getCore().byId("fltyp").getValue(); // +

						CheckPromoDetails_SendImageToSAP(slug, ImgValue3, error, ImageSentChecker, ImageSentChecker.NoOfImages,xcsrf_token_ref);
					}

					if(sap.ui.Device.browser.chrome){
						var ImgValue4 = document.getElementById('img4').style.backgroundImage.slice(4,-1).replace(/"/g, ""); // .getAttribute('value');
					} else if(sap.ui.Device.browser.firefox || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
						var ImgValue4 = CheckPromoDetails_getImageStringForId("img4");
					}									//console.log("retrieved  dataURI value is:",ImgValue4);
					if (ImgValue4 != '') {
						//ImageSentChecker.image4Sent = "false";
						imageId = imageId + 1;
						CheckPromoDetails_SetImageSentForimageId(imageId, ImageSentChecker);
						ImageSentChecker.NoOfImages = imageId;
						slug = 'PROMOID'+ sap.ui.getCore().byId("TF-P-Id").getValue()+ ';ITEMID'+ sap.ui.getCore().byId("TF-Itemid").getValue()+ ';WEEKID'+ sap.ui.getCore().byId("week").getValue()+ ';CHECKID'+ sap.ui.getCore().byId("check").getValue()+ ';IMAGEID'+ imageId + ';FLOWTYPE' + sap.ui.getCore().byId("fltyp").getValue(); // +

						CheckPromoDetails_SendImageToSAP(slug, ImgValue4, error, ImageSentChecker, ImageSentChecker.NoOfImages,xcsrf_token_ref);
					}

					if(sap.ui.Device.browser.chrome){
						var ImgValue5 = document.getElementById('img5').style.backgroundImage.slice(4,-1).replace(/"/g, ""); // .getAttribute('value');
					} else if(sap.ui.Device.browser.firefox || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
						var ImgValue5 = CheckPromoDetails_getImageStringForId("img5");
					}									//console.log("retrieved  dataURI value is:",ImgValue5);
					if (ImgValue5 != '') {
						//ImageSentChecker.image5Sent = "false";
						imageId = imageId + 1;
						CheckPromoDetails_SetImageSentForimageId(imageId, ImageSentChecker);
						ImageSentChecker.NoOfImages = imageId;
						slug = 'PROMOID'+ sap.ui.getCore().byId("TF-P-Id").getValue()+ ';ITEMID'+ sap.ui.getCore().byId("TF-Itemid").getValue()+ ';WEEKID'+ sap.ui.getCore().byId("week").getValue()+ ';CHECKID'+ sap.ui.getCore().byId("check").getValue()+ ';IMAGEID'+ imageId + ';FLOWTYPE' + sap.ui.getCore().byId("fltyp").getValue(); // +

						CheckPromoDetails_SendImageToSAP(slug, ImgValue5, error, ImageSentChecker, ImageSentChecker.NoOfImages,xcsrf_token_ref);
					}

					if(sap.ui.Device.browser.chrome){
						var ImgValue6 = document.getElementById('img6').style.backgroundImage.slice(4,-1).replace(/"/g, ""); // .getAttribute('value');
					} else if(sap.ui.Device.browser.firefox || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
						var ImgValue6 = CheckPromoDetails_getImageStringForId("img6");
					}									//console.log("retrieved  dataURI value is:",ImgValue6);
					if (ImgValue6 != '') {
						//ImageSentChecker.image6Sent = "false";
						imageId = imageId + 1;
						CheckPromoDetails_SetImageSentForimageId(imageId, ImageSentChecker);
						ImageSentChecker.NoOfImages = imageId;
						slug = 'PROMOID'+ sap.ui.getCore().byId("TF-P-Id").getValue()+ ';ITEMID'+ sap.ui.getCore().byId("TF-Itemid").getValue()+ ';WEEKID'+ sap.ui.getCore().byId("week").getValue()+ ';CHECKID'+ sap.ui.getCore().byId("check").getValue()+ ';IMAGEID'+ imageId + ';FLOWTYPE' + sap.ui.getCore().byId("fltyp").getValue(); // +

						CheckPromoDetails_SendImageToSAP(slug, ImgValue6, error, ImageSentChecker, ImageSentChecker.NoOfImages,xcsrf_token_ref);
					}

					if(sap.ui.Device.browser.chrome){
						var ImgValue7 = document.getElementById('img7').style.backgroundImage.slice(4,-1).replace(/"/g, ""); // .getAttribute('value');
					} else if(sap.ui.Device.browser.firefox || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
						var ImgValue7 = CheckPromoDetails_getImageStringForId("img7");
					}									
					if (ImgValue7 != '') {
						//ImageSentChecker.image7Sent = "false";
						imageId = imageId + 1;
						CheckPromoDetails_SetImageSentForimageId(imageId, ImageSentChecker);
						ImageSentChecker.NoOfImages = imageId;
						slug = 'PROMOID'+ sap.ui.getCore().byId("TF-P-Id").getValue()+ ';ITEMID'+ sap.ui.getCore().byId("TF-Itemid").getValue()+ ';WEEKID'+ sap.ui.getCore().byId("week").getValue()+ ';CHECKID'+ sap.ui.getCore().byId("check").getValue()+ ';IMAGEID'+ imageId + ';FLOWTYPE' + sap.ui.getCore().byId("fltyp").getValue(); // +

						CheckPromoDetails_SendImageToSAP(slug, ImgValue7, error, ImageSentChecker, ImageSentChecker.NoOfImages,xcsrf_token_ref);
					}

					if(sap.ui.Device.browser.chrome){
						var ImgValue8 = document.getElementById('img8').style.backgroundImage.slice(4,-1).replace(/"/g, ""); // .getAttribute('value');
					} else if(sap.ui.Device.browser.firefox || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
						var ImgValue8 = CheckPromoDetails_getImageStringForId("img8");
					}									//console.log("retrieved  dataURI value is:",ImgValue8);
					if (ImgValue8 != '') {
						//ImageSentChecker.image8Sent = "false";
						imageId = imageId + 1;
						CheckPromoDetails_SetImageSentForimageId(imageId, ImageSentChecker);
						ImageSentChecker.NoOfImages = imageId;
						slug = 'PROMOID'+ sap.ui.getCore().byId("TF-P-Id").getValue()+ ';ITEMID'+ sap.ui.getCore().byId("TF-Itemid").getValue()+ ';WEEKID'+ sap.ui.getCore().byId("week").getValue()+ ';CHECKID'+ sap.ui.getCore().byId("check").getValue()+ ';IMAGEID'+ imageId + ';FLOWTYPE' + sap.ui.getCore().byId("fltyp").getValue(); // +

						CheckPromoDetails_SendImageToSAP(slug, ImgValue8, error, ImageSentChecker, ImageSentChecker.NoOfImages,xcsrf_token_ref);
					}

					if(sap.ui.Device.browser.chrome){
						var ImgValue9 = document.getElementById('img9').style.backgroundImage.slice(4,-1).replace(/"/g, ""); // .getAttribute('value');
					} else if(sap.ui.Device.browser.firefox || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
						var ImgValue9 = CheckPromoDetails_getImageStringForId("img9");
					}									//console.log("retrieved  dataURI value is:",ImgValue9);
					if (ImgValue9 != '') {
						//ImageSentChecker.image9Sent = "false";
						imageId = imageId + 1;
						CheckPromoDetails_SetImageSentForimageId(imageId, ImageSentChecker);
						ImageSentChecker.NoOfImages = imageId;
						slug = 'PROMOID'+ sap.ui.getCore().byId("TF-P-Id").getValue()+ ';ITEMID'+ sap.ui.getCore().byId("TF-Itemid").getValue()+ ';WEEKID'+ sap.ui.getCore().byId("week").getValue()+ ';CHECKID'+ sap.ui.getCore().byId("check").getValue()+ ';IMAGEID'+ imageId + ';FLOWTYPE' + sap.ui.getCore().byId("fltyp").getValue(); // +

						CheckPromoDetails_SendImageToSAP(slug, ImgValue9, error, ImageSentChecker, ImageSentChecker.NoOfImages,xcsrf_token_ref);
					}

					if(sap.ui.Device.browser.chrome){
						var ImgValue10 = document.getElementById('img10').style.backgroundImage.slice(4,-1).replace(/"/g, ""); // .getAttribute('value');
					} else if(sap.ui.Device.browser.firefox || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
						var ImgValue10 = CheckPromoDetails_getImageStringForId("img10");
					}									//console.log("retrieved  dataURI value is:",ImgValue10);
					if (ImgValue10 != '') {
						//ImageSentChecker.image10Sent = "false";
						imageId = imageId + 1;
						CheckPromoDetails_SetImageSentForimageId(imageId, ImageSentChecker);
						ImageSentChecker.NoOfImages = imageId;
						slug = 'PROMOID'+ sap.ui.getCore().byId("TF-P-Id").getValue()+ ';ITEMID'+ sap.ui.getCore().byId("TF-Itemid").getValue()+ ';WEEKID'+ sap.ui.getCore().byId("week").getValue()+ ';CHECKID'+ sap.ui.getCore().byId("check").getValue()+ ';IMAGEID'+ imageId + ';FLOWTYPE' + sap.ui.getCore().byId("fltyp").getValue(); // +

						CheckPromoDetails_SendImageToSAP(slug, ImgValue10, error, ImageSentChecker, ImageSentChecker.NoOfImages,xcsrf_token_ref);
					}

					if ( error == false ){
						if (ImageSentChecker.NoOfImages == 0) {
							sap.ui.core.BusyIndicator.hide(); 
							jQuery.sap.require("sap.m.MessageBox");
							sap.m.MessageBox.show(
									"Promo updated successfully", {
										icon: sap.m.MessageBox.Icon.success,
										title: "Promo Status",
										actions: [sap.m.MessageBox.Action.OK],
										onClose: function(oAction){
											$('#myShell2-content').animate({ scrollTop: "0px" });
										}
									});
						}

						CheckPromoDetails_PrepareNextEntry("Submit", oController);
					}else {

						alert("There was an issue while uploading Images. Please contact IT.")
					}

				}

				/**********Code Ends for Sending Images to SAP**********************/				

			},function (err) 
			{  
				sap.ui.core.BusyIndicator.hide();
				debugger;
				var request = err.request;
				var response = err.response;
				error = true;
				alert("Error in Get while submit" +request + "Response" +response);
			}

			);

		}else{
			sap.ui.core.BusyIndicator.hide();
			sap.ui.getCore().byId("submit").setEnabled(true);
		}
		return error;
	}

});



function CheckPromoDetails_getImageStringForId(divId){
	var ImgValue = "";

	var ImgStringFull = document.getElementById(divId).innerHTML; // .getAttribute('value');

	var ImgStringArray = ImgStringFull.split("<img src=\"");
	if(ImgStringArray.length > 1){
		var ImgValueArray = ImgStringArray[1].split("\" alt=");
		ImgValue = ImgValueArray[0];

		if(ImgValue.indexOf("<img src=\"") > -1){
			sap.ui.core.BusyIndicator.hide();
			sap.ui.getCore().byId("submit").setEnabled(true);
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
					"Multiple Images found in one Image Box", {
						icon: sap.m.MessageBox.Icon.error,
						title: "Multiple Images",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function(oAction){

						}

					});


		}else{
			return ImgValue;
		}
	}else{
		return ImgValue;
	}


}


function CheckPromoDetails_GetResponses(flowType, sectionrenderobj){
	//************************Get Responses********************************************//
	var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");

	var oModel = new sap.ui.model.odata.ODataModel( sServiceUrl,false);
	debugger;

	/*				var oTable = new sap.ui.table.Table({
		id : ""				
	});

	oTable.setModel(oModel);

	oTable.bindRows({path:"/PromoResponsesSet", filters:[new sap.ui.model.odata.Filter('Flowtype', [{operator:"EQ",value1:oData.Flowtype}])]});
	 */	
	var checkboxeskey = [];
	var checkboxestext = [];
	var radiobuttonskey = [];
	var radiobuttonstext = [];
	//var flowtype = flowType;
	oModel.read("/PromoResponsesSet", null, ["$filter= Flowtype eq '"+flowType+"'"], false,function(orData, response)   
			{  
		debugger;  

		var rows = orData.results.length;
		for(i=0; i< rows; i++){
			if ( orData.results[i].Resptype == "C" )
			{
				//	cb[i].setText(orData.results[i].Resptext);

				checkboxeskey.push(orData.results[i].Respkey);
				checkboxestext.push(orData.results[i].Resptext);
			}else if (orData.results[i].Resptype == "R"){
				// rd_rbg_[i].setText(orData.results[i].Resptext);

				radiobuttonskey.push(orData.results[i].Respkey);
				radiobuttonstext.push(orData.results[i].Resptext);
			}
		}
		var Radio_Buttons = {};
		Radio_Buttons.Keys = radiobuttonskey;
		Radio_Buttons.Text = radiobuttonstext;
		var Radio_Buttons_model = new sap.ui.model.json.JSONModel();
		Radio_Buttons_model.setData(Radio_Buttons);
		sap.ui.getCore().setModel(Radio_Buttons_model,"Radio_Buttons_model");

		var Check_Boxes = {};
		Check_Boxes.Keys = checkboxeskey;
		Check_Boxes.Text = checkboxestext;
		var Check_Boxes_model = new sap.ui.model.json.JSONModel();
		Check_Boxes_model.setData(Check_Boxes);
		sap.ui.getCore().setModel(Check_Boxes_model,"Check_Boxes_model");

		var selectedIndex = 0;

		if(flowType == "INTERN" || flowType == "INTADM" || flowType == "ADMASINT" || flowType == "ADMTOINT" ){
			var oRBG = sap.ui.getCore().byId("oRBG");
			oRBG.removeAllButtons();
			oRBG.destroyButtons();
			debugger;
			for(i=0;i< radiobuttonstext.length; i++){
				switch (i){
				case 0:
					if(sap.ui.getCore().byId("rd_rbg_1") == null){
						var rb1 =  new sap.m.RadioButton({
							id : "rd_rbg_1",
						});
					}else{
						var rb1 = sap.ui.getCore().byId("rd_rbg_1");
					}
					rb1.setText(radiobuttonstext[0]);
					oRBG.addButton(rb1);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBG.setSelectedButton(rb1);
					}
					/*					oRBG.addButton(rb1);*/
					break;
				case 1:
					if(sap.ui.getCore().byId("rd_rbg_2") == null){
						var rb2 =  new sap.m.RadioButton({
							id : "rd_rbg_2",

						});
					}else{
						var rb2 = sap.ui.getCore().byId("rd_rbg_2");
					}
					rb2.setText(radiobuttonstext[1]);
					oRBG.addButton(rb2);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBG.setSelectedButton(rb2);
					}
					//	oRBG.addButton(rb2);
					break;
				case 2:
					if(sap.ui.getCore().byId("rd_rbg_3") == null){
						var rb3 =  new sap.m.RadioButton({
							id : "rd_rbg_3",
						});
					}else{
						var rb3 = sap.ui.getCore().byId("rd_rbg_3");
					}
					rb3.setText(radiobuttonstext[2]);
					oRBG.addButton(rb3);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBG.setSelectedButton(rb3);
					}
					//	oRBG.addButton(rb3);
					break;
				case 3:
					if(sap.ui.getCore().byId("rd_rbg_4") == null){
						var rb4 =  new sap.m.RadioButton({
							id : "rd_rbg_4",
						});
					}else{
						var rb4 = sap.ui.getCore().byId("rd_rbg_4");
					}
					rb4.setText(radiobuttonstext[3]);
					oRBG.addButton(rb4);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBG.setSelectedButton(rb4);
					}
					//	oRBG.addButton(rb4);
					break;
				case 4:
					if(sap.ui.getCore().byId("rd_rbg_5") == null){
						var rb5 =  new sap.m.RadioButton({
							id : "rd_rbg_5",
						});
					}else{
						var rb5 = sap.ui.getCore().byId("rd_rbg_5");
					}
					rb5.setText(radiobuttonstext[4]);
					oRBG.addButton(rb5);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBG.setSelectedButton(rb5);
					}
					//	oRBG.addButton(rb5);
					break;

				}

			}

		}else{
			var oRBGSrep = sap.ui.getCore().byId("oRBGSrep");
			oRBGSrep.removeAllButtons();
			debugger;
			for(i=0;i< radiobuttonstext.length; i++){
				switch (i){
				case 0:
					if(sap.ui.getCore().byId("rd_srbg_1") == null){
						var srb1 =  new sap.m.RadioButton({
							id : "rd_srbg_1",
						});
					}else{
						var srb1 = sap.ui.getCore().byId("rd_srbg_1");
					}
					srb1.setText(radiobuttonstext[0]);
					oRBGSrep.addButton(srb1);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb1);
					}
					//		oRBGSrep.addButton(srb1);
					break;
				case 1:
					if(sap.ui.getCore().byId("rd_srbg_2") == null){
						var srb2 =  new sap.m.RadioButton({
							id : "rd_srbg_2",
						});
					}else{
						var srb2 = sap.ui.getCore().byId("rd_srbg_2");
					}
					srb2.setText(radiobuttonstext[1]);
					oRBGSrep.addButton(srb2);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb2);
					}
					//		oRBGSrep.addButton(srb2);
					break;
				case 2:
					if(sap.ui.getCore().byId("rd_srbg_3") == null){
						var srb3 =  new sap.m.RadioButton({
							id : "rd_srbg_3",
						});
					}else{
						var srb3 = sap.ui.getCore().byId("rd_srbg_3");
					}
					srb3.setText(radiobuttonstext[2]);
					oRBGSrep.addButton(srb3);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb3);
					}
					//		oRBGSrep.addButton(srb3);
					break;
				case 3:
					if(sap.ui.getCore().byId("rd_srbg_4") == null){
						var srb4 =  new sap.m.RadioButton({
							id : "rd_srbg_4",
						});
					}else{
						var srb4 = sap.ui.getCore().byId("rd_srbg_4");
					}
					srb4.setText(radiobuttonstext[3]);
					oRBGSrep.addButton(srb4);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb4);
					}
					//		oRBGSrep.addButton(srb4);
					break;
				case 4:
					if(sap.ui.getCore().byId("rd_srbg_5") == null){
						var srb5 =  new sap.m.RadioButton({
							id : "rd_srbg_5",
						});
					}else{
						var srb5 = sap.ui.getCore().byId("rd_srbg_5");
					}
					srb5.setText(radiobuttonstext[4]);
					oRBGSrep.addButton(srb5);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb5);
					}
					//		oRBGSrep.addButton(srb5);
					break;
				case 5:
					if(sap.ui.getCore().byId("rd_srbg_6") == null){
						var srb6 =  new sap.m.RadioButton({
							id : "rd_srbg_6",
						});
					}else{
						var srb6 = sap.ui.getCore().byId("rd_srbg_6");
					}
					srb6.setText(radiobuttonstext[5]);
					oRBGSrep.addButton(srb6);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb6);
					}
					//		oRBGSrep.addButton(srb6);
					break;
				case 6:
					if(sap.ui.getCore().byId("rd_srbg_7") == null){
						var srb7 =  new sap.m.RadioButton({
							id : "rd_srbg_7",
						});
					}else{
						var srb7 = sap.ui.getCore().byId("rd_srbg_7");
					}
					srb7.setText(radiobuttonstext[6]);
					oRBGSrep.addButton(srb7);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb7);
					}
					//		oRBGSrep.addButton(srb7);
					break;
				case 7:
					if(sap.ui.getCore().byId("rd_srbg_8") == null){
						var srb8 =  new sap.m.RadioButton({
							id : "rd_srbg_8",
						});
					}else{
						var srb8 = sap.ui.getCore().byId("rd_srbg_8");
					}
					srb8.setText(radiobuttonstext[7]);
					oRBGSrep.addButton(srb8);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb8);
					}
					//		oRBGSrep.addButton(srb8);
					break;
				case 8:
					if(sap.ui.getCore().byId("rd_srbg_9") == null){
						var srb9 =  new sap.m.RadioButton({
							id : "rd_srbg_9",
						});
					}else{
						var srb9 = sap.ui.getCore().byId("rd_srbg_9");
					}
					srb9.setText(radiobuttonstext[8]);
					oRBGSrep.addButton(srb9);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb9);
					}
					//		oRBGSrep.addButton(srb9);
					break;
				case 9:
					if(sap.ui.getCore().byId("rd_srbg_10") == null){
						var srb10 =  new sap.m.RadioButton({
							id : "rd_srbg_10",
						});
					}else{
						var srb10 = sap.ui.getCore().byId("rd_srbg_10");
					}
					srb10.setText(radiobuttonstext[9]);
					oRBGSrep.addButton(srb10);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb10);
					}
					//			oRBGSrep.addButton(srb10);
					break;
				case 10:
					if(sap.ui.getCore().byId("rd_srbg_11") == null){
						var srb11 =  new sap.m.RadioButton({
							id : "rd_srbg_11",
						});
					}else{
						var srb11 = sap.ui.getCore().byId("rd_srbg_11");
					}
					srb10.setText(radiobuttonstext[10]);
					oRBGSrep.addButton(srb11);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb11);
					}
					//		oRBGSrep.addButton(srb11);
					break;
				case 11:
					if(sap.ui.getCore().byId("rd_srbg_12") == null){
						var srb12 =  new sap.m.RadioButton({
							id : "rd_srbg_12",
						});
					}else{
						var srb12 = sap.ui.getCore().byId("rd_srbg_12");
					}
					srb12.setText(radiobuttonstext[11]);
					oRBGSrep.addButton(srb12);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb12);
					}
					//		oRBGSrep.addButton(srb12);
					break;
				case 12:
					if(sap.ui.getCore().byId("rd_srbg_13") == null){
						var srb13 =  new sap.m.RadioButton({
							id : "rd_srbg_13",
						});
					}else{
						var srb13 = sap.ui.getCore().byId("rd_srbg_13");
					}
					srb13.setText(radiobuttonstext[12]);
					oRBGSrep.addButton(srb13);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb13);
					}
					//		oRBGSrep.addButton(srb13);
					break;
				case 13:
					if(sap.ui.getCore().byId("rd_srbg_14") == null){
						var srb14 =  new sap.m.RadioButton({
							id : "rd_srbg_14",
						});
					}else{
						var srb14 = sap.ui.getCore().byId("rd_srbg_14");
					}
					srb14.setText(radiobuttonstext[13]);
					oRBGSrep.addButton(srb14);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb14);
					}
					//		oRBGSrep.addButton(srb14);
					break;
				case 14:
					if(sap.ui.getCore().byId("rd_srbg_15") == null){
						var srb15 =  new sap.m.RadioButton({
							id : "rd_srbg_15",
						});
					}else{
						var srb15 = sap.ui.getCore().byId("rd_srbg_15");
					}
					srb15.setText(radiobuttonstext[14]);
					oRBGSrep.addButton(srb15);
					if (radiobuttonskey[i] == "ACCURATE"){
						selectedIndex = i;
						oRBGSrep.setSelectedButton(srb15);
					}
					//		oRBGSrep.addButton(srb15);
					break;

				}

			}

		}

		if (flowType == "INTERN" || flowType == "ADMASINT" || flowType == "ADMTOINT" ){

			var FormContainerForCheckBoxes = sap.ui.getCore().byId("F65C2CB");
			debugger;
			for(i=0;i< checkboxestext.length; i++){
				switch (i){
				case 0:
					var cb1 = sap.ui.getCore().byId("cb1");
					cb1.setText(checkboxestext[0]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch1"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb1.setEnabled(false);
					}
					break;
				case 1:
					var cb2 = sap.ui.getCore().byId("cb2");
					cb2.setText(checkboxestext[1]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch2"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb2.setEnabled(false);
					}
					break;
				case 2:
					var cb3 = sap.ui.getCore().byId("cb3");
					cb3.setText(checkboxestext[2]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch3"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb3.setEnabled(false);
					}
					break;
				case 3:
					var cb4 = sap.ui.getCore().byId("cb4");
					cb4.setText(checkboxestext[3]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch4"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb4.setEnabled(false);
					}
					break;
				case 4:
					var cb5 = sap.ui.getCore().byId("cb5");
					cb5.setText(checkboxestext[4]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch5"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb5.setEnabled(false);
					}
					break;
				case 5:
					var cb6 = sap.ui.getCore().byId("cb6");
					cb6.setText(checkboxestext[5]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch6"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb6.setEnabled(false);
					}
					break;
				case 6:
					var cb7 = sap.ui.getCore().byId("cb7");
					cb7.setText(checkboxestext[6]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch7"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb7.setEnabled(false);
					}
					break;
				case 7:
					var cb8 = sap.ui.getCore().byId("cb8");
					cb8.setText(checkboxestext[7]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch8"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb8.setEnabled(false);
					}
					break;
				case 8:
					var cb9 = sap.ui.getCore().byId("cb9");
					cb9.setText(checkboxestext[8]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch9"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb9.setEnabled(false);
					}
					break;
				case 9:
					var cb10 = sap.ui.getCore().byId("cb10");
					cb10.setText(checkboxestext[9]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch10"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb10.setEnabled(false);
					}
					break;
				case 10:
					var cb11 = sap.ui.getCore().byId("cb11");
					cb11.setText(checkboxestext[10]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch11"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb11.setEnabled(false);
					}
					break;
				case 11:
					var cb12 = sap.ui.getCore().byId("cb12");
					cb12.setText(checkboxestext[11]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch12"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb12.setEnabled(false);
					}
					break;
				case 12:
					var cb13 = sap.ui.getCore().byId("cb13");
					cb13.setText(checkboxestext[12]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch13"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb13.setEnabled(false);
					}
					break;
				case 13:
					var cb14 = sap.ui.getCore().byId("cb14");
					cb14.setText(checkboxestext[13]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch14"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb14.setEnabled(false);
					}
					break;
				case 14:
					var cb15 = sap.ui.getCore().byId("cb15");
					cb15.setText(checkboxestext[14]);
					FormContainerForCheckBoxes.addFormElement(sap.ui.getCore().byId("ch15"));
					if(radiobuttonskey[selectedIndex] == "ACCURATE"){
						cb15.setEnabled(false);
					}
					break;

				}

			}


		}



		sectionrenderobj.Responses_Rendered = "true"; 
		if ( ( sectionrenderobj.Intern1_Rendered != "false") && ( sectionrenderobj.Salesrep1_Rendered != "false") && ( sectionrenderobj.Admin1_Rendered != "false") 
				&& ( sectionrenderobj.Intern2_Rendered != "false") && ( sectionrenderobj.Salesrep2_Rendered != "false") && ( sectionrenderobj.Admin2_Rendered != "false") 
				&& ( sectionrenderobj.ALLSAPCALLSCOMPLETED != false ) && (sectionrenderobj.Responses_Rendered != "false")){

			sap.ui.getCore().byId("back").setEnabled(true);
			sap.ui.getCore().byId("previous").setEnabled(true);
			sap.ui.getCore().byId("next").setEnabled(true);
			sap.ui.getCore().byId("submit").setEnabled(true);
			sap.ui.getCore().byId("reset").setEnabled(true);
			CheckPromoDetails_HideEmptyImageContainers();

		}

			},  
			function(oError)   
			{  
				console.log("Error while getting responses");
			}
	);				



}

//***************Function to Get Images from SAP Recursively**********************//		
function CheckPromoDetails_GetNextImage(promoid,itemid,weekid,checkid, ImageID, flowType, sectionrenderobj, section){

	debugger;
	var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/PromoImagesSet(Promoid='"+promoid+"',Itemid='"+itemid+"',Weekid='"+weekid+"',Checkid='"+checkid+"',Imageid='"+ImageID+"',Flowtype='"+flowType+"')/$value");


	OData
	.request(
			{

				requestUri : sServiceUrl,
				method : "GET",
				headers : {
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/atom+xml",
					"DataServiceVersion" : "2.0",
				}
			},
			function(data, response) {
				debugger;
				var src1;
				var src2; 
				var src3; 
				var src4; 
				var src5; 
				var src6; 
				var src7; 
				var src8;
				var src9;
				var src10; 
				console.log("There should be "+(ImageID - 1)+" images displayed");
				var NumberOfImages = +ImageID - 1;
				if (NumberOfImages == 0){
					if (section == "Intern1" ) {//&& flowType == "INTERN""
						sectionrenderobj.Intern1_Rendered = "true";
						/*					}else if(section == "Intern1" && flowType == "ADMASINT") {
						sectionrenderobj.AdminAsInternDummy_Rendered = "true"; */
					} 
					else if(section == "Salesrep1"){
						sectionrenderobj.Salesrep1_Rendered = "true";
					}else if(section == "Admin1"){
						sectionrenderobj.Admin1_Rendered = "true";
					}else if(section == "Intern2"){
						sectionrenderobj.Intern2_Rendered = "true";
					}else if(section == "Salesrep2"){
						sectionrenderobj.Salesrep2_Rendered = "true";
					}else if(section == "Admin2"){
						sectionrenderobj.Admin2_Rendered = "true";
					}
					debugger;

					if ( ( sectionrenderobj.Intern1_Rendered != "false") && ( sectionrenderobj.Salesrep1_Rendered != "false") && ( sectionrenderobj.Admin1_Rendered != "false") 
							&& ( sectionrenderobj.Intern2_Rendered != "false") && ( sectionrenderobj.Salesrep2_Rendered != "false") && ( sectionrenderobj.Admin2_Rendered != "false") 
							&& ( sectionrenderobj.ALLSAPCALLSCOMPLETED != false )){

						sap.ui.getCore().byId("back").setEnabled(true);
						sap.ui.getCore().byId("previous").setEnabled(true);
						sap.ui.getCore().byId("next").setEnabled(true);
						sap.ui.getCore().byId("submit").setEnabled(true);
						sap.ui.getCore().byId("reset").setEnabled(true);

						CheckPromoDetails_HideEmptyImageContainers();

					}

					return;
				}
				//sectionrenderobj.Page_Rendered = "false";
				var Page_Rendered = false;
				while (Page_Rendered == false){
					switch(NumberOfImages) {					
					case 1:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_image1").getSrc();
							if (src1 != "") sectionrenderobj.Intern1_Rendered = "true";//sectionrenderobj.AdminAsInternDummy_Rendered = "true";}
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simage1").getSrc();
							if (src1 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimage1").getSrc();
							if (src1 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mage1").getSrc();
							if (src1 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2image1").getSrc();
							if (src1 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2image1").getSrc();
							if (src1 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;	
					case 2:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_image2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Intern1_Rendered = "true";//sectionrenderobj.AdminAsInternDummy_Rendered = "true";}
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simage2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimage2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mage2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2image2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2image2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 3:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_image3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Intern1_Rendered = "true";//sectionrenderobj.AdminAsInternDummy_Rendered = "true";}
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simage3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimage3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mage3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2image3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2image3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;					
					case 4:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_image4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Intern1_Rendered = "true";//sectionrenderobj.AdminAsInternDummy_Rendered = "true";}
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simage4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimage4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mage4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2image4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2image4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 5:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_image5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Intern1_Rendered = "true";//sectionrenderobj.AdminAsInternDummy_Rendered = "true";}
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simage5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimage5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mage5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2image5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2image5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 6:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_image6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Intern1_Rendered = "true";//sectionrenderobj.AdminAsInternDummy_Rendered = "true";}
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_simage6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_aimage6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_i2mage6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_s2image6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_a2image6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;					
					case 7:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_image7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Intern1_Rendered = "true";//sectionrenderobj.AdminAsInternDummy_Rendered = "true";}
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_simage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_simage7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_aimage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_aimage7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_i2mage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_i2mage7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_s2image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_s2image7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_a2image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_a2image7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 8:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_image7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_image8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Intern1_Rendered = "true";//sectionrenderobj.AdminAsInternDummy_Rendered = "true";}
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_simage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_simage7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_simage8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_aimage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_aimage7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_aimage8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_i2mage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_i2mage7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_i2mage8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_s2image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_s2image7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_s2image8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_a2image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_a2image7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_a2image8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 9:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_image7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_image8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_image9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Intern1_Rendered = "true";//sectionrenderobj.AdminAsInternDummy_Rendered = "true";}
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_simage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_simage7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_simage8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_simage9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_aimage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_aimage7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_aimage8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_aimage9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_i2mage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_i2mage7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_i2mage8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_i2mage9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_s2image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_s2image7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_s2image8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_s2image9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_a2image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_a2image7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_a2image8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_a2image9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 10:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_image7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_image8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_image9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_image10").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "" && src10 != "") sectionrenderobj.Intern1_Rendered = "true";//sectionrenderobj.AdminAsInternDummy_Rendered = "true";}
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_simage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_simage7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_simage8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_simage9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_simage10").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "" && src10 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_aimage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_aimage7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_aimage8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_aimage9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_aimage10").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "" && src10 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mage1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mage2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mage3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mage4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mage5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_i2mage6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_i2mage7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_i2mage8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_i2mage9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_i2mage10").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "" && src10 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_s2image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_s2image7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_s2image8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_s2image9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_s2image10").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "" && src10 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2image1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2image2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2image3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2image4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2image5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_a2image6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_a2image7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_a2image8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_a2image9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_a2image10").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "" && src10 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					default:
						if (section == "Intern1") {
							sectionrenderobj.Intern1_Rendered = "true";
						} else if(section == "Salesrep1"){
							sectionrenderobj.Salesrep1_Rendered = "true";
						}else if(section == "Admin1"){
							sectionrenderobj.Admin1_Rendered = "true";
						}else if(section == "Intern2"){
							sectionrenderobj.Intern2_Rendered = "true";
						}else if(section == "Salesrep2"){
							sectionrenderobj.Salesrep2_Rendered = "true";
						}else if(section == "Admin2"){
							sectionrenderobj.Admin2_Rendered = "true";
						}
					break;
					}

					/*					if ( ( sectionrenderobj.Intern1_Rendered == "true" || sectionrenderobj.Intern1_Rendered == "") && ( sectionrenderobj.Salesrep1_Rendered == "true" || sectionrenderobj.Salesrep1_Rendered == "") && ( sectionrenderobj.Admin1_Rendered == "true" || sectionrenderobj.Admin1_Rendered == "" ) 
							&& ( sectionrenderobj.Intern2_Rendered == "true" || sectionrenderobj.Intern2_Rendered == "" ) && ( sectionrenderobj.Salesrep2_Rendered == "true" || sectionrenderobj.Salesrep2_Rendered == "") && ( sectionrenderobj.Admin2_Rendered == "true" || sectionrenderobj.Admin2_Rendered == "" ) 
							&& ( sectionrenderobj.ALLSAPCALLSCOMPLETED == true )){*/
					/*					if ( ( sectionrenderobj.Intern1_Rendered != "false") && ( sectionrenderobj.Salesrep1_Rendered != "false") && ( sectionrenderobj.Admin1_Rendered != "false") 
							&& ( sectionrenderobj.Intern2_Rendered != "false") && ( sectionrenderobj.Salesrep2_Rendered != "false") && ( sectionrenderobj.Admin2_Rendered != "false") 
							&& ( sectionrenderobj.ALLSAPCALLSCOMPLETED != false )){
						debugger;
						Page_Rendered = "true";
					}else {
						Page_Rendered = "false";
					}*/
					debugger;
					if ( ( section == "Intern1" && sectionrenderobj.Intern1_Rendered == "true") || (section == "Salesrep1" && sectionrenderobj.Salesrep1_Rendered == "true") || (section == "Admin1" && sectionrenderobj.Admin1_Rendered == "true") || 
							( section == "Intern2" && sectionrenderobj.Intern2_Rendered == "true") || (section == "Salesrep2" && sectionrenderobj.Salesrep2_Rendered == "true") || (section == "Admin2" && sectionrenderobj.Admin2_Rendered == "true") ) {
						Page_Rendered = true;
					}

				}
				debugger;
				if ( ( sectionrenderobj.Intern1_Rendered != "false") && ( sectionrenderobj.Salesrep1_Rendered != "false") && ( sectionrenderobj.Admin1_Rendered != "false") 
						&& ( sectionrenderobj.Intern2_Rendered != "false") && ( sectionrenderobj.Salesrep2_Rendered != "false") && ( sectionrenderobj.Admin2_Rendered != "false") 
						&& ( sectionrenderobj.ALLSAPCALLSCOMPLETED != false ) && (sectionrenderobj.Responses_Rendered != "false")){



					sap.ui.getCore().byId("back").setEnabled(true);
					sap.ui.getCore().byId("previous").setEnabled(true);
					sap.ui.getCore().byId("next").setEnabled(true);
					sap.ui.getCore().byId("submit").setEnabled(true);
					sap.ui.getCore().byId("reset").setEnabled(true);


					CheckPromoDetails_HideEmptyImageContainers();

				}
				//sap.ui.getCore().byId()
			},
			function(err) {
				debugger;				
				var request = err.request; // the request that was
				// sent.
				var response = err.response; // the response that was
				if (response.body == null){
					debugger;
					//console.log("There should be "+(ImageID - 1)+" images displayed");

				}else{

					//sectionrenderobj.Page_Rendered = "false";
					response.body.replace(/['"]+/g, ''); 
					var imgstring = response.body.replace(/['"]+/g, '');
					var lastTwo = imgstring.slice(-2);
					var lastFourteen = imgstring.slice(-14);
					if (lastFourteen == "\\>e 1 &gt;&gt;"){
						imgstring = imgstring.slice(0,-14);
					}
					if(lastTwo == "\\>"){
						imgstring = imgstring.slice(0, -2);
					}

					switch(ImageID){
					case 1:
						debugger;
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_image1").setSrc(imgstring);
							//	sectionrenderobj_Intern1_Rendered = "false";
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simage1").setSrc(imgstring);
							//	sectionrenderobj.Salesrep1_Rendered = "false";
						}else if(section == "Admin1"){
							//sectionrenderobj.Admin1_Rendered = "false";
							sap.ui.getCore().getElementById("display_aimage1").setSrc(imgstring);
						}else if(section == "Intern2"){
							//sectionrenderobj.Intern2_Rendered = "false";
							sap.ui.getCore().getElementById("display_i2mage1").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							//	sectionrenderobj.Salesrep2_Rendered = "false";
							sap.ui.getCore().getElementById("display_s2image1").setSrc(imgstring);
						}else if(section == "Admin2"){
							//		sectionrenderobj.Admin2_Rendered = "false";
							sap.ui.getCore().getElementById("display_a2image1").setSrc(imgstring);
						}
						break;

					case 2:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_image2").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simage2").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimage2").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mage2").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2image2").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2image2").setSrc(imgstring);
						}
						break;

					case 3:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_image3").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simage3").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimage3").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mage3").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2image3").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2image3").setSrc(imgstring);
						}
						break;

					case 4:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_image4").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simage4").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimage4").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mage4").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2image4").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2image4").setSrc(imgstring);
						}
						break;

					case 5:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_image5").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simage5").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimage5").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mage5").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2image5").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2image5").setSrc(imgstring);
						}
						break;

					case 6:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_image6").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simage6").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimage6").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mage6").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2image6").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2image6").setSrc(imgstring);
						}
						break;

					case 7:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_image7").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simage7").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimage7").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mage7").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2image7").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2image7").setSrc(imgstring);
						}
						break;

					case 8:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_image8").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simage8").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimage8").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mage8").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2image8").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2image8").setSrc(imgstring);
						}
						break;

					case 9:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_image9").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simage9").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimage9").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mage9").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2image9").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2image9").setSrc(imgstring);
						}
						break;

					case 10:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_image10").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simage10").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimage10").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mage10").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2image10").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2image10").setSrc(imgstring);
						}
						break;

					}

					ImageID = +ImageID + 1;
					CheckPromoDetails_GetNextImage(promoid,itemid, weekid,checkid, ImageID, flowType, sectionrenderobj, section);						
				}

			}

	);


}

function CheckPromoDetails_HideEmptyImageContainers(){
	debugger;

	if (sap.ui.getCore().byId("display_image1").getSrc() == ""){
		sap.ui.getCore().byId("display_image1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_image1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_image2").getSrc() == ""){
		sap.ui.getCore().byId("display_image2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_image2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_image3").getSrc() == ""){
		sap.ui.getCore().byId("display_image3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_image3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_image4").getSrc() == ""){
		sap.ui.getCore().byId("display_image4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_image4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_image5").getSrc() == ""){
		sap.ui.getCore().byId("display_image5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_image5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_image6").getSrc() == ""){
		sap.ui.getCore().byId("display_image6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_image6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_image7").getSrc() == ""){
		sap.ui.getCore().byId("display_image7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_image7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_image8").getSrc() == ""){
		sap.ui.getCore().byId("display_image8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_image8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_image9").getSrc() == ""){
		sap.ui.getCore().byId("display_image9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_image9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_image10").getSrc() == ""){
		sap.ui.getCore().byId("display_image10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_image10").setVisible(true);
	}

	if (sap.ui.getCore().byId("display_simage1").getSrc() == ""){
		sap.ui.getCore().byId("display_simage1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simage1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simage2").getSrc() == ""){
		sap.ui.getCore().byId("display_simage2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simage2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simage3").getSrc() == ""){
		sap.ui.getCore().byId("display_simage3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simage3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simage4").getSrc() == ""){
		sap.ui.getCore().byId("display_simage4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simage4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simage5").getSrc() == ""){
		sap.ui.getCore().byId("display_simage5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simage5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simage6").getSrc() == ""){
		sap.ui.getCore().byId("display_simage6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simage6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simage7").getSrc() == ""){
		sap.ui.getCore().byId("display_simage7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simage7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simage8").getSrc() == ""){
		sap.ui.getCore().byId("display_simage8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simage8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simage9").getSrc() == ""){
		sap.ui.getCore().byId("display_simage9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simage9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simage10").getSrc() == ""){
		sap.ui.getCore().byId("display_simage10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simage10").setVisible(true);
	}

	if (sap.ui.getCore().byId("display_aimage1").getSrc() == ""){
		sap.ui.getCore().byId("display_aimage1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimage1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimage2").getSrc() == ""){
		sap.ui.getCore().byId("display_aimage2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimage2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimage3").getSrc() == ""){
		sap.ui.getCore().byId("display_aimage3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimage3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimage4").getSrc() == ""){
		sap.ui.getCore().byId("display_aimage4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimage4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimage5").getSrc() == ""){
		sap.ui.getCore().byId("display_aimage5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimage5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimage6").getSrc() == ""){
		sap.ui.getCore().byId("display_aimage6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimage6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimage7").getSrc() == ""){
		sap.ui.getCore().byId("display_aimage7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimage7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimage8").getSrc() == ""){
		sap.ui.getCore().byId("display_aimage8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimage8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimage9").getSrc() == ""){
		sap.ui.getCore().byId("display_aimage9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimage9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimage10").getSrc() == ""){
		sap.ui.getCore().byId("display_aimage10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimage10").setVisible(true);
	}

	if (sap.ui.getCore().byId("display_i2mage1").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mage1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mage1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mage2").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mage2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mage2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mage3").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mage3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mage3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mage4").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mage4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mage4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mage5").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mage5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mage5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mage6").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mage6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mage6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mage7").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mage7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mage7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mage8").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mage8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mage8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mage9").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mage9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mage9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mage10").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mage10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mage10").setVisible(true);
	}

	if (sap.ui.getCore().byId("display_s2image1").getSrc() == ""){
		sap.ui.getCore().byId("display_s2image1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2image1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2image2").getSrc() == ""){
		sap.ui.getCore().byId("display_s2image2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2image2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2image3").getSrc() == ""){
		sap.ui.getCore().byId("display_s2image3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2image3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2image4").getSrc() == ""){
		sap.ui.getCore().byId("display_s2image4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2image4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2image5").getSrc() == ""){
		sap.ui.getCore().byId("display_s2image5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2image5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2image6").getSrc() == ""){
		sap.ui.getCore().byId("display_s2image6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2image6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2image7").getSrc() == ""){
		sap.ui.getCore().byId("display_s2image7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2image7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2image8").getSrc() == ""){
		sap.ui.getCore().byId("display_s2image8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2image8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2image9").getSrc() == ""){
		sap.ui.getCore().byId("display_s2image9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2image9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2image10").getSrc() == ""){
		sap.ui.getCore().byId("display_s2image10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2image10").setVisible(true);
	}

	if (sap.ui.getCore().byId("display_a2image1").getSrc() == ""){
		sap.ui.getCore().byId("display_a2image1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2image1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2image2").getSrc() == ""){
		sap.ui.getCore().byId("display_a2image2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2image2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2image3").getSrc() == ""){
		sap.ui.getCore().byId("display_a2image3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2image3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2image4").getSrc() == ""){
		sap.ui.getCore().byId("display_a2image4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2image4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2image5").getSrc() == ""){
		sap.ui.getCore().byId("display_a2image5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2image5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2image6").getSrc() == ""){
		sap.ui.getCore().byId("display_a2image6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2image6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2image7").getSrc() == ""){
		sap.ui.getCore().byId("display_a2image7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2image7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2image8").getSrc() == ""){
		sap.ui.getCore().byId("display_a2image8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2image8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2image9").getSrc() == ""){
		sap.ui.getCore().byId("display_a2image9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2image9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2image10").getSrc() == ""){
		sap.ui.getCore().byId("display_a2image10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2image10").setVisible(true);
	}



}

function CheckPromoDetails_checkresponse( checkresp, checktext ){
	if ( checkresp == "ACCURATE" )
	{
		checktext = 'Accurate';

	}	
	else if ( checkresp == "NOTACCU" )
	{
		checktext = 'Not Accurate';

	}
	else if ( checkresp == "NSBPCNAT" )
	{
		checktext = 'Not Sold By (PC Nation, Other) on (Amazon, Buy)';

	}
	else if ( checkresp == "CORRECTED" )
	{
		checktext = 'Corrected';

	}
	else if ( checkresp == "CANCELLED" )
	{
		checktext = 'Cancelled this week - do not pay claims';

	}
	else if ( checkresp == "CANONLINE" )
	{
		checktext = 'Cancelled online portion only this week - retail claims stil';

	}
	else if ( checkresp == "NOTCORRECT" )
	{
		checktext = 'Not Corrected';

	}
	else if ( checkresp == "STOCKISS" )
	{
		checktext = 'Stock Issue';

	}
	else if ( checkresp == "RESET" )
	{
		checktext = 'SR Error - Reset';

	}
	else if ( checkresp == "MARGIN" )
	{
		checktext = 'Margin Enhancement (Amazon)';

	}
	else if ( checkresp == "SELFFUND" )
	{
		checktext = 'Self-funded promotion (price difference)';

	}
	else if ( checkresp == "NSONSITE" )
	{
		checktext = 'Not Sold On Site';

	}
	else if ( checkresp == "NOIMAGE" )
	{
		checktext = 'No Image';

	}
	else if ( checkresp == "NOTSHOWN" )
	{
		checktext = 'Sale Not Shown';

	}
	else if ( checkresp == "NOINVEN" )
	{
		checktext = 'No Inventory (use only when the site states there is no stoc)';

	}
	else if ( checkresp == "NOLIMIT" )
	{
		checktext = 'No Limit 2 Notification';

	}
	else if ( checkresp == "WRONGIR" )
	{
		checktext = 'Incorrect IR Amount Listed';

	}
	else if ( checkresp == "WRONGVERB" )
	{
		checktext = 'Approved Brother verbiage incorrect';

	}
	else if ( checkresp == "NSCUSTOMER" )
	{
		checktext = 'Not Sold By Customer (sold by another party)';

	}
	else if ( checkresp == "NSBEEJR" )
	{
		checktext = ' Not Sold By (EE, J&R, Tiger) on (Amazon, Buy) - Intern Erro';

	}
	else if ( checkresp == "INTRESET" )
	{
		checktext = 'Intern Error - Reset';

	}
	
	return  checktext;

}

function CheckPromoDetails_SendImageToSAP(slug, ImgValue, error, ImageSentChecker, ImageId, xcsrf_token_ref) {
	debugger;
	var imgData = JSON.stringify(ImgValue);
	var csrftoken = "";
	//var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
	//var sServiceUrl = getURL("/sap/opu/odata/sap/ZUI5_DAILY_SALES_SRV/DailySalesSet");
	var sServiceUrl1 = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/PromoListSet");
	var hostName = window.location.host;
	var AuthToken = "";

	if(hostName == "ambrifiori.am.brothergroup.net:8443" || hostName == "webdispatcher-d.brother.com:8000"){
		AuthToken = "Basic VVNGSU9SSURFVjpkZVYxMGJmJGch";	
		//AuthToken = "Basic YWFuaXJlZGR5OmJyb3RoZXIx";
	}else if(hostName == "ambrifiori-t.am.brothergroup.net:8443" || hostName == "webdispatcher-d.brother.com:44800"){
		AuthToken = "Basic VVNGSU9SSVRFU1Q6VGVzQDAxQmZ0JQ==";			
	}else if(hostName == "ambrifiori-p.am.brothergroup.net:8443" || hostName == "extranet.brother.com:44800"){
		AuthToken = "Basic VVNGSU9SSVBST0Q6ZklvJHJpQmZAZyE=";
	}
	csrftoken = xcsrf_token_ref.header_xcsrf_token;
	console.log("Fetch CSRF being called before POST Image.....",ImageId);
	console.log("CSRF Token For Sending Images to SAP is: ",csrftoken);

	if(xcsrf_token_ref.header_xcsrf_token == ""){
		OData.request({

			requestUri : sServiceUrl1, //"http://AMBRIFIORI.am.brothergroup.net:8081/sap/opu/odata/sap/ZUI5_DAILY_SALES_SRV/DailySalesSet",
			method : "GET",
			//user : 'aanireddy',
			//password: 'brother1',
			headers : {
				"X-Requested-With" : "XMLHttpRequest",
				"Content-Type" : "application/atom+xml",
				"DataServiceVersion" : "2.0",
				"Authorization" : AuthToken,
				"X-CSRF-Token" : "Fetch"
			}
		},
		function(data, response) {

			console.log("Fetch Image Response is:", response);
			console.log("Fetch Image data is:", data);
			debugger;
			if(sap.ui.Device.browser.chrome || sap.ui.Device.browser.msie || sap.ui.Device.browser.safari){
				header_xcsrf_token = response.headers['x-csrf-token'];
			}else if(sap.ui.Device.browser.firefox){
				header_xcsrf_token = response.headers['X-CSRF-Token']; 
			}

			xcsrf_token_ref.header_xcsrf_token = header_xcsrf_token;
			var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/PromoImagesSet/");
			csrftoken = header_xcsrf_token;

			$.ajax({
				url : sServiceUrl, //'http://ambrifiori.am.brothergroup.net:8081/sap/opu/odata/sap/ZPVSYSTEM_SRV/PromoImagesSet/',
				// dataType: 'json',
				data : imgData,
				// data: image,
				type : 'POST',
				headers : {
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/atom+xml",
					"DataServiceVersion" : "2.0",
					"X-CSRF-Token" : xcsrf_token_ref.header_xcsrf_token, //csrftoken,
					"slug" : slug,
				},
				success : function(data) {
					debugger;
					var ImagesSent = false;
					while(ImagesSent == false){
						switch (ImageId){
						case 1:							
							ImageSentChecker.image1Sent = "true";
							break;
						case 2:							
							ImageSentChecker.image2Sent = "true";
							break;
						case 3:							
							ImageSentChecker.image3Sent = "true";
							break;
						case 4:							
							ImageSentChecker.image4Sent = "true";
							break;
						case 5:							
							ImageSentChecker.image5Sent = "true";
							break;
						case 6:							
							ImageSentChecker.image6Sent = "true";
							break;
						case 7:							
							ImageSentChecker.image7Sent = "true";
							break;
						case 8:							
							ImageSentChecker.image8Sent = "true";
							break;
						case 9:							
							ImageSentChecker.image9Sent = "true";
							break;
						case 10:							
							ImageSentChecker.image10Sent = "true";
							break;
						}

						if(		( ImageId == 1 && ImageSentChecker.image1Sent != "false" ) || ( ImageId == 2 && ImageSentChecker.image2Sent != "false" ) ||            //** should let the program continue after each image is sent and the check to see if all the images are sent successfully needs to be controlled outside the while loop
								( ImageId == 3 && ImageSentChecker.image3Sent != "false" ) || ( ImageId == 4 && ImageSentChecker.image4Sent != "false" ) || 
								( ImageId == 5 && ImageSentChecker.image5Sent != "false" ) || ( ImageId == 6 && ImageSentChecker.image6Sent != "false" ) ||
								( ImageId == 7 && ImageSentChecker.image7Sent != "false" ) || ( ImageId == 8 && ImageSentChecker.image8Sent != "false" ) || 
								( ImageId == 9 && ImageSentChecker.image9Sent != "false" ) || ( ImageId == 10 && ImageSentChecker.image10Sent != "false" ) && 
								ImageSentChecker.ALLSAPCALLSCOMPLETED != false)

						{	
							ImagesSent = true;

						}
					}
					if(ImageSentChecker.image1Sent != "false" && ImageSentChecker.image2Sent != "false" &&       //***** This is the condition which checks if all the images have been sent or not
							ImageSentChecker.image3Sent != "false" && ImageSentChecker.image4Sent != "false" && 
							ImageSentChecker.image5Sent != "false" && ImageSentChecker.image6Sent != "false" && 
							ImageSentChecker.image7Sent != "false" && ImageSentChecker.image8Sent != "false" && 
							ImageSentChecker.image9Sent != "false" && ImageSentChecker.image10Sent != "false" && 
							ImageSentChecker.ALLSAPCALLSCOMPLETED != false)
					{	

						sap.ui.core.BusyIndicator.hide();
						jQuery.sap.require("sap.m.MessageBox");
						sap.m.MessageBox.show(
								"Promo updated successfully", {
									icon: sap.m.MessageBox.Icon.success,
									title: "Promo Status",
									actions: [sap.m.MessageBox.Action.OK],
									onClose: function(oAction){
										$('#myShell2-content').animate({ scrollTop: "0px" });
									}
								});

						//		$('#myShell2-content').scrollTop(0);
						console.log("CSRF Token used For POST ",csrftoken);
						console.log("Image "+ImageId+" Updated Successfully",data);
					}
				},
				error : function(data) {
					debugger;
					sap.ui.core.BusyIndicator.hide();
					error = true;
					console.log("CSRF Token used For POST ",csrftoken);
					console.log("Image Ajax call error data is:",data);
				}
			});

		}, function(err) {
			sap.ui.core.BusyIndicator.hide();
			debugger;
			var request = err.request; // the request that was
			// sent.
			var response = err.response; // the response that was
			// received.
			alert("Error in Get -- Request " + request
					+ " Response " + response);
			error = true;

		});
	}else{
		var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/PromoImagesSet/");
		csrftoken = xcsrf_token_ref.header_xcsrf_token;
		$.ajax({
			url : sServiceUrl, //'http://ambrifiori.am.brothergroup.net:8081/sap/opu/odata/sap/ZPVSYSTEM_SRV/PromoImagesSet/',
			// dataType: 'json',
			data : imgData,
			// data: image,
			type : 'POST',
			headers : {
				"X-Requested-With" : "XMLHttpRequest",
				"Content-Type" : "application/atom+xml",
				"DataServiceVersion" : "2.0",
				/*
				 * "Accept":
				 * "application/atom+xml,application/atomsvc+xml,application/xml",
				 */
				"X-CSRF-Token" : xcsrf_token_ref.header_xcsrf_token,//csrftoken,
				"slug" : slug,
			},
			success : function(data) {
				debugger;
				var ImagesSent = false;
				while(ImagesSent == false){
					switch (ImageId){
					case 1:							
						ImageSentChecker.image1Sent = "true";
						break;
					case 2:							
						ImageSentChecker.image2Sent = "true";
						break;
					case 3:							
						ImageSentChecker.image3Sent = "true";
						break;
					case 4:							
						ImageSentChecker.image4Sent = "true";
						break;
					case 5:							
						ImageSentChecker.image5Sent = "true";
						break;
					case 6:							
						ImageSentChecker.image6Sent = "true";
						break;
					case 7:							
						ImageSentChecker.image7Sent = "true";
						break;
					case 8:							
						ImageSentChecker.image8Sent = "true";
						break;
					case 9:							
						ImageSentChecker.image9Sent = "true";
						break;
					case 10:							
						ImageSentChecker.image10Sent = "true";
						break;
					}

					if(		( ImageId == 1 && ImageSentChecker.image1Sent != "false" ) || ( ImageId == 2 && ImageSentChecker.image2Sent != "false" ) ||            //** should let the program continue after each image is sent and the check to see if all the images are sent successfully needs to be controlled outside the while loop
							( ImageId == 3 && ImageSentChecker.image3Sent != "false" ) || ( ImageId == 4 && ImageSentChecker.image4Sent != "false" ) || 
							( ImageId == 5 && ImageSentChecker.image5Sent != "false" ) || ( ImageId == 6 && ImageSentChecker.image6Sent != "false" ) ||
							( ImageId == 7 && ImageSentChecker.image7Sent != "false" ) || ( ImageId == 8 && ImageSentChecker.image8Sent != "false" ) || 
							( ImageId == 9 && ImageSentChecker.image9Sent != "false" ) || ( ImageId == 10 && ImageSentChecker.image10Sent != "false" ) && 
							ImageSentChecker.ALLSAPCALLSCOMPLETED != false)

					{	
						ImagesSent = true;

					}
				}
				if(ImageSentChecker.image1Sent != "false" && ImageSentChecker.image2Sent != "false" &&       //***** This is the condition which checks if all the images have been sent or not
						ImageSentChecker.image3Sent != "false" && ImageSentChecker.image4Sent != "false" && 
						ImageSentChecker.image5Sent != "false" && ImageSentChecker.image6Sent != "false" && 
						ImageSentChecker.image7Sent != "false" && ImageSentChecker.image8Sent != "false" && 
						ImageSentChecker.image9Sent != "false" && ImageSentChecker.image10Sent != "false" && 
						ImageSentChecker.ALLSAPCALLSCOMPLETED != false)
				{	

					sap.ui.core.BusyIndicator.hide();
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show(
							"Promo updated successfully", {
								icon: sap.m.MessageBox.Icon.success,
								title: "Promo Status",
								actions: [sap.m.MessageBox.Action.OK],
								onClose: function(oAction){
									$('#myShell2-content').animate({ scrollTop: "0px" });
								}
							});

					//		$('#myShell2-content').scrollTop(0);
					console.log("CSRF Token used For POST ",csrftoken);
					console.log("Image "+ImageId+" Updated Successfully",data);

				}
			},
			error : function(data) {
				// debugger;
				sap.ui.core.BusyIndicator.hide();
				error = true;
				console.log("CSRF Token used For POST ",csrftoken);
				console.log("Image Ajax call error data is:",data);
			}
		});

	}
}

function CheckPromoDetails_SetImageSentForimageId(imageId, ImageSentChecker){

	switch(imageId){

	case 1:
		ImageSentChecker.image1Sent = "false";
		break;
	case 2:
		ImageSentChecker.image2Sent = "false";
		break;
	case 3:
		ImageSentChecker.image3Sent = "false";
		break;
	case 4:
		ImageSentChecker.image4Sent = "false";
		break;
	case 5:
		ImageSentChecker.image5Sent = "false";
		break;
	case 6:
		ImageSentChecker.image6Sent = "false";
		break;
	case 7:
		ImageSentChecker.image7Sent = "false";
		break;
	case 8:
		ImageSentChecker.image8Sent = "false";
		break;
	case 9:
		ImageSentChecker.image9Sent = "false";
		break;
	case 10:
		ImageSentChecker.image10Sent = "false";
		break;

	}

}
