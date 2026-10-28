import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Cell,
} from "recharts";

/* ─── Data ─────────────────────────────────────────── */

const skillRadar = [
  { skill: "Spring Boot", value: 88 },
  { skill: "Angular/React", value: 90 },
  { skill: "PostgreSQL", value: 85 },
  { skill: "DevOps/Docker", value: 78 },
  { skill: "Security/Auth", value: 80 },
  { skill: "System Design", value: 82 },
];

const commitActivity = [
  { month: "Jan", commits: 34 },
  { month: "Feb", commits: 52 },
  { month: "Mar", commits: 61 },
  { month: "Apr", commits: 48 },
  { month: "May", commits: 74 },
  { month: "Jun", commits: 89 },
  { month: "Jul", commits: 67 },
  { month: "Aug", commits: 93 },
  { month: "Sep", commits: 71 },
  { month: "Oct", commits: 110 },
  { month: "Nov", commits: 85 },
  { month: "Dec", commits: 97 },
];

const techBarData = [
  { name: "Java", pct: 88, color: "#f97316" },
  { name: "TypeScript", pct: 92, color: "#38bdf8" },
  { name: "PostgreSQL", pct: 85, color: "#818cf8" },
  { name: "Docker", pct: 78, color: "#34d399" },
  { name: "React", pct: 90, color: "#60a5fa" },
  { name: "Node.js", pct: 83, color: "#a3e635" },
];

const metrics = [
  { label: "DB Optimization", value: 40, unit: "%", color: "#34d399", desc: "PostgreSQL query tuning" },
  { label: "Test Coverage", value: 85, unit: "%", color: "#818cf8", desc: "Unit & integration tests" },
  { label: "Deployment Speed", value: 60, unit: "%", color: "#38bdf8", desc: "CI/CD pipeline savings" },
  { label: "SLA Uptime", value: 99.99, unit: "%", color: "#f97316", desc: "Pan-Africa banking rails" },
];

/* ─── Animated Count-Up ─────────────────────────────── */
function CountUp({ to, unit, active }: { to: number; unit: string; active: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const steps = 60;
    const inc = to / steps;
    let current = 0;
    const id = setInterval(() => {
      current += inc;
      if (current >= to) { setVal(to); clearInterval(id); }
      else setVal(parseFloat(current.toFixed(2)));
    }, 18);
    return () => clearInterval(id);
  }, [active, to]);
  return (
    <span className="text-3xl font-extrabold tabular-nums">
      {val % 1 === 0 ? val.toFixed(0) : val.toFixed(2)}{unit}
    </span>
  );
}

/* ─── Africa SVG Map ────────────────────────────────── */
// Simplified Africa outline + Kenya highlight
function AfricaMap() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative flex flex-col items-center justify-center h-full min-h-[280px] select-none">
      <svg viewBox="0 0 340 400" className="w-full max-w-[260px] drop-shadow-xl" aria-label="Africa map with Kenya highlighted">
        {/* Africa continent silhouette */}
        <path
          d="M130 10 L210 8 L250 30 L270 60 L280 100 L290 140 L295 180 L285 220 L270 255 L250 280 L225 310 L200 335 L175 355 L160 365 L145 355 L125 330 L100 300 L75 260 L55 220 L45 175 L48 135 L60 100 L75 70 L95 45 Z"
          fill="url(#africaGrad)"
          stroke="#334155"
          strokeWidth="1.5"
          opacity="0.85"
        />
        {/* Kenya highlight — approximate center-east */}
        <motion.path
          d="M200 195 L220 190 L230 205 L225 225 L210 235 L195 228 L185 215 L190 200 Z"
          fill={hovered ? "#34d399" : "#10b981"}
          stroke="#a7f3d0"
          strokeWidth="1.2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ cursor: "pointer" }}
        />
        {/* Nairobi pin */}
        <motion.circle
          cx="207" cy="212"
          r={hovered ? 6 : 4}
          fill="#f97316"
          stroke="#fff"
          strokeWidth="1.5"
          animate={{ r: [4, 6, 4] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        {/* Pan-Africa pulse rings */}
        {[1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx="207" cy="212"
            r={16 + i * 14}
            fill="none"
            stroke="#10b981"
            strokeWidth="0.8"
            animate={{ opacity: [0.5, 0, 0.5], r: [16 + i * 14, 28 + i * 14, 16 + i * 14] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
        {/* Gradient defs */}
        <defs>
          <linearGradient id="africaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
      </svg>
      {/* Label */}
      <div className="absolute top-3 left-3 bg-slate-900/90 border border-emerald-500/40 rounded-lg px-3 py-1.5 text-xs font-mono text-emerald-400">
        <span className="animate-pulse mr-1">●</span> Nairobi, Kenya
      </div>
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 bg-slate-900/95 border border-emerald-500/50 rounded-xl px-4 py-2 text-xs font-mono text-slate-200 shadow-xl"
        >
          🌍 Pan-Africa Fintech Coverage · 99.99% SLA
        </motion.div>
      )}
    </div>
  );
}

/* ─── Custom Radar Dot ───────────────────────────────── */
interface RadarDotProps {
  cx?: number;
  cy?: number;
  index?: number;
}
function RadarDot({ cx = 0, cy = 0 }: RadarDotProps) {
  return (
    <motion.circle
      cx={cx} cy={cy} r={4}
      fill="#38bdf8"
      stroke="#0f172a"
      strokeWidth={2}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    />
  );
}

/* ─── Custom Tooltip ─────────────────────────────────── */
interface TooltipPayload {
  value: number;
  color?: string;
}
interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}
function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-900/95 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-200 shadow-xl">
      <p className="text-sky-400 font-bold">{label}</p>
      <p style={{ color: payload[0].color ?? "#38bdf8" }}>{payload[0].value} commits</p>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────── */
export default function Stats() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const fade = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : { initial: { opacity: 0, y: 28 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay } };

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fade(0)} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            LIVE METRICS · SKILLS TELEMETRY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            By the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Numbers</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
            Real data from 2+ years of engineering: optimizations, coverage metrics, and geographic impact across Africa's fintech rails.
          </p>
        </motion.div>

        {/* ── Row 1: Metric Cards ──────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              {...fade(0.1 + i * 0.08)}
              whileHover={prefersReducedMotion ? {} : { y: -4, scale: 1.02 }}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-5 flex flex-col gap-2 overflow-hidden group"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${m.color}22 0%, transparent 70%)` }}
              />
              <p className="text-xs font-mono text-slate-400">{m.desc}</p>
              <div style={{ color: m.color }}>
                <CountUp to={m.value} unit={m.unit} active={inView} />
              </div>
              <p className="text-sm font-semibold text-white">{m.label}</p>
              {/* Mini progress bar */}
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mt-1">
                <motion.div
                  className="h-1 rounded-full"
                  style={{ background: m.color }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${Math.min(m.value, 100)}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Row 2: Charts row ────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

          {/* Radar: Skill Proficiency */}
          <motion.div
            {...fade(0.2)}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col"
          >
            <h3 className="text-sm font-semibold text-white mb-1">Skill Proficiency Radar</h3>
            <p className="text-xs text-slate-400 mb-4 font-mono">Self-assessed · validated in production</p>
            <div className="flex-1 min-h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillRadar} outerRadius="72%">
                  <PolarGrid stroke="#1e293b" strokeWidth={1} />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: "#94a3b8", fontSize: 10, fontFamily: "monospace" }}
                  />
                  <Radar
                    dataKey="value"
                    stroke="#38bdf8"
                    fill="#38bdf8"
                    fillOpacity={0.2}
                    strokeWidth={2}
                    dot={<RadarDot />}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Area: Commit Activity */}
          <motion.div
            {...fade(0.28)}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col"
          >
            <h3 className="text-sm font-semibold text-white mb-1">Commit Activity</h3>
            <p className="text-xs text-slate-400 mb-4 font-mono">67+ public repos · 2025-2026</p>
            <div className="flex-1 min-h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={commitActivity} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
                  <defs>
                    <linearGradient id="commitGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fill: "#475569", fontSize: 9 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#475569", fontSize: 9 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="commits"
                    stroke="#38bdf8"
                    strokeWidth={2}
                    fill="url(#commitGrad)"
                    dot={false}
                    activeDot={{ r: 5, fill: "#38bdf8", stroke: "#0f172a", strokeWidth: 2 }}
                    isAnimationActive={!prefersReducedMotion}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Africa map */}
          <motion.div
            {...fade(0.36)}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 flex flex-col"
          >
            <h3 className="text-sm font-semibold text-white mb-1 px-2">Geographic Footprint</h3>
            <p className="text-xs text-slate-400 mb-2 font-mono px-2">Nairobi · Pan-Africa Fintech Rails</p>
            <div className="flex-1 relative">
              <AfricaMap />
            </div>
          </motion.div>
        </div>

        {/* ── Row 3: Tech Stack Bars ────────────────────── */}
        <motion.div
          {...fade(0.4)}
          className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6"
        >
          <h3 className="text-sm font-semibold text-white mb-1">Tech Stack Confidence</h3>
          <p className="text-xs text-slate-400 mb-5 font-mono">Proficiency across primary languages & tools</p>
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={techBarData} margin={{ top: 4, right: 8, left: -24, bottom: 0 }}>
                <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: "#475569", fontSize: 9 }} axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: "rgba(56,189,248,0.05)" }}
                  contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 12, fontSize: 12, fontFamily: "monospace" }}
                  labelStyle={{ color: "#94a3b8" }}
                  itemStyle={{ color: "#38bdf8" }}
                  formatter={(v: number) => [`${v}%`, "Proficiency"]}
                />
                <Bar dataKey="pct" radius={[6, 6, 0, 0]} isAnimationActive={!prefersReducedMotion} animationDuration={1200}>
                  {techBarData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} opacity={0.9} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
