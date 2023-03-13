import React, {useState, useEffect} from 'react'; 
import RepoCard from './RepoCard.jsx';
import Title from './Title';
import { getRepos, partOfDashboard } from '../getData.js';
import classes from './OrganizationCard.module.css';

//entire dashboard
const OrganizationCard = (props) =>{

  //list of repos to display
  const [repos, setRepos] = useState([]);
  
  async function fetchRepos() {
    try {
      //the following lines automatically get all repos in the org and filter for ones with a test harness
      const asyncResponse = await getRepos(props.organization);
      if([...asyncResponse] != [...repos]){
        setRepos(asyncResponse);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    
    // comment fetchRepos() and uncomment the following lines if you want to list the repos that should be on the dashboard
    if([...repos] != props.repos){
      setRepos(props.repos)
    }
    
    //fetchRepos();
  }, []);


  return (
    <div >
        <h3 className={classes.Title}>Organization: {props.organization}</h3>
        { repos.map(element => {
            return <RepoCard key={element} repoName={element} orgName={props.organization}/>
        })} 
      
    </div>
  );
}

export default OrganizationCard;
