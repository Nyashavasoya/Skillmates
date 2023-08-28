import React, { useState } from 'react';
import './logister.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [user, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [batchyear, setBatchyear] = useState('');
  const [interest, setInterest] = useState('');
  const [skills, setSkills] = useState([]);
  const [github, setGithub] = useState('');

  const handleRegister = () => {
    const userdata = {
       user:user,
       pwd:password,
       skills:skills,
       interest,
       BatchYear:batchyear,
       github_username:github,
    }
    axios.post('http://localhost:3500/register',userdata).then((response)=>{
      navigate(`/user/${github}`);
    })
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={user}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="github">Github username</label>
        <input
          type="text"
          id="github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="interest">Interest</label>
        <input
          type="text"
          id="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="batchyear">Batch year</label>
        <input
          type="text"
          id="batchyear"
          value={batchyear}
          onChange={(e) => setBatchyear(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="skills">Skills</label>
        <input
          type="text"
          id="skills"
          value={skills[0]}
          onChange={(e) => setSkills([e.target.value])}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;