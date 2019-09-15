import NavDrawer from './NavDrawer';

const layoutStyle = {
   padding: 10
  };
  
  const Layout = props => (
    <div style={layoutStyle}>
      <NavDrawer />
      {props.children}
    </div>
  );
  
  export default Layout;