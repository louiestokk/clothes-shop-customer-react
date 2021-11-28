import React, { useState, useContext, useEffect } from "react";
const imagesArray = [
  "../images/slider-2.jpeg",
  "../images/slider-1-1.jpg",
  "../images/bag.jpg",
  "../images/shoesjpg.jpg",
  "../images/officeclothes.jpg",
];
const textArray = [
  "Modern And Classic Kids Clothes",
  "Big Selection Of Women's Clothing ",
  "Many nice women's bags",
  "shoes for all purposes ",
  "office clothes for everyone ",
];
const colorArray = ["white", "black", "#ec4899"];
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [images, setImages] = useState(imagesArray);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(textArray);
  const [colors, setColors] = useState(colorArray);
  const [show, setShow] = useState(false);
  const slider = () => {
    setIndex((old) => {
      let newValue = old + 1;
      if (newValue > imagesArray.length - 1) {
        newValue = 0;
      }
      return newValue;
    });
    setTimeout(() => {
      slider();
    }, 4000);
  };
  useEffect(() => {
    slider();
  }, []);
  return (
    <AppContext.Provider
      value={{
        index,
        text,
        show,
        setShow,
        images,
        colors,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
