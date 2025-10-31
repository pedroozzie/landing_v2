import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EnviarMensaje() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [emailValido, setEmailValido] = useState(true);

  const navigate = useNavigate();

  const handleEmailChange = (e: { target: { value: any; }; }) => {
    const v = e.target.value;
    setEmail(v);

    const dominiosPermitidos = [
      "@gmail.com",
      "@hotmail.com",
      "@outlook.com",
      "@yahoo.com",
    ];
    const esValido = dominiosPermitidos.some((dominio) => v.includes(dominio));
    setEmailValido(esValido);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-white px-4">
      <div className="relative bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/30 hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-400/10 via-transparent to-purple-400/10 pointer-events-none" />

        {/* boton regresar */}
        <div className="flex items-center justify-center mb-6 relative">
          <button
            onClick={() => navigate("/")}
            className="absolute left-0 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            title="Volver"
          >
            ←
          </button>
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight text-center w-full">
            📩 Enviar mensaje
          </h2>
        </div>

        {/* formsubmit */}
        <form
          action="https://formsubmit.co/soporteozzie.com@gmail.com"
          method="POST"
          className="space-y-5 relative z-10"
          onSubmit={(e) => {
            if (!emailValido) {
              e.preventDefault();
              alert("Por favor, ingresa un correo válido.");
            }
          }}
        >
          {/* nombre */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Nombre y Apellido
            </label>
            <input
              type="text"
              name="Nombre y apellido"
              value={nombre}
              onChange={(e) => {
                const valor = e.target.value;
                const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
                if (valor.length <= 40 && soloLetras.test(valor)) {
                  setNombre(valor);
                }
              }}
              placeholder="Tu nombre completo"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-sm transition-all duration-200"
              required
            />
            <p className="text-sm text-gray-500 text-right">
              {nombre.length}/40
            </p>
          </div>

          {/* email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="Email"
              value={email}
              onChange={handleEmailChange}
              placeholder="tucorreo@gmail.com"
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none shadow-sm transition-all duration-200 ${
                emailValido
                  ? "border-gray-300 focus:ring-blue-300"
                  : "border-red-400 focus:ring-red-200"
              }`}
              required
            />
            {!emailValido && (
              <p className="text-sm text-red-500 mt-1">
                ❌ Usa un dominio permitido: gmail.com, hotmail.com,
                outlook.com, yahoo.com
              </p>
            )}
          </div>

          {/* mensaje */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Mensaje
            </label>
            <textarea
              name="Mensaje"
              value={mensaje}
              onChange={(e) => {
                if (e.target.value.length <= 200) setMensaje(e.target.value);
              }}
              placeholder="Escribe tu mensaje..."
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300 focus:outline-none resize-none shadow-sm transition-all duration-200"
              required
            />
            <p className="text-sm text-gray-500 text-right">
              {mensaje.length}/200
            </p>
          </div>

          {/* config formsubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Has recibido un nuevo mensaje desde ozzie.com"
          />

          {/* boton mensaje */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
