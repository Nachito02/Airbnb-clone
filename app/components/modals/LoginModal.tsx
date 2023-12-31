"use client";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/app/hooks/useRegisterModal";
const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");

        router.refresh();

        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const toogle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back!" subTitle="Login to your Account!" />

      <Input
        id="email"
        label="Email"
        type="email"
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />

      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {
          signIn("google");
        }}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {
          signIn("github");
        }}
      />

      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center gap-2 justify-center">
          <div>Fist time using Airbnb?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={toogle}
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
