export interface Project {
  id: number
  title: string
  subtitle: string
  type: string
  year: string
  category: string
  summary: string
  metric: { value: string; label: string }
  highlights: string[]
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    category: 'COMPUTER VISION',
    summary:
      '对比传统与深度特征匹配方法，打通 C++ 与 ONNX Runtime 推理链路，探索精度与效率的平衡。',
    metric: { value: '78.71%', label: '标准图像对 RANSAC 内点率' },
    title: 'OpenCV 深度特征匹配研究',
    subtitle: 'LightGlue & SuperPoint',
    type: '算法与系统 (C++/ONNX Runtime/PyTorch)',
    year: '2025',
    highlights: [
      'Baseline对比：在相同关键点预算（256–4096）下，对比SIFT + FLANN与SuperPoint + LightGlue的匹配质量与性能',
      '量化评测：在CPU（Apple M2）与GPU（RTX4060 + ORT）平台测试，LightGlue在标准图像对上RANSAC内点率达78.71%',
      '工程实现：诊断并定位OpenCV DNN结构性缺陷，改用ONNX Runtime后端完成Transformer推理集成',
      '系统优化：设计cv::Mat ↔ ONNX Runtime零拷贝张量映射，避免数据复制开销',
    ],
    tags: ['C++', 'ONNX Runtime', 'PyTorch', 'OpenCV', 'Transformer', 'SLAM'],
  },
  {
    id: 2,
    category: 'BACKEND ENGINEERING',
    summary: '基于 Spring Boot 与 Java Stream，构建支持多维度统计与趋势分析的问答数据服务。',
    metric: { value: '~10⁵', label: '条记录规模的数据分析' },
    title: 'StackOverflow 问答分析平台',
    subtitle: '课程项目',
    type: '后端服务 (Spring Boot / Java)',
    year: '2025',
    highlights: [
      '项目背景：面向课程作业的数据分析型后端服务，侧重API设计与并发处理能力',
      '系统设计：基于Spring Boot构建RESTful后端，采用MVC分层结构，支持多维度问答统计与趋势分析接口',
      '工程取舍：在中小规模数据集（~10⁵条记录）下，采用内存计算+Java Stream实现实时分析逻辑',
      '技术要点：使用Stream/Lambda实现聚合与过滤操作，分析其时间复杂度与内存占用特性',
    ],
    tags: ['Spring Boot', 'Java', 'RESTful API', 'Stream API', 'Database'],
  },
  {
    id: 3,
    category: 'EDGE AI',
    summary: '在 Jetson Nano 上部署人体姿态估计，结合 TensorRT 加速与手势映射，实现离线交互。',
    metric: { value: '14–16 FPS', label: '端侧推理速度 · 原约 8 FPS' },
    title: '实时边缘AI 姿态估计交互系统',
    subtitle: '嵌入式系统/Edge AI',
    type: '硬件部署 (Jetson Nano / TensorRT)',
    year: '2025',
    highlights: [
      '边缘AI系统设计：基于Jetson Nano构建离线实时人体姿态估计交互系统，实现低延迟、隐私友好的人机交互',
      '模型部署与加速：部署ResNet18模型，完成PyTorch → ONNX → TensorRT迁移，推理性能由~8FPS提升至14–16 FPS',
      '推理流水线优化：系统性优化端到端推理流程，结合硬件级相机配置与多速率解耦，解决视频缓冲时延问题',
      '姿态理解与稳定性：基于人体关键点设计高层手势语义映射，引入迟滞状态机与自适应滤波机制',
    ],
    tags: ['Jetson Nano', 'TensorRT', 'PyTorch', 'ONNX', 'Edge AI', '深度学习'],
  },
]
