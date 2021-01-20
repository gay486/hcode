;(function($,window,document,undefined){

    var portfolio = {
        init:   function(){
            var that = this;

                that.headerFn();
                that.sec1Fn();
                that.sec2Fn();
                that.sec2GalleryFn();
                that.sec3Fn();

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
        sec1Fn:    function(){

        },
        sec2Fn:    function(){
            var _win = $(window);
            var _htmlRoot = $('html');
            var _imgWrap = $('.modal .img-wrap');
            var _galleryImgBtn = $('#section2 .gallery-img-btn');
            var _modal = $('.modal');
            var _imgWrapImg = $('.modal .img-wrap img');
            var _closeBtnImgWrap = $('.modal .close-btn, .modal .img-wrap');
            var _arrowRightBtnImgBtn = $('.modal .arrow-right-btn, .modal .img-btn');
            var _arrowLeftBtn = $('.modal .arrow-left-btn');

        
            var _fileName = null;
            var _endNum = null;
            var _fileNum = null;    
            var _winH = 0;

                setTimeout(resizeFn,100);

                function resizeFn(){
                    _winH = _win.innerHeight();
                    _imgWrap.css({lineHeight:_winH+'px'});
                }

                _win.resize(function(){
                    resizeFn();
                });

                _galleryImgBtn.on({
                    click:  function(e){
                        var that = $(this);
                        e.preventDefault();

                        _htmlRoot.addClass('addScroll');

                        _fileName = that.find('img').attr('src');
                        _endNum = _fileName.indexOf('.jpg');
                        _fileNum = Number(_fileName.slice(_endNum-2,_endNum));

                        modalSlideFn();
                    }
                });

                function modalSlideFn(){
                    _modal.stop().fadeIn(300);
                    _imgWrapImg.stop().fadeOut(0).attr('src','./img/portfolio/portfolio-img' + _fileNum + '.jpg').fadeIn(1000);
                }

                _closeBtnImgWrap.on({
                    click:  function(){
                        _modal.stop().fadeOut(300);
                        _htmlRoot.removeClass('addScroll');
                    }
                });

                _arrowRightBtnImgBtn.on({
                    click:  function(e){
                        e.stopPropagation();
                        _fileNum++;
                        if(_fileNum>34){
                            _fileNum=26;
                        }
                        modalSlideFn();
                    }
                });

                _arrowLeftBtn.on({
                    click:  function(e){
                        e.stopPropagation();
                        _fileNum--;
                        if(_fileNum<26){
                            _fileNum=34;
                        }
                        modalSlideFn();
                    }
                });

        },
        sec2GalleryFn:    function(){
            var _gallery = $('#section2 .gallery');
            var _galleryList = $('#section2 .gallery li');
            var _galleryBtn = $('#section2 .gallery-btn');
            var _win = $(window);
            
            var _hRate = 500/800;
            var _winW = _win.innerWidth();
            var cols = 3;
            var n = $('#section2 .gallery li').length;
            var rows = Math.ceil(n/cols);
            var _imgW = _winW/cols;
            var _imgH = _imgW/cols+115;

            var hide = [];
            var show = [0,1,2,3,4,5,6,7,8];

                setTimeout(galleryFn,100);

                function galleryFn(){
                    _winW = _win.innerWidth();

                    if( _winW > 990 ){
                        cols = 3;
                    }
                    else if( _winW <= 990 && _winW > 760 ){
                        cols = 2;
                    }
                    else if( _winW <= 760 && _winW >= 0 ){
                        cols = 1;
                    }

                    n = _galleryList.length;
                    rows = Math.ceil(n/cols);

                    _imgW = _winW/cols;
                    _imgH = _imgW*_hRate+115;

                        _gallery.removeClass('addZoom');

                        _gallery.css({height:_imgH*rows});

                        for(var i=0;i<hide.length;i++){
                            _galleryList.eq(hide[i]).hide();
                        }

                        var cnt=-1;
                        for(var i=0;i<rows;i++){
                            for(var j=0;j<cols;j++){
                                cnt++;
                                if(cnt>=show.length)
                                break;
                                _galleryList.eq(show[cnt]).show().stop().animate({ top:(_imgH*i), left:(_imgW*j), width:_imgW, height:_imgH },300);
                            }
                        }
                        _gallery.addClass('addZoom');
                }

                _win.resize(function(){
                    galleryFn();
                });

                _galleryBtn.each(function(idx){
                    var that = $(this);
                        that.on({
                            click: function(e){
                                e.preventDefault();

                                _galleryBtn.removeClass('addNav');
                                that.addClass('addNav');

                                switch(idx){
                                    case 0:
                                        hide = [];
                                        show = [0,1,2,3,4,5,6,7,8];
                                        break;
                                    case 1:
                                        hide = [4,6];
                                        show = [0,1,2,3,5,7,8];
                                        break;
                                    case 2:
                                        hide = [0,3,6,7,8];
                                        show = [1,2,4,5];
                                        break;
                                    case 3:
                                        hide = [1,7,8];
                                        show = [0,2,3,4,5,6];
                                        break;
                                    default:
                                        hide = [0,2,6,7,8];
                                        show = [1,3,4,5];
                                }

                                galleryFn();
                            }
                        });
                });
        },
        sec3Fn:    function(){
            var _win = $(window);
            var _sec2 = $('#section2');
            var _sec3 = $('#section3');

                _win.scroll(function(){
                    var that = $(this);
                    if(that.scrollTop() >= _sec2.offset().top+100){
                        _sec3.addClass('addScroll');
                    }
                    if(that.scrollTop() < _sec2.offset().top+100){
                        _sec3.removeClass('addScroll');
                    }
                });
        }
    };

    portfolio.init();

})(jQuery,window,document);