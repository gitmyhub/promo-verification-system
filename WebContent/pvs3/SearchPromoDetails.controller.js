sap.ui.controller("pvs3.SearchPromoDetails", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf pvs3.PromoSearch
	 */
//	onInit: function() {

//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf pvs3.PromoSearch
	 */
	onBeforeRendering: function() {
		var promoid = sap.ui.getCore().byId("pid").getValue();

		var itemid = sap.ui.getCore().byId("pitemid").getValue();
		var weekid = sap.ui.getCore().byId("wid").getValue();
		var urole1 = sap.ui.getCore().byId("urole").getValue();

//		********************Set User Name*******************************************//		
		var firstname = sap.ui.getCore().byId("firstname").getValue();
		var shellfname = sap.ui.getCore().byId("fnames");
		shellfname.setText(firstname);


//		********************Function to set details to Promo Details Page************//
		this.fillPageData(promoid, itemid, weekid);
		//*******************************************vinay***********************************//
		var oShell = sap.ui.getCore().byId("myShellS");
		oShell.setSelectedWorksetItem("dummyItem_spd");
		if ( urole1 == 'SALESREP')
		{
			sap.ui.getCore().byId("home_spd").setVisible(true);
			sap.ui.getCore().byId("searchpromo_spd").setVisible(true);
			sap.ui.getCore().byId("searchacc_spd").setVisible(true);
			// sap.ui.getCore().byId("chng_pass").setVisible(true);
			sap.ui.getCore().byId("checkpromo_spd").setVisible(true);
			sap.ui.getCore().byId("internres_spd").setVisible(false);
			sap.ui.getCore().byId("srres_spd").setVisible(false);
			sap.ui.getCore().byId("reassign_spd").setVisible(false);

		}else if ( urole1 == 'ADMIN')
		{
			sap.ui.getCore().byId("home_spd").setVisible(true);
			sap.ui.getCore().byId("searchpromo_spd").setVisible(true);
			sap.ui.getCore().byId("searchacc_spd").setVisible(true);
			// sap.ui.getCore().byId("chng_pass").setVisible(true);
			sap.ui.getCore().byId("checkpromo_spd").setVisible(true);
			sap.ui.getCore().byId("internres_spd").setVisible(true);
			sap.ui.getCore().byId("srres_spd").setVisible(true);
			sap.ui.getCore().byId("reassign_spd").setVisible(true);
		}
		else if ( urole1 == 'MANAGER')
		{
			sap.ui.getCore().byId("home_spd").setVisible(true);
			sap.ui.getCore().byId("searchpromo_spd").setVisible(true);
			sap.ui.getCore().byId("searchacc_spd").setVisible(true);
			// sap.ui.getCore().byId("chng_pass").setVisible(true);
			sap.ui.getCore().byId("checkpromo_spd").setVisible(false);
			sap.ui.getCore().byId("internres_spd").setVisible(false);
			sap.ui.getCore().byId("srres_spd").setVisible(false);
			sap.ui.getCore().byId("reassign_spd").setVisible(false);
		}
		else 
		{
			sap.ui.getCore().byId("home_spd").setVisible(true);
			sap.ui.getCore().byId("searchpromo_spd").setVisible(true);
			sap.ui.getCore().byId("searchacc_spd").setVisible(true);
			// sap.ui.getCore().byId("chng_pass").setVisible(true);
			sap.ui.getCore().byId("checkpromo_spd").setVisible(true);
			sap.ui.getCore().byId("internres_spd").setVisible(false);
			sap.ui.getCore().byId("srres_spd").setVisible(false);
			sap.ui.getCore().byId("reassign_spd").setVisible(false);
		}

		//**********************************end***************************//

	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf pvs3.PromoSearch
	 */
	onAfterRendering: function() {
		//	$("#copyimage").load("ImageCopier.html");
		//*********************************************vinay************************************//
//		$('#myShellS-wsBar-list').hide();
//		$('#myShellS-wsBar').hide();
//		$('#myShellS-wBar').hide();
		//*********************************************end************************************//
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
		$('#myShellS-logoImg').css({'height' : '42px', 'max-height' : '42px'});

	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf pvs3.PromoSearch
	 */
//	onExit: function() {

//	}

	fillPageData : function(promoid, itemid, weekid){

//		Function Import	
		sap.ui.getCore().byId("sback").setEnabled(true);
		sap.ui.getCore().byId("sprevious").setEnabled(false);
		sap.ui.getCore().byId("snext").setEnabled(false);

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
					var promoitem;
					promoitem = +oData.Promoid +'/' +oData.Itemid;
					sap.ui.getCore().getElementById("STF-PI-Id").setValue(promoitem);
					if (sap.ui.getCore().byId("STF-P-Id") == null){  			
						promoi = new sap.m.Input("STF-P-Id");
					}
					promoi.setValue(oData.Promoid);
					sap.ui.getCore().getElementById("STF-Itemid").setValue(oData.Itemid);
					irmir =  +oData.Iramount +'/' +oData.Miramount;
					sap.ui.getCore().getElementById("STF-P-IR").setValue(irmir);		    		
					sap.ui.getCore().getElementById("STF-Cust-ID").setValue(oData.Customer);
					sap.ui.getCore().getElementById("STF-Cust-Name").setValue(oData.Customername);
					sap.ui.getCore().getElementById("STF-Srep").setValue(oData.Salesrep);
					//*****************Vinay changed*****************************//

					var year;
					var mon;
					var date;
					if (oData.Promofrom != null )
					{
						var pFrom = oData.Promofrom;
						pFrom = pFrom.split("T");
						pFrom = pFrom[0];
						year = pFrom.substring(0,4);
						mon  = pFrom.substring(5,7);
						date = pFrom.substring(8,10);
						pFrom = mon + '/' +date+ '/' +year;

						sap.ui.getCore().getElementById("STF-P-Fdate").setValue(pFrom);
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
						sap.ui.getCore().getElementById("STF-P-Tdate").setValue(pTo);
					}

					if (oData.Checkfrom != null )
					{
						var cFrom = oData.Checkfrom;
						cFrom = cFrom.split("T");
						cFrom = cFrom[0];
						year = cFrom.substring(0,4);
						mon  = cFrom.substring(5,7);
						date = cFrom.substring(8,10);
						cFrom = mon + '/' +date+ '/' +year;

						//sap.ui.getCore().getElementById("TF-P-Fdate").setValue(pFrom);
						sap.ui.getCore().getElementById("STF-C-Fdate").setValue(cFrom);

					}

					sap.ui.getCore().getElementById("STF-P-Pro").setValue(oData.Product);
					sap.ui.getCore().getElementById("STF-P-Website").setText(oData.Website);
					sap.ui.getCore().getElementById("STF-Channel").setValue(oData.Channel);
					sap.ui.getCore().getElementById("STF-P-Type").setValue(oData.Plantype+'/'+oData.Channel);
					sap.ui.getCore().getElementById("STF-P-How").setValue(oData.Advtype);
					sap.ui.getCore().getElementById("STF-P-CustPart").setValue(oData.Partid);
					sap.ui.getCore().getElementById("STF-P-ItemStat").setValue(oData.Status);
					sap.ui.getCore().getElementById("STF-P-Pri").setValue(oData.Price);


//					Intern Review Summary - 1ST Cycle				
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
					if (oData.Completedon != null ) 
					{
						compAt = oData.Completedat;
						compAt = compAt.split("T");
						var str2 = compAt[1];
						str2 = str2.replace("H", ':');
						str2 = str2.replace("M", ':');
						str2 = str2.replace("S", '');

					}
					//Concatenate for Intern time stamp 
					if (oData.Completedon != null && oData.Completedon != null ) 
					{
						str1 = compOn;
						str2 = str1 + ' ' + str2;																																																																	
					}
					sap.ui.getCore().getElementById("STF-II").setValue(oData.Userid);
					if ( str2 != null )
					{
						sap.ui.getCore().getElementById("STF-ITS").setValue(str2);	
					}
					//To pass Check Responses text to Intern Reports    		
					var checkresp1;
					var checktext;
					checkresp1 = oData.Checkresp;
					var chktxt = SearchPromoDetails_checkresponse ( checkresp1, checktext );

					if ( chktxt != null )
					{
						sap.ui.getCore().getElementById("STF-Irep").setValue(chktxt);
					}
					sap.ui.getCore().getElementById("STF-Irea").setValue(oData.Inaccursns);
					sap.ui.getCore().getElementById("STF-Icomm").setValue(oData.Comments);
					sap.ui.getCore().getElementById("STF-Accinfo").setValue(oData.Accinfo);


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
					if (oData.Srepcompat != null ) 
					{
						compAt1 = oData.Srepcompat;
						compAt1 = compAt1.split("T");
						str3 = compAt1[1];
						str3 = str3.replace("H", ':');
						str3 = str3.replace("M", ':');
						str3 = str3.replace("S", '');

						//		str1 = str1.split("H");
						//		compAt =  str1[0];
						//		var str2 = str1[2].split("M");
						//		compAt = compAt


					}
					//Concatenate for Sales Rep time stamp 
					if (oData.Srepcompon != null && oData.Srepcompat != null ) 
					{
						str4 = compOn1;
						str5 = str4 + ' ' + str3;																																																																	
					}
					sap.ui.getCore().getElementById("STF-SI").setValue(oData.Srepini);
					if ( str5 != null )
					{
						sap.ui.getCore().getElementById("STF-STS").setValue(str5);
					}		
					//To pass Check Responses text to Intern Reports
					var checkresp2;
					var checktext1;
					checkresp2 = oData.Srepresp;
					//Function to covert check responses to text stored in ZPVSRESPONSES table CHECKRESP field
					var chktxt1 = SearchPromoDetails_checkresponse ( checkresp2, checktext1 );
					if ( chktxt1 != null )
					{
						sap.ui.getCore().getElementById("STF-Srept").setValue(chktxt1);
					}			
					sap.ui.getCore().getElementById("STF-Srea").setValue(oData.Srepreas);
					sap.ui.getCore().getElementById("STF-Scomm").setValue(oData.Srepcomm);


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
					sap.ui.getCore().getElementById("STF-AI").setValue(oData.Admini);
					if ( str6 != null )
					{
						sap.ui.getCore().getElementById("STF-ATS").setValue(str6);	
					}		
					//To pass Check Responses text to Intern Reports
					checkresp2 = oData.Admresp;
					//Function to covert check responses to text stored in ZPVSRESPONSES table CHECKRESP field
					var chktxtresp = SearchPromoDetails_checkresponse ( checkresp2, checktext1 );
					if ( chktxtresp != null )
					{
						sap.ui.getCore().getElementById("STF-Arep").setValue(chktxtresp);
					}
					sap.ui.getCore().getElementById("STF-Area").setValue(oData.Admreas);
					sap.ui.getCore().getElementById("STF-Acomm").setValue(oData.Admcomm);	    		


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
					sap.ui.getCore().getElementById("STF-II2").setValue(oData.Intini2);
					if ( str20 != null )
					{
						sap.ui.getCore().getElementById("STF-ITS2").setValue(str20);	
					}
					//To pass Check Responses text to Intern Reports
					var checkresp1;
					var checktext;
					checkresp1 = oData.Intresp2;
					//Function to covert check responses to text stored in ZPVSRESPONSES table CHECKRESP field
					var chktxt = CheckPromoDetails_checkresponse ( checkresp1, checktext );
					if ( chktxt != null )
					{
						sap.ui.getCore().getElementById("STF-Irep2").setValue(chktxt);
					}
					sap.ui.getCore().getElementById("STF-Irea2").setValue(oData.Intreas2);
					sap.ui.getCore().getElementById("STF-Icomm2").setValue(oData.Intcomm2);



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
					sap.ui.getCore().getElementById("STF-SI2").setValue(oData.Srepini2);
					if ( str50 != null )
					{
						sap.ui.getCore().getElementById("STF-STS2").setValue(str50);
					}
					//To pass Check Responses text to Intern Reports
					var checkresp2;
					var checktext1;
					checkresp2 = oData.Srepresp2;
					//Function to covert check responses to text stored in ZPVSRESPONSES table CHECKRESP field
					var chktxt1 = CheckPromoDetails_checkresponse ( checkresp2, checktext1 );
					if ( chktxt1 != null )
					{
						sap.ui.getCore().getElementById("STF-Srept2").setValue(chktxt1);
					}
					sap.ui.getCore().getElementById("STF-Srea2").setValue(oData.Srepreas2);
					sap.ui.getCore().getElementById("STF-Scomm2").setValue(oData.Srepcomm2);


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
					sap.ui.getCore().getElementById("STF-AI2").setValue(oData.Admini2);
					if ( str60 != null )
					{
						sap.ui.getCore().getElementById("STF-ATS2").setValue(str60);	
					}
					//To pass Check Responses text to Intern Reports
					checkresp2 = oData.Admresp2;
					//Function to covert check responses to text stored in ZPVSRESPONSES table CHECKRESP field
					var chktxtresp = CheckPromoDetails_checkresponse ( checkresp2, checktext1 );
					if ( chktxtresp != null )
					{
						sap.ui.getCore().getElementById("STF-Arep2").setValue(chktxtresp);
					}
					sap.ui.getCore().getElementById("STF-Area2").setValue(oData.Admreas2);
					sap.ui.getCore().getElementById("STF-Acomm2").setValue(oData.Admcomm2);


					sap.ui.getCore().byId("display_imageSearch1").setVisible(true);
					sap.ui.getCore().byId("display_imageSearch2").setVisible(true);
					sap.ui.getCore().byId("display_imageSearch3").setVisible(true);
					sap.ui.getCore().byId("display_imageSearch4").setVisible(true);
					sap.ui.getCore().byId("display_imageSearch5").setVisible(true);
					sap.ui.getCore().byId("display_imageSearch6").setVisible(true);
					sap.ui.getCore().byId("display_imageSearch7").setVisible(true);
					sap.ui.getCore().byId("display_imageSearch8").setVisible(true);
					sap.ui.getCore().byId("display_imageSearch9").setVisible(true);
					sap.ui.getCore().byId("display_imageSearch10").setVisible(true);

					sap.ui.getCore().byId("display_simageSearch1").setVisible(true);
					sap.ui.getCore().byId("display_simageSearch2").setVisible(true);
					sap.ui.getCore().byId("display_simageSearch3").setVisible(true);
					sap.ui.getCore().byId("display_simageSearch4").setVisible(true);
					sap.ui.getCore().byId("display_simageSearch5").setVisible(true);
					sap.ui.getCore().byId("display_simageSearch6").setVisible(true);
					sap.ui.getCore().byId("display_simageSearch7").setVisible(true);
					sap.ui.getCore().byId("display_simageSearch8").setVisible(true);
					sap.ui.getCore().byId("display_simageSearch9").setVisible(true);
					sap.ui.getCore().byId("display_simageSearch10").setVisible(true);

					sap.ui.getCore().byId("display_aimageSearch1").setVisible(true);
					sap.ui.getCore().byId("display_aimageSearch2").setVisible(true);
					sap.ui.getCore().byId("display_aimageSearch3").setVisible(true);
					sap.ui.getCore().byId("display_aimageSearch4").setVisible(true);
					sap.ui.getCore().byId("display_aimageSearch5").setVisible(true);
					sap.ui.getCore().byId("display_aimageSearch6").setVisible(true);
					sap.ui.getCore().byId("display_aimageSearch7").setVisible(true);
					sap.ui.getCore().byId("display_aimageSearch8").setVisible(true);
					sap.ui.getCore().byId("display_aimageSearch9").setVisible(true);
					sap.ui.getCore().byId("display_aimageSearch10").setVisible(true);

					sap.ui.getCore().byId("display_i2mageSearch1").setVisible(true);
					sap.ui.getCore().byId("display_i2mageSearch2").setVisible(true);
					sap.ui.getCore().byId("display_i2mageSearch3").setVisible(true);
					sap.ui.getCore().byId("display_i2mageSearch4").setVisible(true);
					sap.ui.getCore().byId("display_i2mageSearch5").setVisible(true);
					sap.ui.getCore().byId("display_i2mageSearch6").setVisible(true);
					sap.ui.getCore().byId("display_i2mageSearch7").setVisible(true);
					sap.ui.getCore().byId("display_i2mageSearch8").setVisible(true);
					sap.ui.getCore().byId("display_i2mageSearch9").setVisible(true);
					sap.ui.getCore().byId("display_i2mageSearch10").setVisible(true);

					sap.ui.getCore().byId("display_s2imageSearch1").setVisible(true);
					sap.ui.getCore().byId("display_s2imageSearch2").setVisible(true);
					sap.ui.getCore().byId("display_s2imageSearch3").setVisible(true);
					sap.ui.getCore().byId("display_s2imageSearch4").setVisible(true);
					sap.ui.getCore().byId("display_s2imageSearch5").setVisible(true);
					sap.ui.getCore().byId("display_s2imageSearch6").setVisible(true);
					sap.ui.getCore().byId("display_s2imageSearch7").setVisible(true);
					sap.ui.getCore().byId("display_s2imageSearch8").setVisible(true);
					sap.ui.getCore().byId("display_s2imageSearch9").setVisible(true);
					sap.ui.getCore().byId("display_s2imageSearch10").setVisible(true);

					sap.ui.getCore().byId("display_a2imageSearch1").setVisible(true);
					sap.ui.getCore().byId("display_a2imageSearch2").setVisible(true);
					sap.ui.getCore().byId("display_a2imageSearch3").setVisible(true);
					sap.ui.getCore().byId("display_a2imageSearch4").setVisible(true);
					sap.ui.getCore().byId("display_a2imageSearch5").setVisible(true);
					sap.ui.getCore().byId("display_a2imageSearch6").setVisible(true);
					sap.ui.getCore().byId("display_a2imageSearch7").setVisible(true);
					sap.ui.getCore().byId("display_a2imageSearch8").setVisible(true);
					sap.ui.getCore().byId("display_a2imageSearch9").setVisible(true);
					sap.ui.getCore().byId("display_a2imageSearch10").setVisible(true);

//					*******************************Get Images*******************************************//   		
					debugger;
					var sectionrenderobj = { Intern1_Rendered : "",
							Salesrep1_Rendered: "",
							Admin1_Rendered: "",
							Intern2_Rendered: "",
							Salesrep2_Rendered: "",
							Admin2_Rendered: "",
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
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						}else if( oData.Checkid > 1 &&  oData.Excptnpromo == "X" )/*For Case(d)*/{

							if(oData.Checkid > 2 && oData.Srepini == "" ){ /* For Case(b) after the promo changes to an exceptional Promo*/

								ImageId = 1;						
								checkId = 1;
								flowType = 'INTERN';  						

								//section.push("intern1");
								section = "Intern1";
								sectionrenderobj.Intern1_Rendered = "false";
								debugger;
								SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);								

							}else{ /* For Case (d), case(i) and Case(j) */
								ImageId = 1;						
								checkId = 1;
								flowType = 'ADMASINT';  						

								//section.push("intern1");
								section = "Intern1";
								sectionrenderobj.Intern1_Rendered = "false";
								debugger;
								SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
							}

						}else if(oData.Checkid > 1 && oData.Excptnpromo == "")/*For Case(a) and Case(b) and Case(e) and Case(f) and Case(g) and Case(h)*/{

							ImageId = 1;						
							checkId = 1;
							flowType = 'INTERN';  						

							//section.push("intern1");
							section = "Intern1";
							sectionrenderobj.Intern1_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

							if(oData.Flowtype == "INTADM" && ( oData.Status == "COMPLETED" || oData.Status == "CANCELLED") ){/* For Case (b) */

								ImageId = 1;
								checkId =  2;

								flowType = 'INTADM';
								section = 'Admin1';
								sectionrenderobj.Admin1_Rendered = "false";
								debugger;
								SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
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
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED"){
							ImageId = 1;
							checkId = 3;
							flowType = 'SREPADMIN';
							section = 'Admin1';
							sectionrenderobj.Admin1_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
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
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						ImageId = 1;
						checkId = 3;
						flowType = 'SREPADMIN';
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Flowtype == "SREPADMIN"){
							ImageId = 1;
							checkId = 4;
							flowType = 'ADMTOSREP';
							section = 'Salesrep2';
							sectionrenderobj.Salesrep2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}else if(oData.Flowtype == "INTTOSREP" || oData.Flowtype == "INTADM")/*for Case(e) OR Case(f) and Case(i)*/{
							if(oData.Excptnpromo == "X")/* for Case(i) */{
								ImageId = 1;
								checkId = 4;
								flowType = 'ADMASINT';
								section = 'Intern2';
								sectionrenderobj.Intern2_Rendered = "false";
								debugger;
								SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);								
							}else/* for Case(e) */{					
								ImageId = 1;
								checkId = 4;
								flowType = 'ADMTOINT';
								section = 'Intern2';
								sectionrenderobj.Intern2_Rendered = "false";
								debugger;
								SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
							}
						}

						if(oData.Flowtype == "SREPADMIN" && (oData.Status == "COMPLETED" || oData.Status == "CANCELLED" ) )/*for Case(a) */{
							ImageId = 1;
							checkId = 5;
							flowType = 'SREPADMIN';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}else if(oData.Flowtype == "INTADM" && (oData.Status == "COMPLETED" || oData.Status == "CANCELLED" ) )/* For Case(f)*/{
							ImageId = 1;
							checkId = 5;
							flowType = 'INTADM';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);						
						}
					}else if( oData.Flowtype == "SREPADMIN" && oData.Checkid == 5 && oData.Srepini == ""){ /* For Case (b) and Case(g) */

						checkId = 2;
						flowType = 'INTADM';
						ImageId =  1;
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						if( oData.Excptnpromo == "X" )/*for Case(b)*/{
							checkId = 3;
							flowType = 'ADMASINT';
							ImageId = 1;
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}else/*for Case(g)*/{
							checkId = 3;
							flowType = 'ADMTOINT';
							ImageId = 1;
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						}
						ImageId = 1;
						checkId =  4;//+oData.Checkid - 1;
						flowType = 'INTTOSREP';    
						section = 'Salesrep2';
						sectionrenderobj.Salesrep2_Rendered = "false";
						debugger;
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED"){
							ImageId = 1;
							checkId = 5;
							flowType = 'SREPADMIN';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}


					}/*else if( oData.Flowtype == "SREPADMIN" && oData.Checkid == 5 && oData.Excptnpromo == "X" && oData.Srepini != ""){

						ImageId = 1;
						checkId =  2;//+oData.Checkid - 1;

						flowType = 'INTTOSREP';
						//section.push("intern1");
						section = 'Salesrep1';
						sectionrenderobj.Salesrep1_Rendered = "false";
						debugger;
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						ImageId = 1;
						checkId = 3;
						flowType = 'SREPADMIN';
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						ImageId = 1;
						checkId = 4;
						flowType = 'ADMTOSREP';
						section = 'Salesrep2';
						sectionrenderobj.Salesrep2_Rendered = "false";
						debugger;
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED"){
							ImageId = 1;
							checkId = 5;
							flowType = 'SREPADMIN';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
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
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						ImageId = 1;
						checkId = 3;
						flowType = 'SREPADMIN';
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						if(oData.Excptnpromo == ""){
							ImageId = 1;
							checkId = 4;
							flowType = 'ADMTOINT';
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);	
						}else{
							ImageId = 1;
							checkId = 4;
							flowType = 'ADMASINT';
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);	

						}
						ImageId = 1;
						checkId =  5;//+oData.Checkid - 1;
						flowType = 'INTTOSREP';    
						section = 'Salesrep2';
						sectionrenderobj.Salesrep2_Rendered = "false";
						debugger;
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED"){
							ImageId = 1;
							checkId = 6;
							flowType = 'SREPADMIN';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}


					}

					if ( (oData.Flowtype == "ADMTOSREP" && oData.Checkid == 4) || (oData.Flowtype == "ADMTOINT" && oData.Checkid == 4) || (oData.Flowtype == "ADMASINT" && oData.Checkid == 4)){/*For Case(a) and Case (d) and Case(e) and Case(f) and Case(i) and Case(j)*/

						ImageId = 1;
						checkId =  2;
						flowType = 'INTTOSREP';
						section = 'Salesrep1';
						sectionrenderobj.Salesrep1_Rendered = "false";
						debugger;
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						ImageId = 1;
						checkId = 3;
						flowType = 'SREPADMIN';
						section = 'Admin1';
						sectionrenderobj.Admin1_Rendered = "false";
						debugger;
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						
						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED"){
							ImageId = 1;
							checkId = 4;
							flowType = 'ADMASINT';
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
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
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if( oData.Flowtype == "ADMASINT" && (oData.Status == "COMPLETED" || oData.Status == "CANCELLED") ){

							checkId = 3;
							flowType = 'ADMASINT';
							ImageId = 1;
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
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
						SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);

						if(oData.Excptnpromo == "X"){
							checkId = 3;
							flowType = 'ADMASINT';
							ImageId = 1;
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}else/*for Case(g) and Case(h)*/{
							checkId = 3;
							flowType = 'ADMTOINT';
							ImageId = 1;
							section = 'Intern2';
							sectionrenderobj.Intern2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);						
						}
						if(oData.Status == "COMPLETED" || oData.Status == "CANCELLED")/*for Case(h) */{
							ImageId = 1;
							checkId = 4;
							flowType = 'INTADM';
							section = 'Admin2';
							sectionrenderobj.Admin2_Rendered = "false";
							debugger;
							SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkId, ImageId, flowType, sectionrenderobj, section);
						}

					}

					if ( ( oData.Flowtype == "INTERN" ) || ( oData.Flowtype == "ADMASINT" && oData.Checkid == 1 && oData.Status == "ADMIN") )  
					{
						sap.ui.getCore().byId("sback").setEnabled(true);
						sap.ui.getCore().byId("sprevious").setEnabled(true);
						sap.ui.getCore().byId("snext").setEnabled(true);
					}

					sectionrenderobj.ALLSAPCALLSCOMPLETED = true;

					debugger;
					if ( ( sectionrenderobj.Intern1_Rendered != "false") && ( sectionrenderobj.Salesrep1_Rendered != "false") && ( sectionrenderobj.Admin1_Rendered != "false") 
							&& ( sectionrenderobj.Intern2_Rendered != "false") && ( sectionrenderobj.Salesrep2_Rendered != "false") && ( sectionrenderobj.Admin2_Rendered != "false") 
							&& ( sectionrenderobj.ALLSAPCALLSCOMPLETED != false )){

						sap.ui.getCore().byId("sback").setEnabled(true);
						sap.ui.getCore().byId("sprevious").setEnabled(true);
						sap.ui.getCore().byId("snext").setEnabled(true);
						SearchPromoDetails_HideEmptyImageContainers();

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


					/************** Get Images Ends*******************************/ 
					if ( oData.Flowtype == "INTERN" )
					{

						sap.ui.getCore().byId("SF7R1IRS").setVisible(false);
						sap.ui.getCore().byId("SF7R2SRS").setVisible(false);
						sap.ui.getCore().byId("SF7R3ARS").setVisible(false);
						sap.ui.getCore().byId("SF7R4IRS").setVisible(false);
						sap.ui.getCore().byId("SF7R5SRS").setVisible(false);
						sap.ui.getCore().byId("SF7R6ARS").setVisible(false);


					}
//*******************************vinay 11-07-2016**********************************************
//*If Admin press 'Intern Error - Reset' radio button then flow type become 'ADMTOINT'	
										else if ( oData.Flowtype == "ADMTOINT" )
										{
											//Review Summary form container of Intern
											if ( oData.Checkresp != "")
											{
												sap.ui.getCore().byId("SF7R1IRS").setVisible(true);
											}
											else
											{
												sap.ui.getCore().byId("SF7R1IRS").setVisible(false);
											}
											//Sales Rep Review Summary
											if ( oData.Srepresp != "")
											{
												sap.ui.getCore().byId("SF7R2SRS").setVisible(true);
											}
											else
											{
												sap.ui.getCore().byId("SF7R2SRS").setVisible(false);
											}
											//Admin Review Summary
											if ( oData.Admresp != "")
											{
												sap.ui.getCore().byId("SF7R3ARS").setVisible(true);	
											}
											else
											{
												sap.ui.getCore().byId("SF7R3ARS").setVisible(false);
											}

											//Hide or display Review Summary form container of Intern ---- 2nd Cycle
											if ( oData.Intresp2 != "")
											{

												sap.ui.getCore().byId("SF7R4IRS").setVisible(true);
											}
											else
											{
												sap.ui.getCore().byId("SF7R4IRS").setVisible(false);
											}
											//Hide or display Review Summary form container of Sales Rep ---- 2nd Cycle
											if ( oData.Srepresp2 != "")
											{
												sap.ui.getCore().byId("SF7R5SRS").setVisible(true);
											}
											else
											{
												sap.ui.getCore().byId("SF7R5SRS").setVisible(false);	
											}

											//Hide or display Review Summary form container of Admin ---- 2nd Cycle
											if ( oData.Admresp2 != "")
											{
												sap.ui.getCore().byId("SF7R6ARS").setVisible(true);
											}
											else
											{
												sap.ui.getCore().byId("SF7R6ARS").setVisible(false);
											}
										}
//********************************************vinay end changes*************************************//
					
					else if ( oData.Flowtype == "INTADM" )
					{

						if ( oData.Status !=  "COMPLETED" )
						{
							//Hide Review Summary form container of Intern
							if ( oData.Checkresp != "")
							{
								sap.ui.getCore().byId("SF7R1IRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R1IRS").setVisible(false);
							}
							//Sales Rep Review Summary
							if ( oData.Srepresp != "")
							{
								sap.ui.getCore().byId("SF7R2SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R2SRS").setVisible(false);
							}
							//Admin Review Summary
							if ( oData.Admresp != "")
							{
								sap.ui.getCore().byId("SF7R3ARS").setVisible(true);	
							}
							else
							{
								sap.ui.getCore().byId("SF7R3ARS").setVisible(false);
							}

							//Hide Review Summary form container of Intern ---- 2nd Cycle
							if ( oData.Intresp2 != "")
							{

								sap.ui.getCore().byId("SF7R4IRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R4IRS").setVisible(false);
							}
							//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
							if ( oData.Srepresp2 != "")
							{
								sap.ui.getCore().byId("SF7R5SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R5SRS").setVisible(false);	
							}

							//Hide Review Summary form container of Admin ---- 2nd Cycle
							if ( oData.Admresp2 != "")
							{
								sap.ui.getCore().byId("SF7R6ARS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R6ARS").setVisible(false);
							}

						}
						else if ( oData.Status ==  "COMPLETED" )
						{	
							//Hide Review Summary form container of Intern
							if ( oData.Checkresp != "")
							{
								sap.ui.getCore().byId("SF7R1IRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R1IRS").setVisible(false);
							}
							//Sales Rep Review Summary
							if ( oData.Srepresp != "")
							{
								sap.ui.getCore().byId("SF7R2SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R2SRS").setVisible(false);
							}
							//Admin Review Summary
							if ( oData.Admresp != "")
							{
								sap.ui.getCore().byId("SF7R3ARS").setVisible(true);	
							}
							else
							{
								sap.ui.getCore().byId("SF7R3ARS").setVisible(false);
							}

							//Hide Review Summary form container of Intern ---- 2nd Cycle
							if ( oData.Intresp2 != "")
							{

								sap.ui.getCore().byId("SF7R4IRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R4IRS").setVisible(false);
							}
							//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
							if ( oData.Srepresp2 != "")
							{
								sap.ui.getCore().byId("SF7R5SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R5SRS").setVisible(false);	
							}

							//Hide Review Summary form container of Admin ---- 2nd Cycle
							if ( oData.Admresp2 != "")
							{
								sap.ui.getCore().byId("SF7R6ARS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R6ARS").setVisible(false);
							}
						}

					}
					else if ( oData.Flowtype == "SREPADMIN" )
					{


						if ( oData.Status !=  "COMPLETED" )
						{
							//Hide Review Summary form container of Intern
							if ( oData.Checkresp != "")
							{
								sap.ui.getCore().byId("SF7R1IRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R1IRS").setVisible(false);
							}
							//Sales Rep Review Summary
							if ( oData.Srepresp != "")
							{
								sap.ui.getCore().byId("SF7R2SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R2SRS").setVisible(false);
							}
							//Admin Review Summary
							if ( oData.Admresp != "")
							{
								sap.ui.getCore().byId("SF7R3ARS").setVisible(true);	
							}
							else
							{
								sap.ui.getCore().byId("SF7R3ARS").setVisible(false);
							}

							//Hide Review Summary form container of Intern ---- 2nd Cycle
							if ( oData.Intresp2 != "")
							{

								sap.ui.getCore().byId("SF7R4IRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R4IRS").setVisible(false);
							}
							//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
							if ( oData.Srepresp2 != "")
							{
								sap.ui.getCore().byId("SF7R5SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R5SRS").setVisible(false);	
							}

							//Hide Review Summary form container of Admin ---- 2nd Cycle
							if ( oData.Admresp2 != "")
							{
								sap.ui.getCore().byId("SF7R6ARS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R6ARS").setVisible(false);
							}
						}
						else if ( oData.Status ==  "COMPLETED" )
						{	
							//Hide Review Summary form container of Intern
							if ( oData.Checkresp != "")
							{
								sap.ui.getCore().byId("SF7R1IRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R1IRS").setVisible(false);
							}
							//Sales Rep Review Summary
							if ( oData.Srepresp != "")
							{
								sap.ui.getCore().byId("SF7R2SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R2SRS").setVisible(false);
							}
							//Admin Review Summary
							if ( oData.Admresp != "")
							{
								sap.ui.getCore().byId("SF7R3ARS").setVisible(true);	
							}
							else
							{
								sap.ui.getCore().byId("SF7R3ARS").setVisible(false);
							}

							//Hide Review Summary form container of Intern ---- 2nd Cycle
							if ( oData.Intresp2 != "")
							{

								sap.ui.getCore().byId("SF7R4IRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R4IRS").setVisible(false);
							}
							//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
							if ( oData.Srepresp2 != "")
							{
								sap.ui.getCore().byId("SF7R5SRS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R5SRS").setVisible(false);	
							}

							//Hide Review Summary form container of Admin ---- 2nd Cycle
							if ( oData.Admresp2 != "")
							{
								sap.ui.getCore().byId("SF7R6ARS").setVisible(true);
							}
							else
							{
								sap.ui.getCore().byId("SF7R6ARS").setVisible(false);
							}
						}

					}

					else if ( oData.Flowtype == "INTTOSREP" ) 
					{

						//Hide Review Summary form container of Intern
						if ( oData.Checkresp != "")
						{
							sap.ui.getCore().byId("SF7R1IRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R1IRS").setVisible(false);
						}
						//Sales Rep Review Summary
						if ( oData.Srepresp != "")
						{
							sap.ui.getCore().byId("SF7R2SRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R2SRS").setVisible(false);
						}
						//Admin Review Summary
						if ( oData.Admresp != "")
						{
							sap.ui.getCore().byId("SF7R3ARS").setVisible(true);	
						}
						else
						{
							sap.ui.getCore().byId("SF7R3ARS").setVisible(false);
						}

						//Hide Review Summary form container of Intern ---- 2nd Cycle
						if ( oData.Intresp2 != "")
						{

							sap.ui.getCore().byId("SF7R4IRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R4IRS").setVisible(false);
						}
						//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
						if ( oData.Srepresp2 != "")
						{
							sap.ui.getCore().byId("SF7R5SRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R5SRS").setVisible(false);	
						}

						//Hide Review Summary form container of Admin ---- 2nd Cycle
						if ( oData.Admresp2 != "")
						{
							sap.ui.getCore().byId("SF7R6ARS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R6ARS").setVisible(false);
						}

					}
					else if ( oData.Flowtype == "ADMTOSREP" )

					{
						//Hide Review Summary form container of Intern
						if ( oData.Checkresp != "")
						{
							sap.ui.getCore().byId("SF7R1IRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R1IRS").setVisible(false);
						}
						//Sales Rep Review Summary
						if ( oData.Srepresp != "")
						{
							sap.ui.getCore().byId("SF7R2SRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R2SRS").setVisible(false);
						}
						//Admin Review Summary
						if ( oData.Admresp != "")
						{
							sap.ui.getCore().byId("SF7R3ARS").setVisible(true);	
						}
						else
						{
							sap.ui.getCore().byId("SF7R3ARS").setVisible(false);
						}

						//Hide Review Summary form container of Intern ---- 2nd Cycle
						if ( oData.Intresp2 != "")
						{

							sap.ui.getCore().byId("SF7R4IRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R4IRS").setVisible(false);
						}
						//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
						if ( oData.Srepresp2 != "")
						{
							sap.ui.getCore().byId("SF7R5SRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R5SRS").setVisible(false);	
						}

						//Hide Review Summary form container of Admin ---- 2nd Cycle
						if ( oData.Admresp2 != "")
						{
							sap.ui.getCore().byId("SF7R6ARS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R6ARS").setVisible(false);
						}


					}

					else if ( oData.Flowtype == "ADMASINT")
					{

						//Hide Review Summary form container of Intern
						if ( oData.Checkresp != "")
						{
							sap.ui.getCore().byId("SF7R1IRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R1IRS").setVisible(false);
						}
						//Sales Rep Review Summary
						if ( oData.Srepresp != "")
						{
							sap.ui.getCore().byId("SF7R2SRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R2SRS").setVisible(false);
						}
						//Admin Review Summary
						if ( oData.Admresp != "")
						{
							sap.ui.getCore().byId("SF7R3ARS").setVisible(true);	
						}
						else
						{
							sap.ui.getCore().byId("SF7R3ARS").setVisible(false);
						}

						//Hide Review Summary form container of Intern ---- 2nd Cycle
						if ( oData.Intresp2 != "")
						{

							sap.ui.getCore().byId("SF7R4IRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R4IRS").setVisible(false);
						}
						//Hide Review Summary form container of Sales Rep ---- 2nd Cycle
						if ( oData.Srepresp2 != "")
						{
							sap.ui.getCore().byId("SF7R5SRS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R5SRS").setVisible(false);	
						}

						//Hide Review Summary form container of Admin ---- 2nd Cycle
						if ( oData.Admresp2 != "")
						{
							sap.ui.getCore().byId("SF7R6ARS").setVisible(true);
						}
						else
						{
							sap.ui.getCore().byId("SF7R6ARS").setVisible(false);
						}

					}

					else 		//Manager
					{



					}

				},
				function(oError){
					sap.ui.core.BusyIndicator.hide();
					var message = $(oError.response.body).find('message').first().text(); 
					alert(message);
				}
		);
	},
	//*******************************vinay**************************//
	SearchPromoDetailsFillShellContent: function(sId, oShell, obj)
	{

		switch (sId) {
		case "home_spd":

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



		case "checkpromo_spd" :
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


		case "searchpromo_spd":
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


		case "searchacc_spd":
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

		case "internres_spd":
			var oShell = sap.ui.getCore().byId("AdminShell");
			var json = {};
			json.SelectedWorkSetItem = "minternres";
			var submitmodel = new sap.ui.model.json.JSONModel();
			submitmodel.setData(json);
			sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
			sap.ui.getCore().byId("idPromolist1").invalidate();	
			app.to("idPromolist1", "flip");
			break;

		case "srres_spd":
			var oShell = sap.ui.getCore().byId("AdminShell");
			var json = {};
			json.SelectedWorkSetItem = "msrres";
			var submitmodel = new sap.ui.model.json.JSONModel();
			submitmodel.setData(json);
			sap.ui.getCore().setModel(submitmodel,"ModelFromBack");
			sap.ui.getCore().byId("idPromolist1").invalidate();	
			app.to("idPromolist1", "flip");
			break;

		case "reassign_spd":
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
	navtoback : function()
	{
		debugger;
		var oShell = sap.ui.getCore().byId("myShell");
		var oSelectedWorkSetItem = oShell.getSelectedWorksetItem();

		var json = {};
		//json.Serialnumbers = SubmittedSerialNumbers;
		json.SelectedWorkSetItem = oSelectedWorkSetItem;
		//	json.Internid = sap.ui.getCore().byId("uid").getValue();
		var submitmodel = new sap.ui.model.json.JSONModel();
		submitmodel.setData(json);
		sap.ui.getCore().setModel(submitmodel,"ModelFromBack");

		var urole1 = sap.ui.getCore().byId("urole").getValue();
		if( ( urole1 == "" ) || urole1 == "SALESREP")
		{      	       		 	
			app.to("idPromolist", "flip");
		}
		else if ( ( urole1 == "ADMIN" ) || ( urole1 == "MANAGER" ) )
		{
//			***************************************new lines added by chandana***********************************
			var oShell = sap.ui.getCore().byId("AdminShell");
			var oSelectedWorkSetItem = oShell.getSelectedWorksetItem();

			var json = {};
			json.Serialnumbers = SubmittedSerialNumbers;
			json.SelectedWorkSetItem = oSelectedWorkSetItem;
			var submitmodel = new sap.ui.model.json.JSONModel();
			submitmodel.setData(json);
			sap.ui.getCore().setModel(submitmodel,"ModelFromBack");	
			//sap.ui.getCore().byId("idPromolist1").invalidate();	
//			***************************************new lines added by chandana***********************************	       	       		 
			app.to("idPromolist1", "flip");
		}
	}

});

