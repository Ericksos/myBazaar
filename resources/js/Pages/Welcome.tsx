import { Link, Head } from "@inertiajs/react";
import { Button } from "@/shadcn/ui/button";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow flex flex-col items-center justify-center w-full bg-emerald-700">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center mb-14 mt-2 sm:mt-4">
                            <ShoppingBasketIcon className="h-12 w-12 text-primary" />
                            <span className="ml-2 text-4xl font-bold  text-gray-100">
                                myBazaar
                            </span>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                            <div className="rounded-2xl bg-background p-6 shadow-xl flex flex-col justify-between">
                                <div>
                                    <BriefcaseIcon className="h-16 w-16 text-primary mb-4" />
                                    <h2 className="text-2xl font-bold text-center">
                                        Create Your Virtual Bazaar
                                    </h2>
                                    <p className="mt-4 text-muted-foreground text-center">
                                        Build your own virtual marketplace and
                                        connect with like-minded individuals.
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <Button className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow-md transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-background p-6 shadow-xl flex flex-col justify-between">
                                <div>
                                    <GroupIcon className="h-16 w-16 text-primary mb-4" />
                                    <h2 className="text-2xl font-bold text-center">
                                        Join Communities
                                    </h2>
                                    <p className="mt-4 text-muted-foreground text-center">
                                        Participate in communities based on
                                        mutual interests or proximity.
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <Button className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow-md transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                                        Explore Communities
                                    </Button>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-background p-6 shadow-xl flex flex-col justify-between">
                                <div>
                                    <WebcamIcon className="h-16 w-16 text-primary mb-4" />
                                    <h2 className="text-2xl font-bold text-center">
                                        Chat and Engage
                                    </h2>
                                    <p className="mt-4 text-muted-foreground text-center">
                                        Connect with other users, participate in
                                        discussions, and discover new
                                        opportunities.
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <Button className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow-md transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                                        Join the Conversation
                                    </Button>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-background p-6 shadow-xl flex flex-col justify-between">
                                <div>
                                    <UsersIcon className="h-16 w-16 text-primary mb-4" />
                                    <h2 className="text-2xl font-bold text-center">
                                        Friends and Connections
                                    </h2>
                                    <p className="mt-4 text-muted-foreground text-center">
                                        Expand your network, connect with
                                        like-minded individuals, and build
                                        lasting relationships.
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <Button className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow-md transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                                        Grow Your Network
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <h3 className="text-3xl font-bold text-gray-300">
                                Discover, Connect, and Thrive on myBazaar
                            </h3>
                            <p className="mt-4 text-gray-200">
                                Your one-stop destination for building a vibrant
                                virtual community.
                            </p>
                        </div>
                    </div>
                </div>
                <footer className="w-full bg-background p-4 text-center text-muted-foreground">
                    <p>&copy; 2024 myBazaar.</p>
                    <p>
                        <a
                            href="https://www.gpstech.com.br"
                            className="hover:text-emerald-400"
                            target="__blank"
                        >
                            GpsTech
                        </a>
                        . All rights reserved.
                    </p>
                </footer>
            </div>
        </>
    );
}

function BriefcaseIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    );
}

function GroupIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 7V5c0-1.1.9-2 2-2h2" />
            <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
            <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
            <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
            <rect width="7" height="5" x="7" y="7" rx="1" />
            <rect width="7" height="5" x="10" y="12" rx="1" />
        </svg>
    );
}

function ShoppingBasketIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 11-1 9" />
            <path d="m19 11-4-7" />
            <path d="M2 11h20" />
            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
            <path d="M4.5 15.5h15" />
            <path d="m5 11 4-7" />
            <path d="m9 11 1 9" />
        </svg>
    );
}

function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function WebcamIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="10" r="8" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 22h10" />
            <path d="M12 22v-4" />
        </svg>
    );
}

function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

export { XIcon };
