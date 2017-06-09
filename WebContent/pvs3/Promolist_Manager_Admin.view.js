sap.ui.jsview("pvs3.Promolist_Manager_Admin", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf pvs3.Promolist_Manager_Admin
	 */ 
	getControllerName : function() {
		return "pvs3.Promolist_Manager_Admin";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf pvs3.Promolist_Manager_Admin
	 */ 
	createContent : function(oController) {
		// Admin/Manager Home Pages
		var oHtable2 = new sap.ui.table.Table({
			id : "iHome2",
			title : " Intern Summary",
			selectionBehavior : "RowOnly",
			editable : false,
			//visibleRowCount : 2,
		});


		oHtable2.addColumn(new sap.ui.table.Column({ label :
			new sap.ui.commons.Label("Intern_name",{ text : "Intern Id",
				textAlign : sap.ui.core.TextAlign.Center ,

			}), 
			template : new sap.ui.commons.TextView("Internname",{
				text : "{Internid}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
			

			}),
			sortProperty : "Internid",
		}));

		oHtable2.addColumn(new sap.ui.table.Column({

			label : new sap.ui.commons.Label("Intern_od",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Overdue",

			}),
			template : new sap.ui.commons.Link("InternOverdue",{
				text : "{InternOverdue}" ,
				resizable : false,
				hAlign : sap.ui.core.HorizontalAlign.Center,
				press:function(e)
				{

					//modified code	

					var oShell = sap.ui.getCore().byId("AdminShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);

					debugger;
					var sId = "";
					var json = {};
					json.HomeFilter = "INTERNOVER";
					json.Internid = obj.Internid;
					//added
					json.Salesrep = "";
					json.customer = "";
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Intern Overdue Summary for" + " " + obj.Internid);
					oController.FillInternShellContent("mdummyItem", oShell, obj );

				}
			}),
			hAlign: "Center",

		}));

		oHtable2.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("Intern_dt",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Due Today",
			}),

			template : new sap.ui.commons.Link("InternDueToday",{
				text : "{InternDueToday}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
				press:function(e)
				{
					//added
					sap.ui.getCore().byId("Home-Fieldsearch").setSelectedItem("mahi4");
					sap.ui.getCore().byId("MHLabel").setVisible(true);
					sap.ui.getCore().byId("Home-Fieldsearch").setVisible(true);
					sap.ui.getCore().byId("Home-Fieldsearchkey").setVisible(true);
					sap.ui.getCore().byId("Managerhomesearchinput").setVisible(true);
					//sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeApply").setVisible(true);
					sap.ui.getCore().byId("ManagerhomeReset").setVisible(true);
					sap.ui.getCore().byId("ManagerhomeExport").setVisible(true);
					//end
					debugger;
					var oShell = sap.ui.getCore().byId("AdminShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.HomeFilter = "INTERNDUE";
					json.Internid = obj.Internid;
					//added
					json.Salesrep = "";
					json.customer = "";
					//end
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Intern DueToday Summary for" + " " + obj.Internid);
					oController.FillInternShellContent("mdummyItem", oShell, obj );
				}

			}),
			hAlign: "Center",
		}));
		oHtable2.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("Intern_up",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Upcoming For Review",

			}),

			template : new sap.ui.commons.Link("InternUpcomingForReview",{
				text : "{InternUpcomingForReview}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
				press:function(e){
					sap.ui.getCore().byId("Home-Fieldsearch").setSelectedItem("mahi4");
					sap.ui.getCore().byId("MHLabel").setVisible(true);
					sap.ui.getCore().byId("Home-Fieldsearch").setVisible(true);
					sap.ui.getCore().byId("Home-Fieldsearchkey").setVisible(true);
					sap.ui.getCore().byId("Managerhomesearchinput").setVisible(true);
					//sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeApply").setVisible(true);
					sap.ui.getCore().byId("ManagerhomeReset").setVisible(true);
					sap.ui.getCore().byId("ManagerhomeExport").setVisible(true);
					debugger;
					var oShell = sap.ui.getCore().byId("AdminShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.Internid = obj.Internid;
					//added
					json.Salesrep = "";
					json.customer = "";
					json.HomeFilter = "INTERNUPRW";
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Intern Upcoming Review Summary for" + " " + obj.Internid);
					oController.FillInternShellContent("mdummyItem", oShell, obj );

				}
			}),
			hAlign: "Center",

		}));

		oHtable2.addStyleClass("tableClass");

		var oHtable3 = new sap.ui.table.Table({
			id : "iHome3",
			title : "Sales Rep Summary",
			selectionBehavior : "RowOnly",
			editable : false,
			//visibleRowCount : 2,

		});

		oHtable3.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("srep_name",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Sales Rep Id"
					
			}),

			template : new sap.ui.commons.TextView("SRep",{
				text : "{SalesRep}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
		
			}),
			sortProperty : "SalesRep",
		}));
		oHtable3.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("srep_od",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Overdue"
			}),

			template : new sap.ui.commons.Link("SalesRepOverdue",{
				text : "{SalesRepOverdue}" ,
				//textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
				press:function(e)
				{
					sap.ui.getCore().byId("Home-Fieldsearch").setSelectedItem("mahi4");
					sap.ui.getCore().byId("MHLabel").setVisible(true);
					sap.ui.getCore().byId("Home-Fieldsearch").setVisible(true);
					sap.ui.getCore().byId("Home-Fieldsearchkey").setVisible(true);
					sap.ui.getCore().byId("Managerhomesearchinput").setVisible(true);
					//sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeApply").setVisible(true);
					sap.ui.getCore().byId("ManagerhomeReset").setVisible(true);
					sap.ui.getCore().byId("ManagerhomeExport").setVisible(true);

					var oShell = sap.ui.getCore().byId("AdminShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.HomeFilter = "SREPODUE";
					//added
					json.Internid = "";
					json.Salesrep = obj.SalesRep;
					json.customer = "";
					//end
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: SalesRep Overdue Summary for" + " " + obj.SalesRep);
					oController.FillInternShellContent("mdummyItem", oShell, obj );
				}
			}),
			hAlign: "Center",

		}));

		oHtable3.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("srep_dt",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Due Today"
			}),

			template : new sap.ui.commons.Link("SalesRepDueToday",{
				text : "{SalesRepDueToday}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
				press:function(e)
				{
					sap.ui.getCore().byId("Home-Fieldsearch").setSelectedItem("mahi4");
					sap.ui.getCore().byId("MHLabel").setVisible(true);
					sap.ui.getCore().byId("Home-Fieldsearch").setVisible(true);
					sap.ui.getCore().byId("Home-Fieldsearchkey").setVisible(true);
					sap.ui.getCore().byId("Managerhomesearchinput").setVisible(true);
					//sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeApply").setVisible(true);
					sap.ui.getCore().byId("ManagerhomeReset").setVisible(true);
					sap.ui.getCore().byId("ManagerhomeExport").setVisible(true);

					var oShell = sap.ui.getCore().byId("AdminShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.HomeFilter = "SREPDUE";
					json.Internid = "";
					json.Salesrep = obj.SalesRep;
					json.customer = "";
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: SalesRep Due Today Summary for" + " " + obj.SalesRep);
					oController.FillInternShellContent("mdummyItem", oShell, obj );
				}
			}),
			hAlign: "Center",

		}));
		oHtable3.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("srep_up",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Upcoming For Review"
			}),

			template : new sap.ui.commons.Link("SalesRepUpcominForReview",{
				text : "{SalesRepUpcominForReview}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
				press:function(e)
				{
					sap.ui.getCore().byId("Home-Fieldsearch").setSelectedItem("mahi4");
					sap.ui.getCore().byId("MHLabel").setVisible(true);
					sap.ui.getCore().byId("Home-Fieldsearch").setVisible(true);
					sap.ui.getCore().byId("Home-Fieldsearchkey").setVisible(true);
					sap.ui.getCore().byId("Managerhomesearchinput").setVisible(true);
					//sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeApply").setVisible(true);
					sap.ui.getCore().byId("ManagerhomeReset").setVisible(true);
					sap.ui.getCore().byId("ManagerhomeExport").setVisible(true);

					var oShell = sap.ui.getCore().byId("AdminShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.HomeFilter = "SREPUPRW";
					json.Internid = "";
					json.Salesrep = obj.SalesRep;
					json.customer = "";
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: SalesRep Upcoming Review Summary for" + " " + obj.SalesRep);
					oController.FillInternShellContent("mdummyItem", oShell, obj );

				}
			}),
			hAlign: "Center",

		}));
		oHtable3.addStyleClass("tableClass");

		var oHtable4 = new sap.ui.table.Table({
			id : "iHome4",
			title : "Summary by Account",
			selectionBehavior : "RowOnly",
			editable : false,
			//visibleRowCount : 2,

		});

		oHtable4.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("customer",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Customer"
			}),

			template : new sap.ui.commons.TextView("Account",{
				text : "{Name}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
			}),
			sortProperty : "Name",

		}));
		oHtable4.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("customer_od",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Overdue"
			}),

			template : new sap.ui.commons.Link("AccountOverdue",{
				text : "{AccountOverdue}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
				press:function(e)
				{
					sap.ui.getCore().byId("Home-Fieldsearch").setSelectedItem("mahi4");
					sap.ui.getCore().byId("MHLabel").setVisible(false);
					sap.ui.getCore().byId("Home-Fieldsearch").setVisible(false);
					sap.ui.getCore().byId("Home-Fieldsearchkey").setVisible(false);
					sap.ui.getCore().byId("Managerhomesearchinput").setVisible(false);
					sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeApply").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeReset").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeExport").setVisible(false);

					var oShell = sap.ui.getCore().byId("AdminShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.HomeFilter = "CUSTODUE";
					json.Internid = "";
					json.Salesrep = "";
					json.customer = obj.Customer;
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Account Overdue Summary for" + " " + obj.Customer);
					oController.FillInternShellContent("mdummyItem", oShell, obj );
				}
			}),
			hAlign: "Center",

		}));

		oHtable4.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("customer_dt",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Due Today"
			}),

			template : new sap.ui.commons.Link("AccountDueToday",{
				text : "{AccountDueToday}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
				press:function(e)
				{
					sap.ui.getCore().byId("Home-Fieldsearch").setSelectedItem("mahi4");
					sap.ui.getCore().byId("MHLabel").setVisible(false);
					sap.ui.getCore().byId("Home-Fieldsearch").setVisible(false);
					sap.ui.getCore().byId("Home-Fieldsearchkey").setVisible(false);
					sap.ui.getCore().byId("Managerhomesearchinput").setVisible(false);
					sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeApply").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeReset").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeExport").setVisible(false);

					var oShell = sap.ui.getCore().byId("AdminShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.HomeFilter = "CUSTDUE";
					json.Internid = "";
					json.Salesrep = "";
					json.customer = obj.Customer;
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Account Due Today Summary for" + " " + obj.Customer);
					oController.FillInternShellContent("mdummyItem", oShell, obj );

				}
			}),
			hAlign: "Center",

		}));
		oHtable4.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label("customer_up",{
				textAlign : sap.ui.core.TextAlign.Center ,
				text : "Upcoming For Review"
			}),

			template : new sap.ui.commons.Link("AccountUpcomingForReview",{
				text : "{AccountUpcomingForReview}" ,
				textAlign : sap.ui.core.TextAlign.Center ,
				resizable : false,
				press:function(e)
				{
					sap.ui.getCore().byId("Home-Fieldsearch").setSelectedItem("mahi4");
					sap.ui.getCore().byId("MHLabel").setVisible(false);
					sap.ui.getCore().byId("Home-Fieldsearch").setVisible(false);
					sap.ui.getCore().byId("Home-Fieldsearchkey").setVisible(false);
					sap.ui.getCore().byId("Managerhomesearchinput").setVisible(false);
					sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeApply").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeReset").setVisible(false);
					sap.ui.getCore().byId("ManagerhomeExport").setVisible(false);

					var oShell = sap.ui.getCore().byId("AdminShell");
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					var sId = "";
					var json = {};
					json.HomeFilter = "CUSTUPRW";
					json.Internid = "";
					json.Salesrep = "";
					json.customer = obj.Customer;
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"homemodel");
					sap.ui.getCore().byId("FMANAGERHome1").setTitle("Admin: Account Upcoming Review Summary for" + " " + obj.Customer);
					oController.FillInternShellContent("mdummyItem", oShell, obj );

				}
			}),
			hAlign: "Center",

		}));
