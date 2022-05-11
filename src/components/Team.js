import React from 'react';
import './Team.css';
import CardItem from './CardItem';

function Team() {
  return (
    <>
      <div className="team-container">
        <h1>Meet the Team</h1>

        <div className="cards-container">
          <div className="cards-wrapper">
            <ul className="cards-items">
              <CardItem
                src="img/avi.png"
                name="Hugo"
                ig="@hugothebarbermn"
                bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium assumenda, obcaecati sed inventore ad repellendus."
              />
              <CardItem
                src="img/avi.png"
                name="Hugo"
                ig="@hugothebarbermn"
                bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium assumenda, obcaecati sed inventore ad repellendus."
              />
              <CardItem
                src="img/avi.png"
                name="Hugo"
                ig="@hugothebarbermn"
                bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium assumenda, obcaecati sed inventore ad repellendus."
              />
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

export default Team