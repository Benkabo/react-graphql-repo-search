import {makeStyles} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyle = makeStyles({
    footer: {
        marginTop: "50px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontFamily: 'monospace'
    },
    heart: {
        color: 'red',
        marginLeft: '4px',
        marginRight: '4px'
    }
})

const Footer = () => {
    const classes = useStyle()
    return (
        <div className={classes.footer}>
           <p>Made with </p> <FavoriteIcon className={classes.heart} />  <p>by Benedict Kaboyoka</p>
        </div>
    )
}

export default Footer;