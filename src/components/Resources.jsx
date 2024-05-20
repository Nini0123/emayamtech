import React, { useState } from 'react';
import './Resources.css'

function App() {
  const webDevelopmentImages = [
    { id: 11, src: '../images/f1.jpg' },
    { id: 12, src: '../images/f2.jpeg' },
    { id: 13, src: '../images/f4.jpeg' },
    { id: 14, src: '../images/f3.jpeg' },
  ];

  const socialMediaImages = [
    { id: 1, src: '../images/t-1.png' },
    { id: 2, src: '../images/t-10.png' },
    { id: 10, src: '../images/a.png' },
    { id: 3, src: '../images/t-3.png' },
    { id: 4, src: '../images/t-9.png' },
    { id: 5, src: '../images/t-11.png' },
    { id: 6, src: '../images/t-7.png' },
    { id: 7, src: '../images/t-4.png' },
    { id: 8, src: '../images/t-8.png' },
    { id: 9, src: '../images/t-2.png' },
    { id: 15, src: '../images/b.png' },
    { id: 16, src: '../images/c.png' },
    { id: 17, src: '../images/ee.png' },
    { id: 18, src: '../images/f.png' },
    { id: 19, src: '../images/g.png' },
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
          <img src="/images/back1.jpg" alt="mage" style={{ height: '300px', width: '1200px' }} />
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
