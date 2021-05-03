;(function(window,document,$,undefined){

    var hcodeCenter = {
        init:   function(){
            var that = this;

                that.headerFn();
                that.sec01Fn();
                that.sec02Fn();
                that.sec03Fn();
                that.sec04Fn();
                that.sec04GalleryFn();
                that.sec05Fn();
                that.sec06Fn();
                that.sec07Fn();
                that.sec08Fn();
                that.sec09Fn();
                that.sec10Fn();
                that.sec11Fn();
        },
        headerFn:   function(){
            var smoothBtn = $('.smooth-btn');
            var htmlBody = $('html,body');
            var mobileMenu = $('.mobile-menu');
            var mobileBtn = $('.mobile-btn');
            var win = $(window);
            var header = $('#header');
            var goTop = $('.goTop');
            var _wheelEvent = $('.wheel-event');
            var _shopCart = $('.shop-cart1');
            var _list = $(".list1");

            var winW = win.innerWidth();
            var url = null;
            var t=0;

                smoothBtn.on({
                    click: function(){
                        var that = $(this);
                        
                        url = that.attr('href');
                        htmlBody.stop().animate({ scrollTop: $(url).offset().top},600);
                        t=0;
                        mobileMenu.stop().animate({right:-100+'%'},0);
                        mobileBtn.removeClass('addClose');
                    }
                });

                win.scroll(function(){
                    if( win.scrollTop() >= 30 ){
                        header.addClass('addMobile');
                        goTop.addClass('addGoTop');
                    }
                    else{
                        header.removeClass('addMobile');
                        goTop.removeClass('addGoTop');
                    }
                });

                win.resize(function(){
                    winW = win.innerWidth();
                    if( winW>990 ){
                        t=0;
                        mobileBtn.removeClass('addClose');
                        mobileMenu.stop().animate({right:-100+'%'},400);
                    }
                });

                mobileBtn.on({
                    click: function(e){
                        var that = $(this);
                        e.preventDefault();
                        that.toggleClass('addClose');
                        if(t==0){
                            t=1;
                            mobileMenu.stop().animate({right:0},400);
                        }
                        else{
                            t=0;
                            mobileMenu.stop().animate({right:-100+'%'},400);
                        }
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
                                    header.addClass('addMousewheel');
                                    if(idx < n-1){
                                        if(idx == n-2){
                                            htmlBody.stop().animate({scrollTop:that.parent().next().offset().top},600);
                                        }
                                        else{
                                            htmlBody.stop().animate({scrollTop:that.next().offset().top},600);
                                        }
                                    }
                                }
                                else{
                                    header.removeClass('addMousewheel');
                                    if(idx > 0){    
                                        if(idx == n-1){
                                            htmlBody.stop().animate({scrollTop:that.prev().find('.wheel-event').last().offset().top},600);
                                        }
                                        else{
                                            htmlBody.stop().animate({scrollTop:that.prev().offset().top},600);
                                        }
                                    }
                                }
                    });
                });


        },
        sec01Fn:    function(){
            var _win = $(window);
            var section01 = $('#section01');
            var _slide1 = $('#section01 .content-main1 li');
            var _slide2 = $('#section01 .content-main2 li');
            var _1Slide = $('#section01 .slide');
            var _2Slide = $('#section01 .slide2');


            var cnt = 0;
            var winH = 969;
            var winW = _win.innerWidth();
            var n = $('#section01 .slide').length-1;
            var imgRate = 0.1;
            var imgRate2 = 0.07;
            var imgRate3 = 0.05;
            var li1W = _slide1.eq(0).innerWidth();
            var li2W = _slide1.eq(1).innerWidth();
            var li3W = _slide1.eq(2).innerWidth();
            var li4W = _slide1.eq(3).innerWidth();
            var li5W = _slide1.eq(4).innerWidth();
            var li1H = li1W*0.629590766;
            var li2H = li2W*1.027777778;
            var li3H = li3W*1.190476198;
            var li4H = li4W*1;
            var li5H = li5W*0.590643275;
            var border2 = li2W*0.041666667;
            var border3 = li3W*0.071428572;

                function resizeFn(){
                    li1W = _slide1.eq(0).innerWidth();
                    li2W = _slide1.eq(1).innerWidth();
                    li3W = _slide1.eq(2).innerWidth();    
                    li4W = _slide1.eq(3).innerWidth();
                    li5W = _slide1.eq(4).innerWidth();
                    li1H = li1W*0.629590766;               
                    li2H = li2W*1.027777778;
                    li3H = li3W*1.190476190;
                    li4H = li4W*1;
                    li5H = li5W*0.590643275;
                    border2 = li2W*0.041666667;
                    border3 = li3W*0.071428571;
                    _slide1.eq(0).css({height:li1H});
                    _slide1.eq(1).css({height:li2H,borderWidth:border2});
                    _slide1.eq(2).css({height:li3H,borderWidth:border3});
                    _slide1.eq(3).css({height:li4H});
                }
        
                _win.resize(function(){
                    resizeFn();
                });
                setTimeout(resizeFn,100);

                section01.on('mousemove',function(e){

                    _slide1.eq(0).stop().animate({top:181.5+(-e.clientY*imgRate2), left:651.5+(-e.clientX*imgRate2)},200,'swing');
                    _slide1.eq(1).stop().animate({top:104.5+(-e.clientY*imgRate3), left:561.5+(-e.clientX*imgRate3)},200,'swing');
                    _slide1.eq(2).stop().animate({top:224.5+(-e.clientY*imgRate3), left:711.5+(-e.clientX*imgRate3)},200,'swing');
                    _slide1.eq(3).stop().animate({top:71.5+(-e.clientY*imgRate), left:847.5+(-e.clientX*imgRate)},200,'swing');
                    _slide1.eq(4).stop().animate({top:12.5+(-e.clientY*imgRate), left:1163.5+(-e.clientX*imgRate)},200,'swing');
                    _slide1.eq(5).stop().animate({top:391.5+(-e.clientY*imgRate2), left:1332.5+(-e.clientX*imgRate2)},200,'swing');
                    _slide1.eq(6).stop().animate({top:668.5+(-e.clientY*imgRate2), left:1094.5+(-e.clientX*imgRate2)},200,'swing');
                    _slide1.eq(7).stop().animate({top:345.5+(-e.clientY*imgRate2), left:332.5+(-e.clientX*imgRate2)},200,'swing');
                    _slide1.eq(8).stop().animate({top:423.5+(-e.clientY*imgRate2), left:325.5+(-e.clientX*imgRate2)},200,'swing');
                    _slide1.eq(9).stop().animate({top:140.5+(-e.clientY*imgRate), left:344.5+(-e.clientX*imgRate)},200,'swing');
                    _slide1.eq(10).stop().animate({top:528.5+(-e.clientY*imgRate), left:112.5+(-e.clientX*imgRate)},200,'swing');
                    _slide1.eq(11).stop().animate({top:404.5+(-e.clientY*imgRate), left:(-e.clientX*imgRate)},200,'swing');
                    _slide1.eq(12).stop().animate({top:704.5+(-e.clientY*imgRate), left:(-e.clientX*imgRate)},200,'swing');

                    _slide2.eq(0).stop().animate({top:134.5+(-e.clientY*imgRate2), left:451.5+(-e.clientX*imgRate2)},200,'swing');
                    _slide2.eq(1).stop().animate({top:104.5+(-e.clientY*imgRate3), left:561.5+(-e.clientX*imgRate3)},200,'swing');
                    _slide2.eq(2).stop().animate({top:224.5+(-e.clientY*imgRate3), left:711.5+(-e.clientX*imgRate3)},200,'swing');
                    _slide2.eq(3).stop().animate({top:65.5+(-e.clientY*imgRate), left:874.5+(-e.clientX*imgRate)},200,'swing');
                    _slide2.eq(4).stop().animate({top:12.5+(-e.clientY*imgRate), left:1163.5+(-e.clientX*imgRate)},200,'swing');
                    _slide2.eq(5).stop().animate({top:391.5+(-e.clientY*imgRate2), left:1332.5+(-e.clientX*imgRate2)},200,'swing');
                    _slide2.eq(6).stop().animate({top:668.5+(-e.clientY*imgRate2), left:1094.5+(-e.clientX*imgRate2)},200,'swing');
                    _slide2.eq(7).stop().animate({top:345.5+(-e.clientY*imgRate2), left:332.5+(-e.clientX*imgRate2)},200,'swing');
                    _slide2.eq(8).stop().animate({top:423.5+(-e.clientY*imgRate2), left:325.5+(-e.clientX*imgRate2)},200,'swing');
                    _slide2.eq(9).stop().animate({top:140.5+(-e.clientY*imgRate), left:344.5+(-e.clientX*imgRate)},200,'swing');
                    _slide2.eq(10).stop().animate({top:528.5+(-e.clientY*imgRate), left:112.5+(-e.clientX*imgRate)},200,'swing');
                    _slide2.eq(11).stop().animate({top:404.5+(-e.clientY*imgRate), left:(-e.clientX*imgRate)},200,'swing');
                    _slide2.eq(12).stop().animate({top:704.5+(-e.clientY*imgRate), left:(-e.clientX*imgRate)},200,'swing');

                });

                section01.on('mouseleave',function(e){

                    _slide1.eq(0).stop().animate({top:181.5+(-e.clientY*0), left:651.5+(-e.clientX*0)},200,'swing');
                    _slide1.eq(1).stop().animate({top:104.5+(-e.clientY*0), left:561.5+(-e.clientX*0)},200,'swing');
                    _slide1.eq(2).stop().animate({top:224.5+(-e.clientY*0), left:711.5+(-e.clientX*0)},200,'swing');
                    _slide1.eq(3).stop().animate({top:71.5+(-e.clientY*0), left:847.5+(-e.clientX*0)},200,'swing');
                    _slide1.eq(4).stop().animate({top:12.5+(-e.clientY*0), left:1163.5+(-e.clientX*0)},200,'swing');
                    _slide1.eq(5).stop().animate({top:391.5+(-e.clientY*0), left:1332.5+(-e.clientX*0)},200,'swing');
                    _slide1.eq(6).stop().animate({top:668.5+(-e.clientY*0), left:1094.5+(-e.clientX*0)},200,'swing');
                    _slide1.eq(7).stop().animate({top:345.5+(-e.clientY*0), left:332.5+(-e.clientX*0)},200,'swing');
                    _slide1.eq(8).stop().animate({top:423.5+(-e.clientY*0), left:325.5+(-e.clientX*0)},200,'swing');
                    _slide1.eq(9).stop().animate({top:140.5+(-e.clientY*0), left:344.5+(-e.clientX*0)},200,'swing');
                    _slide1.eq(10).stop().animate({top:528.5+(-e.clientY*0), left:112.5+(-e.clientX*0)},200,'swing');
                    _slide1.eq(11).stop().animate({top:404.5+(-e.clientY*0), left:(-e.clientX*0)},200,'swing');
                    _slide1.eq(12).stop().animate({top:704.5+(-e.clientY*0), left:(-e.clientX*0)},200,'swing');

                    _slide2.eq(0).stop().animate({top:134.5+(-e.clientY*0), left:451.5+(-e.clientX*0)},200,'swing');
                    _slide2.eq(1).stop().animate({top:104.5+(-e.clientY*0), left:561.5+(-e.clientX*0)},200,'swing');
                    _slide2.eq(2).stop().animate({top:224.5+(-e.clientY*0), left:711.5+(-e.clientX*0)},200,'swing');
                    _slide2.eq(3).stop().animate({top:65.5+(-e.clientY*0), left:874.5+(-e.clientX*0)},200,'swing');
                    _slide2.eq(4).stop().animate({top:12.5+(-e.clientY*0), left:1163.5+(-e.clientX*0)},200,'swing');
                    _slide2.eq(5).stop().animate({top:391.5+(-e.clientY*0), left:1332.5+(-e.clientX*0)},200,'swing');
                    _slide2.eq(6).stop().animate({top:668.5+(-e.clientY*0), left:1094.5+(-e.clientX*0)},200,'swing');
                    _slide2.eq(7).stop().animate({top:345.5+(-e.clientY*0), left:332.5+(-e.clientX*0)},200,'swing');
                    _slide2.eq(8).stop().animate({top:423.5+(-e.clientY*0), left:325.5+(-e.clientX*0)},200,'swing');
                    _slide2.eq(9).stop().animate({top:140.5+(-e.clientY*0), left:344.5+(-e.clientX*0)},200,'swing');
                    _slide2.eq(10).stop().animate({top:528.5+(-e.clientY*0), left:112.5+(-e.clientX*0)},200,'swing');
                    _slide2.eq(11).stop().animate({top:404.5+(-e.clientY*0), left:(-e.clientX*0)},200,'swing');
                    _slide2.eq(12).stop().animate({top:704.5+(-e.clientY*0), left:(-e.clientX*0)},200,'swing');

                });

            
            function mainNextSlideFn(){
                _2Slide.removeClass('addSlide');
                _1Slide.eq(cnt+1).css({top:0});
                _1Slide.css({top:0}).animate({opacity:1},0);
                _1Slide.eq(cnt == 0 ? n : cnt-1).animate({opacity:1,top:0},0).animate({opacity:0,top:2000},300, 'swing');
                _2Slide.addClass('addSlide');
            }

            function nextCntFn(){
                cnt++;
                if(cnt>n){cnt=0;}
                mainNextSlideFn();
            }
   
            // setInterval(nextCntFn,5000);

        },
        sec02Fn:    function(){

        },
        sec03Fn:    function(){
            var _win = $(window);
            var _sec03 = $('#section03');

                _win.scroll(function(){
                    var that = $(this);
                    if(that.scrollTop() >= 50){
                        _sec03.addClass('addScroll');
                    }
                    else{
                        _sec03.removeClass('addScroll');
                    }
                });

                var win = $(window);
                var winW = win.innerWidth();
                var imgRight = $('#section03 .right-wrap');
                var rightH = imgRight.innerHeight();
                var rightW = imgRight.innerWidth();
                var fontRateH2 = 0.079822;
                var fontRateP = 0.031042;
                var fontSizeH2 = fontRateH2 * rightW;
                var fontSizeP = fontRateP * rightW;
                var sec3H2 = $('#section03 h2');
                var sec3P = $('#section03 p');


                    function resizeFn(){
                        winW = win.innerWidth();
                        rightH = imgRight.innerHeight();
                        rightW = imgRight.innerWidth();
                        fontSizeH2 = fontRateH2 * rightW;
                        fontSizeP = fontRateP * rightW;
    
                        fontSizeH2>36 ? fontSizeH2=36:fontSizeH2;
                        fontSizeH2<33 ? fontSizeH2=33:fontSizeH2;
    
                        fontSizeP>14 ? fontSizeP=14:fontSizeP;
                        fontSizeP<11 ? fontSizeP=11:fontSizeP;
                        
                        sec3H2.css({fontSize:fontSizeH2});
                        sec3P.css({fontSize:fontSizeP});
    
                    }
                    win.resize(function(){
                        resizeFn();
                    });
        },
        sec04Fn:    function(){
            var win = $(window);
            var htmlRoot = $('html');
            var imgWrap = $('.modal .img-wrap');
            var galleryImgBtn = $('#section04 .gallery-img-btn');
            var modal = $('.modal');
            var imgWrapImg = $('.modal .img-wrap img');
            var closeBtnImgWrap = $('.modal .close-btn, .modal .img-wrap');
            var arrowRightBtnImgBtn = $('.modal .arrow-right-btn, .modal .img-btn');
            var arrowLeftBtn = $('.modal .arrow-left-btn');

        
            var fileName = null;
            var endNum = null;
            var fileNum = null;    
            var winH = 0;

                setTimeout(resizeFn,100);

                function resizeFn(){
                    winH = win.innerHeight();
                    imgWrap.css({lineHeight:winH+'px'});
                }

                win.resize(function(){
                    resizeFn();
                });

                galleryImgBtn.on({
                    click:  function(e){
                        e.preventDefault();

                        htmlRoot.addClass('addScroll');

                        fileName = $(this).find('img').attr('src');
                        endNum = fileName.indexOf('.jpg');
                        fileNum = Number(fileName.slice(endNum-2,endNum));

                        modalSlideFn();
                    }
                });

                function modalSlideFn(){
                    modal.stop().fadeIn(300);
                    imgWrapImg.stop().fadeOut(0).attr('src','./img/portfolio-img' + fileNum + '.jpg').fadeIn(1000);
                }

                closeBtnImgWrap.on({
                    click:  function(){
                        modal.stop().fadeOut(300);
                        htmlRoot.removeClass('addScroll');
                    }
                });

                arrowRightBtnImgBtn.on({
                    click:  function(e){
                        e.stopPropagation();
                        fileNum++;
                        if(fileNum>64){
                            fileNum=57;
                        }
                        modalSlideFn();
                    }
                });

                arrowLeftBtn.on({
                    click:  function(e){
                        e.stopPropagation();
                        fileNum--;
                        if(fileNum<57){
                            fileNum=64;
                        }
                        modalSlideFn();
                    }
                });
        },
        sec04GalleryFn: function(){
            var gallery = $('#section04 .gallery');
            var galleryList = $('#section04 .gallery li');
            var galleryBtn = $('#section04 .gallery-btn');
            var win = $(window);

            var hRate = 358/480;
            var winW = win.innerWidth();
            var cols = 4;
            var n = galleryList.length;
            var rows = Math.ceil(n/cols);
            var imgW = winW/cols;
            var imgH = imgW*hRate;

            var hide = [];
            var show = [0,1,2,3,4,5,6,7];

                setTimeout(galleryFn,100);
            
                function galleryFn(){
                    winW = win.innerWidth();

                    if( winW > 1200 ){
                        cols = 4;
                    }
                    else if( winW <= 1200 && winW > 990 ){
                        cols = 3;
                    }
                    else if( winW <= 990 && winW > 760 ){
                        cols = 2;
                    }
                    else if( winW <= 760 && winW >= 0 ){
                        cols = 1;
                    }

                    n = galleryList.length;
                    rows = Math.ceil(n/cols);
                    imgW = winW/cols;
                    imgH = imgW*hRate;

                        gallery.css({ height:imgH*rows });

                        for(var i=0; i<hide.length; i++){
                            galleryList.eq(hide[i]).hide();
                        }

                        var cnt=-1;
                        for(var i=0; i<rows; i++){
                            for(var j=0; j<cols; j++){
                                cnt++;
                                if(cnt>=show.length)
                                break;
                                galleryList.eq(show[cnt]).show().stop().animate({ top:(imgH*i), left:(imgW*j), width:imgW, height:imgH },300);
                            }
                        }
                }
                win.resize(function(){
                    galleryFn();
                });

                galleryBtn.each(function(idx){
                    var that = $(this);
                        that.on({
                            click:  function(e){
                                e.preventDefault();

                                galleryBtn.removeClass('addNav');
                                that.addClass('addNav');

                                switch(idx){
                                    case 0:
                                        hide = [];
                                        show = [0,1,2,3,4,5,6,7];
                                        break;
                                    case 1:
                                        hide = [0,1,4,7];
                                        show = [2,3,5,6];
                                        break;
                                    case 2:
                                        hide = [3,4];
                                        show = [0,1,2,5,6,7];
                                        break;
                                    case 3:
                                        hide = [2,5,7];
                                        show = [0,1,3,4,6];
                                        break;
                                    default:
                                        hide = [0,3,5];
                                        show = [1,2,4,6,7];
                                }

                                galleryFn();
                            }
                        });
                });

        },
        sec05Fn:    function(){
            var _win = $(window);
            var _sec04 = $('#section04');
            var _sec05 = $('#section05');

                _win.scroll(function(){
                    var that = $(this);
                    if(that.scrollTop() >= _sec04.offset().top+100){
                        _sec05.addClass('addScroll');
                    }
                    if(that.scrollTop() < _sec04.offset().top+100){
                        _sec05.removeClass('addScroll');
                    }
                });
 
        },
        sec06Fn:    function(){
            var win = $(window);
            var winW = win.innerWidth();
            var slideW = 1903;
            var cnt = 0;
            var z = cnt;
            var nextBtn = $('#section06 .next-btn');
            var prevBtn = $('#section06 .prev-btn');
            var slideWrap = $('#section06 .slide-wrap');
            var slide = $('#section06 .slide');
            var pageWrapLi = $('.page-wrap li');
            var pageBtn = $('.page-btn');
            var sec6Left = $('#section06 .left');
            var rightH = sec6Left.innerHeight();
            var rightW = sec6Left.innerWidth();
            var fontRateH2 = 0.021019;
            var fontRateH3 = 0.011560;
            var fontRateP = 0.013662;
            var fontRateSpan = 0.084077;
            var fontSizeH2 = fontRateH2 * rightW;
            var fontSizeH3 = fontRateH3 * rightW;
            var fontSizeP = fontRateP * rightW;
            var fontSizeSpan = fontRateSpan * rightW;
            var sec6Right = $('#section06 .right');
            var sec6Span = $('#section06 .num-wrap span');
            var sec6H2 = $('#section06 .txt-wrap h2');
            var sec6H3 = $('#section06 .txt-wrap h3');
            var sec6P = $('#section06 .txt-wrap p');



                function resizeFn(){
                    winW = win.innerWidth();
                    rightH = sec6Left.innerHeight();
                    rightW = sec6Left.innerWidth();
                    fontSizeH2 = fontRateH2 * rightW;
                    fontSizeH3 = fontRateH3 * rightW;
                    fontSizeP = fontRateP * rightW;
                    fontSizeSpan = fontRateSpan * rightW;

                    fontSizeH2>20 ? fontSizeH2=20:fontSizeH2;
                    fontSizeH2<17 ? fontSizeH2=17:fontSizeH2;

                    fontSizeH3>11 ? fontSizeH3=11:fontSizeH3;
                    fontSizeH3<8 ? fontSizeH3=8:fontSizeH3;
                    
                    fontSizeP>13 ? fontSizeP=13:fontSizeP;
                    fontSizeP<10 ? fontSizeP=10:fontSizeP;
                    
                    fontSizeSpan>80 ? fontSizeSpan=80:fontSizeSpan;
                    fontSizeSpan<75 ? fontSizeSpan=75:fontSizeSpan;

                    sec6Right.css({height:rightH});
                    sec6Span.css({fontSize:fontSizeSpan});
                    sec6H2.css({fontSize:fontSizeH2});
                    sec6H3.css({fontSize:fontSizeH3});
                    sec6P.css({fontSize:fontSizeP});
                    
                    if( winW > 1903 ){
                        slideW = 1903;
                    }
                    else{
                        slideW = winW;
                    }
                    slide.css({width:slideW});  
                    slideWrap.css({width:slideW*3});
                    slideWrap.stop().animate({ left:(-slideW*cnt) },300);
                    //slide.css({width:winW});
                    
                }

                win.resize(function(){
                    resizeFn();
                });

                function mainSlideFn(){
                    slideWrap.stop().animate({ left:(-slideW*cnt) },1000, 'easeOutExpo');
                    cnt>2?z=0:z=cnt;
                    pageBtnFn();
                }

                function nextCountFn(){
                    cnt++;
                    if(cnt>2)
                    cnt=2;
                    mainSlideFn();
                }

                function prevCountFn(){
                    cnt--;
                    if(cnt<0)
                    cnt=0;
                    mainSlideFn();
                }

                nextBtn.on({
                    click:  function(){
                        nextCountFn();
                    }
                });

                prevBtn.on({
                    click:  function(){
                        prevCountFn();
                    }
                });

                slideWrap.swipe({
                    swipeLeft:  function(){
                        nextCountFn();
                    },
                    swipeRight: function(){
                        prevCountFn();
                    }
                });

                function pageBtnFn(){
                    pageWrapLi.removeClass('addPage');
                    pageWrapLi.eq(z).addClass('addPage');
                }

                pageBtn.each(function(idx){
                    $(this).on({
                        click:  function(){
                            cnt=idx;
                            mainSlideFn();
                        }
                    });
                });


        },
        sec07Fn:    function(){
            var _win = $(window);
            var _sec05 = $('#section05');
            var _sec07 = $('#section07');

                _win.scroll(function(){
                    var that = $(this);
                    if(that.scrollTop() >= _sec05.offset().top+50){
                        _sec07.addClass('addScroll');
                    }
                    if(that.scrollTop() < _sec05.offset().top+50){
                        _sec07.removeClass('addScroll');
                    }
                });
        },
        sec08Fn:    function(){
            var _win = $(window);
            var _sec06 = $('#section06');
            var _sec08 = $('#section08');

                _win.scroll(function(){
                    var that = $(this);
                    if(that.scrollTop() >= _sec06.offset().top+50){
                        _sec08.addClass('addScroll');
                    }
                    if(that.scrollTop() < _sec06.offset().top+50){
                        _sec08.removeClass('addScroll');
                    }
                });
        },
        sec09Fn:    function(){
            var _win = $(window);
            var _sec08 = $('#section08');
            var _sec09 = $('#section09');

                _win.scroll(function(){
                    var that = $(this);
                    if(that.scrollTop() >= _sec08.offset().top+10){
                        _sec09.addClass('addScroll');
                    }
                    if(that.scrollTop() < _sec08.offset().top+10){
                        _sec09.removeClass('addScroll');
                    }
                });
        },
        sec10Fn:    function(){
            var _win = $(window);
            var _sec09 = $('#section09');
            var _sec10 = $('#section10');

                _win.scroll(function(){
                    var that = $(this);
                    if(that.scrollTop() >= _sec09.offset().top+10){
                        _sec10.addClass('addScroll');
                    }
                    if(that.scrollTop() < _sec09.offset().top+10){
                        _sec10.removeClass('addScroll');
                    }
                });

        },
        sec11Fn:    function(){
            var _win = $(window);
            var _h5 = $('#section11 h5');
            var _titleWrap = $('#section11 .title-wrap');
            
            var _containerW = _titleWrap.innerWidth();
            var _fontSizeH5 = _containerW * 0.012142238;

                setTimeout(resizeFn,100);

                function resizeFn(){
                    _containerW = _titleWrap.innerWidth();
                    _fontSizeH5 = _containerW * 0.012142238;

                    if(_fontSizeH5<11){_fontSizeH5=11;}

                    _h5.css({fontSize:_fontSizeH5});
                }

                _win.resize(function(){
                    resizeFn();
                });

                var _win = $(window);
                var _sec10 = $('#section10');
                var _sec11 = $('#section11');
    
                    _win.scroll(function(){
                        var that = $(this);
                        if(that.scrollTop() >= _sec10.offset().top+10){
                            _sec11.addClass('addScroll');
                        }
                        if(that.scrollTop() < _sec10.offset().top+10){
                            _sec11.removeClass('addScroll');
                        }
                    });
        }
    };

    hcodeCenter.init();



})(window,document,jQuery);