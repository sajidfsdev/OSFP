import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        width: '100%',
        backgroundColor: '#ffffff54',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',//flex-end
        position: 'fixed',
        zIndex: 1
    },
    transparent: {
        backgroundColor: '#ffffff54',
        color: 'white'
    },
    white: {
        //backgroundColor: 'white',
        backgroundColor: '#123167',
        color: 'white',
    },
    ul: {
        listStyle: 'none',
        marginRight: '20px'
    },

    li: {
        display: 'inline',
        marginLeft: '10px',
        textTransform: 'uppercase',
        fontSize: '12px',
        fontWeight: 'bold',
        cursor: 'pointer'
    },

    currentPageInfo: {
        height: 'inherit',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '20px',
        fontSize: '12px',
        fontWeight: 'bold',


    },

    currentPageIcon: {
        fontSize: '20px',
        marginRight: '10px'
    },
    whiteIcon: {
        color: 'white',
    },
    blackIcon: {
        color: '#0000009c',
    },

    iconLabel: {
        marginTop: '5px'
    }
}));