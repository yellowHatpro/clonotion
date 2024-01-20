'use client'
import {useRouter} from "next/navigation";
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormSchema} from "@/lib/types";
import {Form, FormControl, FormDescription, FormField, FormItem, FormMessage} from "@/components/ui/form";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Loader from "@/components/loader";
import {actionLoginUser} from "@/lib/server_action/auth_actions";

const LoginPage = () => {
    const router = useRouter()
    const [submitError, setSubmitError] = useState('')
    const form = useForm<z.infer<typeof FormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(FormSchema),
        defaultValues: {email: '', password: ''},
    })
    const isLoading = form.formState.isSubmitting;
    const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (formData) => {
        const {error} = await actionLoginUser(formData)
        if (error) {
            form.reset()
            setSubmitError(error.message)
        }
        router.replace('/dashboard')
    }
    return (
        <Form {...form}>
            <form
                onChange={()=> {
                    if (submitError) setSubmitError('')
                }}
                onSubmit={form.handleSubmit(onSubmit)}
                    className={"w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col"}>
                <Link href={"/"}
                        className={"w-full flex justify-left items-center"}>
                    <text>clonation</text>
                </Link>
                <FormDescription className={"text-ctp-lavender"}>
                    Your one stop solution for collaboration and productivity
                </FormDescription>
                <FormField disabled={isLoading}
                           control={form.control}
                           name={"email"}
                           render={(field)=> (
                               <FormItem>
                                   <FormControl>
                                       <Input type={"email"}
                                              placeholder={"Email"}
                                              {...field}/>
                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>
                           )}/>
                <FormField disabled={isLoading}
                           control={form.control}
                           name={"password"}
                           render={(field) => (
                               <FormItem>
                                   <FormControl>
                                       <Input type={"password"}
                                              placeholder={"Password"}
                                              {...field}/>
                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>
                           )}/>
                {submitError && <FormMessage>
                    {submitError}
                </FormMessage>}
                <Button type={"submit"}
                        className={"w-full p-6 bg-ctp-rosewater hover:bg-ctp-lavender shadow-2xl shadow-ctp-rosewater/50 hover:shadow-ctp-lavender/50"}
                        size={"lg"}
                        disabled={isLoading}>
                    {!isLoading ? "Login" : <Loader/>}
                </Button>
                <span className={"self-start"}>
                    Dont have an account?{' '}
                    <Link
                        href={"/signup"}
                        className={"text-ctp-lavender"}>
                    Sign Up
                </Link>
                </span>
            </form>
        </Form>
    )
}
export default LoginPage
