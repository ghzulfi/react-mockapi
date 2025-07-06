import "../styles/style.css";

function FooterComponent() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-top-1">
              <div className="logo-bottom-1">
                <img src="/images/logo.png" alt="" className="logo-bottom" />
              </div>
              <div>
                <span className="gali">
                  Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                </span>
              </div>
              <div className="address">
                <span>Jl. Usman Effendi No. 50 Lowokwaru, Malang</span>
                <span>+62-877-7123-1234</span>
              </div>
            </div>
            <div className="footer-top-2">
              <div className="footer-top-2-1">
                <span className="footer-top-2-sub">
                  <b>Kategori</b>
                </span>
                <a href="#" className="dmsans">
                  Digital & Teknologi
                </a>
                <a href="#" className="dmsans">
                  Pemasaran
                </a>
                <a href="#" className="dmsans">
                  Manajemen Bisnis
                </a>
                <a href="#" className="dmsans">
                  Pengembangan Diri
                </a>
                <a href="#" className="dmsans">
                  Desain
                </a>
              </div>
              <div className="footer-top-2-1">
                <span className="footer-top-2-sub">
                  <b>Perusahaan</b>
                </span>
                <a href="#" className="dmsans">
                  Tentang Kami
                </a>
                <a href="#" className="dmsans">
                  FAQ
                </a>
                <a href="#" className="dmsans">
                  Kebijakan Privasi
                </a>
                <a href="#" className="dmsans">
                  Ketentuan Layanan
                </a>
                <a href="#" className="dmsans">
                  Bantuan
                </a>
              </div>
              <div className="footer-top-2-1">
                <span className="footer-top-2-sub">
                  <b>Komunitas</b>
                </span>
                <a href="#" className="dmsans">
                  Tips Sukses
                </a>
                <a href="#" className="dmsans">
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="copyright-medsos">
            <div>
              <span className="dmsans">
                @2023 Gerobak Sayur All Rights Reserved.
              </span>
            </div>
            <div className="medsos-container">
              <a href="#">
                <img className="medsos" src="/images/linkedin.png" />
              </a>
              <a href="#">
                <img className="medsos" src="/images/fb.png" />
              </a>
              <a href="#">
                <img className="medsos" src="/images/ig.png" />
              </a>
              <a href="#">
                <img className="medsos" src="/images/x.png" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
