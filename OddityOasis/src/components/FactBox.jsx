import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const FactBoxContainer = styled.div`
  background-color: #bebebe;
  width: 400px;
  padding: 1rem;
`;

function FactBox({ selectedFact }) {
  const [randomFact, setRandomFact] = useState(null);
  const [dailyFact, setDailyFact] = useState(null);

  async function fetchRandomFact() {
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      const data = await response.json();
      console.log(data.text);
      setRandomFact(data.text);
    } catch {
      console.log("error");
    }
  }

  async function fetchDailyFact() {
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/today.json?language=en"
      );
      const data = await response.json();
      console.log(data.text);
      setDailyFact(data.text);
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    if (selectedFact === "random") {
      fetchRandomFact();
    } else if (selectedFact === "daily") {
      fetchDailyFact();
    }
  }, [selectedFact]);

  return (
    <div>
      <FactBoxContainer>
        <h2>{selectedFact === "random" ? "Random Fact" : "Daily Fact"}</h2>
        <p>{selectedFact === "random" ? randomFact : dailyFact}</p>
      </FactBoxContainer>
    </div>
  );
}

export default FactBox;
