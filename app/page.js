import Section from '../components/Section';

export default function HomePage() {
  return (
    <main>
      <Section id="hero" title="Hero" />
      <Section id="ueber-mich" title="Über mich" />
      <Section id="philosophie" title="Philosophie" />
      <Section id="portfolio" title="Portfolio" />
      <Section id="kontakt" title="Kontakt" />
    </main>
  );
}
