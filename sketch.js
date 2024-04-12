var crs=[]
var cr
let color1 = ["#FAEBCD"];
let color2 = ["#E06A4E", "#DEB853", "#789F8A", "#5A3D2B"];

class cr_class{
  constructor(args){
    this.p=args.p || {x:0,y:0}
    this.d=args.d || 50
    this.v=args.v || {x:random(1,2),y:random(1,2)}
    this.a=args.a || {x:0,y:random(0.7,1.2)}
    this.c1=args.c1 || random(color1)
    this.c2=args.c2 || random(color2)
  }
  draw(){
    push();
    translate(this.p.x , this.p.y );
    noStroke();
    fill(this.c1);
    rectMode(CENTER);
    rect(0, 0, this.d, this.d, this.d / 2, this.d / 2, 0, 0);
    fill(0);
    circle(-this.d / 6, -this.d / 50, this.d / 7.5);
    circle(this.d / 6, -this.d / 50, this.d / 7.5);
    fill(this.c1);
    ellipse(0, this.d / 7.5, this.d / 2.2, this.d / 3);
    fill(this.c2);
    ellipse(0, this.d / 11, this.d / 5, this.d / 7);

    pop();
  }

  update(){
    this.p.x=this.p.x+this.v.x
    this.p.y=this.p.y+this.v.y
    if(this.p.x>width){
      this.v.x=-this.v.x
      }
    if(this.p.x<0){
      this.v.x=-this.v.x
      }
    if(this.p.y>height){
      this.v.y= -this.v.y
      }
    if(this.p.y<0){
      this.v.y= -this.v.y
      }
  }
  isBallInRange(){
    let d=dist(mouseX,mouseY,this.p.x,this.p.y)
    if(d<this.d){
      return true
    }
    else{
      return false
    }
  }
}  


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255)
  angleMode(DEGREES);
  for(i=0;i<80;i++){
    cr=new cr_class({
    })
   crs.push(cr)
  }
  score=0
  fill(0)
  textSize(50)
  text("score"+score,150,150)
}



function draw() {
  background(255)

  for(j=0;j<crs.length;j++){
    cr=crs[j]
    cr.draw()
    cr.update()
    if(cr.isBallInRange()){
      cr.v.x=cr.v.x+random(-5,5)
      cr.v.y=cr.v.y+random(-5,5)
    }
    else{
      cr.v.x=cr.v.x
      cr.v.y=cr.v.y
    }
  }
  fill(0)
  textSize(50)
  text("score"+score,150,150)
}

function mousePressed(){
  for(let cr of crs){
    if(cr.isBallInRange()){   
      crs.splice(crs.indexOf(cr),1)
      score=score+1
    }
 
  }
  fill(0)
  textSize(50)
  text("score"+score,150,150)
}