import React from 'react';
import './Home.css'; // Optional: import a CSS file for styling
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Blog</h1>
        <p>Your daily source of inspiration and insights.</p>
      </header>
      
      <main className="home-content">
        <section className="intro-section">
          <h2>Discover Engaging Content</h2>
          <p>
            Dive into a variety of topics, from technology to lifestyle, and everything in between. 
            Whether you're looking for tips, tutorials, or personal stories, we've got you covered!
          </p>
        </section>
        
        <section className="cta-section">
          <h2>Ready to Share Your Thoughts?</h2>
          <p>
            Join our community of writers and start sharing your own stories! 
            Click the button below to get started.
          </p>
          <button className="cta-button"><Link to={"/content"}>Write the posts</Link></button>
        </section>
      </main>
      
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
