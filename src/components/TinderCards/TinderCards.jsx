import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "../../Firebase";
import { collection, onSnapshot } from "firebase/firestore";

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(()=>{
    const colRef = collection(database, 'people');
    var unsubscribe = onSnapshot(colRef, (snapshot)=>{
      setPeople(snapshot.docs.map((doc)=>{
        return doc.data();
      }));
    })

    return () =>{
      unsubscribe();
    }
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              // preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
