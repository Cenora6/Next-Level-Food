import styles from "./page.module.css";
import { Header } from "@/components/header/Header";
import { Link } from "@/components/link/Link";
import { formatDate } from "@/utils/formatDate";

const Home: React.FC = () => {
  const currDate = new Date();
  return (
    <main className={styles.main}>
      <Header />
      <Link text={"Go to ABOUT page"} url={"/about"} />
      <Link text={"Go to BLOG page"} url={"/blog"} />
      <p>Today is... {formatDate(currDate)}</p>
    </main>
  );
};

export default Home;
