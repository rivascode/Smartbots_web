import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  DollarSign,
  Factory,
  FileText,
  Globe2,
  HeartPulse,
  Link2,
  Monitor,
  ShieldCheck,
  ShoppingCart,
  Target,
  Truck,
  UserRound,
  UsersRound,
  Workflow,
  Zap
} from "lucide-react";

const icons = {
  analytics: BarChart3,
  automation: Bot,
  brain: BrainCircuit,
  briefcase: BriefcaseBusiness,
  cloud: Cloud,
  dollar: DollarSign,
  factory: Factory,
  file: FileText,
  globe: Globe2,
  health: HeartPulse,
  link: Link2,
  monitor: Monitor,
  shield: ShieldCheck,
  shopping: ShoppingCart,
  target: Target,
  truck: Truck,
  user: UserRound,
  users: UsersRound,
  workflow: Workflow,
  zap: Zap
};

export type IconName = keyof typeof icons;
export type IconTone = "default" | "magenta" | "cyan" | "white";

interface IconBadgeProps {
  name: IconName;
  tone?: IconTone;
  className?: string;
}

export function IconBadge({ name, tone = "default", className = "" }: IconBadgeProps) {
  const Icon = icons[name];
  return (
    <div className={`icon ${tone === "default" ? "" : tone} ${className}`.trim()} aria-hidden="true">
      <Icon size={28} strokeWidth={1.9} />
    </div>
  );
}
