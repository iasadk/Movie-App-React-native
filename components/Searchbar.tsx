import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const Searchbar = ({ onPress, value, onChangeText }: { onPress?: () => void, onChangeText?: (text: string) => void, value?: string }) => {
    return (
        <View className='mx-5 flex-row items-center gap-x-3'>
            <Image source={icons.search} className='fill-[#0F0D23] size-5' tintColor={"#ab8bff"} />
            <TextInput
                placeholder='Search through 300+ movies online'
                value={value}
                onChangeText={onChangeText}
                onPress={onPress}
                className='placeholder:text-light-100 text-lg flex-1 text-white'
            />
        </View>
    )
}

export default Searchbar

const styles = StyleSheet.create({})