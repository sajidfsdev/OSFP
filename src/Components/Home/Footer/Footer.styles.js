import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px',
        backgroundColor: '#000000d4',
        color: '#fff',

    },

    body: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '40px',
        marginBottom: '30px',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }

    },

    addressInfo: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: '30px'
        }

    },
    addressTitle: {
        fontSize: '17px',
        marginBottom: '40px',

    },

    addressLines: {
        fontSize: '12px',
        marginBottom: '5px'
    },

    ul: {
        textDecoration: 'none'
    },
    limedia: {
        listStyleType: 'none'
    },
    ulmedia: {
        textDecoration: 'none',
        margin: '0px',
        padding: '0px'
    },

    li: {
        fontSize: '12px',
        cursor: 'pointer',
        marginBottom: '5px'
    },

    mediaIconWrapper: {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        marginBottom: '15px',
        cursor: 'pointer'
    },
    mediaIcon: {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
    },

    bar: {
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: '#fff',
        fontSize: '12px'
    },

    copyrightIcon: {
        fontSize: '20px',
        color: 'gold',
        marginRight: '5px'
    }
}));