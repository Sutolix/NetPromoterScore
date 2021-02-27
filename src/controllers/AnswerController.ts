import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppErro";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";


class AnswerController {

  async execute(request: Request, response: Response) {

    const { value } = request.params
    const { id } = request.query

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(id)
    })

    if(!surveyUser) {
      throw new AppError('Survey User does not exist!')
    }

    surveyUser.value = Number(value)

    await surveysUsersRepository.save(surveyUser)

    return response.json(surveyUser)
  }
}

export { AnswerController }