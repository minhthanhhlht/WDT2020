$(document).ready(function () {
    //dialog
    dialog = $(".customer-dialog").dialog({
        autoOpen: false,
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
       //3. 
        $('#tbList tbody').empty();
        for (var i = 0; i < response.length; i++) {
            console.log(response[i]);
            var trHtml = `<tr class="line1">
                        <td>${response[i].CustomerCode}</td>
                        <td>${response[i].FullName}</td>
                        <td>${response[i].GenderName}</td>
                        <td>${response[i].DateOfBirth}</td>
                        <td>${response[i].CustomerGroupName}</td>
                        <td>${response[i].PhoneNumber}</td>
                        <td>${response[i].Email}</td>
                        <td style="max-width:100px"><span style="width:100px">${response[i].Address}</span></td>
                        <td>${response[i].DebitAmount}</td>
                        <td>${response[i].MemberCardCode}</td>
                    </tr>`;
            $('#tbList >tbody:last-child').append(trHtml);
        }
    }).fail(function (response) {

    })
    //2.

    //3. 
   
   

})