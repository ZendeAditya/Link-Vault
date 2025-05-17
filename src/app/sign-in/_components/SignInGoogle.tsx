import { signIn } from '../../../../auth'
import { Button } from '@/components/ui/button'

const SignInGoogle = () => {
    const handleSignIn = async () => {
        'use server'
        await signIn('google')
    }

    return (
        <form>
            <Button
                onClick={handleSignIn}
                className="bg-white text-gray-700 border-2 border-gray-300 rounded-lg p-4 mt-4 hover:bg-gray-100 w-full h-12 cursor-pointer flex items-center justify-center gap-2 font-bold text-xl"
            >
                Sign In With Google
            </Button>
        </form>
    )
}

export default SignInGoogle
