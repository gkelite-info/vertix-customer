'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    getCustomer,
    updateCustomer,
} from '@/app/api/SupabaseAPI/customer/customerApi';
import toast from 'react-hot-toast';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function EditDetailsModal({ isOpen, onClose }: Props) {
    const [loading, setLoading] = useState(false);
    const [authId, setAuthId] = useState<string | null>(null);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (!isOpen) return;

        const loadCustomer = async () => {
            try {
                setLoading(true);
                const customer = await getCustomer();

                if (customer) {
                    setAuthId(customer.auth_id);
                    setFirstName(customer.firstname ?? '');
                    setMiddleName(customer.middlename ?? '');
                    setLastName(customer.lastname ?? '');
                    setPhone(customer.phone ?? '');
                    setDob(customer.dob ?? '');
                }
            } catch (error) {
                console.error('Failed to load customer', error);
            } finally {
                setLoading(false);
            }
        };

        loadCustomer();
    }, [isOpen]);

    const handleSave = async () => {
        if (!firstName.trim() || !lastName.trim()) {
            alert('First and Last Name are required');
            return;
        }

        if (!authId) {
            alert('User not identified');
            return;
        }

        try {
            setLoading(true);

            await updateCustomer(authId, {
                firstname: firstName.trim(),
                middlename: middleName.trim() || null,
                lastname: lastName.trim(),
                phone,
                dob: dob || null,
            });

            setTimeout(() => {
                toast.success("Updated details successfully");
            }, 1000);

            onClose();
        } catch (error: any) {
            console.error('Failed to update customer', error);
            toast.error("Failed to update customer", error);
            toast.error('Failed to save details. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-black/40 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-2xl shadow-2xl w-[90%] sm:w-[420px] max-h-[85%] flex flex-col"
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.85, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="flex items-center justify-between px-5 py-4 border-b">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Edit Profile
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-xl text-gray-500 hover:text-gray-800 cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-5 space-y-4 overflow-y-auto text-gray-700">
                            {loading ? (
                                <p className="text-sm text-gray-500 text-center">
                                    Loading details...
                                </p>
                            ) : (
                                <>
                                    <Input label="First Name" value={firstName} onChange={setFirstName} />
                                    <Input label="Middle Name" value={middleName} onChange={setMiddleName} />
                                    <Input label="Last Name" value={lastName} onChange={setLastName} />
                                    <Input label="Date of Birth" type="date" value={dob} onChange={setDob} />
                                    <Input
                                        label="Phone"
                                        value={phone}
                                        onChange={(v) => {
                                            const onlyDigits = v.replace(/\D/g, '');
                                            if (onlyDigits.length <= 10) {
                                                setPhone(onlyDigits);
                                            }
                                        }}
                                    />
                                </>
                            )}
                        </div>

                        <div className="border-t px-5 py-4 flex justify-end gap-3">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-sm rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 transition cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                disabled={loading}
                                onClick={handleSave}
                                className="px-6 py-2 text-sm rounded-full bg-[#1D2B48] text-white transition disabled:opacity-50 cursor-pointer"
                            >
                                {loading ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function Input({
    label,
    value,
    onChange,
    type = 'text',
}: {
    label: string;
    value: string;
    type?: string;
    onChange: (v: string) => void;
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}
