import {
  Terminal, Brain, BarChart3, Database, Coffee, Server, Globe, Braces, Palette,
  Smartphone, Layers, Truck, BookOpenCheck, Briefcase, Code2, Wrench, Cpu, House, Repeat2, Mic, ClipboardCheck, Shirt, Clapperboard,
} from 'lucide-react'

// Explicit map keeps the bundle small (no wildcard import of every icon).
const icons = { Terminal, Brain, BarChart3, Database, Coffee, Server, Globe, Braces, Palette, Smartphone, Layers, Truck, BookOpenCheck, Briefcase, Code2, Wrench, Cpu, House, Repeat2, Mic, ClipboardCheck, Shirt, Clapperboard }

export default function Icon({ name, ...props }) {
  const C = icons[name] || Code2
  return <C {...props} />
}
