import { numberToDisplay } from "../utils/numberTodisplay";

const horizontalLed = {
  clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
  margin: " 0 8px",
  height: "10px"
};

const verticalLed = {
  clipPath: "polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%, 0% 10%)",
  height: "80px",
  width: "10px"
};

const display = {
  width: "80px"
};

const displayRow = {
  display: "flex",
  justifyContent: "space-between"
};

const SevenSegmentsDisplay = ({ number }) => {
  const arr = numberToDisplay(number);
  return (
    <div style={display}>
      <div
        style={{
          ...horizontalLed,
          background: !arr[0] ? "#2e2e2e" : "#00bd2b"
        }}
      />
      <div style={displayRow}>
        <div
          style={{
            ...verticalLed,
            background: !arr[1] ? "#2e2e2e" : "#00bd2b"
          }}
        />
        <div
          style={{
            ...verticalLed,
            background: !arr[2] ? "#2e2e2e" : "#00bd2b"
          }}
        />
      </div>
      <div
        style={{
          ...horizontalLed,
          background: !arr[3] ? "#2e2e2e" : "#00bd2b"
        }}
      />
      <div style={displayRow}>
        <div
          style={{
            ...verticalLed,
            background: !arr[4] ? "#2e2e2e" : "#00bd2b"
          }}
        />
        <div
          style={{
            ...verticalLed,
            background: !arr[5] ? "#2e2e2e" : "#00bd2b"
          }}
        />
      </div>
      <div
        style={{
          ...horizontalLed,
          background: !arr[6] ? "#2e2e2e" : "#00bd2b"
        }}
      />
    </div>
  );
};

export default SevenSegmentsDisplay;
