import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect,useState} from 'react';
export default function UserProfile(){
    const { username } = useParams();
    const [userData, setUserData] = useState(null);
    const [usergithubData, setUsergithubData] = useState(null);
    const [usergithubRepo, setusergithubRepo]=useState([]);


    useEffect(() => {
        const getUser = async(username)=>{
            try {
                const response = await axios.get(`http://localhost:3500/user/${username}`);
                console.log(response.data)
                setUserData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        getUser(username);
    }, []);

    useEffect(() => {
        const getgithubuser = async(usergithub)=>{
            const response = await axios.get(`https://api.github.com/users/${usergithub}`)
            setUsergithubData(response.data)
            console.log(response.data)
        }
        if (userData) {
           getgithubuser(userData.github_username)
        }
    }, [userData]);

    useEffect(() => {
      const getgithubrepo = async(usergithub)=>{
          const response = await axios.get(`https://api.github.com/users/${usergithub}/repos`)
          setusergithubRepo(response.data)
          console.log(response.data)
      }
      if (usergithubData) {
         getgithubrepo(userData.github_username);
      }
  }, [usergithubData]);

    return (
      <div class="ubg">
         <Header />
         <div class="userpage">
         {( usergithubRepo && userData && usergithubData)?(
                 <div class="user">
                 <img src={userData.profilePicture}/>
                 <h2>{userData.username}</h2>
               <ul>
                  {userData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
              <a href={usergithubData.html_url}>See on Github</a>
              <p>Area of Interest {userData.interest}</p>
              <p>followers{usergithubData.followers}</p>
              <p>following {usergithubData.following}</p>
              <p>public repos {usergithubData.public_repos}</p>
              </div>
          ):(<p>Loading...</p>)}
          <div className="repo">
          {usergithubRepo ? (
              <ul class="repodisplay">
                {usergithubRepo.map((repo,index)=>{
                  return (
                    <li class="rep" key={index}>
                      <a href={repo.svn_url}> <h3>{repo.name}</h3></a>

                      <p>language {repo.language}</p>

                    </li>
                  )
                })}
              </ul>
            ):(<p>Loading...</p>)}
          </div>
      </div>
      <Footer/>
      </div>

    )
}