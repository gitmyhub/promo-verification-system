sap.ui.jsview("pvs3.SearchPromoDetails", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf pvs3.PromoSearch
	 */
	getControllerName : function() {
		return "pvs3.SearchPromoDetails";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf pvs3.PromoSearch
	 */
	createContent : function(oController) {

		var oPromoid = new sap.m.Label({
			id : 'SP-Id',
			text : 'Promo/Item ID',
		});

		var oLItem = new sap.m.Label({
			id : 'SItemid',
			text : 'Item ID',
		});

		var oLCustid = new sap.m.Label({
			id : 'SCust-ID',
			text : 'Customer ID'
		});
		var oLCustn = new sap.m.Label({
			id : 'SCust-Name',
			text : 'Customer Name',
/*			layoutData : new sap.ui.layout.GridData({			//vinay	
				span : "L6"
			}),*/
		});
		var oLSrep = new sap.m.Label({
			id : 'SSales-Rep',
			text : 'Sales Rep'
		});
		var oLChan = new sap.m.Label({
			id : 'SChannel',
			text : 'Channel'
		});
		var oLPtype = new sap.m.Label({
			id : 'SP-Type',
			text : 'Plan Type/Channel',					
			layoutData : new sap.ui.layout.GridData({
				span : "L5"
			}),
		});
		var oLHow = new sap.m.Label({
			id : 'SP-How',
			text : 'How Advertized?',
			layoutData : new sap.ui.layout.GridData({		
				span : "L5"
			}),
		});
		var oLFdate = new sap.m.Label({
			id : 'SP-Fdate',
			text : 'Promo From Date',					
/*			layoutData : new sap.ui.layout.GridData({		//vinay
				span : "L6"							    
			}),*/

		});
		var oLTdate = new sap.m.Label({
			id : 'SP-Tdate',
			text : 'Promo To Date',
/*			layoutData : new sap.ui.layout.GridData({		//vinay
				span : "L6"							    
			}),*/
		});
		var oCFdate = new sap.m.Label({
			id : 'SC-Fdate',
			text : 'Check From Date',	
/*			layoutData : new sap.ui.layout.GridData({		//vinay
				span : "L6"							    
			}),*/
		});
		var oLPro = new sap.m.Label({
			id : 'SP-Pro',
			text : 'Product'
		});
		var oLCustpart = new sap.m.Label({
			id : 'SP-CustPart',
			text : 'Customer Part ID',
			layoutData : new sap.ui.layout.GridData({
				span : "L5"							    
			}),
		});
		var oLItemstat = new sap.m.Label({
			id : 'SP-ItemStat',
			text : 'Item Status',
			layoutData : new sap.ui.layout.GridData({
				span : "L5"							    
			}),
		});
		var oLWeb = new sap.m.Label({
			id : 'SP-Web',
			text : 'Website',
/*			layoutData : new sap.ui.layout.GridData({			//vinay
				span : "L6"							    
			}),*/
		});

		var oLPrice = new sap.m.Label({
			id : 'SP-Pri',
			text : 'Price',
			layoutData : new sap.ui.layout.GridData({
				span : "L5"							    
			}),
		});

		var oLIR = new sap.m.Label({
			id : 'SP-IR',
			text : 'IR/MIR'
		});

		//*************************************vinay start 15-04******************************************//
		var oLII = new sap.m.Label({
			id : 'SP-II',
			text : 'Intern Initials',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			})	
		
		});

		oLII.addStyleClass("custlableft");
		var oLITS = new sap.m.Label({
			id : 'SP-ITS',
			text : 'Time Stamp',
			layoutData : new sap.ui.layout.GridData({		
				span : "L1"
			})					
				
		});
		
		oLITS.addStyleClass("custLabel");					
		
		var oLIrep = new sap.m.Label({
			id : 'SP-Irep',
			text : 'Intern Reports',
			layoutData : new sap.ui.layout.GridData({		
				span : "L1"
			})						
		});
		oLIrep.addStyleClass("custLabel");					
		
		var oLIrea = new sap.m.Label({
			id : 'SP-Irea',
			text : 'Reason',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			}),						
									
		});
		oLIrea.addStyleClass("custlableft");
		
		var oLIcomm = new sap.m.Label({
			id : 'SP-Icomm',
			text : 'Intern Comments',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			}),					
									
		});
		oLIcomm.addStyleClass("custlableft");
		
		var oLIsc1 = new sap.m.Label({
			id : 'SP-Isc1',
			text : 'Intern Screenshots',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			}),							
									
		});
		oLIsc1.addStyleClass("custlableft");
		
		var oLSI = new sap.m.Label({
			id : 'SP-SI',
			text : 'Sales Rep Initials',
			layoutData : new sap.ui.layout.GridData({		
		  	span : "L2"
			})							
		});
		oLSI.addStyleClass("custlableft");
		
		var oLSTS = new sap.m.Label({
			id : 'SP-STS',
			text : 'Time Stamp',
			layoutData : new sap.ui.layout.GridData({		
				span : "L1"
			})						
		});
		oLSTS.addStyleClass("custLabel");

		var oLSrept = new sap.m.Label({
			id : 'SP-Srep',
			text : 'Sales Rep Reports',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			})					
		});
		oLSrept.addStyleClass("custlabsrep");
		
		var oLSrea = new sap.m.Label({
			id : 'SP-Srea',
			text : 'Reason',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			})					
		});
		oLSrea.addStyleClass("custlableft");
		
		var oLScomm = new sap.m.Label({
			id : 'SP-Scomm',
			text : 'Sales Rep  Comments',
			layoutData : new sap.ui.layout.GridData({		
			span : "L2"
			})						
		});
		oLScomm.addStyleClass("custlableft");
		
		var oLSsc1 = new sap.m.Label({
			id : 'SP-Ssc1',
			text : 'Sales Rep Screenshots',
			layoutData : new sap.ui.layout.GridData({		
			span : "L2"
			})					
		});
		oLSsc1.addStyleClass("custlableft");


		var oLAI = new sap.m.Label({
			id : 'SP-AI',
			text : 'Admin Initials',
			layoutData : new sap.ui.layout.GridData({		
			  	span : "L2"
			})						
		});
		oLAI.addStyleClass("custlableft");
		
		var oLATS = new sap.m.Label({
			id : 'SP-ATS',
			text : 'Time Stamp',
	    	layoutData : new sap.ui.layout.GridData({		
			span : "L1"
			})							
		});
		oLATS.addStyleClass("custLabel");
		
		var oLArep = new sap.m.Label({
			id : 'SP-Arep',
			text : 'Admin Reports',
			layoutData : new sap.ui.layout.GridData({		
				span : "L1"
			})					
		});
		oLArep.addStyleClass("custLabel");
		
		var oLArea = new sap.m.Label({
			id : 'SP-Area',
			text : 'Reason',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			})						
		});
		oLArea.addStyleClass("custlableft");
		
		var oLAcomm = new sap.m.Label({
			id : 'SP-Acomm',
			text : 'Admin  Comments',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			})					
		});
		oLAcomm.addStyleClass("custlableft");

		var oLAsc1 = new sap.m.Label({
			id : 'SP-Asc1',
			text : 'Admin Screenshots',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			})						
		});
		oLAsc1.addStyleClass("custlableft");
		

		var oLII2 = new sap.m.Label({
			id : 'SP-II2',
			text : 'Intern Initials',
			layoutData : new sap.ui.layout.GridData({		
			  	span : "L2"
			})					
		});
		oLII2.addStyleClass("custlableft");
		
		var oLITS2 = new sap.m.Label({
			id : 'SP-ITS2',
			text : 'Time Stamp',
	    	layoutData : new sap.ui.layout.GridData({		
			span : "L1"
			})
		});
		oLITS2.addStyleClass("custLabel");
		
		var oLIrep2 = new sap.m.Label({
			id : 'SP-Irep2',
			text : 'Intern Reports',
	    	layoutData : new sap.ui.layout.GridData({		
	    	span : "L1"
			})					
		});
		oLIrep2.addStyleClass("custLabel");

		var oLIrea2 = new sap.m.Label({
			id : 'SP-Irea2',
			text : 'Reason',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			})					
		});
		oLIrea2.addStyleClass("custlableft");
		
		var oLIcomm2 = new sap.m.Label({
			id : 'SP-Icomm2',
			text : 'Intern Comments',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			})					
		});
		oLIcomm2.addStyleClass("custlableft");

		var oLIsc2 = new sap.m.Label({
			id : 'SP-Isc2',
			text : 'Intern Screenshots',
			layoutData : new sap.ui.layout.GridData({		
				span : "L2"
			})					
		});
		oLIsc2.addStyleClass("custlableft");

		var oLSI2 = new sap.m.Label({
			id : 'SP-SI2',
			text : 'Sales Rep Initials',
			layoutData : new sap.ui.layout.GridData({		
			  	span : "L2"
			})					
		});
		oLSI2.addStyleClass("custlableft");
		
		var oLSTS2 = new sap.m.Label({
			id : 'SP-STS2',
			text : 'Time Stamp',
	    	layoutData : new sap.ui.layout.GridData({		
			span : "L1"
			})					
		});
		oLSTS2.addStyleClass("custLabel");
		
		var oLSrept2 = new sap.m.Label({
			id : 'SP-Srep2',
			text : 'Sales Rep Reports',
	    	layoutData : new sap.ui.layout.GridData({		
			span : "L2"
			})					
		});
		oLSrept2.addStyleClass("custlabsrep");
		
		var oLSrea2 = new sap.m.Label({
			id : 'SP-Srea2',
			text : 'Reason',
			layoutData : new sap.ui.layout.GridData({		
			  	span : "L2"
			})					
		});
		oLSrea2.addStyleClass("custlableft");
		
		var oLScomm2 = new sap.m.Label({
			id : 'SP-Scomm2',
			text : 'Sales Rep  Comments',
			layoutData : new sap.ui.layout.GridData({		
			  	span : "L2"
			})					
		});
		oLScomm2.addStyleClass("custlableft");

		var oLSsc2 = new sap.m.Label({
			id : 'SP-Ssc2',
			text : 'Sales Rep Screenshots',
			layoutData : new sap.ui.layout.GridData({		
			  	span : "L2"
			})					
		});
		oLSsc2.addStyleClass("custlableft");

		var oLAI2 = new sap.m.Label({
			id : 'SP-AI2',
			text : 'Admin Initials',
			layoutData : new sap.ui.layout.GridData({		
			  	span : "L2"
			})					
		});
		oLAI2.addStyleClass("custlableft");
		
		var oLATS2 = new sap.m.Label({
			id : 'SP-ATS2',
			text : 'Time Stamp',
	    	layoutData : new sap.ui.layout.GridData({		
			span : "L1"
			})					
		});
		oLATS2.addStyleClass("custLabel");
		
		var oLArep2 = new sap.m.Label({
			id : 'SP-Arep2',
			text : 'Admin Reports',
	    	layoutData : new sap.ui.layout.GridData({		
			span : "L1"
			})					
		});
		oLArep2.addStyleClass("custLabel");
		
		var oLArea2 = new sap.m.Label({
			id : 'SP-Area2',
			text : 'Reason',
			layoutData : new sap.ui.layout.GridData({		
			span : "L2"
			})					
		});
		oLArea2.addStyleClass("custlableft");

		var oLAcomm2 = new sap.m.Label({
			id : 'SP-Acomm2',
			text : 'Admin  Comments',
			layoutData : new sap.ui.layout.GridData({		
			span : "L2"
			})					
		});
		oLAcomm2.addStyleClass("custlableft");
		
		var oLAsc2 = new sap.m.Label({
			id : 'SP-Asc2',
			text : 'Admin Screenshots',
			layoutData : new sap.ui.layout.GridData({		
			span : "L2"
			})					
		});
		oLAsc2.addStyleClass("custlableft");		
		
		

