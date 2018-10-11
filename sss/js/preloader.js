document.body.onload=function(){

    setTimeout(function(){
        var preloader = document.getElementById('page_preloader');
        if( !preloader.classList.contains('loaded'))
        {preloader.classList.add('loaded')}
    }, 1000);
}