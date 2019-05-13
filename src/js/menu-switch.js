var menuModalWindow = document.querySelector(".overlay");
var menuModal = document.querySelector(".menu-modal");
var itemInfoModal = document.querySelector(".item-info-modal");
var menuCloseButton = document.querySelector(".header__menu-close-button--mobile");
var menuButton = document.querySelector(".header__menu-button--mobile");
var bodyBlock = document.querySelector("body");

/**
 * This function is used to show menu fo 320px wide devices.
 * @param  {function} ) {               "use strict";
 * @return {[boolean]} 
 */
menuButton.onclick = (function() {
    "use strict";
    menuModalWindow.style.display = "block";
    itemInfoModal.style.display = "none";
    menuModal.style.display = "block";
    menuButton.style.display = "none";
    menuCloseButton.style.display = "inline-block";
    bodyBlock.style.overflow = "hidden";
})();

/**
 * This function is used to hide menu fo 320px wide devices.
 * @param  {function} ) {               "use strict";
 * @return {boolean}
 */
menuCloseButton.onclick = (function() {
    "use strict";
    menuModalWindow.style.display = "none";
    menuCloseButton.style.display = "none";
    menuButton.style.display = "inline-block";
    bodyBlock.style.overflow = "initial";
})();
