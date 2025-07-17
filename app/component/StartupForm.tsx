"use client";
import React, { useActionState, useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { IoSend } from "react-icons/io5";
import { formSchema } from '@/lib/validation';
import { z } from "zod";
import { useRouter } from 'next/navigation';
import { createPitch } from '@/lib/actions';

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("")
    const router = useRouter();

    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        try {
            const fromValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("link") as string,
                pitch,
            }

            await formSchema.parseAsync(fromValues);

            const result = await createPitch(prevState, formData, pitch)

            if (result.status == "SUCCESS")

                router.push(`/startup/${result._id}`)


            return result;


        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;
                setErrors(fieldErrors as unknown as Record<string, string>);

                return { ...prevState, error: " validation failed", status: "ERROR" };
            }

            return { ...prevState, error: 'An unexpected error has occured', status: "ERROR" };

        }

    }

    const [state, fromAction, isPending] = useActionState(handleFormSubmit, { error: "", status: "INITIAL" });


    return (
        <form className='startup-form' action={fromAction}>
            <div className='startup-form_div'>
                <label htmlFor='title' className='startup-form_label'>Title</label>
                <input id="title" name="title" className="startup-form_input" required placeholder="Startup Title" />
                {errors.title && (<p className='startup-form_error'>{errors.title}</p>)}
            </div>

            <div className='startup-form_div'>
                <label htmlFor='description' className='startup-form_label'>Description</label>
                <textarea id="description" name="description" className="startup-form_textarea" required placeholder="Short description of your startup idea" />
                {errors.description && (<p className='startup-form_error'>{errors.description}</p>)}
            </div>

            <div className='startup-form_div'>
                <label htmlFor='category' className='startup-form_label'>Category</label>
                <input id="category" name="category" className="startup-form_input" required placeholder="Choose a category (e.g., Tech, Health, Education etc)." />
                {errors.category && (<p className='startup-form_error'>{errors.category}</p>)}
            </div>

            <div className='startup-form_div'>
                <label htmlFor='link' className='startup-form_label'>Image Link</label>
                <input id="link" name="link" className="startup-form_input" required placeholder="Paste a link to your demo or promotional media" />
                {errors.link && (<p className='startup-form_error'>{errors.link}</p>)}
            </div>

            <div className='startup-form_div ' data-color-mode="light">
                <label htmlFor='pitch' className='startup-form_label'>Pitch</label>
                <MDEditor
                    value={pitch}
                    onChange={(value) => setPitch(value ?? "")}
                    id="pitch"
                    preview="edit"
                    height={300}
                    style={{ borderRadius: 20, overflow: "hidden" }}
                    textareaProps={{
                        placeholder: "Briefly describe the idea and what problem it solves",
                    }}
                    previewOptions={{
                        disallowedElements: ["style"],
                    }}
                />

                {errors.pitch && (<p className='startup-form_error'>{errors.pitch}</p>)}

            </div>

            <button type='submit' className='startup-form_btn' disabled={isPending}>{isPending ? "Submitting..." : "Submit Your Pitch"}
                <IoSend />
            </button>

        </form>
    )
}

export default StartupForm
