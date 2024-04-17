sap.ui.define([

    // Libraries which are used are defined
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog"

], function(UIComponent, JSONModel, HelloDialog) {
    'use strict';
    
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

        // Metadata accessed from manifest.json
        metadata : {
            manifest: "json"
        },

        // Initial function
        init : function () {

            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            
            // set data models
            var oData = {
                recipient : {
                    name : "Shivam"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set dialog from controller
            this._helloDialog = new HelloDialog(this.getRootControl());

        },

        // Used to add functionality on Exit
        exit : function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog : function () {
            this._helloDialog.open();
        }
    })
});