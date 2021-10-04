import React, { useState } from "react";

const Home = () => {
  const [neweet, setNeweet] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNeweet(value);
  };
  return (
    <div>
      <form onSubm={onSubmit}>
        <input
          value={neweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Neweet" />
      </form>
    </div>
  );
};
export default Home;
