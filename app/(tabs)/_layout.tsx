import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ({ label, icon, focused }: { label: string, icon: any, focused: boolean }) => (
    focused ? <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[100px] min-h-16 mt-4 justify-center items-center overflow-hidden rounded-full gap-x-2'
    >
        <Image source={icon} tintColor={'#151312'} className='size-5' />
        <Text className='text-secondary text-base font-semibold'>{label}</Text>
    </ImageBackground> : <View className='size-full justify-center items-center mt-4 rounded-full'>
        <Image source={icon} tintColor={'#A8B5DB'} className='size-5' />
    </View>
)
const TabLayout = () => {
    return (
        <Tabs 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarIconStyle: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 30,
                height: 30,
            },
            tabBarStyle: {
                backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginBottom: 36,
                marginHorizontal: 10,
                height: 54,
                overflow: 'hidden',
                // borderWidth: 1,
                borderColor: '#0f0D23',
            }
        }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} label='Home' icon={icons.home} />
                }}

            />
            <Tabs.Screen name='search' options={{
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} label='Search' icon={icons.search} />

            }}
            />
            <Tabs.Screen name='saved' options={{
                title: 'Saved',
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} label='Saved' icon={icons.save} />

            }}
            />
            <Tabs.Screen name='profile' options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} label='Profile' icon={icons.person} />

            }}
            />
        </Tabs>
    )
}

export default TabLayout

const styles = StyleSheet.create({})