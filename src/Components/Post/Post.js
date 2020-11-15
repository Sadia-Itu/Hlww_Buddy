import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import './Post.css';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const Post = (props) => {

    const history = useHistory();

    const viewPost = (id) => {
        history.push('/post/'+id);
    }

    const { id, title } = props.post;

    const classes = useStyles();

    return (
        <Box color="text.primary" className="post-box">
            <h1>{title}</h1>
            <hr/>
            <Button href = "#text-buttons"
                onClick={() => viewPost(id)}
                color="primary"
                className={classes.button}
            >
                
                See More...
            </Button>
        </Box>
    );
};

export default Post;