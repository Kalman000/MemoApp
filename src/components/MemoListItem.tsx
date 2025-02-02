import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Link } from 'expo-router'
import Icon from './icon'
import { type Memo } from '../../types/memos'

interface Props {
  memo: Memo
}

const MemoListItem = (props: Props): JSX.Element | null => {
    const { memo } = props
    const { bodyText, updatedAt } = memo
    if(bodyText === null || updatedAt === null){ return null }
    const dataString = updatedAt.toDate().toLocaleString('ja-jp')
    //console.log('MemoListItem', memo.id)
    return (
      <Link
        href={{pathname: '/memo/detail', params: {id: memo.id}}}
        asChild
      >
        <TouchableOpacity style={styles.memoListItem}>
          <View>
            <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
            <Text style={styles.memoListItemDate}>{dataString}</Text>
          </View>
          <TouchableOpacity>
            <Icon name='delete' size={20} color='#B0B0B0' />
          </TouchableOpacity>
        </TouchableOpacity>
      </Link>
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