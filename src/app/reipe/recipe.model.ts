// export class Recipe {
//    public name: string | undefined;
//    public description!: string;
//    public imagePath!:string;


//    constructor(name:string,desc:string,imagePath:string){
//           this.name = name;
//           this.description = desc;
//           this.imagePath = imagePath;
//    }
// }
export class Recipe {
 
    constructor(public name:string,public description:string,public imagePath:string){
           this.name = name;
           this.description = description;
           this.imagePath = imagePath;
    }
 }