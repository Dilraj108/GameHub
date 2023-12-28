import { HStack, Img, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GetCroppedImage from "../services/img-url";

const GenresList = () => {
  const { data, isLoading,error} = useGenres();
  if(error)return null;
  if(isLoading)return<Spinner/>
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack >
            {" "}
            <Img
              boxSize="32px"
              borderRadius={8}
              src={GetCroppedImage(genre.image_background)}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
