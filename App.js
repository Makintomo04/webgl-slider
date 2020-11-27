import * as PIXI from "pixi.js"
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"
import img6 from "./img/6.jpg"
import img7 from "./img/7.jpg"


function loadImages(paths,whenLoaded){
    const imgs = [];
    const img0 = [];
    paths.forEach(function(path){
        const img = new Image();
        img.onload = function () {
            imgs.push(img)
            img0.push({path,img})
            if(imgs.length === paths.length) whenLoaded(img0)
        };
img.src = path;
    })
}
class Sketch {
constructor(){
    this.app = new PIXI.Application({ 
        backgroundColor: 0x1099bb,
    resizeTo: window });
document.body.appendChild(this.app.view);
this.margin=50;
this.width = (window.innerWidth - 2 * this.margin)/3;
this.height = window.innerHeight*0.8;
this.container = new PIXI.Container();
this.app.stage.addChild(this.container);
this.images = [img1,img2,img3,img4,img5,img6,img7]
loadImages(this.images, (images)=>{
    this.loadedImages = images;
    this.add()
    this.render()
})

}
add(){
    this.loadedImages.forEach((img,i)=>{
       let texture = PIXI.Texture.from(img.img);
       const sprite = new PIXI.Sprite(texture);
       const container = new PIXI.Container();
       let spriteContainer = new PIXI.Container();
       sprite.width= 100;
       sprite.height= 100;

container.x = (this.margin + this.width)*i;
container.y = this.height/10;


       container.addChild(sprite)
       this.container.addChild(container)
    })
    
}
render(){
    this.app.ticker.add(() => {
        this.app.renderer.render(this.container);
    });
}
}
new Sketch();