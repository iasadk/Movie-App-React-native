import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const Searchbar = ({ onPress }: { onPress?: () => void }) => {
    return (
        <View className='my-5 mx-5 flex-row items-center gap-x-3'>
            <Image source={icons.search} className='fill-[#0F0D23] size-5' tintColor={"#ab8bff"} />
            <TextInput
                placeholder='Search through 300+ movies online'
                value=''
                onPress={onPress}
                className='placeholder:text-light-100 text-lg flex-1'
            />
        </View>
    )
}

export default Searchbar

const styles = StyleSheet.create({})