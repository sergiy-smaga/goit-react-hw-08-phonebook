import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

export default function LoginView() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { email, password } = form.elements;
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };
  return (
    <div>
      <h2>Log In page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your e-mail
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button>Log In</button>
      </form>
    </div>
  );
}
