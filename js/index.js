// *** NAV BAR ***
    // TOGGLE BUTTON
    const navToggleBtn = $('#nav__menu-wrapper #nav__menu-toggle');
    const navLogo = $('#nav__logo');
    const navBar = $('#navbar');

    window.onscroll = function() {
        var currentPos = window.pageYOffset;
        if (currentPos === 0) {
            navBar.removeClass('bg');
        } else {
            navBar.addClass('bg');
        }
    }
    navToggleBtn.click(function(){
        navToggleBtn.toggleClass('active');
        navLogo.toggleClass('active');
        if (navToggleBtn.hasClass('active')) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible"
        }
    })
// *** BODY ***
    // FEATURES TAG
    const featureMenuItem = $('.feature-menu-item');
    const featureTagItem = $('.feature-tab-item');

    function featureTag(n) {
        var slide = -100 * n + "%";
        featureMenuItem.removeClass('active');
        featureMenuItem[n].classList.add('active');
        featureTagItem.removeClass('active');
        featureTagItem.css('transform','translateX(' + slide + ')');
        featureTagItem[n].classList.add('active');
    }
    // Q&A TAG
    const QandAItem = $('.QandA-item');
    for (let i = 0 ; i < QandAItem.length ; i++) {
        QandAItem[i].addEventListener('click',function(e){
            if (QandAItem[i].classList.contains('active')) {
                QandAItem[i].classList.remove('active')
            } else {
                QandAItem[i].classList.add('active')
            }
        })
    }
    // BANNER TAG
    const emailInput = $('#email-input');
    const emailLabel = $('.email-label');
    const emailBtn = $('#email-btn');

    function checkInput(val) {
        if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)) {
            return true;
        } else {
            return false;
        }
    }
    $('#banner-form').keypress(function(e) {
        if (e.keyCode === 13) {
            return false
        }
    })
    emailInput.keydown(function(e){
        var keyCode = e.keyCode;
        var val = emailInput.val();
        if (keyCode === 13) {
            if (checkInput(val)) {
                emailInput.val("");
                emailLabel.attr('data-status','normal');
                emailInput.attr('placeholder','Enter your email address')
            } else {
                emailLabel.attr('data-status','error');
                if (emailInput.val()==="") {
                    emailInput.attr('placeholder','example@email/com')
                }
            }
        }
    })
    emailBtn.click(function(e){
        var val = emailInput.val();
        if (checkInput(val)) {
            emailInput.val("");
            emailLabel.attr('data-status','normal');
            emailInput.attr('placeholder','Enter your email address')
        } else {
            emailLabel.attr('data-status','error');
            if (emailInput.val()==="") {
                emailInput.attr('placeholder','example@email/com')
            }
            e.preventDefault();
        }
    })