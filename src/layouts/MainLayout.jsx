import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      this is main layout............
      <header></header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
