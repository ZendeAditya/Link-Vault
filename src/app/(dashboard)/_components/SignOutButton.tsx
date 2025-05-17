import { Button } from '@/components/ui/button'
import { signOut } from '../../../../auth'

export const SignOut = () => {
    return (
        <form
            action={async () => {
                'use server'
                await signOut({ redirect: true, redirectTo: '/sign-in' })
            }}
        >
            <Button
                type="submit"
                variant="outline"
                className="w-52 h-10 cursor-pointer bg-gray-600  hover:bg-gray-800 text-white hover:text-white border-gray-800 hover:border-gray-800"
            >
                Sign out
            </Button>
        </form>
    )
}
