import {  Image, FlatList } from 'react-native'
const logo = require('../../assets/logo-nlw-esports.png')

import { styles } from './styles'

import { Heading } from '../../components/Heading'
import { GameCard, GameCardProps } from '../../components/GameCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components/Background'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  useEffect(() => {
    fetch('http://172.26.146.130:3333/games')
    .then(res => {
      res.json()
    })
    .then(data => setGames(data))
  }, [])
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image 
          source={logo}
          style={styles.logo}
        />

        <Heading
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...'
        />

        <FlatList 
          data={games}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <GameCard 
              data={item}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  )
}