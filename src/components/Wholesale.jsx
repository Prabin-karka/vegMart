import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";   // <-- import your axios instance
import ProductCard from "./ProductCard";

export default function Wholesale() {
  const [vegs, setVegs] = useState([]);

  useEffect(() => {
    axiosInstance.get("")   // baseURL already points to db.json
      .then((res) => {
        // GitHub raw returns the JSON array directly
        const data = Array.isArray(res.data) ? res.data : res.data.data;
        setVegs(data.filter((v) => v.type === "wholesale"));
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <section>
      <h2>Wholesale Orders</h2>
      <div className="grid">
        {vegs.map((veg) => (
          <ProductCard key={veg.id} veg={veg} />
        ))}
      </div>
    </section>
  );
}