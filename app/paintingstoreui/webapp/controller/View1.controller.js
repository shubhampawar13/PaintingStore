sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], (Controller,JSONModel,MessageToast, Filter, FilterOperator,Sorter) => {
    "use strict";

    return Controller.extend("paintingstoreui.controller.View1", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
            var tabModel = this.getOwnerComponent().getModel("service");
            this.getView().setModel(tabModel,"service");
        },
        onPress: function (oEvent){
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext("service");//VVIMP HE KARYCHAY
            var sProductId = oContext.getProperty("product_id");
            console.log(sProductId);
            this.oRouter.navTo("Pdetails", {
                product: sProductId
            });

            // // var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1);
			// var	productPath = oEvent.getSource().getBindingContext("service").getPath();
			// var	product = productPath.split("/").slice(-1).pop();

			// this.oRouter.navTo("Pdetails", { product: product});
        },
        onAddProduct: function (event){
            console.log(event);
            this.oRouter.navTo("AddProduct");
        },

    });
});