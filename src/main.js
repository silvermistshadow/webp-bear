import $ from 'jquery';
import './styles.css';
import { Bear } from './Bear';
import { type } from 'os';

$(document).ready(function() {
  let myKey = process.env.API_KEY;
  let fuzzy = new Bear("Fuzzy");
  $("#bear-form").show();
  $("#bear-form").submit(function(event) {
    event.preventDefault();
    fuzzy.name = $("input#bear-name").val();
    let difficulty = $("#bear-diff").val();
    fuzzy.interval = fuzzy.setDifficulty(difficulty);
    fuzzy.setHunger(fuzzy.interval);
    $("#bear-form").hide();
    $("#game-area").show();
    $("#game-over").hide();
    $("#game-name").text(fuzzy.name);
    $("button#feed-small").click(function () {
      fuzzy.feed(5);
    })
    $("button#feed-normal").click(function () {
      fuzzy.feed(10);
    })
    $("button#feed-large").click(function () {
      fuzzy.feed(50);
    })
    updateHunger();
    gameOver();
  });
  function updateHunger() {
    setInterval(() => {
      let foodLevel = fuzzy.foodLevel;
      $("#game-hunger").text(foodLevel);
    }, 500);
  }
  function gameOver() {
    setInterval(() => {
      if (fuzzy.wasPlayerEaten()) {
        $(".feed").prop('disabled', true);
        $("#game-over").show();
      }
    }, 1000);
  }

  $("#bear-image").click(function() {
    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/search?q=bearg&api_key='+myKey+'&limit=5&rating=g',
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $("#bear-image").append('<img src = "' + response.data[1].embed_url + '">')
      }
    })
  });

});