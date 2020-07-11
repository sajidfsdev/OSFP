import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',


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

    content: {
        width: '100%',
        marginTop: '45px',

    },

    icon: {
        width: '120px',
        height: '120px',

    },
    iconPaper: {
        width: '150px',
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    box: {
        width: '300px',
        height: '300px',
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    serviceTitle: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '15px',
        marginTop: '15px',
        color: '#37a713',
        fontWeight: 'bold'
    },

    description: {
        width: '100%',
        fontSize: '12px',
        height: '50px',
        marginTop: '10px'
    },
    exploreBtn: {
        backgroundColor: '#086086 !important'
    },
    exploreAllBtn: {
        backgroundColor: '#4e9029 !important'
    },

    exploreBtnRoot: {
        borderRadius: '20px !important',
        textTransform: 'lowercase !important'
    },
    exploreAllBtnRoot: {
        borderRadius: '20px !important',
        textTransform: 'lowercase !important'
    },

    circle: {
        width: '50px',
        height: '50px',
        borderRadius: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cacaca5c'
    },

    arrowIcon: {
        fontSize: '40px',
        cursor: 'pointer',
        color: '#9e9898'
    },

    hidden: {
        display: 'none'
    },

    exploreMoreRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '30px',
        justifyContent: 'center'
    },

    searchIcon: {
        marginLeft: '2px'
    }



}));