export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={title ? `${id}-title` : undefined}>
      <div className="section__inner">
        {title ? (
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
