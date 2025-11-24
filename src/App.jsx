import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart } from './store/cartSlice';
import './App.css';

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const products = [
    { name: 'Fresh Milk', price: 62, image: '🥛' },
    { name: 'Brown Bread', price: 35, image: '🍞' },
    { name: 'Farm Eggs', price: 84, image: '🥚' },
    { name: 'Basmati Rice', price: 149, image: '🍚' },
    { name: 'Fresh Tomato', price: 48, image: '🍅' },
    { name: 'Green Apple', price: 120, image: '🍏' },
    { name: 'Banana', price: 56, image: '🍌' },
    { name: 'Potato', price: 32, image: '🥔' },
  ];
  
  const handleAdd = (product) => {
    dispatch(addItem(product));
  };
  
  const handleRemove = (productName) => {
    dispatch(removeItem(productName));
  };
  
  const handleClear = () => {
    dispatch(clearCart());
  };
  
  return (
    <div className="app">
      <nav className="navbar navbar-dark bg-zepto">
        <div className="container-fluid px-4">
          <div>
            <span className="navbar-brand mb-0 h1 fw-bold">Zepto</span>
            <p className="text-white-50 mb-0 small">Groceries in 10 minutes</p>
          </div>
          <span className="fs-3">🛒</span>
        </div>
      </nav>
      
   
      <div className="bg-white border-bottom sticky-top">
        <div className="container-fluid px-4 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-2 fw-semibold">Your Cart</h5>
              <div className="d-flex gap-4">
                <span className="text-secondary">
                  <strong className="text-dark">{cart.items.length}</strong> items
                </span>
                <span className="text-secondary">
                  Total: <strong className="text-dark">₹{cart.total}</strong>
                </span>
              </div>
            </div>
            
            {cart.items.length > 0 && (
              <button 
                className="btn btn-danger" 
                onClick={handleClear}
              >
                Clear All 🗑️
              </button>
            )}
          </div>
        </div>
      </div>
      
  
      <div className="container-fluid px-4 py-4">
        <h4 className="mb-3 fw-semibold">Available Products</h4>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 mb-4">
          {products.map((product) => (
            <div className="col" key={product.name}>
              <div className="card h-100 product-card border">
                <div className="card-body text-center">
                  <div className="product-emoji mb-2">{product.image}</div>
                  <h6 className="card-title mb-2">{product.name}</h6>
                  <p className="card-text fw-bold mb-3">₹{product.price}</p>
                  <button 
                    className="btn btn-zepto w-100 fw-semibold"
                    onClick={() => handleAdd(product)}
                  >
                    ADD +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      <div className="bg-light">
        <div className="container-fluid px-4 py-4">
          <h4 className="mb-3 fw-semibold">Items in Cart</h4>
          
          {cart.items.length === 0 ? (
            <div className="card text-center py-5">
              <div className="card-body">
                <div className="empty-emoji mb-3">🛒</div>
                <p className="text-secondary mb-1">Your cart is empty</p>
                <p className="text-secondary">Add items from above!</p>
              </div>
            </div>
          ) : (
            <div className="row g-3">
              {cart.items.map((item, index) => (
                <div className="col-12" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-3">
                          <div className="cart-item-emoji bg-light rounded p-2">
                            {item.image}
                          </div>
                          <div>
                            <h6 className="mb-1">{item.name}</h6>
                            <p className="mb-0 fw-bold">₹{item.price}</p>
                          </div>
                        </div>
                        
                        <button 
                          className="btn btn-outline-danger"
                          onClick={() => handleRemove(item.name)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
