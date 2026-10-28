import { useState, useRef, useEffect, ReactNode } from "react";
import { FiTerminal, FiCornerDownLeft, FiMaximize2, FiMinimize2, FiCopy, FiCheck, FiCpu, FiActivity } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

interface HistoryEntry {
  command: string;
  output: ReactNode;
}

const COMMANDS = [
  "help",
  "skills",
  "fintech",
  "experience",
  "projects",
  "matrix",
  "theme",
  "cv",
  "education",
  "contact",
  "whoami",
  "sudo hire-me",
  "clear",
];

const MATRIX_CHARS = "0123456789ABCDEF$#@*+-%~><{}[]=";

export default function Terminal({ embedded = false }: { embedded?: boolean }) {
  const { theme, toggleTheme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<"bash" | "fintech" | "telemetry">("bash");
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);
  const terminalLogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial typewriter effect
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const initialText = "kiptoo --init";
    let currentIdx = 0;

    const typeInterval = setInterval(() => {
      currentIdx++;
      if (currentIdx <= initialText.length) {
        setInputVal(initialText.slice(0, currentIdx));
      } else {
        clearInterval(typeInterval);
        timeoutId = setTimeout(() => {
          setInputVal("");
          setHistory([
            {
              command: "kiptoo --init",
              output: (
                <div className="space-y-1.5 text-xs font-mono leading-relaxed text-slate-300">
                  <p className="text-emerald-400 font-bold">
                    [SYSTEM READY] Emmanuel Kiptoo · Fintech & Cloud Kernel v2.6
                  </p>
                  <p className="text-slate-400">
                    Host: Eclectics Int'l · Uptime: 99.99% · Latency: &lt;100ms
                  </p>
                  <p className="text-slate-300">
                    Type <span className="text-sky-300 font-bold">'help'</span> or click the quick pills below to explore.
                  </p>
                </div>
              ),
            },
          ]);
        }, 400);
      }
    }, 60);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (terminalLogRef.current && history.length > 0) {
      const el = terminalLogRef.current;
      el.scrollTop = el.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: ReactNode = null;
    const parts = trimmed.split(" ");
    const mainCmd = parts[0];
    const arg = parts[1];

    switch (mainCmd) {
      case "help":
        outputNode = (
          <div className="space-y-1.5 font-mono text-xs text-slate-300">
            <p className="text-amber-400 font-bold">CLI Command Registry:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-sky-400 font-semibold">skills</span> : Tech stack matrix</div>
              <div><span className="text-sky-400 font-semibold">fintech</span> : Banking & M-PESA rails</div>
              <div><span className="text-sky-400 font-semibold">experience</span> : Career track record</div>
              <div><span className="text-sky-400 font-semibold">projects</span> : Production systems</div>
              <div><span className="text-emerald-400 font-semibold">matrix</span> : Toggle digital rain</div>
              <div><span className="text-indigo-400 font-semibold">theme [l/d]</span> : Switch theme</div>
              <div><span className="text-sky-400 font-semibold">cv</span> : Download resume</div>
              <div><span className="text-emerald-400 font-semibold">sudo hire-me</span> : Hiring protocol</div>
              <div><span className="text-rose-400 font-semibold">clear</span> : Clear screen</div>
              <div><span className="text-sky-400 font-semibold">whoami</span> : Session identity</div>
            </div>
          </div>
        );
        break;

      case "matrix":
        setMatrixActive((prev) => !prev);
        outputNode = (
          <p className="font-mono text-xs text-emerald-400 animate-pulse">
            [MATRIX RAIN] Stream mode toggled {matrixActive ? "OFF" : "ACTIVE"}.
          </p>
        );
        break;

      case "theme":
        if (arg === "light") {
          setTheme("light");
          outputNode = <p className="font-mono text-xs text-amber-400">Theme switched to LIGHT mode.</p>;
        } else if (arg === "dark") {
          setTheme("dark");
          outputNode = <p className="font-mono text-xs text-indigo-400">Theme switched to DARK mode.</p>;
        } else {
          toggleTheme();
          outputNode = (
            <p className="font-mono text-xs text-sky-400">
              Theme toggled to {theme === "dark" ? "LIGHT" : "DARK"} mode.
            </p>
          );
        }
        break;

      case "cv":
      case "resume":
        outputNode = (
          <div className="font-mono text-xs space-y-1">
            <p className="text-emerald-400 font-bold">[RESUME PIPELINE READY]</p>
            <a
              href="https://drive.google.com/file/d/1YVDPKJ4OYFYeInogbnj6WzmAWNwQEQa-/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline font-bold"
            >
              Click here to download Emmanuel Kiptoo's CV →
            </a>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-1 font-mono text-xs text-slate-300">
            <p className="text-amber-400 font-bold">&gt; Enterprise Technologies:</p>
            <p><span className="text-sky-400 font-semibold">Backend:</span> Java, Spring Boot, Node.js, Express, Kafka, Azure Bus</p>
            <p><span className="text-sky-400 font-semibold">Frontend:</span> Angular, React.js, TypeScript, Tailwind CSS</p>
            <p><span className="text-sky-400 font-semibold">Databases:</span> PostgreSQL (40% Optimization), MongoDB, MySQL</p>
            <p><span className="text-sky-400 font-semibold">DevOps:</span> Docker, Kubernetes, AWS, CI/CD, OAuth 2.0, JWT</p>
          </div>
        );
        break;

      case "fintech":
        outputNode = (
          <div className="space-y-1 font-mono text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">&gt; Fintech & Banking Solutions:</p>
            <p>• M-PESA Daraja API automated escrow & reconciliation</p>
            <p>• Event-driven microservices via Kafka & Azure Service Bus</p>
            <p>• Sub-second transaction response times on PostgreSQL</p>
            <p>• Data Protection Act & PCI-DSS compliance encryption</p>
          </div>
        );
        break;

      case "experience":
        outputNode = (
          <div className="space-y-2 font-mono text-xs text-slate-300">
            <p>• <span className="text-indigo-400 font-bold">Eclectics International</span> (March 2026 - Present): Full Stack Developer Apprenticeship in digital banking.</p>
            <p>• <span className="text-sky-400 font-bold">Teach2Give</span> (May 2024 - August 2024): Full Stack Intern, 10k+ APIs, Redis 40% speedup, 85% test coverage.</p>
            <p>• <span className="text-emerald-400 font-bold">Tenwek Hospital</span> (May 2023 - July 2023): Networking Intern, hospital infrastructure.</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-1 font-mono text-xs text-slate-300">
            <p className="text-amber-400 font-bold">&gt; Enterprise Systems:</p>
            <p>1. <span className="text-sky-400 font-semibold">Client-Worker Platform:</span> Angular, Spring Boot, M-PESA escrow</p>
            <p>2. <span className="text-sky-400 font-semibold">Healthcare ERP:</span> React, Express, PostgreSQL (1k+ records)</p>
            <p>3. <span className="text-sky-400 font-semibold">Property ERP:</span> React, Context API across 500+ listings</p>
          </div>
        );
        break;

      case "education":
        outputNode = (
          <div className="space-y-1 font-mono text-xs text-slate-300">
            <p className="text-indigo-400 font-bold">Kirinyaga University</p>
            <p>Bachelor of Science in Software Engineering (Second Class Upper Honours) · 2021 - 2025</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 font-mono text-xs text-slate-300">
            <p>Email: <a href="mailto:Kiptooemmanuel763@gmail.com" className="text-sky-400 underline">Kiptooemmanuel763@gmail.com</a></p>
            <p>Phone: (+254) 113 897 004</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/kiptoo-emmanuel-726893262" target="_blank" rel="noreferrer" className="text-sky-400 underline">linkedin.com/in/kiptoo-emmanuel-726893262</a></p>
          </div>
        );
        break;

      case "whoami":
        outputNode = <p className="font-mono text-xs text-emerald-400">visitor@fintech-kernel [Authorized Guest Session]</p>;
        break;

      case "sudo":
      case "sudo hire-me":
        outputNode = (
          <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 font-mono text-xs space-y-1.5 animate-pulse">
            <p className="font-bold text-white">[ROOT GRANTED] Emmanuel Kiptoo is ready to elevate your team.</p>
            <a
              href="mailto:Kiptooemmanuel763@gmail.com?subject=Engineering%20Interview%20Invitation"
              className="inline-block px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold uppercase text-[11px] hover:bg-emerald-400 transition-colors"
            >
              Schedule Interview →
            </a>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        outputNode = (
          <p className="font-mono text-xs text-rose-400">
            command not found: '{cmdStr}'. Type <span className="text-sky-300 font-semibold">'help'</span> for list.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
    setInputVal("");
    setHistoryIndex(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(history[nextIdx].command);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== null) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < history.length) {
          setHistoryIndex(nextIdx);
          setInputVal(history[nextIdx].command);
        } else {
          setHistoryIndex(null);
          setInputVal("");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.find((c) => c.startsWith(inputVal.toLowerCase()));
      if (match) setInputVal(match);
    }
  };

  const copyTerminalText = () => {
    const text = history.map((h) => `$ ${h.command}`).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`relative rounded-2xl border border-slate-800 bg-[#070b14] text-slate-100 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
        isExpanded ? "h-[620px]" : embedded ? "h-[440px] lg:h-[470px]" : "h-[500px]"
      }`}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Matrix digital rain overlay if activated */}
      {matrixActive && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-30 pointer-events-none overflow-hidden font-mono text-[10px] leading-3 text-emerald-500/30 select-none p-2 flex justify-between"
        >
          {Array.from({ length: 16 }).map((_, col) => (
            <div key={col} className="flex flex-col animate-pulse">
              {Array.from({ length: 28 }).map((_, row) => (
                <span key={row}>
                  {MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Terminal Window Top Bar with Tabs */}
      <div className="bg-[#0e1626] px-4 py-2.5 border-b border-slate-800/90 flex items-center justify-between select-none shrink-0 z-40">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
          </div>

          {/* Terminal Tabs */}
          <div className="flex items-center gap-1 ml-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab("bash");
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                activeTab === "bash"
                  ? "bg-[#182338] text-sky-400 font-bold border border-slate-700/60"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <FiTerminal className="text-xs" />
              <span>bash</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab("fintech");
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                activeTab === "fintech"
                  ? "bg-[#182338] text-emerald-400 font-bold border border-slate-700/60"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <FiActivity className="text-xs" />
              <span>fintech-stream</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab("telemetry");
              }}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                activeTab === "telemetry"
                  ? "bg-[#182338] text-purple-400 font-bold border border-slate-700/60"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <FiCpu className="text-xs" />
              <span>telemetry.json</span>
            </button>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 text-slate-400 text-xs">
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyTerminalText();
            }}
            title="Copy buffer"
            className="hover:text-white transition-colors"
            aria-label="Copy terminal text"
          >
            {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            title={isExpanded ? "Collapse" : "Expand"}
            className="hover:text-white transition-colors"
            aria-label="Toggle terminal height"
          >
            {isExpanded ? <FiMinimize2 /> : <FiMaximize2 />}
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Bash CLI */}
      {activeTab === "bash" && (
        <>
          <div
            ref={terminalLogRef}
            className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3 font-mono text-xs sm:text-[13px] z-10"
          >
            {history.map((entry, index) => (
              <div
                key={index}
                id={index === history.length - 1 ? "latest-cmd-entry" : undefined}
                className="space-y-1"
              >
                {entry.command !== "kiptoo --init" && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400 font-bold">kiptoo@fintech:~$</span>
                    <span className="text-white font-semibold">{entry.command}</span>
                  </div>
                )}
                <div>{entry.output}</div>
              </div>
            ))}
          </div>

          {/* Quick command buttons strip */}
          <div className="px-3 py-1.5 bg-[#0a0f1c] border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 z-10 select-none">
            {["help", "skills", "fintech", "sudo hire-me", "matrix", "clear"].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand(cmd);
                }}
                className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                  cmd === "sudo hire-me"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700"
                }`}
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Command Prompt Line */}
          <div className="p-2.5 sm:p-3 bg-[#080d1a] border-t border-slate-800 flex items-center gap-2 font-mono text-xs sm:text-[13px] z-10 shrink-0">
            <span className="text-emerald-400 font-bold shrink-0">
              kiptoo@fintech:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'skills', or 'sudo hire-me'..."
              className="flex-1 bg-transparent text-white outline-none placeholder-slate-600 caret-emerald-400 font-mono text-xs sm:text-[13px]"
              autoCapitalize="off"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              onClick={() => executeCommand(inputVal)}
              aria-label="Execute command"
              className="p-1 text-slate-500 hover:text-emerald-400 transition-colors"
            >
              <FiCornerDownLeft className="text-sm" />
            </button>
          </div>
        </>
      )}

      {/* Tab 2: Simulated Live Fintech Stream */}
      {activeTab === "fintech" && (
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 font-mono text-xs space-y-2 text-slate-300">
          <p className="text-emerald-400 font-bold border-b border-slate-800 pb-1">
            [TRANSACTION LEDGER · REAL-TIME KAFKA STREAM]
          </p>
          <div className="space-y-1.5 text-[11px] leading-relaxed">
            <p className="text-slate-400">[00:00:02] <span className="text-sky-400">TOPIC: payments.mpesa.daraja</span> - Partition 0 - Offset 89142 - Ack 200 OK</p>
            <p className="text-slate-400">[00:00:04] <span className="text-emerald-400">ESCROW_HOLD:</span> Booking #AUTO-8921 - KES 4,500.00 - Status: RESERVED</p>
            <p className="text-slate-400">[00:00:05] <span className="text-amber-400">CBS_SWITCH:</span> Core Banking API /v2/account/verify - 18ms latency</p>
            <p className="text-slate-400">[00:00:07] <span className="text-sky-400">KAFKA_PRODUCER:</span> ledger.reconciliation.events - Sub-100ms commit confirmed</p>
            <p className="text-slate-400">[00:00:09] <span className="text-indigo-400">SECURITY_AUDIT:</span> OAuth 2.0 JWT Session Rotation verified (Data Protection Act Compliant)</p>
            <p className="text-emerald-400 font-bold animate-pulse mt-3">&gt; All services operational: 99.99% SLA across Kenya & pan-Africa rails.</p>
          </div>
        </div>
      )}

      {/* Tab 3: System Telemetry JSON */}
      {activeTab === "telemetry" && (
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 font-mono text-xs space-y-1 text-slate-300">
          <p className="text-purple-400 font-bold mb-2">telemetry.json:</p>
          <pre className="text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
{`{
  "engineer": "Emmanuel Kiptoo",
  "education": "BSc Software Engineering (Kirinyaga University - Honours)",
  "roles": ["Full Stack Developer", "Fintech & Digital Banking Specialist"],
  "company": "Eclectics International Limited",
  "stack": {
    "backend": ["Spring Boot", "Node.js", "Express", "Apache Kafka"],
    "frontend": ["Angular", "React.js", "TypeScript", "Tailwind CSS"],
    "database": ["PostgreSQL (Query Tuned)", "MongoDB", "Drizzle ORM"],
    "devops": ["Docker", "Kubernetes", "AWS", "Azure Service Bus"]
  },
  "metrics": {
    "databaseOptimization": "40% performance gain",
    "deploymentReduction": "60% with CI/CD",
    "testCoverage": "85%",
    "concurrentUsers": "1,000+ with <100ms latency"
  }
}`}
          </pre>
        </div>
      )}
    </div>
  );
}
