import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cartActions from '../store/actions/cart';

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  let totalPrice = 0;

  for (let i = 0; i < cart.Cart.length; i++) {
    totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity)
  }

  if (cart.value) {
    localStorage.setItem('dioshopping: cart', JSON.stringify(cart))
  }

  return (
    <>
      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#CartModal">
        <span><i className="fas fa-shopping-cart"></i> </span>
        <span className="badge rounded-circle bg-light text-dark">
          {cart.Cart?.length ? cart.value : 0}
        </span>
      </button>

      {/* Modal */}
      <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title text-light" id="CartModalLabel">Meu Carrinho</h5>
              <button type="button" className="close btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times"></i></span>
              </button>
            </div>

            <div className="modal-body table-responsive">
              <table className="table table-hover text-light">
                <thead>
                  <tr>
                    <th scope="col">Produto</th>
                    <th scope="col"></th>
                    <th scope="col">Qtd</th>
                    <th scope="col"></th>
                    <th scope="col">Preço</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.Cart.map(item => {
                    return (
                      <tr key={item.id} className="bg-dark-hover">
                        <th>
                          <img className="img-fluid img-thumbnail" src={item.image} alt={item.Name} width="50px" />
                        </th>
                        <th>
                          <button onClick={() => dispatch(cartActions.RemoveItem(cart, item))} className="badge badge-pill bg-danger btn">
                            <i className="fas fa-minus"></i>
                          </button>
                        </th>
                        <th>
                          <span className="badge badge-pill bg-warning btn">
                            {item.quantity}
                          </span>
                        </th>
                        <th>
                          <button onClick={() => dispatch(cartActions.AddItem(cart, item))} className="badge badge-pill bg-primary btn">
                            <i className="fas fa-plus"></i>
                          </button>
                        </th>
                        <th>R$ {item.price.toFixed(2)}</th>
                        <th>R$ {(item.price * item.quantity).toFixed(2)}</th>
                        <th>
                          <button onClick={() => dispatch(cartActions.DeleteItem(cart, item))} className="badge badge-pill btn-danger btn">
                            <i class="fas fa-times"></i>
                          </button>
                        </th>
                      </tr>
                    )
                  })}
                  <tr className="bg-dark-hover">
                    <th colSpan="2" scope="col">Total</th>
                    <th colSpan="3">{cart.Cart?.length ? cart.value : 0} itens</th>
                    <th colSpan="2">R$ {totalPrice.toFixed(2)}</th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="modal-footer">
              {
                cart.Cart?.length && (<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalFinal" data-bs-dismiss="modal"
                  onClick={() => dispatch(cartActions.Reset(cart))}>Finalizar</button>) ||
                (<button type="button" className="btn btn-secondary">Finalizar</button>)
              }
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalFinal" tabindex="-1" role="dialog" aria-labelledby="modalFinalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content bg-dark">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="exampleModalLabel">Compra finalizada!</h5>
              <button type="button" class="close btn bg-light" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;
