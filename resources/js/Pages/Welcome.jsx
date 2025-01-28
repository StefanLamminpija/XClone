import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="X. It's what's happening" />

            <div className="bg-black">

                <div className="relative flex min-h-screen flex-col items-center justify-center selection:text-white">

                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">

                            <div className="flex lg:col-start-2 lg:justify-center">

                                <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-white">

                                    <g>
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </g>

                                </svg>

                            </div>

                            <div className="text-white">

                                Happening Now

                            </div>

                            <nav className="-mx-3 flex flex-1 justify-end">

                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition focus:outline-none"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition focus:outline-none"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="text-white bg-blue-600 border-blue-600 bottom-2 min-h-9 min-w-9 w-48 h-10 px-4"
                                        >
                                            Create account
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">

                        </main>

                        <footer className="py-16 text-center text-sm text-white/40">
                            About
                            Download the X app
                            Help Center
                            Terms of Service
                            Privacy Policy
                            Cookie Policy
                            Accessibility
                            Ads info
                            Blog
                            Careers
                            Brand Resources
                            Advertising
                            Marketing
                            X for Business
                            Developers
                            Directory
                            Settings
                            © 2025 X Corp.
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
