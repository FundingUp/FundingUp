"use client"

import { useState } from 'react'
import { LuMail, LuPhone, LuMapPin, LuSend, LuLoader2 } from 'react-icons/lu'
import { toast } from 'react-hot-toast'

export default function Contacts() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            // Reset form
            setFormData({ name: '', email: '', subject: '', message: '' })
            toast.success('Message sent successfully!')

        } catch (error) {
            console.error('Error:', error)
            toast.error('Failed to send message. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 text-text">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-t from-text via-primary to-primary text-transparent">
                    Get in Touch
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Have questions about investments? We're here to help and would love to hear from you.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Cards */}
                    <div className="space-y-6">
                        {/* Email Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <LuMail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                                    <a href="mailto:contact@investhub.com" className="text-primary hover:text-primary/80">
                                        contact@investhub.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <LuPhone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                                    <a href="tel:+15551234567" className="text-primary hover:text-primary/80">
                                        +351 915 607 912
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <LuMapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                                    <p className="text-primary">
                                        Lisbon, Portugal
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border-2 border-zinc-200 rounded-lg focus:border-primary outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border-2 border-zinc-200 rounded-lg focus:border-primary outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border-2 border-zinc-200 rounded-lg focus:border-primary outline-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-2 border-2 border-zinc-200 rounded-lg focus:border-primary outline-none resize-none"
                                        placeholder="Write your message here..."
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="group w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <LuLoader2 className="w-5 h-5 animate-spin" />
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <LuSend className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <div className="bg-white rounded-2xl shadow-lg p-2 h-[400px] overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647533374815!5m2!1sen!2sus"
                            className="w-full h-full rounded-xl"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}