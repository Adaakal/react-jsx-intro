import React from "react";

function Tweet(props) {
    return(
        <div className="tweet">
          <h3>{props.username}</h3>  
            <p>{props.name}</p>
            <p>{props.date}</p>
            <p>{props.message}</p>


        </div>
    );
}

export default Tweet;