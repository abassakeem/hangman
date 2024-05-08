import { useCallback, useEffect, useState } from "react";
import words from "./../wordList.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { HangmanDrawing } from "./../HangmanDrawing";

import { Container, Row, Col } from "react-bootstrap";
import { HangmanWord } from "./../HangmanWord";
import { HangmanKeyboard } from "./../HangmanKeyboard";
import Home from "./components/landingpage";

const Game = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  return (
    <>
    <div className="game-container vh-100">

   
      <Container>
        {" "}
        <h1 className="text-center mt-3 game-header">Hangman</h1>
        <Row className="d-flex  justify-content-between align-items-center">
          {" "}
          <Col xs={12} md={3} className="mt-5">
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
          </Col>
          <Col xs={12} md={3} className="text-center">
            <Col className="lose-win  text-center">
              {isWinner ? (
                <div>
                  <h5 className="text-primary">YOU WONNN 😄</h5>
                  <p>Play another Round ?😏</p>
                  <span className="text-primary">
                    {" "}
                    Press Enter To Restart Or Click ---{" "}
                  </span>{" "}
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => window.location.reload()}
                  >
                    another game?
                  </button>
                </div>
              ) : null}
              {isLoser ? (
                <div>
                  <h5 className="text-danger">Better luck next time 😢</h5>{" "}
                  <p className="text-danger">
                    {" "}
                    Press Enter To Restart Or Click
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => window.location.reload()}
                    >
                      Retry
                    </button>{" "}
                  </p>
                </div>
              ) : null}
            </Col>
            <HangmanWord
              reveal={isLoser}
              guessedLetters={guessedLetters}
              wordToGuess={wordToGuess}
            />
          </Col>
          <Col xs={12} className="mt-5">
            <HangmanKeyboard
              disabled={isWinner || isLoser}
              activeLetters={guessedLetters.filter((letter) =>
                wordToGuess.includes(letter)
              )}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
            />
          </Col>
        </Row>
      </Container> </div>
    </>
  );
};

export default Game;
