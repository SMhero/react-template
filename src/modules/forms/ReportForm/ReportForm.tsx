import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import Button from "components/Button/Button";

import styles from "./styles.css";

// @NOTE: WIP
const FormSchema = z.object({
  firstName: z.string().min(4, { message: "Field is required" }).nullable(),
  lastName: z.string().min(4, { message: "Field is required" }).nullable(),
});

type FormData = z.infer<typeof FormSchema>;

const ReportForm: FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.field} htmlFor="firstName">
        <span className={styles.fieldLabel}>First name</span>
        <input {...register("firstName")} className={styles.input} autoComplete="off" />
        {errors.firstName?.message && (
          <span className={styles.errorMessage}>{errors.firstName?.message}</span>
        )}
      </label>
      <label className={styles.field} htmlFor="firstName">
        <span className={styles.fieldLabel}>Last name</span>
        <input {...register("lastName")} className={styles.input} autoComplete="off" />
        {errors.lastName?.message && (
          <span className={styles.errorMessage}>{errors.lastName?.message}</span>
        )}
      </label>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ReportForm;
