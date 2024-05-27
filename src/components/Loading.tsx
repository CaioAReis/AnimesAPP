import { ActivityIndicator } from "react-native";
import { useToken } from "@gluestack-style/react";

export function Loading() {
  const primary = useToken("colors", "primary400");

  return (
    <ActivityIndicator
      size="large"
      color={primary}
      style={{ paddingVertical: 100, backgroundColor: "red" }}
    />
  );
}