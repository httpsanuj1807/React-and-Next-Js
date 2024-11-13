import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;


export async function action({request}){
  const mode = new URL(request.url).searchParams.get('mode') || 'login';

  const formData = await request.formData();

  const authData = {
    email : formData.get('email'),
    password : formData.get('password')
  }

  if(mode !== 'login' && mode !== 'signup'){

    throw json({message : "Invalid mode. Cant be authenticated"}, {status: 422}); // 422 means invalid input

  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method : 'POST', 
    headers : {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData)
  })

  
  if(response.status === 422 || response.status === 401){
    return response; 
  }

  if(!response.ok){
    throw json({message: "Could not be authenticated"}, {status: 500});
  }

  // handle token
  const responseData = await response.json();
  localStorage.setItem('token', JSON.stringify(responseData.token));

  return redirect('/')

}

