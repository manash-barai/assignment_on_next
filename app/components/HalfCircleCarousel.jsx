"use client"
import React, { useEffect, useState } from 'react';

const CircleWithItems = ({ numItems = 8, itemContent = "Item" }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const circleElement = document.querySelector('.circle-container');
    const circleRadius = parseInt(getComputedStyle(circleElement).width) / 2;

    const newItems = [];
    for (let i = 0; i < numItems; i++) {
      const angle = (360 / numItems) * i;
      const x = circleRadius + circleRadius * Math.cos(angle * Math.PI / 180);
      const y = circleRadius + circleRadius * Math.sin(angle * Math.PI / 180);

      newItems.push({
        id: i,
        style: {
          top: `${y}px`,
          left: `${x}px`,
        },
        content: itemContent,
      });
    }

    setItems(newItems);
  }, [numItems, itemContent]);

  return (
    <div className="circle-container">
      <div className="circle"></div>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id} className="item" style={item.style}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleWithItems;