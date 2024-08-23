sap.ui.isview("ui5_tale_odata.TABLE_VIEW",{
    GetControllerName : function() {
        return "ui5_table_odata.TABLE_VIEW";

    },

    createContent : function(oController) {
        oTable = new sap.ui.table.Table({
            title: "Flight Information",
            VisibleRowCount : 8 ,
            SelectionMode :sap.ui.table.SelectionMode.Single
        });
        oCol1 = new sap.ui.table.Column( {
            label : new sap.ui.commons.label({text : "Carrid"}),
            template : new sap.ui.commons.TextView().bindProperty("text", "Carrid")
        });
        oCol2 = new sap.ui.table.Column( {
            label : new sap.ui.commons.label({text : "Connid"}),
            template : new sap.ui.commons.TextView().bindProperty("text", "Connid")
        });
        oCol3 = new sap.ui.table.Column( {
            label : new sap.ui.commons.label({text : "FLDATE"}),
            template : new sap.ui.commons.TextView().bindProperty("text", "FLDATE")
        });
        oCol4 = new sap.ui.table.Column( {
            label : new sap.ui.commons.label({text : "Price"}),
            template : new sap.ui.commons.TextView().bindProperty("text", "Price")
        });
        oCol5 = new sap.ui.table.Column( {
            label : new sap.ui.commons.label({text : "CURRENCY"}),
            template : new sap.ui.commons.TextView().bindProperty("text", "CURRENCY")
        });
        oTable.addColumn(oCol1);
        oTable.addColumn(oCol2);
        oTable.addColumn(oCol3);
        oTable.addColumn(oCol4);
        oTable.addColumn(oCol5);

        var sServiceUrl = "sap/opu/odata/sap/ZCONS_ODATA_FIORI_APP_SRV/";
        oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, false);
        OTable.setModel(oModel);
        oTable.bindRows("/FlightsetSet");
        return oTable;

    }
})