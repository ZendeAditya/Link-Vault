import { auth } from '../../../../auth'
import { SignOut } from '../_components/SignOutButton'
const DashboardPage = async () => {
    const user = await auth()

    return (
        <div>
            Dashboard Page {user?.user?.name}
            <SignOut />
        </div>
    )
}

export default DashboardPage
