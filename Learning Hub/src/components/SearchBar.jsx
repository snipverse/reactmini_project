import { useState } from "react";

const topics = ["JavaScript", "React", "Git", "APIs"];

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const filtered = topics.filter((topic) =>
    topic.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search">
      <input
        placeholder="Search topics..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filtered.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
