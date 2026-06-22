import { Button } from "@shared/ui/button";
import { Field } from "@shared/ui/field";
import { Loader } from "@shared/ui/loader";
import type { AuthFormProps } from "../model/types";
import styles from "./AuthForm.module.scss";

export const AuthForm = ({
  register,
  isPending,
  handleSubmit,
  onSubmit,
  errors,
  setType,
}: AuthFormProps) => {
  return (
    <>
      {isPending && <Loader />}
      <form id="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          type="email"
          placeholder="Enter Email"
          name="email"
          register={register}
          options={{ required: "Email is required" }}
          error={errors?.email?.message}
        />

        <Field
          type="password"
          placeholder="Enter password"
          name="password"
          register={register}
          options={{ required: "Password is required" }}
          error={errors?.password?.message}
        />
        <div className={styles.wrapperButtons}>
          <Button
            clickHandler={() => {
              setType("login");
            }}
            formId="auth-form"
            type="submit"
          >
            Log In
          </Button>
          <Button
            clickHandler={() => setType("register")}
            formId="auth-form"
            type="submit"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </>
  );
};
