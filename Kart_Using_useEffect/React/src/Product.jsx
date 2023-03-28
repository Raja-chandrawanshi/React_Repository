import { useState, useEffect } from "react";
import NameItem1 from "./Childkart";
import axios from "axios";
import { RowWrap } from "./Childkart";

function Greets() {
  let [userData, setUserdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setUserdata(response.data);
      })
      .catch((error) => {
        console.log("Data is not found");
      });
    console.log(userData);
  }, []);

  return (
    <>
      <RowWrap>
        {userData.map((item) => {
          return <NameItem1 Data={item} key={item.id} />;
        })}
      </RowWrap>
    </>
  );
}
export default Greets;
