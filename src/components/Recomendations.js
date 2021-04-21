import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Recomendations(props) {
  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    // axios beggining
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + props.token,
    };
    let data = {};
    axios
      .post(
        "https://akademia108.pl/api/social-app/follows/recommendations",
        data,
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.table("RECOMENDATIONS Answer from API: ", res.data);
        setRecomendations(
          res.data.map((recomendations) => {
            return recomendations;
          })
        );
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });

    // axios end
  }, [props.token]);

  return (
    <div>
      <div>You are logged in.</div>
      <div>You can follow:</div>
      <ul>
        {recomendations.map((recomendations) => {
          return <li key={recomendations.id}>{recomendations.username}</li>;
        })}
      </ul>
    </div>
  );
}

export default Recomendations;