//		end
		oHtable4.addStyleClass("tableClass");

		var oLayout11 = new sap.ui.layout.form.ResponsiveGridLayout(
		"L11");
		var oLayout112 = new sap.ui.layout.form.ResponsiveGridLayout(
		"L112");
		var oLayout113 = new sap.ui.layout.form.ResponsiveGridLayout(
		"L113");

		var adminHome1 = new sap.ui.layout.form.Form(
				"H31",
				{

					editable : true,
					layout : oLayout11,
					formContainers : [ new sap.ui.layout.form.FormContainer(
							"F1H31",
							{

								formElements : [

								                new sap.ui.layout.form.FormElement(
								                		{

								                			fields : [ oHtable2 ]
								                		}),

								                		]
							}) ]
				});
		var adminHome2 = new sap.ui.layout.form.Form(
				"H32",
				{

					editable : true,
					layout : oLayout112,
					formContainers : [ new sap.ui.layout.form.FormContainer(
							"F1H32",
							{
								formElements : [

								                new sap.ui.layout.form.FormElement(
								                		{

								                			fields : [ oHtable3 ]
								                		}),


								                		]
							}) ]
				});
		var adminHome3 = new sap.ui.layout.form.Form(
				"H33",
				{

					editable : true,
					layout : oLayout113,
					formContainers : [ new sap.ui.layout.form.FormContainer(
							"F1H33",
							{

								formElements : [

								                new sap.ui.layout.form.FormElement(
								                		{

								                			fields : [ oHtable4 ]
								                		}),

								                		]
							}) ]
				});



