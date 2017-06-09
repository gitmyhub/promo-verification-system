sap.ui.jsview("pvs3.Promolist", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf pvs3.Promolist
	 */ 
	getControllerName : function() {
		return "pvs3.Promolist";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf pvs3.Promolist
	 */ 
	createContent : function(oController) {

		//Home Page Design for Intern	

		var oLayout9 = new sap.ui.layout.form.ResponsiveGridLayout("L9");

		var oHtable = new sap.ui.table.Table({
			id : "iHome",
			title:" Summary",
			selectionBehavior : "RowOnly",
			editable : false,
			visibleRowCount :3,
			//setVisibleRowCountMode:"Auto",


		});

		/*oHtable.addColumn(new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "Intern Name",
					id:"oInt",
				}),
				template : new sap.ui.commons.TextView()
						.bindProperty("text", "InternName"),
				width : "7em",
				resizable : false,

			}));*/
		oHtable.addColumn(new sap.ui.table.Column({

			label : new sap.ui.commons.Label("oOverdue",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Overdue",

			}),
			template : new sap.ui.commons.Link("Intern_Overdue",{
				text : "{Overdue}" ,
				resizable : false,
				hAlign : sap.ui.core.HorizontalAlign.Center,
				press:function(e)
				{
					var oShell = sap.ui.getCore().byId("myShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.HomeFilter = "OVERDUE";
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FINTERN1").setTitle("Intern Overdue Summary for" + " " + obj.Internid);
					oController.FillInternShellContent("dummyItem", oShell, obj )		

				}
			}),
			hAlign: "Center",

		}));

		oHtable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Due Today",
				id:"oDue",
			}),
			template : new sap.ui.commons.Link({
				text : "{Duetoday}" ,
				resizable : false,
				hAlign : sap.ui.core.HorizontalAlign.Center,
				press:function(e)
				{

					/*					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var oTab = sap.ui.getCore().byId("CheckPromos");	
					var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
					var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
							false);
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

					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"INTERN"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
					var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"INTERN"}]); 
					var f4 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:obj.Internid}]);
					var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"DUETODAY"}]);
					oTab.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4,f5 ]});
					var oFormIntern = sap.ui.getCore().byId("FINTERN");
					sap.ui.getCore().byId("FINTERN1").setTitle("Intern DueToday Summary For" + " " + obj.Internid);
					var oShell = sap.ui.getCore().byId("myShell");
					oShell.setContent(oFormIntern);
					 */
					var oShell = sap.ui.getCore().byId("myShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.HomeFilter = "DUETODAY";
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FINTERN1").setTitle("Intern DueToday Summary for" + " " + obj.Internid);
					oController.FillInternShellContent("dummyItem", oShell, obj );

				}
			}),
			hAlign: "Center",

		}));
		oHtable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Upcoming For Review",
				id:"oUp",
			}),
			template : new sap.ui.commons.TextView({
				text : "{UpcomingForReview}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
			})

		}));

		oHtable.addStyleClass("tableClass");
		var internHome = new sap.ui.layout.form.Form(
				"H1",
				{

					editable : true,
					layout : oLayout9,
					formContainers : [ new sap.ui.layout.form.FormContainer(
							"F1H1",
							{
								title : "Intern: Home",
								expanded : true,
								formElements : [

								                new sap.ui.layout.form.FormElement(
								                		{
								                			// label:
								                			// Password,
								                			fields : [ oHtable ]
								                		}),

								                		]
							}) ]
				});
		//SalesRep Home page

		var oHtable1 = new sap.ui.table.Table({
			id : "iHome1",
			title:"Summary",
			selectionBehavior : "RowOnly",
			editable : false,
			visibleRowCount :7,
			//navigationMode:Scrollbar,

		});

			oHtable1.addColumn(new sap.ui.table.Column({
				label : new sap.ui.commons.Label("srep_hname",{
					text : "Sales Rep Name"
				}),
				template : new sap.ui.commons.TextView()
						.bindProperty("text", "SalesRep"),
				width : "12em",
				resizable : false,

			}));
		oHtable1.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("srep_od1",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Overdue"
			}),
			template : new sap.ui.commons.Link({
				text : "{Overdue}" ,
				resizable : false,
				hAlign : sap.ui.core.HorizontalAlign.Center,
				press:function(e)
				{

					/*					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);*/
					/*Code Added by Kalpana to display intern table 
				/*	var oTab = sap.ui.getCore().byId("SalesRep");	
					var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
					var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
							false);
					oTab.setModel(oModel);
					sap.ui.getCore().byId("srepLabel").setVisible(false);
					sap.ui.getCore().byId("Salesrep-Fieldsearch").setVisible(false);
					sap.ui.getCore().byId("SalesrepDP").setVisible(false);
					sap.ui.getCore().byId("Salesrepsearchinput").setVisible(false);	
					sap.ui.getCore().byId("Salesrep-Fieldsearchkey").setVisible(false);
					sap.ui.getCore().byId("SalesrepCheckPromosSearch").setVisible(false);
					sap.ui.getCore().byId("SalesrepApply").setVisible(false);
					sap.ui.getCore().byId("SalesrepReset").setVisible(false);	
					sap.ui.getCore().byId("SalesrepExport").setVisible(false);
						var oFormSalesRep = sap.ui.getCore().byId("FSALESREP");
					sap.ui.getCore().byId("FSALESREP1").setTitle("SalesRep Overdue Summary For" + " " + obj.SalesRep);*/
					/*					var oTab = sap.ui.getCore().byId("CheckPromos");	
					var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
					var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
							false);
					oTab.setModel(oModel);
					sap.ui.getCore().byId("Internlabel").setVisible(false);
					sap.ui.getCore().byId("Intern-Fieldsearch").setVisible(false);
					sap.ui.getCore().byId("InternDP").setVisible(false);
					sap.ui.getCore().byId("Internsearchinput").setVisible(false);	
					sap.ui.getCore().byId("Intern-Fieldsearchkey").setVisible(false);
					sap.ui.getCore().byId("CheckPromosSearch").setVisible(false);
					sap.ui.getCore().byId("InternApply").setVisible(false);
					sap.ui.getCore().byId("InternReset").setVisible(false);	
					sap.ui.getCore().byId("InternExport").setVisible(false);*/

					/*                      End of Code               */


					/*					debugger;
					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
					var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
					var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:obj.SalesRep}]);
					var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"OVERDUE"}]);
					oTab.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4,f5 ]});
					var oFormSalesRep = sap.ui.getCore().byId("FSALESREP");
					sap.ui.getCore().byId("FSALESREP1").setTitle("SalesRep Overdue Summary For" + " " + obj.SalesRep);
					var oShell = sap.ui.getCore().byId("myShell");
					oShell.setContent(oFormSalesRep);*/

					var oShell = sap.ui.getCore().byId("myShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.HomeFilter = "OVERDUE";
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FSALESREP1").setTitle("SalesRep Overdue Summary for" + " " + obj.SalesRep);
					oController.FillInternShellContent("dummyItem", oShell, obj );


				}
			}),
			hAlign: "Center",

		}));

		oHtable1.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("srep_dt1",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Due Today"
			}),
			template : new sap.ui.commons.Link({
				text : "{DueToday}" ,
				resizable : false,
				hAlign : sap.ui.core.HorizontalAlign.Center,
				press:function(e)
				{

					/*Code Added by Kalpana to display intern table     */
					/*		var oTab = sap.ui.getCore().byId("SalesRep");	
							var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
							var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
									false);
							oTab.setModel(oModel);
							sap.ui.getCore().byId("srepLabel").setVisible(false);
							sap.ui.getCore().byId("Salesrep-Fieldsearch").setVisible(false);
							sap.ui.getCore().byId("SalesrepDP").setVisible(false);
							sap.ui.getCore().byId("Salesrepsearchinput").setVisible(false);	
							sap.ui.getCore().byId("Salesrep-Fieldsearchkey").setVisible(false);
							sap.ui.getCore().byId("SalesrepCheckPromosSearch").setVisible(false);
							sap.ui.getCore().byId("SalesrepApply").setVisible(false);
							sap.ui.getCore().byId("SalesrepReset").setVisible(false);	
							sap.ui.getCore().byId("SalesrepExport").setVisible(false);
								var oFormSalesRep = sap.ui.getCore().byId("FSALESREP");
							sap.ui.getCore().byId("FSALESREP1").setTitle("SalesRep DueToday Summary For" + " " + obj.SalesRep);*/
					/*							var model = this.getModel();
							var path = e.getSource().getBindingContext().getPath();
							var obj = model.getProperty(path);					
							var oTab = sap.ui.getCore().byId("CheckPromos");	
							var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
							var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,
									false);
							oTab.setModel(oModel);
							sap.ui.getCore().byId("Internlabel").setVisible(false);
							sap.ui.getCore().byId("Intern-Fieldsearch").setVisible(false);
							sap.ui.getCore().byId("InternDP").setVisible(false);
							sap.ui.getCore().byId("Internsearchinput").setVisible(false);	
							sap.ui.getCore().byId("Intern-Fieldsearchkey").setVisible(false);
							sap.ui.getCore().byId("CheckPromosSearch").setVisible(false);
							sap.ui.getCore().byId("InternApply").setVisible(false);
							sap.ui.getCore().byId("InternReset").setVisible(false);	
							sap.ui.getCore().byId("InternExport").setVisible(false);*/

					/*                      End of Code               */	
					/*					var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
					var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
					var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
					var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:obj.SalesRep}]);
					var f5 = new  sap.ui.model.odata.Filter('Checkinsearch', [{operator:"EQ",value1:"DUETODAY"}]);
					oTab.bindRows( {path:"/PromoListSet" , filters:[ f1,f2,f3,f4,f5 ]});
					var oFormSalesRep = sap.ui.getCore().byId("FSALESREP");
					sap.ui.getCore().byId("FSALESREP1").setTitle("SalesRep DueToday Summary For" + " " + obj.SalesRep);
					var oShell = sap.ui.getCore().byId("myShell");
					oShell.setContent(oFormSalesRep);*/
					var oShell = sap.ui.getCore().byId("myShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.HomeFilter = "DUETODAY";
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FSALESREP1").setTitle("SalesRep DueToday Summary for" + " " + obj.SalesRep);
					oController.FillInternShellContent("dummyItem", oShell, obj )


				}
			}),
			hAlign: "Center",

		}));

		oHtable1.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("slabel3",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Upcoming For Review"
			}),
			template : new sap.ui.commons.TextView({
				text : "{upcominForReview}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
			})

		}));
		oHtable1.addStyleClass("tableClass");

		var oLayout10 = new sap.ui.layout.form.ResponsiveGridLayout("L10");	

		var salesRepHome = new sap.ui.layout.form.Form(
				"H2",
				{

					editable : true,
					layout : oLayout10,
					formContainers : [ new sap.ui.layout.form.FormContainer(
							"F1H2",
							{
								title : "Sales Representative: Home",
								formElements : [

								                new sap.ui.layout.form.FormElement(
								                		{
								                			// label:
								                			// Password,
								                			fields : [ oHtable1 ]
								                		}),

								                		]
							}) ]
				});


