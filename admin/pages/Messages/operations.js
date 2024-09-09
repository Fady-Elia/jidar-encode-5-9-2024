
function delete_data(rowId)
{
    
    var res=confirm("هل تريد تأكيد الحذف ؟");

    if(res)
    {
        $("#type").val(4);
        $("#itemid").val(rowId);
       
        $.post("get.php", { itemid: rowId,type:4},

        function(data){
        if(data=="error")
        {
            $("#resultdata").html("<div class='alert alert-danger'>عفوا يوجد خطأ </div>");
        }else{
            $("#resultdata").html("<div class='alert alert-success '>تم الحذف  بنجاح </div>");
            Load_data();
            reset_data();
        }
        
            });


    
    }
                    
}

function Load_data() {

    $ ('#sample-table-2'). dataTable (). fnDestroy ();
    $('#sample-table-2').DataTable( {
        "bProcessing": true,
          "sAjaxSource": "get.php",
      } );

    

}







