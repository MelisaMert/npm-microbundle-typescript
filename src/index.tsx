import Helper from './helper';
import './style/main.css';

export class Index {
    constructor(){
       console.log("Index tsx")
    }

    indexLog = () => {
        return (
            <p>indexLog</p>
        )
    }

    helperLog = () => {
        const helper = new Helper("Helper Log");
        helper.getHelperInfo();
    }
}