import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        width: '100%',
        height: '700px',
        display: 'flex',
        flexDirection: 'column',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },

    visibilitySensor: {
        width: '100%',
        height: '20px',
        marginTop: '60px',

    },
    webTitle: {
        width: '100%',
        marginTop: '20px',
        fontSize: '80px',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },

    titleText: {
        marginRight: '100px'
    },
    webTitleSecondary: {
        width: '100%',
        marginTop: '20px',
        fontSize: '30px',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },

    titleTextSecondary: {
        marginRight: '100px'
    }
}));