import React from 'react';

const products = [
  { id: 1, name: 'Samsung Galaxy S8', price: 16303, color: 'Black' },
  { id: 2, name: 'Samsung Galaxy S9', price: 20888, color: 'Black' },
  { id: 3, name: 'Samsung Galaxy S8+', price: 18701, color: 'Black' },
];

function ProductDetail({ match }) {
  const productId = parseInt(match.params.id);
  const product = products.find(p => p.id === productId);

  return (
    <div>
      <h1>Product Detail</h1>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Color: {product.color}</p>
        </div>
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  );
}

export default ProductDetail;
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum ratione at tempora dolorem maxime vel perspiciatis amet non. Error eos suscipit in ad fugit! Ut animi eligendi inventore iste.",


    },
    {
        name : "Samsung Galaxy Note 9 6/128GB Midnight Black",
        price : 29768,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum ratione at tempora dolorem maxime vel perspiciatis amet non. Error eos suscipit in ad fugit! Ut animi eligendi inventore iste.",
        id : 5

    },
    {
        name : "Samsung Galaxy Note 8 64GB Black",
        price : 22171,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum ratione at tempora dolorem maxime vel perspiciatis amet non. Error eos suscipit in ad fugit! Ut animi eligendi inventore iste.",
        id : 6,

    },
]

const Product = () => {

    const{id} = useParams()
    const navigate = useNavigate()
    
    let foundItem = data.find((item) => {
        return item.id == id
    })
    
  return (
    <div>
        <h1>{foundItem.name}</h1>
        <p>Price : {foundItem.price}</p>
        <p>Desciption : {foundItem.desc}</p>
        <button onClick={() => {
            navigate("/")
        }}>Other Products</button>
    </div>
  )
}

export default Product
