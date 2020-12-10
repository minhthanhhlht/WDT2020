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
        $(".menu__item")
            .hover(function () {
                $(this).toggleClass(".menu__item");
            })
            .mouseup(function () {
            $(this).css('background-color','');
            })            
            .mousedown(function () {
                $(this).css('background-color', '#7fffd4');
            });
            
       
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

/**
* Format dữ liệu sang kiểu dd/mm/yyyy
* @param {any} date
*/

function Dateformat(date) {
    var date = new Date(date);
    //day  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    //month
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    //year
    var year = date.getFullYear();
    return day + '/' + month + '/' + year;
}











