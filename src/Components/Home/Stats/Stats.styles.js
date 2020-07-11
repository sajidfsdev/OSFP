import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        width: '100%',
        marginTop: '80px',
        height: '350px',
        backgroundColor: 'black',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexWrap: 'wrap'
    },

    backDrop: {
        width: '100%',
        height: 'inherit',
        backgroundColor: '#041e2594',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    backDropLeftArea: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '28px',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        }
    },
    backDropRightArea: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        }

    },
    statsTable: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    backDropLeftAreaUpperBox: {
        width: '250px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    backDropLeftAreaLowerBox: {
        width: '250px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: '10px'
    },
    box: {
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    iconContainer: {
        width: '100px',
        height: '100px',
        border: '5px solid gold',
        borderRadius: '55px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    statsIcon: {
        fontSize: '70px',
        color: 'gold'
    },

    statsCount: {
        fontSize: '30px',
        color: 'gold',
        marginTop: '10px'
    },

    iconTitle: {
        fontSize: '15px',
        color: 'white',
        marginTop: '10px',
        fontWeight: 'bold'
    }
}));