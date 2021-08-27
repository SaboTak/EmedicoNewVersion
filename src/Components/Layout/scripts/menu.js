import Velocity from "velocity-animate";

(function (cash) {
    "use strict";

    // Side Menu
    cash(".side-menu").on("click", function () {
        if (cash(this).parent().find("ul").length) {
            if (
                cash(this).parent().find("ul").first()[0].offsetParent !== null
            ) {
                cash(this)
                    .find(".side-menu__sub-icon")
                    .removeClass("transform rotate-180");
                cash(this).removeClass("side-menu--open");
                Velocity(cash(this).parent().find("ul").first(), "slideUp", {
                    duration: 300,
                    complete: function (el) {
                        cash(el).removeClass("side-menu__sub-open");
                    },
                });
            } else {
                cash(this)
                    .find(".side-menu__sub-icon")
                    .addClass("transform rotate-180");
                cash(this).addClass("side-menu--open");
                Velocity(cash(this).parent().find("ul").first(), "slideDown", {
                    duration: 300,
                    complete: function (el) {
                        cash(el).addClass("side-menu__sub-open");
                    },
                });
            }
        }
    });
})(cash);


import tippy, { roundArrow } from "tippy.js";

(function (cash) {
    "use strict";

    // Side menu tooltips
    let initTooltips = (function tooltips() {
        cash(".side-menu").each(function () {
            if (this._tippy == undefined) {
                let content = cash(this)
                    .find(".side-menu__title")
                    .html()
                    .replace(/<[^>]*>?/gm, "")
                    .trim();
                tippy(this, {
                    content: content,
                    arrow: roundArrow,
                    animation: "shift-away",
                    placement: "right",
                });
            }

            if (
                cash(window).width() <= 1260 ||
                cash(this).closest(".side-nav").hasClass("side-nav--simple")
            ) {
                this._tippy.enable();
            } else {
                this._tippy.disable();
            }
        });

        return tooltips;
    })();

    window.addEventListener("resize", () => {
        initTooltips();
    });
})(cash);
