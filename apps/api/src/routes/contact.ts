import crypto from "node:crypto";
import { Router, type Router as ExpressRouter } from "express";
import type { ContactResponse } from "@smartbots/shared";
import { contactSchema } from "../schemas/contact.js";

export const contactRouter: ExpressRouter = Router();

contactRouter.post("/", (req, res, next) => {
  try {
    const payload = contactSchema.parse(req.body);
    const receivedAt = new Date().toISOString();
    const id = crypto.randomUUID();

    console.info("[contact-request]", {
      id,
      receivedAt,
      name: payload.name,
      company: payload.company,
      email: payload.email,
      phone: payload.phone,
      solution: payload.solution
    });

    const response: ContactResponse = { id, receivedAt };
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
});
