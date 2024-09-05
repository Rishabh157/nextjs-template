import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 shadow-sm">
            <div className="flex items-center justify-between p-8">
                {/* Left Side: Company Logo */}
                <div>
                    <Link href="/" legacyBehavior>
                        <Image
                            src="/logo.jpg" // Replace with your logo path
                            alt="Company Logo"
                            width={150}
                            height={80}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Center: Navigation Links */}
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link href="/trade-online" legacyBehavior>
                                <a className="text-gray-900 dark:text-white hover:underline">Trade Online</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/team-11" legacyBehavior>
                                <a className="text-gray-900 dark:text-white hover:underline">Team 11</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/how-it-works" legacyBehavior>
                                <a className="text-gray-900 dark:text-white hover:underline">How it works</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/news" legacyBehavior>
                                <a className="text-gray-900 dark:text-white hover:underline">News</a>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Right Side: Login Button */}
                <div className="flex items-center">
                    <button
                        className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
