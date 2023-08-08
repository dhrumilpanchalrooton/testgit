"use client";

import React, { useState } from 'react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton: React.FC = () => {
  const [showTemplate, setShowTemplate] = useState(false);

  const handleLogoClick = () => {
    setShowTemplate(prev => !prev);
  };

  const handleButtonClick = () => {
    console.log("Clicked!"); // Check if this message appears in the console
    window.open("https://wa.me/8200826363", "_blank", "width=600,height=400,left=200,top=200");
  };

  return (
    <div className={styles.container}>
      {showTemplate && (
        <div className={styles.template}>
          <p>Would you like to contact us on WhatsApp?</p>
          <button onClick={handleButtonClick}>Yes, contact now!</button>
        </div>
      )}
      {/* https://t3.ftcdn.net/jpg/05/32/20/62/360_F_532206245_N1xYEHrZVIWU1ihamWwmDbh1gZWGU7Jl.jpg */}
      <div onClick={handleLogoClick} className={styles.logo}>
        <img src="./WhatsApp.svg" alt="WhatsApp" />
      </div>
    </div>
  );
}

export default WhatsAppButton;
