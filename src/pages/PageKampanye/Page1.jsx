import React from 'react';
import './Page1.css'; // Import the CSS file for styling
import ContentImage1 from "../../assets/img/kampanye/content1.png";
import Kepala from "../../assets/img/kampanye/HeaderImage.jpg";
import grup from "../../assets/img/kampanye/Group 2229.png";
import fol from "../../assets/img/kampanye/Ellipse 124.png";
import folow from '../../assets/img/Logo partner.png';
import folo from '../../assets/img/bg-beranda.png';
import icon from '../../assets/img/kampanye/Vector.png';
import Opini from '../../assets/img/kampanye/proyek.png';
import pengaturan from '../../assets/img/kampanye/pengaturan.png';
const Page1 = () => {
  return (
    <div className="page1-container  ">
      <header className="page1-header">
        <img src={Kepala} alt="Header" className="header-image " />
        <div className="header-content">
          <img src={ContentImage1} alt="" className="content-image " />
          <section className="Lingkungan  rounded-5 ">
          <h4 className='m-1 p-1 '>Lingkungan</h4>
          </section>
          <p className='m-1 fw-bold'>#IndonesiaMerdekaAir:</p>
          <p className='m-1 fw-bold'>MendukungAksesAirBersih</p>
        </div>
      </header>
      <section className="button-section1">
  <div className="info-container">
    <div className="organizer-section">
      <img src={grup} alt="Organizer Logo" className="organizer-logo m-3" />
      <div className="organizer-info">
        <span className="fw-bold opacity-75 ">Organizer</span>
        <a href="#" className="organizer-link">#Solarchapterofficial</a>
      </div>
    </div>
    <div className="followers-section">
      <img src={fol} alt="Follower 1" className="follower-avatar" />
      <img src={folow} alt="Follower 2" className="follower-avatar" />
      <img src={folo} alt="Follower 3" className="follower-avatar" />
      <span className="followers-count fw-bold">1,7RB</span>
    </div>
  </div>
</section>
      <section className="description-section bg-light d-align-self-sm-auto ">
      <button className="join-button">Ikuti</button>
        <h2>Tentang Tantangan</h2>
        <p>Lebih dari 1000 orang di provinsi Nusa Tenggra Timur (NTT),
Indonesia, menghadapi keterbatasan akses air bersih.Mereka harus 
berjalan kaki hingga 4 jam 
sambil membawa jeriken berat setiap hari untuk mendapatkan air bersih.</p>
<a href="#" className="organizer-linkp fw-bold">Cari tahu selengkapnya</a>
      </section>
      <section className="stats-section">
        <div className="stat-item">
          <span className="stat-number fa-wave-square">3</span>
          <p className="stat-label">Aksi</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">10</span>
          <p className="stat-label">Sisa hari</p>
        </div>
      </section>
      <section className="actions-section">
        <div className="action-item">
          <img src={icon} alt="Action 1" />
          <h1>Menyebar Informasi</h1>
          <p>Foto/video informasi yang kamu temukan dan baca mengenai air bersih</p>
        </div>
        <div className="action-item">
          <img src={Opini} alt="Action 2" />
          <h1>Opini</h1>
          <p>Foto tulisanmu tentang bagaimana pemerintah dapat membantu akses air bersih di NTT</p>
        </div>
        <div className="action-item">
          <img src={pengaturan} alt="Action 3" />
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