//		***************************** Code for Images *********************************************//
		//**** Image Objects used for toggle*****************//
		//For Intern 1
		var ImgobjSearch1 = { toggle : false };
		var ImgobjSearch2 = { toggle : false };
		var ImgobjSearch3 = { toggle: false };
		var ImgobjSearch4 = { toggle: false };
		var ImgobjSearch5 = { toggle : false };
		var ImgobjSearch6 = { toggle : false };
		var ImgobjSearch7 = { toggle : false };
		var ImgobjSearch8 = { toggle : false };
		var ImgobjSearch9 = { toggle : false };
		var ImgobjSearch10 = { toggle : false };
		// For Sales Rep 1
		var sImgobjSearch1 = { toggle : false };
		var sImgobjSearch2 = { toggle : false };
		var sImgobjSearch3 = { toggle: false };
		var sImgobjSearch4 = { toggle: false };
		var sImgobjSearch5 = { toggle : false };
		var sImgobjSearch6 = { toggle : false };
		var sImgobjSearch7 = { toggle : false };
		var sImgobjSearch8 = { toggle : false };
		var sImgobjSearch9 = { toggle : false };
		var sImgobjSearch10 = { toggle : false };
		// Ends
		// For Admin 1
		var aImgobjSearch1 = { toggle : false };
		var aImgobjSearch2 = { toggle : false };
		var aImgobjSearch3 = { toggle: false };
		var aImgobjSearch4 = { toggle: false };
		var aImgobjSearch5 = { toggle : false };
		var aImgobjSearch6 = { toggle : false };
		var aImgobjSearch7 = { toggle : false };
		var aImgobjSearch8 = { toggle : false };
		var aImgobjSearch9 = { toggle : false };
		var aImgobjSearch10 = { toggle : false };
		// Ends
		//For Intern 2
		var I2mgobjSearch1 = { toggle : false };
		var I2mgobjSearch2 = { toggle : false };
		var I2mgobjSearch3 = { toggle: false };
		var I2mgobjSearch4 = { toggle: false };
		var I2mgobjSearch5 = { toggle : false };
		var I2mgobjSearch6 = { toggle : false };
		var I2mgobjSearch7 = { toggle : false };
		var I2mgobjSearch8 = { toggle : false };
		var I2mgobjSearch9 = { toggle : false };
		var I2mgobjSearch10 = { toggle : false };
		// For Sales Rep 2
		var s2ImgobjSearch1 = { toggle : false };
		var s2ImgobjSearch2 = { toggle : false };
		var s2ImgobjSearch3 = { toggle: false };
		var s2ImgobjSearch4 = { toggle: false };
		var s2ImgobjSearch5 = { toggle : false };
		var s21mgobjSearch6 = { toggle : false };
		var s2ImgobjSearch7 = { toggle : false };
		var s2ImgobjSearch8 = { toggle : false };
		var s2ImgobjSearch9 = { toggle : false };
		var s2ImgobjSearch10 = { toggle : false };
		// Ends
		// For Admin 2
		var a2ImgobjSearch1 = { toggle : false };
		var a2ImgobjSearch2 = { toggle : false };
		var a2ImgobjSearch3 = { toggle: false };
		var a2ImgobjSearch4 = { toggle: false };
		var a2ImgobjSearch5 = { toggle : false };
		var a2ImgobjSearch6 = { toggle : false };
		var a2ImgobjSearch7 = { toggle : false };
		var a2ImgobjSearch8 = { toggle : false };
		var a2ImgobjSearch9 = { toggle : false };
		var a2ImgobjSearch10 = { toggle : false };
		// Ends



		//**** Image Objects used for toggle Ends*****************//		

		//********* Create Images *********************************//
		//For Intern 1
		var oImageSearch1 = new sap.m.Image("display_imageSearch1");												
		var oImageSearch2 = new sap.m.Image("display_imageSearch2");
		var oImageSearch3 = new sap.m.Image("display_imageSearch3");
		var oImageSearch4 = new sap.m.Image("display_imageSearch4");
		var oImageSearch5 = new sap.m.Image("display_imageSearch5");
		var oImageSearch6 = new sap.m.Image("display_imageSearch6");
		var oImageSearch7 = new sap.m.Image("display_imageSearch7");
		var oImageSearch8 = new sap.m.Image("display_imageSearch8");
		var oImageSearch9 = new sap.m.Image("display_imageSearch9");
		var oImageSearch10 = new sap.m.Image("display_imageSearch10");
		// For Sales Rep 1
		var sImageSearch1 = new sap.m.Image("display_simageSearch1");												
		var sImageSearch2 = new sap.m.Image("display_simageSearch2");
		var sImageSearch3 = new sap.m.Image("display_simageSearch3");
		var sImageSearch4 = new sap.m.Image("display_simageSearch4");
		var sImageSearch5 = new sap.m.Image("display_simageSearch5");
		var sImageSearch6 = new sap.m.Image("display_simageSearch6");
		var sImageSearch7 = new sap.m.Image("display_simageSearch7");
		var sImageSearch8 = new sap.m.Image("display_simageSearch8");
		var sImageSearch9 = new sap.m.Image("display_simageSearch9");
		var sImageSearch10 = new sap.m.Image("display_simageSearch10");
		//For Admin 1
		var aImageSearch1 = new sap.m.Image("display_aimageSearch1");												
		var aImageSearch2 = new sap.m.Image("display_aimageSearch2");
		var aImageSearch3 = new sap.m.Image("display_aimageSearch3");
		var aImageSearch4 = new sap.m.Image("display_aimageSearch4");
		var aImageSearch5 = new sap.m.Image("display_aimageSearch5");
		var aImageSearch6 = new sap.m.Image("display_aimageSearch6");
		var aImageSearch7 = new sap.m.Image("display_aimageSearch7");
		var aImageSearch8 = new sap.m.Image("display_aimageSearch8");
		var aImageSearch9 = new sap.m.Image("display_aimageSearch9");
		var aImageSearch10 = new sap.m.Image("display_aimageSearch10");
		//For Intern 2
		var o2ImageSearch1 = new sap.m.Image("display_i2mageSearch1");												
		var o2ImageSearch2 = new sap.m.Image("display_i2mageSearch2");
		var o2ImageSearch3 = new sap.m.Image("display_i2mageSearch3");
		var o2ImageSearch4 = new sap.m.Image("display_i2mageSearch4");
		var o2ImageSearch5 = new sap.m.Image("display_i2mageSearch5");
		var o2ImageSearch6 = new sap.m.Image("display_i2mageSearch6");
		var o2ImageSearch7 = new sap.m.Image("display_i2mageSearch7");
		var o2ImageSearch8 = new sap.m.Image("display_i2mageSearch8");
		var o2ImageSearch9 = new sap.m.Image("display_i2mageSearch9");
		var o2ImageSearch10 = new sap.m.Image("display_i2mageSearch10");
		// For Sales Rep 2
		var s2ImageSearch1 = new sap.m.Image("display_s2imageSearch1");												
		var s2ImageSearch2 = new sap.m.Image("display_s2imageSearch2");
		var s2ImageSearch3 = new sap.m.Image("display_s2imageSearch3");
		var s2ImageSearch4 = new sap.m.Image("display_s2imageSearch4");
		var s2ImageSearch5 = new sap.m.Image("display_s2imageSearch5");
		var s2ImageSearch6 = new sap.m.Image("display_s2imageSearch6");
		var s2ImageSearch7 = new sap.m.Image("display_s2imageSearch7");
		var s2ImageSearch8 = new sap.m.Image("display_s2imageSearch8");
		var s2ImageSearch9 = new sap.m.Image("display_s2imageSearch9");
		var s2ImageSearch10 = new sap.m.Image("display_s2imageSearch10");
		//For Admin 2
		var a2ImageSearch1 = new sap.m.Image("display_a2imageSearch1");												
		var a2ImageSearch2 = new sap.m.Image("display_a2imageSearch2");
		var a2ImageSearch3 = new sap.m.Image("display_a2imageSearch3");
		var a2ImageSearch4 = new sap.m.Image("display_a2imageSearch4");
		var a2ImageSearch5 = new sap.m.Image("display_a2imageSearch5");
		var a2ImageSearch6 = new sap.m.Image("display_a2imageSearch6");
		var a2ImageSearch7 = new sap.m.Image("display_a2imageSearch7");
		var a2ImageSearch8 = new sap.m.Image("display_a2imageSearch8");
		var a2ImageSearch9 = new sap.m.Image("display_a2imageSearch9");
		var a2ImageSearch10 = new sap.m.Image("display_a2imageSearch10");
		//oImage1.setSrc("/sap/opu/odata/sap/ZPVSYSTEM_SRV/PromoImagesSet(Promoid='9000000008',Checkid='10',Imageid='237',Itemid='10',Weekid='10')/$value");
		// For Intern 1
		oImageSearch1.setDecorative(false);
		oImageSearch2.setDecorative(false);
		oImageSearch3.setDecorative(false);
		oImageSearch4.setDecorative(false);
		oImageSearch5.setDecorative(false);
		oImageSearch6.setDecorative(false);
		oImageSearch7.setDecorative(false);
		oImageSearch8.setDecorative(false);
		oImageSearch9.setDecorative(false);
		oImageSearch10.setDecorative(false);
		// For Sales Rep 1
		sImageSearch1.setDecorative(false);
		sImageSearch2.setDecorative(false);
		sImageSearch3.setDecorative(false);
		sImageSearch4.setDecorative(false);
		sImageSearch5.setDecorative(false);
		sImageSearch6.setDecorative(false);
		sImageSearch7.setDecorative(false);
		sImageSearch8.setDecorative(false);
		sImageSearch9.setDecorative(false);
		sImageSearch10.setDecorative(false);
		// For Admin 1
		aImageSearch1.setDecorative(false);
		aImageSearch2.setDecorative(false);
		aImageSearch3.setDecorative(false);
		aImageSearch4.setDecorative(false);
		aImageSearch5.setDecorative(false);
		aImageSearch6.setDecorative(false);
		aImageSearch7.setDecorative(false);
		aImageSearch8.setDecorative(false);
		aImageSearch9.setDecorative(false);
		aImageSearch10.setDecorative(false);

		// For Intern 2
		o2ImageSearch1.setDecorative(false);
		o2ImageSearch2.setDecorative(false);
		o2ImageSearch3.setDecorative(false);
		o2ImageSearch4.setDecorative(false);
		o2ImageSearch5.setDecorative(false);
		o2ImageSearch6.setDecorative(false);
		o2ImageSearch7.setDecorative(false);
		o2ImageSearch8.setDecorative(false);
		o2ImageSearch9.setDecorative(false);
		o2ImageSearch10.setDecorative(false);
		// For Sales Rep 2
		s2ImageSearch1.setDecorative(false);
		s2ImageSearch2.setDecorative(false);
		s2ImageSearch3.setDecorative(false);
		s2ImageSearch4.setDecorative(false);
		s2ImageSearch5.setDecorative(false);
		s2ImageSearch6.setDecorative(false);
		s2ImageSearch7.setDecorative(false);
		s2ImageSearch8.setDecorative(false);
		s2ImageSearch9.setDecorative(false);
		s2ImageSearch10.setDecorative(false);
		// For Admin 2
		a2ImageSearch1.setDecorative(false);
		a2ImageSearch2.setDecorative(false);
		a2ImageSearch3.setDecorative(false);
		a2ImageSearch4.setDecorative(false);
		a2ImageSearch5.setDecorative(false);
		a2ImageSearch6.setDecorative(false);
		a2ImageSearch7.setDecorative(false);
		a2ImageSearch8.setDecorative(false);
		a2ImageSearch9.setDecorative(false);
		a2ImageSearch10.setDecorative(false);
		//*********************Form Element Creation*******************************//
		// For Intern 1
		var feIimg1_Search = new sap.ui.layout.form.FormElement("feIimg1_Search",{
			//label : oLIcomm,
			fields : [ oImageSearch1, oImageSearch2]
		});
		//debugger;

		var feIimg2_Search = new sap.ui.layout.form.FormElement("feIimg2_Search",{
			//label : oLIcomm,
			fields : [ oImageSearch3, oImageSearch4]
		});
		var feIimg3_Search = new sap.ui.layout.form.FormElement("feIimg3_Search",{
			//label : oLIcomm,
			fields : [ oImageSearch5, oImageSearch6]
		});
		var feIimg4_Search = new sap.ui.layout.form.FormElement("feIimg4_Search",{
			//label : oLIcomm,
			fields : [ oImageSearch7, oImageSearch8]
		});
		var feIimg5_Search = new sap.ui.layout.form.FormElement("feIimg5_Search",{
			//label : oLIcomm,
			fields : [ oImageSearch9, oImageSearch10]
		});

		// For Sales Reps 1
		var feSimg1_Search = new sap.ui.layout.form.FormElement("feSimg1_Search",{
			//label : oLIcomm,
			fields : [ sImageSearch1, sImageSearch2]
		});
		//debugger;
		var feSimg2_Search = new sap.ui.layout.form.FormElement("feSimg2_Search",{
			//label : oLIcomm,
			fields : [ sImageSearch3, sImageSearch4]
		});
		var feSimg3_Search = new sap.ui.layout.form.FormElement("feSimg3_Search",{
			//label : oLIcomm,
			fields : [ sImageSearch5, sImageSearch6]
		});
		var feSimg4_Search = new sap.ui.layout.form.FormElement("feSimg4_Search",{
			//label : oLIcomm,
			fields : [ sImageSearch7, sImageSearch8]
		});
		var feSimg5_Search = new sap.ui.layout.form.FormElement("feSimg5_Search",{
			//label : oLIcomm,
			fields : [ sImageSearch9, sImageSearch10]
		});

		// For Admin 1
		var feAimg1_Search = new sap.ui.layout.form.FormElement("feAimg1_Search",{
			//label : oLIcomm,
			fields : [ aImageSearch1, aImageSearch2]
		});
		//debugger;
		var feAimg2_Search = new sap.ui.layout.form.FormElement("feAimg2_Search",{
			//label : oLIcomm,
			fields : [ aImageSearch3, aImageSearch4]
		});
		var feAimg3_Search = new sap.ui.layout.form.FormElement("feAimg3_Search",{
			//label : oLIcomm,
			fields : [ aImageSearch5, aImageSearch6]
		});
		var feAimg4_Search = new sap.ui.layout.form.FormElement("feAimg4_Search",{
			//label : oLIcomm,
			fields : [ aImageSearch7, aImageSearch8]
		});
		var feAimg5_Search = new sap.ui.layout.form.FormElement("feAimg5_Search",{
			//label : oLIcomm,
			fields : [ aImageSearch9, aImageSearch10]
		});

		// For Intern 2
		var feI2img1_Search = new sap.ui.layout.form.FormElement("feI2img1_Search",{
			//label : oLIcomm,
			fields : [ o2ImageSearch1, o2ImageSearch2]
		});
		//debugger;

		var feI2img2_Search = new sap.ui.layout.form.FormElement("feI2img2_Search",{
			//label : oLIcomm,
			fields : [ o2ImageSearch3, o2ImageSearch4]
		});
		var feI2img3_Search = new sap.ui.layout.form.FormElement("feI2img3_Search",{
			//label : oLIcomm,
			fields : [ o2ImageSearch5, o2ImageSearch6]
		});
		var feI2img4_Search = new sap.ui.layout.form.FormElement("feI2img4_Search",{
			//label : oLIcomm,
			fields : [ o2ImageSearch7, o2ImageSearch8]
		});
		var feI2img5_Search = new sap.ui.layout.form.FormElement("feI2img5_Search",{
			//label : oLIcomm,
			fields : [ o2ImageSearch9, o2ImageSearch10]
		});

		// For Sales Reps 2
		var feS2img1_Search = new sap.ui.layout.form.FormElement("feS2img1_Search",{
			//label : oLIcomm,
			fields : [ s2ImageSearch1, s2ImageSearch2]
		});
		//debugger;
		var feS2img2_Search = new sap.ui.layout.form.FormElement("feS2img2_Search",{
			//label : oLIcomm,
			fields : [ s2ImageSearch3, s2ImageSearch4]
		});
		var feS2img3_Search = new sap.ui.layout.form.FormElement("feS2img3_Search",{
			//label : oLIcomm,
			fields : [ s2ImageSearch5, s2ImageSearch6]
		});
		var feS2img4_Search = new sap.ui.layout.form.FormElement("feS2img4_Search",{
			//label : oLIcomm,
			fields : [ s2ImageSearch7, s2ImageSearch8]
		});
		var feS2img5_Search = new sap.ui.layout.form.FormElement("feS2img5_Search",{
			//label : oLIcomm,
			fields : [ s2ImageSearch9, s2ImageSearch10]
		});

		// For Admin 1
		var feA2img1_Search = new sap.ui.layout.form.FormElement("feA2img1_Search",{
			//label : oLIcomm,
			fields : [ a2ImageSearch1, a2ImageSearch2]
		});
		//debugger;
		var feA2img2_Search = new sap.ui.layout.form.FormElement("feA2img2_Search",{
			//label : oLIcomm,
			fields : [ a2ImageSearch3, a2ImageSearch4]
		});
		var feA2img3_Search = new sap.ui.layout.form.FormElement("feA2img3_Search",{
			//label : oLIcomm,
			fields : [ a2ImageSearch5, a2ImageSearch6]
		});
		var feA2img4_Search = new sap.ui.layout.form.FormElement("feA2img4_Search",{
			//label : oLIcomm,
			fields : [ a2ImageSearch7, a2ImageSearch8]
		});
		var feA2img5_Search = new sap.ui.layout.form.FormElement("feA2img5_Search",{
			//label : oLIcomm,
			fields : [ a2ImageSearch9, a2ImageSearch10]
		});

		//***********************Toggle Images*******************************************//
		//For Intern 1
		oImageSearch1.attachPress(function(){
			SearchPromoDetails_toggleImage(oImageSearch1, oImageSearch2, feIimg1_Search, ImgobjSearch1);
		});
		oImageSearch2.attachPress(function(){
			SearchPromoDetails_toggleImage(oImageSearch2, oImageSearch1, feIimg1_Search, ImgobjSearch2)
		});
		oImageSearch3.attachPress(function(){
			SearchPromoDetails_toggleImage(oImageSearch3, oImageSearch4, feIimg2_Search, ImgobjSearch3)
		});
		oImageSearch4.attachPress(function(){
			SearchPromoDetails_toggleImage(oImageSearch4, oImageSearch3, feIimg2_Search, ImgobjSearch4)
		});
		oImageSearch5.attachPress(function(){
			SearchPromoDetails_toggleImage(oImageSearch5, oImageSearch6, feIimg3_Search, ImgobjSearch5)
		});
		oImageSearch6.attachPress(function(){
			SearchPromoDetails_toggleImage(oImageSearch6, oImageSearch5, feIimg3_Search, ImgobjSearch6)
		});
		oImageSearch7.attachPress(function(){
			SearchPromoDetails_toggleImage(oImageSearch7, oImageSearch8, feIimg4_Search, ImgobjSearch7)
		});
		oImageSearch8.attachPress(function(){
			SearchPromoDetails_toggleImage(oImageSearch8, oImageSearch7, feIimg4_Search, ImgobjSearch8)
		});
		oImageSearch9.attachPress(function(){
			SearchPromoDetails_toggleImage(oImageSearch9, oImageSearch10, feIimg5_Search, ImgobjSearch9)
		});
		oImageSearch10.attachPress(function(){
			SearchPromoDetails_toggleImage(oImageSearch10, oImageSearch9, feIimg5_Search, ImgobjSearch10)
		});

		// For Sales Rep 1
		sImageSearch1.attachPress(function(){
			SearchPromoDetails_toggleImage(sImageSearch1, sImageSearch2, feSimg1_Search, sImgobjSearch1);
		});
		sImageSearch2.attachPress(function(){
			SearchPromoDetails_toggleImage(sImageSearch2, sImageSearch1, feSimg1_Search, sImgobjSearch2)
		});
		sImageSearch3.attachPress(function(){
			SearchPromoDetails_toggleImage(sImageSearch3, sImageSearch4, feSimg2_Search, sImgobjSearch3)
		});
		sImageSearch4.attachPress(function(){
			SearchPromoDetails_toggleImage(sImageSearch4, sImageSearch3, feSimg2_Search, sImgobjSearch4)
		});
		sImageSearch5.attachPress(function(){
			SearchPromoDetails_toggleImage(sImageSearch5, sImageSearch6, feSimg3_Search, sImgobjSearch5)
		});
		sImageSearch6.attachPress(function(){
			SearchPromoDetails_toggleImage(sImageSearch6, sImageSearch5, feSimg3_Search, sImgobjSearch6)
		});
		sImageSearch7.attachPress(function(){
			SearchPromoDetails_toggleImage(sImageSearch7, sImageSearch8, feSimg4_Search, sImgobjSearch7)
		});
		sImageSearch8.attachPress(function(){
			SearchPromoDetails_toggleImage(sImageSearch8, sImageSearch7, feSimg4_Search, sImgobjSearch8)
		});
		sImageSearch9.attachPress(function(){
			SearchPromoDetails_toggleImage(sImageSearch9, sImageSearch10, feSimg5_Search, sImgobjSearch9)
		});
		sImageSearch10.attachPress(function(){
			SearchPromoDetails_toggleImage(sImageSearch10, sImageSearch9, feSimg5_Search, sImgobjSearch10)
		});

		// For Admin 1
		aImageSearch1.attachPress(function(){
			SearchPromoDetails_toggleImage(aImageSearch1, aImageSearch2, feAimg1_Search, aImgobjSearch1);
		});
		aImageSearch2.attachPress(function(){
			SearchPromoDetails_toggleImage(aImageSearch2, aImageSearch1, feAimg1_Search, aImgobjSearch2)
		});
		aImageSearch3.attachPress(function(){
			SearchPromoDetails_toggleImage(aImageSearch3, aImageSearch4, feAimg2_Search, aImgobjSearch3)
		});
		aImageSearch4.attachPress(function(){
			SearchPromoDetails_toggleImage(aImageSearch4, aImageSearch3, feAimg2_Search, aImgobjSearch4)
		});
		aImageSearch5.attachPress(function(){
			SearchPromoDetails_toggleImage(aImageSearch5, aImageSearch6, feAimg3_Search, aImgobjSearch5)
		});
		aImageSearch6.attachPress(function(){
			SearchPromoDetails_toggleImage(aImageSearch6, aImageSearch5, feAimg3_Search, aImgobjSearch6)
		});
		aImageSearch7.attachPress(function(){
			SearchPromoDetails_toggleImage(aImageSearch7, aImageSearch8, feAimg4_Search, aImgobjSearch7)
		});
		aImageSearch8.attachPress(function(){
			SearchPromoDetails_toggleImage(aImageSearch8, aImageSearch7, feAimg4_Search, aImgobjSearch8)
		});
		aImageSearch9.attachPress(function(){
			SearchPromoDetails_toggleImage(aImageSearch9, aImageSearch10, feAimg5_Search, aImgobjSearch9)
		});
		aImageSearch10.attachPress(function(){
			SearchPromoDetails_toggleImage(aImageSearch10, aImageSearch9, feAimg5_Search, aImgobjSearch10)
		});

		//For Intern 2
		o2ImageSearch1.attachPress(function(){
			SearchPromoDetails_toggleImage(o2ImageSearch1, o2ImageSearch2, feI2img1_Search, I2mgobjSearch1);
		});
		o2ImageSearch2.attachPress(function(){
			SearchPromoDetails_toggleImage(o2ImageSearch2, o2ImageSearch1, feI2img1_Search, I2mgobjSearch2)
		});
		o2ImageSearch3.attachPress(function(){
			SearchPromoDetails_toggleImage(o2ImageSearch3, o2ImageSearch4, feI2img2_Search, I2mgobjSearch3)
		});
		o2ImageSearch4.attachPress(function(){
			SearchPromoDetails_toggleImage(o2ImageSearch4, o2ImageSearch3, feI2img2_Search, I2mgobjSearch4)
		});
		o2ImageSearch5.attachPress(function(){
			SearchPromoDetails_toggleImage(o2ImageSearch5, o2ImageSearch6, feI2img3_Search, I2mgobjSearch5)
		});
		o2ImageSearch6.attachPress(function(){
			SearchPromoDetails_toggleImage(o2ImageSearch6, o2ImageSearch5, feI2img3_Search, I2mgobjSearch6)
		});
		o2ImageSearch7.attachPress(function(){
			SearchPromoDetails_toggleImage(o2ImageSearch7, o2ImageSearch8, feI2img4_Search, I2mgobjSearch7)
		});
		o2ImageSearch8.attachPress(function(){
			SearchPromoDetails_toggleImage(o2ImageSearch8, o2ImageSearch7, feI2img4_Search, I2mgobjSearch8)
		});
		o2ImageSearch9.attachPress(function(){
			SearchPromoDetails_toggleImage(o2ImageSearch9, o2ImageSearch10, feI2img5_Search, I2mgobjSearch9)
		});
		o2ImageSearch10.attachPress(function(){
			SearchPromoDetails_toggleImage(o2ImageSearch10, o2ImageSearch9, feI2img5_Search, I2mgobjSearch10)
		});

		// For Sales Rep 2
		s2ImageSearch1.attachPress(function(){
			SearchPromoDetails_toggleImage(s2ImageSearch1, s2ImageSearch2, feS2img1_Search, s2ImgobjSearch1);
		});
		s2ImageSearch2.attachPress(function(){
			SearchPromoDetails_toggleImage(s2ImageSearch2, s2ImageSearch1, feS2img1_Search, s2ImgobjSearch2)
		});
		s2ImageSearch3.attachPress(function(){
			SearchPromoDetails_toggleImage(s2ImageSearch3, s2ImageSearch4, feS2img2_Search, s2ImgobjSearch3)
		});
		s2ImageSearch4.attachPress(function(){
			SearchPromoDetails_toggleImage(s2ImageSearch4, s2ImageSearch3, feS2img2_Search, s2ImgobjSearch4)
		});
		s2ImageSearch5.attachPress(function(){
			SearchPromoDetails_toggleImage(s2ImageSearch5, s2ImageSearch6, feS2img3_Search, s2ImgobjSearch5)
		});
		s2ImageSearch6.attachPress(function(){
			SearchPromoDetails_toggleImage(s2ImageSearch6, s2ImageSearch5, feS2img3_Search, s2ImgobjSearch6)
		});
		s2ImageSearch7.attachPress(function(){
			SearchPromoDetails_toggleImage(s2ImageSearch7, s2ImageSearch8, feS2img4_Search, s2ImgobjSearch7)
		});
		s2ImageSearch8.attachPress(function(){
			SearchPromoDetails_toggleImage(s2ImageSearch8, s2ImageSearch7, feS2img4_Search, s2ImgobjSearch8)
		});
		s2ImageSearch9.attachPress(function(){
			SearchPromoDetails_toggleImage(s2ImageSearch9, s2ImageSearch10, feS2img5_Search, s2ImgobjSearch9)
		});
		s2ImageSearch10.attachPress(function(){
			SearchPromoDetails_toggleImage(s2ImageSearch10, s2ImageSearch9, feS2img5_Search, s2ImgobjSearch10)
		});

		// For Admin 2
		a2ImageSearch1.attachPress(function(){
			SearchPromoDetails_toggleImage(a2ImageSearch1, a2ImageSearch2, feA2img1_Search, a2ImgobjSearch1);
		});
		a2ImageSearch2.attachPress(function(){
			SearchPromoDetails_toggleImage(a2ImageSearch2, a2ImageSearch1, feA2img1_Search, a2ImgobjSearch2)
		});
		a2ImageSearch3.attachPress(function(){
			SearchPromoDetails_toggleImage(a2ImageSearch3, a2ImageSearch4, feA2img2_Search, a2ImgobjSearch3)
		});
		a2ImageSearch4.attachPress(function(){
			SearchPromoDetails_toggleImage(a2ImageSearch4, a2ImageSearch3, feA2img2_Search, a2ImgobjSearch4)
		});
		a2ImageSearch5.attachPress(function(){
			SearchPromoDetails_toggleImage(a2ImageSearch5, a2ImageSearch6, feA2img3_Search, a2ImgobjSearch5)
		});
		a2ImageSearch6.attachPress(function(){
			SearchPromoDetails_toggleImage(a2ImageSearch6, a2ImageSearch5, feA2img3_Search, a2ImgobjSearch6)
		});
		a2ImageSearch7.attachPress(function(){
			SearchPromoDetails_toggleImage(a2ImageSearch7, a2ImageSearch8, feA2img4_Search, a2ImgobjSearch7)
		});
		a2ImageSearch8.attachPress(function(){
			SearchPromoDetails_toggleImage(a2ImageSearch8, a2ImageSearch7, feA2img4_Search, a2ImgobjSearch8)
		});
		a2ImageSearch9.attachPress(function(){
			SearchPromoDetails_toggleImage(a2ImageSearch9, a2ImageSearch10, feA2img5_Search, a2ImgobjSearch9)
		});
		a2ImageSearch10.attachPress(function(){
			SearchPromoDetails_toggleImage(a2ImageSearch10, a2ImageSearch9, feA2img5_Search, a2ImgobjSearch10)
		});




		//*************************************vinay start*****************************//

