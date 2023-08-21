import { Container,Row,Col } from 'react-bootstrap';

type HangmanKeyboardProps ={
    activeLetters: string[]
    disabled?: boolean
    inactiveLetters:string[]
    addGuessedLetter: (letter: string) => void
}
export function HangmanKeyboard({activeLetters,disabled=false,inactiveLetters,addGuessedLetter,}: HangmanKeyboardProps) {
    const KEYS = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ]

     
    return(
        <div className="keyboard-container">
            <Container>
                <Row>
                    {KEYS.map(key => {
                         const isActive= activeLetters.includes(key)
                        const isinActive= inactiveLetters.includes(key)

                   return(
                    <Col xs="1"  className=' d-flex justify-content-center align-items-center key-box '>
                        <div className="keys">
                        <button disabled={isinActive || isActive || disabled} className={`keyboard-key ${isActive ? 'active' : (isinActive ? 'inactive' : '')}`}  key={key}  onClick={() => addGuessedLetter(key)}>{key}</button>
                       
                        </div>
                    </Col>
                    ) })}
                </Row>
            </Container>
        </div>

    )
    
}