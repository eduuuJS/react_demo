import { Container } from "inversify";
import { GeneralDataRepository, IGeneralDataRepository } from "../../app/features/dashboard/data/repositories/general_data_repository";

export const sl = new Container();
sl.bind<IGeneralDataRepository>("GeneralDataRepository").to(GeneralDataRepository).inSingletonScope();