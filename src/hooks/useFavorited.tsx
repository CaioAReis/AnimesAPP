import { Media } from "@/__generated__/graphql";
import { useLibralyStore } from "@/store/libraryStore";
import { useToast, Toast, ToastTitle, useToken } from "@gluestack-ui/themed";

interface Props {
  anime: Partial<Media>,
}

export function useFavorited({ anime }: Props) {
  const toast = useToast();
  const { favorites, add, remove } = useLibralyStore();
  const bgColor = useToken("colors", "text50" as "amber100");
  const textColor = useToken("colors", "bg50" as "amber100");
  const favorited = Boolean(favorites?.find(favorite => favorite?.id === anime.id));

  const handleFavorite = () => {
    if (favorited) {
      remove(anime.id!);

      toast.show({
        placement: "top",
        containerStyle: { marginTop: 35 },
        render: ({ toastId }) => (
          <Toast bgColor={bgColor} nativeID={"ToastID" + toastId} action="error" variant="accent">
            <ToastTitle color={textColor}>Removido dos favoritos</ToastTitle>
          </Toast>
        )
      });

    } else {
      add({
        id: anime.id,
        title: {
          romaji: anime.title?.romaji ?? "",
          english: anime.title?.english ?? "",
        },
        coverImage: { extraLarge: anime.coverImage?.extraLarge }
      });

      toast.show({
        placement: "top",
        containerStyle: { marginTop: 35 },
        render: ({ toastId }) => (
          <Toast bgColor={bgColor} nativeID={"ToastID" + toastId} action="success" variant="accent">
            <ToastTitle color={textColor}>Adicionado aos favoritos</ToastTitle>
          </Toast>
        )
      });
    }
  };

  return { favorited, handleFavorite };
}