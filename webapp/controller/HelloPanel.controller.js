sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"

], function(Controller, MessageToast, Fragment) {
    'use strict';

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {

        // Toast Message by clicking of button
        onShowHello : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // SAP Toast
            MessageToast.show(sMsg); 
        },

        // Dialogbox Fragment functionality by clicking on button
        onOpenDialog : function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});