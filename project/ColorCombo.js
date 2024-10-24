let ColorMix = (color1, color2) => {
  switch (true) {
    case (color1 === "red" && color2 === "blue") ||
      (color1 === "blue" && color2 === "red"):
      return "Purple";
      break;
    case (color1 === "red" && color2 === "yellow") ||
      (color1 === "yellow" && color2 === "red"):
      return "orange";
      break;
    case (color1 === "blue" && color2 === "yellow") ||
      (color1 === "yellow" && color2 === "blue"):
      return "green";
      break;
    default:
      return "Invalid Color Combination";
  }
};

console.log(ColorMix("blue", ""));
