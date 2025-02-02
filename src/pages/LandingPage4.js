import React, { useState } from "react";

const LandingPage4 = () => {
  const [showTeam, setShowTeam] = useState(false);

  const toggleTeam = () => {
    setShowTeam(!showTeam);
  };

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
        overflow: "hidden",
      }}
    >
      {showTeam && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(5px)", // Эффект размытия фона
            zIndex: 999,
          }}
        />
      )}

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
              cursor: "pointer",
            }}
            onClick={scrollToTop}
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
              cursor: "pointer",
            }}
            onClick={toggleTeam}
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
          {/* <div style={{ display: "flex", flexDirection: "column", gap: "2%", flex: "1 1 10%" }}>
            <div style={{ color: "white", fontSize: "1.3vw", fontFamily: "Inter", fontWeight: "400", lineHeight: "2vw", cursor: "pointer" }} onClick={scrollToTop}>
              Enter-code
            </div>
            <div style={{ color: "white", fontSize: "1.3vw", fontFamily: "Inter", fontWeight: "400", lineHeight: "2vw" }}>
              Услуги Enter-code
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2%", flex: "1 1 10%" }}>
            <div style={{ color: "white", fontSize: "1.3vw", fontFamily: "Inter", fontWeight: "400", lineHeight: "2vw", cursor: "pointer" }} onClick={toggleTeam}>
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
          </div> */}
        </div>

        <div
          style={{
            position: "absolute",
            top: "68.6%",
            right: "12%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "4%",
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
          ООО "Интер код", ИНН/ОГРН - 2462078020/1242400023029
          <br />
          Красноярский край, город Красноярск, ул. Инициаторов 19
        </div>

        {showTeam && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40%",
              maxWidth: "700px",
              background: "#0C0C0C",
              borderRadius: "20px",
              border: "1px solid #555555",
              padding: "20px",
              zIndex: 1000,
              color: "white",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "1.7vw", fontFamily: "'Anonymous Pro', monospace", marginBottom: "20px" }}>
              Наша команда
            </h2>
            <p style={{ fontSize: "1.2vw", fontFamily: "'Anonymous Pro', monospace", lineHeight: "1.5" }}>
              Мы — команда профессионалов, работающих над созданием инновационных решений для космической отрасли.
            </p>
            <p>Никита - директор компании, программист с опытом разработки наукоёмкого ПО.</p>
            <p>Никита - тимлидер, программист с опытом работы в разработке коммерческого ПО.</p>
            <p>Дмитрий - back-end программист.</p>
            <p>Антон - back-end программист.</p>
            <p>Даниил - 3D графика, front-end программист.</p>
            <p>Иван - front-end программист.</p>
            <button
              onClick={toggleTeam}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "1vw",
                background: "#A18CD1",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.background = "#7D5B9B"}
              onMouseLeave={(e) => e.target.style.background = "#A18CD1"}
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage4;