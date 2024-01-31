import React from 'react'

const CircularProgressBar = ({ values, colors }) => {
    const radius = 55;
    const strokeWidth = 13;
    const circumference = 2 * Math.PI * radius;

    const calculateDashOffset = (percentage) => {
        const progress = percentage / 100;
        return circumference * (1 - progress);
    };
    return (
        <svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
            {values.map((value, index) => {
                const dashOffset = calculateDashOffset(value);
                return (
                    <g key={index}>
                        <circle
                            key={index}
                            cx={radius}
                            cy={radius}
                            r={radius - strokeWidth / 2}
                            fill="none"
                            stroke={colors[index]}
                            strokeWidth={strokeWidth}
                            strokeDasharray={circumference}
                            strokeDashoffset={dashOffset}
                        />
                        <text x={(98 - value)+strokeWidth} y={35} style={{ transform: 'scaleX(-1) rotate(117deg)',fontSize:'14px'}}> {value}% </text>
                    </g>
                );
            })}
        </svg>
    )
}

export default CircularProgressBar