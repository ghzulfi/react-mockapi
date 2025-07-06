import "../styles/style.css";

function SectionComponent() {
  return (
    <>
      <div className="revolusi">
        <div className="isian">
          <h1 className="sub1">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>

          <h1 className="dmsans">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </h1>
          <p></p>
          <a href="#" className="button1a">
            <button className="button1">
              Temukan Video Course untuk Dipelajari!
            </button>
          </a>
        </div>
      </div>
      <div className="koleksi">
        <h1 className="sub2">Koleksi Video Pembelajaran Unggulan</h1>
        <p className="dmsans">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
        <div className="tab">
          <a href="#" className="dmsanscustom">
            Semua Kelas
          </a>
          <a href="#" className="dmsans">
            Pemasaran
          </a>
          <a href="#" className="dmsans">
            Desain
          </a>
          <a href="#" className="dmsans">
            Pengembangan Diri
          </a>
          <a href="#" className="dmsans">
            Bisnis
          </a>
        </div>
        <div className="rectang"></div>
      </div>
    </>
  );
}

export default SectionComponent;
