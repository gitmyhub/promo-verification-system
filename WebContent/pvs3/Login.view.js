sap.ui.jsview("pvs3.Login", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf pvs3.Login
	 */ 
	getControllerName : function() {
		return "pvs3.Login";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf pvs3.Login
	 */ 
	createContent : function(oController) {

		var oAppHeader = new sap.ui.commons.ApplicationHeader("appHeader1"); 
		//configure the branding area
		oAppHeader.setLogoSrc("Images/brother.jpg");
		oAppHeader.setLogoText("ver 1.1.3");
		oAppHeader.setDisplayWelcome(false);
		//configure the welcome area

		//configure the log off area
		oAppHeader.setDisplayLogoff(false);
		oAppHeader.addStyleClass("sapUiUx3Shell");
		//oAppHeader.setUserName("ver 1.1.1");
		//oAppHeader.addStyleClass("chead");    
		//oAppHeader.placeAt("header"); 

		var usrid = new sap.m.Input("uid");
		var urole = new sap.m.Input("urole");
		var uintern = new sap.m.Input("uintern");
		var firstname = new sap.m.Input("firstname");
		var oEmaillabel = new sap.m.Label({
			id : "oEmaillabel",
			//textAlign : "Center",
			//width : "80%",
			text : "Email Address:"                                   
		});

		var Password = new sap.m.Label({
			id : "Passwordlabel",
			//width : "80%",
			text : "Password:",
			//type : "Password"                                        
		});
		/* ADDED by CHANDANA */
		//For Comments
		var sHtmlText = '*Interns Please <embed data-index=\"0\"> if you forgot your password.<br>';
		sHtmlText+= '<nbsp><br>';
		sHtmlText+= '*Sales Representatives Please use SAP R3 password.<br>';
		sHtmlText+= '<nbsp><br>';
		var sHtmlText1 = '*Sales Representatives,Managers and Adminstrators Please<br>';
		sHtmlText1+= '<embed data-index=\"0\"> if you forgot your password.<br>';
		var oLink = new sap.ui.commons.Link("l1", {
			text: "click here",
			title: "mail",
			target: "_blank",press:function(e)
			{
				window.open('mailto:marci.elliott@brother.com');
			}
		});
		var oLink1 = new sap.ui.commons.Link("l2", {
			text: "click here",
			title: "mail",
			target: "_blank",press:function(e)
			{
				window.open('http://ambribrd/ApprovaOne/ResetPassword/ResetPassword.aspx');
			}
		});

		var oFTV1 = new sap.ui.commons.FormattedTextView("oftv1");
		//set the text with placeholders inside
		oFTV1.setHtmlText(sHtmlText);

		//add the desired control to the FormattedTextView
		oFTV1.addControl(oLink);

		var oFTV2 = new sap.ui.commons.FormattedTextView("oftv2");
		//set the text with placeholders inside
		oFTV2.setHtmlText(sHtmlText1);

		//add the desired control to the FormattedTextView
		oFTV2.addControl(oLink1);
		/* END OF CODE */        

		var oLayout1 = new sap.ui.layout.form.ResponsiveGridLayout("L1",{
			labelSpanL : 5,
			labelSpanM : 5
		});
		//sap.ui.commons.layout.HAlign.Center;

		var oForm1 = new sap.ui.layout.form.Form("F1",{
			//title: new sap.ui.core.Title("tit",{text: "Promo Verification System", tooltip: "Title tooltip"}),
			//title : "Promo-Login",
			editable: true,
			layout: oLayout1,

			formContainers: [
			                 new sap.ui.layout.form.FormContainer("F1C1",{
			                	 title: "Promo Verification System Login",
			                	 formElements: [
			                	                new sap.ui.layout.form.FormElement({
			                	                	label: oEmaillabel,

			                	                	fields: [new sap.m.Input('email' ,{width: "40%"})]
			                	                }),
			                	                new sap.ui.layout.form.FormElement({
			                	                	label: Password,
			                	                	fields: [new sap.m.Input('password1' , { width: "40%",type: "Password"}) ]                                                                                                                                                                              
			                	                }),           
/*			                	                new sap.ui.layout.form.FormElement({                                 
			                	                	label: "",                                              
			                	                	fields: [ new sap.m.Label({width: "40%"}) ]                                                              
			                	                }), */  
			                	                /*CHANDANA CODE*/                      
			                	                new sap.ui.layout.form.FormElement({                                 
			                	                	label: "",                                              
			                	                	fields: [ new sap.m.Label({width: "40%"}) ]                                                              
			                	                }),  
			                	                new sap.ui.layout.form.FormElement({                                 
			                	                	label: "",                                              
			                	                	fields: [ oFTV1 ]                                                              
			                	                }), 
			                	                new sap.ui.layout.form.FormElement({                                 
			                	                	label: "",                                              
			                	                	fields: [ oFTV2 ]                                                              
			                	                }),  
			                	                /* END OF CODE*/ 

			                	                new sap.ui.layout.form.FormElement({
			                	                	label: "",                                                   
			                	                	fields: [  new sap.m.Button({ id : "Login",text : "Login", type : "Emphasized", 
			                	                		layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"}),
			                	                		press : function(e)              
			                	                		{ 

			                	                			oController.navtoPromolist("Promolist");
			                	                		} 
			                	                	}),
			                	                	new sap.m.Button({ id : "Cancellogin",text : "Cancel", type : "Emphasized", 
			                	                		layoutData: new sap.ui.layout.GridData({span:"L1 M1 S3"}),
			                	                		press : function(e)         	
			                	                		{ 

			                	                			oController.Cancel();
			                	                		} 
			                	                	}),

			                	                	] 
			                	                }),


			                	                ]
			                 })
			                 ],

		});
		/* return new sap.m.Page("login_page",{
    		showHeader: false,
            content: [ 
oForm1
                      ]


    	});*/
		this.addContent(oAppHeader);
		this.addContent(oForm1);                           
		this.addStyleClass("sapUiSizeCompact"); 
	}

});

