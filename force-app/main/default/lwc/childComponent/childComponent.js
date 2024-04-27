import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

  /* Passing a primitive value */
  // @api itemName;

  // @api message;
  // @api className;

  @api obj;
  
  // get getClassName(){
  //   return this.className ? `alert ${this.className}`: `alert`;
  // }

  get serializedObj(){
    return JSON.stringify(this.obj);
  }

  updateOriginal(){
    this.obj.msg += "!!!";
  }

  updateShallow(){
    this.obj = {...this.obj, msg: this.obj.msg + "!"};
  }

}