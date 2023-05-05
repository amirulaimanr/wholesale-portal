import { useState } from "react";
import React from "react";

const InquiryForm = () => {
    const [to, setTo] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ to, message, email });
        // Add your logic to send the inquiry here
    };

    return (
        <div className="card send-inquiry-container w-full mt-2">
            <div className="send-inquiry-header">
                <h5 className="font-bold mt-3">Send a direct inquiry to this supplier</h5>
            </div>
            <div className="send-inquiry-form px-4 py-2">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="to" className="block text-gray-700 font-bold mb-2">
                            To:
                        </label>
                        <input type="text" name="to" id="to" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={to} onChange={(e) => setTo(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email:
                        </label>
                        <input type="email" name="email" id="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                            Message:
                        </label>
                        <textarea name="message" id="message" rows="5" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded border-round focus:outline-none focus:shadow-outline">
                            Send Inquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InquiryForm;
