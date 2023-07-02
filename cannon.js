class Cannon{

constructor(x,y,w,h,angle){
this.x = x
this.y = y
this.w = w
this.h = h
this.angle = angle



}

display(){

    //cannon base



    push()
    
    rect(70,25,200,200)



    pop()


    // cannon

    push()
    rect(this.x,this.y,this.w,this.h,this.angle)


    pop()




}




}