export default function RegisterView() {
  return (
    <div>
      <h2>Registration page</h2>
      <form>
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
