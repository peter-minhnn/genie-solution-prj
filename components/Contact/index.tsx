"use client";

import {Element} from "react-scroll";
import {useForm} from "react-hook-form";
import {cn} from "@/lib/utils";
import {v4} from 'uuid';
import {toast} from "react-hot-toast";

//Services
import {saveContact} from "@/services/contactService";
//Hooks
import {zodResolver} from "@hookform/resolvers/zod";
//Types
import {ContactType} from "@/types/contact";
//Components
import {ContactSchema} from "@/components/Contact/schema";
import {useMutation} from "react-query";
import {Button} from "@/components/ui/button";

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<ContactType>({
        resolver: zodResolver(ContactSchema), // Apply the zodResolver
    });

    const saveContactMutation = useMutation({
        mutationFn: async (data: ContactType) => await saveContact({
            ...data,
            id: v4()
        }),
        onSuccess: (response) => {
            if (response.code === 1) {
                toast.success(response.message);
                reset();
            } else {
                toast.error(response.message);
            }
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    })

    const onSubmit = async (data: ContactType) => {
        // Handle form submission
        await saveContactMutation.mutateAsync(data);
    };

    return (
        <Element name="Contact" id="Contat">
            <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28" data-aos="fade-up">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                                data-wow-delay=".15s"
                            >
                                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                                    Need Help? Send me your contact
                                </h2>
                                <p className="mb-12 text-base font-medium text-body-color">
                                    Our support team will get back to you ASAP via email.
                                </p>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="-mx-4 flex flex-wrap">
                                        <div className="w-full px-4 md:w-1/2">
                                            <div className="mb-8">
                                                <label
                                                    htmlFor="name"
                                                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                >
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    className={cn("border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none", {
                                                        "border !border-red-500": errors.name,
                                                    })}
                                                    {...register("name")}
                                                />
                                                {errors.name &&
                                                    <span className="text-red-500">{errors.name.message}</span>}
                                            </div>
                                        </div>
                                        <div className="w-full px-4 md:w-1/2">
                                            <div className="mb-8">
                                                <label
                                                    htmlFor="email"
                                                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                >
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className={cn("border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none", {
                                                        "border !border-red-500": errors.email,
                                                    })}
                                                    {...register("email")}
                                                />
                                                {errors.email &&
                                                    <span className="text-red-500">{errors.email.message}</span>}
                                            </div>
                                        </div>
                                        <div className="w-full px-4">
                                            <div className="mb-8">
                                                <label
                                                    htmlFor="message"
                                                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                >
                                                    Your Message
                                                </label>
                                                <textarea
                                                    rows={5}
                                                    {...register("message")}
                                                    placeholder="Enter your Message"
                                                    className={cn("border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none", {
                                                        "border !border-red-500": errors.message,
                                                    })}
                                                ></textarea>
                                                {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                                            </div>
                                        </div>
                                        <div className="w-full px-4">
                                            <Button
                                                type="submit"
                                                className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                                                disabled={saveContactMutation.isLoading}
                                            >
                                                Send Message
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*<div className="w-full px-4 lg:w-5/12 xl:w-4/12">*/}
                        {/*    <NewsLatterBox/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </Element>
    )
}