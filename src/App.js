import React from 'react';
import Typography  from '@material-ui/core/Typography'; 
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { Link, Route } from 'react-router-dom'

import NotesForm from './NotesForm';
import NotesList from './NotesList';
import Home from './Home';
import Note from './Note';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      notes: [],
    }
  }

  updateField = field => e =>{
    this.setState({
      [field]: e.target.value 
    });
  };

  saveNote = () => {
    if(this.state.title && this.state.description){
      this.setState({
        notes : [...this.state.notes, {
          id: Date.now(),
          title: this.state.title,
          description: this.state.description}],
        title : '',
        description: ''
      });
    }
  }

  deleteNote = index => {
    this.setState({
      notes: this.state.notes.filter( (_, i) => index !== i)
    });
  };

  toggleCompleted = index => {
    const notes = this.state.notes;
    notes[index].completed = !notes[index].completed;
    this.setState({notes});
  }
  
  render(){
    console.log(this.state);
    return (
    <React.Fragment>
      <Typography align="center" variant="h2" gutterBottom>
        My Notes
      </Typography>
      <Grid container justify="center" variant="h2" spacing={2}>
        <Grid item xs={4}>
          <NotesList notes={this.state.notes} toggleCompleted={this.toggleCompleted} deleteNote={this.deleteNote} />
        </Grid>
        <Grid item xs={8}>
          {/* <NotesForm title={this.state.title} description={this.state.description} updateField={this.updateField} saveNote={this.saveNote}/> */}
          <Route exact path="/" component={Home} />
          <Route path="/new" render={() => (
            <NotesForm title={this.state.title} description={this.state.description} updateField={this.updateField} saveNote={this.saveNote}/>
          )} />
          <Route path="/view/:id" render={props => <Note {...props} notes={this.state.notes} /> } />
        </Grid>
      </Grid>
      <Fab color="primary" component={Link} to="/new">
        <AddIcon/>
      </Fab>
    </React.Fragment>
    );
  }
}

export default App;
