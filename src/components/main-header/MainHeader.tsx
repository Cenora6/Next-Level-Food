import logoImg from "@/assets/logo.png";
import styles from "./MainHeader.module.css";
import Link from "next/link";
import Image from "next/image";
import { MainHeaderBackground } from "./main-header-background/MainHeaderBackground";

export const MainHeader: React.FC = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={"/meals"}>Browse Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
