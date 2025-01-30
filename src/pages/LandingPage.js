import React, { useState, useRef, useEffect } from "react";

function LandingPage() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  // Закрытие выпадающего списка при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "black",
        position: "relative",
        paddingTop: "107px",
        overflowX: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "107px",
          background: "#020202",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <img
          src="/image.png"
          alt="Logo"
          style={{
            height: "80px",
            objectFit: "contain",
            padding: "10px 0",
          }}
        />
      </div>

      <div
        style={{
          position: "fixed",
          top: "26px",
          right: "20px",
          border: "1px solid #555555",
          borderRadius: "100px",
          padding: "15px 55px",
          display: "flex",
          alignItems: "center",
          zIndex: 1000,
          cursor: "pointer",
        }}
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        <span
          style={{
            fontSize: "1vw",
            fontFamily: "Inter",
            fontWeight: "200",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          Связаться
        </span>
        {isDropdownVisible && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              marginTop: "10px",
              background: "#020202",
              border: "1px solid #555555",
              borderRadius: "10px",
              padding: "10px",
              zIndex: 1001,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "1vw",
                fontFamily: "Inter",
                fontWeight: "200",
              }}
            >
              89832849018
            </div>
            <a
              href="https://t.me/goldsteper"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
                fontSize: "1vw",
                fontFamily: "Inter",
                fontWeight: "200",
                textDecoration: "none",
              }}
            >
              t.me/goldsteper
            </a>
          </div>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          width: "80%",
          maxWidth: "1200px",
          height: "55%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundImage: "url(/image2.png)",
          backgroundSize: "contain",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            fontSize: "2.5vw",
            fontFamily: "'Anonymous Pro', monospace",
            fontWeight: "400",
            color: "white",
            whiteSpace: "nowrap",
            zIndex: 1,
            marginLeft: "15%",
          }}
        >
          Enter-code –<br /> Космос теперь в наших руках.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "53%",
          right: "6%",
          transform: "translateY(-50%)",
          width: "40%",
          maxWidth: "600px",
          color: "rgba(255, 255, 255, 0.65)",
          fontSize: "1vw",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "400",
          lineHeight: "1.4",
          textAlign: "justify",
        }}
      >
        <div style={{ marginBottom: "5vw" }}>
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