//		Table for both Manager and Admin - Check promos + Search promos
		var oMATable = new sap.ui.table.Table({
			id : "Manager_Admin",
			selectionBehavior: "RowOnly",
			editable:  false,
		//	visibleRowCount:9,
			navigationMode : sap.ui.table.NavigationMode.Paginator,

		});

		oType = new sap.ui.model.type.DateTime({source: {pattern: "yyyy-MM-dd HH:mm:ss Z"}});
		var oDateFormat = sap.ui.core.format.DateFormat.getInstance({pattern: "MM.dd.yyyy"});
		//Define the columns and the control templates to be used		
		oMATable.addColumn(new sap.ui.table.Column({id : "MAEdit" ,
			label: new sap.ui.commons.Label("malink",{text: "Click To"}),
			template: new sap.m.Link({id : "MAlink" ,
				text : "View" ,
				press : function(e) {
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					sap.ui.getCore().byId("pid").setValue(obj.Promoid);	
					sap.ui.getCore().byId("pitemid").setValue(obj.Itemid);	
					sap.ui.getCore().byId("wid").setValue(obj.Weekid);
					var shell = sap.ui.getCore().byId("AdminShell").getSelectedWorksetItem();
					/*KALPANA CODE */
					var json = {};
					json.Serialno = obj.Serialno;
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"serialnomodel");
					var urole = sap.ui.getCore().byId("urole");
/*					if ( shell == "msearchpromo" )
					{
					sap.ui.getCore().byId("idSearchPromoDetails").invalidate();	
					app.to("idSearchPromoDetails");

					}
					else{
					sap.ui.getCore().byId("idCheckPromoDetails").invalidate();
					app.to("idCheckPromoDetails");
					}*/
					if ( urole == "MANAGER" )
					{
						sap.ui.getCore().byId("idSearchPromoDetails").invalidate();	 
						app.to("idSearchPromoDetails");
					}
					//********************************************vinay***********************************//
					else if (shell == "mdummyItem")
					{
					sap.ui.getCore().byId("idSearchPromoDetails").invalidate();	
					app.to("idSearchPromoDetails");
					}
					
					//*******************************************end*************************************//
					else{


						if ( shell == "msearchpromo" )
						{
							sap.ui.getCore().byId("idSearchPromoDetails").invalidate();	 
							app.to("idSearchPromoDetails");

						}
						else{
							sap.ui.getCore().byId("idCheckPromoDetails").invalidate();
							app.to("idCheckPromoDetails");
						}
					}
					/* END */
					/* END */



				}
			}),
			width:"5em",
			resizable:false,
		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Promo Status",id:"mal1"}),
			template: new sap.m.Text({text:"{Status}" , wrapping : false}),
			width:"7em",
			sortProperty : "Status",
			//	sortProperty: "Customer",
			//	filterProperty: "Customer",

		}));

		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({ text: "Promo ID",id:"mal2"}),
			template: new sap.m.Text({text:"{Promoid}" ,  wrapping : false}),
			width:"7em",
			sortProperty : "Promoid",
		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Item ID",id:"mal3"}),
			template: new sap.m.Text({text:"{Itemid}" ,  wrapping : false}),	
			width:"5em",
			sortProperty : "Itemid",

		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer",id:"mal4"}),
			template: new sap.m.Text({text:"{Customer}" ,  wrapping : false}),
			width:"7em",
			sortProperty: "Customer",
			//	filterProperty: "Customer",

		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer Name",id:"mal5"}),
			template: new sap.m.Text({text:"{Customername}" ,  wrapping : false}),
			width:"15em",
				sortProperty: "Customername",
			//		filterProperty: "Customername",

		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Sales Rep",id:"mal6"}),
			template: new sap.m.Text({text:"{Salesrep}" ,  wrapping : false}),	
			width:"7em",
			sortProperty : "Salesrep",

		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Channel",id:"mal7"}),
			template: new sap.m.Text({text:"{Channel}" ,  wrapping : false}),	
			width:"5em",
			sortProperty : "Channel",

		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Plan Type",id:"mal8"}),
			template: new sap.m.Text({text:"{Plantype}" ,  wrapping : false}),	
			width:"5em",
			sortProperty : "Plantype",

		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "How Advertised",id:"mal9"}),
			template: new sap.m.Text({text:"{Advtype}" ,  wrapping : false}),	
			width:"5em",
			sortProperty : "Advtype",
		}));
		oMATable.addColumn(new sap.ui.table.Column({
			//			resizable:false,
			width:"7em",

			label: new sap.ui.commons.Label({text: "Check Date",id:"mal20"}),
			template: new sap.m.Text({
				editable : false,
				wrapping : false,
				text:{
					path : "Checkfrom",
				
					type : oType,
					formatter : function(d){ return oDateFormat.format(new Date(d))}
				}
			}),
			sortProperty : "Checkfrom",

		}));
		oMATable.addColumn(new sap.ui.table.Column({
			//			resizable:false,
			width:"7em",

			label: new sap.ui.commons.Label({text: "Promo From Date",id:"mal10"}),
			template: new sap.m.Text({
				editable : false,
				wrapping : false,
				text:{
					path : "Promofrom",
			
					type : oType,
					formatter : function(d){ return oDateFormat.format(new Date(d))}
				}
			}),
			sortProperty : "Promofrom",

		}));


		oMATable.addColumn(new sap.ui.table.Column({
			//			resizable:false,
			width:"7em",
			label: new sap.ui.commons.Label({text: "Promo To Date",id:"mal11"}),
			template: new sap.m.Text({
				editable : false,
				wrapping : false,
				text:{
					path : "Promoto",
			
					formatter : function(d){ return oDateFormat.format(new Date(d))}
				}
			}),
			sortProperty : "Promoto",

		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Product",id:"mal12"}),
			template: new sap.m.Text({text:"{Product}" ,  wrapping : false}),
			width:"12em",
			sortProperty : "Product",


		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Customer Part ID ",id:"mal13"}),
			template: new sap.m.Text({text:"{Partid}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Partid",

		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Final Response",id:"mal14"}),
			template: new sap.m.Text({text:"{Checkresptext}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Checkresptext",

		}));
//*************************vinay 26-05-2016**************************/
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Last Response",id:"mal21"}),
			template: new sap.m.Text({text:"{Lastresp}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Lastresp",

		}));		
		
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Inaccurate Reason",id:"mal22"}),
			template: new sap.m.Text({text:"{Inaccursns}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Inaccursns",

		}));
//********************************************************************/		

		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Queue ",id:"mal31"}),
			template: new sap.m.Text({text:"{Queue}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Queue",

		}));
		
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "MIR",id:"mal15"}),
			template: new sap.m.Text({text:"{Miramount}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Miramount",

		}));
		oMATable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "IR",id:"mal16"}),
			template: new sap.m.Text({text:"{Iramount}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Iramount",

		}));
		/*    oMATable.addColumn(new sap.ui.table.Column({
					label: new sap.ui.commons.Label({text: "Give Away Item",id:"mal17"}),
					template: new sap.m.Text({text:"{}"}),
				width:"5em",

				}));*/
		var ManagerLabel = new sap.m.Label({ id : "masrf", type : "Emphasized" ,text: "Search" ,layoutData: new sap.ui.layout.GridData({span:"L1 M1 S6"} )}) ;
		var Managersearch = new sap.m.Select({ id : "Manager-Fieldsearch",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),

			items: [

			        new sap.ui.core.Item("map1", {text: "Promo Status"}),
			        new sap.ui.core.Item("map2", {text: "Promo ID"}),
			        /*CODE COMMENTED 17.06*/
			       /* new sap.ui.core.Item("map3", {text: "Item ID"}),*/
			        new sap.ui.core.Item("map4", {text: "Customer"}),
			        new sap.ui.core.Item("map5", {text: "Customer Name"}),
			        new sap.ui.core.Item("map6", {text: "Sales Rep"}),
			        new sap.ui.core.Item("map7", {text: "Channel"}),
			        new sap.ui.core.Item("map8", {text: "Plan Type"}),
			        new sap.ui.core.Item("map9", {text: "How Advertised"}),
			        new sap.ui.core.Item("map10", {text: "Promo From Date"}),
			        new sap.ui.core.Item("map11", {text: "Promo To Date"}),
			        new sap.ui.core.Item("map12", {text: "Product"}),
			        new sap.ui.core.Item("map13", {text: "Customer Part ID"}),
			        new sap.ui.core.Item("map14", {text: "Queue"}),
			        new sap.ui.core.Item("map15", {text: "MIR"}),
			        new sap.ui.core.Item("map16", {text: "IR"}),
			        //     new sap.ui.core.Item("map17", {text: "Give Away Item"}),
			        /*			        new sap.ui.core.Item("map18", {text: "Give Away Value"}),
			        new sap.ui.core.Item("map19", {text: "Load DateTime"}),
			        new sap.ui.core.Item("map20", {text: "Check Date"}),
			        new sap.ui.core.Item("map21", {text: "Price"}),
			        new sap.ui.core.Item("map22", {text: "Intern ID"}),
			        new sap.ui.core.Item("map23", {text: "Intern Review"}),
			        new sap.ui.core.Item("map24", {text: "Inaccurate Reason"}),
			        new sap.ui.core.Item("map25", {text: "Intern Review DateTime"}),
			        new sap.ui.core.Item("map26", {text: "Intern Comments"}),
			        new sap.ui.core.Item("map27", {text: "Sales Rep ID"}),
			        new sap.ui.core.Item("map28", {text: "Sales Rep Review"}),
			        new sap.ui.core.Item("map29", {text: "Sales Rep DateTime"}), */
			        ] ,
			        change : function(e)
			        {
			        	var fieldname = sap.ui.getCore().byId("Manager-Fieldsearch").getSelectedItem().getText();
			        	if ( ( fieldname == 'Promo From Date' ) || ( fieldname == 'Promo To Date' ) )
			        	{
			        		sap.ui.getCore().byId("ManagerDP").setVisible(true);
			        		sap.ui.getCore().byId("Managersearchinput").setVisible(false);
			        	}
			        	else
			        	{
			        		sap.ui.getCore().byId("ManagerDP").setVisible(false);
			        		sap.ui.getCore().byId("Managersearchinput").setVisible(true);
			        	}   

			        }


		});
		var Managersearchkey =    

			new sap.m.Select({ id : "Manager-Fieldsearchkey",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),

				items: [


				        new sap.ui.core.Item("makp1", {text: "Contains"}),
				        new sap.ui.core.Item("makp2", {text: "equals"}),
				        new sap.ui.core.Item("makp3", {text: "does not equals"}),
				        new sap.ui.core.Item("makp4", {text: "is less than"}),
				        new sap.ui.core.Item("makp5", {text: "is less than or equals to"}),
				        new sap.ui.core.Item("makp6", {text: "is greater than"}),
				        new sap.ui.core.Item("makp7", {text: "is greater than or equals to"}),
				        new sap.ui.core.Item("makp8", {text: "like"}),
				        new sap.ui.core.Item("makp9", {text: "starts with"}),
				        new sap.ui.core.Item("makp10", {text: "ends with"}),
				        ] ,
			});

		var Managerchecksearch =    new sap.m.Select({ id : "ManagerCheckPromosSearch",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),
			items: [
			        new sap.ui.core.Item("maitem1", {text: " "}),
			        new sap.ui.core.Item("maitem2", {text: "Overdue"}),
			        new sap.ui.core.Item("maitem3", {text: "Due Today"}),  ] ,
			        change : function(){
			        	oController.CheckPromosSearch();

			        }
		});

		var Managersearchinp =	new sap.m.Input({ id : "Managersearchinput"  , layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"} )});

		var Managerdp = new sap.m.DatePicker({ id : "ManagerDP" , layoutData: new sap.ui.layout.GridData({span:"L1 M3 S3"} ),
			displayFormat : "MM/dd/yyyy",
			valueFormat: "yyyy-MM-dd" });
		var Managerapply =  new sap.m.Button({ id : "ManagerApply" , text: "Apply", 
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" ,press: function() {
				oController.onManagerApplyPress(); 
			}});
		var Managerreset =  		 new sap.m.Button({id : "ManagerReset" , text: "Reset",
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" , press: function() {
				oController.onManagerResetPress(); 
			}});
		var Managerexport = new sap.m.Button({id : "ManagerExport",text: "Export",
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" ,press: function() {
				oController.onExportMACheckPromosPress(); 
			}}); 
		var oLayout_manager = new sap.ui.layout.form.ResponsiveGridLayout("RGLmanager");

		var oFormmanager = new sap.ui.layout.form.Form("FMANAGER",{
			editable: true,
			layout: oLayout_manager ,

			formContainers: [
			                 new sap.ui.layout.form.FormContainer("FMANAGER1",{

			                	 formElements: [

			                	                new sap.ui.layout.form.FormElement({
			                	                	label : ManagerLabel ,                                             
			                	                	fields: [  Managersearch , Managersearchkey, Managerchecksearch ,Managersearchinp ,Managerdp, Managerapply , Managerreset,Managerexport

			                	                	           ]
			                	                }),
			                	                /*        new sap.ui.layout.form.FormElement({                                 
								                                                                 label: "",                                              
								                                                                 fields: [ new sap.m.Label({width: "20%"}) ]                                                              
								                                                                  }),      */        

			                	                new sap.ui.layout.form.FormElement("OFMATAB",{
			                	                	//      label: "",                                                   
			                	                	fields: [  oMATable ]


			                	                }),


			                	                ]
			                 })
			                 ],

		});			    

		//Table for both Manager and Admin - Check promos + Search promos
		var oMAHome = new sap.ui.table.Table({
			id : "Manager_Admin_Home",
			selectionBehavior: "RowOnly",
			editable:  false,
			//visibleRowCount:9,
			navigationMode : sap.ui.table.NavigationMode.Paginator,

		});

		var Manager_home_Label = new sap.m.Label({ id : "MHLabel", type : "Emphasized" ,text: "Search" ,layoutData: new sap.ui.layout.GridData({span:"L1 M1 S6"} )}) ;
		var Manager_home_search = new sap.m.Select({ id : "Home-Fieldsearch",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),

			items: [	                                                
			      //  new sap.ui.core.Item("mahi1", {text: "Promo Status"}),
			        new sap.ui.core.Item("mahi5", {text: "Customer Name"}),
			        new sap.ui.core.Item("mahi4", {text: "Customer"}),
			        new sap.ui.core.Item("mahi10", {text: "Promo From Date"}),
			        new sap.ui.core.Item("mahi11", {text: "Promo To Date"}),
			        new sap.ui.core.Item("mahi12", {text: "Product"}),
			        new sap.ui.core.Item("mahi16", {text: "IR"}),
			        new sap.ui.core.Item("mahi15", {text: "MIR"}),
			        new sap.ui.core.Item("mahi2", {text: "Promo ID"}),
			        /*CODE COMMENTED 17.06*/
			      /*  new sap.ui.core.Item("mahi3", {text: "Item ID"}),*/
			        ] ,
			        change : function(e){
			        	var fieldname = sap.ui.getCore().byId("Home-Fieldsearch").getSelectedItem().getText();
			        	if ( ( fieldname == 'Promo From Date' ) || ( fieldname == 'Promo To Date' ) )
			        	{
			        		sap.ui.getCore().byId("ManagerHomeDP").setVisible(true);
			        		sap.ui.getCore().byId("Managerhomesearchinput").setVisible(false);
			        	}
			        	else
			        	{
			        		sap.ui.getCore().byId("ManagerHomeDP").setVisible(false);
			        		sap.ui.getCore().byId("Managerhomesearchinput").setVisible(true);
			        	}   
			        }


		});
		var Manager_home_searchkey =    

			new sap.m.Select({ id : "Home-Fieldsearchkey",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),

				items: [

				        new sap.ui.core.Item("mahp1", {text: "Contains"}),
				        new sap.ui.core.Item("mahp2", {text: "equals"}),
				        new sap.ui.core.Item("mahp3", {text: "does not equals"}),
				        new sap.ui.core.Item("mahp4", {text: "is less than"}),
				        new sap.ui.core.Item("mahp5", {text: "is less than or equals to"}),
				        new sap.ui.core.Item("mahp6", {text: "is greater than"}),
				        new sap.ui.core.Item("mahp7", {text: "is greater than or equals to"}),
				        new sap.ui.core.Item("mahp8", {text: "like"}),
				        new sap.ui.core.Item("mahp9", {text: "starts with"}),
				        new sap.ui.core.Item("mahp10", {text: "ends with"}),
				        ] ,
			});

		var Manager_home_checksearch =    new sap.m.Select({ id : "HomeCheckPromosSearch",layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"}),

			items: [
			        new sap.ui.core.Item("mhitem1", {text: " "}),
			        new sap.ui.core.Item("mhitem2", {text: "Overdue"}),
			        new sap.ui.core.Item("mhitem3", {text: "Due Today"}),  ] ,
			        change : function(){
			        	//oController.HomeCheckPromosSearch();

			        }
		});

		var Manager_homesearchinp =	new sap.m.Input({ id : "Managerhomesearchinput"  , layoutData: new sap.ui.layout.GridData({span:"L2 M2 S6"} )});

		var Manager_home_dp = new sap.m.DatePicker({ id : "ManagerHomeDP" , layoutData: new sap.ui.layout.GridData({span:"L1 M3 S3"} ),
			displayFormat : "MM/dd/yyyy",
			valueFormat: "yyyy-MM-dd" });
		var Manager_home_apply =  new sap.m.Button({ id : "ManagerhomeApply" , text: "Apply", 
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" ,press: function() {
				oController.onSummaryApplyPress(); 
			}});
		var Manager_home_reset =  		 new sap.m.Button({id : "ManagerhomeReset" , text: "Reset",
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" , press: function() {
				oController.onSummaryResetPress(); 
			}});
		var Manager_home_export = new sap.m.Button({id : "ManagerhomeExport",text: "Export",
			layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"} ),
			type : "Emphasized" ,press: function() {
				oController.onSummaryExportCheckPromosPress(); 
			}}); 

		var oLayout_manager_home = new sap.ui.layout.form.ResponsiveGridLayout("RGLmanager_home");

		var oFormmanager_home = new sap.ui.layout.form.Form("FMANAGERHOME",{
			editable: true,
			layout: oLayout_manager_home ,

			formContainers: [
			                 new sap.ui.layout.form.FormContainer("FMANAGERHome1",{
			                	 formElements: [
			                	                new sap.ui.layout.form.FormElement({
			                	                	label : Manager_home_Label ,                                             
			                	                	fields: [  Manager_home_search , Manager_home_searchkey, Manager_home_checksearch ,Manager_homesearchinp ,Manager_home_dp, Manager_home_apply , Manager_home_reset,Manager_home_export

			                	                	           ]
			                	                }),
			                	                new sap.ui.layout.form.FormElement({                                 
			                	                	label: "",                                              
			                	                	fields: [ new sap.m.Label({width: "20%"}) ]                                                              
			                	                }),              

			                	                new sap.ui.layout.form.FormElement({
			                	                	//      label: "",                                                   
			                	                	fields: [  oMAHome ]


			                	                }),


			                	                ]
			                 })
			                 ],

		});			    






		//Define the columns and the control templates to be used		
		oMAHome.addColumn(new sap.ui.table.Column({id : "MAEdit1" ,
			label: new sap.ui.commons.Label("adminLink",{text: "Click To"}),
			template: new sap.m.Link({id : "MAlink1" ,
				text : "View" ,
				press : function(e) {
					var model = this.getModel();
					var path = e.getSource().getBindingContext().getPath();
					var obj = model.getProperty(path);
					console.log(obj);
					sap.ui.getCore().byId("pid").setValue(obj.Promoid);	
					sap.ui.getCore().byId("pitemid").setValue(obj.Itemid);	
					sap.ui.getCore().byId("wid").setValue(obj.Weekid);
					var shell = sap.ui.getCore().byId("AdminShell").getSelectedWorksetItem();
					var json = {};
					json.Serialno = obj.Serialno;
					var sermodel = new sap.ui.model.json.JSONModel();
					sermodel.setData(json);
					sap.ui.getCore().setModel(sermodel,"serialnomodel");
					if ( shell == "msearchpromo" )
					{
						sap.ui.getCore().byId("idSearchPromoDetails").invalidate();	 
						app.to("idSearchPromoDetails");
					
					}
					//********************************************vinay***********************************//
					/*
					else if (shell == "mdummyItem")
					{
					sap.ui.getCore().byId("idSearchPromoDetails").invalidate();	
					app.to("idSearchPromoDetails");
					}
					*/
					//*******************************************end*************************************//
					else{
						sap.ui.getCore().byId("idCheckPromoDetails").invalidate();
						app.to("idCheckPromoDetails");
					}

				}
			}),
			width:"5em",
			//	resizable:false,
		}));
		oMAHome.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label("mahl1",{text: "Customer Name",id:"mah5"}),
			template: new sap.m.Text({text:"{Customername}" ,  wrapping : false}),
			width:"15em",
				sortProperty: "Customername",
			//		filterProperty: "Customername",

		}));
		oMAHome.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label("mahl2",{text: "Customer",id:"mah4"}),
			template: new sap.m.Text({text:"{Customer}" ,  wrapping : false}),
			width:"7em",
				sortProperty: "Customer",
			//	filterProperty: "Customer",

		}));
		oMAHome.addColumn(new sap.ui.table.Column({
			//			resizable:false,
			width:"7em",

			label: new sap.ui.commons.Label("mahl3",{text: "Check Date",id:"mah20"}),
			template: new sap.m.Text({
				editable : false,
				wrapping : false,
				text:{
					path : "Checkfrom",
//				
					type : oType,
					formatter : function(d){ return oDateFormat.format(new Date(d))}
				}
			}),
			sortProperty : "Checkfrom",

		}));
		oMAHome.addColumn(new sap.ui.table.Column({
			//			resizable:false,
			width:"7em",

			label: new sap.ui.commons.Label("mahl4",{text: "Promo From Date",id:"mah10"}),
			template: new sap.m.Text({
				editable : false,
				wrapping : false,
				text:{
					path : "Promofrom",
			
					type : oType,
					formatter : function(d){ return oDateFormat.format(new Date(d))}
				}
			}),
		sortProperty : "Promofrom",
		}));
		oMAHome.addColumn(new sap.ui.table.Column({
			//			resizable:false,
			width:"7em",
			label: new sap.ui.commons.Label("mahl5",{text: "Promo To Date",id:"mah11"}),
			template: new sap.m.Text({
				editable : false,
				wrapping : false,
				text:{
					path : "Promoto",
				
					type : oType,
					formatter : function(d){ return oDateFormat.format(new Date(d))}
				}
			}),
			sortProperty : "Promoto",

		}));


		oMAHome.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label("mahl6",{text: "Product",id:"mah12"}),
			template: new sap.m.Text({text:"{Product}" ,  wrapping : false}),
			width:"7em",
			sortProperty : "Product",


		}));
		oMAHome.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label("mahl7",{text: "IR",id:"mah16"}),
			template: new sap.m.Text({text:"{Iramount}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Iramount",
		}));
		oMAHome.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label("mahl8",{text: "MIR",id:"mah15"}),
			template: new sap.m.Text({text:"{Miramount}" ,  wrapping : false} ),
			width:"5em",
			sortProperty : "Miramount",


		}));

		oMAHome.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label("mahl9",{ text: "Promo ID",id:"mah2"}),
			template: new sap.m.Text({text:"{Promoid}" ,  wrapping : false}),
			width:"7em",
			sortProperty : "Promoid",
		}));
		oMAHome.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label("mahl10",{text: "Item ID",id:"mah3"}),
			template: new sap.m.Text({text:"{Itemid}" ,  wrapping : false}),	
			width:"5em",
			sortProperty : "Itemid",

		}));
