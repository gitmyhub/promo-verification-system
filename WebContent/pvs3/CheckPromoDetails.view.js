sap.ui
.jsview(
		"pvs3.CheckPromoDetails",
		{

			/**
			 * Specifies the Controller belonging to this View. In the
			 * case that it is not implemented, or that "null" is
			 * returned, this View does not have a Controller.
			 * 
			 * @memberOf pvs3.PromoDetails
			 */
			getControllerName : function() {
				return "pvs3.CheckPromoDetails";
			},

			/**
			 * Is initially called once after the Controller has been
			 * instantiated. It is the place where the UI is
			 * constructed. Since the Controller is given to this
			 * method, its event handlers can be attached right away.
			 * 
			 * @memberOf pvs3.PromoDetails
			 */

			createContent : function(oController) {

				SubmittedSerialNumbers = []; 

				// debugger;
				var oAppHeader = new sap.ui.commons.ApplicationHeader(
				"appHeader");
				oAppHeader.setLogoText(" Promo Verification System");
				oAppHeader.setDisplayWelcome(false);
				// var firstname =
				// sap.ui.getCore().byId("firstname").getValue();
				// oAppHeader.setUserName(firstname);
				oAppHeader.setLogoSrc("Images/brother.jpg");

				var oPromoid = new sap.m.Label({
					id : 'P-Id',
					text : 'Promo/Item ID',
				});

				var oLItem = new sap.m.Label({
					id : 'Itemid',
					text : 'Item ID',
				});

				var oLCustid = new sap.m.Label({
					id : 'Cust-ID',
					text : 'Customer ID'
				});
				var oLCustn = new sap.m.Label({
					id : 'Cust-Name',
					text : 'Customer Name',
					/*					layoutData : new sap.ui.layout.GridData({		
						span : "L6" 
					}),*/
				});
				var oLSrep = new sap.m.Label({
					id : 'Sales-Rep',
					text : 'Sales Rep'
				});
				var oLChan = new sap.m.Label({
					id : 'Channel',
					text : 'Channel'
				});
				var oLPtype = new sap.m.Label({
					id : 'P-Type',
					text : 'Plan Type/Channel',					/*vinay*/
					layoutData : new sap.ui.layout.GridData({
						span : "L5"
					}),
				});
				var oLHow = new sap.m.Label({
					id : 'P-How',
					text : 'How Advertized?',
					layoutData : new sap.ui.layout.GridData({	/*vinay*/
						span : "L5"
					}),	
				});
				var oLFdate = new sap.m.Label({
					id : 'P-Fdate',
					text : 'Promo From Date',
					/* 					layoutData : new sap.ui.layout.GridData({
						span : "L6"								
					}), */
				});
				var oLTdate = new sap.m.Label({
					id : 'P-Tdate',
					text : 'Promo To Date',
					/*					layoutData : new sap.ui.layout.GridData({
						span : "L6"							    
					}), */
				});
				var oCFdate = new sap.m.Label({
					id : 'C-Fdate',
					text : 'Check From Date',	
					/*					layoutData : new sap.ui.layout.GridData({
						span : "L6"							    
					}), */
				});
				var oLPro = new sap.m.Label({
					id : 'P-Pro',
					text : 'Product'
				});
				var oLCustpart = new sap.m.Label({
					id : 'P-CustPart',
					text : 'Customer Part ID',
					layoutData : new sap.ui.layout.GridData({		/*vinay*/
						span : "L5"
					}),
				});
				var oLItemstat = new sap.m.Label({
					id : 'P-ItemStat',
					text : 'Item Status',
					layoutData : new sap.ui.layout.GridData({		/*vinay*/
						span : "L5"
					}),
				});
				var oLWeb = new sap.m.Label({
					id : 'P-Web',
					text : 'Website',
					/*					layoutData : new sap.ui.layout.GridData({		
						span : "L6" 
					}), */
				});

				var oLPrice = new sap.m.Label({
					id : 'P-Pri',
					text : 'Price',
					layoutData : new sap.ui.layout.GridData({		/*vinay*/
						span : "L5"
					}),
				});

				var oLIR = new sap.m.Label({
					id : 'P-IR',
					text : 'IR/MIR'
				});

				//*************************************vinay start 15-04******************************************//
				var oLII = new sap.m.Label({
					id : 'P-II',
					text : 'Intern Initials',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})	

				});

				oLII.addStyleClass("custlableft");
				var oLITS = new sap.m.Label({
					id : 'P-ITS',
					text : 'Time Stamp',
					layoutData : new sap.ui.layout.GridData({		
						span : "L1"
					})					

				});

				oLITS.addStyleClass("custLabel");					

				var oLIrep = new sap.m.Label({
					id : 'P-Irep',
					text : 'Intern Reports',
					layoutData : new sap.ui.layout.GridData({		
						span : "L1"
					})						
				});
				oLIrep.addStyleClass("custLabel");					

				var oLIrea = new sap.m.Label({
					id : 'P-Irea',
					text : 'Reason',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					}),						

				});
				oLIrea.addStyleClass("custlableft");

				var oLIcomm = new sap.m.Label({
					id : 'P-Icomm',
					text : 'Intern Comments',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					}),					

				});
				oLIcomm.addStyleClass("custlableft");

				var oLIsc1 = new sap.m.Label({
					id : 'P-Isc1',
					text : 'Intern Screenshots',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					}),							

				});
				oLIsc1.addStyleClass("custlableft");

				var oLSI = new sap.m.Label({
					id : 'P-SI',
					text : 'Sales Rep Initials',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})							
				});
				oLSI.addStyleClass("custlableft");

				var oLSTS = new sap.m.Label({
					id : 'P-STS',
					text : 'Time Stamp',
					layoutData : new sap.ui.layout.GridData({		
						span : "L1"
					})						
				});
				oLSTS.addStyleClass("custLabel");

				var oLSrept = new sap.m.Label({
					id : 'P-Srep',
					text : 'Sales Rep Reports',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLSrept.addStyleClass("custlabsrep");

				var oLSrea = new sap.m.Label({
					id : 'P-Srea',
					text : 'Reason',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLSrea.addStyleClass("custlableft");

				var oLScomm = new sap.m.Label({
					id : 'P-Scomm',
					text : 'Sales Rep  Comments',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})						
				});
				oLScomm.addStyleClass("custlableft");

				var oLSsc1 = new sap.m.Label({
					id : 'P-Ssc1',
					text : 'Sales Rep Screenshots',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLSsc1.addStyleClass("custlableft");


				var oLAI = new sap.m.Label({
					id : 'P-AI',
					text : 'Admin Initials',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})						
				});
				oLAI.addStyleClass("custlableft");

				var oLATS = new sap.m.Label({
					id : 'P-ATS',
					text : 'Time Stamp',
					layoutData : new sap.ui.layout.GridData({		
						span : "L1"
					})							
				});
				oLATS.addStyleClass("custLabel");

				var oLArep = new sap.m.Label({
					id : 'P-Arep',
					text : 'Admin Reports',
					layoutData : new sap.ui.layout.GridData({		
						span : "L1"
					})					
				});
				oLArep.addStyleClass("custLabel");

				var oLArea = new sap.m.Label({
					id : 'P-Area',
					text : 'Reason',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})						
				});
				oLArea.addStyleClass("custlableft");

				var oLAcomm = new sap.m.Label({
					id : 'P-Acomm',
					text : 'Admin  Comments',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLAcomm.addStyleClass("custlableft");

				var oLAsc1 = new sap.m.Label({
					id : 'P-Asc1',
					text : 'Admin Screenshots',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})						
				});
				oLAsc1.addStyleClass("custlableft");


				var oLII2 = new sap.m.Label({
					id : 'P-II2',
					text : 'Intern Initials',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLII2.addStyleClass("custlableft");

				var oLITS2 = new sap.m.Label({
					id : 'P-ITS2',
					text : 'Time Stamp',
					layoutData : new sap.ui.layout.GridData({		
						span : "L1"
					})
				});
				oLITS2.addStyleClass("custLabel");

				var oLIrep2 = new sap.m.Label({
					id : 'P-Irep2',
					text : 'Intern Reports',
					layoutData : new sap.ui.layout.GridData({		
						span : "L1"
					})					
				});
				oLIrep2.addStyleClass("custLabel");

				var oLIrea2 = new sap.m.Label({
					id : 'P-Irea2',
					text : 'Reason',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLIrea2.addStyleClass("custlableft");

				var oLIcomm2 = new sap.m.Label({
					id : 'P-Icomm2',
					text : 'Intern Comments',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLIcomm2.addStyleClass("custlableft");

				var oLIsc2 = new sap.m.Label({
					id : 'P-Isc2',
					text : 'Intern Screenshots',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLIsc2.addStyleClass("custlableft");

				var oLSI2 = new sap.m.Label({
					id : 'P-SI2',
					text : 'Sales Rep Initials',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLSI2.addStyleClass("custlableft");

				var oLSTS2 = new sap.m.Label({
					id : 'P-STS2',
					text : 'Time Stamp',
					layoutData : new sap.ui.layout.GridData({		
						span : "L1"
					})					
				});
				oLSTS2.addStyleClass("custLabel");

				var oLSrept2 = new sap.m.Label({
					id : 'P-Srep2',
					text : 'Sales Rep Reports',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLSrept2.addStyleClass("custlabsrep");

				var oLSrea2 = new sap.m.Label({
					id : 'P-Srea2',
					text : 'Reason',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLSrea2.addStyleClass("custlableft");

				var oLScomm2 = new sap.m.Label({
					id : 'P-Scomm2',
					text : 'Sales Rep  Comments',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLScomm2.addStyleClass("custlableft");

				var oLSsc2 = new sap.m.Label({
					id : 'P-Ssc2',
					text : 'Sales Rep Screenshots',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLSsc2.addStyleClass("custlableft");

				var oLAI2 = new sap.m.Label({
					id : 'P-AI2',
					text : 'Admin Initials',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLAI2.addStyleClass("custlableft");

				var oLATS2 = new sap.m.Label({
					id : 'P-ATS2',
					text : 'Time Stamp',
					layoutData : new sap.ui.layout.GridData({		
						span : "L1"
					})					
				});
				oLATS2.addStyleClass("custLabel");

				var oLArep2 = new sap.m.Label({
					id : 'P-Arep2',
					text : 'Admin Reports',
					layoutData : new sap.ui.layout.GridData({		
						span : "L1"
					})					
				});
				oLArep2.addStyleClass("custLabel");

				var oLArea2 = new sap.m.Label({
					id : 'P-Area2',
					text : 'Reason',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				//oLAI2.addStyleClass("custlableft");
				oLArea2.addStyleClass("custlableft");

				var oLAcomm2 = new sap.m.Label({
					id : 'P-Acomm2',
					text : 'Admin  Comments',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLAcomm2.addStyleClass("custlableft");

				var oLAsc2 = new sap.m.Label({
					id : 'P-Asc2',
					text : 'Admin Screenshots',
					layoutData : new sap.ui.layout.GridData({		
						span : "L2"
					})					
				});
				oLAsc2.addStyleClass("custlableft");

//				************************************vinay end added****************************************//

				var Back = new sap.m.Button({
					id : 'back',
					text : 'Back',
					type : "Emphasized",
					press : function () {
						//sap.ui.core.BusyIndicator.show(0);
						CheckPromoDetails_ClearAllData();
						SubmittedSerialNumbers = [];
						oController.navtoback(SubmittedSerialNumbers);
						//sap.ui.core.BusyIndicator.hide();		
					},

					layoutData : new sap.ui.layout.GridData({
						span : "L1 M1 S8"
					})
				});

				var Prev = new sap.m.Button({
					id : 'previous',
					text : 'Previous',
					type : "Emphasized",
					layoutData : new sap.ui.layout.GridData({
						span : "L1 M1 S8"
					}),
					press : function() {
						//debugger;		
						sap.ui.getCore().byId("next").setEnabled(false);
						sap.ui.getCore().byId("back").setEnabled(true);
						sap.ui.getCore().byId("previous").setEnabled(false);
						sap.ui.getCore().byId("submit").setEnabled(false);
						sap.ui.getCore().byId("reset").setEnabled(false);
						CheckPromoDetails_PrepareNextEntry("Prev", oController);
					}
				});

				var feHead = new sap.ui.layout.form.FormElement({
					label : "",
					id : 'TV-Head',
					text : 'Review Promotion Details',
				});

				var feBack = new sap.ui.layout.form.FormElement({
					label : "",
					fields : [ Back ]
				});

				var fePrev = new sap.ui.layout.form.FormElement({
					// label : "",
					fields : [ Prev ]
				});

				var fePid = new sap.ui.layout.form.FormElement({
					label : oPromoid,
					fields : [ new sap.m.Input('TF-PI-Id', {
						editable : false,
					}) ]
				});

				var feCust = new sap.ui.layout.form.FormElement({
					label : oLCustid,
					fields : [ new sap.m.Input('TF-Cust-ID', {
						editable : false,
					}) ]

				});

				var feCutName = new sap.ui.layout.form.FormElement({
					label : oLCustn,
					fields : [ new sap.m.Input('TF-Cust-Name', {
						editable : false,
					}) ]
				});

				var feSrep = new sap.ui.layout.form.FormElement({
					label : oLSrep,
					fields : [ new sap.m.Input('TF-Srep', {
						editable : false,
					}) ]
				});

				var feChannel = new sap.ui.layout.form.FormElement({
					label : oLChan,
					setEditable : true,
					fields : [ new sap.m.Input('TF-Channel', {
						editable : false,
					}) ]
				});

				var Next = new sap.m.Button({
					id : 'next',
					text : 'Next',
					type : "Emphasized",
					layoutData : new sap.ui.layout.GridData({
						span : "L1 M2 S8"
					}),
					press : function() {
						//debugger;	
						sap.ui.getCore().byId("next").setEnabled(false);
						sap.ui.getCore().byId("back").setEnabled(true);
						sap.ui.getCore().byId("previous").setEnabled(false);
						sap.ui.getCore().byId("submit").setEnabled(false);
						sap.ui.getCore().byId("reset").setEnabled(false);
						CheckPromoDetails_PrepareNextEntry("Next", oController);
					}
				});

				var feNext = new sap.ui.layout.form.FormElement({
					// label : "",
					fields : [ Next

					           ]

				});

				var fePtype = new sap.ui.layout.form.FormElement({
					label : oLPtype,
					fields : [ new sap.m.Input('TF-P-Type', {
						editable : false,
					}) ]
				});

				var feHow = new sap.ui.layout.form.FormElement({
					label : oLHow,
					fields : [ new sap.m.Input('TF-P-How', {
						editable : false,
					}) ]
				});

				oType = new sap.ui.model.type.DateTime({
					source : {
						pattern : "yyyy-MM-dd HH:mm:ss Z"
					}
				});
				var oDateFormat = sap.ui.core.format.DateFormat
				.getInstance({
					pattern : "MM.dd.yyyy"
				});

				var feFdate = new sap.ui.layout.form.FormElement({
					label : oLFdate,
					fields : [ new sap.m.Input('TF-P-Fdate', {
						editable : false,
						text : {
							path : "Promofrom",
							type : oType,
							formatter : function(d) {
								return oDateFormat.format(new Date(d))
							}
						}
					}) ]
				});

				var feTdate = new sap.ui.layout.form.FormElement({
					label : oLTdate,
					fields : [ new sap.m.Input('TF-P-Tdate', {
						editable : false,
					}) ]
				});

				var feCdate = new sap.ui.layout.form.FormElement({
					label : oCFdate,
					fields : [ new sap.m.Input('TF-C-Fdate', {
						editable : false,
					}) ]
				});

				var fePro = new sap.ui.layout.form.FormElement({
					label : oLPro,
					fields : [ new sap.m.Input('TF-P-Pro', {
						editable : false,
					}) ]
				});

				var feCustpart = new sap.ui.layout.form.FormElement({
					label : oLCustpart,
					fields : [ new sap.m.Input('TF-P-CustPart', {
						editable : false,
					}) ]
				});

				var feItemstat = new sap.ui.layout.form.FormElement({
					label : oLItemstat,
					fields : [ new sap.m.Input('TF-P-ItemStat', {
						editable : false,
					}) ]
				});

				//**************************vinay changed**********************************//
				var web = new sap.m.Link('TF-P-Website', {
					enabled : true,
					emphasized : true,
					subtle : true,
					target: "_blank",
					press: function(e){
						debugger;
						var link = web.getText();
						//web.getHref(web.getText());
						link = "http://".concat(link)
						window.open(link);
						//web.setTarget(_parent);
					}

				});

				var feWeb = new sap.ui.layout.form.FormElement({
					label : oLWeb,
					fields : [ web ]
				});

//				**********************************vinay changed end**************************************//
				var fePrice = new sap.ui.layout.form.FormElement({
					label : oLPrice,
					fields : [ new sap.m.Input('TF-P-Pri', {
						editable : false,
					}) ]
				});

				var feIR = new sap.ui.layout.form.FormElement({
					label : oLIR,
					fields : [ new sap.m.Input('TF-P-IR', {
						editable : false,
					}) ]
				});

				var feItem = new sap.ui.layout.form.FormElement({
					label : oLItem,
					fields : [ new sap.m.Input('TF-Itemid', {
						editable : false,
					}) ]
				});

				var RdHead = new sap.m.Label({
					id : 'idRdHead',
					text : 'Choose one of the following responses:'
				});
				RdHead.addStyleClass("label");
				var feRdHead = new sap.ui.layout.form.FormElement({
					fields : [ RdHead ]
				});
				//*************************************vinay start*****************************//
				var oLAccinfo = new sap.m.Label({
					id : 'idAccinfo',
					text : 'Account Info',
					layoutData : new sap.ui.layout.GridData({
						span : "L1M2S2"
					}),

				});
				oLAccinfo.addStyleClass("label");
				var accinfo = new sap.m.TextArea('TF-Accinfo', {
					editable : false,

				});

				var feAccinfota = new sap.ui.layout.form.FormElement({
					label : oLAccinfo,
					fields : [ accinfo ]
				});
				//*************************************vinay end*****************************//
				// Radio Buttons

				var oRBG = new sap.m.RadioButtonGroup(
						"oRBG",
						{
							buttons : [
							           new sap.m.RadioButton({
							        	   id : "rd_rbg_6",
//							        	   text : "Accurate"

							           }),
////							           new sap.m.RadioButton(
////							           {
////							           id : "rd_rbg_2",
////							           // text : "Not accurate",


////							           }),
////							           new sap.m.RadioButton(
////							           {
////							           id : "rd_rbg_3",
////							           //text : "Not Sold By (PC Nation, Other) on (Amazon, Buy)"
////							           }),

							           ],

							           select : function() {
							        	   var RadioButtons = {};
							        	   var indexSelected = oRBG.getSelectedIndex();
							        	   var RadioButton_Model = sap.ui.getCore().getModel("Radio_Buttons_model");
							        	   RadioButtons = RadioButton_Model.getData();
							        	   var radiobuttonkeys = RadioButtons.Keys;
							        	   var radiobuttontext = RadioButtons.Text;
							        	   var id = "";
							        	   var idnum = 0;
							        	   var CheckBoxes = {};
							        	   //var indexSelected = oRBG.getSelectedIndex();
							        	   var CheckBoxes_Model = sap.ui.getCore().getModel("Check_Boxes_model");
							        	   CheckBoxes = CheckBoxes_Model.getData();
							        	   var checkboxeskeys = CheckBoxes.Keys;
							        	   var checkboxestext = CheckBoxes.Text;
							        	   //debugger;
							        	   if (radiobuttonkeys[indexSelected] == 'NOTACCU') {

							        		   id = "";
							        		   idnum = 0;
							        		   debugger;
							        		   for(i=0;i<checkboxeskeys.length;i++){	
							        			   id = "";
							        			   idnum = i + 1;
							        			   id = "cb" + idnum;
							        			   sap.ui.getCore().byId(id).setSelected(false);
							        			   sap.ui.getCore().byId(id).setEnabled(true);
							        		   }

							        		   /*							        						   sap.ui.getCore().byId("cb1").setSelected(false);
							        						   sap.ui.getCore().byId("cb2").setSelected(false);
							        						   sap.ui.getCore().byId("cb3").setSelected(false);
							        						   sap.ui.getCore().byId("cb4").setSelected(false);
							        						   sap.ui.getCore().byId("cb5").setSelected(false);
							        						   sap.ui.getCore().byId("cb6").setSelected(false);
							        						   sap.ui.getCore().byId("cb7").setSelected(false);
							        						   sap.ui.getCore().byId("cb8").setSelected(false); 
							        						   sap.ui.getCore().byId("cb1").setEnabled(true);
							        						   sap.ui.getCore().byId("cb2").setEnabled(true);
							        						   sap.ui.getCore().byId("cb3").setEnabled(true);
							        						   sap.ui.getCore().byId("cb4").setEnabled(true);
							        						   sap.ui.getCore().byId("cb5").setEnabled(true);
							        						   sap.ui.getCore().byId("cb6").setEnabled(true);
							        						   sap.ui.getCore().byId("cb7").setEnabled(true);
							        						   sap.ui.getCore().byId("cb8").setEnabled(true);*/	

							        	   } 

							        	   else if (radiobuttonkeys[indexSelected] == 'ACCURATE') {
							        		   id = "";
							        		   idnum = 0;
							        		   debugger;
							        		   for(i=0;i<checkboxeskeys.length;i++){	
							        			   id = "";
							        			   idnum = i + 1;
							        			   id = "cb" + idnum;
							        			   sap.ui.getCore().byId(id).setSelected(false);
							        			   sap.ui.getCore().byId(id).setEnabled(false);
							        		   }


							        		   /*							        						   sap.ui.getCore().byId("cb1").setSelected(false);
							        						   sap.ui.getCore().byId("cb2").setSelected(false);
							        						   sap.ui.getCore().byId("cb3").setSelected(false);
							        						   sap.ui.getCore().byId("cb4").setSelected(false);
							        						   sap.ui.getCore().byId("cb5").setSelected(false);
							        						   sap.ui.getCore().byId("cb6").setSelected(false);
							        						   sap.ui.getCore().byId("cb7").setSelected(false);
							        						   sap.ui.getCore().byId("cb8").setSelected(false); 
							        						   sap.ui.getCore().byId("cb1").setEnabled(false);
							        						   sap.ui.getCore().byId("cb2").setEnabled(false);
							        						   sap.ui.getCore().byId("cb3").setEnabled(false);
							        						   sap.ui.getCore().byId("cb4").setEnabled(false);
							        						   sap.ui.getCore().byId("cb5").setEnabled(false);
							        						   sap.ui.getCore().byId("cb6").setEnabled(false);
							        						   sap.ui.getCore().byId("cb7").setEnabled(false);
							        						   sap.ui.getCore().byId("cb8").setEnabled(false); */
							        	   } 

							        	   else 							        						   
							        	   {
							        		   id = "";
							        		   idnum = 0;
							        		   debugger;
							        		   for(i=0;i<checkboxeskeys.length;i++){
							        			   id = "";
							        			   idnum = i + 1;
							        			   id = "cb" + idnum;
							        			   sap.ui.getCore().byId(id).setSelected(false);
							        			   sap.ui.getCore().byId(id).setEnabled(false);
							        		   }
							        		   /*sap.ui.getCore().byId("cb1").setSelected(false);
							        						   sap.ui.getCore().byId("cb2").setSelected(false);
							        						   sap.ui.getCore().byId("cb3").setSelected(false);
							        						   sap.ui.getCore().byId("cb4").setSelected(false);
							        						   sap.ui.getCore().byId("cb5").setSelected(false);
							        						   sap.ui.getCore().byId("cb6").setSelected(false);
							        						   sap.ui.getCore().byId("cb7").setSelected(false);
							        						   sap.ui.getCore().byId("cb8").setSelected(false); 
							        						   sap.ui.getCore().byId("cb1").setEnabled(false);
							        						   sap.ui.getCore().byId("cb2").setEnabled(false);
							        						   sap.ui.getCore().byId("cb3").setEnabled(false);
							        						   sap.ui.getCore().byId("cb4").setEnabled(false);
							        						   sap.ui.getCore().byId("cb5").setEnabled(false);
							        						   sap.ui.getCore().byId("cb6").setEnabled(false);
							        						   sap.ui.getCore().byId("cb7").setEnabled(false);
							        						   sap.ui.getCore().byId("cb8").setEnabled(false); */
							        	   } 

							           }

						});				

				var radBut = new sap.ui.layout.form.FormElement({
					fields : [ oRBG ]
				});


				var rd1 =        new sap.m.RadioButton({
					id : "rd_rbg_1",
//					text : "Accurate"

				});
				var rd2 =         new sap.m.RadioButton(
						{
							id : "rd_rbg_2",
							// text : "Not accurate",


						});
				var rd3 =     		   new sap.m.RadioButton(
						{
							id : "rd_rbg_3",
							//text : "Not Sold By (PC Nation, Other) on (Amazon, Buy)"
						});
				var rd4 =     		   new sap.m.RadioButton(
						{
							id : "rd_rbg_4",
							//text : "Not Sold By (PC Nation, Other) on (Amazon, Buy)"
						});
				var rd5 =     		   new sap.m.RadioButton(
						{
							id : "rd_rbg_5",
							//text : "Not Sold By (PC Nation, Other) on (Amazon, Buy)"
						});



				var oRBGSrep = new sap.m.RadioButtonGroup(
						"oRBGSrep",
						{
							buttons : [
							           new sap.m.RadioButton({
							        	   id : "rd_srbg_16",
							        	   //	   text : "Accurate - Intern Error"
							           }),
//							           new sap.m.RadioButton({
//							           id : "rd_srbg_2",
//							           //	   text : "Corrected - Pay Claims - Attach New Screenshot"
//							           }),
//							           //*****************************************Alignment change by vinay*********************//							           
//							           new sap.m.RadioButton(
//							           {
//							           id : "rd_srbg_3",
//							           // 			   text : "Cancelled this week - do not pay claims"
//							           }),
//							           new sap.m.RadioButton
//							           ({
//							           id : "rd_srbg_4",
//							           // 			   text : "Cancelled online portion only this week - retail claims still valid"
//							           }),

//							           new sap.m.RadioButton
//							           ({
//							           id : "rd_srbg_5",
//							           //  			   text : "Not Corrected"
//							           }),					
//							           new sap.m.RadioButton
//							           ({
//							           id : "rd_srbg_6",
//							           //   			   text : "Not Sold By (PC Nation,Other) on (Amazon, Buy)"
//							           }),
//							           new sap.m.RadioButton
//							           ({
//							           id : "rd_srbg_7",
//							           //   			   text : "Stock Issue"
//							           }),
//							           new sap.m.RadioButton(
//							           {
//							           id : "rd_srbg_8",
//							           //    			   text : "SR Error - Reset"
//							           }),
//							           new sap.m.RadioButton(
//							           {
//							           id : "rd_srbg_9",
//							           //    		     text : "Margin Enhancement (Amazon)"
//							           }),
//							           new sap.m.RadioButton(
//							           {
//							           id : "rd_srbg_10",
//							           //    			   text : "Self-funded promotion (price difference)"	/*vinay*/
//							           }),
//							           new sap.m.RadioButton(
//							           {
//							           id : "rd_srbg_11",
//							           }),
//							           new sap.m.RadioButton(
//							           {
//							           id : "rd_srbg_12",
//							           }),
//							           new sap.m.RadioButton(
//							           {
//							           id : "rd_srbg_13",
//							           }),
//							           new sap.m.RadioButton(
//							           {
//							           id : "rd_srbg_14",
//							           }),
//							           new sap.m.RadioButton(
//							           {
//							           id : "rd_srbg_15",
//							           }),
							           ],
							           //}
//							           ******************************************vinay end****************************************//
						});						
				var radButSrep = new sap.ui.layout.form.FormElement({
					fields : [ oRBGSrep ]
				});


				var srd1  =          new sap.m.RadioButton({
					id : "rd_srbg_1",
					//	   text : "Accurate - Intern Error"
				});
				var srd2 =          new sap.m.RadioButton({
					id : "rd_srbg_2",
					//	   text : "Corrected - Pay Claims - Attach New Screenshot"
				});
//				*****************************************Alignment change by vinay*********************//							           
				var srd3 =       new sap.m.RadioButton(
						{
							id : "rd_srbg_3",
							// 			   text : "Cancelled this week - do not pay claims"
						});
				var srd4 =        		   new sap.m.RadioButton
				({
					id : "rd_srbg_4",
					// 			   text : "Cancelled online portion only this week - retail claims still valid"
				});

				var srd5 =    		   new sap.m.RadioButton
				({
					id : "rd_srbg_5",
					//  			   text : "Not Corrected"
				});					
				var srd6 =    		   new sap.m.RadioButton
				({
					id : "rd_srbg_6",
					//   			   text : "Not Sold By (PC Nation,Other) on (Amazon, Buy)"
				});
				var srd7      		=   new sap.m.RadioButton
				({
					id : "rd_srbg_7",
					//   			   text : "Stock Issue"
				});
				var srd8 =      		   new sap.m.RadioButton(
						{
							id : "rd_srbg_8",
							//    			   text : "SR Error - Reset"
						});
				var srd9 =      		   new sap.m.RadioButton(
						{
							id : "rd_srbg_9",
							//    		     text : "Margin Enhancement (Amazon)"
						});
				var srd10 =       		   new sap.m.RadioButton(
						{
							id : "rd_srbg_10",
							//    			   text : "Self-funded promotion (price difference)"	/*vinay*/
						});
				var srd11 =        		   new sap.m.RadioButton(
						{
							id : "rd_srbg_11",
						});
				var srd12	=               new sap.m.RadioButton(
						{
							id : "rd_srbg_12",
						});
				var srd13 =		 		new sap.m.RadioButton(
						{
							id : "rd_srbg_13",
						});
				var srd14 =				new sap.m.RadioButton(
						{
							id : "rd_srbg_14",
						});
				var srd15 =				new sap.m.RadioButton(
						{
							id : "rd_srbg_15",
						});



				// Check Boxes

				var oLCb = new sap.m.Label({
					id : 'idLcb',
					text : 'if inaccurate check all that apply',
					layoutData : new sap.ui.layout.GridData({
						span : "L12"
					})
				});
				oLCb.addStyleClass("label");
				var feCb = new sap.ui.layout.form.FormElement({
					id : 'fecb',
					label : oLCb,

				});

				var fecb1 = new sap.ui.layout.form.FormElement('ch1', {
					fields : [ new sap.m.CheckBox({
						id : 'cb1',
						//	text : 'Not Sold On Site',
						checked : false,
						enabled : false
					}) ]
				});

				var fecb2 = new sap.ui.layout.form.FormElement('ch2', {
					fields : [ new sap.m.CheckBox({
						id : 'cb2',
						//		text : 'No Image',
						checked : false,
						enabled : false
					}) ]
				});

				var fecb3 = new sap.ui.layout.form.FormElement('ch3', {
					fields : [ new sap.m.CheckBox({
						id : 'cb3',
						//       	  text : 'Sale Not Shown',
						checked : false,
						enabled : false
					}), ]
				});
				var fecb4 = new sap.ui.layout.form.FormElement(	'ch4', {
					fields : [ new sap.m.CheckBox({
						id : 'cb4',
						//		        			  text : 'No Inventory (Use ONLY when the site states there is no stock)',
						checked : false,
						enabled : false
					}), ]
				});
				var fecb5 = new sap.ui.layout.form.FormElement('ch5', {
					fields : [new sap.m.CheckBox({
						id : 'cb5',
						//	        	  text : 'No Limit 2 Notification',
						checked : false,
						enabled : false
					}), ]
				});

				var fecb6 = new sap.ui.layout.form.FormElement('ch6', {

					fields : [

					          new sap.m.CheckBox({
					        	  id : 'cb6',
					        	  //	        	  text : 'Incorrect IR Amount Listed',
					        	  checked : false,
					        	  enabled : false
					          }), ]
				});

				var fecb7 = new sap.ui.layout.form.FormElement('ch7', {

					fields : [

					          new sap.m.CheckBox({
					        	  id : 'cb7',
					        	  //	        	  text : 'Approved Brother verbiage Incorrect',
					        	  checked : false,
					        	  enabled : false
					          }), ]
				});


				var fecb8 = new sap.ui.layout.form.FormElement(
						'ch8',
						{

							fields : [ new sap.m.CheckBox(
									{
										id : 'cb8',
										//			        			  text : 'Not Sold By Customer (sold by another party)',
										checked : false,
										enabled : false
									}), ]
						}); 

				var fecb9 = new sap.ui.layout.form.FormElement('ch9', {

					fields : [ new sap.m.CheckBox({
						id 		: 'cb9',
						checked : false,
						enabled : false
					}) ]
				});
				var fecb10 = new sap.ui.layout.form.FormElement('ch10', {

					fields : [ new sap.m.CheckBox({
						id 		: 'cb10',
						checked : false,
						enabled : false
					}) ]
				});	
				var fecb11 = new sap.ui.layout.form.FormElement('ch11', {

					fields : [ new sap.m.CheckBox({
						id 		: 'cb11',
						checked : false,
						enabled : false
					}) ]
				});
				var fecb12 = new sap.ui.layout.form.FormElement('ch12', {

					fields : [ new sap.m.CheckBox({
						id 		: 'cb12',
						checked : false,
						enabled : false
					}) ]
				});	
				var fecb13 = new sap.ui.layout.form.FormElement('ch13', {

					fields : [ new sap.m.CheckBox({
						id 		: 'cb13',
						checked : false,
						enabled : false
					}) ]
				});	
				var fecb14 = new sap.ui.layout.form.FormElement('ch14', {

					fields : [ new sap.m.CheckBox({
						id 		: 'cb14',
						checked : false,
						enabled : false
					}) ]
				});
				var fecb15 = new sap.ui.layout.form.FormElement('ch15', {

					fields : [ new sap.m.CheckBox({
						id 		: 'cb15',
						checked : false,
						enabled : false
					}) ]
				});

				var fePridif = new sap.ui.layout.form.FormElement({
					fields : [ new sap.m.Input('idPridif', {
						editable : true,
						type : sap.m.InputType.Number,
						layoutData : new sap.ui.layout.GridData({
							span : "L6 M2 S2"
						})
					}) ]

				});
				var fePridifs = new sap.ui.layout.form.FormElement({
					fields : [ new sap.m.Input('idPridifs', {
						editable : true,
						type : sap.m.InputType.Number,
						layoutData : new sap.ui.layout.GridData({
							span : "L6 M2 S2"
						})
					}) ]

				});

				var oLAddcommin = new sap.m.Label(
						{
							id : 'idAddcommin',
							text : 'Add Intern comments to the text field below',
							layoutData : new sap.ui.layout.GridData({
								span : "L12"
							})
						});

				oLAddcommin.addStyleClass("label");
				var feAddcomminl = new sap.ui.layout.form.FormElement({
					id : 'feAddcomminl',
					label : oLAddcommin
				});

				var commin = new sap.m.TextArea(
						{
							id : 'commin',
							text : 'Add intern comments to the text field below',
							width : '50%',
							height : '100%'
						});

				var feAddcommin = new sap.ui.layout.form.FormElement({
					fields : [ commin ]
				});

				var oLAddcommsr = new sap.m.Label(
						{
							id : 'idAddcommsr',
							text : 'Add Sales Rep comments to the text field below',
							layoutData : new sap.ui.layout.GridData({
								span : "L12 M8 S8"
							})
						});

				oLAddcommsr.addStyleClass("label");
				var feAddcommsrl = new sap.ui.layout.form.FormElement({
					id : 'feAddcommsrl',
					label : oLAddcommsr
				});

				var commsr = new sap.m.TextArea(
						{
							id : 'commsr',
							text : 'Add Sales Rep comments to the text field below',
							width : '50%',
							height : '100%'
						});

				var feAddcommsr = new sap.ui.layout.form.FormElement({
					fields : [ commsr ]
				});

				var oLAddcommad = new sap.m.Label(
						{
							id : 'idAddcommad',
							text : 'Add Administrator comments to the text field below',
							layoutData : new sap.ui.layout.GridData({
								span : "L12 M8 S8"
							})
						});

				oLAddcommad.addStyleClass("label");
				var feAddcommadl = new sap.ui.layout.form.FormElement({
					id : 'feAddcommadl',
					label : oLAddcommad,

				});

				var commad = new sap.m.TextArea(
						{
							id : 'commad',
							text : 'Add Administrator comments to the text field below',
							width : '50%',
							height : '100%'
						});

				var feAddcommad = new sap.ui.layout.form.FormElement({
					fields : [ commad ]
				});

				// Blank Space
				var Blspace1 = new sap.ui.layout.form.FormElement({
					label : "",
					fields : [ new sap.m.Label() ]
				});

				var Blspace2 = new sap.ui.layout.form.FormElement({
					label : "",
					fields : [ new sap.m.Label() ]
				});

				var Blspace3 = new sap.ui.layout.form.FormElement({
					label : "",
					fields : [ new sap.m.Label() ]
				});
				var Blspace4 = new sap.ui.layout.form.FormElement({
					label : "",
					fields : [ new sap.m.Label() ]
				});

				var Blspace5 = new sap.ui.layout.form.FormElement({
					label : "",
					fields : [ new sap.m.Label() ]
				});

				var Blspace6 = new sap.ui.layout.form.FormElement({
					label : "",
					fields : [ new sap.m.Label() ]
				});
				var Blspace7 = new sap.ui.layout.form.FormElement({
					label : "",
					fields : [ new sap.m.Label() ]
				});

				// Reset
				var Reset = new sap.m.Button({
					id : 'reset',
					text : 'Reset',
					type : "Emphasized",
					layoutData : new sap.ui.layout.GridData({
						/*vinay change*/						span : "L4 M2 S8"
					}),
					press : function() {
						//$("html, body").animate({ scrollTop: 0 }, "slow");
						//$(window).scrollTop(0);

						//Reset Radio Buttons
						var oRBGselectedindex = sap.ui.getCore().byId("oRBG").getSelectedIndex();
						var oRBGSrepselectedindex = sap.ui.getCore().byId("oRBGSrep").getSelectedIndex();
						if(oRBGselectedindex >= 0){
							var oRBG = sap.ui.getCore().byId("oRBG").setSelectedButton(sap.ui.getCore().byId("rd_rbg_1"));
						} 
						if(oRBGSrepselectedindex >= 0){
							var oRBGSrep = sap.ui.getCore().byId("oRBGSrep").setSelectedButton(sap.ui.getCore().byId("rd_srbg_1"));
						}

						var RadioButtons = {};
						var indexSelected = oRBG.getSelectedIndex();
						var RadioButton_Model = sap.ui.getCore().getModel("Radio_Buttons_model");
						RadioButtons = RadioButton_Model.getData();
						var radiobuttonkeys = RadioButtons.Keys;
						var radiobuttontext = RadioButtons.Text;
						var id = "";
						var idnum = 0;
						var CheckBoxes = {};
						//var indexSelected = oRBG.getSelectedIndex();
						var CheckBoxes_Model = sap.ui.getCore().getModel("Check_Boxes_model");
						CheckBoxes = CheckBoxes_Model.getData();
						var checkboxeskeys = CheckBoxes.Keys;
						var checkboxestext = CheckBoxes.Text;
						debugger;
						for(i=0;i<checkboxeskeys.length;i++){
							id = "";
							idnum = i + 1;
							id = "cb" + idnum;
							sap.ui.getCore().byId(id).setEnabled(false);
							sap.ui.getCore().byId(id).setSelected(false);

						}

						//Reset Price Values
						sap.ui.getCore().byId("idPridif").setValue();
						sap.ui.getCore().byId("idPridifs").setValue();
						//Reset Comments for Intern, Sales Rep and Admin
						commin.setValue();
						commsr.setValue();
						commad.setValue();
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

						document.getElementById('fileval1').innerHTML = "";
						document.getElementById('fileval2').innerHTML = "";
						document.getElementById('fileval3').innerHTML = "";
						document.getElementById('fileval4').innerHTML = "";
						document.getElementById('fileval5').innerHTML = "";
						document.getElementById('fileval6').innerHTML = "";
						document.getElementById('fileval7').innerHTML = "";
						document.getElementById('fileval8').innerHTML = "";
						document.getElementById('fileval9').innerHTML = "";
						document.getElementById('fileval10').innerHTML = "";

						//$('#myShell2-content').scrollTop(0);
						$('#myShell2-content').animate({ scrollTop: "0px" });

					},

				});

				var feReset = new sap.ui.layout.form.FormElement({
					//label : "",
					fields : [ Reset ]
				});

				// Submit
				var Submit = new sap.m.Button(
						{
							id : 'submit',
							text : 'Submit',
							type : "Emphasized",
							layoutData : new sap.ui.layout.GridData({
								/*vinay change*/								span : "L4 M2 S8"
							}),
							press : function() {
								var ImageSentChecker = {
										image1Sent : "",
										image2Sent : "",
										image3Sent : "",
										image4Sent : "",
										image5Sent : "",
										image6Sent : "",
										image7Sent : "",
										image8Sent : "",
										image9Sent : "",
										image10Sent : "",
										ALLSAPCALLSCOMPLETED : false,
										NoOfImages: 0,

								};
								var xcsrf_token_ref = {
										header_xcsrf_token : "",
								} 
								var error = false;	 								
								sap.ui.core.BusyIndicator.show(0);
								sap.ui.getCore().byId("submit").setEnabled(false);
								error = oController.Submit(error,xcsrf_token_ref, ImageSentChecker, oController);

								ImageSentChecker.ALLSAPCALLSCOMPLETED = true;
							}

						});

				var feSubmit = new sap.ui.layout.form.FormElement({
					label : "",
					fields : [ Submit ]
				});

				//****************************************************vinay start 15-04******************************//
				var II =  new sap.m.Input('TF-II', {
					editable : false,
					layoutData : new sap.ui.layout.GridData({		/*vinay*/
						span : "L3"
					}),					
					//text : oLII,
				});

				var ITS = new sap.m.Input('TF-ITS', {
					editable : false,
					//text : oLITS,
				});

				var Irep = new sap.m.TextArea('TF-Irep', {
					editable : false,
					rows : 1
				});

				var feII = new sap.ui.layout.form.FormElement({
					label : oLII,
					fields : [ II, oLITS, ITS, oLIrep, Irep ]
				});

//				var feITS = new sap.ui.layout.form.FormElement({
//				label : oLITS,
//				fields : [  ]
//				});

				/*				var feIrep = new sap.ui.layout.form.FormElement({
					label : oLIrep,
					fields : [ ]
				});
				 */

				var feIrea = new sap.ui.layout.form.FormElement({
					label : oLIrea,
					fields : [ new sap.m.TextArea('TF-Irea', {
						editable : false,
						rows : 1
					}) ],
				});

				var feIcomm = new sap.ui.layout.form.FormElement({
					label : oLIcomm,
					fields : [ new sap.m.TextArea('TF-Icomm', {
						editable : false,
						rows : 3
					}) ],

				});

				var feIsc1 = new sap.ui.layout.form.FormElement({
					label : oLIsc1,

					/*							fields : [ new sap.m.Input('TF-ISc1', {
								editable : false,
							}) ]*/
				});

				//*******************************************vinay end 15-04******************************//				
//				***************************** Code for Images *********************************************//
				//**** Image Objects used for toggle*****************//
				//For Intern 1
				var Img1 = { toggle : false };
				var Img2 = { toggle : false };
				var Img3 = { toggle: false };
				var Img4 = { toggle: false };
				var Img5 = { toggle : false };
				var Img6 = { toggle : false };
				var Img7 = { toggle : false };
				var Img8 = { toggle : false };
				var Img9 = { toggle : false };
				var Img10 = { toggle : false };
				// For Sales Rep 1
				var sImg1 = { toggle : false };
				var sImg2 = { toggle : false };
				var sImg3 = { toggle: false };
				var sImg4 = { toggle: false };
				var sImg5 = { toggle : false };
				var sImg6 = { toggle : false };
				var sImg7 = { toggle : false };
				var sImg8 = { toggle : false };
				var sImg9 = { toggle : false };
				var sImg10 = { toggle : false };
				// Ends
				// For Admin 1
				var aImg1 = { toggle : false };
				var aImg2 = { toggle : false };
				var aImg3 = { toggle: false };
				var aImg4 = { toggle: false };
				var aImg5 = { toggle : false };
				var aImg6 = { toggle : false };
				var aImg7 = { toggle : false };
				var aImg8 = { toggle : false };
				var aImg9 = { toggle : false };
				var aImg10 = { toggle : false };
				// Ends
				//For Intern 2
				var I2mg1 = { toggle : false };
				var I2mg2 = { toggle : false };
				var I2mg3 = { toggle: false };
				var I2mg4 = { toggle: false };
				var I2mg5 = { toggle : false };
				var I2mg6 = { toggle : false };
				var I2mg7 = { toggle : false };
				var I2mg8 = { toggle : false };
				var I2mg9 = { toggle : false };
				var I2mg10 = { toggle : false };
				// For Sales Rep 2
				var s2Img1 = { toggle : false };
				var s2Img2 = { toggle : false };
				var s2Img3 = { toggle: false };
				var s2Img4 = { toggle: false };
				var s2Img5 = { toggle : false };
				var s21mg6 = { toggle : false };
				var s2Img7 = { toggle : false };
				var s2Img8 = { toggle : false };
				var s2Img9 = { toggle : false };
				var s2Img10 = { toggle : false };
				// Ends
				// For Admin 2
				var a2Img1 = { toggle : false };
				var a2Img2 = { toggle : false };
				var a2Img3 = { toggle: false };
				var a2Img4 = { toggle: false };
				var a2Img5 = { toggle : false };
				var a2Img6 = { toggle : false };
				var a2Img7 = { toggle : false };
				var a2Img8 = { toggle : false };
				var a2Img9 = { toggle : false };
				var a2Img10 = { toggle : false };
				// Ends



				//**** Image Objects used for toggle Ends*****************//		

				//********* Create Images *********************************//
				//For Intern 1
				var oImage1 = new sap.m.Image("display_image1");												
				var oImage2 = new sap.m.Image("display_image2");
				var oImage3 = new sap.m.Image("display_image3");
				var oImage4 = new sap.m.Image("display_image4");
				var oImage5 = new sap.m.Image("display_image5");
				var oImage6 = new sap.m.Image("display_image6");
				var oImage7 = new sap.m.Image("display_image7");
				var oImage8 = new sap.m.Image("display_image8");
				var oImage9 = new sap.m.Image("display_image9");
				var oImage10 = new sap.m.Image("display_image10");
				// For Sales Rep 1
				var sImage1 = new sap.m.Image("display_simage1");												
				var sImage2 = new sap.m.Image("display_simage2");
				var sImage3 = new sap.m.Image("display_simage3");
				var sImage4 = new sap.m.Image("display_simage4");
				var sImage5 = new sap.m.Image("display_simage5");
				var sImage6 = new sap.m.Image("display_simage6");
				var sImage7 = new sap.m.Image("display_simage7");
				var sImage8 = new sap.m.Image("display_simage8");
				var sImage9 = new sap.m.Image("display_simage9");
				var sImage10 = new sap.m.Image("display_simage10");
				//For Admin 1
				var aImage1 = new sap.m.Image("display_aimage1");												
				var aImage2 = new sap.m.Image("display_aimage2");
				var aImage3 = new sap.m.Image("display_aimage3");
				var aImage4 = new sap.m.Image("display_aimage4");
				var aImage5 = new sap.m.Image("display_aimage5");
				var aImage6 = new sap.m.Image("display_aimage6");
				var aImage7 = new sap.m.Image("display_aimage7");
				var aImage8 = new sap.m.Image("display_aimage8");
				var aImage9 = new sap.m.Image("display_aimage9");
				var aImage10 = new sap.m.Image("display_aimage10");
				//For Intern 2
				var o2Image1 = new sap.m.Image("display_i2mage1");												
				var o2Image2 = new sap.m.Image("display_i2mage2");
				var o2Image3 = new sap.m.Image("display_i2mage3");
				var o2Image4 = new sap.m.Image("display_i2mage4");
				var o2Image5 = new sap.m.Image("display_i2mage5");
				var o2Image6 = new sap.m.Image("display_i2mage6");
				var o2Image7 = new sap.m.Image("display_i2mage7");
				var o2Image8 = new sap.m.Image("display_i2mage8");
				var o2Image9 = new sap.m.Image("display_i2mage9");
				var o2Image10 = new sap.m.Image("display_i2mage10");
				// For Sales Rep 2
				var s2Image1 = new sap.m.Image("display_s2image1");												
				var s2Image2 = new sap.m.Image("display_s2image2");
				var s2Image3 = new sap.m.Image("display_s2image3");
				var s2Image4 = new sap.m.Image("display_s2image4");
				var s2Image5 = new sap.m.Image("display_s2image5");
				var s2Image6 = new sap.m.Image("display_s2image6");
				var s2Image7 = new sap.m.Image("display_s2image7");
				var s2Image8 = new sap.m.Image("display_s2image8");
				var s2Image9 = new sap.m.Image("display_s2image9");
				var s2Image10 = new sap.m.Image("display_s2image10");
				//For Admin 2
				var a2Image1 = new sap.m.Image("display_a2image1");												
				var a2Image2 = new sap.m.Image("display_a2image2");
				var a2Image3 = new sap.m.Image("display_a2image3");
				var a2Image4 = new sap.m.Image("display_a2image4");
				var a2Image5 = new sap.m.Image("display_a2image5");
				var a2Image6 = new sap.m.Image("display_a2image6");
				var a2Image7 = new sap.m.Image("display_a2image7");
				var a2Image8 = new sap.m.Image("display_a2image8");
				var a2Image9 = new sap.m.Image("display_a2image9");
				var a2Image10 = new sap.m.Image("display_a2image10");
				//oImage1.setSrc("/sap/opu/odata/sap/ZPVSYSTEM_SRV/PromoImagesSet(Promoid='9000000008',Checkid='10',Imageid='237',Itemid='10',Weekid='10')/$value");
				// For Intern 1
				oImage1.setDecorative(false);
				oImage2.setDecorative(false);
				oImage3.setDecorative(false);
				oImage4.setDecorative(false);
				oImage5.setDecorative(false);
				oImage6.setDecorative(false);
				oImage7.setDecorative(false);
				oImage8.setDecorative(false);
				oImage9.setDecorative(false);
				oImage10.setDecorative(false);
				// For Sales Rep 1
				sImage1.setDecorative(false);
				sImage2.setDecorative(false);
				sImage3.setDecorative(false);
				sImage4.setDecorative(false);
				sImage5.setDecorative(false);
				sImage6.setDecorative(false);
				sImage7.setDecorative(false);
				sImage8.setDecorative(false);
				sImage9.setDecorative(false);
				sImage10.setDecorative(false);
				// For Admin 1
				aImage1.setDecorative(false);
				aImage2.setDecorative(false);
				aImage3.setDecorative(false);
				aImage4.setDecorative(false);
				aImage5.setDecorative(false);
				aImage6.setDecorative(false);
				aImage7.setDecorative(false);
				aImage8.setDecorative(false);
				aImage9.setDecorative(false);
				aImage10.setDecorative(false);

				// For Intern 2
				o2Image1.setDecorative(false);
				o2Image2.setDecorative(false);
				o2Image3.setDecorative(false);
				o2Image4.setDecorative(false);
				o2Image5.setDecorative(false);
				o2Image6.setDecorative(false);
				o2Image7.setDecorative(false);
				o2Image8.setDecorative(false);
				o2Image9.setDecorative(false);
				o2Image10.setDecorative(false);
				// For Sales Rep 2
				s2Image1.setDecorative(false);
				s2Image2.setDecorative(false);
				s2Image3.setDecorative(false);
				s2Image4.setDecorative(false);
				s2Image5.setDecorative(false);
				s2Image6.setDecorative(false);
				s2Image7.setDecorative(false);
				s2Image8.setDecorative(false);
				s2Image9.setDecorative(false);
				s2Image10.setDecorative(false);
				// For Admin 2
				a2Image1.setDecorative(false);
				a2Image2.setDecorative(false);
				a2Image3.setDecorative(false);
				a2Image4.setDecorative(false);
				a2Image5.setDecorative(false);
				a2Image6.setDecorative(false);
				a2Image7.setDecorative(false);
				a2Image8.setDecorative(false);
				a2Image9.setDecorative(false);
				a2Image10.setDecorative(false);
				//*********************Form Element Creation*******************************//
				// For Intern 1
				var feIimg1 = new sap.ui.layout.form.FormElement("feIimg1",{
					//label : oLIcomm,
					fields : [ oImage1, oImage2]
				});
				//debugger;

				var feIimg2 = new sap.ui.layout.form.FormElement("feIimg2",{
					//label : oLIcomm,
					fields : [ oImage3, oImage4]
				});
				var feIimg3 = new sap.ui.layout.form.FormElement("feIimg3",{
					//label : oLIcomm,
					fields : [ oImage5, oImage6]
				});
				var feIimg4 = new sap.ui.layout.form.FormElement("feIimg4",{
					//label : oLIcomm,
					fields : [ oImage7, oImage8]
				});
				var feIimg5 = new sap.ui.layout.form.FormElement("feIimg5",{
					//label : oLIcomm,
					fields : [ oImage9, oImage10]
				});

				// For Sales Reps 1
				var feSimg1 = new sap.ui.layout.form.FormElement("feSimg1",{
					//label : oLIcomm,
					fields : [ sImage1, sImage2]
				});
				//debugger;
				var feSimg2 = new sap.ui.layout.form.FormElement("feSimg2",{
					//label : oLIcomm,
					fields : [ sImage3, sImage4]
				});
				var feSimg3 = new sap.ui.layout.form.FormElement("feSimg3",{
					//label : oLIcomm,
					fields : [ sImage5, sImage6]
				});
				var feSimg4 = new sap.ui.layout.form.FormElement("feSimg4",{
					//label : oLIcomm,
					fields : [ sImage7, sImage8]
				});
				var feSimg5 = new sap.ui.layout.form.FormElement("feSimg5",{
					//label : oLIcomm,
					fields : [ sImage9, sImage10]
				});

				// For Admin 1
				var feAimg1 = new sap.ui.layout.form.FormElement("feAimg1",{
					//label : oLIcomm,
					fields : [ aImage1, aImage2]
				});
				//debugger;
				var feAimg2 = new sap.ui.layout.form.FormElement("feAimg2",{
					//label : oLIcomm,
					fields : [ aImage3, aImage4]
				});
				var feAimg3 = new sap.ui.layout.form.FormElement("feAimg3",{
					//label : oLIcomm,
					fields : [ aImage5, aImage6]
				});
				var feAimg4 = new sap.ui.layout.form.FormElement("feAimg4",{
					//label : oLIcomm,
					fields : [ aImage7, aImage8]
				});
				var feAimg5 = new sap.ui.layout.form.FormElement("feAimg5",{
					//label : oLIcomm,
					fields : [ aImage9, aImage10]
				});

				// For Intern 2
				var feI2img1 = new sap.ui.layout.form.FormElement("feI2img1",{
					//label : oLIcomm,
					fields : [ o2Image1, o2Image2]
				});
				//debugger;

				var feI2img2 = new sap.ui.layout.form.FormElement("feI2img2",{
					//label : oLIcomm,
					fields : [ o2Image3, o2Image4]
				});
				var feI2img3 = new sap.ui.layout.form.FormElement("feI2img3",{
					//label : oLIcomm,
					fields : [ o2Image5, o2Image6]
				});
				var feI2img4 = new sap.ui.layout.form.FormElement("feI2img4",{
					//label : oLIcomm,
					fields : [ o2Image7, o2Image8]
				});
				var feI2img5 = new sap.ui.layout.form.FormElement("feI2img5",{
					//label : oLIcomm,
					fields : [ o2Image9, o2Image10]
				});

				// For Sales Reps 2
				var feS2img1 = new sap.ui.layout.form.FormElement("feS2img1",{
					//label : oLIcomm,
					fields : [ s2Image1, s2Image2]
				});
				//debugger;
				var feS2img2 = new sap.ui.layout.form.FormElement("feS2img2",{
					//label : oLIcomm,
					fields : [ s2Image3, s2Image4]
				});
				var feS2img3 = new sap.ui.layout.form.FormElement("feS2img3",{
					//label : oLIcomm,
					fields : [ s2Image5, s2Image6]
				});
				var feS2img4 = new sap.ui.layout.form.FormElement("feS2img4",{
					//label : oLIcomm,
					fields : [ s2Image7, s2Image8]
				});
				var feS2img5 = new sap.ui.layout.form.FormElement("feS2img5",{
					//label : oLIcomm,
					fields : [ s2Image9, s2Image10]
				});

				// For Admin 1
				var feA2img1 = new sap.ui.layout.form.FormElement("feA2img1",{
					//label : oLIcomm,
					fields : [ a2Image1, a2Image2]
				});
				//debugger;
				var feA2img2 = new sap.ui.layout.form.FormElement("feA2img2",{
					//label : oLIcomm,
					fields : [ a2Image3, a2Image4]
				});
				var feA2img3 = new sap.ui.layout.form.FormElement("feA2img3",{
					//label : oLIcomm,
					fields : [ a2Image5, a2Image6]
				});
				var feA2img4 = new sap.ui.layout.form.FormElement("feA2img4",{
					//label : oLIcomm,
					fields : [ a2Image7, a2Image8]
				});
				var feA2img5 = new sap.ui.layout.form.FormElement("feA2img5",{
					//label : oLIcomm,
					fields : [ a2Image9, a2Image10]
				});

				//***********************Toggle Images*******************************************//
				//For Intern 1
				oImage1.attachPress(function(){
					CheckPromoDetails_toggleImage(oImage1, oImage2, feIimg1, Img1);
				});
				oImage2.attachPress(function(){
					CheckPromoDetails_toggleImage(oImage2, oImage1, feIimg1, Img2)
				});
				oImage3.attachPress(function(){
					CheckPromoDetails_toggleImage(oImage3, oImage4, feIimg2, Img3)
				});
				oImage4.attachPress(function(){
					CheckPromoDetails_toggleImage(oImage4, oImage3, feIimg2, Img4)
				});
				oImage5.attachPress(function(){
					CheckPromoDetails_toggleImage(oImage5, oImage6, feIimg3, Img5)
				});
				oImage6.attachPress(function(){
					CheckPromoDetails_toggleImage(oImage6, oImage5, feIimg3, Img6)
				});
				oImage7.attachPress(function(){
					CheckPromoDetails_toggleImage(oImage7, oImage8, feIimg4, Img7)
				});
				oImage8.attachPress(function(){
					CheckPromoDetails_toggleImage(oImage8, oImage7, feIimg4, Img8)
				});
				oImage9.attachPress(function(){
					CheckPromoDetails_toggleImage(oImage9, oImage10, feIimg5, Img9)
				});
				oImage10.attachPress(function(){
					CheckPromoDetails_toggleImage(oImage10, oImage9, feIimg5, Img10)
				});

				// For Sales Rep 1
				sImage1.attachPress(function(){
					CheckPromoDetails_toggleImage(sImage1, sImage2, feSimg1, sImg1);
				});
				sImage2.attachPress(function(){
					CheckPromoDetails_toggleImage(sImage2, sImage1, feSimg1, sImg2)
				});
				sImage3.attachPress(function(){
					CheckPromoDetails_toggleImage(sImage3, sImage4, feSimg2, sImg3)
				});
				sImage4.attachPress(function(){
					CheckPromoDetails_toggleImage(sImage4, sImage3, feSimg2, sImg4)
				});
				sImage5.attachPress(function(){
					CheckPromoDetails_toggleImage(sImage5, sImage6, feSimg3, sImg5)
				});
				sImage6.attachPress(function(){
					CheckPromoDetails_toggleImage(sImage6, sImage5, feSimg3, sImg6)
				});
				sImage7.attachPress(function(){
					CheckPromoDetails_toggleImage(sImage7, sImage8, feSimg4, sImg7)
				});
				sImage8.attachPress(function(){
					CheckPromoDetails_toggleImage(sImage8, sImage7, feSimg4, sImg8)
				});
				sImage9.attachPress(function(){
					CheckPromoDetails_toggleImage(sImage9, sImage10, feSimg5, sImg9)
				});
				sImage10.attachPress(function(){
					CheckPromoDetails_toggleImage(sImage10, sImage9, feSimg5, sImg10)
				});

				// For Admin 1
				aImage1.attachPress(function(){
					CheckPromoDetails_toggleImage(aImage1, aImage2, feAimg1, aImg1);
				});
				aImage2.attachPress(function(){
					CheckPromoDetails_toggleImage(aImage2, aImage1, feAimg1, aImg2)
				});
				aImage3.attachPress(function(){
					CheckPromoDetails_toggleImage(aImage3, aImage4, feAimg2, aImg3)
				});
				aImage4.attachPress(function(){
					CheckPromoDetails_toggleImage(aImage4, aImage3, feAimg2, aImg4)
				});
				aImage5.attachPress(function(){
					CheckPromoDetails_toggleImage(aImage5, aImage6, feAimg3, aImg5)
				});
				aImage6.attachPress(function(){
					CheckPromoDetails_toggleImage(aImage6, aImage5, feAimg3, aImg6)
				});
				aImage7.attachPress(function(){
					CheckPromoDetails_toggleImage(aImage7, aImage8, feAimg4, aImg7)
				});
				aImage8.attachPress(function(){
					CheckPromoDetails_toggleImage(aImage8, aImage7, feAimg4, aImg8)
				});
				aImage9.attachPress(function(){
					CheckPromoDetails_toggleImage(aImage9, aImage10, feAimg5, aImg9)
				});
				aImage10.attachPress(function(){
					CheckPromoDetails_toggleImage(aImage10, aImage9, feAimg5, aImg10)
				});

				//For Intern 2
				o2Image1.attachPress(function(){
					CheckPromoDetails_toggleImage(o2Image1, o2Image2, feI2img1, I2mg1);
				});
				o2Image2.attachPress(function(){
					CheckPromoDetails_toggleImage(o2Image2, o2Image1, feI2img1, I2mg2)
				});
				o2Image3.attachPress(function(){
					CheckPromoDetails_toggleImage(o2Image3, o2Image4, feI2img2, I2mg3)
				});
				o2Image4.attachPress(function(){
					CheckPromoDetails_toggleImage(o2Image4, o2Image3, feI2img2, I2mg4)
				});
				o2Image5.attachPress(function(){
					CheckPromoDetails_toggleImage(o2Image5, o2Image6, feI2img3, I2mg5)
				});
				o2Image6.attachPress(function(){
					CheckPromoDetails_toggleImage(o2Image6, o2Image5, feI2img3, I2mg6)
				});
				o2Image7.attachPress(function(){
					CheckPromoDetails_toggleImage(o2Image7, o2Image8, feI2img4, I2mg7)
				});
				o2Image8.attachPress(function(){
					CheckPromoDetails_toggleImage(o2Image8, o2Image7, feI2img4, I2mg8)
				});
				o2Image9.attachPress(function(){
					CheckPromoDetails_toggleImage(o2Image9, o2Image10, feI2img5, I2mg9)
				});
				o2Image10.attachPress(function(){
					CheckPromoDetails_toggleImage(o2Image10, o2Image9, feI2img5, I2mg10)
				});

				// For Sales Rep 2
				s2Image1.attachPress(function(){
					CheckPromoDetails_toggleImage(s2Image1, s2Image2, feS2img1, s2Img1);
				});
				s2Image2.attachPress(function(){
					CheckPromoDetails_toggleImage(s2Image2, s2Image1, feS2img1, s2Img2)
				});
				s2Image3.attachPress(function(){
					CheckPromoDetails_toggleImage(s2Image3, s2Image4, feS2img2, s2Img3)
				});
				s2Image4.attachPress(function(){
					CheckPromoDetails_toggleImage(s2Image4, s2Image3, feS2img2, s2Img4)
				});
				s2Image5.attachPress(function(){
					CheckPromoDetails_toggleImage(s2Image5, s2Image6, feS2img3, s2Img5)
				});
				s2Image6.attachPress(function(){
					CheckPromoDetails_toggleImage(s2Image6, s2Image5, feS2img3, s2Img6)
				});
				s2Image7.attachPress(function(){
					CheckPromoDetails_toggleImage(s2Image7, s2Image8, feS2img4, s2Img7)
				});
				s2Image8.attachPress(function(){
					CheckPromoDetails_toggleImage(s2Image8, s2Image7, feS2img4, s2Img8)
				});
				s2Image9.attachPress(function(){
					CheckPromoDetails_toggleImage(s2Image9, s2Image10, feS2img5, s2Img9)
				});
				s2Image10.attachPress(function(){
					CheckPromoDetails_toggleImage(s2Image10, s2Image9, feS2img5, s2Img10)
				});

				// For Admin 2
				a2Image1.attachPress(function(){
					CheckPromoDetails_toggleImage(a2Image1, a2Image2, feA2img1, a2Img1);
				});
				a2Image2.attachPress(function(){
					CheckPromoDetails_toggleImage(a2Image2, a2Image1, feA2img1, a2Img2)
				});
				a2Image3.attachPress(function(){
					CheckPromoDetails_toggleImage(a2Image3, a2Image4, feA2img2, a2Img3)
				});
				a2Image4.attachPress(function(){
					CheckPromoDetails_toggleImage(a2Image4, a2Image3, feA2img2, a2Img4)
				});
				a2Image5.attachPress(function(){
					CheckPromoDetails_toggleImage(a2Image5, a2Image6, feA2img3, a2Img5)
				});
				a2Image6.attachPress(function(){
					CheckPromoDetails_toggleImage(a2Image6, a2Image5, feA2img3, a2Img6)
				});
				a2Image7.attachPress(function(){
					CheckPromoDetails_toggleImage(a2Image7, a2Image8, feA2img4, a2Img7)
				});
				a2Image8.attachPress(function(){
					CheckPromoDetails_toggleImage(a2Image8, a2Image7, feA2img4, a2Img8)
				});
				a2Image9.attachPress(function(){
					CheckPromoDetails_toggleImage(a2Image9, a2Image10, feA2img5, a2Img9)
				});
				a2Image10.attachPress(function(){
					CheckPromoDetails_toggleImage(a2Image10, a2Image9, feA2img5, a2Img10)
				});


//				*********************End of Code for Images***********************************************//

				//*************************************vinay start 15-04*****************************//
				var SI = new sap.m.Input('TF-SI', {
					editable : false,
					layoutData : new sap.ui.layout.GridData({		/*vinay*/
						span : "L3"
					})					
				});

				var STS = new sap.m.Input('TF-STS', {
					editable : false,
				});

				var Srept = new sap.m.TextArea('TF-Srept', {
					editable : false,
					rows : 1
				});


				var feSI = new sap.ui.layout.form.FormElement({
					label : oLSI,
					fields : [ SI, oLSTS, STS, oLSrept, Srept  ]
				});

				/*				var feSTS = new sap.ui.layout.form.FormElement({
					label : oLSTS,
					fields : [  ]
				});

				var feSrept = new sap.ui.layout.form.FormElement({
					label : oLSrept,
					fields : [  ]
				});*/

				var feSrea = new sap.ui.layout.form.FormElement({
					label : oLSrea,
					fields : [ new sap.m.TextArea('TF-Srea', {
						editable : false,
						rows : 1
					}) ]
				});

				var feScomm = new sap.ui.layout.form.FormElement({
					label : oLScomm,
					fields : [ new sap.m.TextArea('TF-Scomm', {
						editable : false,
						rows : 3
					}) ]
				});

				var feSsc1 = new sap.ui.layout.form.FormElement({
					label : oLSsc1,
					/*							fields : [ new sap.m.Input('TF-ISc1', {
								editable : false,
							}) ]*/
				});

				var AI =  new sap.m.Input('TF-AI', {
					editable : false,
					layoutData : new sap.ui.layout.GridData({		
						span : "L3"
					}),					
				});

				var ATS = new sap.m.Input('TF-ATS', {
					editable : false,
				});

				var Arep = new sap.m.TextArea('TF-Arept', {
					editable : false,
					rows : 1
				});

				var feAI = new sap.ui.layout.form.FormElement({
					label : oLAI,
					fields : [ AI, oLATS, ATS, oLArep, Arep ]
				});

				/*				var feATS = new sap.ui.layout.form.FormElement({
					label : oLATS,
					fields : [  ]
				});

				var feArep = new sap.ui.layout.form.FormElement({
					label : oLArep,
					fields : [  ]
				});*/

				var feArea = new sap.ui.layout.form.FormElement({
					label : oLArea,
					fields : [ new sap.m.TextArea('TF-Area', {
						editable : false,
						rows : 1
					}) ]
				});

				var feAcomm = new sap.ui.layout.form.FormElement({
					label : oLAcomm,
					fields : [ new sap.m.TextArea('TF-Acomm', {
						editable : false,
						rows : 3
					}) ]
				});

				var feAsc1 = new sap.ui.layout.form.FormElement({
					label : oLAsc1,
					/*							fields : [ new sap.m.Input('TF-ISc1', {
								editable : false,
							}) ]*/
				});	

				var II2 = new sap.m.Input('TF-II2', {
					editable : false,
					layoutData : new sap.ui.layout.GridData({			//vinay 18-04
						span : "L3"										//vinay 18-04
					}),	
				});

				var ITS2 = new sap.m.Input('TF-ITS2', {
					editable : false,
				});

				var Irep2 = new sap.m.TextArea('TF-Irep2', {
					editable : false,
					rows : 1
				});

				var feII2 = new sap.ui.layout.form.FormElement({
					label : oLII2,
					fields : [ II2, oLITS2, ITS2, oLIrep2, Irep2 ]
				});

				/*				var feITS2 = new sap.ui.layout.form.FormElement({
					label : oLITS2,
					fields : [  ]
				});

				var feIrep2 = new sap.ui.layout.form.FormElement({
					label : oLIrep2,
					fields : [  ]
				});*/

				var feIrea2 = new sap.ui.layout.form.FormElement({
					label : oLIrea2,
					fields : [ new sap.m.TextArea('TF-Irea2', {
						editable : false,
						rows : 1
					}) ]
				});

				var feIcomm2 = new sap.ui.layout.form.FormElement({
					label : oLIcomm2,
					fields : [ new sap.m.TextArea('TF-Icomm2', {
						editable : false,
						rows : 3
					}) ]
				});

				var feIsc2 = new sap.ui.layout.form.FormElement({
					label : oLIsc2,

				});

				var SI2 = new sap.m.Input('TF-SI2', {
					editable : false,
					layoutData : new sap.ui.layout.GridData({			//vinay 18-04
						span : "L3"										//vinay 18-04
					}),	
				});

				var STS2 = new sap.m.Input('TF-STS2', {
					editable : false,
				});

				var Srept2 = new sap.m.TextArea('TF-Srept2', {
					editable : false,
					rows : 1
				});

				var feSI2 = new sap.ui.layout.form.FormElement({
					label : oLSI2,
					fields : [ SI2, oLSTS2, STS2, oLSrept2, Srept2 ]
				});

				/*				var feSTS2 = new sap.ui.layout.form.FormElement({
					label : oLSTS2,
					fields : [  ]
				});

				var feSrept2 = new sap.ui.layout.form.FormElement({
					label : oLSrept2,
					fields : [  ]
				});*/

				var feSrea2 = new sap.ui.layout.form.FormElement({
					label : oLSrea2,
					fields : [ new sap.m.TextArea('TF-Srea2', {
						editable : false,
						rows : 1
					}) ]
				});

				var feScomm2 = new sap.ui.layout.form.FormElement({
					label : oLScomm2,
					fields : [ new sap.m.TextArea('TF-Scomm2', {
						editable : false,
						rows : 3
					}) ]
				});

				var feSsc2 = new sap.ui.layout.form.FormElement({
					label : oLSsc2,
				});

				var AI2 = new sap.m.Input('TF-AI2', {
					editable : false,
					layoutData : new sap.ui.layout.GridData({			//vinay 18-04
						span : "L3"										//vinay 18-04
					}),	
				});

				var ATS2 = new sap.m.Input('TF-ATS2', {
					editable : false,
				});

				var Arept2 = new sap.m.TextArea('TF-Arept2', {
					editable : false,
					rows : 1
				});
				var feAI2 = new sap.ui.layout.form.FormElement({
					label : oLAI2,
					fields : [ AI2, oLATS2, ATS2, oLArep2, Arept2 ]
				});

				/*				var feATS2 = new sap.ui.layout.form.FormElement({
					label : oLATS2,
					fields : [  ]
				});

				var feArep2 = new sap.ui.layout.form.FormElement({
					label : oLArep2,
					fields : [  ]
				});*/

				var feArea2 = new sap.ui.layout.form.FormElement({
					label : oLArea2,
					fields : [ new sap.m.TextArea('TF-Area2', {
						editable : false,
						rows : 1
					}) ]
				});

				var feAcomm2 = new sap.ui.layout.form.FormElement({
					label : oLAcomm2,
					fields : [ new sap.m.TextArea('TF-Acomm2', {
						editable : false,
						rows : 3
					}) ]
				});

				var feAsc2 = new sap.ui.layout.form.FormElement({
					label : oLAsc2,

				});		


				//*************************************vinay end 15-04*****************************//


				// Layout
				var oLayout4 = new sap.ui.layout.form.ResponsiveGridLayout(
						"L4", {
							labelSpanL : 4,
							labelSpanM : 4,
							// labelSpanS : 4,

							// emptySpanL: 0,
							// emptySpanM : 0,
							// emptySpanS : 1,
							columnsL : 3,

							// breakpointL : 1000,
							// breakpointM : 400
						});

				var F4C4 = new sap.ui.layout.form.FormContainer("F4C4",
						{
					formElements : [ feBack, fePrev, feNext ]
						});

				/*
				 * var F4C5 = new
				 * sap.ui.layout.form.FormContainer("F4C5", {
				 * formElements : [ fePrev ] });
				 * 
				 * var F4C6 = new
				 * sap.ui.layout.form.FormContainer("F4C6", {
				 * formElements : [ feNext ] });
				 */
				// Form holding Layout
				var oForm4 = new sap.ui.layout.form.Form("F4", {
					// autoscroll : true,
					title : new sap.ui.core.Title({
						text : "Check Promotion Details",
					}),
					editable : true,
					layout : oLayout4,
					formContainers : [ F4C4
					                   // F4C5, F4C6

					                   ]

				});

				// Layout
				var oLayout5 = new sap.ui.layout.form.ResponsiveGridLayout(
						"L5", {
							// labelSpanL : 8,
							// labelSpanM : 4,
							// labelSpanS : 4,
							emptySpanL : 1,
							// emptySpanM : 1,
							// emptySpanS : 1,
							columnsL : 3,
							columnsM : 2,
							// breakpointL : 1000,
							// breakpointM : 400
						});

				// Form holding Layout
				var oForm5 = new sap.ui.layout.form.Form(
						"F5",
						{
							// autoscroll : true,
							/*
							 * title : new sap.ui.core.Title({ text :
							 * "Review Promotion Details", // tooltip :
							 * "Title tooltip" }),
							 */
							editable : true,
							layout : oLayout5,
							formContainers : [

							                  new sap.ui.layout.form.FormContainer(
							                		  "F5C1", {
							                			  // title : "Review
							                			  // Promotion Details",
							                			  formElements : [
							                			                  // feHead,
							                			                  feFdate, feTdate,
							                			                  feCdate,
							                			                  //fePro, 
							                			                  feWeb,
							                			                  feCutName
							                			                  ]

							                		  }),

							                		  new sap.ui.layout.form.FormContainer(
							                				  "F5C2", {
							                					  // title : " ",
							                					  // title: "address",
							                					  formElements : [

							                					                  // Blspace1,
							                					                  // Blspace2,
							                					                  // Blspace3,
							                					                  fePid, feCust,
							                					                  fePro,
							                					                  //feCutName,
							                					                  feSrep,
							                					                  feIR
							                					                  //feChannel,

							                					                  ]
							                				  }),

							                				  new sap.ui.layout.form.FormContainer(
							                						  "F5C3", {
							                							  // title: "address",
							                							  formElements : [

							                							                  // Blspace4, Blspace5,
							                							                  // Blspace6,

							                							                  fePtype, feHow,
							                							                  feCustpart,
							                							                  feItemstat,
							                							                  fePrice

							                							                  ]
							                						  }),



							                						  ]

						});
				//*************************************vinay start*****************************//
				// Layout holding Account info
				var oLayout55 = new sap.ui.layout.form.ResponsiveGridLayout(
						"L55", {
							columnsL : 2,
						});

				var F55C1 = new sap.ui.layout.form.FormContainer("F55C1",
						{
					formElements : [ 
					                feAccinfota
					                ]
						});

				// Form holding Layout with Account info
				var oForm55 = new sap.ui.layout.form.Form("F55", {
					editable : true,
					layout : oLayout55,
					formContainers : [ F55C1

					                   ]

				});						
				//*************************************vinay end*****************************//


				var oLayout60 = new sap.ui.layout.form.ResponsiveGridLayout(
						"L60", {
							// labelSpanL : 8,
							// labelSpanM : 4,
							// labelSpanS : 4,
							// emptySpanL : 1,
							// emptySpanM : 1,
							// emptySpanS : 1,
							columnsL : 1,
							// columnsM : 1,
							// breakpointL : 1000,
							// breakpointM : 400
						});

				debugger;
				var oForm60 = new sap.ui.layout.form.Form(
						"F60",
						{
							// autoscroll : true,

							editable : true,
							layout : oLayout60,
							formContainers : [
//**************************************************vinay changed**********************************************//							                  
new sap.ui.layout.form.FormContainer(
		"F60C1IRS",

		{
			title : "Review Intern Report Summary - 1st Cycle",
			formElements : [ feII,
			                 // feITS,
			                 // feIrep,
			                 feIrea,
			                 feIcomm,
			                 feIsc1,
			                 feIimg1, feIimg2, feIimg3, feIimg4, feIimg5

			                 ]
		}),

		new sap.ui.layout.form.FormContainer(
				"F60C2SRS",

				{
					title : "Review Sales Rep Summary - 1st Cycle",
					formElements : [ feSI,
					                 //   feSTS, 
					                 //   feSrept,
					                 feSrea,
					                 feScomm,
					                 feSsc1,
					                 feSimg1, feSimg2, feSimg3, feSimg4, feSimg5

					                 ]
				}),
				new sap.ui.layout.form.FormContainer(
						"F60R3ARS",

						{
							title : "Review Admin Summary - 1st Cycle",
							formElements : [ feAI,
							                 //  feATS, 
							                 //  feArep,
							                 feArea,
							                 feAcomm,
							                 feAsc1,
							                 feAimg1, feAimg2, feAimg3, feAimg4, feAimg5

							                 ]
						}),
						new sap.ui.layout.form.FormContainer(
								"F60R4IRS2",

								{
									title : "Review Intern Report Summary - 2nd Cycle",
									formElements : [ feII2,
									                 //    feITS2, 
									                 //    feIrep2,
									                 feIrea2,
									                 feIcomm2,
									                 feIsc2,
									                 feI2img1, feI2img2, feI2img3, feI2img4, feI2img5

									                 ]
								}),

								new sap.ui.layout.form.FormContainer(
										"F60R5SRS2",

										{
											title : "Review Sales Rep Summary - 2nd Cycle",
											formElements : [ feSI2,
											                 //      feSTS2, 
											                 //      feSrept2,
											                 feSrea2, feScomm2,
											                 feSsc2,
											                 feS2img1, feS2img2, feS2img3, feS2img4, feS2img5

											                 ]
										}),
										new sap.ui.layout.form.FormContainer(
												"F60R6ARS2",

												{
													title : "Review Admin Summary - 2nd Cycle",
													formElements : [ feAI2,
													                 //    feATS2, 
													                 //    feArep2,
													                 feArea2,
													                 feAcomm2,
													                 feAsc2,
													                 feA2img1, feA2img2, feA2img3, feA2img4, feA2img5
													                 ]
												}),	

//												**************************************************vinay ended changing**********************************************//														                	
												]

						});

				var oLayout65 = new sap.ui.layout.form.ResponsiveGridLayout(
						"L65", {
							// labelSpanL : 8,
							// labelSpanM : 4,
							// labelSpanS : 4,
							// emptySpanL : 1,
							// emptySpanM : 1,
							// emptySpanS : 1,
							columnsL : 3,
							// columnsM : 1,
							// breakpointL : 1000,
							// breakpointM : 400
						});

				var oForm65 = new sap.ui.layout.form.Form(
						"F65",
						{
							// autoscroll : true,

							editable : true,
							layout : oLayout65,
							formContainers : [
							                  new sap.ui.layout.form.FormContainer(
							                		  "F65C1RB",
							                		  {
							                			  title : "Verify Promotion Details",
							                			  formElements : [

							                			                  feRdHead, radBut,

							                			                  ]

							                		  }),

							                		  new sap.ui.layout.form.FormContainer(
							                				  "F65C2CB",
							                				  {
							                					  id : "cb",
							                					  //		title : "if inaccurate check all that apply",
							                					  formElements : [
							                					                  feCb,
							                					                  //	fecb1, fecb2, fecb3, fecb4,  fecb5, 
							                					                  //	fecb6, fecb7, fecb8, fecb9,  fecb10, 
							                					                  //	fecb11, fecb12, fecb13, fecb14, fecb15
							                					                  ]

							                				  }),

							                				  new sap.ui.layout.form.FormContainer(
							                						  "F65C3R2", {
							                							  id : "pri",
							                							  title : "Enter Price",
							                							  formElements : [

							                							                  fePridif

							                							                  ]

							                						  }),
							                						  ]

						});

				// Layout
				var oLayout70 = new sap.ui.layout.form.ResponsiveGridLayout(
						"L70", {
							// labelSpanL : 8,
							// labelSpanM : 4,
							// labelSpanS : 4,
							// emptySpanL : 1,
							// emptySpanM : 1,
							// emptySpanS : 1,
							columnsL : 2,
							// columnsM : 1,
							// breakpointL : 1000,
							// breakpointM : 400
						});

				var oForm70 = new sap.ui.layout.form.Form(
						"F70",
						{
							// autoscroll : true,

							editable : true,
							layout : oLayout70,
							formContainers : [
							                  new sap.ui.layout.form.FormContainer(
							                		  "F70C1SREPRB",

							                		  {
							                			  title : "Verify Promotion Details",
							                			  formElements : [ 
							                			                  radButSrep
							                			                  ]
							                		  }),

							                		  new sap.ui.layout.form.FormContainer(
							                				  "F70C2SREPPR",

							                				  {
							                					  id : "pri1",
							                					  title : "Enter Price",
							                					  formElements : [ fePridifs
							                					                   ]
							                				  }) ]

						});
				// Layout
				var oLayout8 = new sap.ui.layout.form.ResponsiveGridLayout(
						"L8", {
							// labelSpanL : 8,
							// labelSpanM : 4,
							// labelSpanS : 4,
							// emptySpanL : 1,
							// emptySpanM : 1,
							// emptySpanS : 1,
							columnsL : 1,
							// columnsM : 1,
							// breakpointL : 1000,
							// breakpointM : 400
						});

				var oForm8 = new sap.ui.layout.form.Form("F8", {

					editable : true,
					layout : oLayout8,
					formContainers : [
					                  new sap.ui.layout.form.FormContainer(
					                		  "F8C1AC", {
					                			  id : "addcomm",
					                			  title : "Add Comments",
					                			  expanded : true,
					                			  formElements : [

					                			                  feAddcomminl, feAddcommin,
					                			                  feAddcommsrl,
					                			                  feAddcommsr,
					                			                  feAddcommadl,
					                			                  feAddcommad

					                			                  ]

					                		  }),

					                		  ]

				});

				var oLayout90 = new sap.ui.layout.form.ResponsiveGridLayout(
						"L90", {
							labelSpanL : 8,
							labelSpanM : 4,
							// labelSpanS : 4,
							emptySpanL : 6,
							// emptySpanM : 1,
							// emptySpanS : 1,
							columnsL : 2,
							// columnsM : 1,
							// breakpointL : 1000,
							// breakpointM : 400
						});

				var oForm90 = new sap.ui.layout.form.Form("F90", {
					// autoscroll : true,

					editable : true,
					layout : oLayout90,
					oHeadItem : Back,

					formContainers : [

					                  new sap.ui.layout.form.FormContainer(
					                		  "F90BLC1R5", {
					                			  /*vinay change*/					                			  formElements : [ feSubmit, 
					                			                  					                			                   //					

					                			                  					                			                   ]

					                		  }),
					                		  new sap.ui.layout.form.FormContainer(
					                				  "F90BLC2R5", {
					                					  formElements : [

/*vinay change*/					                					              feReset    		

]

					                				  }),
					                				  new sap.ui.layout.form.FormContainer(
					                						  "F90BLNK", {
					                							  formElements : [

					                							                  //					

					                							                  ]

					                						  }),
					                						  /*									new sap.ui.layout.form.FormContainer(
											"F8C1UPIM", {
												id : "upload",
												title : "Upload Screenshot(s)",
												formElements : [
												// feUpload

												]

											}),*/

					                						  ]

				});

				var mySignature = '<div id="copyimage" style="background-color: white; width: auto; height: auto; bottom:0;"></div>';

				var myhtml = new sap.ui.core.HTML();
				myhtml.setContent(mySignature);

				/*
				 * var oShell1 = new sap.ui.unified.Shell("myShell2", {
				 * icon : "Images/brother.jpg", user: new
				 * sap.ui.unified.ShellHeadUserItem({username:
				 * sap.ui.getCore().byId("firstname").getValue() }),
				 * showLogout : true, // showCurtainPane : true, //
				 * appTitle:"Promo Verification System",
				 * 
				 * showLogoutButton : true, showSearchTool : false,
				 * designType : "Crystal", showInspectorTool : false,
				 * FullHeightContent : true, showFeederTool : false,
				 * AppWidthLimited : true,
				 *  // headerType : "BrandOnly", content : oForm4,
				 * 
				 * headItems : [ ], });
				 */

				var oShell1 = new sap.ui.ux3.Shell(
						"myShell2",
						{
							appIcon : "Images/brother.jpg",
							appTitle : "Promo Verification System",
							showLogoutButton : false,
							showSearchTool : false,
							designType : "Crystal",
							showInspectorTool : false,
							fullHeightContent : true,
							// showTools : false,
							showPane : false,
							showFeederTool : false,
							AppWidthLimited : true,
							//content : oForm4,
							worksetItems: [new sap.ui.ux3.NavigationItem("home_pd",{key:"pd_1",text:"Home"}),
							               new sap.ui.ux3.NavigationItem("checkpromo_pd",{key:"pd_2",text:"Check Promos"}),
							               new sap.ui.ux3.NavigationItem("searchpromo_pd",{key:"pd_3",text:"Search Promos" }),
							               new sap.ui.ux3.NavigationItem("searchacc_pd",{key:"pd_4",text:"Search Accounts"}),
							               new sap.ui.ux3.NavigationItem("internres_pd",{key:"pd_5",text:"Intern Response "}),
							               new sap.ui.ux3.NavigationItem("srres_pd",{key:"pd_6",text:"SR Response "}),
							               new sap.ui.ux3.NavigationItem("reassign_pd",{key:"pd_7",text:"Reassign Promo"}),
							               new sap.ui.ux3.NavigationItem("dummyItem_pd",{key:"pd_8",text:"Not to be Seen", visible: false }),

							               ],

							               headerItems : [
							                              new sap.ui.commons.TextView(
							                            		  "fname1", {
							                            			  text : "",
							                            			  tooltip : "U.Name"
							                            		  }),
							                            		  new sap.ui.commons.Button(
							                            				  "logout1",
							                            				  {
							                            					  text : "Logout",
							                            					  press : function(oEvent) {
							                            						  window.localStorage.clear();
							                            						  sap.ui.getCore().byId("email").setValue("");
							                            						  sap.ui.getCore().byId("password1").setValue("");  
							                            						  location.reload();
							                            					  }
							                            				  }),

							                            				  ],
							                            				  //*****************vinay*********************************//
							                            				  worksetItemSelected: function(oEvent)
							                            				  {

							                            					  var sId = oEvent.getParameter("id");
							                            					  var oShell = oEvent.oSource;
							                            					  SubmittedSerialNumbers = [];
							                            					  CheckPromoDetails_ClearAllData();
							                            					  oController.CheckPromoDetailsFillShellContent(sId, oShell);

							                            				  }

						//*************vinay***********************************//
						});
				//var device = sap.ui.Device.os;    // for scroll in iphone, actually should be using sap.ui.Device.system
				var deviceHeight = $(window).height();
				var contentHeight = deviceHeight - 100;
				if( sap.ui.Device.system.phone || ( sap.ui.Device.system.tablet && (!(sap.ui.Device.system.combi)) && (!(sap.ui.Device.os.name == "win")))){
					var mScrollContainer = new sap.m.ScrollContainer("mScroll", {
						height: contentHeight+'px',
						vertical: true,
					});
					mScrollContainer.addContent(oForm4);
					mScrollContainer.addContent(oForm5);
					mScrollContainer.addContent(oForm55);
					mScrollContainer.addContent(oForm60);
					mScrollContainer.addContent(oForm65);
					mScrollContainer.addContent(oForm70);
					mScrollContainer.addContent(oForm8);
					mScrollContainer.addContent(oForm90);
					oShell1.addContent(mScrollContainer);
					//oShell1.addContent(myhtml);

				}else{
					oShell1.addContent(oForm4);     
					oShell1.addContent(oForm5);     
					oShell1.addContent(oForm55);
					oShell1.addContent(oForm60);
					oShell1.addContent(oForm65);						
					oShell1.addContent(oForm70);						
					oShell1.addContent(oForm8); 
					oShell1.addContent(oForm90); 
					oShell1.addContent(myhtml);

				}
				// oShell1.setHeader(oAppHeader);
				//oShell1.addContent(myhtml);
				oShell1.addStyleClass("sapUiSizeCompact");
				oShell1.setSelectedWorksetItem("dummyItem_pd");			/*vinay*/
				// return oShell1;

				this.addContent(oShell1);
				/*						return new sap.m.Page({
							showHeader : false,
							// headerContent : oAppHeader,
							// title: "Title",
							content : [

							oShell1,

							]
						});
				 */
			},


		});

function CheckPromoDetails_ClearAllData(){

	//Reset Radio Buttons

//	sap.ui.getCore().byId("oRBG").setSelectedButton(sap.ui.getCore().byId("acc"));
//	sap.ui.getCore().byId("oRBGSrep").setSelectedButton(sap.ui.getCore().byId("accs"));
//	//Reset Check Boxes to set default
//	sap.ui.getCore().byId("cb1").setEnabled(false);
//	sap.ui.getCore().byId("cb2").setEnabled(false);
//	sap.ui.getCore().byId("cb3").setEnabled(false);
//	sap.ui.getCore().byId("cb4").setEnabled(false);
//	sap.ui.getCore().byId("cb5").setEnabled(false);
//	sap.ui.getCore().byId("cb6").setEnabled(false);
//	sap.ui.getCore().byId("cb7").setEnabled(false);
//	sap.ui.getCore().byId("cb8").setEnabled(false);
//	//Reset Check Boxes to unselect 
//	var ch1 = sap.ui.getCore().byId("cb1").setSelected(false);
//	var ch2 = sap.ui.getCore().byId("cb2").setSelected(false);
//	var ch3 = sap.ui.getCore().byId("cb3").setSelected(false);
//	var ch4 = sap.ui.getCore().byId("cb4").setSelected(false);
//	var ch5 = sap.ui.getCore().byId("cb5").setSelected(false);
//	var ch6 = sap.ui.getCore().byId("cb6").setSelected(false);
//	var ch7 = sap.ui.getCore().byId("cb7").setSelected(false);
//	var ch8 = sap.ui.getCore().byId("cb8").setSelected(false);
	var oRBGselectedindex = sap.ui.getCore().byId("oRBG").getSelectedIndex();
	var oRBGSrepselectedindex = sap.ui.getCore().byId("oRBGSrep").getSelectedIndex();
	if(oRBGselectedindex >= 0){
		var oRBG = sap.ui.getCore().byId("oRBG").setSelectedButton(sap.ui.getCore().byId("rd_rbg_1"));
	}else if(oRBGSrepselectedindex >= 0){
		var oRBGSrep = sap.ui.getCore().byId("oRBGSrep").setSelectedButton(sap.ui.getCore().byId("rd_srbg_1"));
	}

	var RadioButtons = {};
//	var indexSelected = oRBG.getSelectedIndex();
	var RadioButton_Model = sap.ui.getCore().getModel("Radio_Buttons_model");
	RadioButtons = RadioButton_Model.getData();
	var radiobuttonkeys = RadioButtons.Keys;
	var radiobuttontext = RadioButtons.Text;
	var id = "";
	var idnum = 0;
	var CheckBoxes = {};
	//var indexSelected = oRBG.getSelectedIndex();
	var CheckBoxes_Model = sap.ui.getCore().getModel("Check_Boxes_model");
	CheckBoxes = CheckBoxes_Model.getData();
	var checkboxeskeys = CheckBoxes.Keys;
	var checkboxestext = CheckBoxes.Text;
	debugger;
	for(i=0;i<checkboxeskeys.length;i++){
		id = "";
		idnum = i + 1;
		id = "cb" + idnum;
		sap.ui.getCore().byId(id).setEnabled(false);
		sap.ui.getCore().byId(id).setSelected(false);

	}



	//Reset Price Values
	sap.ui.getCore().byId("idPridif").setValue();
	sap.ui.getCore().byId("idPridifs").setValue();
	//Reset Comments for Intern, Sales Rep and Admin
	sap.ui.getCore().byId("commin").setValue();
	sap.ui.getCore().byId("commsr").setValue();
	sap.ui.getCore().byId("commad").setValue();
	//Clear Images
	sap.ui.getCore().byId("display_image1").setSrc();
	sap.ui.getCore().byId("display_image2").setSrc();
	sap.ui.getCore().byId("display_image3").setSrc();
	sap.ui.getCore().byId("display_image4").setSrc();
	sap.ui.getCore().byId("display_image5").setSrc();
	sap.ui.getCore().byId("display_image6").setSrc();
	sap.ui.getCore().byId("display_image7").setSrc();
	sap.ui.getCore().byId("display_image8").setSrc();
	sap.ui.getCore().byId("display_image9").setSrc();
	sap.ui.getCore().byId("display_image10").setSrc();
	sap.ui.getCore().byId("display_simage1").setSrc();
	sap.ui.getCore().byId("display_simage2").setSrc();
	sap.ui.getCore().byId("display_simage3").setSrc();
	sap.ui.getCore().byId("display_simage4").setSrc();
	sap.ui.getCore().byId("display_simage5").setSrc();
	sap.ui.getCore().byId("display_simage6").setSrc();
	sap.ui.getCore().byId("display_simage7").setSrc();
	sap.ui.getCore().byId("display_simage8").setSrc();
	sap.ui.getCore().byId("display_simage9").setSrc();
	sap.ui.getCore().byId("display_simage10").setSrc();
	sap.ui.getCore().byId("display_aimage1").setSrc();
	sap.ui.getCore().byId("display_aimage2").setSrc();
	sap.ui.getCore().byId("display_aimage3").setSrc();
	sap.ui.getCore().byId("display_aimage4").setSrc();
	sap.ui.getCore().byId("display_aimage5").setSrc();
	sap.ui.getCore().byId("display_aimage6").setSrc();
	sap.ui.getCore().byId("display_aimage7").setSrc();
	sap.ui.getCore().byId("display_aimage8").setSrc();
	sap.ui.getCore().byId("display_aimage9").setSrc();	
	sap.ui.getCore().byId("display_aimage10").setSrc();
	sap.ui.getCore().byId("display_i2mage1").setSrc();
	sap.ui.getCore().byId("display_i2mage2").setSrc();
	sap.ui.getCore().byId("display_i2mage3").setSrc();
	sap.ui.getCore().byId("display_i2mage4").setSrc();
	sap.ui.getCore().byId("display_i2mage5").setSrc();
	sap.ui.getCore().byId("display_i2mage6").setSrc();
	sap.ui.getCore().byId("display_i2mage7").setSrc();
	sap.ui.getCore().byId("display_i2mage8").setSrc();
	sap.ui.getCore().byId("display_i2mage9").setSrc();
	sap.ui.getCore().byId("display_i2mage10").setSrc();
	sap.ui.getCore().byId("display_s2image1").setSrc();
	sap.ui.getCore().byId("display_s2image2").setSrc();
	sap.ui.getCore().byId("display_s2image3").setSrc();
	sap.ui.getCore().byId("display_s2image4").setSrc();
	sap.ui.getCore().byId("display_s2image5").setSrc();
	sap.ui.getCore().byId("display_s2image6").setSrc();
	sap.ui.getCore().byId("display_s2image7").setSrc();
	sap.ui.getCore().byId("display_s2image8").setSrc();
	sap.ui.getCore().byId("display_s2image9").setSrc();
	sap.ui.getCore().byId("display_s2image10").setSrc();
	sap.ui.getCore().byId("display_a2image1").setSrc();
	sap.ui.getCore().byId("display_a2image2").setSrc();
	sap.ui.getCore().byId("display_a2image3").setSrc();
	sap.ui.getCore().byId("display_a2image4").setSrc();
	sap.ui.getCore().byId("display_a2image5").setSrc();
	sap.ui.getCore().byId("display_a2image6").setSrc();
	sap.ui.getCore().byId("display_a2image7").setSrc();
	sap.ui.getCore().byId("display_a2image8").setSrc();
	sap.ui.getCore().byId("display_a2image9").setSrc();	
	sap.ui.getCore().byId("display_a2image10").setSrc();

}

function CheckPromoDetails_toggleImage(oImage_pressed, oImage_Inline, feIimg, Imgobj){


	//debugger;
	//var toggle = Imgobj.toggle;

	if(!Imgobj.toggle){
		oImage_pressed.setHeight($(window).height()+'px');
		oImage_pressed.setWidth($(window).width()+'px');

		//works on window resize
		//  this.setHeight('100%');
		// this.setWidth('100%');
		//toggle=true;
		Imgobj.toggle = true;
		feIimg.removeAllFields();
		feIimg.addField(oImage_pressed);

	}else{
		oImage_pressed.setHeight('');
		oImage_pressed.setWidth('');
		//toggle=false;
		Imgobj.toggle = false;
		feIimg.removeAllFields();
		feIimg.addField(oImage_pressed);
		feIimg.addField(oImage_Inline);
	}						        

}
/*function CheckPromoDetails_SendImageToSAP(slug, ImgValue, error, ImageSentChecker, ImageId,xcsrf_token_ref) {
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
		if(sap.ui.Device.browser.chrome){
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
} */

function CheckPromoDetails_IfNextSerialNumberSubmittedThenGetNext(SubmittedSerialNumbers, serialno, mode, nextserobj){
	var lastrecursion = true; //var NextSerial = serialno;
	for(var i=0; i<SubmittedSerialNumbers.length; i++) {
		if (SubmittedSerialNumbers[i] == serialno) {
			if (mode == "Prev"){
				serialno = +serialno - 1;
				CheckPromoDetails_IfNextSerialNumberSubmittedThenGetNext(SubmittedSerialNumbers, serialno , mode, nextserobj);
				lastrecursion = false;
				break;
			} else{
				serialno = +serialno + 1;
				CheckPromoDetails_IfNextSerialNumberSubmittedThenGetNext(SubmittedSerialNumbers, serialno , mode, nextserobj);
				lastrecursion = false;
				break;
			}

		}   	
	}
	if (lastrecursion) {
		nextserobj.NextSerialNumber = serialno;
	}
}

function CheckPromoDetais_IsSerialNumberSubmitted(SubmittedSerialNumbers, serialnoq){
	for(var i=0; i<SubmittedSerialNumbers.length; i++) {
		if (SubmittedSerialNumbers[i] == serialnoq) {
			return true;
		}
	}
	return false;

}

//**********************UPDATED VERSION***************************
function CheckPromoDetails_PrepareNextEntry(mode,oController){
	debugger;
	var nextserobj = {
			NextSerialNumber : 0,
	};
	var sermodel =	sap.ui.getCore().getModel("serialnomodel");
	//var json = {};
	//json.Serialno = sermodel.getData();
//	debugger;
	serialno = sermodel.getData().Serialno;
	if(mode == "Submit"){

		SubmittedSerialNumbers.push(+serialno);		 
	}
	/*	var PromoListTable = new sap.ui.table.Table({ id: "" });
	PromoListTable = sap.ui.getCore().byId("CheckPromos");*/
	/*KALPANA ADDED*/
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
	if (SubmittedSerialNumbers.length > 0){
		var remainingCount = TotalRows - (SubmittedSerialNumbers.length);
	}else{
		var remainingCount = TotalRows;
	}


	var form4 = sap.ui.getCore().byId("F4");
	var title = new sap.ui.core.Title("");
	title.setText("Check Promotion Details: "+remainingCount+" remaining promos for review");
	form4.setTitle(title);

	var Nextserialno = -1;
	if (mode == 'Prev'){
		serialno = +serialno - 1;

	}else{

		serialno = +serialno + 1;
	}

	if (SubmittedSerialNumbers.length > 0){
		CheckPromoDetails_IfNextSerialNumberSubmittedThenGetNext(SubmittedSerialNumbers, serialno, mode, nextserobj);
		Nextserialno = nextserobj.NextSerialNumber;
	}

	var path = "";
	if(mode == 'Prev'){
		//serialno = +serialno - 1;
		if((+serialno >= 1 && Nextserialno == -1) || (Nextserialno != 0 && Nextserialno >= 1)){
			if ( Nextserialno == -1 ){
				path = PromoListTable.getContextByIndex(+serialno - 1).getPath();
			}else {
				path = PromoListTable.getContextByIndex(+Nextserialno - 1).getPath();

			}
			//		var obj = sap.ui.getCore().byId("CheckPromos").getModel().getProperty(path);
			/*KALPANA*/
			if ( urole == "ADMIN" )

			{
				if   ( shell == "minternres" || shell == "msrres" ) 
				{
					var obj = sap.ui.getCore().byId("Manager_Admin").getModel().getProperty(path);

				}else if( shell == "mcheckpromo"){

					var obj = sap.ui.getCore().byId("CheckPromos").getModel().getProperty(path);

				}
				else
				{

					var obj = sap.ui.getCore().byId("Manager_Admin_Home").getModel().getProperty(path);
				}
			}

			else 
			{

				var obj = sap.ui.getCore().byId("CheckPromos").getModel().getProperty(path);
			}
			/*    END CODE*/

			var json = {};
			if (Nextserialno == -1){
				json.Serialno = +serialno;
			}else {
				json.Serialno = +Nextserialno;
			}
			//var sermodel = new sap.ui.model.json.JSONModel();
			sermodel.setData(json);
			sap.ui.getCore().setModel(sermodel,"serialnomodel");
//			****************************************Clear all values when next or perevios promo loaded***************************//											
			CheckPromoDetails_ClearAllData();
			//*********************************************************//
			oController.fillPageData(obj.Promoid, obj.Itemid, obj.Weekid);

		}else{
			sap.ui.getCore().byId("next").setEnabled(true);
			sap.ui.getCore().byId("back").setEnabled(true);
			sap.ui.getCore().byId("previous").setEnabled(true);
			//IsSerialNumberSubmitted(SubmittedSerialNumber, )
			sap.ui.getCore().byId("submit").setEnabled(true);
			sap.ui.getCore().byId("reset").setEnabled(true);
			//	sap.ui.getCore().byId("")
//			***********************vinay added***************************************************
//			sap.ui.core.BusyIndicator.hide();
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
					"End of Table Reached", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Promos Completed",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function(oAction){ 
							$('#myShell2-content').animate({ scrollTop: "0px" }); 
							/*							if (mode == "Submit"){
								sap.ui.core.BusyIndicator.show(0);
							} */
						}
					}); 

			//alert("End of Table Reached");
//			************************vinay end added**********************************************	

		}		

	}else if(mode == 'Next' || mode == 'Submit'){
		debugger;

		if( (+serialno <= TotalRows && Nextserialno == -1) || ( Nextserialno != 0 && Nextserialno != -1 && Nextserialno <= TotalRows) ){

			if (Nextserialno == -1){
				path = PromoListTable.getContextByIndex(+serialno - 1).getPath();
			} else {
				path = PromoListTable.getContextByIndex(+Nextserialno - 1).getPath();

			}
			//		var obj = sap.ui.getCore().byId("CheckPromos").getModel().getProperty(path);
			/*KALPANA*/
			if ( urole == "ADMIN" )

			{
				if  ( shell == "minternres" || shell == "msrres" ) 
				{
					var obj = sap.ui.getCore().byId("Manager_Admin").getModel().getProperty(path);

				}else if(shell == "mcheckpromo"){

					var obj = sap.ui.getCore().byId("CheckPromos").getModel().getProperty(path);

				}
				else
				{

					var obj = sap.ui.getCore().byId("Manager_Admin_Home").getModel().getProperty(path);
				}
			}

			else 
			{

				var obj = sap.ui.getCore().byId("CheckPromos").getModel().getProperty(path);
			}
			/*    END CODE*/
			var json = {};
			if (Nextserialno == -1){
				json.Serialno = +serialno;
			} else {
				json.Serialno = Nextserialno;
			}
			//var sermodel = new sap.ui.model.json.JSONModel();
			sermodel.setData(json);
			sap.ui.getCore().setModel(sermodel,"serialnomodel");
//			****************************************Clear all values when next or perevios promo loaded***************************//											
			CheckPromoDetails_ClearAllData();
			//*********************************************************//
			oController.fillPageData(obj.Promoid, obj.Itemid, obj.Weekid);

		}else{
			sap.ui.getCore().byId("next").setEnabled(true);
			sap.ui.getCore().byId("back").setEnabled(true);
			sap.ui.getCore().byId("previous").setEnabled(true);
			if (mode == "Submit") { 
				sap.ui.getCore().byId("submit").setEnabled(false);
				sap.ui.getCore().byId("reset").setEnabled(false);
			} else{
				var sermodelq =	sap.ui.getCore().getModel("serialnomodel");
				serialnoq = sermodel.getData().Serialno;
				if(!CheckPromoDetais_IsSerialNumberSubmitted(SubmittedSerialNumbers, serialnoq)){
					sap.ui.getCore().byId("submit").setEnabled(true);
					sap.ui.getCore().byId("reset").setEnabled(true);
				}
			}
//			***********************vinay added***************************************************
			//sap.ui.core.BusyIndicator.hide();
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
					"End of Table Reached", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Promos Completed",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function(oAction){ 
							$('#myShell2-content').animate({ scrollTop: "0px" }); 
							if (mode == "Submit"){
								CheckPromoDetails_ClearAllData();
								SubmittedSerialNumbers = [];
								oController.navtoback(SubmittedSerialNumbers);					
								//	sap.ui.core.BusyIndicator.show(0);
							}
						}
					}); 

			//alert("End of Table Reached");
//			************************vinay end added**********************************************			

		}

	}



}



