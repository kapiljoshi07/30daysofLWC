import { LightningElement, api } from 'lwc';

export default class ParentComponent extends LightningElement {

  @api obj = {
    msg: "hello"
  };

  get serializedObj(){
    return JSON.stringify(this.obj);
  }
}