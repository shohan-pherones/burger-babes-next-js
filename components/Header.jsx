import Image from "next/image";
import { UilShoppingBag } from "@iconscout/react-unicons";
import Logo from "../assets/Logo.png";
import css from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Image src={Logo} alt="logo" width={50} height={50} />
        <span>Burger Babes</span>
      </div>
      <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
      <div className={css.right}>
        <div className={css.cart}>
          <UilShoppingBag size={35} color="#2E2E2E" />
          <div className={css.badge}>5</div>
        </div>
      </div>
    </div>
  );
}
