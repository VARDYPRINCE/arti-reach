import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mylogo from '../assets/image/Frame352.png'
import Reg_img1 from '../assets/image/Helmet.png'
import Reg_img2 from '../assets/image/Login.png'
import '../styles/auth.css'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',

  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse(null);

    try {
      const res = await fetch('https://artireach.onrender.com/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
        }
        setResponse(data);
        navigate('/HomePage');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='main_container'>
      <div className='image_container'>
      <img className='img2' src={Reg_img2} alt='image'/>
      <img className='img2' src={Reg_img1} alt='image'/>
      </div>
      
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
      <img className='logo' src={mylogo} alt='logo' />
        <h3>Log in</h3>
        {error && <p className="error-message">{error}</p>}
       
        <label>
          Email:
          <input
            type="email"
            placeholder='Email'
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
       
        <label>
          Password:
          <input
            type="password"
            placeholder='Password'
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

     <div className='xyz'>

        <div className='last-div'>
          <a href="">Forget password?</a>
        </div><br></br>

      

        <div>
          <input type="checkbox" id='checker' name='xy'/>
          <label htmlFor="checker">Remember Me</label>
        </div>
     
      </div>

     

        <button type="submit" disabled={loading}>
          {loading ? 'Loging in...' : 'Log in'}
          {response && <p>Logged in successfully!</p>}
        </button><br></br>

      </form>

        <button className='Google-btn'>Continue with Google</button>

        <p>Don’t have an account <a href="#">sign up</a></p>
        
    
     </div>
      
    </div>
  );
};

export default LoginForm;