//*************************vinay 26-05-2016**************************		
		oMAHome.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Last Response",id:"mah21"}),
			template: new sap.m.Text({text:"{Lastresp}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Lastresp",
		}));
		
		oMAHome.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Inaccurate Reason",id:"mah22"}),
			template: new sap.m.Text({text:"{Inaccursns}" ,  wrapping : false}),
			width:"5em",
			sortProperty : "Inaccursns",
		}));

//*****************************************************************************


		//Screen for reassign promos
        var oFromInternL = new sap.m.Label({
               id : "idFromIntern",
               text : "From Intern ID",
               layoutData : new sap.ui.layout.GridData({
                      span : "L3"
               })                                
        });

        var oFromInternF =  new sap.m.ComboBox("CBFromIntern",{
               selectionChange : oController.handleSelectionChangeCustomer,
               layoutData : new sap.ui.layout.GridData({
                      span : "L3"
               })
        });
        
        var oToInternL = new sap.m.Label({
               id : "idToIntern",
               text : "To Intern ID",
               layoutData : new sap.ui.layout.GridData({
                      span : "L3"
               })
        });

        var oToInternF = new sap.m.ComboBox({
               id: "CBToIntern",
               layoutData : new sap.ui.layout.GridData({
                      span : "L3"
               })
        });
        
        var oCustomerL = new sap.m.Label({
               id : "idIncluding",
               text : "Including",
               layoutData : new sap.ui.layout.GridData({
                      span : "L3"
               })
        });
        
        var oCustomerF = new sap.m.MultiComboBox('customers',{
               selectionChange : oController.handleSelectionChange,
               layoutData : new sap.ui.layout.GridData({
                      span : "L9"
               })
        });
        
        var oFromDateL = new sap.m.Label({
               id : "idFromDate",
               text : "Check From Date",
               layoutData : new sap.ui.layout.GridData({
                      span : "L3"
               })
        });

        var oFromDateF = new sap.m.DatePicker('fromDate', {
               displayFormat : "MM/dd/yyyy",
               valueFormat: "yyyy-MM-dd",
               layoutData : new sap.ui.layout.GridData({
                             span : "L3"
                      })
        });
        
        var oToDateL = new sap.m.Label({
               id : "idToDate",
               text : "Check To Date",
               layoutData : new sap.ui.layout.GridData({
                      span : "L3"
               })
        });
        
        var oToDateF = new sap.m.DatePicker('toDate', {
               displayFormat : "MM/dd/yyyy",
               valueFormat: "yyyy-MM-dd",
               layoutData : new sap.ui.layout.GridData({
                             span : "L3"
                      })
        });
        
        var oCustomerTemplate = new sap.ui.core.Item("idCustomerTemplate",{
               key : "{Customer}",  
               text : "{Customer}"  
        });
        
        var oFromInternItemTemplate = new sap.ui.core.Item("idFromInternTemplate",{
               key : "{Fromintern}",  
               text : "{Fromintern}"  
        });
        
        var oToInternItemTemplate = new sap.ui.core.Item("idToInternTemplate",{
               key : "{Tointern}",  
               text : "{Tointern}"  
        });
        
        var oRASubmit = new sap.m.Button({
               id : "idReAssignSubmit",
               text : "Submit",
               type : "Emphasized",
               press : oController.reAssignPromo,
               layoutData : new sap.ui.layout.GridData({
                      span : "L3 M3 S5"
               })
        });
        
        var oRAClear = new sap.m.Button({
               id : "idReAssignClear",
               text : "Clear",
               type : "Emphasized",
               press : oController.reSet,
               layoutData : new sap.ui.layout.GridData({
                      span : "L3 M3 S5"
               })
        });
        
        var oReAssignLayout = new sap.ui.layout.form.ResponsiveGridLayout("RAL", {                                          
                             columnsL : 3
                      });
        
        var oEmptyLabel = new sap.m.Label({
            id : "",
            //text : "Check To Date",
     /*       layoutData : new sap.ui.layout.GridData({
                   span : "L3"
            }) */
     });

        var oReAssignForm = new sap.ui.layout.form.Form("RAF", {
               title : new sap.ui.core.Title({
                           text : "Admin: Reassign Promo",
                           tooltip : "Reassign Promotion"
                       }),
               layout : oReAssignLayout,

               formContainers : [ 
                                 
      new sap.ui.layout.form.FormContainer("RAFC1", {
               formElements : [ 
                                       new sap.ui.layout.form.FormElement({
                                            fields : [ oFromInternL,oFromInternF,oToInternL,oToInternF ]
                                                  }),
                                                  
                                                  new sap.ui.layout.form.FormElement({
                                            fields : [ oCustomerL,oCustomerF ]
                                                  }),
                                                  
                                                  new sap.ui.layout.form.FormElement({
                                            fields : [ oFromDateL,oFromDateF,oToDateL,oToDateF ]
                                                  }),
                                                  
                                                  new sap.ui.layout.form.FormElement({
                                                      fields : [ oEmptyLabel, oEmptyLabel ]
                                                            }),
                                                  
                                                  new sap.ui.layout.form.FormElement({
                                            label: "",
                                            fields : [ oRASubmit,oRAClear ]
                                                  }),
                                        ],
                                        layoutData : new sap.ui.layout.GridData({
                                                  span : "L5"
                                           })
                        }),
                        
       new sap.ui.layout.form.FormContainer("RAFC2", {
                      formElements : [ 
                                                   new sap.ui.layout.form.FormElement({
                                            label: "",
                                            fields : [  ]
                                                  }),
                                        ],
                                        layoutData : new sap.ui.layout.GridData({
                                                  span : "L5"
                                           })                                                         
                        }),
           new sap.ui.layout.form.FormContainer("RAFC3", {
                             formElements : [ 
                                                         new sap.ui.layout.form.FormElement({
                                                   label: "",
                                                   fields : [ ]
                                                        }),
                                               ],
                                               layoutData : new sap.ui.layout.GridData({
                                                        span : "L2"
                                                  })                                                               
                               }),
                 ]
        });

        this.addStyleClass("sapUiSizeCompact");
        oFromInternL.addStyleClass("reassign");
        oToInternL.addStyleClass("reassign");
        oCustomerL.addStyleClass("reassign");
        oFromDateL.addStyleClass("reassign");
        oToDateL.addStyleClass("reassign");
        
