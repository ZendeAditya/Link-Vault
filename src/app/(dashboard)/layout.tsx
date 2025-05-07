import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard - Link-Vault',
    description: 'Save and Organize Your Links in One Place',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`antialiased overflow-x-hidden`}>{children}</body>
        </html>
    )
}
