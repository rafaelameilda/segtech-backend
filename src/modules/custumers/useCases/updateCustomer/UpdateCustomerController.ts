import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";

class UpdateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      additional_information,
      birth_date,
      cep,
      city,
      cnpj,
      complement,
      contact,
      cpf,
      district,
      email,
      estadual_registration,
      logradouro,
      municipal_registration,
      name,
      number,
      social_reason,
      state,
      telephone,
      type_customer,
    } = request.body;
    const { id } = request.body;

    const updateCustomerController = container.resolve(UpdateCustomerUseCase);

    await updateCustomerController.execute({
      birth_date: birth_date ? new Date(birth_date) : undefined,
      cep,
      city,
      cnpj,
      complement,
      contact,
      cpf,
      district,
      email,
      estadual_registration,
      logradouro,
      municipal_registration,
      name,
      number,
      social_reason,
      state,
      telephone,
      type_customer,
      additional_information,
      id,
    });

    return response.status(200).send();
  }
}

export { UpdateCustomerController };
