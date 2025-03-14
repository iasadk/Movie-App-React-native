import MovieCard from "@/components/MovieCard";
import Searchbar from "@/components/Searchbar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
export default function Index() {
  const router = useRouter();
  const { data: movies, loading: loadingMovies, error: moviesError, refetch, reset } = useFetch(() => fetchMovies({ query: '' }), true, 'movies-home');
  console.log(movies?.map((x: any) => x.title))
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <View className="flex-1 px-5">
        {loadingMovies ?
          <ActivityIndicator className="mt-10 self-center" color={"#0000ff"} size={"large"} />
          : moviesError ? <Text>{movies?.message}</Text>
            :
            <FlatList
              ListHeaderComponent={
                <>
                  <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
                  <Searchbar onPress={() => router.push("/search")} />
                  <Text className="text-white font-semibold text-lg my-5">Latest Movies</Text>
                </>
              }
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
                gap: 20,
                padding: 5,
                marginBottom: 10
              }}
              className="mt-2 pb-32"
              scrollEnabled={true}
              ListEmptyComponent={<Text className="text-white">No Movies Found</Text>}
            />
        }
      </View>
    </View>
  );
}