//		Table for Interns --- Check promos + Search Promos 

		var promoid = new sap.m.Input("pid");

		var promoitemid = new sap.m.Input("pitemid");

		var weekid = new sap.m.Input("wid");

		var oType = new sap.ui.model.type.DateTime({source: {pattern: "MMM dd,YYYY"}});
		var oDateFormat = sap.ui.core.format.DateFormat.getInstance({pattern: "MM.dd.yyyy"});					
		var oTable = new sap.ui.table.Table({
			id : "CheckPromos",
			//	width: '480px',
			//	width : "100%",
			//	title: "Promo List",
			//	height: "100%",
			selectionBehavior: "RowOnly",
			editable: false,
			navigationMode : sap.ui.table.NavigationMode.Paginator,
			//visibleRowCount:9,

		});
		//Define the columns and the control templates to be used		
		oTable.addColumn(new sap.ui.table.Column({id : "Edit" ,
			label: new sap.ui.commons.Label({text: "Click To" , id:"oth15"}),
			template: new sap.m.Link({id : "link" ,
				text : "View" ,
				press : function(e) {
					debugger;
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					console.log(obj);
					var json = {};
					json.Serialno = obj.Serialno;
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"serialnomodel");
					sap.ui.getCore().byId("pid").setValue(obj.Promoid);	
					sap.ui.getCore().byId("pitemid").setValue(obj.Itemid);	
					sap.ui.getCore().byId("wid").setValue(obj.Weekid);	
					var shell = sap.ui.getCore().byId("myShell").getSelectedWorksetItem();
					//*************************************vinay start*****************************//					
					//****************************************Clear all values before Promo Detail page loaded***************************//											
					//Reset Radio Buttons

//					sap.ui.getCore().byId("oRBG").setSelectedButton(sap.ui.getCore().byId("acc"));
//					sap.ui.getCore().byId("oRBGSrep").setSelectedButton(sap.ui.getCore().byId("accs"));
//					//Reset Check Boxes to set default
//					sap.ui.getCore().byId("cb1").setEnabled(false);
//					sap.ui.getCore().byId("cb2").setEnabled(false);
//					sap.ui.getCore().byId("cb3").setEnabled(false);
//					sap.ui.getCore().byId("cb4").setEnabled(false);
//					sap.ui.getCore().byId("cb5").setEnabled(false);
//					sap.ui.getCore().byId("cb6").setEnabled(false);
//					sap.ui.getCore().byId("cb7").setEnabled(false);
//					sap.ui.getCore().byId("cb8").setEnabled(false);
//					//Reset Check Boxes to unselect 
//					var ch1 = sap.ui.getCore().byId("cb1").setSelected(false);
//					var ch2 = sap.ui.getCore().byId("cb2").setSelected(false);
//					var ch3 = sap.ui.getCore().byId("cb3").setSelected(false);
//					var ch4 = sap.ui.getCore().byId("cb4").setSelected(false);
//					var ch5 = sap.ui.getCore().byId("cb5").setSelected(false);
//					var ch6 = sap.ui.getCore().byId("cb6").setSelected(false);
//					var ch7 = sap.ui.getCore().byId("cb7").setSelected(false);
//					var ch8 = sap.ui.getCore().byId("cb8").setSelected(false);
					//Reset Price Values
					sap.ui.getCore().byId("idPridif").setValue();
					sap.ui.getCore().byId("idPridifs").setValue();
					//Reset Comments for Intern, Sales Rep and Admin
					sap.ui.getCore().byId("commin").setValue();
					sap.ui.getCore().byId("commsr").setValue();
					sap.ui.getCore().byId("commad").setValue();
					//*************************************vinay end*****************************//

					if ( shell == "searchpromo")
					{
						sap.ui.getCore().byId("idSearchPromoDetails").invalidate();
						app.to("idSearchPromoDetails", "flip");
					}
					else{
						sap.ui.getCore().byId("idCheckPromoDetails").invalidate();
						app.to("idCheckPromoDetails", "flip");
					}				
				}
			}),
			width:"5em",

		}));
		
	//***************************************29-03*************************************************
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer Name",id:"oth5" }),
			template: new sap.m.Text({text:"{Customername}", wrapping : false}),
			width:"15em",
			sortProperty : "Customername",

		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer",id:"oth4"}),
			template: new sap.m.Text({text:"{Customer}" , wrapping : false}),
			sortProperty : "Customer",
			width:"7em",			
		}));

		//***************************************end*************************************************
		oTable.addColumn(new sap.ui.table.Column({
			width:"7em",

			label: new sap.ui.commons.Label({text: "Check Date",id:"oth20"  }),
			template: new sap.m.Text({
				editable : false ,
				wrapping : false,
			
				text:{
					path : "Checkfrom" , //"Checkfrom",
					type : oType,
				

					formatter :  
						function(d){ 

						if (d) {
							return oDateFormat.format(new Date(d));
						}
						else
						{ return d;
						}
					}


				},
			}),
			sortProperty : "Checkfrom",

		}));
		oTable.addColumn(new sap.ui.table.Column({

			width:"7em",

			label: new sap.ui.commons.Label({text: "Promo From",id:"oth7" }),
			template: new sap.m.Text({
				editable : false ,
				wrapping : false,
				text:{
					path : "Promofrom" , //"Checkfrom",
					type : oType,
				

					formatter :  //'sap.ui.RbsNew.Formatter.date'
						function(d){ 
						//debugger;
						if (d) {
							return oDateFormat.format(new Date(d));
						}
						else
						{ return d;
						}
					}


				},
				change: function(e) {
					// debugger;
					var path = e.getSource().getBindingContext().sPath;
					var obj = oTable.getModel("PromoListSet").getProperty(path);
					obj.Promofrom = new Date();
				}
			}),
			sortProperty : "Promofrom",

		}));


		oTable.addColumn(new sap.ui.table.Column({
			//			resizable:false,
			width:"7em",
			label: new sap.ui.commons.Label({text: "Promo To",id:"oth8"}),
			template: new sap.m.Text({
				editable : false,
				wrapping : false,
			
				text:{
					path : "Promoto",  //Promoto
			

					type : oType,
					formatter : 
								function(d){ 
					
								if (d) {
								return oDateFormat.format(new Date(d));
								}
								else
								{ return d;
								}
								}


				}
			}),
			sortProperty : "Promoto",

		}));

		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Product",id:"oth9"}),
			template: new sap.m.Text({text:"{Product}" , wrapping : false}),
			width:"7em",
			sortProperty : "Product",

			//	  autoResizable: true,
			//	  flexible : true,
			//	  enableColumnFreeze : true,
			//	filterProperty : "Product"


		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "IR",id:"oth11"}),
			template: new sap.m.Text({text:"{Iramount}" , wrapping : false}),
			width:"5em",
			sortProperty : "Iramount",


		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "MIR",id:"oth10"}),
			template: new sap.m.Text({text:"{Miramount}" , wrapping : false}),
			width:"5em",
			sortProperty : "Miramount",


		}));

		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({				
				text: "Promo ID",id:"oth2"}),
				template: new sap.m.Text({text:"{Promoid}" , wrapping : false}),
				width:"7em",
				sortProperty : "Promoid",

		});
		oTable.addColumn(oColumn);
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Item ID",id:"oth3"}),
			template: new sap.m.Text({text:"{Itemid}" ,  wrapping : false}),	
			width:"5em",
			sortProperty : "Itemid",


		}));
		//*************************vinay 26-05-2016**************************/
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer Part ID ",id:"oth23"}),
			template: new sap.m.Text({text:"{Partid}" , wrapping : false}),
			width:"5em",
			sortProperty : "Partid",


		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Last Response",id:"oth21"}),
			template: new sap.m.Text({text:"{Lastresp}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Lastresp",


		}));		
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Inaccurate Reason",id:"oth22"}),
			template: new sap.m.Text({text:"{Inaccursns}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Inaccursns",


		}));
