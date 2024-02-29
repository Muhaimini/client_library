import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { User } from "response/user-profile";
import { ChangeEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_IN_SCHEMA } from "^utils/schema/validations";
import usePostCredentials from "^hooks/mutations/use-post-creadential";
import useLocalStorage from "^hooks/storage";

const defaultValues: Partial<User> = {
  name: "",
  identityId: "",
};

const useSigninForm = () => {
  const { mutate } = usePostCredentials();
  const { setTokenToLocalStorage } = useLocalStorage();

  const method = useForm<Partial<User>>({
    defaultValues,
    resolver: yupResolver(LOGIN_IN_SCHEMA),
  });
  const { push } = useRouter();

  const onOpenSignUpPage = () => push("/signup");
  const onBackToMain = () => push("/");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    method.setValue(event.target.name as keyof User, event.target.value, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const onSubmit = () => {
    const values = method.watch();
    mutate(values, {
      onSuccess: (response) => {
        setTokenToLocalStorage(response.data?.data);
        onBackToMain();
      },
    });
  };

  return { method, onOpenSignUpPage, onBackToMain, onSubmit, onInputChange };
};

export default useSigninForm;
