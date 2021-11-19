const display = {
  width: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
};

const dot = {
  height: "8px",
  width: "8px",
  background: "#00bd2b"
};

const Dots = () => {
  return (
    <div style={display}>
      <div style={dot} />
      <div style={dot} />
    </div>
  );
};

export default Dots;
