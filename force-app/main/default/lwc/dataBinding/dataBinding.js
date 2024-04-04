import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
  userName;

  changeHandler(event){
    console.log(event);
    this.userName = event.target.value;
  }
}