/*		var oLAI = new sap.m.Label({
			id : 'SP-AI',
			text : 'Admin Initials'
		});

		var oLATS = new sap.m.Label({
			id : 'SP-ATS',
			text : 'Time Stamp'
		});

		var oLArep = new sap.m.Label({
			id : 'SP-Arep',
			text : 'Admin Reports'
		});

		var oLArea = new sap.m.Label({
			id : 'SP-Area',
			text : 'Reason'
		});

		var oLAcomm = new sap.m.Label({
			id : 'SP-Acomm',
			text : 'Admin  Comments'
		});

		var oLAsc1 = new sap.m.Label({
			id : 'SP-Asc1',
			text : 'Admin Screenshots'
		});

		var oLII2 = new sap.m.Label({
			id : 'SP-II2',
			text : 'Intern Initials'
		});

		var oLITS2 = new sap.m.Label({
			id : 'SP-ITS2',
			text : 'Time Stamp'
		});

		var oLIrep2 = new sap.m.Label({
			id : 'SP-Irep2',
			text : 'Intern Reports'
		});

		var oLIrea2 = new sap.m.Label({
			id : 'SP-Irea2',
			text : 'Reason'
		});

		var oLIcomm2 = new sap.m.Label({
			id : 'SP-Icomm2',
			text : 'Intern Comments'
		});

		var oLIsc2 = new sap.m.Label({
			id : 'SP-Isc2',
			text : 'Intern Screenshots'
		});

		var oLSI2 = new sap.m.Label({
			id : 'SP-SI2',
			text : 'Sales Rep Initials'
		});

		var oLSTS2 = new sap.m.Label({
			id : 'SP-STS2',
			text : 'Time Stamp'
		});


		var oLSrept2 = new sap.m.Label({
			id : 'SP-Srep2',
			text : 'Sales Rep Reports'
		});

		var oLSrea2 = new sap.m.Label({
			id : 'SP-Srea2',
			text : 'Reason'
		});

		var oLScomm2 = new sap.m.Label({
			id : 'SP-Scomm2',
			text : 'Sales Rep  Comments'
		});

		var oLSsc2 = new sap.m.Label({
			id : 'SP-Ssc2',
			text : 'Sales Rep Screenshots'
		});


		var oLAI2 = new sap.m.Label({
			id : 'SP-AI2',
			text : 'Admin Initials'
		});

		var oLATS2 = new sap.m.Label({
			id : 'SP-ATS2',
			text : 'Time Stamp'
		});

		var oLArep2 = new sap.m.Label({
			id : 'SP-Arep2',
			text : 'Admin Reports'
		});

		var oLArea2 = new sap.m.Label({
			id : 'SP-Area2',
			text : 'Reason'
		});

		var oLAcomm2 = new sap.m.Label({
			id : 'SP-Acomm2',
			text : 'Admin  Comments'
		});

		var oLAsc2 = new sap.m.Label({
			id : 'SP-Asc2',
			text : 'Admin Screenshots'
		});





		var feIsc1 = new sap.ui.layout.form.FormElement({
			label : oLIsc1,
		});

		var feSsc1 = new sap.ui.layout.form.FormElement({
			label : oLSsc1,
		});
*/
		// Previous Butoon

		var Back = new sap.m.Button({
			id : 'sback',
			text : 'Back',
			type : "Emphasized",
			press : function() {	
				SearchPromoDetails_ClearAllData();
				oController.navtoback();
			},
			layoutData : new sap.ui.layout.GridData({
				span : "L1 M1 S8"
			})

		});

		var Prev = new sap.m.Button({
			id : 'sprevious',
			text : 'Previous',
			type : "Emphasized",
			layoutData : new sap.ui.layout.GridData({
				span : "L1 M1 S8"
			}),
			press : function() {
				//debugger;	
				sap.ui.getCore().byId("sback").setEnabled(true);
				sap.ui.getCore().byId("sprevious").setEnabled(false);
				sap.ui.getCore().byId("snext").setEnabled(false);

				SearchPromoDetails_PrepareNextEntry("Prev", oController);
			}
		});

		var feHead = new sap.ui.layout.form.FormElement({
			label : "",
			id : 'STV-Head',
			text : 'Review Promotion Details',
		});

		var feBack = new sap.ui.layout.form.FormElement({
			label : "",
			fields : [ Back ]
		});

		var fePrev = new sap.ui.layout.form.FormElement({
			//	label : "",
			fields : [ Prev ]
		});

		var fePid = new sap.ui.layout.form.FormElement({
			label : oPromoid,
			fields : [ new sap.m.Input('STF-PI-Id', {
				editable : false,
			}) ]
		});

		var feCust = new sap.ui.layout.form.FormElement({
			label : oLCustid,
			fields : [ new sap.m.Input('STF-Cust-ID', {
				editable : false,
			}) ]

		});

		var feCutName = new sap.ui.layout.form.FormElement({
			label : oLCustn,
			fields : [ new sap.m.Input('STF-Cust-Name', {
				editable : false,
			}) ]
		});

		var feSrep = new sap.ui.layout.form.FormElement({
			label : oLSrep,
			fields : [ new sap.m.Input('STF-Srep', {
				editable : false,
			}) ]
		});

		var feChannel = new sap.ui.layout.form.FormElement({
			label : oLChan,
			setEditable : true,
			fields : [ new sap.m.Input('STF-Channel', {
				editable : false,
			}) ]
		});

		var next = new sap.m.Button({
			id : 'snext',
			text : 'Next',
			type : "Emphasized",
			layoutData : new sap.ui.layout.GridData({
				span : "L1 M2 S8"
			}),
			press : function() {
				//debugger;	
				sap.ui.getCore().byId("sback").setEnabled(true);
				sap.ui.getCore().byId("sprevious").setEnabled(false);
				sap.ui.getCore().byId("snext").setEnabled(false);
				SearchPromoDetails_PrepareNextEntry("Next", oController);
			}
		});

		var feNext = new sap.ui.layout.form.FormElement({
			//	label : "",
			fields : [ next ]

		});

		var fePtype = new sap.ui.layout.form.FormElement({
			label : oLPtype,
			fields : [ new sap.m.Input('STF-P-Type', {
				editable : false,
			}) ]
		});

		var feHow = new sap.ui.layout.form.FormElement({
			label : oLHow,
			fields : [ new sap.m.Input('STF-P-How', {
				editable : false,
			}) ]
		});

		var feFdate = new sap.ui.layout.form.FormElement({
			label : oLFdate,
			fields : [ new sap.m.Input('STF-P-Fdate', {
				editable : false,
			}) ]
		});

		var feTdate = new sap.ui.layout.form.FormElement({
			label : oLTdate,
			fields : [ new sap.m.Input('STF-P-Tdate', {
				editable : false,
			}) ]
		});

		var feCdate = new sap.ui.layout.form.FormElement({
			label : oCFdate,
			fields : [ new sap.m.Input('STF-C-Fdate', {
				editable : false,
			}) ]
		});

		var fePro = new sap.ui.layout.form.FormElement({
			label : oLPro,
			fields : [ new sap.m.Input('STF-P-Pro', {
				editable : false,
			}) ]
		});

		var feCustpart = new sap.ui.layout.form.FormElement({
			label : oLCustpart,
			fields : [ new sap.m.Input('STF-P-CustPart', {
				editable : false,
			}) ]
		});

		var feItemstat = new sap.ui.layout.form.FormElement({
			label : oLItemstat,
			fields : [ new sap.m.Input('STF-P-ItemStat', {
				editable : false,
			}) ]
		});

