import { solutionOptions } from "@smartbots/shared";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre."),
  company: z.string().trim().min(2, "Ingresa el nombre de tu empresa."),
  email: z.string().trim().email("Ingresa un correo válido."),
  phone: z.string().trim().min(6, "Ingresa un teléfono válido."),
  solution: z.enum(solutionOptions, {
    errorMap: () => ({ message: "Selecciona una solución." })
  }),
  message: z.string().trim().min(10, "Cuéntanos un poco más sobre tu necesidad.")
});
