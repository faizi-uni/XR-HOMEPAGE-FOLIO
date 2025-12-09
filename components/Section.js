export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      className="space-y-4"
    >
      {title ? (
        <h2
          id={`${id}-title`}
          className="text-lg font-semibold leading-tight text-slate-900"
        >
          {title}
        </h2>
      ) : null}
      <div className="placeholder-panel" aria-hidden={!children}>
        {children}
      </div>
    </section>
  );
}
