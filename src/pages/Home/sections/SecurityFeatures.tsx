import { ServerIcon, CloudIcon, DatabaseIcon, LockIcon, ShieldIcon, CheckIcon } from "../../../components/Icons";

const SecurityFeatures: React.FC = () => {
      return (
      <section className="py-20 bg-surface-light-200 dark:bg-surface-dark-500">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-status-success/10 rounded-full mb-4">
                  <div className="w-2 h-2 bg-status-success rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-wider text-status-success">Active Protection</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-white">
                  디지털 자산을<br />
                  완벽하게 보호합니다
                </h2>
                <p className="text-text-light dark:text-text-secondary mb-8 leading-relaxed">
                  최첨단 암호화 기술과 제로 트러스트 아키텍처로
                  어떤 위협으로부터도 안전합니다.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: <LockIcon size={16} />,    text: "End-to-End 암호화로 완벽한 데이터 보호" },
                    { icon: <ShieldIcon size={16} />,  text: "Zero-Knowledge 아키텍처로 프라이버시 보장" },
                    { icon: <CheckIcon size={16} />,   text: "Multi-Factor 인증으로 접근 제어 강화" },
                    { icon: <CheckIcon size={16} />,   text: "ISO 27001 및 SOC 2 Type II 인증 획득" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-light-300 dark:hover:bg-surface-dark-400 transition-colors"
                    >
                      <div className="text-brand flex-shrink-0">{item.icon}</div>
                      <span className="text-sm text-text-light dark:text-text-primary">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-elevated p-8">
                <h3 className="text-lg font-bold mb-6 text-text-light dark:text-white text-center">
                  보안 성능 지표
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-light-200 dark:bg-surface-dark-400 rounded-lg p-4 text-center hover:-translate-y-0.5 transform-gpu transition-transform duration-200 cursor-pointer">
                    <ServerIcon size={24} className="mx-auto mb-2 text-brand" />
                    <div className="text-xl font-bold text-text-light dark:text-white">AES-256</div>
                    <div className="text-xs text-text-muted">암호화 표준</div>
                  </div>
                  <div className="bg-surface-light-200 dark:bg-surface-dark-400 rounded-lg p-4 text-center hover:-translate-y-0.5 transform-gpu transition-transform duration-200 cursor-pointer">
                    <DatabaseIcon size={24} className="mx-auto mb-2 text-brand" />
                    <div className="text-xl font-bold text-text-light dark:text-white">ECC</div>
                    <div className="text-xs text-text-muted">키 교환</div>
                  </div>
                  <div className="bg-surface-light-200 dark:bg-surface-dark-400 rounded-lg p-4 text-center hover:-translate-y-0.5 transform-gpu transition-transform duration-200 cursor-pointer">
                    <CloudIcon size={24} className="mx-auto mb-2 text-brand" />
                    <div className="text-xl font-bold text-text-light dark:text-white">99.9%</div>
                    <div className="text-xs text-text-muted">가용성</div>
                  </div>
                  <div className="bg-surface-light-200 dark:bg-surface-dark-400 rounded-lg p-4 text-center hover:-translate-y-0.5 transform-gpu transition-transform duration-200 cursor-pointer">
                    <ShieldIcon size={24} className="mx-auto mb-2 text-brand" />
                    <div className="text-xl font-bold text-text-light dark:text-white">Zero</div>
                    <div className="text-xs text-text-muted">데이터 유출</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      )
}

export default SecurityFeatures;