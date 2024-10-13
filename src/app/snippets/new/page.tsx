"use client";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

const CreateNewSnippet = () => {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });
  return (
    <form action={action}>
      <h3 class="font-bold m-3">Create a CODE SNIPPET</h3>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <label class="w-12" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            class="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div class="flex gap-4">
          <label class="w-12" htmlFor="code">
            Code
          </label>

          <textarea
            name="code"
            class="border rounded p-2 w-full"
            id="code"
          />
        </div>
        {formState.message ? (
          <div class="my-2 p-2 bg-red-200 border rounded border-red-400 ">
            {formState.message}
          </div>
        ) : null}

        <button type="submit" class="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateNewSnippet;
