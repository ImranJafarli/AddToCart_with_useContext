import React from 'react'
import '../styled/createProduct.scss'
const CreateProduct = () => {
  return (
    <form> 
      <div className='form-box'>
          <label htmlFor='productName'>Product Name</label>
          <input id='productName' name="productName" type="text"/>
      </div>
      <div className='form-box'>
          <label htmlFor='productPrice'>Product Price</label>
          <input id='productPrice' name="productPrice" type="text"/>
      </div>
      <div className='form-box'>
          <label htmlFor='productDescription'>Product Description</label>
          <input id='productDescription' name="productDescription" type="text"/>
      </div>
      <button type='submit'>Create Product</button>
    </form>
  )
}

export default CreateProduct