import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: '编程语言',
      items: ['Java (主修)', 'Python', 'C/C++', 'SQL', 'JavaScript', 'Verilog']
    },
    {
      title: '框架与库',
      items: ['Spring Boot', 'PyTorch', 'OpenCV', 'NumPy', 'JUnit', 'TensorRT', 'ONNX Runtime']
    },
    {
      title: '工具与环境',
      items: ['Git/GitHub', 'Linux (Shell)', 'Gradle/Maven', 'LaTeX', 'Markdown', 'Docker']
    },
    {
      title: '理论基础',
      items: ['数据结构与算法', 'OOP & 设计模式', 'RESTful API', '深度学习', '计算机视觉', '嵌入式系统']
    }
  ]

  const languages = [
    { name: '中文', level: '母语' },
    { name: '英文', level: 'CET-6 | IELTS 6.5' }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">技能栈</h2>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card slide-up">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 语言能力 */}
        <div className="languages-section">
          <h3 className="subsection-title">语言能力</h3>
          <div className="languages-grid">
            {languages.map((lang, idx) => (
              <div key={idx} className="language-item">
                <div className="language-name">{lang.name}</div>
                <div className="language-level">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
