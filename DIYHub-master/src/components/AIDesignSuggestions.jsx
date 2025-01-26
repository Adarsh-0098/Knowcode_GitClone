import React, { useState } from "react";
 
export default function AIDesignSuggestions() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async () => {
    if (!input.trim()) {
      setSuggestions(["Please enter something to get suggestions!"]);
      return;
    }

    setLoading(true);
    setSuggestions([]);

    setTimeout(() => {
      // Generate more diverse suggestions based on the input
      setSuggestions([
        `Turn "${input}" into a unique home decor piece.`,
        `Repurpose "${input}" as a creative planter for your garden.`,
        `Use "${input}" as raw material for an art project.`,
        `Donate "${input}" to a local upcycling workshop.`,
        `Transform "${input}" into a custom piece of furniture.`,
      ]);
      setLoading(false);
    }, 1500); // Simulating a delay
  };

  return (
    <div className="app-container">
      <h1 className="title">Creative AI Suggestions</h1>
      <p className="subtitle">
        Describe anything, and let the AI generate helpful suggestions!
      </p>
      <div className="input-container">
        <input
          type="text"
          className="input-box"
          placeholder="Enter something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="suggestion-button" onClick={fetchSuggestions}>
          {loading ? "Loading..." : "Get Suggestions"}
        </button>
      </div>
      <div className="suggestions-container">
        <h2 className="suggestions-title">AI Suggestions:</h2>
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="suggestion-item">
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
