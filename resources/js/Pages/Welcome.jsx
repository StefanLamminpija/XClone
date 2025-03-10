import {Head, Link} from '@inertiajs/react';

export default function Welcome({auth, laravelVersion, phpVersion}) {
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
            <Head title="X. It's what's happening"/>

            <div className="bg-black">

                <div className="relative flex min-h-screen flex-col items-center justify-center">

                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">

                        <div className="flex lg:col-start-2 lg:justify-center">

                            <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-custom-grey">

                                <g>
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </g>

                            </svg>

                        </div>


                        <main className="-mx-3 flex flex-1 justify-end">

                            <div>

                                <div
                                    className="text-custom-grey text-[64px] truncate tracking-[-1.2px] font-chirp_extra_bold">
                                    Happening now
                                </div>

                                <div className="text-custom-grey text-[31px] font-chirp_extra_bold mb-3">
                                    Join today.
                                </div>

                                {auth.user ? (
                                    <Link
                                        href={route('Home')}
                                        className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition focus:outline-none"
                                    >
                                        Home
                                    </Link>
                                ) : (
                                    <>
                                        <div className="">

                                            <Link
                                                href={route('register')}
                                                className="text-white bg-custom-blue text-[15px] font-mac_regular
                                                pr-[90px] pl-[90px] pt-[10px] pb-[10px] rounded-[48px]"
                                            >
                                                Create account
                                            </Link>

                                        </div>

                                        <div className="text-custom-grey2 leading-3 text-[11px] font-mac_regular mt-3">
                                            By signing up, you agree to the Terms of Service and Privacy <br/> Policy, including Cookie Use.
                                        </div>

                                        <div>

                                            <Link
                                                href={route('login')}
                                                className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition focus:outline-none"
                                            >
                                                Sign in
                                            </Link>

                                        </div>
                                    </>
                                )}
                            </div>
                        </main>
                    </div>
                </div>
                <footer className="text-custom-grey2 text-[14px] pl-4 pr-4 pb-3 pt-3
                 font-mac_regular flex flex-col flex-wrap items-center">
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
        </>
    );
}
