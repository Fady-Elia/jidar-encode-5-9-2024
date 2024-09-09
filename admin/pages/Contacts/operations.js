

function update_data()
{
    var flag= validate_edit() ;

		if(flag==0){

    $("#form_id").submit();

        }
                    
}






function validate_edit() {
    
    var flag=0;
    $("#form_id  .validate_input ").not(':input[type=file]').each(function(){
        var value="";
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





