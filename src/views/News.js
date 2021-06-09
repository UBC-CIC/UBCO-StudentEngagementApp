import Container from "@material-ui/core/Container";

import {Lduh} from '../components/Tags/Tag'
import IconLabelTabs from '../components/Tabs/Tabs'
import {HomePageNewsCard} from "../components/Cards/NewsCard";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";
import React from "react";
const category = ['lduh','aldo','dddd']
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider:{
        marginTop:'30px',
        marginBottom:'30px',

    },
    title:{
        fontWeight: 600,
        color:"#0055B7"

    }

}));

export default function News(props){
    const classes = useStyles()
    return(
        <div>
            <Container maxWidth={'xl'} >
                <Typography align={'left'} variant="h4" className={classes.title}>
                    News and Blogs
                </Typography>
                <Divider className={classes.divider}/>
            </Container>
            <Container maxWidth={'xl'} >
                <IconLabelTabs/>

            </Container>

        </div>
    )

}