//************************************************************************/	
		var InternLabel = new sap.m.Label("Internlabel",{text: "Search" ,layoutData: new sap.ui.layout.GridData({span:"L1 M1 S6"} )}) ;
		var Internsearch = new sap.m.Select({ id : "Intern-Fieldsearch",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),

			items: [

			        new sap.ui.core.Item("sp1", {text: "Customer Name"}),
			        new sap.ui.core.Item("sp2", {text: "Customer ID"}),
			        new sap.ui.core.Item("sp3", {text: "Promo From"}),
			        new sap.ui.core.Item("sp4", {text: "Promo To"}),
			        new sap.ui.core.Item("sp5", {text: "Product"}),
			        new sap.ui.core.Item("sp6", {text: "IR"}),
			        new sap.ui.core.Item("sp7", {text: "MIR"}),
			        new sap.ui.core.Item("sp8", {text: "Promo ID"}),
			        /*CODE COMMENTED 17.06*/
			      /*  new sap.ui.core.Item("sp9", {text: "Item ID"}),*/
			        ] ,
			        change : function(e)
			        {
			        	var fieldname = sap.ui.getCore().byId("Intern-Fieldsearch").getSelectedItem().getText();
			        	if ( ( fieldname == 'Promo From' ) || ( fieldname == 'Promo To' ) )
			        	{
			        		sap.ui.getCore().byId("InternDP").setVisible(true);
			        		sap.ui.getCore().byId("Internsearchinput").setVisible(false);
			        	}
			        	else
			        	{
			        		sap.ui.getCore().byId("InternDP").setVisible(false);
			        		sap.ui.getCore().byId("Internsearchinput").setVisible(true);
			        	}

			        }


		});
		var Internsearchkey =    

			new sap.m.Select({ id : "Intern-Fieldsearchkey",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),

				items: [

				        new sap.ui.core.Item("skp1", {text: "Contains"}),
				        new sap.ui.core.Item("skp2", {text: "equals"}),
				        new sap.ui.core.Item("skp3", {text: "does not equals"}),
				        new sap.ui.core.Item("skp4", {text: "is less than"}),
				        new sap.ui.core.Item("skp5", {text: "is less than or equals to"}),
				        new sap.ui.core.Item("skp6", {text: "is greater than"}),
				        new sap.ui.core.Item("skp7", {text: "is greater than or equals to"}),
				        new sap.ui.core.Item("skp8", {text: "like"}),
				        new sap.ui.core.Item("skp9", {text: "starts with"}),
				        new sap.ui.core.Item("skp10", {text: "ends with"}),
				        ] ,

			});

		var Internchecksearch =    new sap.m.Select({ id : "CheckPromosSearch",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),
			items: [
			        new sap.ui.core.Item("item1", {text: " "}),
			        new sap.ui.core.Item("item2", {text: "Overdue"}),
			        new sap.ui.core.Item("item3", {text: "Due Today"}),  ] ,
			        change : function(){
			        	oController.CheckPromosSearch();

			        }
		});

		var Internsearchinp =	new sap.m.Input({ id : "Internsearchinput"  , layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"} )});

		var Interndp = new sap.m.DatePicker({ id : "InternDP" , layoutData: new sap.ui.layout.GridData({span:"L1 M3 S3"} ),
			displayFormat : "MM/dd/yyyy",
			valueFormat: "yyyy-MM-dd" });
		var Internapply =  new sap.m.Button({ id : "InternApply" , text: "Apply", 
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" ,press: function() {
				oController.onInternApplyPress(); 
			}});
		var Internreset =  		 new sap.m.Button({id : "InternReset" , text: "Reset",
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" , press: function() {
				oController.onInternResetPress(); 
			}});
		var Internexport = new sap.m.Button({id : "InternExport",text: "Export",
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" ,press: function() {
				oController.onExportCheckPromosPress(); 
			}}); 
		var oLayout_intern = new sap.ui.layout.form.ResponsiveGridLayout("RGLintern");

		var oFormintern = new sap.ui.layout.form.Form("FINTERN",{
			editable: true,
			layout: oLayout_intern,

			formContainers: [
			                 new sap.ui.layout.form.FormContainer("FINTERN1",{
			                	 formElements: [
			                	                new sap.ui.layout.form.FormElement({
			                	                	label : InternLabel ,                                             
			                	                	fields: [  Internsearch , Internsearchkey, Internchecksearch ,Internsearchinp ,Interndp, Internapply , Internreset,Internexport

			                	                	           ]
			                	                }),
			                	                new sap.ui.layout.form.FormElement({                                 
			                	                	label: "",                                              
			                	                	fields: [ new sap.m.Label({width: "20%"}) ]                                                              
			                	                }),              

			                	                new sap.ui.layout.form.FormElement("OFITAB",{
			                	                	//      label: "",                                                   
			                	                	fields: [  oTable ]


			                	                }),


			                	                ]
			                 })
			                 ],

		});
