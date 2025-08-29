import { Link } from "react-router-dom";
import { CrownIcon, FlashIcon } from "./Icons";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-surface-light-100 dark:bg-surface-dark-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-12 text-center bg-gradient-to-br from-brand/5 to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10 border-brand/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand/10 dark:bg-brand/20 rounded-full mb-6">
              <CrownIcon size={32} className="text-brand" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-white">지금 바로 시작하세요</h2>
            <p className="text-lg text-text-light dark:text-text-secondary mb-8 max-w-2xl mx-auto">
              14일 무료 체험으로 Compass Security의 모든 기능을 경험해보세요.
              신용카드 없이 바로 시작할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/download" className="btn-brand inline-flex items-center justify-center px-8 py-4 text-lg">
                <FlashIcon size={20} className="mr-2" />
                무료로 시작하기
              </Link>
              <Link to="/product" className="btn-ghost inline-flex items-center justify-center px-8 py-4 text-lg">
                제품 더 알아보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA