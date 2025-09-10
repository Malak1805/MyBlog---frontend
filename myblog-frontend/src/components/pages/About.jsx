import '../../assets/About.css'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate()
  return (
    <div className="about-container">
       <button onClick={() => navigate(-1)}>← Back</button>
      <h1 className="header1">MyBlog</h1>
      <p className="about-paragraph">
        MyBlog is your personal space to write, share, and explore thoughts, stories, and ideas.
        Whether it’s a personal diary, a creative article, or reflections on everyday life, MyBlog
        gives you a platform to express yourself freely. Our goal is to create a friendly and 
        interactive space where everyone can write, read, and connect. From beginners exploring
        their first words to seasoned writers sharing their expertise, MyBlog is designed for
        anyone who loves writing.
      </p>

      <h2 className="header2">What You Can Do on MyBlog</h2>
      <hr />
      <ul className="features-list">
        <li><b>Write Anything You Want:</b> Personal diary entries, articles, stories, or opinions.</li>
        <li><b>Interact with Others:</b> Comment on posts, give feedback, and join discussions.</li>
        <li><b>Manage Your Profile:</b> Keep track of your writings and activity in one place.</li>
        <li><b>Safe and Simple:</b> Secure login and intuitive interface to focus on what matters: writing.</li>
      </ul>

      <p className="about-paragraph">
        Join MyBlog today and turn your thoughts into stories, your ideas into articles, and your
        everyday moments into memories.
      </p>
    </div>
  )
}

export default About
