import React from "react";
import "./Daftar.css";
import { Link } from "react-router-dom";

const cities = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  "Bekasi",
  "Semarang",
  "Tangerang",
  "Depok",
  "Palembang",
  "Bogor",
  // Tambahkan lebih banyak kota sesuai kebutuhan
];

const Daftar = () => {
  return (
    <div className="addUser">
      <h3>Daftar</h3>
      <h6>Ayo daftarkan dirimu disini!!!</h6>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name" className="wm">Nama Lengkap:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Masukan Nama Lengkap"
          />
          <label htmlFor="city" className="wm">Kota asal:</label>
          <select id="city" name="city" className="citySelect">
            <option value=""  >Pilih Kota asal</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          <label htmlFor="email" className="wm">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Masukan Email"
          />
          <div className="justify-content-end d-flex">
            <button type="submit" className="btn btn-outline-success text-black">
              Daftar
            </button>
          </div>
        </div>
      </form>
      <div className="login">
        <p className="text">Sudah punya akun? 
          <Link to="/Masuk" className="text">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Daftar;
