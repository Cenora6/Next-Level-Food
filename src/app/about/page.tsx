import styles from "./page.module.css";
import { Link } from "@/components/link/Link";

const About: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1>About</h1>
      <Link text={"Go back"} url={"/"} />
    </main>
  );
};

export default About;
