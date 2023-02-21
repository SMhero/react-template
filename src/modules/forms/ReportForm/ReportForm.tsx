import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import Button from "components/Button/Button";

import styles from "./styles.css";

const FormSchema = z.object({
  name: z.string().min(4, { message: "Field has at least 4 characters" }),
  email: z.string().email({ message: "Field must be a valid email" }),
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
    <form className={styles.form} onSubmit={onSubmit} autoComplete="off" noValidate>
      <label className={styles.field} htmlFor="name">
        <span className={styles.fieldLabel}>Name</span>
        <input {...register("name")} className={styles.input} />
        {errors.name?.message && (
          <span className={styles.errorMessage}>{errors.name?.message}</span>
        )}
      </label>
      <label className={styles.field} htmlFor="email">
        <span className={styles.fieldLabel}>E-mail</span>
        <input {...register("email")} className={styles.input} />
        {errors.email?.message && (
          <span className={styles.errorMessage}>{errors.email?.message}</span>
        )}
      </label>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ReportForm;
