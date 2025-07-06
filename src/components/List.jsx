import "../styles/style.css";
import axios from "axios";
import { useEffect, useState } from "react";

function List() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [bahanAjar, setBahanAjar] = useState([]);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [nama, setNama] = useState("");
  const [posisi, setPosisi] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [foto, setFoto] = useState("");
  const [ava, setAva] = useState("");

  const [bahanAjarEdit, setBahanAjarEdit] = useState(null);

  useEffect(() => {
    getAllData();
  }, []);

  async function getAllData() {
    const response = await axios.get(API_URL);
    setBahanAjar(response.data);
  }

  async function addData(e) {
    e.preventDefault();
    if (
      !judul ||
      !deskripsi ||
      !nama ||
      !posisi ||
      !company ||
      !price ||
      !foto ||
      !ava
    ) {
      return;
    }
    const response = await axios.post(API_URL, {
      judul,
      deskripsi,
      nama,
      posisi,
      company,
      price,
      foto,
      ava,
    });
    setJudul("");
    setDeskripsi("");
    setNama("");
    setPosisi("");
    setCompany("");
    setPrice("");
    setFoto("");
    setAva("");
    getAllData();
  }

  function editData(data) {
    setBahanAjarEdit(data);
    setJudul(data.judul);
    setDeskripsi(data.deskripsi);
    setNama(data.nama);
    setPosisi(data.posisi);
    setCompany(data.company);
    setPrice(data.price);
    setFoto(data.foto);
    setAva(data.ava);
  }

  async function updateData(e) {
    e.preventDefault();
    if (
      !judul ||
      !deskripsi ||
      !nama ||
      !posisi ||
      !company ||
      !price ||
      !foto ||
      !ava
    ) {
      return;
    }
    const response = await axios.put(API_URL + "/" + bahanAjarEdit.id, {
      judul,
      deskripsi,
      nama,
      posisi,
      company,
      price,
      foto,
      ava,
    });
    setJudul("");
    setDeskripsi("");
    setNama("");
    setPosisi("");
    setCompany("");
    setPrice("");
    setFoto("");
    setAva("");
    getAllData();
    setBahanAjarEdit(null);
  }

  async function handleClick(e) {
    e.preventDefault();
    if (bahanAjarEdit) {
      await updateData(e);
    } else {
      await addData(e);
    }
  }

  async function deleteData(id) {
    const response = await axios.delete(API_URL + "/" + id);
    getAllData();
  }

  return (
    <>
      <section className="sectionlogin">
        <div className="login">
          <div className="login2">
            <div className="sublogin">
              <div>
                <span className="sublogin1">
                  {bahanAjarEdit ? "Ubah Bahan Ajar" : "Tambah Bahan Ajar"}
                </span>
              </div>
            </div>
            <div className="login3">
              <form className="login4" type="submit" onSubmit={handleClick}>
                <div className="formInput">
                  {/* baris 1 */}
                  <div className="login5">
                    <div>
                      <span className="emailpasstext">
                        Judul<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input
                          type="text"
                          required
                          className="inputemail"
                          value={judul}
                          onChange={(e) => setJudul(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <span className="emailpasstext">
                        Deskripsi<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input
                          type="text"
                          required
                          className="inputemail"
                          value={deskripsi}
                          onChange={(e) => setDeskripsi(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* baris 2 */}
                  <div className="login5">
                    <div>
                      <span className="emailpasstext">
                        Nama<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input
                          type="text"
                          required
                          className="inputemail"
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <span className="emailpasstext">
                        Jabatan<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input
                          type="text"
                          required
                          className="inputemail"
                          value={posisi}
                          onChange={(e) => setPosisi(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* baris 3 */}
                  <div className="login5">
                    <div>
                      <span className="emailpasstext">
                        Perusahaan<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input
                          type="text"
                          required
                          className="inputemail"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <span className="emailpasstext">
                        Link Foto Produk<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input
                          type="text"
                          required
                          className="inputemail"
                          value={foto}
                          onChange={(e) => setFoto(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* baris 4 */}
                  <div className="login5">
                    <div>
                      <span className="emailpasstext">
                        Harga<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input
                          type="text"
                          required
                          className="inputemail"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <span className="emailpasstext">
                        Link Foto Ava<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input
                          type="text"
                          required
                          className="inputemail"
                          value={ava}
                          onChange={(e) => setAva(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="masuk-daftar">
                  <div>
                    <a href="#">
                      <button className="tombollogin" type="submit">
                        {bahanAjarEdit ? "Update Data" : "Create Data"}
                      </button>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {bahanAjar.length > 0 && (
        <section className="sectionlogin2">
          <div className="login">
            <div className="login2">
              <div className="sublogin">
                <div>
                  <span className="sublogin1">Daftar Produk Bahan Ajar</span>
                </div>
              </div>
              <div className="login3">
                <ul className="login4">
                  {bahanAjar.map((item) => (
                    <li className="login51">
                      <div>
                        <div>
                          <span className="emailpasstext1">{item.judul}</span>
                        </div>
                        <div>
                          <span className="emailpasstext">
                            {item.deskripsi}
                          </span>
                        </div>
                      </div>
                      <div className="masuk-daftar1">
                        <div>
                          <a href="#">
                            <button
                              className="tomboledit"
                              onClick={() => editData(item)}
                            >
                              Update
                            </button>
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <button
                              className="tomboldelete"
                              onClick={() => deleteData(item.id)}
                            >
                              Delete
                            </button>
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default List;
