import Section from '../components/Section';

const sections = [
  { id: 'hero', title: 'Hero' },
  { id: 'ueber-mich', title: 'Über mich' },
  { id: 'philosophie', title: 'Philosophie' },
  { id: 'portfolio', title: 'Portfolio' },
  { id: 'kontakt', title: 'Kontakt' },
];

export default function HomePage() {
  return (
    <>
      {sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title} />
      ))}
    </>
  );
}
