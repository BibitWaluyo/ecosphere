import React from 'react';
import './Page1.css'; // Import the CSS file for styling
import ContentImage1 from "../../assets/img/kampanye/content1.png";
import Kepala from "../../assets/img/kampanye/HeaderImage.jpg";
const Page1 = () => {
  return (
    <div className="page1-container">
      <header className="page1-header">
        <img src={Kepala} alt="Header" className="header-image" />
        <div className="header-content">
          <img src={ContentImage1} alt="" className="content-image " />
          <h4>Lingkungan</h4>
        </div>
      </header>
      <section className="button-section">
        <div className="hashtag-section">
          <span>#IndonesiaBebasBanjir</span>
          <span>#MendukungAksesAirBersih</span>
        </div>
        <div className="organizer-section">
          <span>Organizer: @ecosphereofficial</span>
        </div>
        <div className="followers-section">
          <span>1,750 followers</span>
        </div>
      </section>
      <section className="description-section">
        <h2>Tentang Tantangan</h2>
        <p>Lebih dari 1000 orang di provinsi Nusa Tenggra Timur (NTT),
Indonesia, menghadapi keterbatasan akses air bersih.Mereka harus 
berjalan kaki hingga 4 jam 
sambil membawa jeriken berat setiap hari untuk mendapatkan air bersih.</p>
        <button className="join-button">Ikuti</button>
      </section>
      <section className="stats-section">
        <div className="stat-item">
          <span className="stat-number">3</span>
          <span className="stat-label">Aksi</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10</span>
          <span className="stat-label">Sisa hari</span>
        </div>
      </section>
      <section className="actions-section">
        <div className="action-item">
          <img src="path/to/action-icon1.png" alt="Action 1" />
          <p>Description of Action 1</p>
        </div>
        <div className="action-item">
          <img src="path/to/action-icon2.png" alt="Action 2" />
          <p>Description of Action 2</p>
        </div>
        <div className="action-item">
          <img src="path/to/action-icon3.png" alt="Action 3" />
          <p>Description of Action 3</p>
        </div>
      </section>
      <section className="gallery-section">
        <h2>Aksi 1-Menyebar informasi</h2>
        <div className="gallery-items">
          <img src="path/to/gallery-image1.jpg" alt="Gallery 1" />
          <img src="path/to/gallery-image2.jpg" alt="Gallery 2" />
          <img src="path/to/gallery-image3.jpg" alt="Gallery 3" />
        </div>
      </section>
    </div>
  );
}

export default Page1;
