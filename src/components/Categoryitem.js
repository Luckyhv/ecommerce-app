import React from 'react'

function Categoryitem({ item }) {
    return (
        <div style={{
            flex: "1",
            margin: "3px",
            height: "70vh",
            position: "relative"
        }}>
            <div className="imgcont" >
                <img src={item.img} alt="" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }} />
            </div>
            <div className="info" style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div className="title1" style={{
                    fontSize:"38px",
                    color: "white",
                    marginBottom: "20px"
                }}>
                    {item.title}</div>
                <button style={{
                    border: "none",
                    padding: "10px",
                    backgroundColor: "white",
                    color: "gray",
                    cursor: "pointer",
                    fontWeight: "500"
                }}>SHOP NOW</button>
            </div>
        </div>
    )
}

export default Categoryitem
