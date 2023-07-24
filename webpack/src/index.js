import { myName, functionOne } from './myName';

function component() {
    const element = document.createElement('div');
  
    element.textContent = myName("Bebi Ysai")
  
    return element;
  }
  
document.body.appendChild(component());