function init() {
    var stage = new createjs.Stage("demoCanvas");
    var bgShape = new createjs.Shape();
    
    // Adds the background gradient 
    bgShape.graphics.beginLinearGradientFill(
        ["#728FCE", "#DEE0D5", "#DEE0D5", "#F4A460"],
        [.2, .6, .63, .9], 
        0, 0,
        0, stage.canvas.height
    );
    bgShape.graphics.drawRect(
        0,
        0,
        stage.canvas.width,
        stage.canvas.height

    );
    bgShape.graphics.endFill();
    
    stage.addChild(bgShape);
    // Circle 
    var circle = new createjs.Shape();
    circle.graphics.beginFill("blue").drawCircle(0, 0, 50);
    circle.x = 500;
    circle.y = 500;
    stage.addChild(circle);
    // box     
    var box = new createjs.Shape();
     box.graphics.beginFill("red").rect(0, 0, 70, 80);
     box.x = 10;
     box.y = 10; 
     stage.addChild(box);
    // Star
    var star = new createjs.Shape();
    star.graphics.beginFill("yellow").drawPolyStar(0,0,50,8,.5,10);
    star.x = 50;
    star.y = 50;
    stage.addChild(star);

    // have the shapes move around in a loop using tween     
    createjs.Tween.get(circle, {loop: true})
      .to({x: 400}, 1000, createjs.Ease.getPowInOut(4))
      .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
      .to({alpha: 0, y: 125}, 100)
      .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
      .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

    createjs.Tween.get(box, { loop: true })
    .to({ x: 200 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
    .to({ alpha: 0, y: 225 }, 100)
    .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
    .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));

    createjs.Tween.get(star, { loop: true })
    .to({ rotation : 30 }, 1000, createjs.Ease.liner)
    .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2));
  }

























  //   function animateBall(){
    
//     count = 0; 

//     ball.pos(110,200,true).cur("default");
//     ball.points = "circle";

//     ball 
//         .transformPoints("rotation", -45)
//         .animate({
//         props:{y:"440"},
//         time:800,    
//         rewind:true,    
//         loop:true,
//         loopCall:shapeTweenBall    

//         });




//   }

