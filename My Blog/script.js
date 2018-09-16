$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active');
    });
    $('.toggle').dblclick(function(){
        $('ul').toggleClass('active');
    });
    $('.share').draggable({containment: 'window'});
});

window.addEventListener('DOMContentLoaded', function(){
        QueryLoader2(document.querySelector("body"),{
        barColor: "#efefef",
        backgroundColor: "#111",
        percentage: true,
        barHeight: 1,
        minimumTime: 2000,
        fadeOutTime: 1000
    });
});
