import React from 'react';
import './card.css';
import Cards from '../../cards/cards';
import { HiCurrencyRupee } from 'react-icons/hi';
import { BiShoppingBag } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';

const Card = () => {
  const cardsdata = [
    {
      title: 'Sales',
      color: {
        backGround: "linear-gradient(180deg, rgba(163, 255, 188, 1) 0%, rgba(0, 128, 0, 1) 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5"
      },
      barValue: 70,
      value: "25,970",
      png: HiCurrencyRupee,
      series: [
        {
          name: "Sales",
          data: [1, 40, 28, 51, 42, 109, 100]
        }
      ]
    },
    {
      title: 'Farmers',
      color: {
        backGround: "linear-gradient(180deg, rgba(80, 200, 120, 1) 0%, rgba(0, 128, 64, 1) 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5"
      },
      barValue: 81,
      value: "35,790",
      png: BiShoppingBag,
      series: [
        {
          name: "Farmer Earning",
          data: [2, 70, 38, 51, 42, 19, 90]
        }
      ]
    },
    {
      title: 'Retailers',
      color: {
        backGround: "linear-gradient(180deg, rgba(34, 139, 34, 1) 0%, rgba(0, 100, 0, 1) 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5"
      },
      barValue: 60,
      value: "10,970",
      png: BsPerson,
      series: [
        {
          name: "Retailers saving",
          data: [5, 40, 128, 31, 52, 119, 70]
        }
      ]
    }
  ];

  return (
    <div className="Cards">
      {cardsdata.map((cards, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Cards
              title={cards.title}
              color={cards.color}
              barValue={cards.barValue}
              value={cards.value}
              png={cards.png}
              series={cards.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
