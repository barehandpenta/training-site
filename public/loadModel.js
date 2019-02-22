var mobilenet = ml5.featureExtractor('Mobilenet', () => console.log('Model is ready'));
var classifier = mobilenet.classification();
classifier.load('model.json',() => console.log("Custom model loaded"));

$(document).ready(() => {
  $("#guess").click(() => {
    var img = document.getElementById('catImg');
    classifier.classify(img, (err, result) => {
      if (err) {
        console.error(err);
      }
      else {
        console.log(result);
      }
    });
  });
});
