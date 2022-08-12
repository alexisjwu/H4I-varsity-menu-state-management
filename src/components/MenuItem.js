import React, { useState } from 'react'

const MenuItem = props => {
  const [buttonClicked, toggleColor] = useState(false);

  const onClick = () => {
    if (!buttonClicked) {
        // passing up to the state function
        props.addPurchasedItem({
        name: props.name,
        price: props.price,
      })
    }
    else {
      props.removePurchasedItem(
        props.name,
      )
    }
    toggleColor(!buttonClicked)
  }

  return (
    <button 
      class={buttonClicked ? "menu-item selected" : "menu-item"} 
      onClick={onClick}
    >
      <img src={props.picture} alt={props.name} />
      <dt>{props.name}</dt>
      <dd>{props.price}</dd>
    </button>
  )
}
  
export default MenuItem
