sap.ui.define([
  "sap/ui/core/mvc/Controller",
  'sap/ui/model/json/JSONModel',
  'sap/m/MessageToast',
  "sap/ui/model/odata/v4/ODataModel"

], (Controller, JSONModel, MessageToast,ODataModel) => {
  "use strict";

  return Controller.extend("paintingstoreui.controller.Pdetails", {
    onInit() {
      var oRouter = this.getOwnerComponent().getRouter();

      oRouter.getRoute("Pdetails").attachMatched(this._onRouteMatched, this);//this method will be triggred on url matching
      var tabModel = this.getOwnerComponent().getModel("service");
      this.getView().setModel(tabModel, "service");

    },
    _onRouteMatched: function (oEvent) {
      var oArgs, oView;

      oArgs = oEvent.getParameter("arguments");
      var pId = oArgs.product;
      var encodedId = pId.replace(/ /g, '%20');
      console.log(encodedId);
      oView = this.getView();
      console.log(oView);

      

      try{
        this.getView().bindElement({
          path: "/Product('" + encodedId + "')",//changeIMP
          model: "service"
        });
      }catch(e){
        console.log(e);
      }

      // Access the model and context
    // var oModel = this.getOwnerComponent().getModel("service"); // Get the 'service' model
    // console.log(oModel);
    // var oContext = oView.getBindingContext(); // Get the binding context after binding the element

    // // Once the binding is completed, fetch and log the product data
    // if (oContext) {
    //     var productData = oModel.getProperty(oContext.getPath());
    //     console.log("Product Data: ", productData);
    // } else {
    //     console.log("No context available yet.");
    // }
    //   //getting data model
    //   var tabModel = this.getOwnerComponent().getModel("service");
    //   // var aProducts = tabModel.getObject();
    //   console.log(tabModel.aAllBindings);
    //   console.log(tabModel.aBindings[0].getId());

    //   var arr = tabModel.aAllBindings;
    //   console.log(arr[5].oContext.sPath.substring(1));
    //   this._product = oEvent.getParameter("arguments").product || this._product || "0";
    //   console.log(this._product);

    //   var product = {};//intitializing empty product
    //   // // Function to initialize and update product based on the oContext and oPath
    //    const initializeProduct=(arr)=> {
    //     arr.forEach(item => {
    //       // If oContext is 'product' and oPath exists in the item, we can update the product object
    //       console.log(item.oContext?.sPath);
    //       if (item.oContext?.sPath?.substring(1) === this.pId) {
    //         // Dynamically assign the value to the product object at the given oPath
    //         console.log("hii");
    //         console.log(item?.sPath);
    //         product[item?.sPath] = item?.sValue;
    //       }
    //     });
    //   }
    //   // // Call the function to initialize the product object
    //   initializeProduct(arr);

    //   // // Log the product object to see the final output
    //   // console.log(product);

    // //   var oProduct = arr.find((product) => {
    // //     if (product.oContext?.sPat?.substring(1) === this.pId) {
    // //         return "Yess";
    // //     }
    // // });
    

    //   console.log("this is output"+ product?.product_name);


    },
    onUpdateProduct: function () {

    }
  });
});