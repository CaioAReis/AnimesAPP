import { LucideIcon } from "lucide-react-native";

interface CategoryCardProps {
  title: string,
  colors: string[],
  IconCard: LucideIcon,
  onPress?: () => void,
}

export {
  CategoryCardProps,
};