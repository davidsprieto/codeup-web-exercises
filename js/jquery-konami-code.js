"use strict";

// $(document).keyup(function(event){
//     console.log(event.keyCode);
// });


function konamiCheatCode() {
    var konamiKeys = '3838404037393739666513';
    var userTyping = '';
    $(document).keyup(function(event) {
        console.log(event.keyCode);
        userTyping = userTyping + ('' + event.keyCode);
        if (userTyping === konamiKeys) {
            alert('You have unlocked 30 lives!');
            $('body').css({
                'background-image': 'url("https://cdn.vox-cdn.com/thumbor/aoQFyyKR4mHMRYArszFQr1r5VcY=/0x0:1024x768/920x613/filters:focal(431x303:593x465):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66380852/ERtzjdMUwAEsRXl.0.png")',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
            });
            $('#konami').html('Welcome to The Arcade Zone').css('text-align', 'center');

            setInterval(function () {
                $('#konami').css('color','black');
            }, 500);

            setInterval(function(){
                $('#konami').css('color','yellow');
            }, 1000);

            setInterval(function() {
                $('#konami').css('color','white');
            }, 1500);
        }
    });
}
konamiCheatCode();