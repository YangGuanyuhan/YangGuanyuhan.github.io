import { Github } from 'lucide-react'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'OpenCV 深度特征匹配研究',
      subtitle: 'LightGlue & SuperPoint',
      type: '算法与系统 (C++/ONNX Runtime/PyTorch)',
      year: '2025',
      highlights: [
        'Baseline对比：在相同关键点预算（256–4096）下，对比SIFT + FLANN与SuperPoint + LightGlue的匹配质量与性能',
        '量化评测：在CPU（Apple M2）与GPU（RTX4060 + ORT）平台测试，LightGlue在标准图像对上RANSAC内点率达78.71%',
        '工程实现：诊断并定位OpenCV DNN结构性缺陷，改用ONNX Runtime后端完成Transformer推理集成',
        '系统优化：设计cv::Mat ↔ ONNX Runtime零拷贝张量映射，避免数据复制开销'
      ],
      tags: ['C++', 'ONNX Runtime', 'PyTorch', 'OpenCV', 'Transformer', 'SLAM']
    },
    {
      id: 2,
      title: 'StackOverflow 问答分析平台',
      subtitle: '课程项目',
      type: '后端服务 (Spring Boot / Java)',
      year: '2025',
      highlights: [
        '项目背景：面向课程作业的数据分析型后端服务，侧重API设计与并发处理能力',
        '系统设计：基于Spring Boot构建RESTful后端，采用MVC分层结构，支持多维度问答统计与趋势分析接口',
        '工程取舍：在中小规模数据集（~10⁵条记录）下，采用内存计算+Java Stream实现实时分析逻辑',
        '技术要点：使用Stream/Lambda实现聚合与过滤操作，分析其时间复杂度与内存占用特性'
      ],
      tags: ['Spring Boot', 'Java', 'RESTful API', 'Stream API', 'Database']
    },
    {
      id: 3,
      title: '实时边缘AI 姿态估计交互系统',
      subtitle: '嵌入式系统/Edge AI',
      type: '硬件部署 (Jetson Nano / TensorRT)',
      year: '2025',
      highlights: [
        '边缘AI系统设计：基于Jetson Nano构建离线实时人体姿态估计交互系统，实现低延迟、隐私友好的人机交互',
        '模型部署与加速：部署ResNet18模型，完成PyTorch → ONNX → TensorRT迁移，推理性能由~8FPS提升至14–16 FPS',
        '推理流水线优化：系统性优化端到端推理流程，结合硬件级相机配置与多速率解耦，解决视频缓冲时延问题',
        '姿态理解与稳定性：基于人体关键点设计高层手势语义映射，引入迟滞状态机与自适应滤波机制'
      ],
      tags: ['Jetson Nano', 'TensorRT', 'PyTorch', 'ONNX', 'Edge AI', '深度学习']
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">项目经历</h2>

        <div className="projects-container">
          {projects.map((project, idx) => (
            <article key={project.id} className="project-item slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="project-header">
                <div className="project-title-group">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <div className="project-meta">
                  <span className="project-type">{project.type}</span>
                  <span className="project-year">{project.year}</span>
                </div>
              </div>

              <div className="project-body">
                <ul className="highlights-list">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="highlight-item">
                      <span className="highlight-marker">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub链接 */}
        <div className="projects-cta">
          <p>更多项目和代码示例，请访问我的 GitHub</p>
          <a href="https://github.com/YangGuanyuhan" target="_blank" rel="noopener noreferrer" className="github-link">
            <Github size={20} /> GitHub 主页
          </a>
        </div>
      </div>
    </section>
  )
}
