import "../styles/style.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Card() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [bahanAjar, setBahanAjar] = useState([]);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [nama, setNama] = useState("");
  const [posisi, setPosisi] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [foto, setFoto] = useState("");

  const [bahanAjarEdit, setBahanAjarEdit] = useState(null);

  useEffect(() => {
    getAllData();
  }, []);

  async function getAllData() {
    const response = await axios.get(API_URL);
    setBahanAjar(response.data);
  }

  return (
    <div className="product">
      <div className="prod-line">
        {bahanAjar.map((item) => (
          <a href="#" className="pline1">
            <span>
              <img src={item.foto} alt="" className="imgpro" />
            </span>
            <div className="pline1-1">
              <span className="sub3">{item.judul}</span>
              <span className="dmsansprod">{item.deskripsi}</span>
              <div className="avaprofile">
                <div>
                  <span className="avapic">
                    <img src={item.ava} alt="" className="ava" />
                  </span>
                </div>
                <div className="avadetail">
                  <span className="name">{item.nama}</span>
                  <span className="job">
                    {item.posisi} di <b>{item.company}</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="ratingprice">
              <div className="starrate">
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="rating">3.5 (86)</span>
              </div>
              <div>
                <span className="price">Rp {item.price}K</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Card;
