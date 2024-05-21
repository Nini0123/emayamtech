import React, { useState } from 'react';
import './Resources.css'
import f1 from '../images/f1.jpg';
import f2 from '../images/f2.jpeg';
import f3 from '../images/f3.jpeg';
import f4 from '../images/f4.jpeg';
import t1 from '../images/t-1.png'
import t2 from '../images/t-2.png'
import t3 from '../images/t-3.png'
import t4 from '../images/t-4.png'
import t7 from '../images/t-7.png'
import t8 from '../images/t-8.png'
import t9 from '../images/t-9.png'
import t10 from '../images/t-10.png'
import t11 from '../images/t-11.png'
import a from '../images/a.png'
import b from '../images/b.png'
import c from '../images/c.png'
import ee from '../images/ee.png'
import f from '../images/f.png'
import g from '../images/g.png'
import b8 from '../images/b8.jpg'

function App() {
  const webDevelopmentImages = [
    { id: 11, src: f1 },
    { id: 12, src: f2 },
    { id: 13, src: f4 },
    { id: 14, src: f3 },
  ];

  const socialMediaImages = [
    { id: 1, src: t1 },
    { id: 2, src: t10 },
    { id: 10, src: a },
    { id: 3, src: t3 },
    { id: 4, src: t9 },
    { id: 5, src: t11 },
    { id: 6, src: t7 },
    { id: 7, src: t4 },
    { id: 8, src: t8 },
    { id: 9, src: t2 },
    { id: 15, src: b },
    { id: 16, src: c },
    { id: 17, src: ee },
    { id: 18, src: f },
    { id: 19, src: g },
  ];

  const [imagePopupOpen, setImagePopupOpen] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState('');

  const handleImageClick = (imageSrc) => {
    setPopupImageSrc(imageSrc);
    setImagePopupOpen(true);
  };

  const handleImageClose = () => {
    setImagePopupOpen(false);
  };

  const WebDevelopmentImages = () => {
    return (
      <div className="cnt center">
        {webDevelopmentImages.map((image) => (
          <div className="img-cnt" key={image.id}>
            <img className="webimage" src={image.src} alt="" />
          </div>
        ))}
      </div>
    );
  };

  const Gallery = ({ imageList }) => {
    return (
      <div className="gallery">
        {imageList.map((image) => (
          <div className="gallery-item" key={image.id}>
            <a href={image.hoverSrc} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={`mage ${image.id}`}
                style={{ width: '350px', objectFit: 'cover', height: '350px', marginRight: '3px' }}
                onClick={() => handleImageClick(image.src)}
              />
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="content">
        <div className="image-container">
          <img src={b8} alt="mage" style={{ height: '300px', width: '1200px' }} />
        </div>
        <div className="template-container">
          <h1 style={{ marginLeft: '50px', marginTop: '90px' }}>Template</h1>
        </div>
        <p style={{ marginLeft: '150px' }}>WEB DEVELOPMENT</p>
        <br />
        <WebDevelopmentImages />
        <br /><br /><br />
        <p style={{ marginLeft: '110px' }}>SOCIAL MEDIA MANAGEMENT</p>
        <Gallery imageList={socialMediaImages} />
      </div>
      <br /><br />
      {imagePopupOpen && (
        <div className="image-popup-container">
          <span className="close-button" onClick={handleImageClose}>
            &times;
          </span>
          <img src={popupImageSrc} alt="Popup" style={{ height: '600px', width: '600px' }} />
        </div>
      )}
    </div>
  );
}

export default App;
