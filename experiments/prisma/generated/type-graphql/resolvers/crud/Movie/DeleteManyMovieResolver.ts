import * as TypeGraphQL from "type-graphql";
import { DeleteManyMovieArgs } from "./args/DeleteManyMovieArgs";
import { Movie } from "../../../models/Movie";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Movie)
export class DeleteManyMovieResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMovieArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.movie.deleteMany(args);
  }
}
