import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const NotesList = ({ notes, toggleCompleted, deleteNote }) => {
    return (
        <List>
        { notes.length ? ( 
            notes.map((note, index) => (
            <ListItem dense button key={index} onClick={()=>{toggleCompleted(index)}} component={Link} to={`/view/${note.id}`}>
                <ListItemText primary={note.title}/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Trash" onClick={() => {deleteNote(index)}}>
                    <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem> 
            )
            )
        ) : 
        <Typography align="center" variant="subtitle1">
            No notes yet...
        </Typography>
        }
      </List>
    );
};

export default NotesList;