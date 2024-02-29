import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { User } from "response/user-profile";
import { ChangeEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SIGN_UP_SCHEMA } from "^utils/schema/validations";

const defaultValues: Partial<User> = {
  name: "",
  contact: "",
  address: "",
  type: "member",
  identityId: "",
};

const useSignUpForm = () => {
  const method = useForm<Partial<User>>({
    defaultValues,
    resolver: yupResolver(SIGN_UP_SCHEMA),
  });
  const { push } = useRouter();

  const onBackToLogin = () => push("/login");
  const onBackToMain = () => push("/");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    method.setValue(event.target.name as keyof User, event.target.value, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const onSubmit = () => {
    const values = method.watch();
    console.log(values);
  };

  return { method, onBackToLogin, onBackToMain, onSubmit, onInputChange };
};

export default useSignUpForm;
