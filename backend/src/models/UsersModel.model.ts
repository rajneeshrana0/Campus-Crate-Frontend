import { BaseModel } from "./base.models";

class UsersModel extends BaseModel {
  async getByParams(params: any = {}) {
    let whereCondition: any = {};

    if (params.id) {
      whereCondition.id = params.id;
    }

    if (params.email) {
      whereCondition.email = params.email;
    }

    return await this.prisma.users.findFirst({
      where: whereCondition,
    });
  }

  async getAll(params: any = {}) {
    let whereCondition: any = {};

    if (params.email) {
      whereCondition.email = params.email;
    }

    return await this.prisma.users.findMany({
      where: whereCondition,
    });
  }

  async create(data: any) {
    const obj = await this.prisma.users.create({
      data,
    });

    return obj;
  }
}

export default UsersModel;
