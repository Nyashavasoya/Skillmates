import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState} from 'react';
import NewProjectForm from './components/NewProjectForm';
import UpdateProjectForm from './components/UpdateProjectForm';
import DeleteProject from './components/DeleteProject';
import ProjectList from './components/ProjectList';

export default function UserProfile(){
    const { username } = useParams();
    const [userData, setUserData] = useState(null);
    const [usergithubData, setUsergithubData] = useState(null);
    const [usergithubRepo, setusergithubRepo]=useState([]);
    useEffect(() => {
        const getUser = async(username)=>{
            try {
                const response = await axios.get(`http://localhost:3500/user/${username}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        getUser(username);
    }, [username]);

    useEffect(() => {
        const getgithubuser = async(usergithub)=>{
            const response = await axios.get(`https://api.github.com/users/${usergithub}`)
            setUsergithubData(response.data)
        }
        if (userData) {
           getgithubuser(userData.github_username)
        }
    }, [userData]);

    useEffect(() => {
      const getgithubrepo = async(usergithub)=>{
          const response = await axios.get(`https://api.github.com/users/${usergithub}/repos`)
          setusergithubRepo(response.data)
      }
      if (usergithubData) {
         getgithubrepo(userData.github_username);
      }
  }, [usergithubData]);

    return (
      <div>
         <h1>User Profile</h1>
         {userData ? (
            <div>
              <p>Username: {userData.username}</p>
              <p>Interest: {userData.interest}</p>
              <p>Skills:</p>
              <ul>
                {userData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <p>github username: {userData.github_username}</p>
            </div>
           ) : (
              <p>Loading...</p>
        )}
         <div>
            <h1>GITHUB DATA</h1>
            {usergithubData ? (
                <div>
                  <p>followers{usergithubData.followers}</p>
                  <p>following {usergithubData.following}</p>
                  <p>public repos {usergithubData.public_repos}</p>
                  <a href={usergithubData.html_url}>link to github page</a>
                </div>
            ) : (
                <p>Loading...</p>
            )}
         </div>

         <div>
            <h1>Repo Data</h1>
            {usergithubRepo ? (
              <ul>
                {usergithubRepo.map((repo,index)=>{
                  return (
                    <li key={index}>
                      <h1>{repo.name}</h1>
                      <p>language {repo.language}</p>
                      <a href={repo.svn_url}>repo link</a>
                    </li>
                  )
                })}
              </ul>
            ):(<p>Loading...</p>)}
         </div>

      {/* Render Project Feature Components */}
        <div className="project-feature-section">
          <CreateProjectForm />
          <UpdateProjectForm />
          <DeleteProjectForm />
        </div>
      
        <div className="project-list-section">
          <ProjectList />
        </div>
      </div>
    )
}