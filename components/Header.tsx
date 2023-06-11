
import Link from 'next/link'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { LoginButton, LogoutButton } from "@/components/buttons.component";


const Header = async () => {


    const session = await getServerSession(authOptions);
    const user = session?.user;


    return (
        <header className='flex flex-col'>
            <div className='flex justify-between items-center py-4 lg:py-6 gap-4'>
                <Link href={'/'}>
                    <h1 className='text-xl font-bold text-orange-600'>{"Veronna's pizzaria"}</h1>
                </Link>

                <div className='flex items-center justify-center space-x-4'>
                    {user ? (
                        <>
                            <Link href={'/mypizza'} className='hidden sm:flex'>
                                <button className="bg-orange-500 hover:shadow-md transition rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-orange-300" >
                                    Minha pizza
                                </button>
                            </Link>
                            <LogoutButton />
                        </>

                    ) : (
                        <LoginButton />
                    )}
                </div>
            </div>

        </header>
    )
}

export default Header