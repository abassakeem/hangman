const HEAD = (
  <div
    className="head"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "30px",
      right: "-20px",
    }}
  />
);

const BODY = (
  <div
    className="body"
    style={{
      width: "10px",
      height: "150px",
      
      background: "black",
      position: "absolute",
      top: "70px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    className="right-arm"
    style={{
      width: "90px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "160px",
      right: "-90px",
      borderRadius:"30px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    className="left-arm"
    style={{
      width: "90px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "160px",
      right: "10px",
      rotate: "30deg",
      borderRadius:"30px",
      transformOrigin: "right bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    className="left-leg"
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      borderRadius:"30px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    className="right-leg"
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      borderRadius:"30px",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="d-flex flex-row justify-content-center ">
      <div className="hangman-drawing-cover">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="small-verical-bar"></div>
        <div className="top-bar"></div>
        <div className="vertical-bar d-flex justify-self-center align-self-center"></div>
        <div className="bottom-bar "></div>
      </div>
    </div>
  );
}