//		Table for Salesrep --- Search Promos 
		var oSRTable = new sap.ui.table.Table({
			id : "SalesRep",
			selectionBehavior: "RowOnly",
			editable: false,
			//visibleRowCount:9,
			navigationMode : sap.ui.table.NavigationMode.Paginator,

		});
		//Define the columns and the control templates to be used		
		oSRTable.addColumn(new sap.ui.table.Column({id : "SREdit" ,
			label: new sap.ui.commons.Label("SReplink",{text: "Click To"}),
			template: new sap.m.Link({id : "SRlink" ,
				text : "View" ,
				press : function(e) {
					debugger;
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					console.log(obj);

					sap.ui.getCore().byId("pid").setValue(obj.Promoid);	
					sap.ui.getCore().byId("pitemid").setValue(obj.Itemid);	
					sap.ui.getCore().byId("wid").setValue(obj.Weekid);	
					var shell = sap.ui.getCore().byId("myShell").getSelectedWorksetItem();
					//*************************************vinay start*****************************//					
					//****************************************Clear all values when Promo Details page loaded***************************//											
					//Reset Radio Buttons

//					sap.ui.getCore().byId("oRBG").setSelectedButton(sap.ui.getCore().byId("acc"));
//					sap.ui.getCore().byId("oRBGSrep").setSelectedButton(sap.ui.getCore().byId("accs"));
//					//Reset Check Boxes to set default
//					sap.ui.getCore().byId("cb1").setEnabled(false);
//					sap.ui.getCore().byId("cb2").setEnabled(false);
//					sap.ui.getCore().byId("cb3").setEnabled(false);
//					sap.ui.getCore().byId("cb4").setEnabled(false);
//					sap.ui.getCore().byId("cb5").setEnabled(false);
//					sap.ui.getCore().byId("cb6").setEnabled(false);
//					sap.ui.getCore().byId("cb7").setEnabled(false);
//					sap.ui.getCore().byId("cb8").setEnabled(false);
//					//Reset Check Boxes to unselect 
//					var ch1 = sap.ui.getCore().byId("cb1").setSelected(false);
//					var ch2 = sap.ui.getCore().byId("cb2").setSelected(false);
//					var ch3 = sap.ui.getCore().byId("cb3").setSelected(false);
//					var ch4 = sap.ui.getCore().byId("cb4").setSelected(false);
//					var ch5 = sap.ui.getCore().byId("cb5").setSelected(false);
//					var ch6 = sap.ui.getCore().byId("cb6").setSelected(false);
//					var ch7 = sap.ui.getCore().byId("cb7").setSelected(false);
//					var ch8 = sap.ui.getCore().byId("cb8").setSelected(false);
					//Reset Price Values
					sap.ui.getCore().byId("idPridif").setValue();
					sap.ui.getCore().byId("idPridifs").setValue();
					//Reset Comments for Intern, Sales Rep and Admin
					sap.ui.getCore().byId("commin").setValue();
					sap.ui.getCore().byId("commsr").setValue();
					sap.ui.getCore().byId("commad").setValue();
					//*************************************vinay end*****************************//									



					var json = {};
					json.Serialno = obj.Serialno;
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"searchserialnomodel");
					if ( shell == "searchpromo"  )
					{
						sap.ui.getCore().byId("idSearchPromoDetails").invalidate();
						app.to("idSearchPromoDetails", "flip");
					}
					else{
						sap.ui.getCore().byId("idCheckPromoDetails").invalidate();
						app.to("idCheckPromoDetails", "flip");
					}	

				}
			}),
			width:"5em",
			//resizable:false,
		}));
		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Promo Status",id:"srl1"}),
			template: new sap.m.Text({text:"{Status}" , wrapping : false}),
			width:"7em",
			sortProperty : "Status",


		}));

		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({ text: "Promo ID",id:"srl2"}),
			template: new sap.m.Text({text:"{Promoid}" , wrapping : false}),
			width:"7em",
			sortProperty : "Promoid",
		}));
		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Item ID",id:"srl3"}),
			template: new sap.m.Text({text:"{Itemid}" , wrapping : false}),	
			width:"5em",
			sortProperty : "Itemid",

		}));
		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer",id:"srl4"}),
			template: new sap.m.Text({text:"{Customer}" , wrapping : false}),
			width:"7em",
			sortProperty : "Customer",

		}));
		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer Name",id:"srl5"}),
			template: new sap.m.Text({text:"{Customername}" , wrapping : false}),
			width:"15em",
			sortProperty : "Customername",

		}));
		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Sales Rep",id:"srl6"}),
			template: new sap.m.Text({text:"{Salesrep}" , wrapping : false }),	
			width:"7em",
			sortProperty : "Salesrep",

		}));
		oSRTable.addColumn(new sap.ui.table.Column("src1", {
			label: new sap.ui.commons.Label({text: "Channel",id:"srl7"}),
			template: new sap.m.Text({text:"{Channel}" , wrapping : false }),	
			width:"5em",
			sortProperty : "Channel",

		}));
		oSRTable.addColumn(new sap.ui.table.Column("src2", {
			label: new sap.ui.commons.Label({text: "Plan Type",id:"srl8"}),
			template: new sap.m.Text({text:"{Plantype}" , wrapping : false}),	
			width:"5em",
			sortProperty : "Plantype",

		}));
		oSRTable.addColumn(new sap.ui.table.Column("src3" , {
			label: new sap.ui.commons.Label({text: "How Advertised",id:"srl9"}),
			template: new sap.m.Text({text:"{Advtype}" , wrapping : false}),	
			width:"10em",
			sortProperty : "Advtype",

		}));
		/*Start 27.4.2016 */		
		oSRTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({text: "Final Response",id:"srl100"}),
            template: new sap.m.Text({text:"{Checkresptext}" , wrapping : false}),
            width:"7em",
        	sortProperty : "Checkresptext",

     }));
		oSRTable.addColumn(new sap.ui.table.Column("src5",{
			label: new sap.ui.commons.Label({text: "Queue ",id:"srl14"}),
			template: new sap.m.Text({text:"{Queue}" , wrapping : false}),
			width:"7em",
			sortProperty : "Queue",

		}));
