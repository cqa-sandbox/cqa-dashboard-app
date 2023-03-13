import React, {useState, useEffect} from 'react'; 
import OrganizationCard from './OrganizationCard';
import Title from './Title';
import { getRepos, partOfDashboard } from '../getData.js';
import config from '../../config.json';

//entire dashboard
const HomePage = (props) =>{

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
        <Title/>
          {
            Object.entries(config).map(([org, repos]) =>{
              return <OrganizationCard organization={org}  repos={repos}/>
            })
          }
    </div>
  );
}

export default HomePage;
