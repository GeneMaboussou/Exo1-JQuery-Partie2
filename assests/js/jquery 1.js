// 1ere méthode
// j'ai dû utiliser deux images avec des tailles différentes; au survol de l'image1, l'image 2 remplace l'image1. Ca fait un effet de faux zoom


// $(function () {

//     $('#myLogo').hover(function () {
//         $('#myLogo').attr('src', 'assests/image/logo2.png');
//     },
//         function () {
//             $('#myLogo').attr('src', 'assests/image/logo.png');

//         });
// });



// 2e méthode
// Appel de la fonction zoom au survol de l'image. Je cible l'image grâce à l'ID image 


// $(document).ready(function () {

//     $('#myLogo').mouseover(zoom);
//     $('#myLogo').mouseout(originScale);

// function zoom(){
// $('#myLogo').css('width','3500px');
// }
// function originScale(){
//     $('#myLogo').css('width','1200px')
// }
// });



// 3e méthide
// Appel de la fonction zoom au survol de l'image. j'ai ciblé la balise 'img' à la place de l'ID image, mouseover réalise l'effet zoom, mouseout rappel l'image à la taille initiale. 


$(document).ready(function () {

    $('img').mouseover(function () {

        // $(this).width('3500px');
        // $(this).width(3500);
        $(this).css('width', '3500px');
    });
    $('img').mouseout(function () {
        $(this).css('width', '1200px');
    });
});