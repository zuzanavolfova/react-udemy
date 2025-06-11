import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

interface MainHeaderProps {
  onCreatePost: () => void;
}

function MainHeader({ onCreatePost }: MainHeaderProps) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New <Post-react-icons></Post-react-icons>
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
