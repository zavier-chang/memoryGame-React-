import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import uuid from "uuid";
import deepcopy from "deepcopy";
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import backURL from './images/log.png'

// function shuffleArray(array) {
// 	return array.sort(() => .5 - Math.random());
// }
// function generateCards(count) {
// 	if (count % 2 !== 0)
// 		throw "Count must be even: 2, 4, 6, etc. but it is " + count;
// 	const cards = shuffleArray(cards)
// 		.slice(0, count / 2)
// 		.map(imageURL => ({
// 			id: uuid.v4(),
// 			imageURL: "public/images/" + imageURL,
// 			isFlipped: false,
// 			canFlip: true
// 		}))
// 		.flatMap(e => [e, {...deepcopy(e), id: uuid.v4()}]);
// 	return shuffleArray(cards);
// }

var cards = ["black.jpg", "blue.jpg", "brown.jpg", "gray.jpg", "orange.jpg", "purple.jpg",
             "black.jpg", "blue.jpg", "brown.jpg", "gray.jpg", "orange.jpg", "purple.jpg"];
// var cards2 = ["black.jpg", "blue.jpg", "brown.jpg", "gray.jpg", "orange.jpg", "purple.jpg"]

var cardsSet = new Set(cards);
// cardsSet.forEach( (item, key) => {
//   console.log(item,key);
// })
// (function stochastic() {
//   for (var i = cards.length - 1; i >= 0; i--) {
//     var randomIndex = Math.floor(Math.random() * (i + 1));
//     var itemAtIndex = cards[randomIndex];
//     cards[randomIndex] = cards[i];
//     cards[i] = itemAtIndex;
//   }
//   return cards
// })();
// const cardsItem =  Add (array) 
//   array.map( imageURL => ({
//     imageURL: "./public/images" + imageURL,
//     isFlipped: false
//   }))



function Card ({imageURL, isFlipped, onClick}) {
  var back = document.getElementById('back');
  // ReactDOM.findDOMNode(back).style.color='blue'
  return <div className={"card" + (isFlipped ? " flipped" : "")} onClick={onClick}>
			<Image className="side front" src={imageURL}/>
			<div className="side back" id="back" style={{backgroundColor: '#ff6700'}}>
        {/* <img src={backURL} alt=""/> */}
      </div>
  </div>
}
function Image ({ src, alt = "", style = {}, className = "", ...props }) {
  console.log(src);
  
  return <img src={src} alt={alt} style={style} className={className} {...props} />
}

// let hadFlipped = false;
// let lock = false;
// let firstCard, secondCard;
// let over = 0;

function NumberList ({fieldWidth=4, fieldHeight=3}) {
  const totalCards = fieldHeight*fieldHeight;
	// const [cards, setCards] = useState(generateCards(totalCards));
  function setSrc (card) {
    const imageURL = '/public/images/' + card;
    console.log(imageURL);  
  }
  
  function onCardClick(e,card) {
    e.currentTarget.className = 'card flip';
    console.log(e.currentTarget);
    
    setSrc(card) 


    // console.log(cardsSet);
    // cardsSet.forEach( (item, key) => {
    //   console.log(item);
    // })

    // if (lock) return;
    // this.classList.add('flip');
    
    
  }

  return (
    <section className="game">
        {cards.map( (card, key) => 
          <Card onClick={ (e) => onCardClick(e,card)} key={card.id} {...card}/>)}
    </section>
  );
}




ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <NumberList />
    {/* <NumberList /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
