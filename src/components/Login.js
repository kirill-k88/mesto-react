import AuthForm from './AuthForm';

function Login({ onlogin }) {
  return (
    <div className="auth">
      <AuthForm title="Вход" buttonName="Войти" buttonLoadingName="Вход..." />
    </div>
  );
}

export default Login;
