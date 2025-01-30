import React from "react";

const LandingPage3 = () => {
    return (
        <div style={{ 
            width: "100vw", 
            height: "100vh", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            background: "black", 
            position: "relative",
        }}>
            <div style={{
                width: "25%", 
                height: "50%", 
                position: "absolute",
                background: "#2A3843", 
                boxShadow: "0px 0px 25px black", 
                borderRadius: "1000px", 
                overflow: "hidden",
                right: "10%",
                bottom: "35%",
            }}>
                <img style={{ 
                    width: "100%", 
                    height: "110%", 
                    position: "absolute", 
                    top: "-5%", 
                    borderRadius: "40px" 
                }} 
                     src="/image5.png" alt="Спутниковая система" />
            </div>
            <div style={{ 
                width: "30%", 
                color: "white", 
                fontSize: "3vw", 
                fontFamily: "Inter, sans-serif",
                fontWeight: "200", 
                textTransform: "uppercase", 
                lineHeight: "4vw", 
                wordWrap: "break-word",
                textAlign: "left",
                position: "absolute",
                top: "10%",
                left: "10%"
            }}>
                инновационное спутниковое ПО
            </div>
            <div style={{ 
                width: "30%", 
                color: "#FFFEFE", 
                fontSize: "1.2vw", 
                fontFamily: "Inter, sans-serif", 
                fontWeight: "200", 
                wordWrap: "break-word",
                textAlign: "left",
                position: "absolute",
                top: "40%",
                left: "10%"
            }}>
                Мы создаём специализированное программное обеспечение для моделирования многоспутниковых группировок и проверки их работоспособности, средство передачи данных, которое позволит математически оценить работоспособность спутниковой группировки до её реального вывода на орбиту. Имеется несколько ключевых серьезных идей которые будут сильно отличать эту программу от конкурентов и, возможно, станет новым словом в моделировании физических процессов.
            </div>
        </div>
    );
};

export default LandingPage3;