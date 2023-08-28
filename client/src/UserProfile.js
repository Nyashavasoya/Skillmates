import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState} from 'react';

export default function UserProfile(){
    const { username } = useParams();
    const [userData, setUserData] = useState(null);
    const [usergithubData, setUsergithubData] = useState(null);
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
                <p>followers{usergithubData.followers}</p>
            ) : (
                <p>Loading...</p>
            )}
         </div>
      </div>
    )
}