function Article({ title, date, preview }) {
  if (!date) {
    return (
      <article key={title}>
        <h3>{title}</h3>
        <small>January 1, 1970</small>
        <p>{preview}</p>
      </article>
    );
  } else {
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    );
  }
}

export default Article;
