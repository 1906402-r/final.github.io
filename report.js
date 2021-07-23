

const Barlabels = ['walking', 'jogging', 'running', 'swimming', 'training'];

const Bardata = {
  labels: Barlabels,
  datasets: [{
    label: 'Dataset',
    data: [180, 250, 400, 800, 150],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)'
      ],
    borderWidth: 1
  }]
};

var Barconfig = {
    type: 'bar',
    data: Bardata,
    options: {},
};

var Barchart = new Chart(
    document.getElementById('Barchart'),
    Barconfig,
);


var random = Math.floor(Math.random()*5);
    console.log(random);

function チャレンジ () {
    var message = "";

    if (random == 0) {
            message = "今日は24時までに寝よう";
        }
        else if (random == 1) {
            message = "今日のスマホは22時までに";
        }
        else if (random == 2) {
            message = "今日は30分ジョギングしよう";
        }
        else if (random == 3) {
            message = "ご飯を食べたら1時間ウォーキングしよう";
        }
        else if (random == 4) {
            message = "今週は1週間体重記録をつけてみよう";
        }

    alert(message);
}