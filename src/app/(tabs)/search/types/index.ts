import { LucideIcon } from "lucide-react-native";

interface CategoryCardProps {
  title: string,
  color: string,
  width: number,
  height: number,
  IconCard: LucideIcon,
  onPress?: () => void,
}

export {
  CategoryCardProps,
};