//		**************************vinay changed**********************************//
		var web = new sap.m.Link('STF-P-Website', {
			enabled : true,
			emphasized : true,
			subtle : true,
			press: function(){
				var link = ("http://").concat(web.getText());
				window.open(link);
			}

		});

		var feWeb = new sap.ui.layout.form.FormElement({
			label : oLWeb,
			fields : [ web ]
		});

//		**********************************vinay changed end**************************************//
		var fePrice = new sap.ui.layout.form.FormElement({
			label : oLPrice,
			fields : [ new sap.m.Input('STF-P-Pri', {
				editable : false,
			}) ]
		});

		var feIR = new sap.ui.layout.form.FormElement({
			label : oLIR,
			fields : [ new sap.m.Input('STF-P-IR', {
				editable : false,
			}) ]
		});

		var feItem = new sap.ui.layout.form.FormElement({
			label : oLItem,
			fields : [ new sap.m.Input('STF-Itemid', {
				editable : false,
			}) ]
		});

		var RdHead = new sap.m.Label({
			id : 'SidRdHead',
			text : 'Choose one of the following responses:'
		});
		RdHead.addStyleClass("label");
		var feRdHead = new sap.ui.layout.form.FormElement({
			fields : [ RdHead ]
		});

		var oLAccinfo = new sap.m.Label({
			id : 'SidAccinfo',
			text : 'Account Info',
			layoutData : new sap.ui.layout.GridData({
				span : "L1M2S2"
			}),

		});
		oLAccinfo.addStyleClass("label");
		var accinfo = new sap.m.TextArea('STF-Accinfo', {
			editable : false,
		});

		var feAccinfota = new sap.ui.layout.form.FormElement({
			label : oLAccinfo,
			fields : [ accinfo ]

		});

		var II =  new sap.m.Input('STF-II', {
			editable : false,
			layoutData : new sap.ui.layout.GridData({		/*vinay*/
				span : "L3"
			}),					

		});
		
		var ITS = new sap.m.Input('STF-ITS', {
			editable : false,
		});
		
		 var Irep = new sap.m.TextArea('STF-Irep', {
				editable : false,
				rows : 1
			});
		 
		var feII = new sap.ui.layout.form.FormElement({
			label : oLII,
			fields : [ II, oLITS, ITS, oLIrep, Irep ]
		});

