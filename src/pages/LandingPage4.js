import React from "react";

const LandingPage4 = () => {
  return (
    <div style={{ width: "100%", Height: "100vh", position: "relative", background: "black", padding: "20px", boxSizing: "border-box" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "1309px",
          margin: "0 auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <div
            style={{
              flex: "1 1 200px",
              padding: "20px",
              borderRadius: "10px",
              border: "1px white solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontSize: "22px",
              fontFamily: "Inter",
              fontWeight: "300",
              textTransform: "uppercase",
              lineHeight: "33px",
            }}
          >
            Enter-code
          </div>
          <div
            style={{
              flex: "1 1 200px",
              padding: "20px",
              borderRadius: "10px",
              border: "1px white solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontSize: "22px",
              fontFamily: "Inter",
              fontWeight: "300",
              textTransform: "uppercase",
              lineHeight: "33px",
            }}
          >
            Наши услуги
          </div>
          <div
            style={{
              flex: "1 1 200px",
              padding: "20px",
              borderRadius: "10px",
              border: "1px white solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontSize: "22px",
              fontFamily: "Inter",
              fontWeight: "300",
              textTransform: "uppercase",
              lineHeight: "33px",
            }}
          >
            Команда
          </div>
          <div
            style={{
              flex: "1 1 200px",
              padding: "20px",
              borderRadius: "10px",
              border: "1px white solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontSize: "22px",
              fontFamily: "Inter",
              fontWeight: "300",
              textTransform: "uppercase",
              lineHeight: "33px",
            }}
          >
            Наши проекты
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", gap: "20px", marginTop: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ color: "white", fontSize: "17px", fontFamily: "Inter", fontWeight: "400", lineHeight: "17px" }}>
              Enter-code
            </div>
            <div style={{ color: "white", fontSize: "17px", fontFamily: "Inter", fontWeight: "400", lineHeight: "17px" }}>
              Услуги Enter-code
            </div>
            <div style={{ color: "white", fontSize: "17px", fontFamily: "Inter", fontWeight: "400", lineHeight: "17px" }}>
              Команда
            </div>
            <div style={{ color: "white", fontSize: "17px", fontFamily: "Inter", fontWeight: "400", lineHeight: "17px" }}>
              Наши проекты
            </div>
            <div style={{ color: "white", fontSize: "17px", fontFamily: "Inter", fontWeight: "400", lineHeight: "17px" }}>
              О компании
            </div>
            <div style={{ color: "white", fontSize: "17px", fontFamily: "Inter", fontWeight: "400", lineHeight: "17px" }}>
              Контакты
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "20px" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ color: "#A18CD1", fontSize: "16.87px", fontFamily: "Inter", fontWeight: "500", textTransform: "uppercase", lineHeight: "22px" }}>
                telegram
              </div>
            </div>
            <div style={{ color: "#A18CD1", fontSize: "16.87px", fontFamily: "Inter", fontWeight: "500", textTransform: "uppercase", lineHeight: "22px" }}>
              made in Moxitech team
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage4;