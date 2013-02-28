//formkontrol function 
  $(".formkontrol").click(function() {


    var error = false;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    var formid = $(this).closest("form").attr("id");

    $("#" + formid + " input[type=text], #" + formid + " input[type=password], #" + formid + " input[type=file], #" + formid + " input[type=textarea]").each(function(n, element) {

      if($(element).val() == $(element).attr("vtitle") || $(element).val() == "" || $(element).val() == " ") {
        
        var attr = $(element).attr('verror');

        if (typeof attr !== 'undefined' && attr !== false){
          
          $(element).parent("p").children(".error").html( $(element).attr('verror') );          

        }else{

          $(element).parent("p").children(".error").html("Lütfen bu alanı doldurunuz !");

        }

        $(element).parent("p").children(".error").fadeIn("fast");


        error = true;

        return false;

      } else {

        $(element).parent("p").children(".error").fadeOut("fast");

        if($("#" + formid + " .inputmail").val() == undefined) {

          error = false;

        } else {

          if(reg.test($("#" + formid + " .inputmail").val()) == true) {

            error = false;

          } else {
            $("#" + formid + " .inputmail").parent("p").children(".error").html("Lütfen doğru adres giriniz !");
            $("#" + formid + " .inputmail").parent("p").children(".error").fadeIn("fast");

            error = true;
            return false;

          }
        }
      }

      if(($("#signup_password").length > 0 && $("#signup_confirm").length > 0)) {

        if($("#" + formid + " #signup_password").val() == $("#" + formid + " #signup_confirm").val()) {

          error = false;

        } else {

          error = true;
          $("#signup_password").parent("p").children(".error").html("Şifreler birbiri ile uymuyor !");
          $("#signup_password").parent("p").children(".error").fadeIn("fast");
          $("#signup_confirm").parent("p").children(".error").html("Şifreler birbiri ile uymuyor !");
          $("#signup_confirm").parent("p").children(".error").fadeIn("fast");

        }

      }

    });

    if(!error) {


      if($("#" + formid).attr('func') != ' ') {


        var att = $("#" + formid).attr('func');
        if(typeof att !== 'undefined') eval(att + "()");
        else {
          error = true;
          // Error Message Form Error
        }


      } else {

        $("#" + formid).submit();


      }


    };

    return false;

  });