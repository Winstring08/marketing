import Button from "./components/Button";
import Badge from "./components/Badge";
import Input from "./components/Input";
import { Moon, Check } from "lucide-react"; // 선택사항

export default function Demo() {
  return (
    <div className="space-y-6 p-6 bg-surface-light-200 dark:bg-surface-dark-500 min-h-screen mt-20">
      <h1 className="text-2xl font-bold text-text-light dark:text-white">컴포넌트 데모 페이지</h1>
      {/* Buttons */}
      <div className="space-x-3">
        <Button leftIcon={<Check size={16} />}>Primary</Button>
        <Button intent="secondary">Secondary</Button>
        <Button intent="ghost">Ghost</Button>
        <Button intent="danger">Danger</Button>
        <Button loading leftIcon={<Moon size={16} />}>Loading</Button>
        <Button block className="mt-3">Block Button</Button>
      </div>

      {/* Badges */}
      <div className="space-x-2">
        <Badge>Neutral</Badge>
        <Badge tone="info" withDot>Info</Badge>
        <Badge tone="success" withDot>Success</Badge>
        <Badge tone="warning" withDot>Warning</Badge>
        <Badge tone="danger" outlined>Danger</Badge>
      </div>

      {/* Inputs */}
      <div className="grid gap-4 max-w-md">
        <Input name="email" label="Email" placeholder="you@example.com" helperText="회사 이메일을 입력하세요" />
        <Input name="name" label="Name" size="lg" />
        <Input name="password" type="password" label="Password" invalid errorText="영문/숫자/특수문자 조합 8자 이상" />
      </div>
    </div>
  );
}
