sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function(Controller) {
    'use strict';
    
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        // Show a native or vanilla JS alert
        // alert("Hello there!");

        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
        
    });
});