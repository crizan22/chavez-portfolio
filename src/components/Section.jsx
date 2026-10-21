// Reusable wrapper for page sections (About, Skills, ...)
function Section({ id, children }) {
  return (
    <section id={id} className="section">
      {children}
    </section>
  );
}

export default Section;