/*End * 27.4.2016 */
		oSRTable.addColumn(new sap.ui.table.Column({
			width:"7em",

			label: new sap.ui.commons.Label({text: "Check Date",id:"srl20"}),
			template: new sap.m.Text({
				editable : false,
				wrapping : false,
				text:{
					path : "Checkfrom" , //"Checkfrom",
	
					type : oType,
					formatter :  
						function(d){ 
						//debugger;
						if (d) {
							return oDateFormat.format(new Date(d));
						}
						else
						{ return d;
						}
					}
				}
			}),
			sortProperty : "Checkfrom",

		}));
		oSRTable.addColumn(new sap.ui.table.Column({
			width:"7em",

			label: new sap.ui.commons.Label({text: "Promo From",id:"srl10"}),
			template: new sap.m.Text({
				editable : false,
				wrapping : false,
				text:{
					path : "Promofrom",
		
					type : oType,
					formatter :  
						function(d){ 
						//debugger;
						if (d) {
							return oDateFormat.format(new Date(d));
						}
						else
						{ return d;
						}
					}
				}
			}),
			sortProperty : "Promofrom",

		}));


		oSRTable.addColumn(new sap.ui.table.Column({
			width:"7em",
			label: new sap.ui.commons.Label({text: "Promo To",id:"srl11"}),
			template: new sap.m.Text({
				editable : false,
				wrapping : false,
				text:{
					path : "Promoto",
			
					type : oType,
					formatter :  
						function(d){ 
						//debugger;
						if (d) {
							return oDateFormat.format(new Date(d));
						}
						else
						{ return d;
						}
					}
				}
			}),
			sortProperty : "Promoto",
		}));
		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Product",id:"srl12"}),
			template: new sap.m.Text({text:"{Product}" , wrapping : false}),
			width:"10em",
			sortProperty : "Product",


		}));
		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer Part ID ",id:"srl13"}),
			template: new sap.m.Text({text:"{Partid}" , wrapping : false}),
			width:"5em",
			sortProperty : "Partid",
		}));
	
		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "MIR",id:"srl15"}),
			template: new sap.m.Text({text:"{Miramount}" , wrapping : false}),
			width:"5em",
			sortProperty : "Miramount",


		}));
		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "IR",id:"srl16"}),
			template: new sap.m.Text({text:"{Iramount}" , wrapping : false}),
			width:"5em",
			sortProperty : "Iramount",

		}));
		
		//*************************vinay 26-05-2016**************************/
		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Last Response",id:"srl21"}),
			template: new sap.m.Text({text:"{Lastresp}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Lastresp",

		}));		
		
		oSRTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Inaccurate Reason",id:"srl22"}),
			template: new sap.m.Text({text:"{Inaccursns}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Inaccursns",

		}));
//********************************************************************/			

		/*oSRTable.addColumn(new sap.ui.table.Column({
						label: new sap.ui.commons.Label({text: "Give Away Item",id:"srl17"}),
						template: new sap.m.Text({text:"{}"}),
					width:"5em",

					}));*/
		var SalesrepLabel = new sap.m.Label("srepLabel",{text: "Search" ,layoutData: new sap.ui.layout.GridData({span:"L1 M1 S6"} )}) ;
		var Salesrepsearch = new sap.m.Select({ id : "Salesrep-Fieldsearch",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),

			items: [

			        new sap.ui.core.Item("srp1", {text: "Customer Name"}),
			        new sap.ui.core.Item("srp2", {text: "Customer ID"}),
			        new sap.ui.core.Item("srp3", {text: "Promo From"}),
			        new sap.ui.core.Item("srp4", {text: "Promo To"}),
			        new sap.ui.core.Item("srp5", {text: "Product"}),
			        new sap.ui.core.Item("srp6", {text: "IR"}),
			        new sap.ui.core.Item("srp7", {text: "MIR"}),
			        new sap.ui.core.Item("srp8", {text: "Promo ID"}),
			        /*CODE COMMENTED 17.06*/
			       /* new sap.ui.core.Item("srp9", {text: "Item ID"}),*/
			        ] ,
			        change : function(e)
			        {
			        	var fieldname = sap.ui.getCore().byId("Salesrep-Fieldsearch").getSelectedItem().getText();
			        	if ( ( fieldname == 'Promo From' ) || ( fieldname == 'Promo To' ) )
			        	{
			        		sap.ui.getCore().byId("SalesrepDP").setVisible(true);
			        		sap.ui.getCore().byId("Salesrepsearchinput").setVisible(false);
			        	}
			        	else
			        	{
			        		sap.ui.getCore().byId("SalesrepDP").setVisible(false);
			        		sap.ui.getCore().byId("Salesrepsearchinput").setVisible(true);
			        	}

			        }


		});
		var Salesrepsearchkey =    

			new sap.m.Select({ id : "Salesrep-Fieldsearchkey",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),

				items: [

				        new sap.ui.core.Item("srkp1", {text: "Contains"}),
				        new sap.ui.core.Item("srkp2", {text: "equals"}),
				        new sap.ui.core.Item("srkp3", {text: "does not equals"}),
				        new sap.ui.core.Item("srkp4", {text: "is less than"}),
				        new sap.ui.core.Item("srkp5", {text: "is less than or equals to"}),
				        new sap.ui.core.Item("srkp6", {text: "is greater than"}),
				        new sap.ui.core.Item("srkp7", {text: "is greater than or equals to"}),
				        new sap.ui.core.Item("srkp8", {text: "like"}),
				        new sap.ui.core.Item("srkp9", {text: "starts with"}),
				        new sap.ui.core.Item("srkp10", {text: "ends with"}),
				        ] ,
			});

		var Salesrepchecksearch =    new sap.m.Select({ id : "SalesrepCheckPromosSearch",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),
			items: [
			        new sap.ui.core.Item("sritem1", {text: " "}),
			        new sap.ui.core.Item("sritem2", {text: "Overdue"}),
			        new sap.ui.core.Item("sritem3", {text: "Due Today"}),  ] ,
			        change : function(){
			        	oController.CheckPromosSearch();

			        }
		});

		var Salesrepsearchinp =	new sap.m.Input({ id : "Salesrepsearchinput"  , layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"} )});

		var Salesrepdp = new sap.m.DatePicker({ id : "SalesrepDP" , layoutData: new sap.ui.layout.GridData({span:"L1 M3 S3"} ),
			displayFormat : "MM/dd/yyyy",
			valueFormat: "yyyy-MM-dd" });
		var Salesrepapply =  new sap.m.Button({ id : "SalesrepApply" , text: "Apply", 
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" ,press: function() {
				oController.onInternApplyPress(); 
			}});
		var Salesrepreset =  		 new sap.m.Button({id : "SalesrepReset" , text: "Reset",
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" , press: function() {
				oController.onSalesrepResetPress(); 
			}});
		var Salesrepexport = new sap.m.Button({id : "SalesrepExport",text: "Export",
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" ,press: function() {
				oController.onExportSalesrepPress(); 
			}}); 
		var oLayout_salesrep = new sap.ui.layout.form.ResponsiveGridLayout("RGLsalesrep");

		var oFormsalesrep = new sap.ui.layout.form.Form("FSALESREP",{
			editable: true,
			layout: oLayout_salesrep,

			formContainers: [
			                 new sap.ui.layout.form.FormContainer("FSALESREP1",{
			                	 formElements: [
			                	                new sap.ui.layout.form.FormElement({
			                	                	label : SalesrepLabel ,                                             
			                	                	fields: [  Salesrepsearch , Salesrepsearchkey, Salesrepchecksearch ,Salesrepsearchinp ,Salesrepdp, Salesrepapply , Salesrepreset,Salesrepexport

			                	                	           ]
			                	                }),
			                	                new sap.ui.layout.form.FormElement({                                 
			                	                	label: "",                                              
			                	                	fields: [ new sap.m.Label({width: "20%"}) ]                                                              
			                	                }),              

			                	                new sap.ui.layout.form.FormElement("OFSRTAB",{
			                	                	//      label: "",                                                   
			                	                	fields: [  oSRTable ]


			                	                }),


			                	                ]
			                 })
			                 ],

		});			    

//		Search Accounts Screen design
		var acctable =  new sap.ui.table.Table({
			id : "Search_Accounts",
			//title:" ",

			selectionBehavior: "RowOnly",
			editable: false,
			//visibleRowCount:9,
			navigationMode : sap.ui.table.NavigationMode.Paginator,

		});

		//Define the columns and the control templates to be used		

		acctable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer",id:"saccl1"}),
			template: new sap.m.Text({text:"{Customer}" , wrapping : false}),
			//width:"3em",
			sortProperty : "Customer",

		}));
		acctable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer Name",id:"saccl2"}),
			template: new sap.m.Text({text:"{Name}" , wrapping : false}),
			sortProperty : "Name",
			//width:"10em",
		}));	
		/*		acctable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer Website",id:"saccl3"}),
			template: new sap.m.Text({text:"{Website}" , wrapping : false}),
			width:"7em",
		}));*/	
		acctable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer Website",id:"saccl3"}),
			template: new sap.m.Link({ text:"{Website}" , enabled : true, wrapping : false,emphasized : true,subtle : true,
				press: function( e ){
					debugger;
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					window.open("http://"+obj.Website);
				}
			}),
			//width:"7em",
		})); 
		acctable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Comments",id:"saccl4"}),
			template: new sap.m.Text({text:"{Instructns}" , /*wrapping : false */}),
			//width:"10em",
		}));
		
        acctable.addColumn(new sap.ui.table.Column({
              label: new sap.ui.commons.Label({text: "Link",id:"saccl5"}),
              template: new sap.m.Link({text:"PDF" ,
                     press : function(e) {
                           debugger;
                           var model = this.getModel();
                           var path = e.getSource().getBindingContext().getPath();
                           var obj = model.getProperty(path);
                           var json = {};
                           json.Customerno = obj.Customer;
                           if(obj.IsPDF == 'YES'){
                        	   var pdflink = window.location.origin+"/sap/opu/odata/sap/ZPVSYSTEM_SRV/PVSAccountsSet(Customer='"+json.Customerno+"')/$value";
                        	   window.open(pdflink);
                        	   
                           }else{
                   			jQuery.sap.require("sap.m.MessageBox");
                			sap.m.MessageBox.show(
                					"No PDF attached", {
                						icon: sap.m.MessageBox.Icon.error,
                						title: "PDF Availability",
                						actions: [sap.m.MessageBox.Action.OK],
                						onClose: function(oAction){}
                					}); 
                        	   
                           }
                           var sermodel = new sap.ui.model.json.JSONModel();
                           sermodel.setData(json);
                           sap.ui.getCore().setModel(sermodel,"customer");
                           //oController.getPDF(obj.Customer);
                     }
                     }),
            //  width:"15em",
    })); 
		
		/* acctable.addColumn(new sap.ui.table.Column({
		label: new sap.m.Label({text: "Link",id:"saccl5"}),
		template: new sap.m.Text({text:"{Instructns}"}),
		width:"15em",
    }));	
		 */
		var SFLabel = new sap.m.Label({text: "Search" ,layoutData: new sap.ui.layout.GridData({span:"L1 M1 S6"} )}) ;
		var SFAccsearch = new sap.m.Select({ id : "Accounts-Fieldsearch",layoutData: new sap.ui.layout.GridData({span:"L3 M3 S6"}),

			items: [

			        new sap.ui.core.Item("s_acc1", {text: "Customer Name"}),
			        new sap.ui.core.Item("s_acc2", {text: "Customer ID"}),
			        ] ,

		});
		var SFAccsearchkey =    new sap.m.Select({ id : "Accounts-Fieldsearchkey",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),

			items: [

			        new sap.ui.core.Item("acc_kp1", {text: "Contains"}),
			        new sap.ui.core.Item("acc_kp2", {text: "equals"}),
			        new sap.ui.core.Item("acc_kp3", {text: "does not equals"}),
			        new sap.ui.core.Item("acc_kp4", {text: "is less than"}),
			        new sap.ui.core.Item("acc_kp5", {text: "is less than or equals to"}),
			        new sap.ui.core.Item("acc_kp6", {text: "is greater than"}),
			        new sap.ui.core.Item("acc_kp7", {text: "is greater than or equals to"}),
			        new sap.ui.core.Item("acc_kp8", {text: "like"}),
			        new sap.ui.core.Item("acc_kp9", {text: "starts with"}),
			        new sap.ui.core.Item("acc_kp10", {text: "ends with"}),
			        ] ,



		});

		var SFAccsearchinp =	new sap.m.Input({ id : "Accounts-searchinput"  , layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"} )});
		var SFAccapply =  new sap.m.Button({ id : "Accounts-Apply" , text: "Apply", 
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" ,press: function() {
				oController.onAccountsApplyPress(); 
			}});

		var SFAccrest =  		 new sap.m.Button({id : "Accounts-Reset" , text: "Reset",
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" , press: function() {
				oController.onAccountsResetPress(); 
			}});
		var SFAccexport = new sap.m.Button({id : "Accounts-Export",text: "Export",
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" ,press: function() {
				oController.onExportAccountsPress(); 
			}}); 
		var oLayout_acc = new sap.ui.layout.form.ResponsiveGridLayout("ACC");


		var oForm1 = new sap.ui.layout.form.Form("FACC",{
			//       title: new sap.ui.core.Title({text: "Promo Verification System", tooltip: "Title tooltip"}),
			editable: true,
			layout: oLayout_acc,

			formContainers: [
			                 new sap.ui.layout.form.FormContainer("FACCC1",{
			                	 //    title: "Login",
			                	 formElements: [
			                	                new sap.ui.layout.form.FormElement({
			                	                	label : SFLabel ,                                             
			                	                	fields: [  SFAccsearch , SFAccsearchkey, SFAccsearchinp , SFAccapply , SFAccrest, SFAccexport,

			                	                	           ]
			                	                }),

			                	                /* new sap.ui.layout.form.FormElement({

                                                      fields: [ SFAccapply ]                                                                                                                                                                         
                                                              }),  */              

			                	                new sap.ui.layout.form.FormElement({
			                	                	//      label: "",                                                   
			                	                	fields: [  acctable ]


			                	                }),


			                	                ]
			                 })
			                 ],

		});
