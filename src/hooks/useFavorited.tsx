import { Media } from "@/__generated__/graphql";
import { useLibralyStore } from "@/store/libraryStore";
import { useToast, Toast, ToastTitle } from "@gluestack-ui/themed";

interface Props {
  anime: Partial<Media>,
}

export function useFavorited({ anime }: Props) {
  const toast = useToast();
  const { favorites, add, remove } = useLibralyStore();
  const favorited = Boolean(favorites?.find(favorite => favorite?.id === anime.id));

  const handleFavorite = () => {
    if (favorited) {
      remove(anime.id!);

      toast.show({
        placement: "bottom",
        render: ({ toastId }) => (
          <Toast bgColor="$text100" nativeID={"ToastID" + toastId} action="error" variant="accent">
            <ToastTitle color="$bg50">Removido dos favoritos</ToastTitle>
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
        placement: "bottom",
        render: ({ toastId }) => (
          <Toast bgColor="$text100" nativeID={"ToastID" + toastId} action="success" variant="accent">
            <ToastTitle color="$bg50">Adicionado aos favoritos</ToastTitle>
          </Toast>
        )
      });
    }
  };

  return { favorited, handleFavorite };
}