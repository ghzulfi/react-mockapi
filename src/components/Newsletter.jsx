import "../styles/style.css";

function Newsletter() {
  return (
    <div className="revolusi2">
      <div className="isian2">
        <span className="sub4news">NEWSLETTER</span>
        <span className="sub4">Mau Belajar Lebih Banyak?</span>

        <span className="dmsans">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </span>

        <div className="subscribe-container">
          <input
            type="email"
            className="subscribe-input"
            placeholder="Masukkan Emailmu"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
        <button className="subscribe-button-mobile">Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
