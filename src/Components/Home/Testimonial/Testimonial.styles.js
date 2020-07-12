import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '27px',
        marginTop: '20px',
        color: '#ff0000b8'
    },

    boxRow: {
        width: '100%',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },

    box: {
        width: '300px',
        height: '350px',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '20px'
        }
    },

    thumbupIconRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    thumbup: {
        fontSize: '30px',
        color: '#123167'
    },

    boxImageRow: {
        width: '180px',
        height: '180px',
        borderRadius: '90px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        width: '100px',
        height: '100px'
    },
    boxTitle: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10px',
        fontSize: '20px',
        color: 'red'
    },

    boxComment: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        fontSize: '12px',
    },
    padding: {
        width: '40px',

    }
}));