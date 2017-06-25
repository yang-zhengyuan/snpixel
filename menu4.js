$(document).ready(function(){
    $('#data').on('change', function() {
      if ( this.value == '1')
      {
        $("#data1").show();
        $("#pic1").show();
      }
      else
      {
        $("#data1").hide();
        $("#pic1").show();
      }
    });

    $('#gene').on('change', function() {
      if ( this.value == '1')
      {
        $("#protein1").show();
      }
      else
      {
        $("#protein1").hide();
      }
    });
});