import $ from 'jquery';
import './styles.css';
import { Bear } from './Bear';

$(document).ready(function() {
  let fuzzy = new Bear("Fuzzy");
  $("#bear-form").show();
  $("#bear-form").submit(function(event) {
    event.preventDefault();
    fuzzy.name = $("input#bear-name").val();
    let difficulty = $("#bear-diff").val();
    let hungerInterval = fuzzy.setDifficulty(difficulty);
    fuzzy.setHunger(hungerInterval);
    $("#bear-form").hide();
    $("#game-area").show();
  });
  function updateHunger() {
    setInterval(() => {
      let foodLevel = fuzzy.foodLevel();
      $("#game-hunger").text(foodLevel);
    }, 1000);
  }
  

});