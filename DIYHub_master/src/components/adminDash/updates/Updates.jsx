import React from 'react';
import './Updates.css';

const Updates = () => {
  const updatesData = [
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      name: 'Alice Johnson',
      activity: 'Purchased new products',
      time: '2 hours ago',
    },
    {
      id: 2,
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'Bob Smith',
      activity: 'Left a review on product',
      time: '3 hours ago',
    },
    {
      id: 3,
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      name: 'Carol Williams',
      activity: 'Added items to wishlist',
      time: '5 hours ago',
    },
    {
      id: 4,
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      name: 'David Brown',
      activity: 'Started following your page',
      time: '1 day ago',
    },
  ];

  return (
    <div className="updates-container">
      {updatesData.map((update) => (
        <div className="update-item" key={update.id}>
          <img src={update.image} alt={update.name} className="update-image" />
          <div className="update-content">
            <h4 className="update-name">{update.name}</h4>
            <p className="update-activity">{update.activity}</p>
            <span className="update-time">{update.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updates;
