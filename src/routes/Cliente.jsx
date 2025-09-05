import React from 'react'
import { useForm } from 'react-hook-form'

const Cliente = () => {
  
  //destruct - acessa as propriedades de outro componente ou lugar 
  //Hook - useForm - facilita a criação e validação de formulários
  const{register, setValue, setFocus}=useForm();

  //Criando a função buscaCep

  function buscarCep(e){
    const cep = e.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=>res.json())     //converte os dados para json
    .then((dados)=>{       // guarda os dados convertidos
      setValue("rua", dados.logradouro);
      setValue("bairro", dados.bairro);
      setFocus("numero")

    })
  }

  return (
    <section className='bg-gray-800 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10'>
      <form className='space-y-6'>
        <fieldset className='border border-gray-600 p-6 rounded-md'>
          <legend className='text-white text-xl font-bold mb-4'>Dados Cliente</legend>
          <div className='mb-4'>
            <label className='block text-white mb-2'>Cep:</label>
            <input
                type="text" className='w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                {...register("cep")}
                onBlur={buscarCep}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-white mb-2'>Bairro:</label>
            <input
                type="text"
                className='w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                {...register("bairro")}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-white mb-2'>Rua:</label>
            <input
                type="text"
                className='w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                {...register("rua")}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-white mb-2'>Número:</label>
            <input
                type="text"
                className='w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                {...register("numero")}
            />
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Cliente