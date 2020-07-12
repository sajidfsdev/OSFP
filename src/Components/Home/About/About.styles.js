import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        width: '100%',
        backgroundColor: '#023977',
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
        color: '#fff'
    },

    leftAlignedRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '30px',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
        }
    },
    rightAlignedRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '30px',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
        }
    },

    leftImagePaper: {
        width: '150px',
        height: '150px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '200px',
        [theme.breakpoints.down("sm")]: {
            marginLeft: '0px'
        }

    },
    rightImagePaper: {
        width: '150px',
        height: '150px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '200px',
        [theme.breakpoints.down("sm")]: {
            marginRight: '0px'
        }

    },
    icon: {
        width: '150px',
        height: '150px'
    },
    missionIcon: {
        width: '120px',
        height: '120px'
    },
    iconText: {
        width: '400px',
        color: 'white',
        marginLeft: '100px',
        fontSize: '12px',
        [theme.breakpoints.down("sm")]: {
            marginLeft: '0px',
            marginTop: '20px'
        }
    },
    iconTextRight: {
        width: '400px',
        color: 'white',
        marginRight: '100px',
        fontSize: '12px',
        [theme.breakpoints.down("sm")]: {
            marginRight: '0px',
            marginTop: '20px'
        }
    }
}));