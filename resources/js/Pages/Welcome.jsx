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

                    <div className="lg:max-w-7xl grid grid-cols-2 items-center lg:grid-cols-3">

                        <div className="flex size-[380px] ml-24 mb-14">

                            <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-custom-grey">

                                <g>
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </g>

                            </svg>

                        </div>


                        <main className="flex">

                            <div className="ml-80">

                                <div
                                    className="text-custom-grey text-6xl truncate pb-12 tracking-[-1.2px] font-chirp_extra_bold">
                                    Happening now
                                </div>

                                <div className="text-custom-grey text-3xl pb-6 font-chirp_extra_bold mb-3">
                                    Join today.
                                </div>

                                <button className="text-slate-600 bg-white text-sm font-google_sans font-medium w-72 text-center rounded-full
                                                pt-2 pb-2">

                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                         className="size-5 ml-14">
                                        <g>
                                            <path fill="#EA4335"
                                                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                            <path fill="#4285F4"
                                                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                            <path fill="#FBBC05"
                                                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                            <path fill="#34A853"
                                                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                            <path fill="none" d="M0 0h48v48H0z"></path>
                                        </g>
                                    </svg>
                                </button>

                                <button className="text-slate-600 bg-white text-sm font-google_sans font-medium w-72 text-center rounded-full
                                                pt-2 pb-2 mt-5">

                                    <svg viewBox="0 0 24 24" className="size-5 ml-14">
                                        <g>
                                            <path
                                                d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
                                        </g>
                                    </svg>

                                </button>

                                <div className="flex m-2 text-slate-800 flex-row">
                                    <div>──────────</div>
                                    <div className="text-white pr-2 pl-2">OR</div>
                                    <div>──────────</div>
                                </div>

                                <button className="text-white pt-2 pb-2 bg-custom-blue text-center text-sm font-mac_bold w-72 rounded-full">

                                    <Link
                                        href={route('register')}
                                        className=""
                                    >
                                        Create account
                                    </Link>

                                </button>

                                <div className="text-custom-grey2 leading-3 text-xs font-mac_regular mt-3">
                                    By signing up, you agree to the Terms of Service and Privacy <br/> Policy,
                                    including Cookie Use.
                                </div>

                                <div className="text-slate-100 text-lg pt-10 font-bold">
                                    Already have an account?
                                </div>

                                <button className="text-blue-500 outline outline-white text-center text-sm font-mac_bold w-72 rounded-full mt-5">

                                    <Link
                                        href={route('login')}
                                        className=""
                                    >
                                        Sign in
                                    </Link>

                                </button>
                            </div>
                        </main>
                    </div>
                    <div
                        className="text-custom-grey2 text-xs pl-4 pr-4 pb-3 pt-3 absolute bottom-0
                        font-mac_regular flex flex-col flex-wrap items-center">

                        About |
                        Download the X app |
                        Help Center |
                        Terms of Service |
                        Privacy Policy |
                        Cookie Policy |
                        Accessibility |
                        Ads info |
                        Blog |
                        Careers |
                        Brand Resources |
                        Advertising |
                        Marketing |
                        X for Business |
                        Developers |
                        Directory |
                        Settings |
                        © 2025 X Corp.

                    </div>
                </div>
            </div>
        </>
    );
}
