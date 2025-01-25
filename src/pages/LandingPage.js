import React from 'react';

function LandingPage() {
  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: 'black',
        position: 'relative',
        paddingTop: '107px',
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '107px',
          background: '#020202',
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}
      >
        <img
          src="/image.png"
          alt="Logo"
          style={{
            height: '100%',
            objectFit: 'contain',
            padding: '10px 0',
          }}
        />
      </div>

      <div
        style={{
          position: 'fixed',
          top: '26px',
          right: '20px',
          border: '1px solid #555555',
          borderRadius: '100px',
          padding: '15px 55px',
          display: 'flex',
          alignItems: 'center',
          zIndex: 1000,
        }}
      >
        <span
          style={{
            fontSize: '17.16px',
            fontFamily: 'Inter',
            fontWeight: '200',
            textTransform: 'uppercase',
            color: 'white',
          }}
        >
          Связаться
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)',
          width: '80%',
          maxWidth: '1200px',
          height: '80%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundImage: 'url(/image2.png)',
          backgroundSize: '60%',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            fontSize: '56px',
            fontFamily: "'Anonymous Pro', monospace",
            fontWeight: '400',
            color: 'white',
            whiteSpace: 'nowrap',
            zIndex: 1,
            marginLeft: '30%',
          }}
        >
          Enter-code –<br />
          Космос теперь в наших руках.
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '53%',
          right: '12%',
          transform: 'translateY(-50%)',
          width: '40%',
          maxWidth: '600px',
          color: 'rgba(255, 255, 255, 0.65)',
          fontSize: '26px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '400',
          lineHeight: '20px',
          textAlign: 'justify',
        }}
      >
        <div style={{ marginBottom: '80px' }}>
          Сегодня разработка и выведение на рынок конкурентоспособных изделий
          невозможно без использования современных компьютерных инженерных систем,
          особенно когда речь идет про дорогостоящее оборудование.
        </div>
        <div>
          Мы разрабатываем программное обеспечение для моделирования спутниковых
          систем связи, инструмент для возможности создать спутниковую группировку
          и проверить её топологию. Создается данный инструмент на основе
          технологии трехмерного моделирования большого количества объектов (более
          1000).
        </div>
      </div>
    </div>
  );
}

export default LandingPage;