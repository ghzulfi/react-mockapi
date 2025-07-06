import List from "../components/List";
import NavbarAdmin from "../components/NavbarAdmin";
import "../styles/style.css";

function crud() {
  return (
    <>
      <main className="container">
        <NavbarAdmin />
        <List />
      </main>
    </>
  );
}

export default crud;
