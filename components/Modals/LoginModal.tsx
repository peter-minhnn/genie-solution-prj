import {Dispatch, SetStateAction} from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-hot-toast";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema} from "@/schemas/loginShema";
import {LoginType} from "@/types/login";
import {cn} from "@/lib/utils";

type LoginModalProps = {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export default function LoginModal({setIsLoggedIn}: LoginModalProps) {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginType>({
        resolver: zodResolver(LoginSchema), // Apply the zodResolver
    });

    const onLoginSubmit = async (data: LoginType) => {
        // Handle form submission
        if(data.username === "admin" && data.password === "admin") {
            toast.success("Login success");
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", "true");
            return;
        }
        toast.error("Username or password is incorrect");
        localStorage.getItem("isLoggedIn") && localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <div id="authentication-modal" tabIndex={-1} aria-hidden="true"
             className="flex justify-center items-center w-full md:inset-0 h-[100ch] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Sign in to our platform
                        </h3>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={handleSubmit(onLoginSubmit)}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="text"
                                    id="username"
                                    className={cn(
                                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
                                        {
                                            "border !border-red-500": errors.username
                                        }
                                    )}
                                    placeholder="Please enter your user name"
                                    {...register("username")}
                                />
                                {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className={cn(
                                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
                                        {
                                            "border !border-red-500": errors.password
                                        }
                                    )}
                                    {...register("password")}
                                />
                                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Login to your account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}