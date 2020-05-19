$(document).ready(function(){

    //multiple delete
    $("#multi-uwus").click(function() {
        let values = [];
        var params = $(this).attr('href');
        console.log(params)
        $.each($("input[name='options']:checked"), function() {
            values.push($(this).val());
        });
        if(params == '#hapusPembayaranModal'){
            $('#payment_id').val(values.toString());
        }
        if(params == '#hapusBarangModal'){
            $('#goods_id').val(values.toString());
        }
        if(params == '#deleteServiceModal'){
            $('#service_id').val(values.toString());
        }
        if(params == '#deleteDeliveryModal'){
            $('#pd_id').val(values.toString());
        }
        if(params == '#hapusPengeluaranModal'){
            $('#expense_id').val(values.toString());
        }
    });

    //multi-items
    $("#multi-items").click(function() {
        var wrapper = $('.item-fields');
        var wrapper1 = $('.type-fields');
        var wrapper2 = $('.photos-fields');
        $(wrapper).append("<div class='form-group'><input type='text' class='form-control' name='item_notes[]'></div>");
        $(wrapper1).append("<div class='form-group'><input type='text' class='form-control' name='item_types[]'></div>");
        $(wrapper2).append("<div class='form-group'><input type='file' class='form-control' name='item_photos[]'></div>")
    });

    //get val multi-tems
    $("#changes").click(function() {
        let values = [];
        let value = [];
        $.each($("input[name='item_notes']"), function() {
            values.push($(this).val());
        });
        $.each($("input[name='item_types']"), function() {
            value.push($(this).val());
        });

        console.log(values.toString());
        console.log(value.toString());

        $('#items_notes').val(values.toString());
        $('#items_types').val(value.toString());

        $('#Simpan').prop('disabled',false);
    });

    //set-hidden
    $(".set-hidden").click(function(){
        $('#item_id').val($(this).attr('value')); 
    });

    //order-hidden
    $(".order-hidden").click(function(){
        $('#order_id').val($(this).attr('value')); 
    });

    //hide
    setTimeout(function(){
        $(document).on('click','#hides',function(){
            $('#hides').hide();
        });
     },1000);

    /*------------------- card ----------------------- */
    // Auto-scroll
    $('.carousel').carousel({
        interval: 1500
    });

    // Control buttons
    $('.next').click(function () {
        $('.carousel').carousel('next');
        return false;
    });

    $('.prev').click(function () {
        $('.carousel').carousel('prev');
        return false;
    });

    //multi-select
    $("#weight_total").on("change",function(){
        values = parseInt($("#pilihan option:selected").attr("price"));
        values1 = parseInt($("#weight_total").val());
        values = values * values1;
        $('#order_total').val(values.toString());
    });

    //chart admin
    var dates   = document.getElementsByClassName('dates')[0].value;
    var date    = dates.split(",");

    var value   = document.getElementsByClassName('totals')[0].value;
    var values  = value.split(",");

    var ctx     = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: date,
            datasets: [{
                label: '# Ribu',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: 'Grafik Pendapatan 5 Tanggal Terakhir (dalam Ribuan)',
                fontSize: 20
            }
        }
    });

    // $("#uwus").click(function() {
    //     var values = $(this).val();
    //     var params = $(this).attr('at');

    //     if(params == '#deleteBarangModal'){
    //         $('#goods_id').val(values);
    //     }
    //     else if(params == '#deleteDeliveryModal'){
    //         alert(values);
    //         $('#pd_id').val(values);
    //     }
    //     else if(params == '#deleteExpenseModal'){
    //         $('#expense_id').val(values);
    //     }
    // });
});
