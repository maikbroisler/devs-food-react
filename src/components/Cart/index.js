import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  CartArea, 
  CartHeader, 
  CartIcon, 
  CartText, 
  CartBody,
  ProductsArea,
  ProductItem,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductQuantityArea,
  ProductQtIcon,
  ProductQtText
} from './styled';

export default () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);
  const [show, setShow] = useState(true);

  const handleCartClick = () => {
    setShow(!show);
  }

  const handleProductChange = (key, type) => {
    dispatch({
      type: 'CHANGE_PRODUCT',
      payload: { key, type }
    })
  }

  return (
    <CartArea>
      <CartHeader onClick={handleCartClick}>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu carrinho ({products.length})</CartText>
        {
          show && 
          <CartIcon src="/assets/down.png" />
        }
       
      </CartHeader>
      <CartBody show={show}>
        <ProductsArea>
         {
          products.map(product => (
            <ProductItem key={product.id}>
              <ProductPhoto src={product.image} />
              <ProductInfoArea>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
              </ProductInfoArea>
              <ProductQuantityArea>
                <ProductQtIcon src="/assets/minus.png" onClick={() => handleProductChange(product.id, '-')}/>
                  <ProductQtText>{product.qt}</ProductQtText>
                <ProductQtIcon src="/assets/plus.png" onClick={() => handleProductChange(product.id, '+')}/>
              </ProductQuantityArea>
            </ProductItem>
          ))
         }
        </ProductsArea>
      </CartBody>
    </CartArea>
  );
}