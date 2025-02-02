import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const handlePress = (): void => {
    router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
    const { id } = useLocalSearchParams()
    //sconsole.log(id)
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年1月18日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    Motherfucker
                    Fatherfucker
                </Text>
            </ScrollView>
            <CircleButton style={{ top: 60, bottom: 'auto' }} onPress={handlePress}>
                <Icon name='pencil' size={40} color='#ffffff' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 'bold'
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})

export default Detail