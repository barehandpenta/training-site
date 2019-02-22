let dogNum = 1;
let catNum = 1;

let autoClick = async () => {
  setTimeout(() => {
    for (var i = 0; i < 10; i++) {
      $("#dogBtn").trigger('click');
    }
  }, 1000);
}


$(document).ready(() => {
  $("#dogBtn").click(() => {
    if (dogNum<10) {
      var img = document.getElementById('dogImg');
      dogNum++;
      var imgSrc = 'dataset/dog/dog' + dogNum + '.jpg';
      $("#dogImg").attr("src", imgSrc);
    }
  });

  $("#catBtn").click(() => {
    if (catNum<10) {
      var img = document.getElementById('catImg');
      catNum++;
      var imgSrc = 'dataset/cat/cat' + catNum + '.jpg';
      $("#catImg").attr("src", imgSrc);
    }
  });

  autoClick();
});