//		Search acc moify ebnd

		// Change Password Screen design	
		var username = new sap.ui.commons.TextField("username");
		var oCurrentlabel = new sap.m.Label({
			id : "oCurrentlabel",
			//textAlign : "Center",
			//width : "50%",
			text : "Current Password "		    	
		});

		var oNewPasslabel = new sap.m.Label({
			id : "NewPasswordlabel",
			//width : "50%",
			text : " New Password",
			//type : "Password"		    	
		});
		var oVerifypasslabel = new sap.m.Label({
			id : "VerifyPasswordlabel",
			//width : "50%",
			text : " Verify Password",
			//type : "Password"		    	
		});

		/*var CButton = new sap.m.Button({
	    	id : "Cancel",
	    	width : "25%",
	    	text : "Cancel",
	    	//type : "Password"		    	
	    });*/


		var oMDialog = new sap.ui.commons.Dialog("Dialog" ,{showHeader : false} );
		// oMDialog.showHeader(false);
		// oMDialog.setContentWidth("50%");
		var oPasswordLayout = new sap.ui.layout.form.ResponsiveGridLayout("PL");
		var oPasswordForm1 = new sap.ui.layout.form.Form("PF1",{
			//title: new sap.ui.core.Title("cp",{text: "Change Password"}),
			editable: true,
			layout: oPasswordLayout,
			formContainers: [
			                 new sap.ui.layout.form.FormContainer("PF1C1",{
			                	 title: "Change Password",
			                	 formElements: [
			                	                new sap.ui.layout.form.FormElement({
			                	                	label: oCurrentlabel,
			                	                	fields: [new sap.m.Input('oldpass' ,{width: "90%" , type: "Password"})]
			                	                }),
			                	                new sap.ui.layout.form.FormElement({
			                	                	label: oNewPasslabel,
			                	                	fields: [new sap.m.Input('newpass' , { width: "90%",  type: "Password"})]

			                	                }),	

			                	                new sap.ui.layout.form.FormElement({
			                	                	label: oVerifypasslabel,
			                	                	fields: [new sap.m.Input('verifypass' , { width: "90%", type: "Password"})
			                	                	]
			                	                }),	
			                	                /*new sap.ui.layout.form.FormElement({
									label: "",
									fields: [ new sap.m.Label({width: "50%"})
									]
							}),	*/

			                	                new sap.ui.layout.form.FormElement({
			                	                	label: "",

			                	                	fields: [ new sap.m.Button({
			                	                		id : "Cancel",
			                	                		type : "Emphasized",
			                	                		//width : "30%",
			                	                		text : "Cancel",
			                	                		layoutData: new sap.ui.layout.GridData({span:"L1 M1 S4"}),
			                	                		press : function(e)
			                	                		{
			                	                			var clear = sap.ui.getCore().byId("newpass") ;
			                	                			clear.setValue("");
			                	                			var clear1 = sap.ui.getCore().byId("verifypass") ;
			                	                			clear1.setValue("");
			                	                			var clear2 = sap.ui.getCore().byId("oldpass") ;
			                	                			clear2.setValue("");
			                	                			var oMDialog =  sap.ui.getCore().byId("Dialog");
			                	                			oMDialog.close();    	

			                	                		}
			                	                	}),
			                	                	new sap.m.Button({
			                	                		id : "Update",
			                	                		type : "Emphasized",
			                	                		//width : "50%",
			                	                		text : "Update Password",
			                	                		layoutData: new sap.ui.layout.GridData({span:"L1 M1 S6"}),
			                	                		press : function(e)
			                	                		{

			                	                			var oldpwd = sap.ui.getCore().byId("oldpass").getValue();
			                	                			var npwd = sap.ui.getCore().byId("newpass").getValue();
			                	                			var cpwd = sap.ui.getCore().byId("verifypass").getValue();
			                	                			var pswd = sap.ui.getCore().byId("password1").getValue();
			                	                			if(npwd == "") 
			                	                			{
			                	                				jQuery.sap.require("sap.m.MessageBox");
			                	                				sap.m.MessageBox.show(
			                	                						"Please enter new password", {
			                	                							icon: sap.m.MessageBox.Icon.WARNING,
			                	                							title: "Password:",
			                	                							actions: [sap.m.MessageBox.Action.OK],
			                	                							onClose: function(oAction) { / * do something * / }
			                	                						}
			                	                				);
			                	                			}
			                	                			else if(cpwd == "") {
			                	                				jQuery.sap.require("sap.m.MessageBox");
			                	                				sap.m.MessageBox.show(
			                	                						"Please enter confirm password", {
			                	                							icon: sap.m.MessageBox.Icon.WARNING,
			                	                							title: "Password:",
			                	                							actions: [sap.m.MessageBox.Action.OK],
			                	                							onClose: function(oAction) { / * do something * / }
			                	                						}
			                	                				);
			                	                			} 
			                	                			else if( cpwd != npwd)
			                	                			{
			                	                				jQuery.sap.require("sap.m.MessageBox");
			                	                				sap.m.MessageBox.show(
			                	                						"Password and confirm password doesn't match", {
			                	                							icon: sap.m.MessageBox.Icon.WARNING,
			                	                							title: "Password:",
			                	                							actions: [sap.m.MessageBox.Action.OK],
			                	                							onClose: function(oAction) { / * do something * / }
			                	                						}
			                	                				);

			                	                			}
			                	                			else
			                	                			{

			                	                				// 	alert(cpwd);
			                	                				var headers = {
			                	                						"X-Requested-With": "XMLHttpRequest",
			                	                						"Content-Type": "application/json;odata=minimalmetadata",
			                	                						"DataServiceVersion": "2.0",
			                	                						"MaxDataServiceVersion": "2.0",
			                	                						"Accept": "application/json;odata=minimalmetadata"
			                	                				};	
			                	                				var uintern = sap.ui.getCore().byId("uintern").getValue();

			                	                				var changepwd = {
			                	                						"odata.type": "CHANGE_PASSWORD.promo_verification_system.PVSLogin",
			                	                						"INTERNID" : uintern,
			                	                						"PASSWORD" : pswd,
			                	                						"NEWPASSWORD" : npwd,

			                	                				};
			                	                				var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
			                	                				var oModel3 = new sap.ui.model.odata.ODataModel(sServiceUrl,
			                	                						false);	


			                	                				oModel3.callFunction("CHANGE_PASSWORD",
			                	                						"GET",   
			                	                						{
			                	                					"INTERNID" :  uintern,
			                	                					"PASSWORD" :   pswd,
			                	                					"NEWPASSWORD" : npwd,
			                	                						},
			                	                						null,

			                	                						function(oData, response){
			                	                							alert(oData.Message);
			                	                							//var usrid = new sap.ui.commons.TextField("uid");
			                	                							var clear = sap.ui.getCore().byId("newpass") ;
			                	                							clear.setValue("");
			                	                							var clear1 = sap.ui.getCore().byId("verifypass") ;
			                	                							clear1.setValue("");
			                	                							var clear2 = sap.ui.getCore().byId("oldpass") ;
			                	                							clear2.setValue("");

			                	                						},
			                	                						function(oError){
			                	                							var message = $(oError.response.body).find('message').first().text(); 
			                	                							alert(message);
			                	                						}
			                	                				);
			                	                			}

			                	                		}
			                	                	}),
			                	                	]


			                	                }),


			                	                ]
			                 })]
		});



		//oMat.createRow(ot5,obt,obt2);	
		//    oTable.addStyleClass("tableClass");




		var oShell = new sap.ui.ux3.Shell("myShell", {
			appIcon: "Images/brother.jpg",
			appTitle:"Promo Verification System",
			showLogoutButton: false,
			showSearchTool: false,
			designType : "Crystal",
			showInspectorTool: false,
			fullHeightContent : true,
			showFeederTool: false,
			AppWidthLimited : true,
			showPane : false,
			//headerType    : "BrandOnly",
			worksetItems: [new sap.ui.ux3.NavigationItem("home",{key:"sh_1",text:"Home"}),
			               new sap.ui.ux3.NavigationItem("checkpromo",{key:"sh_5",text:"Check Promos"}),
			               new sap.ui.ux3.NavigationItem("searchpromo",{key:"sh_2",text:"Search Promos" }),
			               new sap.ui.ux3.NavigationItem("searchacc",{key:"sh_3",text:"Search Accounts"}),
			               //**************Updated Code Ajay*************************************************//								               
			               new sap.ui.ux3.NavigationItem("dummyItem",{key:"sh_3",text:"Not to be Seen", visible: false }),
			               //**************Updated Code Ajay Ends*************************************************//					

			               //         new sap.ui.ux3.NavigationItem("password",{key:"sh_4",text:"Change Password"}),

			               ],

			               content: internHome,

			               headerItems: 
			            	   [//new sap.m.Label("apptitle",{text:"Promo Verification System"}),
			            	    new sap.ui.commons.TextView("fname", {text:"", tooltip:"U.Name" }),
			            	    new sap.ui.commons.Link("chng_pass" ,{text:"Change Password",
			            	    	press:function(oEvent)
			            	    	{

			            	    		oMDialog.addContent(oPasswordForm1);
			            	    		oMDialog.open();

			            	    	}}),
			            	    	new sap.ui.commons.Button("logout" ,{text:"Logout",
			            	    		press:function(oEvent)
			            	    		{
			            	    			debugger;

			            	    			window.localStorage.clear();
			            	    			sap.ui.getCore().byId("email").setValue("");
			            	    			sap.ui.getCore().byId("password1").setValue("");  
			            	    			location.reload();
			            	    		}
			            	    	}),




			            	    	], 

			            	    	worksetItemSelected: function(oEvent)
			            	    	{

			            	    		var sId = oEvent.getParameter("id");
			            	    		var oShell = oEvent.oSource;
			            	    		oController.FillInternShellContent(sId, oShell);
			            	    		/*			            	    		switch (sId) {
			            	    		case "home":
			            	    			var userid = sap.ui.getCore().byId("uid").getValue();
			            	    			var urole = sap.ui.getCore().byId("urole").getValue();
			            	    			if( ( userid == "" && urole == "" ))
			            	    			{

			            	    				oShell.setContent(internHome);
			            	    				break;
			            	    			}
			            	    			else if ( urole == "SALESREP")
			            	    			{
			            	    				oShell.setContent(salesRepHome);
			            	    				break;
			            	    			}

			            	    		case "checkpromo" :
			            	    			//debugger;
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

			            	    			oTab.setModel(oModel);
			            	    			// oTab.setTitle("");
			            	    			if( ( userid == "" && urole == "" ))
			            	    			{  

			            	    				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"INTERN"}]);
			            	    				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
			            	    				var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"INTERN"}]); 
			            	    				var f4 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:uintern}]);
			            	    				oTab.bindRows({path:"/PromoListSet" , parameters: {
						      operationMode: "Client"
						   },
						   filters: [f1, f2 , f3 ,f4] });
			            	    				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ,f4] } );
			            	    				sap.ui.getCore().byId("FINTERN1").setTitle("Intern:Check Promotions");
			            	    				oShell.setContent(oFormintern);
			            	    				break;
			            	    			}
			            	    			else if ( urole == "SALESREP")

			            	    			{

			            	    				var oTab = sap.ui.getCore().byId("SalesRep");
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
			            	    				var oFormsalesrep =   sap.ui.getCore().byId("FSALESREP");
			            	    				sap.ui.getCore().byId("FINTERN1").setTitle("Sales Representative:Check Promotions");
			            	    				//sap.ui.getCore().byId("FSALESREP1").setTitle("Sales Representative:Check Promotions");
			            	    				oTab.setModel(oModel);
			            	    				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
			            	    				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"CHECKINDATA"}]); 
			            	    				var f3 = new  sap.ui.model.odata.Filter('Status', [{operator:"EQ",value1:"SALESREP"}]); 
			            	    				var f4 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
			            	    				oTab.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ,f4] } );
			            	    				oShell.setContent( oFormintern);
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
			            	    				sap.ui.getCore().byId("InternExport").setVisible(true);
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
			            	    				sap.ui.getCore().byId("FINTERN1").setTitle("Intern:Search Promotions");
			            	    				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"INTERN"}]);
			            	    				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSDATA"}]); 
			            	    				var f3 = new  sap.ui.model.odata.Filter('Intern', [{operator:"EQ",value1:uintern}]);
			            	    				oTab1.setModel(oModel);
			            	    				//oTab1.setTitle("");
			            	    				oTab1.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ] } );
			            	    				oShell.setContent(oFormintern);
			            	    				break;
			            	    			}
			            	    			else if ( urole == "SALESREP")

			            	    			{

			            	    				var oTab1 = sap.ui.getCore().byId("SalesRep");
			            	    				sap.ui.getCore().byId("SalesrepApply").setVisible(true);
			            	    				sap.ui.getCore().byId("SalesrepReset").setVisible(true);
			            	    				sap.ui.getCore().byId("SalesrepExport").setVisible(true);
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
			            	    				oTab1.setModel(oModel);
			            	    				var oFormsalesrep =   sap.ui.getCore().byId("FSALESREP");
			            	    				sap.ui.getCore().byId("FSALESREP1").setTitle("Sales Representative:Search Promotions");
			            	    				var f1 = new  sap.ui.model.odata.Filter('Loginuser', [{operator:"EQ",value1:"SALESREP"}]);
			            	    				var f2 = new  sap.ui.model.odata.Filter('Action', [{operator:"EQ",value1:"PROMOSDATA"}]); 
			            	    				var f3 = new  sap.ui.model.odata.Filter('Salesrep', [{operator:"EQ",value1:userid}]);
			            	    				oTab1.bindRows({path:"/PromoListSet" ,  filters: [f1, f2 , f3 ] } );
			            	    				oShell.setContent(oFormsalesrep);
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
			            	    				sap.ui.getCore().byId("FACCC1").setTitle("Sales Representative:Search Accounts");  
			            	    			}
			            	    			else if ( urole == "ADMIN" )
			            	    			{
			            	    				sap.ui.getCore().byId("FACCC1").setTitle("Admin:Search Accounts");  
			            	    			}
			            	    			else if ( urole == "MANAGER" )
			            	    			{
			            	    				sap.ui.getCore().byId("FACCC1").setTitle("Manager:Search Accounts");  
			            	    			}
			            	    			else if ( urole == "" )
			            	    			{
			            	    				sap.ui.getCore().byId("FACCC1").setTitle("Intern:Search Accounts");  
			            	    			}
			            	    			oTab1.setModel(oModel);
			            	    			oTab1.bindRows({path:"/PVSAccountsSet" } );
			            	    			oShell.setContent(oForm1);
			            	    			break;
			            	    		default:
			            	    			break;
			            	    		}*/
			            	    	},



		});
		//debugger;

		oTable.addStyleClass("tableClass");
		oSRTable.addStyleClass("tableClass");
		this.addStyleClass("tableClass");
		this.addStyleClass("sapUiSizeCompact"); 

		this.addContent(oShell);
		/*		return new sap.m.Page("promolist_page",{
			showHeader: false,
			content: [ 
			          oShell
			          ]


		});*/
	}
});