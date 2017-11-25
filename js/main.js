// var hamburger-menu-link = document.getElementById('block')
// var button = document.getElementById('button')

$(document).ready(function(){
    // $(".nav").toggleClass('nav--visible');
    $(".hamburger-menu-link").click(function(){
    $(".hamburger-menu-link_img").toggleClass('hamburger-menu-link_img--visible')
    $(".nav").toggleClass('nav--visible');
    $(".wrapper").toggleClass('wrapper--closed');
    });
});

$(document).ready(function(){
        $(".hamburger-menu-link").click(function(){
         $(".header__menu").toggleClass('header__menu--visible');
    });
});


$(document).ready(function(){
    $(".hamburger-menu-link").click(function(){
        console.log('ok')
           $(".header__logo ").toggleClass('header__logo--visible');
    });
});



$(document).ready(function(){
    $('.team-acco__triger').click(function(){
    $('.team-acco__triger').next().removeClass('team-acco__content--visible');
    $('.team-acco__triger').removeClass('team-acco__triger--visible');
    $(this).next().toggleClass('team-acco__content--visible');
    $(this).toggleClass('team-acco__triger--visible'); 

});
});

$(document).ready(function(){
    $('.team-acco__triger').click(function(){
    $('.team-acco__content-visible').removeClass('team-acco__content--visible');
    $(this).toggleClass('team-acco__triger');  
 
});
});



$(document).ready(function(){
 $('.review__view').click(function(){
     console.log('ok')
  $('.full-review').toggleClass('full-review--visible')
    });
});


$(document).ready(function(){
 $('.full-review__close-btn').click(function(){
     console.log('ok')
  $('.full-review').removeClass('full-review--visible')
  $('.burger__composition').toggleClass('burger__composition--visible')
    });
});



// $(document).ready(function(){
//     // $('.team-acco__triger').mouseover(f_acc);
//     // // $('.team-acco__triger').mouseout(f_ac);
//     $('.team-acco__triger').on('click', f_acc);
// });
 
// function f_acc(){
//     $('.team-acco__triger').next().removeClass('team-acco__content--visible');
//     $('.team-acco__triger').removeClass('team-acco__triger--visible');
//     $(this).next().toggleClass('team-acco__content--visible');
//     $(this).toggleClass('team-acco__triger--visible'); 
// }

// function f_ac(){ 
//     $('.team-acco__triger').next().removeClass('team-acco__content--visible');
//     $('.team-acco__triger').removeClass('team-acco__triger--visible');
// }


$(document).ready(function(){
    $('.menu-acco__trigger').mouseover(f_ccc);
    $('.menu-acco__triger').mouseout(function(){
        $('.menu-acco__triger').next().removeClass('menu-acco__content--visible');
        $('.menu-acco__triger').removeClass('menu-acco__trigger--visible');

    });
});
 
function f_ccc(){
    $('.menu-acco__triger').next().removeClass('menu-acco__content--visible');
    $('.menu-acco__triger').removeClass('menu-acco__triger--visible')
    $(this).next().toggleClass('menu-acco__content--visible');
    $(this).toggleClass('menu-acco__triger--visible'); 

}

   
// $(document).ready(function(){
//     $(".composition__button").mouseover(function(){

//            $(".composition__table").toggleClass('composition__table--visible');
//     });
// });

 $(document).ready(function(){
    $('.composition__button').mouseover(f_bbb);
    $('.composition__button').mouseout(f_bb); 
});

function f_bbb(){
    $('.composition__table').toggleClass('composition__table--visible');
}

function f_bb(){ 
   $('.composition__table').removeClass('composition__table--visible');
}




// $(document).ready(function(){
//     $('.menu-acco__trigger').on('click', f_ccc);
// });

// function f_ccc(){
//  $(this).next().toggleClass('menu-acco__content--visible');
//  $(this).toggleClass('menu-acco__text--visible');
  
// }


// $(document).ready(function(){
//     $('.menu-acco__trigger').on('click', f_ccc);
// });

// function f_ccc(){
//  $(this).next().toggleClass('menu-acco__content--visible');
//  $(this).toggleClass('menu-acco__text--visible');
  
// }




ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.97,
        longitude: 30.31,
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
            '</div>'
        ]
    },
    {
        latitude: 59.94,
        longitude: 30.25,
        hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
            '</div>'
        ]
    },
    {
        latitude: 59.93,
        longitude: 30.34,
        hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
            '</div>'
        ]
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/sprite.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/burger.png',
                size: [100, 100],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}