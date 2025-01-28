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
            position: "relative" 
        }}>
            <div style={{
                width: "509px", 
                height: "484px", 
                position: "absolute",
                background: "#2A3843", 
                boxShadow: "0px 0px 25px black", 
                borderRadius: "1000px", 
                overflow: "hidden",
                right: "23%",
                bottom: "47%",
            }}>
                <img style={{ 
                    width: "509px", 
                    height: "524px", 
                    position: "absolute", 
                    top: "-20px", 
                    borderRadius: "40px" 
                }} 
                     src="/image5.png" alt="Спутниковая система" />
            </div>
            <div style={{ 
                width: "30%", 
                color: "white", 
                fontSize: "54px", 
                fontFamily: "Inter, ",
                fontWeight: "200", 
                textTransform: "uppercase", 
                lineHeight: "66px", 
                wordWrap: "break-word",
                textAlign: "left",
                position: "absolute",
                bottom: "80%",
                left: "15%"
            }}>
                инновационное спутниковое ПО
            </div>
            <div style={{ 
                width: "30%", 
                color: "#FFFEFE", 
                fontSize: "26px", 
                fontFamily: "Inter", 
                fontWeight: "200", 
                wordWrap: "break-word",
                textAlign: "left",
                position: "absolute",
                bottom: "40%",
                left: "15%"
            }}>
                Мы создаём специализированное программное обеспечение для моделирования многоспутниковых группировок и проверки их работоспособности, средство передачи данных, которое позволит математически оценить работоспособность спутниковой группировки до её реального вывода на орбиту. Имеется несколько ключевых серьезных идей которые будут сильно отличать эту программу от конкурентов и, возможно, станет новым словом в моделировании физических процессов.
            </div>
        </div>
    );
};

export default LandingPage3;