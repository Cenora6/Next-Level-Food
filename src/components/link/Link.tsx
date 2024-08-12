import styles from "./Link.module.css";
import NextLink from "next/link";

export const Link: React.FC<LinkProps> = ({ url, text }) => {
  return (
    <p className={styles.link}>
      <NextLink href={url}>{text}</NextLink>
    </p>
  );
};

export interface LinkProps {
  url: string;
  text: string;
}
