import React, { useState, useRef } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import {
    ShieldCheck,
    Lock,
    Mail,
    Eye,
    EyeOff,
    AlertCircle,
    ArrowRight,
} from 'lucide-react';
import logo from '../../assets/logo/logo.png';
import { loginAdmin } from '../../utils/adminApi';

export const TURNSTILE_SITE_KEY = '0x4AAAAAAE32Pw9QivldjMWo';

export default function AdminLogin({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const turnstileRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const u = username.trim();
        const p = password;

        if (!u) return setError('Please enter your username or email.');
        if (!p.trim()) return setError('Please enter your password.');

        setLoading(true);

        try {
            const widget = turnstileRef.current;

            if (!widget) {
                setError('Security verification is loading. Please retry.');
                return;
            }

            // Execute invisible verification and wait for its token.
            widget.execute();
            const token = await widget.getResponsePromise();

            if (!token) {
                setError('Security verification failed. Please retry.');
                widget.reset();
                return;
            }

            const res = await loginAdmin({
                username: u,
                password: p,
                turnstileToken: token.trim(),
            });

            if (res.ok) {
                onLoginSuccess();
            } else {
                setError(
                    res.status === 401
                        ? 'Invalid credentials. Please verify username and password.'
                        : res.status === 400
                        ? 'Security challenge verification failed. Please retry.'
                        : res.error || 'Login failed.'
                );

                widget.reset();
            }
        } catch {
            setError('Security verification or login failed. Please try again.');
            turnstileRef.current?.reset();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-4">
            <div className="w-full max-w-sm sm:max-w-md bg-white border border-[#E5E0D8] rounded-xl shadow-md p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-6">
                    <img
                        src={logo}
                        alt="Devprath"
                        className="h-14 sm:h-16 w-auto object-contain mb-3"
                    />

                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FAF7F2] border border-[#B9935A]/30 text-[11px] font-semibold text-[#8F6E3B] mb-2 uppercase">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#B9935A]" />
                        Restricted Admin Area
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-serif text-[#1F1E1C] font-semibold">
                        Administrator Access
                    </h1>
                </div>

                {error && (
                    <div
                        role="alert"
                        className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2"
                    >
                        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-[#1F1E1C] mb-1">
                            Username / Email
                        </label>

                        <div className="relative">
                            <Mail className="w-4 h-4 text-[#948C81] absolute left-3 top-3" />

                            <input
                                type="text"
                                autoComplete="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="admin@devprath.com"
                                required
                                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E5E0D8] focus:border-[#B9935A] focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-[#1F1E1C] mb-1">
                            Password
                        </label>

                        <div className="relative">
                            <Lock className="w-4 h-4 text-[#948C81] absolute left-3 top-3" />

                            <input
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full pl-9 pr-10 py-2 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E5E0D8] focus:border-[#B9935A] focus:outline-none"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                className="absolute right-3 top-2.5 text-[#948C81] hover:text-[#1F1E1C]"
                            >
                                {showPassword
                                    ? <EyeOff className="w-4 h-4" />
                                    : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    {/* Invisible Turnstile: no visible widget space */}
                    <div className="hidden" aria-hidden="true">
                        <Turnstile
                            ref={turnstileRef}
                            siteKey={TURNSTILE_SITE_KEY}
                            options={{
                                theme: 'light',
                                size: 'invisible',
                                execution: 'execute',
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2.5 px-4 rounded-lg bg-[#B9935A] hover:bg-[#8F6E3B] text-white font-medium text-xs sm:text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                        {loading ? (
                            'Authenticating...'
                        ) : (
                            <>
                                <span>Sign In</span>
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}