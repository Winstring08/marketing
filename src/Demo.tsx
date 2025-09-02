// src/pages/UiDemoPage.tsx
import React, { useState } from "react";
import { button } from "@/styles/recipes/button";
import { card } from "@/styles/recipes/card";
import { input } from "@/styles/recipes/input";
import { useTheme } from "@/contexts/ThemeContext";
import { ShieldIcon, CheckIcon, SunIcon, MoonIcon } from "@/components/Icons";

export default function UiDemoPage() {
  const [loading, setLoading] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleFakeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
  };

  return (
    <div className="container mx-auto section-padding space-y-12">
      {/* 헤더 */}
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-heading text-balance">
            <span className="gradient-text">UI Demo</span>
          </h1>
          <p className="text-body mt-2">
            <strong>tailwind-variants(tv)</strong>로 만든{" "}
            <strong>Button / Card / Input</strong> 사용 예시
          </p>
        </div>

        {/* 페이지 자체 다크모드 토글(네브바와 별개로 테스트) */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={button({ intent: "ghost", iconOnly: true }).root()}
          title={isDark ? "라이트 모드" : "다크 모드"}
        >
          {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
        </button>
      </header>

      {/* Buttons */}
      <section className="space-y-6">
        <h2 className="text-label">Buttons</h2>

        {/* Intents */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className={button({ intent: "primary" }).root()}>Primary</button>
          <button className={button({ intent: "secondary" }).root()}>Secondary</button>
          <button className={button({ intent: "ghost" }).root()}>Ghost</button>
          <button className={button({ intent: "danger" }).root()}>Danger</button>
        </div>

        {/* Sizes + 아이콘 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button className={button({ size: "sm" }).root()}>
            <span className={button().icon()}>
              <ShieldIcon size={16} />
            </span>
            Small
          </button>

          <button className={button({ size: "md" }).root()}>
            <span className={button().icon()}>
              <CheckIcon size={18} />
            </span>
            Medium
          </button>

          <button className={button({ size: "lg" }).root()}>Large</button>
        </div>

        {/* Block & IconOnly */}
        <div className="space-y-3">
          <button className={button({ block: true }).root()}>Block button</button>
          <button className={button({ block: false }).root()}>unBlock button</button>

          <div className="flex items-center gap-3">
            <button
              aria-label="icon-only"
              className={button({ iconOnly: true }).root()}
              title="아이콘온리"
            >
              <ShieldIcon size={18} />
            </button>
            <span className="text-body">Icon-only 버튼</span>
          </div>
        </div>

        {/* Loading state */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLoading((v) => !v)}
            className={button({ intent: "secondary" }).root()}
          >
            Toggle Loading
          </button>

          <button
            aria-busy={loading ? "true" : undefined}
            className={button({ loading }).root()}
            onClick={handleFakeSubmit}
          >
            {loading && <span className={button().spinner()} />}
            <span className={loading ? "invisible" : undefined}>Save</span>
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-6">
        <h2 className="text-label">Cards</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={card({ tone: "default", padding: "md" }).root()}>
            <h3 className="text-xl font-semibold mb-2">Default Card</h3>
            <p className="text-body">기본 표면 + hover 시 그림자 강화.</p>
          </div>

        <div className={card({ tone: "elevated", padding: "md" }).root()}>
            <h3 className="text-xl font-semibold mb-2">Elevated Card</h3>
            <p className="text-body">더 진한 그림자 + 테두리.</p>
          </div>
        </div>

        {/* Card with actions */}
        <div className={card({ tone: "default", padding: "lg" }).root()}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Card with Actions</h3>
              <p className="text-body mt-1">버튼 등 액션들을 함께 배치.</p>
            </div>
            <div className="flex gap-2">
              <button className={button({ intent: "ghost", size: "sm" }).root()}>
                취소
              </button>
              <button className={button({ size: "sm" }).root()}>확인</button>
            </div>
          </div>
        </div>
      </section>

      {/* Inputs */}
      <section className="space-y-6">
        <h2 className="text-label">Inputs</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-label block mb-2">Email (sm)</label>
            <input placeholder="small" className={input({ size: "sm" }).root()} />
          </div>
          <div>
            <label className="text-label block mb-2">Email (md)</label>
            <input placeholder="medium" className={input({ size: "md" }).root()} />
          </div>
          <div>
            <label className="text-label block mb-2">Email (lg)</label>
            <input placeholder="large" className={input({ size: "lg" }).root()} />
          </div>
        </div>

        {/* Invalid 예시 (카드 안 폼) */}
        <div className={card({ tone: "default", padding: "lg" }).root()}>
          <form onSubmit={handleFakeSubmit} className="space-y-4">
            <div>
              <label className="text-label block mb-2">Email</label>
              <input
                placeholder="you@example.com"
                className={input({ invalid: emailInvalid }).root()}
                onBlur={(e) => {
                  const ok = /\S+@\S+\.\S+/.test(e.target.value);
                  setEmailInvalid(!ok && e.target.value.length > 0);
                }}
              />
              {emailInvalid && (
                <p className="text-xs text-status-danger mt-1">
                  올바른 이메일 형식을 입력하세요.
                </p>
              )}
            </div>

            <div>
              <label className="text-label block mb-2">Password</label>
              <input type="password" className={input().root()} placeholder="••••••••" />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button type="button" className={button({ intent: "ghost" }).root()}>
                취소
              </button>
              <button
                type="submit"
                aria-busy={loading ? "true" : undefined}
                className={button({ loading }).root()}
              >
                {loading && <span className={button().spinner()} />}
                <span className={loading ? "invisible" : undefined}>제출</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
