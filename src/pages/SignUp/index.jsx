import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react';

const SignUp = () => {
  const { loading, registerUser, error } = useContext(GlobalContext);

  const handleSubmit = (event, register) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value.trim();

    register({ email: email, password: password, name: name });
  };

  return (
    <div className=" shadow-xl p-10  self-center ">
      <div className=" mb-10">
        <p className=" text-3xl font-bold text-[#292929]">Sign Up</p>
        <p>
          <span className=" text-gray-400 text-sm">Have an account yet? </span>

          <Link to={'/sign-in'}>
            <span className="font-bold cursor-pointer text-sm underline text-gray-700">
              Sing In
            </span>
          </Link>
        </p>
      </div>
      <form
        onSubmit={() => handleSubmit(event, registerUser)}
        id="sign-in--form"
      >
        <div className="mb-3">
          <p className=" font-bold ">Name</p>
          <input
            className=" border-solid border-2 p-2 rounded-xl placeholder:text-sm text-sm w-full"
            type="text"
            name="sign-in--form"
            id="name"
            placeholder="Your Name"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <p className=" font-bold ">Email Address</p>
          <input
            className=" border-solid border-2 p-2 rounded-xl placeholder:text-sm text-sm w-full"
            type="email"
            name="sign-in--form"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="mb-10">
          <p className=" font-bold">Password</p>
          <input
            className=" border-solid border-2 p-2 rounded-xl placeholder:text-sm text-sm w-full"
            type="password"
            name="sign-in--form"
            id="password"
            placeholder="Enter 6 character or more"
            minLength={6}
            required
          />
        </div>

        <button
          className={` w-full bg-[#292929] text-white h-10 rounded-lg hover:bg-[#1b1b1b] ${
            loading ? 'loading-button' : ''
          }`}
          type="submit"
        >
          <span className={loading ? 'loading-text' : ''}>
            {loading ? 'Creating...' : 'Create'}
          </span>
        </button>
      </form>
    </div>
  );
};

export { SignUp };