//		Shell design


		var oShell = new sap.ui.ux3.Shell("AdminShell", {
			appIcon: "Images/brother.jpg",
			appTitle:"Promo Verification System",
			showLogoutButton: false,
			showSearchTool: false,
			designType : "Crystal",
			showInspectorTool: false,
			fullHeightContent : true,
			showPane : false,
			showFeederTool: false,
			AppWidthLimited : true,
			//headerType    : "BrandOnly",
			worksetItems: [new sap.ui.ux3.NavigationItem("mhome",{key:"msh_1",text:"Home"}),
			               new sap.ui.ux3.NavigationItem("mcheckpromo",{key:"msh_2",text:"Check Promos"}),
			               new sap.ui.ux3.NavigationItem("msearchpromo",{key:"msh_3",text:"Search Promos" }),
			               new sap.ui.ux3.NavigationItem("msearchacc",{key:"msh_4",text:"Search Accounts"}),
			               new sap.ui.ux3.NavigationItem("minternres",{key:"msh_5",text:"Intern Response "}),
			               new sap.ui.ux3.NavigationItem("msrres",{key:"msh_6",text:"SR Response "}),
			               new sap.ui.ux3.NavigationItem("mreassign",{key:"msh_7",text:"Reassign Promo"}),
			               new sap.ui.ux3.NavigationItem("mdummyItem",{key:"msh_8",text:"Not to be Seen", visible: false }),
			               ],

			               //	content: Homelayout,

			               headerItems: [new sap.ui.commons.TextView("mfname", {text:"", tooltip:"U.Name"}),
			                             new sap.ui.commons.Button("mlogout" ,{text:"Logout",
			                            	 press:function(oEvent)
			                            	 {
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

			                             },



		});
		var deviceHeight = $(window).height();
		var contentHeight = deviceHeight - 200;
		var mScrollContainer = new sap.m.ScrollContainer("maScroll", {
			height: contentHeight+'px',
			vertical: true,
		});
		//oShell.addStyleClass("bcont");
		this.addStyleClass("tableClass");
		this.addStyleClass("sapUiSizeCompact"); 

		this.addContent(oShell);
		/*		return new sap.m.Page("promolist_page1",{
			showHeader: false,
			content: [ 
			          oShell
			          ]


		});*/
		//	return oShell;
		//return oShell;
	}

});