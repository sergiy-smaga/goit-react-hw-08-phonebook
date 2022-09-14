export default function LoginView() {
  return (
    <div>
      <h2>Log In page</h2>
      <form>
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
