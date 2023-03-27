import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Person = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPerson = () => {
    const newIndex = (currentIndex - 1 + people.length) % people.length;
    setCurrentIndex(newIndex);
  };

  const nextPerson = () => {
    const newIndex = (currentIndex + 1) % people.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    let slideId = setInterval(() => {
      nextPerson();
      // clean function is used to avoid the sliding speed becomes faster
      return () => clearInterval(slideId);
    }, 5000);
  }, [currentIndex]);

  return (
    <div className="section-center">
      {people.map((person, index) => {
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
              opacity: index === currentIndex ? 1 : 0,
            }}
            key={person.id}
          >
            <img className="person-img" src={person.image} alt={person.name} />

            <h4>{person.name}</h4>
            <h4 className="title">{person.title}</h4>
            <p className="text">{person.quote}</p>
            <span className="icon">
              <FaQuoteRight />
            </span>
          </article>
        );
      })}
      <button className="prev" onClick={() => prevPerson()}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => nextPerson()}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Person;
