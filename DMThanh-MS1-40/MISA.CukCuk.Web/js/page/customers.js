$(document).ready(function () {
    //dialog
    dialog = $(".m-dialog").dialog({
        autoOpen: true,
        height: 400,
        width: 350,
        modal: true,

    });
    //load du lieu


    //1. 
    $.ajax({
        url: 'http://api.manhnv.net/api/customers',
        method: 'GET',
    }).done(function (response){
        console.log(response);
    }).fail(function (response) {

    })
    //2.

    //3. 
    $('#tbList tbody').empty();
    for (var i = 0; i < 10; i++) {
        
        var trHtml = `<tr class="line1">
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td style="max-width:100px"><span style="width:100px"></span>...</td>
                        <td>...</td>
                    </tr>`;
        $('#tbList > tbody:last-child').append(trHtml);
    }
   

})