import React from 'react';

const width = 50;
const height = 50;
const lineCount = 3;
const lineSpace = 10;

const array = [...new Array(lineCount).keys()];
const classColorList = ['main', 'second', 'third'];

export default function Arrow(props) {
  return (
    <div className="arrow" onClick={props.onClick}>
      <svg height={height + (lineCount - 1) * lineSpace} width={width}>
        {array.map((index) => (
          <line
            x1="0"
            y1={index * lineSpace}
            x2={width / 2}
            y2={height / 2 + index * lineSpace}
            className={`${classColorList[index % classColorList.length]}-color`}
            key={index}
          />
        ))}

        {array.map((index) => (
          <line
            x1={width}
            y1={index * lineSpace}
            x2={width / 2}
            y2={height / 2 + index * lineSpace}
            className={`${classColorList[index % classColorList.length]}-color`}
            key={index}
          />
        ))}
      </svg>
    </div>
  );
}
