import styles from './WhatsAppButton.module.css';

function WhatsAppButton() {
  const phone = '1234567890';  // replace with your phone number
  const text = encodeURIComponent('Hello! I have a query.');

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div className={styles.whatsapp} onClick={handleClick}>
      <img src="/whatsapp-logo.png" alt="WhatsApp" />
    </div>
  );
}

export default WhatsAppButton;
