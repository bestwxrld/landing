import React from "react";

const LandingPage4 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div
      style={{
        width: "100%",
        Height: "100vh",
        position: "relative",
        background: "black",
        padding: "2%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "80%",
          margin: "0 auto",
          padding: "2%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "5%",
          }}
        >
          <div
            style={{
              flex: "1 1 30%",
              minHeight: "130px",
              padding: "2%",
              borderRadius: "10px",
              border: "1px white solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontSize: "1.5vw",
              fontFamily: "Inter",
              fontWeight: "300",
              textTransform: "uppercase",
              lineHeight: "3vw",
              cursor: "pointer", // Добавлено, чтобы указать, что элемент кликабельный
            }}
            onClick={scrollToTop} // Обработчик клика для прокрутки вверх
          >
            Enter-code
          </div>
          <div
            style={{
              flex: "1 1 30%",
              padding: "2%",
              minHeight: "130px",
              borderRadius: "10px",
              border: "1px white solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontSize: "1.5vw",
              fontFamily: "Inter",
              fontWeight: "300",
              textTransform: "uppercase",
              lineHeight: "3vw",
            }}
          >
            Наши услуги
          </div>
          <div
            style={{
              flex: "1 1 30%",
              padding: "2%",
              minHeight: "130px",
              borderRadius: "10px",
              border: "1px white solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontSize: "1.5vw",
              fontFamily: "Inter",
              fontWeight: "300",
              textTransform: "uppercase",
              lineHeight: "3vw",
            }}
          >
            Команда
          </div>
          <div
            style={{
              flex: "1 1 30%",
              minHeight: "130px",
              padding: "2%",
              borderRadius: "10px",
              border: "1px white solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontSize: "1.5vw",
              fontFamily: "Inter",
              fontWeight: "300",
              textTransform: "uppercase",
              lineHeight: "3vw",
            }}
          >
            Наши проекты
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "4%",
            flexWrap: "wrap",
            marginTop: "4%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2%", flex: "1 1 10%" }}>
            <div style={{ color: "white", fontSize: "1.3vw", fontFamily: "Inter", fontWeight: "400", lineHeight: "2vw" }}>
              Enter-code
            </div>
            <div style={{ color: "white", fontSize: "1.3vw", fontFamily: "Inter", fontWeight: "400", lineHeight: "2vw" }}>
              Услуги Enter-code
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2%", flex: "1 1 10%" }}>
            <div style={{ color: "white", fontSize: "1.3vw", fontFamily: "Inter", fontWeight: "400", lineHeight: "2vw" }}>
              Команда
            </div>
            <div style={{ color: "white", fontSize: "1.3vw", fontFamily: "Inter", fontWeight: "400", lineHeight: "2vw" }}>
              Наши проекты
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2%", flex: "1 1 50%" }}>
            <div style={{ color: "white", fontSize: "1.3vw", fontFamily: "Inter", fontWeight: "400", lineHeight: "2vw" }}>
              О компании
            </div>
            <div style={{ color: "white", fontSize: "1.3vw", fontFamily: "Inter", fontWeight: "400", lineHeight: "2vw" }}>
              Контакты
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "68.6%",
            right: "12%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "2%",
          }}
        >
          <div style={{ display: "flex", gap: "2%" }}>
            <a
              href="https://t.me/goldsteper"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#A18CD1",
                fontSize: "1.3vw",
                fontFamily: "Inter",
                fontWeight: "400",
                textTransform: "uppercase",
                lineHeight: "2vw",
                textDecoration: "none",
              }}
            >
              telegram
            </a>
          </div>
          <div
            style={{
              color: "#A18CD1",
              fontSize: "1.3vw",
              fontFamily: "Inter",
              fontWeight: "400",
              textTransform: "uppercase",
              lineHeight: "2vw",
            }}
          >
            made in Moxitech team
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "2%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255, 255, 255, 0.65)",
            fontSize: "0.7vw",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          ООО "Интер код", ИНН/ОГРН - 2462078020/1242400023029<br />
          Красноярский край, город Красноярск, ул. Инициаторов 19
        </div>
      </div>
    </div>
  );
};

export default LandingPage4;

