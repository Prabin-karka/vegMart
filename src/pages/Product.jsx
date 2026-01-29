import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";   // <-- import your axios instance

export default function Product() {
  const { id } = useParams();
  const [veg, setVeg] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    axiosInstance.get("")   // baseURL already points to db.json
      .then((res) => {
        // GitHub raw returns the JSON array directly
        const data = Array.isArray(res.data) ? res.data : res.data.data;
        const selected = data.find((v) => v.id === Number(id));
        setVeg(selected);
        if (selected?.type === "wholesale") setQty(10);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!veg) return <h2>Loading...</h2>;

  const offerPrice = veg.price - (veg.price * veg.discount) / 100;
  const total = offerPrice * qty;

  return (
    <div className="product">
      <img src={veg.image} alt={veg.name} />
      <div>
        <h2>{veg.name}</h2>
        <p>Original Price: ₹{veg.price}</p>
        <p>Discount: {veg.discount}%</p>
        <p>Offer Price: ₹{offerPrice}</p>

        <label>Quantity:</label>
        <input
          type="number"
          min={veg.type === "wholesale" ? 10 : 1}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        />

        <h3>Total: ₹{total}</h3>
        <p>{veg.description}</p>
      </div>
    </div>
  );
}