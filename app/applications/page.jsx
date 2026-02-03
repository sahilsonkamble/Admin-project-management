"use client";

import React, { useState } from "react";

export default function Applications() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("Draft");
    const [description, setdescription] = useState("")
    const [towhom,settowhom] = useState("")

    const applications = [
        { title: "App 1", status: "In Progress" },
        { title: "Leave form 1 to 10", status: "Submitted" },
    ];

    const handleSubmit = () => {
        // later: push to backend / state
        console.log({ title, status });
        setIsOpen(false);
        setTitle("");
        setStatus("Draft");
    };

    return (
        <div className="flex flex-col gap-6">

            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    Your Applications
                </h1>

                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl
                     hover:bg-green-700 transition"
                >
                    + New Application
                </button>
            </div>

            {/* Applications List */}
            <div className="bg-white rounded-2xl shadow divide-y overflow-y-auto h-140">
                {applications.map((app, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 m-2
                       bg-zinc-100 rounded-xl hover:bg-green-50 transition"
                    >
                        <div>
                            <p className="font-medium text-zinc-900">{app.title}</p>
                            <p className="text-sm text-zinc-500">{app.status}</p>
                        </div>

                        <span className="text-sm px-3 py-1 rounded-full
                             bg-green-100 text-green-700">
                            {app.status}
                        </span>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dialog */}
                    <div className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">
                            New Application
                        </h2>

                        <form className="flex flex-col gap-4 text-black">
                            <input
                                type="text"
                                placeholder="Application title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="border rounded-xl text-black px-4 py-2 focus:outline-none
                           focus:ring-2 focus:ring-green-500"
                            />
                            <textarea
                                placeholder="Application description"
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                                rows={4}
                                className="border rounded-xl text-black px-4 py-2 resize-none
             focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <input
                                type="text"
                                placeholder="To whom "
                                value={towhom}
                                onChange={(e) => settowhom(e.target.value)}
                                className="border rounded-xl px-4 py-2 focus:outline-none
                           focus:ring-2 focus:ring-green-500"
                            />



                        </form>

                        {/* Actions */}
                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 rounded-xl border"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 rounded-xl bg-green-600
                           text-white hover:bg-green-700"
                            >
                                Create
                            </button>
                        </div>
                    </div>

                </div>
            )}

        </div>
    );
}
