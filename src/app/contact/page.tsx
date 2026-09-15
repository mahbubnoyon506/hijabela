"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export type ContactInfoItem = {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
    badge?: React.ReactNode;
};

export type ContactUsProps = {
    title?: string;
    subTitle?: string;
    phoneNumber?: string;
    phoneHref?: string;
    email?: string;
    address?: string;
    supportHours?: string;
    mapEmbedUrl?: string;
    className?: string;
    onSubmit?: (formData: Record<string, any>) => void;
};

export default function ContactUs({
    title = "Send us a message",
    subTitle = "A real studio team, ready to help you choose the right drape.",
    phoneNumber = "+8801320380755",
    phoneHref = "tel:+8801320380755",
    email = "info@hijabela.com.bd",
    address = "House #35, Road #7, Block G, Dhaka-1213, Bangladesh",
    supportHours = "Support: Sat - Thu (10am - 8pm)",
    mapEmbedUrl = "https://maps.app.goo.gl/y9byzhTjeGysVRBh6",
    className,
    onSubmit,
}: ContactUsProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value, type } = e.target;
        const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
        setFormData((prev) => ({ ...prev, [id]: val }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (onSubmit) {
            onSubmit(formData);
        }

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                privacy: false,
            });
        }, 1000);
    };

    return (
        <>
            <section className={cn("font-secondary w-full px-4 py-8 md:py-12 lg:py-20 sm:px-6 lg:px-8", className)}>

                {/* Header Text */}
                <div className="text-center mb-10 md:mb-16">
                    <p className="text-xs md:text-sm font-semibold tracking-[2.9px] text-primary uppercase mb-2">
                        Get in touch
                    </p>
                    <h1 className="text-primary text-xl md:text-2xl lg:text-4xl font-light tracking-[2.9px] text-foreground mb-3">
                        {title}
                    </h1>
                    {subTitle && (
                        <p className="font-secondary text-base tracking-[2px] text-foreground">
                            {subTitle}
                        </p>
                    )}
                </div>

                {/* Main Grid Container */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Contact Details Card */}
                    <div className="lg:col-span-5 bg-card rounded-2xl border border-gray-100 p-6 sm:p-8 transition-all h-full flex flex-col">

                        {/* Card Header */}
                        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <h2 className="text-primary text-base md:text-lg lg:text-xl font-light tracking-[2px] text-foreground">Contact details</h2>
                        </div>

                        {/* Contact Info List */}
                        <div className="space-y-6">

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-1">Phone</p>
                                    <a href={phoneHref} className="text-sm font-medium tracking-[2px] text-foreground flex items-center gap-2 flex-wrap">
                                        {phoneNumber}
                                        <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-semibold border border-emerald-200">
                                            WhatsApp
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-1">Email</p>
                                    <a href={`mailto:${email}`} className="text-sm font-medium tracking-[2px] text-foreground flex items-center gap-2 flex-wrap">
                                        {email}
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-1">Address</p>
                                    <p className="text-sm font-medium tracking-[2px] text-foreground flex items-center gap-2 flex-wrap">
                                        {address}
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Support Hours Footer */}
                        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                            {supportHours}

                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="lg:col-span-7 bg-card rounded-2xl border border-gray-100 p-6 sm:p-8 h-full flex flex-col">

                        <form onSubmit={handleSubmit} className="space-y-5 h-full">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-semibold tracking-[2px] text-foreground mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/50"
                                    />
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold tracking-[2px] text-foreground mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/50"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Phone Number */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold tracking-[2px] text-foreground mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+880..."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/50"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold tracking-[2px] text-foreground mb-2">
                                        Subject <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help?"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/50"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold tracking-[2px] text-foreground mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/50 resize-none"
                                ></textarea>
                            </div>

                            {/* Privacy Policy Checkbox */}
                            <div className="flex items-center gap-2 pt-1">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    required
                                    checked={formData.privacy}
                                    onChange={handleChange}
                                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                                />
                                <label htmlFor="privacy" className="font-secondary text-xs tracking-[1px] cursor-pointer select-none">
                                    I agree to the privacy policy <span className="text-red-500">*</span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-primary-foreground font-medium py-3.5 px-6 rounded-lg hover:bg-primary/95 transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 text-sm md:text-base tracking-wide disabled:opacity-75"
                                >
                                    {isSubmitting ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <>
                                            <span className="text-xs font-secondary font-semibold tracking-[2px]">Send message</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Success Message Alert */}
                            {isSubmitted && (
                                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                                    <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold">Message sent successfully!</p>
                                        <p className="text-xs text-emerald-700">Thank you for reaching out. Our studio team will get back to you shortly.</p>
                                    </div>
                                </div>
                            )}

                        </form>

                    </div>

                </div>


            </section>
            {/* Map Section */}
            <div className="w-full mx-auto mt-8 md:mt-12">
                <div className="overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-gray-50 h-[380px] md:h-[600px] relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d912.7007604449933!2d90.403671!3d23.790027!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ3JzI0LjkiTiA5MMKwMjQnMTMuNCJF!5e0!3m2!1sen!2sbd!4v1789391231824!5m2!1sen!2sbd" title="Studio Location Map"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full grayscale-[20%] contrast-[105%] hover:grayscale-0 transition-all duration-500" />

                    {/* Floating Map Badge */}
                    <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 max-w-xs">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold tracking-[2px] text-foreground">Studio Location</p>
                            <p className="text-xs tracking-[1px]">{address}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}