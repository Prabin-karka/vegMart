import { useNavigate } from "react-router-dom";

export default function ProductCard({ veg }) {
  const navigate = useNavigate();
  const offerPrice = veg.price - (veg.price * veg.discount) / 100;

  return (
    <div className="card" onClick={() => navigate(`/product/${veg.id}`)}>
      <img src={veg.image} alt={veg.name} />
      <h3>{veg.name}</h3>
      <p>₹{veg.price}</p>
      <p className="offer">₹{offerPrice}</p>
    </div>
  );  
}
