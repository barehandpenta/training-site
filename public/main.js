let stand = 1;
let sit = 1;
let lay = 1;
let classifier;

let main = async () => {
  let mobilenet = await ml5.featureExtractor('Mobilenet');
  console.log('Mobile Is Ready');
  classifier = await mobilenet.classification();
  await trainStand();
  await trainSit();
  await trainLay();

}


let trainStand = () => {
  setInterval(async () => {
    if (stand < 362) {
      var img = document.getElementById('stand');
      await classifier.addImage(img, 'standing');
      stand++;
      var imgSrc = 'dataset/stand/stand' + stand + '.jpg';
      $("#stand").attr("src", imgSrc);
    }
  }, 1500);
}

let trainSit = () => {
  setInterval(async () => {
    if (sit<10) {
      var img = document.getElementById('sit');
      await classifier.addImage(img, 'sitting');
      catNum++;
      var imgSrc = 'dataset/sit/sit' + sit + '.jpg';
      $("#sit").attr("src", imgSrc);
    }
  }, 1500);
}

let trainLay = () => {
  setInterval(async () => {
    if (lay<10) {
      var img = document.getElementById('lay');
      await classifier.addImage(img, 'lying');
      catNum++;
      var imgSrc = 'dataset/lay/lay' + lay + '.jpg';
      $("#lay").attr("src", imgSrc);
    }
  }, 1500);
}





$(document).ready(() => {
  main();
  $("#train").click(() => {
    classifier.train(loss => {
      if (loss == null) {
        console.log("Train complete");
      }
      else {
        console.log(loss);
      }
    });
  });

  $("#guess").click(() => {
    let img = document.getElementById("guessImg");
    classifier.classify(img, (err, res) => {
      if (err) {
        console.error(err);
      }
      else {
        console.log(res);
      }
    });
  });

  $("#save").click(() => {
    classifier.save();
  });

});
