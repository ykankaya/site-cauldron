import React from "react";

import classes from "./Principal.module.css";
import Cauldron from "../../assets/images/Cauldron.jpg";
import GraphQl from "../../assets/images/GraphQL_Logo.png";

const Principal = props => {
  return (
    <div className={classes.Principal}>
      <br />
      <img src={Cauldron} alt=""></img>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum
        molestie felis eu fringilla. Morbi massa odio, consectetur id hendrerit
        ac, mattis vitae metus. Aliquam vestibulum eleifend egestas. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Ut eu suscipit dui.
        Mauris rutrum porttitor aliquam. Curabitur rutrum auctor tellus. Sed
        quis eros tempus, faucibus mi eu, posuere metus. Vestibulum sodales
        tortor quis volutpat ornare. Donec sed tincidunt dolor. Quisque
        consequat nisl vitae egestas tempus. Nam venenatis venenatis enim, a
        semper dui tempor a. Vestibulum cursus sodales nunc.
      </p>
      <img src={GraphQl} style={{ float: "left" }} alt=""></img>
      <p>
        Vestibulum in malesuada purus, sit amet sagittis sem. Nullam mattis
        sapien id est iaculis, a mollis sapien ultrices. Maecenas aliquam
        dapibus egestas. Ut faucibus elit ipsum, in eleifend nunc molestie eget.
        Nulla in purus non lacus consectetur feugiat. Aenean sit amet ligula vel
        diam ullamcorper dignissim. Proin at eros dignissim, tempus est a,
        ornare sapien. Proin ullamcorper libero eget condimentum tincidunt. Nam
        tellus lectus, blandit non hendrerit vitae, ullamcorper sit amet felis.
        Nunc egestas metus nisi, eget dapibus turpis accumsan aliquam. Maecenas
        suscipit, purus pulvinar tristique imperdiet, mauris erat condimentum
        sapien, at vehicula nulla orci quis diam. Nullam finibus efficitur eros
        eget tempus. Aenean vitae vehicula odio, id iaculis augue. Suspendisse
        potenti. Fusce egestas dignissim nunc, at mollis dui sagittis vel.
        Suspendisse ante tellus, ornare eget dui et, congue accumsan eros.
      </p>
    </div>
  );
};

export default Principal;
