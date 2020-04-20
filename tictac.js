var order = 0;
      var count=0;
      var index = $(".item").index();
      $(".item").addClass("notClicked")
      var container = $(".container");
      $(".order").text("X order");
      $(".item").click(function() {
        $(this).removeClass("notClicked")
        $(this).attr("disabled",true)
        if (order % 2 == 0) {
          $(this)
            .text("x")
            .css("color", "cadetblue");
          $(".order")
            .text("O order")
            .css("color", "mediumvioletred");
        } else {
          $(this)
            .text("o")
            .css("color", "mediumvioletred");
          $(".order")
            .text("X order")
            .css("color", "cadetblue");
        }
        order++;
        function checkWinner() {
          if ($(".item1").text() == "x") {
            setTimeout(function() {
              $(".order")
                .text("X win")
                .css("color", "cadetblue");
            }, 1000);
          } else {
            setTimeout(function() {
              $(".order")
                .text("O win")
                .css("color", "mediumvioletred");
            }, 1000);
          }
        }
        function checkWinners() {
          if ($(".item3").text() == "x") {
            setTimeout(function() {
              $(".order")
                .text("X win")
                .css("color", "cadetblue");
            }, 1000);
          } else {
            setTimeout(function() {
              $(".order")
                .text("O win")
                .css("color", "mediumvioletred");
            }, 1000);
          }
        }
        if (
          $(".item1").text() != "" &&
          $(".item1").text() == $(".item2").text() &&
          $(".item1").text() == $(".item3").text()
        ) {
          count++
          $(".item").attr("disabled" , true)
          checkWinner();
        }
        if (
          $(".item1").text() != "" &&
          $(".item1").text() == $(".item4").text() &&
          $(".item1").text() == $(".item7").text()
        ) {
          $(".item").attr("disabled" , true)
          count++
          checkWinner();
        }
        if (
          $(".item1").text() != "" &&
          $(".item1").text() == $(".item5").text() &&
          $(".item1").text() == $(".item9").text()
        ) {
          $(".item").attr("disabled" , true)
          count++
          checkWinner();
        }
        if (
          $(".item3").text() != "" &&
          $(".item3").text() == $(".item5").text() &&
          $(".item3").text() == $(".item7").text()
        ) {
          $(".item").attr("disabled" , true)
          count++
          checkWinners();
        }
        if (
          $(".item3").text() != "" &&
          $(".item3").text() == $(".item6").text() &&
          $(".item3").text() == $(".item9").text()
        ) {
          $(".item").attr("disabled" , true)
          count++
          checkWinners();
        }
        if (
          $(".item7").text() != "" &&
          $(".item7").text() == $(".item8").text() &&
          $(".item7").text() == $(".item9").text()
        ) {
          $(".item").attr("disabled" , true)
          count++
          if ($(".item7").text() == "x") {
            setTimeout(function() {
              $(".order")
                .text("X win")
                .css("color", "cadetblue");
            }, 1000);
          } else {
            setTimeout(function() {
              $(".order")
                .text("O win")
                .css("color", "mediumvioletred");
            }, 1000);
          }
        }
        if (
          $(".item2").text() != "" &&
          $(".item2").text() == $(".item5").text() &&
          $(".item2").text() == $(".item8").text()
        ) {
          $(".item").attr("disabled" , true)
          count++
          if ($(".item2").text() == "x") {
            setTimeout(function() {
              $(".order")
                .text("X win")
                .css("color", "cadetblue");
            }, 1000);
          } else {
            setTimeout(function() {
              $(".order")
                .text("O win")
                .css("color", "mediumvioletred");
            }, 1000);
          }
        }
        if (
          $(".item4").text() != "" &&
          $(".item4").text() == $(".item5").text() &&
          $(".item4").text() == $(".item6").text()
        ) {
          $(".item").attr("disabled" , true)
          count++
          if ($(".item4").text() == "x") {
            setTimeout(function() {
              $(".order")
                .text("X win")
                .css("color", "cadetblue");
            }, 1000);
          } else {
            setTimeout(function() {
              $(".order")
                .text("O win")
                .css("color", "mediumvioletred");
            }, 1000);
          }
        }
  
        else if($(".notClicked").length==0 && count==0){
          setTimeout(function() {
          $(".order")
                .text("None")
          },1000)
        }
        console.log(count)
      });
      $(".startAgain").click(function() {
        count=0
        $(".item").attr("disabled" , false)
        $(".item").addClass("notClicked")
        $(".item").text("");
        $(".order").text("X order");
      });