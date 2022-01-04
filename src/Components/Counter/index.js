let quantity = 10;

function upQuantity() {
  quantity++;
  counter_box.innerText = quantity;
  console.log(quantity);
}

export default function Counter() {
  return (
    <>
      <h1 id="counter-box">{quantity}</h1>
      <button onClick={upQuantity}>Aumentar</button>
    </>
  )
}

const counter_box = document.getElementById("counter-box");