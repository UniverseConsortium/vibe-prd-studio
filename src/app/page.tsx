"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type FormState = {
  idea: string;
  users: string;
  scenario: string;
  coreFeatures: string;
  constraints: string;
  timeline: string;
};

const initialState: FormState = {
  idea: "",
  users: "",
  scenario: "",
  coreFeatures: "",
  constraints: "",
  timeline: "",
};

function buildPRD(v: FormState) {
  const features = v.coreFeatures
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean)
    .map((x, i) => `${i + 1}. ${x}`)
    .join("\n");

  return `# 产品需求文档（PRD）\n\n## 1. 项目概述\n- 项目名称：${v.idea || "（待补充）"}\n- 目标用户：${v.users || "（待补充）"}\n- 典型场景：${v.scenario || "（待补充）"}\n\n## 2. 目标与价值\n- 核心目标：将“模糊想法”快速收敛为可执行需求。\n- 业务价值：降低沟通成本，提升开发交付效率。\n\n## 3. 功能需求\n${features || "1. （待补充核心功能）"}\n\n## 4. 非功能要求\n- 约束条件：${v.constraints || "（待补充）"}\n- 性能与稳定性：首屏<2s，关键操作可观测。\n- 安全性：敏感信息不落日志，权限最小化。\n\n## 5. 交互与流程\n- 用户输入想法 -> 系统结构化拆解 -> 输出 PRD 草案 -> 人工确认。\n\n## 6. 里程碑\n- 时间预期：${v.timeline || "（待补充）"}\n- M1：最小可用版本（表单 + PRD 输出）\n- M2：模板扩展（Web3/交易/Agent 场景）\n- M3：导出与协作（Markdown/PDF/版本管理）\n\n## 7. 验收标准\n- 5 分钟内可从想法生成结构化 PRD\n- 输出包含：目标、功能、约束、里程碑、验收标准\n- 文档可直接交付开发执行\n`;
}

export default function Home() {
  const [form, setForm] = useState<FormState>(initialState);
  const prd = useMemo(() => buildPRD(form), [form]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.left}>
          <h1>Vibe Coding PRD 助手</h1>
          <p>把脑海中的模糊想法，快速变成专业需求文档。</p>

          <label>
            项目想法
            <input
              value={form.idea}
              onChange={(e) => setForm({ ...form, idea: e.target.value })}
              placeholder="例如：AI 自动化交易助理"
            />
          </label>

          <label>
            目标用户
            <input
              value={form.users}
              onChange={(e) => setForm({ ...form, users: e.target.value })}
              placeholder="例如：Web3 新手、独立开发者"
            />
          </label>

          <label>
            使用场景
            <textarea
              rows={3}
              value={form.scenario}
              onChange={(e) => setForm({ ...form, scenario: e.target.value })}
              placeholder="用户在什么场景下使用这个产品？"
            />
          </label>

          <label>
            核心功能（每行一个）
            <textarea
              rows={5}
              value={form.coreFeatures}
              onChange={(e) =>
                setForm({ ...form, coreFeatures: e.target.value })
              }
              placeholder={"输入想法\n自动生成功能清单\n导出 PRD"}
            />
          </label>

          <label>
            约束条件
            <input
              value={form.constraints}
              onChange={(e) =>
                setForm({ ...form, constraints: e.target.value })
              }
              placeholder="例如：必须支持中文、1 周内上线 MVP"
            />
          </label>

          <label>
            时间预期
            <input
              value={form.timeline}
              onChange={(e) => setForm({ ...form, timeline: e.target.value })}
              placeholder="例如：MVP 2 周，正式版 6 周"
            />
          </label>
        </section>

        <section className={styles.right}>
          <div className={styles.toolbar}>
            <strong>PRD 预览</strong>
            <button
              onClick={() => navigator.clipboard.writeText(prd)}
              className={styles.copy}
            >
              复制 Markdown
            </button>
          </div>
          <pre>{prd}</pre>
        </section>
      </main>
    </div>
  );
}
