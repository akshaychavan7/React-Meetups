import classes from "./Layout.module.css";
import MainNavitation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavitation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
