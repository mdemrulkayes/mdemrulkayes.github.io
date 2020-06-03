(function($){
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {

        PopulateProjectArea();

        $('.preloader').delay(500).fadeOut(500);
    });
    
    //==== Populate projects
    function PopulateProjectArea() {
        var projectSource = '';
        $.each(projects, function (index, project) {
            projectSource += '<div class="col-lg-4 col-md-6 col-sm-6">'+
            '<div class="single-work text-center mt-30">'+
                '<div class="work-image">'+
                    '<img src="'+project.DisplayImageUrl+'" alt="'+project.DisplayImageUrl+'">'+
               '</div>'+
                '<div class="work-overlay">'+
                    '<div class="work-content">'+
                        '<h3 class="work-title">'+project.Title+'</h3>'+
                        '<ul>'+
                            '<li><a class="image-popup" data-title="'+project.Title+'"><i class="lni-eye"></i></a></li>'+
                        '</ul>'+
                   '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
        });

        $('#projectArea').append(projectSource);
    }

    $('body').on('click','.image-popup',function () {
        ModalPopup($(this).data('title'));
    });

    function ModalPopup(title) {
        InitializeModalControl();
        var projectDetails = projects.find(x => x.Title === title);
        
        $('#modal_projectImage').attr('src',projectDetails.ModalImageUrl);
        $('#modal_porjectTitle').html(projectDetails.Title);
        $('#modal_ProjectDescription').html(projectDetails.ProjectDetails);

        var tagHtml = '';

        $.each(projectDetails.ProjectTags,function(index,tag){
            tagHtml += '<span class="badge badge-pill badge-secondary p-10 mr-10">'+tag+'</span>'
        })

        $('#tagArea').html(tagHtml);

        $('#modalProjectDetails').modal('show');
    }

    function InitializeModalControl() {
        $('#modal_projectImage').attr('src','#');
        $('#modal_porjectTitle').html('');
        $('#modal_ProjectDescription').html('');
        $('#tagArea').html('');
    }

    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
    
    
    // Parallaxmouse js
    
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };
    parallaxMouse();
    
    
    //===== Progress Bar
    
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    }
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });
    
    
    //===== Magnific Popup
    
    // $('.image-popup').magnificPopup({
    //   type: 'image',
    //   gallery:{
    //     enabled:true
    //   }
    // });

    // $('body').on('click','.image-popup', function(){
    //         $('#modalIMG').modal('show');
    // });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    

    
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
}(jQuery));