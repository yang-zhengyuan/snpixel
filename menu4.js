$(document).ready(function(){
    $('#vcf').on('change', function() {
      if ( this.value == '3')
      {
        $("#vcfnotfound").hide()
        $("#pic1").show();
        $("#strat").show();
      }
      else
      {
        $("#vcfnotfound").show()
        $("#strat").hide();
        $("#pic1").hide();
      }
    });

    $('#nf2').on('change', function() {
      if ( this.value == '1')
      {
        $("#fig1").show();
        $("#evaluate").show();
        $("#pic1").hide();
      }
      else
      {
        $("#fig1").hide();
        $("#evaluate").hide();
      }
    });

    $('#do').on('change', function() {
      if ( this.value == '1')
      {
        $("#fig1").hide();
        $("#fig2").show();
      }
      else
      {
        $("#fig2").hide();
      }
    });
});