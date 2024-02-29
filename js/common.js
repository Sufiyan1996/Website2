
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

var mainSlider = new Swiper(".mySwiper2", {
  parallax: true,
  speed: 1200,
  effect: 'slide',
  direction: "vertical",
  autoplay: true,
  navigation: {
    nextEl: '.upk-button-next',
    prevEl: '.upk-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle></svg></span>';
    },
  },
});

// hero-slider
jQuery(document).ready(function ($) {
  $('.hero').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: !0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          draggable: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          draggable: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          draggable: true,
          slidesToScroll: 1
        }
      }

    ]
  });
});


// filter div code
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterSection-2");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "filterSection-2-Show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "filterSection-2-Show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btnFilterDiv");
var btns = btnContainer.getElementsByClassName("btnFilter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
     $(".btnFilter").removeClass("active");
    // current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

 // Initialize the map
 var map = L.map('map').setView([19.0760, 72.8777], 13); // Mumbai coordinates

 // Add a tile layer (OpenStreetMap)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Add a marker to the map
 L.marker([19.0760, 72.8777]).addTo(map) // Mumbai coordinates
   .bindPopup('Mumbai, India');

  

   $(document).ready(function() {
    // Initialize Waypoint for the image
    $(".image").waypoint(
        function(direction) {
            if (direction === "down") {
                // Execute animation when the image enters the viewport
                $(".cell").each(function(index) {
                    // Delay each cell animation based on its index
                    $(this).delay(index * 50).animate({
                        opacity: 1
                    }, 500); // Adjust animation speed as needed
                });
            }
        },
        {
            offset: "100%" // Trigger animation when the bottom of the image reaches the top of the viewport
        }
    );
});