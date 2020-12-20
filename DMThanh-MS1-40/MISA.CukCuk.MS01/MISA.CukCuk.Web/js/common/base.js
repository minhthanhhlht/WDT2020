//import { data } from "jquery";

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



    /**
    * Gán các sự kiện
    * */
    Event() {

        // Gán các sự kiện:
        // Sự kiện khi nhấn nút Thêm mới
        $('#btnAdd').click(this.btnAddOnClick.bind(this));
        //Sự kiện khi nhấn nút huỷ
        $('#btnCancel').click(this.btnCancelOnClick.bind(this));
        // Sự kiện khi nhấn nút Refresh
        $('#btnRefresh').click(this.btnRefreshOnClick.bind(this));
        // Thực hiện lưu dữ liệu khi nhấn button Save
        $('#btnSave').click(this.btnSaveOnClick.bind(this));
        // Hiển thị dialog thông tin chi tiết khi db click
        $('#tbList').on('dblclick', 'tr', function () {
            var inputs = $(`input[fieldname], select[fieldname]`);
            //Lấy dữ liệu từ server

            $.ajax({
                url: 'http://api.manhnv.net/api/customers',
                method: 'GET',

            }).done(function (response) {
                /*
                var row_id = $(this).attr("id");
                var CustomerCode = $('#txtCustomerCode' + row_id + '').val();
                $('#txtCustomerCode').val(CustomerCode);
                $(".customer-dialog").dialog('option', 'title', 'THÔNG TIN CHI TIẾT');
                dialog.dialog('open');
                */
                $.each(inputs, function (index, input) {

                })

            }).fail(function (response) {


            })



        });


        // Click chọn -->item menu đổi màu
        $(".menu__item")
            .hover(function () {
                $(this).toggleClass(".menu__item");
            })
            .mouseup(function () {
                $(this).css('background-color', '');
            })
            .mousedown(function () {
                $(this).css('background-color', '#7fffd4');
            });

        /**
         * Validate nhập thông tin trường *
         * **/
        $('[required]').blur(function () {
            //Check dữ liệu đã nhập
            var value = $(this).val();
            if (!value) {
                $(this).addClass('border-red');
                $(this).attr(`title`, 'Vui lòng không để trống');
                $(this).attr("validate", false);
            } else {
                $(this).removeClass('border-red');
                $(this).attr("validate", true);
            }
        })

        /**
         * Validate nhập email
         * **/
        $('[type="email"]').blur(function () {
            var value = $(this).val();
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if (!emailReg.test(value)) {
                $(this).addClass('border-red');
                $(this).attr(`title`, 'Vui lòng nhập đúng định dạng email');
                $(this).attr("validate", false);
            } else {
                $(this).removeClass('border-red');
                $(this).attr("validate", true);
            }
        })

        /**
         * Validate Phone number
         * **/
        $('[type="tel"]').blur(function () {
            var value = $(this).val();
            var phoneReg = /^\d{10}$/;
            if (!phoneReg.test(value)) {
                $(this).addClass('border-red');
                $(this).attr(`title`, 'Vui lòng nhập đúng định dạng số điện thoại');
                $(this).attr("validate", false);
            } else {
                $(this).removeClass('border-red');
                $(this).attr("validate", true);
            }
        })

    }
    // Sự kiện khi nhấn nút Thêm mới
    btnAddOnClick() {
        dialog.dialog('open');
    }

    btnCancelOnClick() {
        dialog.dialog('close');
    }
    btnRefreshOnClick() {
        this.loadData();
    }

    btnSaveOnClick() {
        //validate
        var inputValidates = $('[required], [type="email"]');
        $.each(inputValidates, function (index, input) {
            $(input).trigger('blur');
        })
        var inputNotValids = $('[validate="false"]');
        if (inputNotValids && inputNotValids.length > 0) {
            alert('Vui lòng kiểm tra lại dữ liệu.');
            inputNotValids[0].focus();
            //Sau khi return thì stop hẳn
            return;
        } else {

        }

    /**
    * Thêm dữ liệu
    * */
            //Thu thập thông tin dữ liệu nhập

        var customer = {
            "CustomerCode": $('#txtCustomerCode').val(),
            "FullName": $('#txtFullName').val(),
            "Address": $('#txtAddress').val(),
            "DateOfBirth": $('#dtDateOfBirth').val(),
            "Email": $('#txtEmail').val(),
            "PhoneNumber": $('#txtPhoneNumber').val(),
            "MemberCardCode": $('#txtMemberCardCode').val(),
            "Gender": $('#cbxGender').val()
        }
        console.log(customer);
        //Gọi server

        $.ajax({
            url: 'http://api.manhnv.net/api/customers',
            method: 'POST',
            data: JSON.stringify(customer),
            contentType: 'application/json'

        }).done(function (response) {
            //Đưa ra thông báo thành công sau đó ẩn form dialog, loading lại dữ liệu
            alert('Lưu thành công!');
            dialog.dialog('close');
            me.loadData();

        }).fail(function (response) {


        })
    }
    addData() {

    }



}
function customerDetail(obj) {

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











