import { LoginButton } from "../components/login-button";

interface ILoginButton {
  label: string;
  iconName: string;
}

export const Login = () => {
  const buttons: Array<ILoginButton> = [
    {
      label: "Continue with Apple",
      iconName: "Apple",
    },
    {
      label: "Continue with Google",
      iconName: "Google",
    },
    {
      label: "Continue with Facebook",
      iconName: "Facebook",
    },
  ];

  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="h-6/12 w-6/12 bg-gray-700"></div>

        <div className="h-6/12 w-6/12 bg-gray-50 flex justify-center items-center">
          <div className="flex flex-col">
            {buttons &&
              buttons.map(({ label, iconName }) => (
                <LoginButton label={label} iconName={iconName} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
