'use client'

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { handleShareMeal } from "@/lib/actions";
import FormSubmitButton from "@/components/meals/form-submit-button";
import { useFormState } from 'react-dom'

export default function ShareMealPage() {

  const [state, formAction] = useFormState(handleShareMeal, {message : null});

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email"  requiredt/>
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p>{state.message && <p>{state.message}</p>}</p>
          <p className={classes.actions}>
            <FormSubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}
