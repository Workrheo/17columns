! function(e) {
    "use strict";

    function s() {
        var s = e(".navigation-holder"),
            n = e(".navbar-header .open-btn"),
            i = e(".close-right-menu-btn");
        n.on("click", function() { return s.hasClass("slideInn") || (s.addClass("slideInn"), e(".open-btn-icon-menu").addClass("hide"), i.removeClass("hide"), e("body").css("overflow", "hidden")), !1 }), i.on("click", function() { return s.hasClass("slideInn") && (s.removeClass("slideInn"), e(".open-btn-icon-menu").removeClass("hide"), i.addClass("hide"), e("body").css("overflow", "scroll")), !1 })
    }

    function n() {
        var s = e(".navigation-holder-icon-menu"),
            n = e(".navbar-header .open-btn-icon-menu"),
            i = e(".close-left-menu-btn");
        n.on("click", function() { return s.hasClass("slideInn-menuIcon") || (s.addClass("slideInn-menuIcon"), e(".open-btn").addClass("hide"), i.removeClass("hide"), e("body").css("overflow", "hidden")), !1 }), i.on("click", function() { return s.hasClass("slideInn-menuIcon") && (s.removeClass("slideInn-menuIcon"), e(".open-btn").removeClass("hide"), i.addClass("hide"), e(".icon-sub-menu-description").addClass("hideMenu"), e("body").css("overflow", "scroll")), !1 })
    }

    function i() { e(".icon-Submenu").on("click", function(s) { s.preventDefault(), e(this).next(".icon-sub-menu-description").removeClass("hideMenu"), e(this).next(".icon-sub-menu-description").css("left", "0") }), e(".closeIconSubMenu").on("click", function(s) { s.preventDefault(), e(this).parents(".icon-sub-menu-description").addClass("hideMenu") }) }

    function t() {
        var s = window.innerWidth,
            n = e("#navbar > ul");
        s <= 991 ? n.addClass("small-nav") : n.removeClass("small-nav")
    }

    function a() {
        var s = window.innerWidth,
            n = e(".navigation-holder"),
            i = e(".navigation-holder > .small-nav"),
            t = i.find(".sub-menu"),
            a = i.find(".mega-menu"),
            o = i.find(".menu-item-has-children > a");
        s <= 991 ? (t.hide(), a.hide(), o.on("click", function(s) { e(this).siblings().slideToggle(), s.preventDefault(), s.stopImmediatePropagation() })) : s > 991 && (n.find(".sub-menu").show(), n.find(".mega-menu").show())
    }
    s(), n(), i(), t(), a(),
        function() {
            if (e(".hero-slider").length) {
                var s = e(".pagi-info");
                e(".hero-slider").on("init reInit afterChange", function(e, n, i, t) {
                    var a = (i || 0) + 1;
                    if (a < 10 && (a = "0" + a), n.slideCount < 10) var o = "0" + n.slideCount;
                    else o = n.slideCount;
                    s.text(a + " / " + o)
                }), e(".hero-slider").slick({ autoplay: !0, autoplaySpeed: 6e3, arrows: !0, dots: !0, speed: 1e3, cssEase: "cubic-bezier(.4,.72,.22,.99)", draggable: !0 })
            }
        }();
    var o, r, l = new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0 });

    function c() {
        if (e(".sortable-gallery .gallery-filters").length) {
            var s = e(".gallery-container");
            s.isotope({ filter: "*", animationOptions: { duration: 750, easing: "linear", queue: !1 } }), e(".gallery-filters li a").on("click", function() { e(".gallery-filters li .current").removeClass("current"), e(this).addClass("current"); var n = e(this).attr("data-filter"); return s.isotope({ filter: n, animationOptions: { duration: 750, easing: "linear", queue: !1 } }), !1 })
        }
    }
    e(".fancybox").length && e(".fancybox").fancybox({ openEffect: "elastic", closeEffect: "elastic", wrapCSS: "project-fancybox-title-style" }), e(".video-btn").length && e(".video-btn").on("click", function() { return e.fancybox({ href: this.href, type: e(this).data("type"), title: this.title, helpers: { title: { type: "inside" }, media: {} }, beforeShow: function() { e(".fancybox-wrap").addClass("gallery-fancybox") } }), !1 }), e(".popup-gallery").length && e(".popup-gallery").magnificPopup({ delegate: "a", type: "image", gallery: { enabled: !0 }, zoom: { enabled: !0, duration: 300, easing: "ease-in-out", opener: function(e) { return e.is("img") ? e : e.find("img") } } }), c(), e(".site-header .navigation").length && (o = e(".site-header .navigation"), r = "sticky-header", o.addClass("original").clone().insertAfter(o).addClass(r).removeClass("original"));
    if (e(".header-style-1").length) {
        var u = e(".navigation-holder > ul .menu-item-has-children > a");
        u.parent();
        u.on("click", function(s) {
            s.preventDefault();
            var n = e(this);
            n.next(".sub-menu").toggleClass("open-submenu"), n.parent().siblings().find(".sub-menu").removeClass("open-submenu")
        });
        var d = e(".header-style-1 .navigation-holder"),
            m = e(".header-style-1 .menu-open-btn"),
            p = e(".header-style-1 .close-navbar-2");
        m.on("click", function() { d.addClass("open-navigation-menu") }), p.on("click", function() { d.removeClass("open-navigation-menu") })
    }
    if (e(".header-style-1").length) {
        var h = e(".navigation-holder-1 > ul .menu-item-has-children > a");
        h.parent();
        h.on("click", function(s) {
            s.preventDefault();
            var n = e(this);
            n.next(".sub-menu").toggleClass("open-submenu"), n.parent().siblings().find(".sub-menu").removeClass("open-submenu")
        });
        var g = e(".header-style-1 .navigation-holder-1"),
            f = e(".header-style-1 .menu-open-btn-1"),
            v = e(".header-style-1 .close-navbar");
        f.on("click", function() { g.addClass("open-navigation-menu") }), v.on("click", function() { g.removeClass("open-navigation-menu") })
    }
    if (e(".mini-cart").length) {
        var b = e(".cart-toggle-btn"),
            y = e(".mini-cart-content"),
            w = e("body");
        b.on("click", function(e) { y.toggleClass("mini-cart-content-toggle"), e.stopPropagation() }), w.on("click", function() { y.removeClass("mini-cart-content-toggle") }).find(y).on("click", function(e) { e.stopPropagation() })
    }
    if (e(".header-search-form-wrapper").length) {
        var C = e(".search-toggle-btn"),
            q = e(".header-search-form");
        w = e("body");
        C.on("click", function(e) { q.toggleClass("header-search-content-toggle"), e.stopPropagation() }), w.on("click", function() { q.removeClass("header-search-content-toggle") }).find(q).on("click", function(e) { e.stopPropagation() })
    }
    e(".service-slider").length && e(".service-slider").owlCarousel({ smartSpeed: 500, margin: 5, loop: !0, autoplayHoverPause: !0, dots: !1, nav: !0, navText: ['<i class="fi flaticon-slim-left"></i>', '<i class="fi flaticon-slim-right"></i>'], responsive: { 0: { items: 1 }, 550: { items: 2 } } }), e(".projects-slider").length && e(".projects-slider").owlCarousel({ loop: !0, autoplay: !0, autoplayTimeout: 2e3, autoplayHoverPause: !0, dots: !1, nav: !0, items: 1, stagePadding: 50, margin: 50, smartSpeed: 1e3, navText: ['<i class="ti-arrow-left"></i>  &nbsp;  &nbsp; ', '<i class="ti-arrow-right"></i>'], responsive: { 0: { items: 1, margin: 15 }, 550: { items: 2 }, 992: { items: 3 }, 1200: { items: 3 }, 1600: { items: 3 } } }), e(".projects-slider-s2").length && e(".projects-slider-s2").owlCarousel({ loop: !1, autoplayHoverPause: !0, responsive: { 0: { items: 1 }, 550: { items: 4 }, 992: { items: 4 }, 1200: { items: 4 }, 1600: { items: 5 } } }), e(".testimonial-slider".length) && e(".testimonial-slider").owlCarousel({ mouseDrag: !1, smartSpeed: 1e3, loop: !0, items: 1, autoplay: !0, autoplayHoverPause: !0 }), e(".testimonial-slider-s2").length && e(".testimonial-slider-s2").owlCarousel({ smartSpeed: 300, margin: 30, loop: !0, autoplayHoverPause: !0, nav: !0, navText: ["PREV  &nbsp; / &nbsp; ", "NEXT"], dots: !1, responsive: { 0: { items: 1 }, 992: { items: 2 } } }), e(".partners-slider").length && e(".partners-slider").owlCarousel({ autoplay: !0, smartSpeed: 300, margin: 30, loop: !0, autoplayHoverPause: !0, dots: !1, responsive: { 0: { items: 2 }, 550: { items: 3 }, 992: { items: 4 }, 1200: { items: 4 } } }), e(".odometer").length && (e(".odometer").appear(), e(document.body).on("appear", ".odometer", function(s) {
        e(".odometer").each(function() {
            var s = e(this).attr("data-count");
            e(this).html(s)
        })
    })), e(".project-single-slider".length) && e(".project-single-slider").owlCarousel({ mouseDrag: !1, smartSpeed: 1e3, loop: !0, items: 1, dots: !1, nav: !0, navText: ['<i class="fi flaticon-slim-left"></i>', '<i class="fi flaticon-slim-right"></i>'] }), e("input[name='product-count']").length && e("input[name='product-count']").TouchSpin({ verticalbuttons: !0 }), e(".shop-single-slider").length && (e(".slider-for").slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !1, fade: !0, asNavFor: ".slider-nav" }), e(".slider-nav").slick({ slidesToShow: 4, slidesToScroll: 1, asNavFor: ".slider-for", focusOnSelect: !0, prevArrow: '<i class="nav-btn nav-btn-lt ti-arrow-left"></i>', nextArrow: '<i class="nav-btn nav-btn-rt ti-arrow-right"></i>', responsive: [{ breakpoint: 500, settings: { slidesToShow: 3, infinite: !0 } }, { breakpoint: 400, settings: { slidesToShow: 2 } }] })), e(".post-slider".length) && e(".post-slider").owlCarousel({ mouseDrag: !1, smartSpeed: 1e3, loop: !0, nav: !0, navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'], dots: !1, items: 1 }), e("#contact-form").length && e("#contact-form").validate({ rules: { name: { required: !0, minlength: 4 }, mobile: { required: !0, minlength: 10 }, email: "required", persons: "required", subject: "required", training_date: "required", request_type: "required" }, messages: { name: "Please enter your name", email: "Please enter your email address", mobile: "Please enter your mobile number", subject: "Please enter contact subject", persons: "Please enter number of persons", training_date: "Please select the date", request_type: "Please select the request type" }, submitHandler: function(s) { return e.ajax({ type: "POST", url: "send-request.php", data: e(s).serialize(), success: function() { e("#success").slideDown("slow"), e(".preloader").html("<div class='successDiv'><h2 class='text-white'>Successfully sent request enquiry</h2></div>"), e(".preloader").css("display", "block"), setTimeout(function() { e(".preloader").css("display", "none") }, 3e3), s.reset() }, error: function() { e("#success").slideDown("slow"), e(".preloader").html("<div class='successDiv'><h2 class='text-white'>Oops! Something went wrong.</h2></div>"), e(".preloader").css("display", "block"), setTimeout(function() { e(".preloader").css("display", "none") }, 3e3), s.reset() } }), !1 } }), e("#contact-form-request").length && e("#contact-form-request").validate({ rules: { name: { required: !0, minlength: 4 }, mobile: { required: !0, minlength: 10 }, email: "required", persons: "required", subject: "required", training_date: "required", request_type: "required" }, messages: { name: "Please enter your name", email: "Please enter your email address", mobile: "Please enter your mobile number", subject: "Please enter contact subject", persons: "Please enter number of persons", training_date: "Please select the date", request_type: "Please select the request type" }, submitHandler: function(s) { return e.ajax({ type: "POST", url: "send-request-all.php", data: e(s).serialize(), success: function() { e("#success").slideDown("slow"), e(".preloader").html("<div class='successDiv'><h2 class='text-white'>Successfully sent request enquiry</h2></div>"), e(".preloader").css("display", "block"), setTimeout(function() { e(".preloader").css("display", "none") }, 3e3), s.reset() }, error: function() { e("#success").slideDown("slow"), e(".preloader").html("<div class='successDiv'><h2 class='text-white'>Oops! Something went wrong.</h2></div>"), e(".preloader").css("display", "block"), setTimeout(function() { e(".preloader").css("display", "none") }, 3e3), s.reset() } }), !1 } }), e("#upload-form").length && e("#upload-form").validate({ rules: { name: { required: !0, minlength: 4 }, mobile: { required: !0, minlength: 10, number: !0 }, email: "required", persons: "required", subject: "required", highest_education: "required", resume: "required" }, messages: { name: "Please enter your name", email: "Please enter your email address", mobile: "Please enter your mobile number", subject: "Please enter contact subject", resume: "Please upload your resume", highest_education: "Please enter your highest education" }, submitHandler: function(e) { return e.submit(), !1 } }), e("select").change(function() { e("select").css("color", "#555"); var s, n = this.value; "sample" == n && (s = "Request a sample"), "training" == n && (s = "Request a training"), "site-visit" == n && (s = "Request a site visit"), "service-support" == n && (s = "Request a service support"), "order-status" == n && (s = "Request of order status "), e(".selectMessage").val(s) }), e(window).on("load", function() {
        e(".preloader").length && e(".preloader").delay(100).fadeOut(500, function() { l.init() }), e(".hero-slider .slide").length && e(".hero-slider .slide").each(function() {
            var s = e(this),
                n = s.find(".slider-bg").attr("src");
            s.find(".slider-image").css({ backgroundImage: "url(" + n + ")", backgroundSize: "cover", backgroundPosition: "center center" })
        }), s(), n(), i(), a(), c()
    }), e(window).on("scroll", function() {
        var s, n, i;
        e(".site-header").length && (s = e(".site-header .navigation"), n = "sticky-on", i = e(window).scrollTop(), e(".site-header .navigation"), e(window).scrollTop() > 500 ? s.addClass(n) : s.removeClass(n), i)
    }), e(window).on("resize", function() { t(), clearTimeout(e.data(this, "resizeTimer")), e.data(this, "resizeTimer", setTimeout(function() { a() }, 200)) })
}(window.jQuery), $(document).ready(function() { $(".model-popup-body img").height($(window).height() - 135) }), $(".viewDesign").on("click", function() {});
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function(a) {
    function b(a) { return h.raw ? a : encodeURIComponent(a) }

    function c(a) { return h.raw ? a : decodeURIComponent(a) }

    function d(a) { return b(h.json ? JSON.stringify(a) : String(a)) }

    function e(a) { 0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { a = decodeURIComponent(a.replace(g, " ")) } catch (b) { return } try { return h.json ? JSON.parse(a) : a } catch (b) {} }

    function f(b, c) { var d = h.raw ? b : e(b); return a.isFunction(c) ? c(d) : d }
    var g = /\+/g,
        h = a.cookie = function(e, g, i) {
            if (void 0 !== g && !a.isFunction(g)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setDate(k.getDate() + j)
                }
                return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                var p = m[n].split("="),
                    q = c(p.shift()),
                    r = p.join("=");
                if (e && e === q) { l = f(r, g); break }
                e || void 0 === (r = f(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function(b, c) { return void 0 !== a.cookie(b) ? (a.cookie(b, "", a.extend({}, c, { expires: -1 })), !0) : !1 }
});

// Modal script
(function($) {
    
    $(function() {


        $('a[data-modal-id]').click(function(e) {
            
            var appendthis = ("<div class='modal-overlay js-modal-close'></div>");
            e.preventDefault();
            $("body").append(appendthis);
            $("body").addClass('preventScroll');
            $(".modal-overlay").fadeTo(500, 0.9);
            $(".modal-overlay").addClass('bg-over');
            //$(".js-modalbox").fadeIn(500);
            var modalBox = $(this).attr('data-modal-id');
            $('#' + modalBox).fadeIn($(this).data());
            // Show a specific class when opened
            $('#' + modalBox).addClass('opened');
            if (($('.modal-box.opened').find('video').attr('autoplay') === 'autoplay')) {
                $('video').prop('muted', false);
                $('.modal-box.opened').find('video').get(0).play();
            }
        });

        $(".js-modal-close, .modal-overlay").click(function() {
            $(".modal-box, .modal-overlay").fadeOut(500, function() {
                $(".modal-overlay").remove();
            });
            // Remove the specific class
            $('.modal-box').removeClass('opened');
            $(".modal-overlay").removeClass('bg-over');
            $("body").removeClass('preventScroll');
            // Stop the video from playing
            $('.modal-box').find('video').each(function() {
                $(this).get(0).pause();
                var vid = document.getElementById("v1");
                vid.currentTime = 0;
                $('video').prop('muted', true);
            });
        });

        $(window).resize(function() {
            $(".modal-box").css({
                //top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
                //left: ($(window).width() - $(".modal-box").outerWidth()) / 2

                top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
                left: ($(window).width() - $(".modal-box").outerWidth()) / 2

            });
        });

        $(window).resize();
        
        $('.alphabets').keyup(function() { this.value = this.value.replace(/[^a-z A-Z\.]/g, ''); });
        $('.numbers').keyup(function() { this.value = this.value.replace(/[^0-9\.]/g, ''); });
        $('input,textarea').bind("cut copy paste", function(e) {
            e.preventDefault();
        });
        $('.preventSpecialChar').keyup(function() {
            var $th = $(this);
            $th.val($th.val().replace(/[^.,:a-zA-Z0-9 \r\n]/g,
                function(str) {
                    return '';
                }));
        });
        $('.preventInvalidUrl').keyup(function() {
            var $th = $(this);
            $th.val($th.val().replace(/[^-/@.:_a-zA-Z0-9\r\n]/g,
                function(str) {
                    return '';
                }));
        });

    });
})(jQuery);

$('#thumbs img').hover(function(){
    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','banner'));
    //$('#description').html($(this).attr('alt'));
});