<template>
  <div class="inq_container w-full py-16 px-32 flex h-full">
    <div
      class="
        inq_description_container
        flex flex-col
        text-white
        space-y-8
        w-1/2
        py-32
      "
    >
      <span class="font-bold text-6xl">Oído Amigo</span>
      <span class="text-2xl"
        >Hola, bienvenido a <strong>OÍDO AMIGO</strong>, realiza tus consultas y
        recibe ayuda de especialistas
      </span>
      <span class="text-2xl">Estamos para escucharte</span>
    </div>
    <div class="inq_form_container w-1/2 flex justify-end px-16">
      <div class="inq_form space-y-4 w-4/6">
        <input
          class="ipt w-full rounded-lg shadow px-4 py-2"
          type="text"
          placeholder="Nombres"
        />
        <input
          class="ipt w-full rounded-lg shadow px-4 py-2"
          type="text"
          placeholder="Apellidos"
        />
        <input
          class="ipt w-full rounded-lg shadow px-4 py-2"
          type="text"
          placeholder="Número de telefono"
        />
        <input
          class="ipt w-full rounded-lg shadow px-4 py-2"
          type="text"
          placeholder="Correo Electrónico"
        />
        <input
          class="ipt w-full rounded-lg shadow px-4 py-2"
          type="text"
          placeholder="País o ciudad"
        />
        <textarea
          class="ipt w-full rounded-lg shadow resize-none px-4 py-2"
          rows="6"
          placeholder="Motivo de consulta"
        ></textarea>
        <div
          class="
            accept_terms_container
            flex
            items-center
            space-x-2
          "
        >
          <input type="checkbox" class="" />
          <span class="text-white"
            >Acepto las políticas de privacidad y uso de datos</span
          >
        </div>
        <div class="submit_container py-2">
          <button
            class="btn w-full rounded-lg shadow py-4 text-xl font-medium mt-8"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ipt {
  outline: none;
  background-color: #6469ff;
  color: white;
}

::placeholder {
  color: #ffffffc2;
}
.btn {
  color: white;
  background-color: #ed8b52;
}
</style>