function SearchPromoDetails_checkresponse( checkresp, checktext ){
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
//*************************************vinay end*****************************//
//***************Function to Get Images from SAP Recursively**********************//		
function SearchPromoDetails_GetNextImage(promoid,itemid,weekid,checkid, ImageID, flowType, sectionrenderobj, section){

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
					debugger;

					if ( ( sectionrenderobj.Intern1_Rendered != "false") && ( sectionrenderobj.Salesrep1_Rendered != "false") && ( sectionrenderobj.Admin1_Rendered != "false") 
							&& ( sectionrenderobj.Intern2_Rendered != "false") && ( sectionrenderobj.Salesrep2_Rendered != "false") && ( sectionrenderobj.Admin2_Rendered != "false") 
							&& ( sectionrenderobj.ALLSAPCALLSCOMPLETED != false )){

						sap.ui.getCore().byId("sback").setEnabled(true);
						sap.ui.getCore().byId("sprevious").setEnabled(true);
						sap.ui.getCore().byId("snext").setEnabled(true);

						SearchPromoDetails_HideEmptyImageContainers();

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
							src1 = sap.ui.getCore().getElementById("display_imageSearch1").getSrc();
							if (src1 != "") sectionrenderobj.Intern1_Rendered = "true";
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simageSearch1").getSrc();
							if (src1 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimageSearch1").getSrc();
							if (src1 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mageSearch1").getSrc();
							if (src1 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2imageSearch1").getSrc();
							if (src1 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2imageSearch1").getSrc();
							if (src1 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;	
					case 2:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_imageSearch2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Intern1_Rendered = "true";
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simageSearch2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimageSearch2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mageSearch2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2imageSearch2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2imageSearch2").getSrc();
							if (src1 != "" && src2 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 3:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_imageSearch3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Intern1_Rendered = "true";
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simageSearch3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimageSearch3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mageSearch3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2imageSearch3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2imageSearch3").getSrc();
							if (src1 != "" && src2 != "" && src3 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;					
					case 4:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_imageSearch4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Intern1_Rendered = "true";
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simageSearch4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimageSearch4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mageSearch4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2imageSearch4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2imageSearch4").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 5:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_imageSearch5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Intern1_Rendered = "true";
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simageSearch5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimageSearch5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mageSearch5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2imageSearch5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2imageSearch5").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 6:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_imageSearch6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Intern1_Rendered = "true";
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_simageSearch6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_aimageSearch6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_i2mageSearch6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_s2imageSearch6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_a2imageSearch6").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;					
					case 7:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_imageSearch7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Intern1_Rendered = "true";
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_simageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_simageSearch7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_aimageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_aimageSearch7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_i2mageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_i2mageSearch7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_s2imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_s2imageSearch7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_a2imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_a2imageSearch7").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 8:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_imageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_imageSearch8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Intern1_Rendered = "true";
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_simageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_simageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_simageSearch8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_aimageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_aimageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_aimageSearch8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_i2mageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_i2mageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_i2mageSearch8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_s2imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_s2imageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_s2imageSearch8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_a2imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_a2imageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_a2imageSearch8").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 9:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_imageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_imageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_imageSearch9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Intern1_Rendered = "true";
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_simageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_simageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_simageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_simageSearch9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_aimageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_aimageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_aimageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_aimageSearch9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_i2mageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_i2mageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_i2mageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_i2mageSearch9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_s2imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_s2imageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_s2imageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_s2imageSearch9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_a2imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_a2imageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_a2imageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_a2imageSearch9").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "") sectionrenderobj.Admin2_Rendered = "true";
						}
						break;
					case 10:
						debugger;
						if(section == "Intern1"){
							src1 = sap.ui.getCore().getElementById("display_imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_imageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_imageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_imageSearch9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_imageSearch10").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "" && src10 != "") sectionrenderobj.Intern1_Rendered = "true";
						}else if (section == "Salesrep1"){						
							src1 = sap.ui.getCore().getElementById("display_simageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_simageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_simageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_simageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_simageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_simageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_simageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_simageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_simageSearch9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_simageSearch10").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "" && src10 != "") sectionrenderobj.Salesrep1_Rendered = "true";
						}else if (section == "Admin1"){
							src1 = sap.ui.getCore().getElementById("display_aimageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_aimageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_aimageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_aimageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_aimageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_aimageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_aimageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_aimageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_aimageSearch9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_aimageSearch10").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "" && src10 != "") sectionrenderobj.Admin1_Rendered = "true";						
						}else if (section == "Intern2"){
							src1 = sap.ui.getCore().getElementById("display_i2mageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_i2mageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_i2mageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_i2mageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_i2mageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_i2mageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_i2mageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_i2mageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_i2mageSearch9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_i2mageSearch10").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "" && src10 != "") sectionrenderobj.Intern2_Rendered = "true";
						}else if (section == "Salesrep2"){
							src1 = sap.ui.getCore().getElementById("display_s2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_s2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_s2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_s2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_s2imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_s2imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_s2imageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_s2imageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_s2imageSearch9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_s2imageSearch10").getSrc();
							if (src1 != "" && src2 != "" && src3 != "" && src4 != "" && src5 != "" && src6 != "" && src7 != "" && src8 != "" && src9 != "" && src10 != "") sectionrenderobj.Salesrep2_Rendered = "true";
						}else if (section == "Admin2"){
							src1 = sap.ui.getCore().getElementById("display_a2imageSearch1").getSrc();
							src2 = sap.ui.getCore().getElementById("display_a2imageSearch2").getSrc();
							src3 = sap.ui.getCore().getElementById("display_a2imageSearch3").getSrc();
							src4 = sap.ui.getCore().getElementById("display_a2imageSearch4").getSrc();
							src5 = sap.ui.getCore().getElementById("display_a2imageSearch5").getSrc();
							src6 = sap.ui.getCore().getElementById("display_a2imageSearch6").getSrc();
							src7 = sap.ui.getCore().getElementById("display_a2imageSearch7").getSrc();
							src8 = sap.ui.getCore().getElementById("display_a2imageSearch8").getSrc();
							src9 = sap.ui.getCore().getElementById("display_a2imageSearch9").getSrc();
							src10 = sap.ui.getCore().getElementById("display_a2imageSearch10").getSrc();
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
						&& ( sectionrenderobj.ALLSAPCALLSCOMPLETED != false )){

					sap.ui.getCore().byId("sback").setEnabled(true);
					sap.ui.getCore().byId("sprevious").setEnabled(true);
					sap.ui.getCore().byId("snext").setEnabled(true);

					SearchPromoDetails_HideEmptyImageContainers();

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
							sap.ui.getCore().getElementById("display_imageSearch1").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simageSearch1").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimageSearch1").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mageSearch1").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2imageSearch1").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2imageSearch1").setSrc(imgstring);
						}
						break;

					case 2:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_imageSearch2").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simageSearch2").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimageSearch2").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mageSearch2").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2imageSearch2").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2imageSearch2").setSrc(imgstring);
						}
						break;

					case 3:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_imageSearch3").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simageSearch3").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimageSearch3").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mageSearch3").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2imageSearch3").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2imageSearch3").setSrc(imgstring);
						}
						break;

					case 4:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_imageSearch4").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simageSearch4").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimageSearch4").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mageSearch4").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2imageSearch4").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2imageSearch4").setSrc(imgstring);
						}
						break;

					case 5:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_imageSearch5").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simageSearch5").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimageSearch5").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mageSearch5").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2imageSearch5").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2imageSearch5").setSrc(imgstring);
						}
						break;

					case 6:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_imageSearch6").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simageSearch6").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimageSearch6").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mageSearch6").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2imageSearch6").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2imageSearch6").setSrc(imgstring);
						}
						break;

					case 7:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_imageSearch7").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simageSearch7").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimageSearch7").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mageSearch7").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2imageSearch7").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2imageSearch7").setSrc(imgstring);
						}
						break;

					case 8:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_imageSearch8").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simageSearch8").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimageSearch8").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mageSearch8").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2imageSearch8").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2imageSearch8").setSrc(imgstring);
						}
						break;

					case 9:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_imageSearch9").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simageSearch9").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimageSearch9").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mageSearch9").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2imageSearch9").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2imageSearch9").setSrc(imgstring);
						}
						break;

					case 10:
						if(section == "Intern1"){
							sap.ui.getCore().getElementById("display_imageSearch10").setSrc(imgstring);
						}else if(section == "Salesrep1"){						
							sap.ui.getCore().getElementById("display_simageSearch10").setSrc(imgstring);
						}else if(section == "Admin1"){
							sap.ui.getCore().getElementById("display_aimageSearch10").setSrc(imgstring);
						}else if(section == "Intern2"){
							sap.ui.getCore().getElementById("display_i2mageSearch10").setSrc(imgstring);
						}else if(section == "Salesrep2"){
							sap.ui.getCore().getElementById("display_s2imageSearch10").setSrc(imgstring);
						}else if(section == "Admin2"){
							sap.ui.getCore().getElementById("display_a2imageSearch10").setSrc(imgstring);
						}
						break;

					}

					ImageID = +ImageID + 1;
					SearchPromoDetails_GetNextImage(promoid,itemid, weekid,checkid, ImageID, flowType, sectionrenderobj, section);						
				}

			}

	);


}


