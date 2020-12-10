$(document).ready(function () {
     //dialog

    dialog = $(".customer-dialog").dialog({
        autoOpen: false,
        height: 600,
        width: 700,
        modal: true,
        });
})

class BaseJS {
    constructor() {
        this.loadData();
        this.Event();
        
    }

    /**
* Load dữ liệu và append vào table
* */
    loadData() {
        $.ajax({
            url: 'http://api.manhnv.net/api/customers',
            method: 'GET',
        }).done(function (response) {
            console.log(response);
            //3. 
            $('#tbList tbody').empty();
            for (var i = 0; i < response.length; i++) {
                console.log(response[i]);
                var DateOfB = Dateformat(response[i].DateOfBirth)
                var trHtml = `<tr class="line1">
                        <td>${response[i].CustomerCode}</td>
                        <td>${response[i].FullName}</td>
                        <td>${response[i].GenderName}</td>
                        <td>${DateOfB}</td>
                        <td>${response[i].CustomerGroupName}</td>
                        <td>${response[i].PhoneNumber}</td>
                        <td>${response[i].Email}</td>
                        <td style="max-width:250px" title="${response[i].Address}"><span style="width:100px">${response[i].Address}</span></td>
                        <td>${response[i].DebitAmount || ""}</td>
                        <td>${response[i].MemberCardCode}</td>
                    </tr>`;
                $('#tbList >tbody:last-child').append(trHtml);
            }
        }).fail(function (response) {

        })
    }
    S

    /**
    * Gán các sự kiện
    * */
    Event() {
        // Gán các sự kiện:
        $('#btnAdd').click(function () {
            dialog.dialog('open');

        })
        $('#btnCancel').click(function () {
            dialog.dialog('close');
        })
        $('#tbList').on('dblclick', 'tr', function () {
            // load dữ liệu chi tiết:

            // Hiển thị dialog thông tin chi tiết:
            dialog.dialog('open');
        })
    }

    /**
* Thêm dữ liệu
* */
    addData() {

    }


    /**
    * Sửa dữ liệu
    * */
    editData() {

    }

    /**
    * Xoá dữ liệu
    * */
    deleteData() {

    }

}







}

