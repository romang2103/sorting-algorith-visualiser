import React from "react";
import "./style.css";

export function ArrayDisplay(props) {
    const itemWidth = 100 / props.arr.length + '%';
    return (
        <div className="chart-wrapper">
            <div className="array-container">
                {props.arr.map((num, index) => (
                    <div key={index} className="array-item" style={{ height: `${num*10}px`, width: `calc(100% / ${props.arr.length})`}}>
                        {num}
                    </div>
                ))}
            </div>
        </div>
    );
}