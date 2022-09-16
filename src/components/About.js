function About({ src, about }) {
  if (!src) {
    return (
      <aside className="aside">
        <img src="https://via.placeholder.com/215" alt="blog logo" />
        <p>{about}</p>
      </aside>
    );
  } else {
    return (
      <aside className="aside">
        <img src={src} alt="blog logo" />
        <p>{about}</p>
      </aside>
    );
  }
}

export default About;
