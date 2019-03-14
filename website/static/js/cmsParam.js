(function () {
  // Document on load.
  $(function(){
    let params = new URLSearchParams(window.location.search);
    let fromCms = params.get("fromCms") === "true";
    if(fromCms){
      $('.fixedHeaderContainer').hide();
      $('#docsNav').hide();
      $('.navPusher').removeClass('navPusher');
      $('.docs-prevnext').hide();
      $('#footer').hide();
    }
  });

}());