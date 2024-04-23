import { LightningElement } from 'lwc';
import loginForm from './loginForm.html';
import signUpForm from './signUpForm.html';
import defaultForm from './renderMultipleTemplates.html'

export default class RenderMultipleTemplates extends LightningElement {

  selected = null;

  render(){
    return this.selected==='Sign Up'? signUpForm: this.selected==='Log In'? loginForm:defaultForm;
  }

  handleClick(event){
    this.selected = event.target.label;
    console.log(this.selected);
  }

  submitForm(event){
    if(event.target.name==='Sign Up')
      console.log('Sign Up Successful');
    else if(event.target.name==='Log In')
      console.log('Login Successfull');
  }

}