//		var feITS = new sap.ui.layout.form.FormElement({
//			label : oLITS,
//			fields : [  ]
//		});

/*				var feIrep = new sap.ui.layout.form.FormElement({
			label : oLIrep,
			fields : [ ]
		});
*/

		var feIrea = new sap.ui.layout.form.FormElement({
			label : oLIrea,
			fields : [ new sap.m.TextArea('STF-Irea', {
				editable : false,
				rows : 1
			}) ],
		});

		var feIcomm = new sap.ui.layout.form.FormElement({
			label : oLIcomm,
			fields : [ new sap.m.TextArea('STF-Icomm', {
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
		
		var SI = new sap.m.Input('STF-SI', {
			editable : false,
			layoutData : new sap.ui.layout.GridData({		/*vinay*/
				span : "L3"
			})					
		});
		
		var STS = new sap.m.Input('STF-STS', {
			editable : false,
		});
		
		var Srept = new sap.m.TextArea('STF-Srept', {
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
			fields : [ new sap.m.TextArea('STF-Srea', {
				editable : false,
				rows : 1
			}) ]
		});

		var feScomm = new sap.ui.layout.form.FormElement({
			label : oLScomm,
			fields : [ new sap.m.TextArea('STF-Scomm', {
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
				
		var AI =  new sap.m.Input('STF-AI', {
			editable : false,
			layoutData : new sap.ui.layout.GridData({		
				span : "L3"
			}),					
		});
		
		var ATS = new sap.m.Input('STF-ATS', {
			editable : false,
		});
		
		var Arep = new sap.m.TextArea('STF-Arep', {
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
			fields : [ new sap.m.TextArea('STF-Area', {
				editable : false,
				rows : 1
			}) ]
		});

		var feAcomm = new sap.ui.layout.form.FormElement({
			label : oLAcomm,
			fields : [ new sap.m.TextArea('STF-Acomm', {
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

		var II2 = new sap.m.Input('STF-II2', {
			editable : false,
			layoutData : new sap.ui.layout.GridData({				//vinay 18-04
				span : "L3"											//vinay 18-04
			})
		});
		
		
		var ITS2 = new sap.m.Input('STF-ITS2', {
			editable : false,
		});
		
		var Irep2 = new sap.m.TextArea('STF-Irep2', {
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
			fields : [ new sap.m.TextArea('STF-Irea2', {
				editable : false,
				rows : 1
			}) ]
		});

		var feIcomm2 = new sap.ui.layout.form.FormElement({
			label : oLIcomm2,
			fields : [ new sap.m.TextArea('STF-Icomm2', {
				editable : false,
				rows : 3
			}) ]
		});

		var feIsc2 = new sap.ui.layout.form.FormElement({
			label : oLIsc2,

		});

		var SI2 = new sap.m.Input('STF-SI2', {
			editable : false,
			layoutData : new sap.ui.layout.GridData({			//vinay 18-04
				span : "L3"										//vinay 18-04
			})
		});
		
		var STS2 = new sap.m.Input('STF-STS2', {
			editable : false,
		});
		
		var Srept2 = new sap.m.TextArea('STF-Srept2', {
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
			fields : [ new sap.m.TextArea('STF-Srea2', {
				editable : false,
				rows : 1
			}) ]
		});

		var feScomm2 = new sap.ui.layout.form.FormElement({
			label : oLScomm2,
			fields : [ new sap.m.TextArea('STF-Scomm2', {
				editable : false,
				rows : 3
			}) ]
		});

		var feSsc2 = new sap.ui.layout.form.FormElement({
			label : oLSsc2,
		});
		
		var AI2 = new sap.m.Input('STF-AI2', {
			editable : false,
			layoutData : new sap.ui.layout.GridData({				//vinay 18-04
				span : "L3"											//vinay 18-04
			})
		});

		var ATS2 = new sap.m.Input('STF-ATS2', {
			editable : false,
		});
		
		var Arept2 = new sap.m.TextArea('STF-Arep2', {
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
			fields : [ new sap.m.TextArea('STF-Area2', {
				editable : false,
				rows : 1
			}) ]
		});

		var feAcomm2 = new sap.ui.layout.form.FormElement({
			label : oLAcomm2,
			fields : [ new sap.m.TextArea('STF-Acomm2', {
				editable : false,
				rows : 3
			}) ]
		});

		var feAsc2 = new sap.ui.layout.form.FormElement({
			label : oLAsc2,

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

		// Layout
		var oLayout4 = new sap.ui.layout.form.ResponsiveGridLayout("SL4", {
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

		var SF4C4 = new sap.ui.layout.form.FormContainer("SF4C4", {
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
		var oForm4 = new sap.ui.layout.form.Form("SF4", {
			// autoscroll : true,
			title : new sap.ui.core.Title({
				text : "Search Promotion Details",
			}),
			editable : true,
			layout : oLayout4,
			formContainers : [ SF4C4
			                   // F4C5, F4C6

			                   ]

		});
		// Layout
		var oLayout5 = new sap.ui.layout.form.ResponsiveGridLayout("SL6", {
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
		var oForm5 = new sap.ui.layout.form.Form("SF5", {
			editable : true,
			layout : oLayout5,
			formContainers : [

			                  new sap.ui.layout.form.FormContainer("SF5C1", {
			                	  formElements : [

			                	                  feFdate, feTdate, feCdate, feWeb,  feCutName ]					/*vinay*/

			                  }),

			                  new sap.ui.layout.form.FormContainer("SF5C2", {
			                	  formElements : [

			                	                  fePid, feCust, fePro,  feSrep, feIR								/*vinay*/

			                	                  ]
			                  }),

			                  new sap.ui.layout.form.FormContainer("SF5C3", {
			                	  // title: "address",
			                	  formElements : [

			                	                  fePtype, feHow, feCustpart, feItemstat, fePrice

			                	                  ]
			                  })

			                  ]

		});

		// Layout holding Account info
		var oLayout55 = new sap.ui.layout.form.ResponsiveGridLayout("SL55", {
			columnsL : 2,
		});

		var F55C1 = new sap.ui.layout.form.FormContainer("SF55C1", {
			formElements : [ feAccinfota ]
		});

		// Form holding Layout with Account info
		var oForm55 = new sap.ui.layout.form.Form("SF55", {
			editable : true,
			layout : oLayout55,
			formContainers : [ F55C1

			                   ]

		});

		// Layout
		var oLayout7 = new sap.ui.layout.form.ResponsiveGridLayout("L7", {
			// labelSpanL : 8,
			// labelSpanM : 4,
			// labelSpanS : 4,
			//	emptySpanL : 1,
			// emptySpanM : 1,
			// emptySpanS : 1,
			columnsL : 1,
			//	columnsM : 1,
			// breakpointL : 1000,
			// breakpointM : 400
		});

		var oForm7 = new sap.ui.layout.form.Form("F7", {
			// autoscroll : true,

			editable : true,
			layout : oLayout7,
			formContainers : [

			                  new sap.ui.layout.form.FormContainer("SF7R1IRS",

			                		  {
			                	  title : "Review Intern Report Summary - 1st Cycle",
			                	  formElements : [ feII, // feITS, feIrep, 
			                	                   feIrea, feIcomm, feIsc1,
			                	                   feIimg1_Search, feIimg2_Search, feIimg3_Search, feIimg4_Search, feIimg5_Search]
			                		  }),

			                		  new sap.ui.layout.form.FormContainer("SF7R2SRS",

			                				  {
			                			  title : "Review Sales Rep Summary - 1st Cycle",
			                			  formElements : [ feSI,// feSTS, feSrept, 
			                			                   feSrea, feScomm, feSsc1,
			                			                   feSimg1_Search, feSimg2_Search, feSimg3_Search, feSimg4_Search, feSimg5_Search]
			                				  }), 

			                				  new sap.ui.layout.form.FormContainer("SF7R3ARS",

			                						  {
			                					  title : "Review Admin Summary - 1st Cycle",
			                					  formElements : [feAI, //feATS, feArep, 
			                					                  feArea, feAcomm, feAsc1,
			                					                  feAimg1_Search, feAimg2_Search, feAimg3_Search, feAimg4_Search, feAimg5_Search]
			                						  }),


			                						  new sap.ui.layout.form.FormContainer("SF7R4IRS",

			                								  {
			                							  title : "Review Intern Report Summary - 2nd Cycle",
			                							  formElements : [ feII2, //feITS2, feIrep2, 
			                							                   feIrea2, feIcomm2, feIsc2,
			                							                   feI2img1_Search, feI2img2_Search, feI2img3_Search, feI2img4_Search, feI2img5_Search
			                							                   ]
			                								  }),

			                								  new sap.ui.layout.form.FormContainer("SF7R5SRS",

			                										  {
			                									  title : "Review Sales Rep Summary - 2nd Cycle",
			                									  formElements : [ feSI2, //feSTS2, feSrept2, 
			                									                   feSrea2, feScomm2, feSsc2,
			                									                   feS2img1_Search, feS2img2_Search, feS2img3_Search, feS2img4_Search, feS2img5_Search
			                									                   ]
			                										  }), 

			                										  new sap.ui.layout.form.FormContainer("SF7R6ARS",

			                												  {
			                											  title : "Review Admin Summary - 2nd Cycle",
			                											  formElements : [feAI2, //feATS2, feArep2, 
			                											                  feArea2, feAcomm2, feAsc2,
			                											                  feA2img1_Search, feA2img2_Search, feA2img3_Search, feA2img4_Search, feA2img5_Search]
			                												  }),

			                												  ]

		});


		var oShellS = new sap.ui.ux3.Shell("myShellS", {
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
			headerItems : [ new sap.ui.commons.TextView("fnames", {
			            	   text : "",
			            	   tooltip : "U.Name"
			               }),

			               new sap.ui.commons.Button("logouts", {
			            	   text : "Logout",
			            	   press : function(oEvent) {
			            		   window.localStorage.clear();
			            		   sap.ui.getCore().byId("email").setValue("");
			            		   sap.ui.getCore().byId("password1").setValue("");
			            		   location.reload();
			            	   }
			               }),

			               ],
	//***********************************vinay******************************************//		               
	      worksetItems: [new sap.ui.ux3.NavigationItem("home_spd",{key:"spd_1",text:"Home"}),
			             new sap.ui.ux3.NavigationItem("checkpromo_spd",{key:"spd_2",text:"Check Promos"}),
			             new sap.ui.ux3.NavigationItem("searchpromo_spd",{key:"spd_3",text:"Search Promos" }),
			             new sap.ui.ux3.NavigationItem("searchacc_spd",{key:"spd_4",text:"Search Accounts"}),
			             new sap.ui.ux3.NavigationItem("internres_spd",{key:"spd_5",text:"Intern Response "}),
			             new sap.ui.ux3.NavigationItem("srres_spd",{key:"spd_6",text:"SR Response "}),
			             new sap.ui.ux3.NavigationItem("reassign_spd",{key:"spd_7",text:"Reassign Promo"}),
			             new sap.ui.ux3.NavigationItem("dummyItem_spd",{key:"spd_8",text:"Not to be Seen", visible: false }),
				 //        new sap.ui.ux3.NavigationItem("password",{key:"sh_4",text:"Change Password"}),

							               ],
							               
	//***********************************end******************************************//							               
			            				   //*****************vinay*********************************//
			            					worksetItemSelected: function(oEvent)
					            	    	{

			            						var sId = oEvent.getParameter("id");
					            	    		var oShell = oEvent.oSource;
					            	    		SearchPromoDetails_ClearAllData();
					            	    		oController.SearchPromoDetailsFillShellContent(sId, oShell);
					            	    		
					            	    	}
		
											//*************vinay***********************************//
		});
		var deviceHeight = $(window).height();
		var contentHeight = deviceHeight - 100;
		if(sap.ui.Device.system.phone || ( sap.ui.Device.system.tablet && (!(sap.ui.Device.system.combi)) && (!(sap.ui.Device.os.name == "win")))){
		var sScrollContainer = new sap.m.ScrollContainer("sScroll", {
			height: contentHeight+'px',
			vertical: true,
		});
		sScrollContainer.addContent(oForm4);
		sScrollContainer.addContent(oForm5);
		sScrollContainer.addContent(oForm55);
		sScrollContainer.addContent(oForm7); 
		oShellS.addContent(sScrollContainer);
		}else{
		oShellS.addContent(oForm4);
		oShellS.addContent(oForm5);
		oShellS.addContent(oForm55);
		oShellS.addContent(oForm7); 
		}
		oShellS.addStyleClass("sapUiSizeCompact");
		oShellS.setSelectedWorksetItem("dummyItem_spd");			/*vinay*/
		this.addContent(oShellS);
		

	}

});

function SearchPromoDetails_PrepareNextEntry(mode, oController) {
	debugger;
	var urole = sap.ui.getCore().byId("urole").getValue();
	if (urole == "SALESREP") {
		var sermodel = sap.ui.getCore().getModel("searchserialnomodel");
	} else {
		var sermodel = sap.ui.getCore().getModel("serialnomodel");

	}

	//var json = {};
	//json.Serialno = sermodel.getData();
	debugger;
	serialno = sermodel.getData().Serialno;
	/*	if(mode == "Submit"){

	 SubmittedSerialNumbers.push(serialno);		 
	 }*/
	var PromoListTable = new sap.ui.table.Table({
		id : ""
	});
	if (urole == "SALESREP") {
		PromoListTable = sap.ui.getCore().byId("SalesRep");
	}
	/*ADDED BY KALPANA */
	else if (urole == "MANAGER" || urole == "ADMIN" )
	{
		PromoListTable = sap.ui.getCore().byId("Manager_Admin");
	}
	/*END OF CODE*/
	else {
		PromoListTable = sap.ui.getCore().byId("CheckPromos");

	}
	//var model = this.getModel();
	TotalRows = PromoListTable._getRowCount();
	var Nextserialno = 0;
	if (mode == 'Prev') {
		serialno = +serialno - 1;

	} else {

		serialno = +serialno + 1;
	}

	/*	if (SubmittedSerialNumbers.length > 0){
	 Nextserialno = IfNextSerialNumberSubmittedThenGetNext(SubmittedSerialNumbers, serialno, mode);
	 }*/

	/*****Nextserialno is not used in the below code but is used in other views**********/
	if (mode == 'Prev') {
		//serialno = +serialno - 1;
		if ((+serialno >= 1 && Nextserialno == 0)
				|| (Nextserialno != 0 && Nextserialno >= 1)) {
			if (Nextserialno == 0) {
				var path = PromoListTable.getContextByIndex(+serialno - 1)
				.getPath();
			} else {
				var path = PromoListTable.getContextByIndex(+Nextserialno - 1)
				.getPath();

			}
			if (urole == "SALESREP") {
				var obj = sap.ui.getCore().byId("SalesRep").getModel()
				.getProperty(path);
			} 
			/*ADDED BY KALPANA */
			else if (urole == "MANAGER" || urole == "ADMIN" )
			{
				var obj = sap.ui.getCore().byId("Manager_Admin").getModel().getProperty(path);
			}
			/*END OF CODE*/	
			else {
				var obj = sap.ui.getCore().byId("CheckPromos").getModel()
				.getProperty(path);
			}

			var json = {};
			if (Nextserialno == 0) {
				json.Serialno = +serialno;
			} else {
				json.Serialno = +Nextserialno;
			}
			//var sermodel = new sap.ui.model.json.JSONModel();
			sermodel.setData(json);
			if (urole == "SALESREP") {
				sap.ui.getCore().setModel(sermodel, "searchserialnomodel");
			} else {
				sap.ui.getCore().setModel(sermodel, "serialnomodel");
			}
			//			****************************************Clear all values when next or perevios promo loaded***************************//											
			SearchPromoDetails_ClearAllData();
			//*********************************************************//
			oController.fillPageData(obj.Promoid, obj.Itemid, obj.Weekid);

		} else {
			sap.ui.getCore().byId("snext").setEnabled(true);
			sap.ui.getCore().byId("sback").setEnabled(true);
			sap.ui.getCore().byId("sprevious").setEnabled(true);
//			***********************vinay added***************************************************
			sap.ui.core.BusyIndicator.hide();
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
					"End of Table Reached", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Promos Completed",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function(oAction){ $('#myShellS-content').animate({ scrollTop: "0px" }); }
					}); 
			//alert("End of Table Reached");
//			************************vinay end added**********************************************	

		}

	} else if (mode == 'Next' || mode == 'Submit') {

		if ((+serialno <= TotalRows && Nextserialno == 0)
				|| (Nextserialno != 0 && Nextserialno <= TotalRows)) {

			if (Nextserialno == 0) {
				var path = PromoListTable.getContextByIndex(+serialno - 1)
				.getPath();
			} else {
				var path = PromoListTable.getContextByIndex(+Nextserialno - 1)
				.getPath();

			}
			/*ADDED BY KALPANA */
			if (urole == "SALESREP") {
				var obj = sap.ui.getCore().byId("SalesRep").getModel()
				.getProperty(path);
			} 

			else if (urole == "MANAGER" || urole == "ADMIN" )
			{
				var obj = sap.ui.getCore().byId("Manager_Admin").getModel()
				.getProperty(path);
			}

			else {
				var obj = sap.ui.getCore().byId("CheckPromos").getModel()
				.getProperty(path);
			}
			/*END OF CODE*/	

			var json = {};
			if (Nextserialno == 0) {
				json.Serialno = +serialno;
			} else {
				json.Serialno = Nextserialno;
			}
			//var sermodel = new sap.ui.model.json.JSONModel();
			sermodel.setData(json);
			sap.ui.getCore().setModel(sermodel, "serialnomodel");
			//			****************************************Clear all values when next or perevios promo loaded***************************//											
			SearchPromoDetails_ClearAllData();
			//*********************************************************//
			oController.fillPageData(obj.Promoid, obj.Itemid, obj.Weekid);

		} else {
			sap.ui.getCore().byId("snext").setEnabled(true);
			sap.ui.getCore().byId("sback").setEnabled(true);
			sap.ui.getCore().byId("sprevious").setEnabled(true);
//			***********************vinay added***************************************************
			sap.ui.core.BusyIndicator.hide();
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
					"End of Table Reached", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Promos Completed",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function(oAction){ $('#myShellS-content').animate({ scrollTop: "0px" }); }
					}); 
			//alert("End of Table Reached");
//			************************vinay end added**********************************************	

		}

	}

}
function SearchPromoDetails_toggleImage(oImage_pressed, oImage_Inline, feIimg, Imgobj){


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

function SearchPromoDetails_ClearAllData(){

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
//	//sap.ui.getCore().byId("cb8").setEnabled(false);
//	//Reset Check Boxes to unselect 
//	var ch1 = sap.ui.getCore().byId("cb1").setSelected(false);
//	var ch2 = sap.ui.getCore().byId("cb2").setSelected(false);
//	var ch3 = sap.ui.getCore().byId("cb3").setSelected(false);
//	var ch4 = sap.ui.getCore().byId("cb4").setSelected(false);
//	var ch5 = sap.ui.getCore().byId("cb5").setSelected(false);
//	var ch6 = sap.ui.getCore().byId("cb6").setSelected(false);
//	var ch7 = sap.ui.getCore().byId("cb7").setSelected(false);
	//var ch8 = sap.ui.getCore().byId("cb8").setSelected(false);
	//Reset Price Values
	sap.ui.getCore().byId("idPridif").setValue();
	sap.ui.getCore().byId("idPridifs").setValue();
	//Reset Comments for Intern, Sales Rep and Admin
	sap.ui.getCore().byId("commin").setValue();
	sap.ui.getCore().byId("commsr").setValue();
	sap.ui.getCore().byId("commad").setValue();
	//Clear Intern Images
	sap.ui.getCore().byId("display_imageSearch1").setSrc();
	sap.ui.getCore().byId("display_imageSearch2").setSrc();
	sap.ui.getCore().byId("display_imageSearch3").setSrc();
	sap.ui.getCore().byId("display_imageSearch4").setSrc();
	sap.ui.getCore().byId("display_imageSearch5").setSrc();
	sap.ui.getCore().byId("display_imageSearch6").setSrc();
	sap.ui.getCore().byId("display_imageSearch7").setSrc();
	sap.ui.getCore().byId("display_imageSearch8").setSrc();
	sap.ui.getCore().byId("display_imageSearch9").setSrc();
	sap.ui.getCore().byId("display_imageSearch10").setSrc();
	sap.ui.getCore().byId("display_i2mageSearch1").setSrc();
	sap.ui.getCore().byId("display_i2mageSearch2").setSrc();
	sap.ui.getCore().byId("display_i2mageSearch3").setSrc();
	sap.ui.getCore().byId("display_i2mageSearch4").setSrc();
	sap.ui.getCore().byId("display_i2mageSearch5").setSrc();
	sap.ui.getCore().byId("display_i2mageSearch6").setSrc();
	sap.ui.getCore().byId("display_i2mageSearch7").setSrc();
	sap.ui.getCore().byId("display_i2mageSearch8").setSrc();
	sap.ui.getCore().byId("display_i2mageSearch9").setSrc();
	sap.ui.getCore().byId("display_i2mageSearch10").setSrc();
	// Clear Sales Rep Images
	sap.ui.getCore().byId("display_simageSearch1").setSrc();
	sap.ui.getCore().byId("display_simageSearch2").setSrc();
	sap.ui.getCore().byId("display_simageSearch3").setSrc();
	sap.ui.getCore().byId("display_simageSearch4").setSrc();
	sap.ui.getCore().byId("display_simageSearch5").setSrc();
	sap.ui.getCore().byId("display_simageSearch6").setSrc();
	sap.ui.getCore().byId("display_simageSearch7").setSrc();
	sap.ui.getCore().byId("display_simageSearch8").setSrc();
	sap.ui.getCore().byId("display_simageSearch9").setSrc();
	sap.ui.getCore().byId("display_simageSearch10").setSrc();
	sap.ui.getCore().byId("display_s2imageSearch1").setSrc();
	sap.ui.getCore().byId("display_s2imageSearch2").setSrc();
	sap.ui.getCore().byId("display_s2imageSearch3").setSrc();
	sap.ui.getCore().byId("display_s2imageSearch4").setSrc();
	sap.ui.getCore().byId("display_s2imageSearch5").setSrc();
	sap.ui.getCore().byId("display_s2imageSearch6").setSrc();
	sap.ui.getCore().byId("display_s2imageSearch7").setSrc();
	sap.ui.getCore().byId("display_s2imageSearch8").setSrc();
	sap.ui.getCore().byId("display_s2imageSearch9").setSrc();
	sap.ui.getCore().byId("display_s2imageSearch10").setSrc();
	// Clear Admin Images
	sap.ui.getCore().byId("display_aimageSearch1").setSrc();
	sap.ui.getCore().byId("display_aimageSearch2").setSrc();
	sap.ui.getCore().byId("display_aimageSearch3").setSrc();
	sap.ui.getCore().byId("display_aimageSearch4").setSrc();
	sap.ui.getCore().byId("display_aimageSearch5").setSrc();
	sap.ui.getCore().byId("display_aimageSearch6").setSrc();
	sap.ui.getCore().byId("display_aimageSearch7").setSrc();
	sap.ui.getCore().byId("display_aimageSearch8").setSrc();
	sap.ui.getCore().byId("display_aimageSearch9").setSrc();
	sap.ui.getCore().byId("display_aimageSearch10").setSrc();
	sap.ui.getCore().byId("display_a2imageSearch1").setSrc();
	sap.ui.getCore().byId("display_a2imageSearch2").setSrc();
	sap.ui.getCore().byId("display_a2imageSearch3").setSrc();
	sap.ui.getCore().byId("display_a2imageSearch4").setSrc();
	sap.ui.getCore().byId("display_a2imageSearch5").setSrc();
	sap.ui.getCore().byId("display_a2imageSearch6").setSrc();
	sap.ui.getCore().byId("display_a2imageSearch7").setSrc();
	sap.ui.getCore().byId("display_a2imageSearch8").setSrc();
	sap.ui.getCore().byId("display_a2imageSearch9").setSrc();
	sap.ui.getCore().byId("display_a2imageSearch10").setSrc();
	
}
