var searchButton = document.querySelector(".header__search-link--mobile");
var menuList = document.querySelector(".header__search");
var contentBlockPaddingTop = document.querySelector(".content");

/**
 * This function is used to toggle search form for 320px wide devices.
 * @param  {function} ) {               "use strict";    var target Used to store search form's display css property.
 * @return {boolean}
 */
searchButton.onclick = (function() {
    "use strict";
    var target = menuList.style.display;
    if (target === "none" || target === "") {
        menuList.style.display = "block";
        contentBlockPaddingTop.style.padding = "110px 15px 210px 15px";
    } else {
        menuList.style.display = "none";
        contentBlockPaddingTop.style.padding = "40px 15px 210px 15px";
    }
})();