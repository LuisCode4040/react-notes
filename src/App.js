import React from 'react';
import Typography  from '@material-ui/core/Typography'; 
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      notes: [],
    }
  }

  updateTitle(e){
    this.setState({
      title: e.target.value 
    });
    console.log(this.state)
  }
  updateDescription(e){
    this.setState({
      description: e.target.value 
    });
    console.log(this.state)
  }

  render(){
    return (
    <React.Fragment>
      <Typography align="center" variant="h2" gutterBottom>
        My Notes
      </Typography>
      <Grid container justify="center" variant="h2" spacing={2}>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <TextField type="text" placeholder="Title for this note..." margin="normal" fullWidth onChange={(e) => {this.updateTitle(e)} }/>
          </Grid>
          <Grid item xs={12}>
            <TextField placeholder="Description for this note..." margin="normal" multiline rows="4" fullWidth  onChange={(e) => { this.updateDescription(e) } }/>
          </Grid>
          <Fab color="secondary">
            <Icon>edit_icon</Icon>
          </Fab>
        </Grid>
      </Grid>
    </React.Fragment>
    );
  }
}

export default App;
