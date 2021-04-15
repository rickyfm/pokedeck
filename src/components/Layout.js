import Navbar from './Navbar/index';

function Layout({children}) {

  return (
      <main>
          <Navbar/>
          {children}
      </main>
  );
}

export default Layout;
