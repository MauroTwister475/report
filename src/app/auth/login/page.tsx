"use client"
import Image from "next/image";

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react";
import { TitleSection } from "../TitleSection";
import { Form } from "@/app/components/Form";

import { ErrorMessage } from "@/app/utils/FeedBack/Messages";
import { Toast } from "@/app/utils/FeedBack/Toast";

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { push } = useRouter();

  function onSubmitLogin(e: FormEvent) {
    e.preventDefault();

    if(username === "MED" && password === "2023"){
      push("/dashboard");
    } 

    ErrorMessage("Nome de usuário ou palavra-passe incorrecta!");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={onSubmitLogin}
        className="w-[54rem] h-full flex flex-col gap-8 items-center justify-center px-32"
      >
        <TitleSection title="MED-Relatório" />
        <Toast position="top-right"/>

        <Form.Input
          type="text"
          value={username}
          label="Nome de usuário"
          placeholder="Ministério da educação"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="w-full flex flex-col gap-2 justify-center items-end">
          <Form.Input
            type="password"
            value={password}
            label="Palavra-passe"
            placeholder="Senha do usuário"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Form.Button
          disabled={!username || !password}
          className="rounded-md bg-main-500 disabled:cursor-not-allowed cursor-pointer"
        >
          Entrar
        </Form.Button>
      </form>
      <div className="w-full h-full bg-main-500 p-20 flex items-center justify-center">
        <Image
          src="/sign.svg"
          width={100}
          height={100}
          alt="imagem de login"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}