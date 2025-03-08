import React, { useState } from "react";
import axios from "axios";
import './Content.css'; // Import the CSS file for styling

const Content = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [map1Content, setContentMap] = useState([]);
  
  axios.defaults.withCredentials = true;

  async function fetchData(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7544/api/auth/content", {
        content,
        title,
      });

      if (response) {
        const dataContent = response.data.data;
        // Ensure dataContent is an array
        setContentMap((prevContent) => [...prevContent, dataContent]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="content-container">
      <form onSubmit={fetchData} className="content-form">
        <input
          type="text"
          placeholder="Enter the content"
          onChange={(e) => setContent(e.target.value)}
          required
          className="content-input"
        />
        <input
          type="text"
          placeholder="Enter the title"
          onChange={(e) => setTitle(e.target.value)}
          required
          className="content-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>

      <div className="content-list">
        {map1Content.map((value, index) => (
          <div key={index} className="content-item">
            <h1 className="content-title">The title is: {value.title}</h1>
            <p className="content-text">The content is: {value.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
