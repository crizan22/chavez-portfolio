function SkillColumn({ title, items }) {
  return (
    <div className="skill-col">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillColumn;