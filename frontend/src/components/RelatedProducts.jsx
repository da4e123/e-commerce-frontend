import React, { useContext, useEffect } from 'react'
import { ShopContext } from '/src/context/shopContext'
import { useState } from 'react'
import Title from '/src/components/Title';
import ProductItem from '/src/components/ProductItem';

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext)

    const [related, setRelated] = useState([])



    useEffect(()=> {
        if(products.length > 0){

            let tempProducts = products.slice();

            tempProducts = tempProducts.filter((item) => category === item.category);
            tempProducts = tempProducts.filter((item)=> subCategory === item.subCategory);

            setRelated(tempProducts.slice(0,5));

            
            

            
            
            
        }

    }, [products])
  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item, index)=> (
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>

        ))}

      </div>
    </div>
  )
}

export default RelatedProducts
