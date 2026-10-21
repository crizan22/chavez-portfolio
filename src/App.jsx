import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import SkillColumn from './components/SkillColumn';
import profile from './data/profile';
import skills from './data/skills';

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero name={profile.name} tagline={profile.tagline} />

        <Section id="about">
          <p className="about-text">{profile.about}</p>
        </Section>

        <Section id="skills">
          <div className="skills-grid">
            {skills.map((group) => (
              <SkillColumn key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;