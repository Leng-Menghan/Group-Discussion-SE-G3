import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './assets/component.jsx';
import { Information } from './data.js';

function App() {
  return (
    <>
      <div class="py-3 py-md-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="mb-4" style={{ color: "blue" , fontWeight: "bolder"}}>Our Products</h1>
            </div>
            {Information.map((item) => (
              <Card
                status={item.status}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                brand={item.brand}
                product={item.product}
                afterDiscount={item.afterDiscount}
                originalPrice={item.originalPrice}
              />
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
