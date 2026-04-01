import './About.css'

export default function About() {
  const education = {
    school: '南方科技大学',
    major: '计算机科学与技术',
    level: '本科',
    year: '2023.09 - 至今',
    location: '广东, 深圳',
    honors: ['2024 年度优秀学生']
  }

  const courses = [
    '算法设计与分析',
    '计算机网络',
    '数据库原理',
    '计算机系统设计及应用',
    '人工智能',
    '深度学习',
    '计算机高级程序设计',
    '计算机组成原理'
  ]

  const intentions = [
    '计算机视觉算法实习生',
    '后端开发'
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">关于我</h2>

        <div className="about-grid">
          {/* 教育背景 */}
          <div className="about-card slide-up">
            <div className="card-header">
              <h3>教育背景</h3>
            </div>
            <div className="card-content">
              <p className="school-name">{education.school}</p>
              <p className="major">{education.major}</p>
              <p className="level">{education.level}</p>
              <div className="meta">
                <span>{education.year}</span>
                <span>{education.location}</span>
              </div>
              {education.honors.length > 0 && (
                <div className="honors">
                  <strong>荣誉:</strong>
                  {education.honors.map((honor, idx) => (
                    <span key={idx} className="honor-badge">{honor}</span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 意向职位 */}
          <div className="about-card slide-up">
            <div className="card-header">
              <h3>职业意向</h3>
            </div>
            <div className="card-content">
              <div className="intentions-list">
                {intentions.map((intention, idx) => (
                  <div key={idx} className="intention-item">
                    <span className="icon">▸</span>
                    {intention}
                  </div>
                ))}
              </div>
              <p className="description">
                致力于在计算机视觉和后端开发领域的深耕，追求极致的代码质量与算法效率。
              </p>
            </div>
          </div>

          {/* 核心课程 */}
          <div className="about-card slide-up">
            <div className="card-header">
              <h3>核心课程</h3>
            </div>
            <div className="card-content">
              <div className="courses-grid">
                {courses.map((course, idx) => (
                  <div key={idx} className="course-item">{course}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
