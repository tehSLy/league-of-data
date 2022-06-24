import { GraphQLResolveInfo } from "graphql";
import { Maybe, QueryResolvers as _QueryResolvers } from "../generated/graphql";

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export const createResolver = <T extends Resolver<any, any, any, any>>(
  fn: T extends Resolver<infer R, infer P, infer C, infer A>
    ? (
        args: A,
        parent: P,
        context: C,
        info: GraphQLResolveInfo
      ) => R extends Maybe<ResolverTypeWrapper<infer U>>
        ? ResolverTypeWrapper<U | null>
        : R
    : void
) => {
  type Params = T extends Resolver<infer R, infer P, infer C, infer A>
    ? { result: R; parent: P; context: C; args: A }
    : void;
  return (
    parent: Params["parent"],
    args: Params["args"],
    context: Params["context"],
    info: GraphQLResolveInfo
  ) => fn(args, parent, context, info) as Params["result"];
};

export const mergeResolvers = <
  T extends Partial<{ [key in keyof _QueryResolvers]: _QueryResolvers[key] }>
>(
  resolvers: T
) => ({ Query: resolvers });

export type QueryResolvers = Required<_QueryResolvers>;
