import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  DollarSign,
  Factory,
  FileText,
  Gauge,
  Globe2,
  Handshake,
  HeartPulse,
  Layers3,
  Link2,
  Monitor,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
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
  check: CheckCircle2,
  cloud: Cloud,
  dollar: DollarSign,
  factory: Factory,
  file: FileText,
  gauge: Gauge,
  globe: Globe2,
  handshake: Handshake,
  health: HeartPulse,
  layers: Layers3,
  link: Link2,
  monitor: Monitor,
  rocket: Rocket,
  shield: ShieldCheck,
  shopping: ShoppingCart,
  sparkles: Sparkles,
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
