type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}


export function HangmanWord({guessedLetters,reveal=false, wordToGuess}: HangmanWordProps) {
   
    return(
        <div className="hangman-word-container d-flex gap-3">
                {wordToGuess.split("").map((letter, index) => (
                    <span style={{ borderBottom: ".1em solid black"}} key={index}>
                        <span style={{
                            visibility:guessedLetters.includes(letter)|| reveal ? "visible"
                            : "hidden",
                            color: !guessedLetters.includes(letter) && reveal? "#dc3545" : "black" 
                        }}>{letter}</span></span>
                ))}
        </div>
    )
}