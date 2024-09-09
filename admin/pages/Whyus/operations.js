
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
               
                            $("#name_ar").val(jsonResponsee['title_ar']);
                            $("#name_en").val(jsonResponsee['title_en']);
                      
                          

                           
                            $("#about_data_ar").val( jsonResponsee['desc_ar'] );
                            $("#about_data_en").val( jsonResponsee['desc_en'] );
                            $('.div_edit').show();
                        }
						
							});

                    
}

function update_data()
{
    var flag= validate_edit() ;

		if(flag==0){
   var rowId=$("#itemid").val();

    $("#type").val(3);
    $("#savedata").attr("onclick","");
    $('.div_edit').hide();
    
    $("#form_id").submit();

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
    $("#savedata").attr("onclick","");
    $('.div_edit').hide();
    $("#form_id  input , textarea").each(function(){
        if ( $( this ).hasClass( "CKEDITOR" ) ) {
        
            var iddata=$( this ).attr('id');
           
            CKEDITOR.instances[iddata].setData('');
        }else{
        
        $(this).val(""); 
        }
    });
  
  

                      
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






