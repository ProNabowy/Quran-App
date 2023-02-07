import { useEffect } from "react";
import { pageLoader } from "../HelperFunctions/helperFunctions";
import "./loader.css";
const Loader = () =>
{
  useEffect(() =>
  {
    pageLoader();
  }, []);
  return (
    <section className="page-loader">
      <div className="lds-spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </section>
  )
}

export default Loader;