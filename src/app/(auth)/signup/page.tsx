'use client'

import * as React from 'react';
import {z} from "zod";
import {useRouter, useSearchParams} from "next/navigation";
import {useMemo, useState} from "react";
import {clsx} from "clsx";

const SignUpFormSchema = z.object(
    {email: z
            .string()
            .describe('Email')
            .email({
            message: "Invalid Email"
        }),
        password: z
            .string()
            .describe('Password')
            .min(6, "Password must be minimum 6 characters"),
        confirmPassword: z
            .string()
            .describe('Confirm Password')
            .min(6, 'Password must be minimum 6 characters')
    }).refine((data)=>data.password === data.confirmPassword, {
        message: "Passwords don't match.",
        path: ['confirmPassword']
})
const Signup = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [submitError, setSubmitError] = useState("")
    const [confirmation, setConfirmation] = useState(false)

    const constExchangeError = useMemo(()=>{
        if (!searchParams) return ''
        return searchParams.get('error_description')
    },[searchParams])

    const confirmationAndErrorStyles = useMemo(()=> clsx(
        'bg-ctp-base', {
            "bg-ctp-red/10": constExchangeError,
            "border-ctp-red/50": constExchangeError,
            "text-ctp-red": constExchangeError
        }
    ), [])



    return (
        <div className={""}>

        </div>
    )
}

export default Signup
