class Food{
    constructor(foodStock,lastFed){
this.image = loadImage("js/as.png")}

getfoodStock(){
    foodStock=database.ref("Food")
    foodStock.on("value",function readStock(data){
        foodS=data.val();
      })
}

updatefoodStock(x){
    database.ref('/').update({
        Food : x
      })
  }

  deductFood(){
    if (x<=0){
        x=0
      }
      else{x=x-1}
  }
    display(){
        var x=80,y=100;

        imageMode(CENTER);
         image(this.image, 170, 200, 70,  70);
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50
                }
                image(this.image,x,y,50,50);
                x = x+30;
            }
        }
        }
        }