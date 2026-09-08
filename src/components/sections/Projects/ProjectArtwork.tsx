const matchPoints = [
  [53, 82, 217, 77],
  [71, 123, 234, 117],
  [102, 65, 268, 62],
  [124, 139, 279, 131],
  [85, 99, 250, 90],
  [142, 93, 289, 98],
]
const joints = [
  [173, 62],
  [173, 82],
  [150, 88],
  [131, 115],
  [112, 95],
  [196, 88],
  [218, 105],
  [235, 82],
  [158, 121],
  [190, 121],
  [146, 149],
  [196, 149],
  [128, 171],
  [210, 171],
]
const bones = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [5, 6],
  [6, 7],
  [1, 8],
  [1, 9],
  [8, 9],
  [8, 10],
  [10, 12],
  [9, 11],
  [11, 13],
]
export default function ProjectArtwork({ id, label }: { id: number; label: string }) {
  return (
    <div className={`project-art project-art-${id}`} aria-hidden="true">
      <span className="art-label">{label} / CONCEPT</span>
      <svg viewBox="0 0 350 194" fill="none">
        {id === 1 && (
          <>
            <rect
              x="32"
              y="50"
              width="120"
              height="113"
              rx="8"
              fill="white"
              fillOpacity=".55"
              stroke="currentColor"
              strokeOpacity=".24"
            />
            <rect
              x="197"
              y="50"
              width="120"
              height="113"
              rx="8"
              fill="white"
              fillOpacity=".55"
              stroke="currentColor"
              strokeOpacity=".24"
            />
            <path
              d="M40 151 74 111 94 128 125 91 144 151M205 151 239 107 261 125 286 87 309 151"
              fill="currentColor"
              fillOpacity=".08"
              stroke="currentColor"
              strokeOpacity=".15"
            />
            {matchPoints.map(([x, y, x2, y2], i) => (
              <g key={i}>
                <path
                  d={`M${x} ${y}L${x2} ${y2}`}
                  stroke="currentColor"
                  strokeOpacity=".35"
                  strokeWidth=".8"
                />
                <circle cx={x} cy={y} r="3" fill="currentColor" />
                <circle cx={x2} cy={y2} r="3" fill="currentColor" />
              </g>
            ))}
            <text
              x="175"
              y="184"
              textAnchor="middle"
              fill="currentColor"
              fontSize="8"
              fontFamily="monospace"
            >
              ALIKED → LIGHTGLUE → OPENCV
            </text>
          </>
        )}
        {id === 2 && (
          <>
            <path
              d="M81 70 170 112 272 64M170 112 270 153M170 112 73 157M170 112 181 47"
              stroke="currentColor"
              strokeOpacity=".3"
              strokeWidth="1.4"
            />
            {[
              [81, 70],
              [272, 64],
              [270, 153],
              [73, 157],
              [181, 47],
            ].map(([x, y], i) => (
              <g key={i}>
                <rect
                  x={x - 17}
                  y={y - 17}
                  width="34"
                  height="34"
                  rx="9"
                  fill="white"
                  fillOpacity=".8"
                  stroke="currentColor"
                  strokeOpacity=".2"
                />
                <path
                  d={`M${x - 7} ${y - 4}h14m-14 7h9`}
                  stroke="currentColor"
                  strokeOpacity=".6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            ))}
            <circle
              cx="170"
              cy="112"
              r="24"
              fill="white"
              stroke="currentColor"
              strokeOpacity=".3"
            />
            <circle cx="170" cy="106" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M159 123c0-10 22-10 22 0" stroke="currentColor" strokeWidth="1.5" />
            <text
              x="175"
              y="190"
              textAnchor="middle"
              fill="currentColor"
              fontSize="8"
              fontFamily="monospace"
            >
              PAPERS → RELATIONS → DISCOVERY
            </text>
          </>
        )}
        {id === 4 && (
          <>
            <rect
              x="44"
              y="62"
              width="103"
              height="103"
              rx="9"
              fill="white"
              fillOpacity=".7"
              stroke="currentColor"
              strokeOpacity=".2"
            />
            {[0, 1, 2, 3].map((i) => (
              <g key={i}>
                <rect
                  x="58"
                  y={78 + i * 21}
                  width="9"
                  height="9"
                  rx="2"
                  fill="currentColor"
                  fillOpacity=".25"
                />
                <path
                  d={`M75 ${82 + i * 21}h${i % 2 ? 43 : 54}`}
                  stroke="currentColor"
                  strokeOpacity=".4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            ))}
            <path
              d="M151 113h42m-6-5 6 5-6 5"
              stroke="currentColor"
              strokeOpacity=".7"
              strokeWidth="1.5"
            />
            <rect
              x="202"
              y="62"
              width="103"
              height="103"
              rx="9"
              fill="white"
              fillOpacity=".7"
              stroke="currentColor"
              strokeOpacity=".2"
            />
            {[29, 49, 39, 66].map((h, i) => (
              <rect
                key={i}
                x={217 + i * 20}
                y={149 - h}
                width="12"
                height={h}
                rx="3"
                fill="currentColor"
                fillOpacity={0.3 + i * 0.14}
              />
            ))}
            <text
              x="175"
              y="184"
              textAnchor="middle"
              fill="currentColor"
              fontSize="8"
              fontFamily="monospace"
            >
              DATA → STREAM → INSIGHT
            </text>
          </>
        )}
        {id === 3 && (
          <>
            <path
              d="M83 78V52h26m132 0h26v26M83 143v26h26m132 0h26v-26"
              stroke="currentColor"
              strokeOpacity=".4"
              strokeWidth="1.4"
            />
            {[74, 99, 124, 149].map((y) => (
              <path key={y} d={`M92 ${y}h166`} stroke="currentColor" strokeOpacity=".08" />
            ))}
            {bones.map(([a, b], i) => (
              <path
                key={i}
                d={`M${joints[a][0]} ${joints[a][1]}L${joints[b][0]} ${joints[b][1]}`}
                stroke="currentColor"
                strokeWidth="2"
                strokeOpacity=".65"
              />
            ))}
            {joints.map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={i === 0 ? 9 : 3}
                fill={i === 0 ? '#f5f5f5' : 'currentColor'}
                stroke="currentColor"
                strokeWidth="1.8"
              />
            ))}
            <text
              x="175"
              y="188"
              textAnchor="middle"
              fill="currentColor"
              fontSize="8"
              fontFamily="monospace"
            >
              ONNX → TENSORRT → INTERACTION
            </text>
          </>
        )}
      </svg>
    </div>
  )
}
