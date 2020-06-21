import { StyleSheet, Platform } from 'react-native';
import Colors from '../../styles/colors'

export const CELL_SIZE = Platform.OS === 'ios' ? 42 : 40;
export const CELL_BORDER_RADIUS = 5;
export const DEFAULT_CELL_BG_COLOR = Colors.white;
export const NOT_EMPTY_CELL_BG_COLOR = Colors.tdp_purple;
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const styles = StyleSheet.create({
    codeFiledRoot: {
        height: CELL_SIZE,
        marginTop: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    cell: {
        marginHorizontal: 8,
        height: CELL_SIZE,
        width: CELL_SIZE,
        lineHeight: CELL_SIZE - 5,
        ...Platform.select({ web: { lineHeight: 65 } }),
        fontSize: 30,
        textAlign: 'center',
        borderRadius: CELL_BORDER_RADIUS,
        color: Colors.tdp_purple,
        backgroundColor: Colors.white,

        // IOS
        shadowColor: Colors.tdp_lightPurple,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,

        // Android
        elevation: 10,
    },

    // =======================
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        paddingLeft: 5,
        paddingRight: 15,
    },
    root: {
        minHeight: 800,
        padding: 20,
    },
    icon: {
        width: (Platform.OS === 'ios' ? 214 : 189) / 2.4,
        height: (Platform.OS === 'ios' ? 158 : 140) / 2.4,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    subTitle: {
        paddingTop: 10,
        paddingBottom: 5,
        textAlign: 'center',
        fontSize: Platform.OS === 'ios' ? 17 : 13,
        color: Colors.tdp_purple,
        fontWeight: '500',
        marginTop: 5, marginTop: 20
    },
    nextButton: {
        marginTop: 20,
        borderRadius: 80,
        height: 45,
        backgroundColor: Colors.tdp_purple,
        justifyContent: 'center',
        minWidth: 300,
        marginBottom: 50,
        marginHorizontal: Platform.OS === 'ios' ? 20 : 0,
    },
    nextButtonText: {
        textAlign: 'center',
        fontSize: 18,
        color: Colors.white,
        fontWeight: '500',
    },

    circleContainer: {
        height: (Platform.OS === 'ios' ? 310 : 250) / 2.4,
        width: (Platform.OS === 'ios' ? 310 : 250) / 2.4,
        borderRadius: 310,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    logoImage: {
        alignContent: 'center',
        width: 180,
        height: 70,
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export default styles;