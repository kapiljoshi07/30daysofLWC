import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

  // @api itemName;

  @api message;
  @api className;
  
  get getClassName(){
    return this.className ? `alert ${this.className}`: `alert`;
  }

}