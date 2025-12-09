import Section from '../components/Section';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Section id="hero" title="Hero" />
      <Section id="about" title="Über mich" />
      <Section id="philosophy" title="Philosophie" />
      <Section id="portfolio" title="Portfolio" />
      <Section id="contact" title="Kontakt" />
    </div>
  );
}
