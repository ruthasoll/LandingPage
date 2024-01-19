// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 300) {
//           $(".black").css("background" , "blue");
//         }
  
//         else{
//             $(".black").css("background" , "#333");  	
//         }
//     })
//   })      

// const navbar = document.getElementById('navbar');

// window.addEventListener('scroll', function() {
//   if (window.scrollY > 0) {
//     navbar.style.backgroundColor = '#333';
//     navbar.style.color = '#fff';
//   } else {
//     navbar.style.backgroundColor = 'transparent';
//     navbar.style.color = '#000';
//   }
// });

// navbar.addEventListener('mouseover', function() {
//   navbar.style.backgroundColor = '#f2f2f2';
// });

// navbar.addEventListener('mouseout', function() {
//   if (window.scrollY === 0) {
//     navbar.style.backgroundColor = 'transparent';
//     navbar.style.color = '#000';
//   } else {
//     navbar.style.backgroundColor = '#333';
//     navbar.style.color = '#fff';
//   }
// });

const navbar = document.getElementById('navbar');
const footer = document.querySelector('footer');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = '#333';
    navbar.style.color = 'yellow';
    footer.style.backgroundColor = 'yellow';
    footer.style.color = '#333';
  } else {
    navbar.style.backgroundColor = 'yellow';
    navbar.style.color = '#333';
    footer.style.backgroundColor = '#333';
    footer.style.color = 'yellow';
  }
});

navbar.addEventListener('mouseover', function() {
  navbar.style.backgroundColor = '#333';
  navbar.style.color = 'yellow';
});

navbar.addEventListener('mouseout', function() {
  if (window.scrollY === 0) {
    navbar.style.backgroundColor = 'yellow';
    navbar.style.color = '#333';
  } else {
    navbar.style.backgroundColor = '#333';
    navbar.style.color = 'yellow';
  }
});

// const navbar = document.getElementById('navbar');
// const section = document.querySelector('section');

// window.addEventListener('scroll', function() {
//   if (window.scrollY > 0) {
//     navbar.style.transition = 'background-color 0.5s ease';
//     navbar.style.backgroundColor = '#333';
//     navbar.style.color = 'yellow';
//     section.style.transition = 'background-color 0.5s ease';
//     section.style.backgroundColor = 'yellow';
//     section.style.color = '#333';
//   } else {
//     navbar.style.transition = 'background-color 0.5s ease';
//     navbar.style.backgroundColor = 'yellow';
//     navbar.style.color = '#333';
//     section.style.transition = 'background-color 0.5s ease';
//     section.style.backgroundColor = '#333';
//     section.style.color = 'yellow';
//   }
// });

// navbar.addEventListener('mouseover', function() {
//   navbar.style.transition = 'background-color 0.5s ease';
//   navbar.style.backgroundColor = '#333';
//   navbar.style.color = 'yellow';
// });

// navbar.addEventListener('mouseout', function() {
//   if (window.scrollY === 0) {
//     navbar.style.transition = 'background-color 0.5s ease';
//     navbar.style.backgroundColor = 'yellow';
//     navbar.style.color = '#333';
//   } else {
//     navbar.style.transition = 'background-color 0.5s ease';
//     navbar.style.backgroundColor = '#333';
//     navbar.style.color = 'yellow';
//   }
// });