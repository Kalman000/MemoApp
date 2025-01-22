import { Text, StyleSheet, type ViewStyle, TouchableOpacity } from 'react-native'

interface Props {
    children: JSX.Element,
    style?: ViewStyle,
    onPress?: () => void
}
const CircleButton = (props: Props): JSX.Element => {
    const { children, style, onPress } = props
    return (
        <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
            <Text style={styles.circleButtonLabel}>{ children }</Text>
        </TouchableOpacity>  
    )
}

export default CircleButton

const styles = StyleSheet.create({
    circleButton: {
        backgroundColor: '#467FD3',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 8
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 40
    }
})
