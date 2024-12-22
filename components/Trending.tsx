import { View, Text, FlatList } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { useState } from 'react'

const TrendingItem = ({activeItem, item}: any)=>{
  return (
    <Animatable.View
     className='mr-5'
    >

    </Animatable.View>

  )
}

const Trending = ({posts} : any) => {
  const[activeItem, setActiveItem] = useState(posts[0]);
  return (
    <FlatList
        data={posts}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
         <TrendingItem activeItem = {activeItem} item = {item}/>
        )}
        horizontal
    />
  )
}

export default Trending