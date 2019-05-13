/**
 * This fumction is used to show modal details window after clicking certain image.
 * @param  {function} ) {
 * @return {boolean}
 */
$(document).ready(function() {
  $(".img-container").click(function() {
    $("body").css("overflow-y", "hidden");
    $(".overlay").show();
    $(".item-info-modal").show();
  });

  $(".item-info-modal__close-link").click(function() {
    $(".overlay").hide();
    $("body").css("overflow-y", "initial");
  });
});