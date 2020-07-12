import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '100px'
    },

    breakPointRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    breakPoint: {
        width: '90%',
        border: '1px solid #0000003b'
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

    sectionOuterRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '50px'
    },

    sectionInnerRow: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

    leftSection: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },

    rightSection: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginTop: '20px'
        }
    },

    rightSectionTitle: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '25px'
    },

    btnRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20px'
    },

    btnIcon: {
        width: '30px',
        height: '30px',
        marginLeft: '30px'
    },

    rootBtn: {
        width: '340px',

    },
    interBtnMargin: {
        width: '80px'
    },


    textRow: {
        width: '100%',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '20px'
    },

    btnLabel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));