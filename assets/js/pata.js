       var circles= [];

function onKeyDown(){

   var maxPoint = new Point(view.size.width, view.size.height);
   var randomPoint = Point.random();
   var point = maxPoint*randomPoint;
   var myCircle = new Path.Circle(point, 50);
   myCircle.fillColor = 'black';
   circles.push(myCircle);
   //console.log(circles);
  }

 // var circle = new Path.Circle(new Point(300,300),100);
  //circle.fillColor = 'red';

  function onFrame(event){
  //console.log("hey");

  for(var i=0;i<10;i++)
  {
    console.log(circles[i]);
  circles[i].fillColor.hue+=1;
  //circles[i].scale(0.9);
   }
}
