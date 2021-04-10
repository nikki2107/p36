const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body 
const Bodies = Matter.Bodies

//Create variables here
var d,d2
var dog, happyDog, database, foodS, foodStock;
var database;
var fo;
var fedTime;
var lastFed;
function preload()
{
	//load images here
  d=loadImage("images/dogImg.png")
d2=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  engine = Engine.create();
	world = engine.world;

  database=firebase.database();
  dog = createSprite(200,200,20,20)
  dog.addImage(d)
  dog.scale=0.
  
  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
 
 addFood = createButton("Add Food");
 addFood.position(800,95);
 addFood.mousePressed(addFoods);

 fo = new Food(200,200,20,20)


 
  Engine.run(engine);
}


function draw() {  
  background(46,139,87)
  Engine.update(engine);
  fo.display();
  drawSprites();
 
  fill("red")
  text("press up arrow key to feed drago",300,100)
  //add styles here
 fedTime = database.ref('FedTime');
 fedTime.on("value",function(data)
 {
   lastFed = data.val();
 })

 if(lastFed>=12){
   text("last feed : " + lastFed%12 + "pm",350,30);
 }
else if(lastFed==0){
  text("last feed : 12 am",350,30);
}
else{
  text("last feed : " + lastFed + "am" ,350,30);
}
}

function feedDog(){
  dog.addImage(d2)
  fo.updatefoodStock(fo.getfoodStock()-1);
  database.ref('/').update({
    Food : fo.getfoodStock()
    
  })
}

function addFoods(){
  foodS++
  database.ref('/').update({
    Food : foodS
  })
}

