$(".formkontrol").click(function(){
      var error = false;
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      
      var formid = $(this).closest("form").attr("id");
    
      $("#"+formid+" input[type=text], #"+formid+" input[type=password]").each( function(n,element){

          if ($(element).val().trim() == $(element).attr("vtitle")) {

            

            $(element).css("border","1px solid #900");

            error = true;
            return false;
          }else{

              $(element).css("border","1px solid #E8E8E8");

              if ($("#"+formid+" .inputmail").val() == undefined){

                error = false;

              }else{


              if (reg.test($("#"+formid+" .inputmail").val()) == true) {
                          
                          error = false;
                          

                  }else{
                          $("#"+formid+" .inputmail").css("border","1px solid #900");
                          error = true;
                          return false;
                         
                  }


              }


         }
            

     });

      if (!error) {
        $("#"+formid).submit();
      };
      

      return false;


  });