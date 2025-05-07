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
                className="w-full h-10 bg-black"
            >
                Sign out
            </Button>
        </form>
    )
}
