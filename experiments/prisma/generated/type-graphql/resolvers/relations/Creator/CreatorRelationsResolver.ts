import * as TypeGraphQL from "type-graphql";
import { Creator } from "../../../models/Creator";
import { Problem } from "../../../models/Problem";
import { CreatorLikesArgs } from "./args/CreatorLikesArgs";
import { CreatorProblemsArgs } from "./args/CreatorProblemsArgs";

@TypeGraphQL.Resolver(_of => Creator)
export class CreatorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Problem], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() creator: Creator, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatorLikesArgs): Promise<Problem[]> {
    return ctx.prisma.creator.findUnique({
      where: {
        id: creator.id,
      },
    }).likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Problem], {
    nullable: false
  })
  async problems(@TypeGraphQL.Root() creator: Creator, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatorProblemsArgs): Promise<Problem[]> {
    return ctx.prisma.creator.findUnique({
      where: {
        id: creator.id,
      },
    }).problems(args);
  }
}
