import {
  UilFacebook,
  UilInstagram,
  UilTwitter,
} from "@iconscout/react-unicons";
import css from "../styles/Footer.module.css";
import Logo from "../assets/Logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={css.wrapper}>
      <span>
        &copy; {new Date().getFullYear()} Burger Babes. All rights reserved.
      </span>
      <div className={css.socials}>
        <UilFacebook size={35} />
        <UilInstagram size={35} />
        <UilTwitter size={35} />
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="logo" width={50} height={50} />
        <span>Burger Babes</span>
      </div>
    </div>
  );
}
