

function add_data(){
  
   var flag= validate() ;

		if(flag==0){
            $("#type").val(1);
         $("#form_id").submit();
      
      
        }
    
    
}


function getData(rowId)
{
    clear();
    $("#savedata").attr("onclick","update_data()");
    $("#type").val(2);
    $("#itemid").val(rowId);
	$.post("get.php", { itemid: rowId,type:2},

						function(data){
                        if(data=="nodata")
                        {
                            $("#resultdata").html("<div class='alert alert-danger'>عفوا لا يوجد بيانات</div>");
                        }else{
                            var jsonResponsee = JSON.parse(data);
                            $("#itemid").val(jsonResponsee['id']);
                            $("#titlear").val(jsonResponsee['name_ar']);
                            $("#titleen").val(jsonResponsee['name_en']);
                            $("#link").val(jsonResponsee['url']);
                          
                         
                        }
						
							});

                    
}

function update_data()
{
    var flag= validate_edit() ;

		if(flag==0){
   var rowId=$("#itemid").val();

    $("#type").val(3);
    $("#form_id").submit();

        }
                    
}


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
            $("#resultdata").html("<div class='alert alert-danger'>عفوا يوجد خطأ</div>");
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

function reset_data()
{
  
    $("#form_id  input , textarea").each(function(){
        if ( $( this ).hasClass( "CKEDITOR" ) ) {
        
            var iddata=$( this ).attr('id');
           
            CKEDITOR.instances[iddata].setData('');
        }else{
        
        $(this).val(""); 
        }
    });
  
  
   $("#savedata").attr("onclick","add_data()");
                      
}

function clear()
{
    $("#form_id  .validate_input ").each(function(){
        $(this).css("border-color", "#b5b5b5");  
        if ( $( this ).hasClass( "CKEDITOR" ) ) {

            var iddata=$( this ).attr('id');
           
            CKEDITOR.instances[iddata].setData('');
            $('#cke_'+iddata).css("border-color", "#b5b5b5");
        } 
    });
                      
}


/* if the form contain input with type=file use validate_edit() for validate edit*/

function validate() {
    
    var flag=0;
    $("#form_id  .validate_input ").each(function(){
        var value="";
        var iddata=$( this ).attr('id');
    
        if ( $( this ).hasClass( "CKEDITOR" ) ) {
            var iddata=$( this ).attr('id');
           
            value =CKEDITOR.instances[iddata].getData();
           
        }
        else{
            value=  $(this).val();
        }
    
        if(value.length==0)
        {
            flag=1;
            $(this).css("border-color", "red");
            if ( $( this ).hasClass( "CKEDITOR" ) ) {

                var id='cke_'+$(this).attr('id');
                $('#'+id).css("border-color", "red");
            }
        }
        else{
            $(this).css("border-color", "#b5b5b5");  
            if ( $( this ).hasClass( "CKEDITOR" ) ) {

                var id='cke_'+$(this).attr('id');
                $('#'+id).css("border-color", "#b5b5b5");
            }
        }
    });
    return flag;
}

function validate_edit() {
    
    var flag=0;
    $("#form_id  .validate_input ").not(':input[type=file]').each(function(){
        var value="";
        var iddata=$( this ).attr('id');
        if ( $( this ).hasClass( "CKEDITOR" ) ) {
            value =CKEDITOR.instances[iddata].getData();
        }
        else{
            value=  $(this).val();
        }
    
        if(value.length==0)
        {
            flag=1;
            $(this).css("border-color", "red");
            if ( $( this ).hasClass( "CKEDITOR" ) ) {

                var id='cke_'+$(this).attr('id');
                $('#'+id).css("border-color", "red");
            }
        }
        else{
            $(this).css("border-color", "#b5b5b5");  
            if ( $( this ).hasClass( "CKEDITOR" ) ) {

                var id='cke_'+$(this).attr('id');
                $('#'+id).css("border-color", "#b5b5b5");
            }
        }
    });
    return flag;
}




