$(document).ready(function () {
    //dialog

    dialog = $(".customer-dialog").dialog({
        autoOpen: false,
        height: 600,
        width: 700,
        modal: true,
    });
})

class BaseeJS {
    constructor() {
        this.loadData();
        this.Event();

    }
