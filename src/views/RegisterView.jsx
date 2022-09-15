import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

export default function RegisterView() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h2>Registration page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name
          <input type="text" name="name" />
        </label>
        <label>
          Your e-mail
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
