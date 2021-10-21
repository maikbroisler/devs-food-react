import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
  Container,
  ProductArea, 
  ProductButtons,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductsIngredients,
  ProductDetails,
  ProductQuantityArea,
  ProductQuantity,
  ProductQtImage,
  ProductQtText,
  ProductPrice,
  ProductButton,
} from './styled';

export default ({ data, setStatus }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch =  useDispatch();

  useEffect(() => {
    setQuantity(1);
  }, [data]);

  const handleCancelButton = () => {
    setStatus(false);
  }

  const handleMinusQt = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    
  }

  const handlePlusQt = () => {
    setQuantity(quantity + 1);
  }

  const handleAddToCart = () => {
    // juntas as info
    //mdnar isso reducer

    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        data,
        quantity
      }
    })
   

    setStatus(false);
  }

  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image}/>
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductsIngredients>{data.ingredients}</ProductsIngredients>  
          </ProductDetails> 
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage src="/assets/minus.png" onClick={handleMinusQt}/>
                <ProductQtText>{quantity}</ProductQtText>
              <ProductQtImage src="/assets/plus.png" onClick={handlePlusQt}/>
            </ProductQuantity>
            <ProductPrice>R$ {(data.price * quantity).toFixed(2)}</ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductButton small onClick={handleCancelButton}>Cancelar</ProductButton>
        <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
      </ProductButtons>
    </Container>
  );
}