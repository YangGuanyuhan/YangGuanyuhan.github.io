export interface Project {
  id: number
  title: string
  year: string
  category: string
  summary: string
  metric: { value: string; label: string }
  highlights: string[]
  tags: string[]
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    id: 1,
    category: 'OPEN SOURCE / COMPUTER VISION',
    title: '让深度特征匹配，走进 OpenCV。',
    year: '2025 — 2026',
    summary:
      '将 ALIKED 与 LightGlue 接入 OpenCV 原生接口，补齐模型加载、回归测试与示例。让算法从实验中的实现，成为可复用的开源能力。',
    metric: { value: '5', label: '个已合并 PR · OpenCV 组织' },
    highlights: [
      '原生接口：ALIKED 特征提取器与 LightGlue 匹配器接入 Feature2D / DescriptorMatcher 体系；主功能 PR #28986 于 2026 年 6 月合并。',
      '推理正确性：修复 size-1 张量广播断言，以及 ONNX Gather → Cast 图简化中的类型语义问题；对应 PR #28692、#29621。',
      '可复现测试：在 opencv_extra 中提交模型注册与参考数据，支撑主仓库功能和 ONNX 回归测试；对应 PR #1366、#1400。',
      '早期评测：在 Apple M2 / RTX 4060 的项目测试环境中，对比 SIFT + FLANN 与 SuperPoint + LightGlue；标准图像对 RANSAC 内点率为 78.71%。此为项目实验，不代表通用性能保证。',
      '持续工作：DISK + LightGlue 扩展仍在评审中，不计入已合并成果。继续完善特征匹配流程及相关回归测试。',
    ],
    tags: ['C++', 'OpenCV', 'ONNX', 'LightGlue', 'ALIKED', 'DNN'],
    links: [
      { label: '原生 API #28986', href: 'https://github.com/opencv/opencv/pull/28986' },
      { label: '广播修复 #28692', href: 'https://github.com/opencv/opencv/pull/28692' },
      { label: '类型语义 #29621', href: 'https://github.com/opencv/opencv/pull/29621' },
      { label: '测试数据 #1366', href: 'https://github.com/opencv/opencv_extra/pull/1366' },
      { label: '回归模型 #1400', href: 'https://github.com/opencv/opencv_extra/pull/1400' },
      { label: '评审中 #29392', href: 'https://github.com/opencv/opencv/pull/29392' },
    ],
  },
  {
    id: 2,
    category: 'DATABASE / BACKEND',
    title: '学术文献检索与分析',
    year: '2024',
    summary: '面向论文、作者与引用关系，设计关系型数据模型，在数据库中完成关联检索与多维统计。',
    metric: { value: '15', label: '张关系表 · 课程项目' },
    highlights: [
      '参与核心数据库架构与业务接口开发，设计 15 张关系表及实体关系模型。',
      '使用 PostgreSQL 递归 CTE 表达引用网络搜索，计算作者间的最短学术联系路径。',
      '通过 JOIN 与 CTE 进行影响因子、基金论文和关键词趋势分析，将聚合计算下推至数据库。',
      '结合 JWT / RBAC、JDBC 事务与异常回滚，处理角色权限及批量写入一致性。',
    ],
    tags: ['PostgreSQL', 'Java', 'Spring Boot', 'JDBC', 'SQL / CTE'],
  },
  {
    id: 3,
    category: 'EDGE AI / INTERACTION',
    title: '在边缘设备上，理解动作。',
    year: '2025',
    summary: '在 Jetson Nano 上部署离线人体姿态估计，将关键点识别转化为光标控制和翻页等交互。',
    metric: { value: '14–16', label: 'FPS · 项目设备实测' },
    highlights: [
      '部署基于 ResNet18 的姿态估计模型，完成 PyTorch → ONNX → TensorRT 的端侧迁移。',
      '采用 FP16 与 Engine 序列化，在项目使用的 Jetson Nano 上将推理速度从约 8 FPS 提升至 14–16 FPS。',
      '梳理相机采集、预处理、推理与后处理流程，使用多速率解耦降低视频缓冲带来的时延积累。',
      '通过人体关键点定义交互动作，引入迟滞状态机与自适应滤波，减少识别抖动。',
    ],
    tags: ['TensorRT', 'Jetson Nano', 'PyTorch', 'ONNX', 'OpenCV'],
  },
  {
    id: 4,
    category: 'WEB / DATA ANALYSIS',
    title: 'StackOverflow 问答分析',
    year: '2025',
    summary: '从 API 数据采集、清洗与持久化，到标签聚合和趋势分析，搭建完整的问答数据链路。',
    metric: { value: 'MVC', label: '分层架构 · 课程项目' },
    highlights: [
      '对接 StackExchange API 获取并清洗原始 JSON 数据，以 Spring Data JPA 完成关系型持久化。',
      '采用 SQL / JPA 预查询与 Java Stream 内存处理结合的方式，实现标签分类、点赞和评论趋势统计。',
      '以 MVC 分层和 RESTful 接口组织业务逻辑，配合前端展示多维度分析结果。',
    ],
    tags: ['Spring Boot', 'JPA', 'Java Stream', 'RESTful API', 'SQL'],
  },
]
