import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.avif";

const banners = [
  { id: 1, img: banner3 },
  { id: 2, img: banner2 },
  { id: 3, img: banner1 }
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000); // change every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((banner) => (
          <img
            key={banner.id}
            src={banner.img}
            alt="banner"
            onClick={() => navigate(`/product/${banner.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
