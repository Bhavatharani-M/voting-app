import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Voteimg from '../../undraw_voting_nvu7.svg';
import '../style.css';

const useStyles = makeStyles({
    root: {
        marginTop: 5,
        width: 400,
        height:370,
        marginLeft: '33%'
    },
    media: {
        width: 300,
        height: 220,
        marginLeft: '10%'
    }
});

const Vote = () => {
    const classes = useStyles();

    function render(){
        if(sessionStorage.getItem("vote")==="true"){
            window.location.href="/success"
        }else{
            window.location.href="/poll1"
        }
    }
    return (
        sessionStorage.getItem("user")==="true" ?
    <>

        <div className="poll">
            <h1 className="head">WELCOME TO POLLING</h1>
            <div className="nav" style={{marginLeft:'35%'}}>
                        <a href="/" onClick={()=>{sessionStorage.clear()}} style={{paddingLeft:'25%'}} className="but2">Logout</a>
                        </div>
        </div>
        <div className="polls">
            <Card className={
                classes.root
            }>
                <CardActionArea>
                    <CardMedia className={
                            classes.media
                        }
                        image={Voteimg}
                        height="30"
                        title="Poll your vote"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Candidates poll
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Choose the best to do the best
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" class="but" color="primary" onClick={()=>{render()}}>
                        vote
                    </Button>
                </CardActions>
            </Card>

        </div>
    </> :  <h1 style={{
            fontSize:'2rem',
            textAlign:"center",
            marginTop:"20%",
        }}> oops!!!You have to login to see this page.... </h1>
    )
}

export default Vote;
