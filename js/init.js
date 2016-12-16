(function($){
  $(function(){
    var $actionBtn = $('.action-btn');
    var $sideBar = $('.side-bar');

    $actionBtn.click(function() {
      if ($actionBtn.hasClass('collapsed')) {
        $sideBar.removeClass('collapsed');
        $actionBtn.removeClass('collapsed');
        $actionBtn.text('arrow_downward');
      } else {
        $sideBar.addClass('collapsed');
        $sideBar.addClass('collapsing');
        $actionBtn.addClass('collapsed');
        setTimeout(function() {
          $actionBtn.text('view_headline');
        }, 400);
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space