function SearchPromoDetails_HideEmptyImageContainers(){

	if (sap.ui.getCore().byId("display_imageSearch1").getSrc() == ""){
		sap.ui.getCore().byId("display_imageSearch1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_imageSearch1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_imageSearch2").getSrc() == ""){
		sap.ui.getCore().byId("display_imageSearch2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_imageSearch2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_imageSearch3").getSrc() == ""){
		sap.ui.getCore().byId("display_imageSearch3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_imageSearch3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_imageSearch4").getSrc() == ""){
		sap.ui.getCore().byId("display_imageSearch4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_imageSearch4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_imageSearch5").getSrc() == ""){
		sap.ui.getCore().byId("display_imageSearch5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_imageSearch5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_imageSearch6").getSrc() == ""){
		sap.ui.getCore().byId("display_imageSearch6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_imageSearch6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_imageSearch7").getSrc() == ""){
		sap.ui.getCore().byId("display_imageSearch7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_imageSearch7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_imageSearch8").getSrc() == ""){
		sap.ui.getCore().byId("display_imageSearch8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_imageSearch8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_imageSearch9").getSrc() == ""){
		sap.ui.getCore().byId("display_imageSearch9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_imageSearch9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_imageSearch10").getSrc() == ""){
		sap.ui.getCore().byId("display_imageSearch10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_imageSearch10").setVisible(true);
	}

	if (sap.ui.getCore().byId("display_simageSearch1").getSrc() == ""){
		sap.ui.getCore().byId("display_simageSearch1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simageSearch1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simageSearch2").getSrc() == ""){
		sap.ui.getCore().byId("display_simageSearch2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simageSearch2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simageSearch3").getSrc() == ""){
		sap.ui.getCore().byId("display_simageSearch3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simageSearch3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simageSearch4").getSrc() == ""){
		sap.ui.getCore().byId("display_simageSearch4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simageSearch4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simageSearch5").getSrc() == ""){
		sap.ui.getCore().byId("display_simageSearch5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simageSearch5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simageSearch6").getSrc() == ""){
		sap.ui.getCore().byId("display_simageSearch6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simageSearch6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simageSearch7").getSrc() == ""){
		sap.ui.getCore().byId("display_simageSearch7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simageSearch7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simageSearch8").getSrc() == ""){
		sap.ui.getCore().byId("display_simageSearch8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simageSearch8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simageSearch9").getSrc() == ""){
		sap.ui.getCore().byId("display_simageSearch9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simageSearch9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_simageSearch10").getSrc() == ""){
		sap.ui.getCore().byId("display_simageSearch10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_simageSearch10").setVisible(true);
	}

	if (sap.ui.getCore().byId("display_aimageSearch1").getSrc() == ""){
		sap.ui.getCore().byId("display_aimageSearch1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimageSearch1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimageSearch2").getSrc() == ""){
		sap.ui.getCore().byId("display_aimageSearch2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimageSearch2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimageSearch3").getSrc() == ""){
		sap.ui.getCore().byId("display_aimageSearch3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimageSearch3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimageSearch4").getSrc() == ""){
		sap.ui.getCore().byId("display_aimageSearch4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimageSearch4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimageSearch5").getSrc() == ""){
		sap.ui.getCore().byId("display_aimageSearch5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimageSearch5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimageSearch6").getSrc() == ""){
		sap.ui.getCore().byId("display_aimageSearch6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimageSearch6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimageSearch7").getSrc() == ""){
		sap.ui.getCore().byId("display_aimageSearch7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimageSearch7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimageSearch8").getSrc() == ""){
		sap.ui.getCore().byId("display_aimageSearch8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimageSearch8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimageSearch9").getSrc() == ""){
		sap.ui.getCore().byId("display_aimageSearch9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimageSearch9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_aimageSearch10").getSrc() == ""){
		sap.ui.getCore().byId("display_aimageSearch10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_aimageSearch10").setVisible(true);
	}

	if (sap.ui.getCore().byId("display_i2mageSearch1").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mageSearch1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mageSearch1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mageSearch2").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mageSearch2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mageSearch2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mageSearch3").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mageSearch3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mageSearch3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mageSearch4").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mageSearch4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mageSearch4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mageSearch5").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mageSearch5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mageSearch5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mageSearch6").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mageSearch6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mageSearch6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mageSearch7").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mageSearch7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mageSearch7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mageSearch8").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mageSearch8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mageSearch8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mageSearch9").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mageSearch9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mageSearch9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_i2mageSearch10").getSrc() == ""){
		sap.ui.getCore().byId("display_i2mageSearch10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_i2mageSearch10").setVisible(true);
	}

	if (sap.ui.getCore().byId("display_s2imageSearch1").getSrc() == ""){
		sap.ui.getCore().byId("display_s2imageSearch1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2imageSearch1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2imageSearch2").getSrc() == ""){
		sap.ui.getCore().byId("display_s2imageSearch2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2imageSearch2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2imageSearch3").getSrc() == ""){
		sap.ui.getCore().byId("display_s2imageSearch3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2imageSearch3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2imageSearch4").getSrc() == ""){
		sap.ui.getCore().byId("display_s2imageSearch4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2imageSearch4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2imageSearch5").getSrc() == ""){
		sap.ui.getCore().byId("display_s2imageSearch5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2imageSearch5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2imageSearch6").getSrc() == ""){
		sap.ui.getCore().byId("display_s2imageSearch6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2imageSearch6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2imageSearch7").getSrc() == ""){
		sap.ui.getCore().byId("display_s2imageSearch7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2imageSearch7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2imageSearch8").getSrc() == ""){
		sap.ui.getCore().byId("display_s2imageSearch8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2imageSearch8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2imageSearch9").getSrc() == ""){
		sap.ui.getCore().byId("display_s2imageSearch9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2imageSearch9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_s2imageSearch10").getSrc() == ""){
		sap.ui.getCore().byId("display_s2imageSearch10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_s2imageSearch10").setVisible(true);
	}

	if (sap.ui.getCore().byId("display_a2imageSearch1").getSrc() == ""){
		sap.ui.getCore().byId("display_a2imageSearch1").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2imageSearch1").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2imageSearch2").getSrc() == ""){
		sap.ui.getCore().byId("display_a2imageSearch2").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2imageSearch2").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2imageSearch3").getSrc() == ""){
		sap.ui.getCore().byId("display_a2imageSearch3").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2imageSearch3").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2imageSearch4").getSrc() == ""){
		sap.ui.getCore().byId("display_a2imageSearch4").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2imageSearch4").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2imageSearch5").getSrc() == ""){
		sap.ui.getCore().byId("display_a2imageSearch5").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2imageSearch5").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2imageSearch6").getSrc() == ""){
		sap.ui.getCore().byId("display_a2imageSearch6").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2imageSearch6").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2imageSearch7").getSrc() == ""){
		sap.ui.getCore().byId("display_a2imageSearch7").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2imageSearch7").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2imageSearch8").getSrc() == ""){
		sap.ui.getCore().byId("display_a2imageSearch8").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2imageSearch8").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2imageSearch9").getSrc() == ""){
		sap.ui.getCore().byId("display_a2imageSearch9").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2imageSearch9").setVisible(true);
	}
	if (sap.ui.getCore().byId("display_a2imageSearch10").getSrc() == ""){
		sap.ui.getCore().byId("display_a2imageSearch10").setVisible(false);
	}else{
		sap.ui.getCore().byId("display_a2imageSearch10").setVisible(true);
	}


}

