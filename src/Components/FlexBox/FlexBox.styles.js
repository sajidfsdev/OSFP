import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        width: '500px',
        border: '1px solid',
        padding: '10px'

    },
    children: {
        width: '50px',
        height: '50px',
        backgroundColor: 'black',
        color: 'white'
    }
}));