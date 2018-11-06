import React from "react";

const EditExpensePage = props => {
  console.log(props);
  return (
    <div>
      <p>This is for the edit expense page.</p>
      <p>Editing {props.match.params.id}</p>
    </div>
  );
};

export default EditExpensePage;
