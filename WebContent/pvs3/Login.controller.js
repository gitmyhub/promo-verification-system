sap.ui.controller("pvs3.Login", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pvs3.Login
*/

onInit: function() {
	var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
	var oModel = new sap.ui.model.odata.ODataModel( sServiceUrl,
								false);
			
			oModel.oHeaders = {
					"DataServiceVersion": "3.0",
					"MaxDataServiceVersion": "3.0"
			};
			
			},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pvs3.Login
*/
	onBeforeRendering: function() {
		// When user clicks Enter Key		
		/*		sap.ui.getCore().byId("email").attachBrowserEvent('keyup',function(e){
					 if (e.which == 13 || e.keyCode == 13) {
						 var userName = sap.ui.getCore().byId("email").getValue();
				          var password = sap.ui.getCore().byId("password1").getValue();
				          if (userName.length == 0) {
				                sap.ui.getCore().byId('email').setValueState('Error');
				                sap.ui.getCore().byId('email').focus();
				            } else if (password.length == 0) {
				                sap.ui.getCore().byId('password1').setValueState('Error');
				                sap.ui.getCore().byId('password1').focus();
				            }else if (userName.length > 0 && password.length > 0) {
						    	var headers = {
										"X-Requested-With": "XMLHttpRequest",
										"Content-Type": "application/json;odata=minimalmetadata",
										"DataServiceVersion": "2.0",
										"MaxDataServiceVersion": "2.0",
										"Accept": "application/json;odata=minimalmetadata"
									};	
									
							  	var login = {
							    			"odata.type": "LOGIN.promo_verification_system.PVSLogin",
							    		       "EMAIL" : userName,
									            "PASSWORD": password,    

							    	};
							    	var oModel3 = new sap.ui.model.odata.ODataModel("http://ambrifiori.am.brothergroup.net:8081/sap/opu/odata/sap/ZPVSYSTEM_SRV/",
											false, "aanireddy", "brother1");	
						
					    	
							    oModel3.callFunction("LOGIN",
							    			"GET",   
							    	{
							    	        "EMAIL" : mail,
								            "PASSWORD": pswd,			   

							    	},
							    	null,
							    	
							    	function(oData, response){
							    	 
							    		sap.ui.getCore().byId("uid").setValue(oData.Userid);				    	
							    		sap.ui.getCore().byId("urole").setValue(oData.Role);					    
							    		sap.ui.getCore().byId("uintern").setValue(oData.Internid);	   
							       		sap.ui.getCore().byId("firstname").setValue(oData.Name);
								        if ( ( oData.Role == "MANAGER" || oData.Role == "ADMIN") )
								        {
								        	app.to("idPromolist1");
								        }
								        else
								        {
							      	    app.to("idPromolist");
								        }
							    	 
							    	},
							    	function(oError){
							    		  var message = $(oError.response.body).find('message').first().text(); 
							    		   alert(message);
							    	}
							    	);   
				            }
					 }
					
				});*/
				 sap.ui.getCore().byId("password1").attachBrowserEvent('keyup', function(e) {
				        if (e.which == 13 || e.keyCode == 13) {
				        	
				            var userName = sap.ui.getCore().byId("email").getValue();
				            var password = sap.ui.getCore().byId("password1").getValue();
				            if (userName.length == 0) {
				            	 //sap.ui.getCore().byId('password1').setValueState('Error');
				            	jQuery.sap.require("sap.m.MessageBox");
								  sap.m.MessageBox.show(
								      "Please enter Email ID", {
								          icon: sap.m.MessageBox.Icon.WARNING,
								          title: "Email ID:",
								          actions: [sap.m.MessageBox.Action.OK],
								          onClose: function(oAction) { / * do something * / }
								      }
								    );
				                //sap.ui.getCore().byId('email').setValue("Please enter Email Address");
				                sap.ui.getCore().byId('email').focus();
				            } else if (password.length == 0) {
				            	jQuery.sap.require("sap.m.MessageBox");
						    	  sap.m.MessageBox.show(
						    	      "Please enter Password", {
						    	          icon: sap.m.MessageBox.Icon.WARNING,
						    	          title: "Password:",
						    	          actions: [sap.m.MessageBox.Action.OK],
						    	          onClose: function(oAction) { / * do something * / }
						    	      }
						    	    );
				               // sap.ui.getCore().byId('password1').setValueState('Error');
				                sap.ui.getCore().byId('password1').focus();
				            } else if (userName.length > 0 && password.length > 0) {
						    	var headers = {
										"X-Requested-With": "XMLHttpRequest",
										"Content-Type": "application/json;odata=minimalmetadata",
										"DataServiceVersion": "2.0",
										"MaxDataServiceVersion": "2.0",
										"Accept": "application/json;odata=minimalmetadata"
									};	
									
							  	var login = {
							    			"odata.type": "LOGIN.promo_verification_system.PVSLogin",
							    		       "EMAIL" : userName,
									            "PASSWORD": password,    

							    	};
							  	var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
							    	var oModel3 = new sap.ui.model.odata.ODataModel(sServiceUrl,false);	
						
					    	
							    oModel3.callFunction("LOGIN",
							    			"GET",   
							    	{
							    	        "EMAIL" : userName,
								            "PASSWORD": password,			   

							    	},
							    	null,
							    	
							    	function(oData, response){
							    	 
							    		sap.ui.getCore().byId("uid").setValue(oData.Userid);				    	
							    		sap.ui.getCore().byId("urole").setValue(oData.Role);					    
							    		sap.ui.getCore().byId("uintern").setValue(oData.Internid);	   
							       		sap.ui.getCore().byId("firstname").setValue(oData.Name);
								        if ( ( oData.Role == "MANAGER" || oData.Role == "ADMIN") )
								        {
								        	sap.ui.getCore().byId("idPromolist1").invalidate();
								        	app.to("idPromolist1");
								        }
								        else
								        {
								        	sap.ui.getCore().byId("idPromolist").invalidate();	
								        	app.to("idPromolist");
								        }
							    	 
							    	},
							    	function(oError){
							    		  var message = $(oError.response.body).find('message').first().text(); 
							    		  jQuery.sap.require("sap.m.MessageBox");
										  sap.m.MessageBox.show(
										      message, {
										          icon: sap.m.MessageBox.Icon.WARNING,
										          title: "Login",
										          actions: [sap.m.MessageBox.Action.OK],
										          onClose: function(oAction) { / * do something * / }
										      }
										    );
							    		  
							    		  // alert(message);
							    	}
							    	);   
				            }
				        }
				    })
				    

			},


/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pvs3.Login
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pvs3.Login
*/
//	onExit: function() {
//
//	}
			
			// When user clicks on cancel
			Cancel : function() {
				
				sap.ui.getCore().byId("email").setValue("");
				sap.ui.getCore().byId("password1").setValue("");
			},
// When user clicks on login
   	navtoPromolist : function(view2) {
					var mail = sap.ui.getCore().byId("email").getValue();
					var pswd = sap.ui.getCore().byId("password1").getValue();
					var json = {};
					
				     if(mail == "") 
				    {
				jQuery.sap.require("sap.m.MessageBox");
				  sap.m.MessageBox.show(
				      "Please enter Email ID", {
				          icon: sap.m.MessageBox.Icon.WARNING,
				          title: "Email ID:",
				          actions: [sap.m.MessageBox.Action.OK],
				          onClose: function(oAction) { / * do something * / }
				      }
				    );
			   }
				 
				    else if(pswd == "") {
			      jQuery.sap.require("sap.m.MessageBox");
				    	  sap.m.MessageBox.show(
				    	      "Please enter Password", {
				    	          icon: sap.m.MessageBox.Icon.WARNING,
				    	          title: "Password:",
				    	          actions: [sap.m.MessageBox.Action.OK],
				    	          onClose: function(oAction) { / * do something * / }
				    	      }
				    	    );
					    } 
				    else {
				    	
				    	
				    	var headers = {
								"X-Requested-With": "XMLHttpRequest",
								"Content-Type": "application/json;odata=minimalmetadata",
								"DataServiceVersion": "2.0",
								"MaxDataServiceVersion": "2.0",
								"Accept": "application/json;odata=minimalmetadata"
							};	
							
					  	var login = {
					    			"odata.type": "LOGIN.promo_verification_system.PVSLogin",
					    		       "EMAIL" : mail,
							            "PASSWORD": pswd,    

					    	};
					  	var sServiceUrl = getURL("/sap/opu/odata/sap/ZPVSYSTEM_SRV/");
					    	var oModel3 = new sap.ui.model.odata.ODataModel(sServiceUrl,
									false);	
				
			    	
					    oModel3.callFunction("LOGIN",
					    			"GET",   
					    	{
					    	        "EMAIL" : mail,
						            "PASSWORD": pswd,			   

					    	},
					    	null,
					    	
					    	function(oData, response){
					    	 
					    		sap.ui.getCore().byId("uid").setValue(oData.Userid);				    	
					    		sap.ui.getCore().byId("urole").setValue(oData.Role);					    
					    		sap.ui.getCore().byId("uintern").setValue(oData.Internid);	   
					       		sap.ui.getCore().byId("firstname").setValue(oData.Name);
						        if ( ( oData.Role == "MANAGER" || oData.Role == "ADMIN") )
						        {
						        	sap.ui.getCore().byId("idPromolist1").invalidate();
						        	app.to("idPromolist1");
						        }
						        else
						        {
						        	sap.ui.getCore().byId("idPromolist").invalidate();
						        	app.to("idPromolist");
						        }
					    	 
					    	},
					    	function(oError){
					    		
					    		  var message = $(oError.response.body).find('message').first().text(); 
					    		  var message = $(oError.response.body).find('message').first().text(); 
					    		  jQuery.sap.require("sap.m.MessageBox");
								  sap.m.MessageBox.show(
								      message, {
								          icon: sap.m.MessageBox.Icon.WARNING,
								          title: "Login",
								          actions: [sap.m.MessageBox.Action.OK],
								          onClose: function(oAction) { / * do something * / }
								      }
								    );
					    	});
				    	
				    	
				    }
				     
					
				}
				});


