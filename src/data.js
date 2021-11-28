import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { BsInstagram } from "react-icons/bs";
export const links = [
  { text: "Home", url: "/", icon: <AiOutlineHome />, id: 1 },
  { text: "Products", url: "/products", icon: <GiClothes />, id: 2 },
  { text: "Contact", url: "/contact", icon: <AiOutlineContacts />, id: 3 },
];

export const social = {
  text: "Instagram",
  url: "https://www.instagram.com/abeyda_classic/",
  icon: <BsInstagram />,
  id: 1,
};
