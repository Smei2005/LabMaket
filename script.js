jQuery().ready(function(){

      $( "#accodion" ).accordion();
      $( "#datepicker" ).datepicker();
      $( "#menu" ).menu();
      $('.owl-carousel').owlCarousel();

      $("#galleryTiles").unitegallery({
        gallery_theme: "tiles",
        tiles_type: "nested"
      });
});