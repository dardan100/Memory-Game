import React, { createContext, useContext, useEffect, useReducer } from "react";

const MemoryGameContext = createContext();

const initialState = {
  cards: [],
  filterCards: [],
  level: "", // easy, medium, hard
  status: "loading", // ready, playing, won, lost
  selectedCharacters: [],
  movesLeft: 0, // Number of moves for the game
};

function reducer(state, action) {
  switch (action.type) {
    case "receiveData": {
      return {
        ...state,
        cards: action.payload,
        filterCards: action.payload,
        status: "ready",
      };
    }
    case "setDifficulty": {
      const levels = {
        easy: { numCards: 3, numMoves: 5 },
        medium: { numCards: 4, numMoves: 7 },
        hard: { numCards: 6, numMoves: 10 },
      };

      const { numCards, numMoves } = levels[action.payload] || levels.easy; // Default to easy if undefined

      const shuffledCards = [...state.cards].sort(() => 0.5 - Math.random());
      const filteredCards = shuffledCards.slice(0, numCards);

      return {
        ...state,
        level: action.payload,
        selectedCharacters: [],

        movesLeft: numMoves,
        filterCards: filteredCards,
      };
    }
    case "start": {
      if (!state.level) {
        console.error("Cannot start the game without a difficulty level!");
        return state;
      }
      return {
        ...state,
        status: "playing",
      };
    }
    case "updateCards": {
      return {
        ...state,
        filterCards: action.payload,
      };
    }
    case "addSelectedCharacter": {
      return {
        ...state,
        selectedCharacters: [...state.selectedCharacters, action.payload],
      };
    }
    case "restartGame": {
      return {
        ...state,
        filterCards: [],
        selectedCharacters: [],
        status: "ready",
        level: "",
        movesLeft: 0, // Reset movesLeft when restarting
      };
    }
    default:
      console.error(`Unknown action type: ${action.type}`);
      return state;
  }
}

function MemoryGameProvider({ children }) {
  const [
    {
      cards,
      level,
      shuffledCards,
      status,
      filterCards,
      selectedCharacters,
      movesLeft,
      filteredCards,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const BASE_URL = "https://dragonball-api.com/api/characters";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Wait for 4 seconds before making the API call
        await new Promise((resolve) => setTimeout(resolve, 4000));

        const res = await fetch(BASE_URL);
        const data = await res.json();

        if (data.items) {
          dispatch({ type: "receiveData", payload: data.items });
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <MemoryGameContext.Provider
      value={{
        cards,
        level,
        status,
        filterCards,
        selectedCharacters,
        movesLeft,
        dispatch,
        shuffledCards,
        filteredCards,
      }}
    >
      {children}
    </MemoryGameContext.Provider>
  );
}

function useMemoryGame() {
  const context = useContext(MemoryGameContext);
  if (context === undefined) {
    throw new Error(
      "MemoryGameContext was used outside of the MemoryGameProvider"
    );
  }
  return context;
}

export { MemoryGameProvider, useMemoryGame };
