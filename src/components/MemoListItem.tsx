import { View, Text, StyleSheet} from 'react-native'

const MemoListItem = (): JSX.Element => {
    return (
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2025年1月18日</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
    )
}

export default MemoListItem

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)'
    },
        memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
        color: '#313131'
    },
        memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    }  
})