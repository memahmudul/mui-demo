import { useMediaQuery,useTheme } from "@mui/material";
import Desktopcategories from "./components/Desktopcategories";
import Header from "./components/Header";
import MobileCategories from "./components/MobileCategories";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import ProductList from "./components/ProductList";


function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
   <>
   <Navbar/>
   <Header/>
   <ProductContainer/>
   {matches? <MobileCategories/>:<Desktopcategories/>}
   <ProductList/>
  
  
   </>
  );
}

export default App;
