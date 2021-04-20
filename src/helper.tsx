let title:string;

export default class Helper {
    constructor(title:string){
        title = title;
    }
    getHelperInfo(){
        console.log(`Helper Info  ${title}`)
    }
}