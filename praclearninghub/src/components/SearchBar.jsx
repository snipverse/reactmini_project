import { useState } from "react";

const topics = ["JavaScript", "Java", "React", "Python"]

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const filtered = topics.filter((topic) => {
    return topic.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <>
      <input placeholder="Search ....." value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {
          filtered.map((topic) => (
            <li key={topic}>{topic}</li>
          ))
        }
      </ul>
    </>
  )
}

export default SearchBar;