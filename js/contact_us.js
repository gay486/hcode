;(function(window,document,$,undefined){

    var contact_us = {
        init:   function(){
            var that = this;

                that.headerFn();
                that.sec01Fn();
                that.sec02Fn();
                that.sec03Fn();
                that.sec04Fn();
                that.sec05Fn();
                
        },
        headerFn:   function(){
            var _smoothBtn = $('.smooth-btn');
            var _htmlBody = $('html,body');
            var _mobileMenu = $('.mobile-menu');
            var _mobileBtn = $('.mobile-btn');
            var _win = $(window);
            var _header = $('#header');
            var _goTop = $('.goTop');
            var _mainBtn = $('.main-btn');
            var _subBtn = $('.sub-btn');
            var _moMainBtn = $('.mobile-main-btn');
            var _moSubBtn = $('.mobile-sub-btn');
            var _shopCart = $('.shop-cart');
            var _list = $(".list");
            var _wheelEvent = $('.wheel-event');

            var _winW = _win.innerWidth();
            var url = null;
            var t=0;

                _smoothBtn.on({
                    click: function(){
                        var that = $(this);
                        
                        url = that.attr('href');
                        _htmlBody.stop().animate({ scrollTop: $(url).offset().top},600);
                        t=0;
                        _mobileMenu.stop().animate({right:-100+'%'},0);
                        _mobileBtn.removeClass('addClose');
                    }
                });

                _win.scroll(function(){
                    if( _win.scrollTop() >= 30 ){
                        _header.addClass('addMobile');
                        _goTop.addClass('addGoTop');
                    }
                    else{
                        _header.removeClass('addMobile');
                        _goTop.removeClass('addGoTop');
                    }
                });

                _win.resize(function(){
                    _winW = _win.innerWidth();
                    if( _winW>990 ){
                        t=0;
                        _mobileBtn.removeClass('addClose');
                        _mobileMenu.stop().animate({right:-100+'%'},400);
                    }
                });

                _mobileBtn.on({
                    click: function(e){
                        var that = $(this);
                        e.preventDefault();
                        that.toggleClass('addClose');
                        if(t==0){
                            t=1;
                            _mobileMenu.stop().animate({right:0},400);
                        }
                        else{
                            t=0;
                            _mobileMenu.stop().animate({right:-100+'%'},400);
                        }
                    }
                });

                _mainBtn.on({
                    click:  function(e){
                        var that = $(this);
                        e.preventDefault();
                        that.next().stop().slideToggle(600,'swing');
                    }
                });

                _subBtn.on({
                    click:  function(e){
                        var that = $(this);
                        e.preventDefault();
                        that.next().stop().slideToggle(600,'swing');
                    }
                });

                _moMainBtn.on({
                    click:  function(e){
                        var that = $(this);
                        e.preventDefault();
                        that.next().stop().slideToggle(600,'swing');
                    }
                });

                _moSubBtn.on({
                    click:  function(e){
                        var that = $(this);
                        e.preventDefault();
                        that.next().stop().slideToggle(600,'swing');
                    }
                });

                _shopCart.on({
                    click: function(e){
                        e.preventDefault();
                        _list.stop().slideToggle(400,'swing');
                    }
                });

                var _wheelDelta = null;
                var n = $('.wheel-event').length;

                _wheelEvent.each(function(idx){
                    var that = $(this);
                    that.on('mousewheel DOMMouseScroll', function(e){
                        e.preventDefault();

                            if(e.detail){
                                _wheelDelta = e.detail*-40;
                            }
                            else{
                                _wheelDelta = e.originalEvent.wheelDelta;
                            }
                                if(_wheelDelta < 0){
                                    _header.addClass('addMousewheel');
                                    if(idx < n-1){
                                        if(idx == n-2){
                                            _htmlBody.stop().animate({scrollTop:that.parent().next().offset().top},600);
                                        }
                                        else{
                                            _htmlBody.stop().animate({scrollTop:that.next().offset().top},600);
                                        }
                                    }
                                }
                                else{
                                    _header.removeClass('addMousewheel');
                                    if(idx > 0){
                                        if(idx == n-1){
                                            _htmlBody.stop().animate({scrollTop:that.prev().find('.wheel-event').last().offset().top},600);
                                        }
                                        else{
                                            _htmlBody.stop().animate({scrollTop:that.prev().offset().top},600);
                                        }
                                    }
                                }
                    });
                });

        },
        sec01Fn:    function(){
            
        },
        sec02Fn:    function(){
            
        },
        sec03Fn:    function(){
            
        },
        sec04Fn:    function(){
            
        },
        sec05Fn:    function(){
            var setId=0;
            
            var _irum = $('#irum');
            var _mail = $('#mail');
            var _message = $('#message');
            var _submit = $('#submit');
            var _successMessage = $('.success-message');
            var _errorMessage = $('.error-message');
            var _ajaxLoader = $('.ajax-loader');
            var _ajaxResponse = $('.ajax-response');

            _irum.on({
                focus:  function(){
                    _successMessage.removeClass('addSuccess');
                }
            });

            _submit.on({
                click:  function(e){
                    e.preventDefault();

                    _errorMessage.removeClass('addError');
                    _successMessage.removeClass('addSuccess');

                    var irumVal = _irum.val();
                    var mailVal = _mail.val();
                    var messageVal = _message.val();
                    var cnt=0;

                    var regExpName = /^[a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣\s]+$/;
                    var regExpMail = /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9]([.]?[a-zA-Z])*.[a-zA-Z]{2,3}$/i;
                    var regExpMessage = /\w/;

                    _ajaxLoader.addClass('addAjax');

                    setId = setInterval(function(){
                        cnt++;
                        if(cnt>=1){
                            clearInterval(setId);
                            _ajaxLoader.removeClass('addAjax');
                            formSubmitFn();
                        }
                    },1000);

                            function formSubmitFn(){

                                if( regExpName.test(_irum.val()) === false ||
                                    regExpMail.test(_mail.val()) === false ||
                                    regExpMessage.test(_message.val()) === false ){
                                    
                                    if( regExpName.test(_irum.val()) === false ){
                                        _irum.addClass('addError');
                                    }
                                    else{
                                        _irum.removeClass('addError');
                                    }
                                    if( regExpMail.test(_mail.val()) === false ){
                                        _mail.addClass('addError');
                                    }
                                    else{
                                        _mail.removeClass('addError');
                                    }
                                    if( regExpMessage.test(_message.val()) === false ){
                                        _message.addClass('addError');
                                    }
                                    else{
                                        _message.removeClass('addError');
                                    }

                                    _errorMessage.addClass('addError');
                                    return false;
                                }
                                else{
                                    
                                    _irum.removeClass('addError');
                                    _mail.removeClass('addError');
                                    _message.removeClass('addError');
                                    _errorMessage.removeClass('addError');

                                    $.ajax({
                                        url:'./response.php',
                                        type:'post',
                                        data:{
                                            irum: irumVal,
                                            mail: mailVal,
                                            message: messageVal
                                        },
                                        success: function(data){
                                            _ajaxResponse.html(data);

                                            _successMessage.addClass('addSuccess');

                                            _irum.val('');
                                            _mail.val('');
                                            _message.val('');
                                        },
                                        error: function(){
                                            console.log('AJAX 오류!!!');
                                        }
                                    });
                                }
                            }
                }
            });
        },
    };

    contact_us.init();

})(window,document,jQuery);