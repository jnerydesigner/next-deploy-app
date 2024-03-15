import Image from "next/image";

export default function Home() {
  return (
    <div className="m-0 w-[100%] h-[100vh] flex justify-center items-center flex-col bg-slate-400 shadow-sm">
      <div className="m-0 w-[50%] h-[70vh] flex justify-center items-center flex-col bg-zinc-900 shadow-md rounded p-8">
        <h2 className="py-8 text-6xl text-center">
          New Deploy in NextJS - By Jander Nery - Com Novo Deploy - No NextJS
        </h2>
        <p>
          O texto dissertativo – ou dissertação – é um tipo de texto, de
          natureza teórica, que tem o objetivo principal de expor um tema. De
          forma geral, um bom texto dissertativo compreende uma exposição
          minuciosa sobre o tema. Por isso, é fundamental que a pessoa autora
          demostre ter conhecimentos amplos sobre o assunto. A principal
          característica desse tipo de texto é a capacidade de despertar
          reflexão em que está lendo. Seja através das exposições ou dos
          argumentos. Ou seja: a intenção do texto é gerar a capacidade de
          pensar sobre aquele assunto, a partir de fatos ou opiniões. Isso faz
          com que o texto dissertativo seja necessário em todos os níveis de
          escolaridade e com diferentes graus de complexidade: do ensino médio
          ao mestrado e doutorado; das disciplinas da escola até a prova do ENEM
          e vestibulares.
        </p>
      </div>
    </div>
  );
}
