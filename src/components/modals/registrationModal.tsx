"use client";

export default function RegistrationSuccessModal({
    onLogin,
}: {
    onLogin: () => void;
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full transform transition-all border border-gray-100">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                        <svg
                            className="h-6 w-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900">
                        Registration Successful
                    </h3>

                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                        Registration successful! Please check your email to confirm your
                        account before logging.
                    </p>
                </div>

                <div className="flex gap-3 mt-6">
                    <button
                        onClick={onLogin}
                        className="flex-1 cursor-pointer bg-[#1D2B48] text-white font-medium py-2.5 px-4 rounded-lg shadow-sm shadow-green-200 transition-colors duration-200"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
