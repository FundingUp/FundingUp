"use client"

import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-gradient-to-br from-blue-300 via-primary to-primary text-white mt-auto">

            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">FundingUp</h3>
                        <p className="text-blue-100 mb-4">
                            Making investments accessible and profitable for everyone. Join our community of successful investors.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-100 hover:text-white transition-colors">
                                <FaFacebookSquare className="text-2xl" />
                            </a>
                            <a href="#" className="text-blue-100 hover:text-white transition-colors">
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a href="#" className="text-blue-100 hover:text-white transition-colors">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="#" className="text-blue-100 hover:text-white transition-colors">
                                <FaTwitter className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['About Us', 'Investments', 'How It Works', 'FAQ', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-blue-100 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <LuMapPin className="text-blue-100" />
                                <span className="text-blue-100">Lisbon, Portugal</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <LuPhone className="text-blue-100" />
                                <span className="text-blue-100">+351 915 607 912</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <LuMail className="text-blue-100" />
                                <span className="text-blue-100">contact@fundingup.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
                        <p className="text-blue-100 mb-4">Subscribe to our newsletter for the latest investment opportunities.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 placeholder:text-blue-100"
                            />
                            <button className="w-full px-4 py-2 bg-white text-primary rounded-md hover:bg-blue-100 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-blue-100 text-center md:text-left">
                            © {currentYear} FundingUp. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-blue-100 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-blue-100 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-blue-100 hover:text-white transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}