import { Button, HStack, Heading, Img, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import GetCroppedImage from "../services/img-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  SelectedGenre:Genres|null;
}
const GenresList = ({ onSelectGenre ,SelectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
    <Heading marginBottom={3} fontSize='2xl'>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack >
            {" "}
            <Img
              boxSize="32px"
              borderRadius={8}
              src={GetCroppedImage(genre.image_background)}
              objectFit='cover'
            />
            <Button
            whiteSpace='normal'
            textAlign='left'
            fontWeight={genre.id===SelectedGenre?.id?'bold' :'normal'}
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenresList;
