var $imageStack = $(".image-stack");
$imageStack.click(function () {
  $(".image-stack__item1")
    .toggleClass("image-stack__item--top")
    .toggleClass("image-stack__item--bottom");
  $(".image-stack__item2")
    .toggleClass("image-stack__item--bottom")
    .toggleClass("image-stack__item--top");
});

$(function () {
  $(document).ready(function () {
    var $wa = $("#wa-button");
    setTimeout(function () {
      $wa.removeClass("initialRender");
    }, 3800);
  });
});
