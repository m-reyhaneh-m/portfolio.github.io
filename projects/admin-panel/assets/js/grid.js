$(document).ready(function () {
  function removeAllSidebarToggleClass() {
    $("#sidebar-toggle-show").removeClass("d-inline");
    $("#sidebar-toggle-show").removeClass("d-md-none");
    $("#sidebar-toggle-hide").removeClass("d-none");
    $("#sidebar-toggle-hide").removeClass("d-md-inline");
  }
  $("#sidebar-toggle-hide ").click(function (e) {
    $("#sidebar").fadeOut(300);
    $("#main-body").animate({ width: "100%" }, 300);
    setTimeout(() => {
      removeAllSidebarToggleClass();
      $("#sidebar-toggle-hide").addClass("d-none");
      $("#sidebar-toggle-show").removeClass("d-none");
    }, 300);
  });
  $("#sidebar-toggle-show ").click(function (e) {
    $("#sidebar").fadeIn(300);
    removeAllSidebarToggleClass();
    $("#sidebar-toggle-show").addClass("d-none");
    $("#sidebar-toggle-hide").removeClass("d-none");
  });

  $("#menu-toggle").click(function (e) {
    $("#body-header").toggle(300);
  });

  $("#search-toggle").click(function (e) {
    $("#search-toggle").removeClass("d-md-inline");
    $("#search-area").addClass("d-md-inline");
    $("#search-input").animate({ width: "12rem" }, 500);
  });

  $("#search-area-hide").click(function (e) {
    $("#search-input").animate({ width: "0" }, 400);
    setTimeout(() => {
      $("#search-area").removeClass("d-md-inline");
      $("#search-toggle").addClass("d-md-inline");
    }, 400);
  });

  $("#header-notification-toggle").click(function (e) {
    $("#header-notification").fadeToggle();
  });
  $("#header-comment-toggle").click(function (e) {
    $("#header-comment").fadeToggle();
  });
  $("#header-avatar-toggle").click(function (e) {
    $("#header-avatar").fadeToggle();
  });
  $(".sidebar-group-link").click(function (e) {
    $(".sidebar-group-link").removeClass("sidebar-group-link-active");
    $(".sidebar-group-link")
      .children(".sidebar-dropdown-toggle")
      .children(".angle")
      .removeClass("fa-angle-down");
    $(".sidebar-group-link")
      .children(".sidebar-dropdown-toggle")
      .children(".angle")
      .addClass("fa-angle-left");
    $(this).addClass("sidebar-group-link-active");
    $(this)
      .children(".sidebar-dropdown-toggle")
      .children(".angle")
      .removeClass("fa-angle-left");
    $(this)
      .children(".sidebar-dropdown-toggle")
      .children(".angle")
      .addClass("fa-angle-down");
  });
});
$("#full-screen").click(function (e) {
  toggleFullScreen();
});

function toggleFullScreen() {
  if (
    (document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullscreen) {
      document.documentElement.mozRequestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
    $("#screen-compress").removeClass("d-none");
    $("#screen-expand").addClass("d-none");
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
    $("#screen-compress").addClass("d-none");
    $("#screen-expand").removeClass("d-none");
  }
}
