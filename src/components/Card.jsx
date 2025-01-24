import React, { useState } from "react";
import "../App.css";
import { useMemoryGame } from "../context/ContextApi";
import Lose from "../ui/Lose";
import Win from "../ui/Win";
import flipSound from "../assets/sound/flipSound.mp3";

export default function Card({ clickCount, setClickCount }) {
  const {
    cards,
    dispatch,
    selectedCharacters,
    filterCards,
    status,
    level,
    movesLeft,
  } = useMemoryGame();

  const [loseGame, setLoseGame] = useState(false); // State to track if the game is over
  const [winGame, setWinGame] = useState(false); // State to track if the game is won
  const [allFlipped, setAllFlipped] = useState(false); // State to track if all cards are flipped
  const [flipTimeout, setFlipTimeout] = useState(null); // State to track the flip timeout

  const getCardCountByDifficulty = () => {
    switch (level) {
      case "hard":
        return 6; // 6 cards for hard level
      case "medium":
        return 4; // 4 cards for medium level
      case "easy":
        return 3; // 3 cards for easy level
      default:
        return 0;
    }
  };

  const playSound = () => {
    new Audio(flipSound).play();
  };

  const handleCardClick = (card) => {
    if (!level || status !== "playing") {
      alert("Please select a difficulty level and start the game!");
      return;
    }

    // Check if the card has already been clicked
    if (selectedCharacters.includes(card.name)) {
      setLoseGame(true); // Set game over state to true
      return;
    }

    // Flip all cards
    setAllFlipped(true);

    if (
      clickCount + 1 === movesLeft &&
      selectedCharacters.length + 1 === movesLeft
    ) {
      setWinGame(true);

      return;
    }

    // Play the sound
    playSound();

    // Add the selected character
    dispatch({ type: "addSelectedCharacter", payload: card.name });

    setClickCount((prev) => prev + 1);

    const cardCount = getCardCountByDifficulty();

    setFlipTimeout(
      setTimeout(() => {
        setAllFlipped(false);
        const shuffledCards = cards.sort(() => 0.5 - Math.random());
        const newFilterCards = shuffledCards.slice(0, cardCount);
        dispatch({ type: "updateCards", payload: newFilterCards });
      }, 800)
    );
  };

  const restartGame = () => {
    setClickCount(0);
    setLoseGame(false); // Reset game over state
    setWinGame(false); // Reset win state
    setAllFlipped(false); // Reset all flipped state
    clearTimeout(flipTimeout); // Clear any pending timeouts
    dispatch({ type: "restartGame" });
  };

  if (loseGame) {
    return <Lose restartGame={restartGame} />; // Render Lose component if game is over
  }

  if (winGame) {
    return <Win restartGame={restartGame} />; // Render Win component if game is won
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-2 content-center mt-4 px-4">
        {filterCards.map((card, index) => (
          <div
            key={card.id || card.name || index}
            onClick={() => handleCardClick(card)}
            className="flex items-center justify-center"
          >
            <div
              className={`flip-card h-[200px] ${allFlipped ? "flipped" : ""}`}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-content flex flex-col mt-2 xl:mt-6 items-center justify-center">
                    <img
                      className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform hover:scale-110 gap-5 max-h-[100px] md:max-h-[140px] 2xl:max-h-[200px] img object-cover"
                      src={card.image}
                      alt="DBimage"
                    />
                    <div className="bg-gradient-to-r from-violet-700 to-fuchsia-500 text-black mt-2 px-4 md:px-10 md:text-base text-sm xl:text-xl font-bold flex items-center justify-center py-1 xl:px-[100px] rounded-lg">
                      <p className="text-white">{card.name}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="flip-card-back"
                  style={{
                    backgroundImage: `url(https://images2.alphacoders.com/100/thumb-1920-1003880.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
