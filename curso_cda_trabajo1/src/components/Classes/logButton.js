import React from 'react'

class logButton extends React.Component {
  constructor(prop) {
    super(prop);
    this.sayHello = this.sayHello.bind(this);
    this.createButtonsArray = this.createButtonsArray.bind(this);
  }

  sayHello(count) {
    alert(count, " añadidos al carrito.");
  }
}

export default logButton
