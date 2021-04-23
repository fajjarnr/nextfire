import { UserContext } from "@lib/context";
import { auth, googleAuthProvider } from "@lib/firebase";
import { useContext } from "react";

export default function EnterPage() {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={`/google.png`} width="30px" /> Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>SignOut</button>;
}

function UsernameForm() {
  return console.log("hello");
}
