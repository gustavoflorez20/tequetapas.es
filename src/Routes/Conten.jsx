import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../Styles/Conten.css';
import logoP from '../Images/Fondoprincipal.jpg';
import CookieAlert from '../Routes/CookieAlert';

const Conten = () => {
  const [props, set] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 150, friction: 10 },
  }));
  const [showCookieAlert, setShowCookieAlert] = useState(true);

  const handleCookieAlertClose = () => {
    setShowCookieAlert(false);
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-sky-50 to-gray-200 Conten-container">
      {showCookieAlert && <CookieAlert onClose={handleCookieAlertClose} />}
      <div className="imagen">
        <animated.img
          src={logoP}
          alt="Logo Tequetapas"
          width="800"
          onMouseEnter={() => set({ transform: 'scale(1.1)' })}
          onMouseLeave={() => set({ transform: 'scale(1)' })}
          style={props}
        />
      </div>
      <p className="Conten-text py-20">
        La felicidad en pequeñas dimensiones! 🤤

        Tequeños de plátano y queso fresco, disponibles para preparar en casa en blister de 8 unidades y bolsas de 85 unidades.

        📲 Mañana estamos activos para recibir todos sus pedidos.
        No nos hacemos responsables si tienes la necesidad de pedirte TODO 😏
      </p>
    </div>
  );
};

export default Conten;
