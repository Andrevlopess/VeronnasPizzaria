import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { LoginButton, LogoutButton } from "@/components/buttons.component";


type Props = {}

const Account = async (props: Props) => {

  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className='border border-gray-300 p-4 rounded-lg flex flex-col'>
      {user ? (
        <div className="flex justify-between">
          <h1 className="text-xl ">{`Olá, ${user?.name}`}</h1>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <h1 className="text-xl ">Olá convidado, faça seu login e experimente nossas pizzas!</h1>
          <LoginButton />
        </div>
      )}



    </div>

  )
}

export default Account