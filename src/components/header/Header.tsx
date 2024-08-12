import Image from "next/image";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <>
      <Image
        src="/icon.png"
        alt="A server surrounded by magic sparkles."
        width={200}
        height={160}
      />
      <h1 className={styles.h1}>Home</h1>
    </>
  );
};
