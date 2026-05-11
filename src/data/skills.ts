export interface SkillCategory {
  title: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: '编程语言',
    items: ['Java (主修)', 'Python', 'C/C++', 'SQL', 'JavaScript', 'Verilog'],
  },
  {
    title: '框架与库',
    items: ['Spring Boot', 'PyTorch', 'OpenCV', 'NumPy', 'JUnit', 'TensorRT', 'ONNX Runtime'],
  },
  {
    title: '工具与环境',
    items: ['Git/GitHub', 'Linux (Shell)', 'Gradle/Maven', 'LaTeX', 'Markdown', 'Docker'],
  },
  {
    title: '理论基础',
    items: ['数据结构与算法', 'OOP & 设计模式', 'RESTful API', '深度学习', '计算机视觉', '嵌入式系统'],
  },
]

export const languages = [
  { name: '中文', level: '母语' },
  { name: '英文', level: 'CET-6' },
]
