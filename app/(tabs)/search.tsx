import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import { useFetch } from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import MovieCard from '@/components/MovieCard'
import { icons } from '@/constants/icons'
import Searchbar from '@/components/Searchbar'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const { data: movies, loading, error, refetch, reset } = useFetch(() => fetchMovies({ query: searchQuery }), true, 'movie-search');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  }

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await refetch();
      // if (searchQuery.trim()) {
      // }else{
        
      // }
    }, 500);

    return () => clearTimeout(timeoutId); // Correct cleanup function
  }, [searchQuery]);
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className='absolute w-full z-0' />
      <FlatList
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <Searchbar
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>
            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}
            {error && (
              <Text className="text-red-500 px-5 my-3">
                Error: {error.message}
              </Text>
            )}

            {!loading &&
              !error &&
              searchQuery.trim() &&
              movies?.length! > 0 && (
                <Text className="text-xl text-white font-bold mb-5">
                  Search Results for{" "}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}

          </>
        }
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
          gap: 20,
          padding: 5,
          marginBottom: 10
        }}
        className="mt-2 pb-32 px-5"
        ListEmptyComponent={
          !loading && !error? (
            <Text className="text-white text-center mt-8">No Movies Found</Text>
          ) : null
        }

      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})