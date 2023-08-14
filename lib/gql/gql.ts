/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query ProjectsCategories($projectCategoryInputArgs: ProjectCategoryInputArgs) {\n    data: queryProjectCategoryList(projectCategoryInputArgs: $projectCategoryInputArgs) {\n      id\n      name\n      sort\n      count\n      subcategories {\n        id\n        name\n        sort\n        count\n      }\n    }\n  }\n": types.ProjectsCategoriesDocument,
    "\n  query Projects(\n    $paginationInputArgs: PaginationInputArgs\n    $projectInputArgs: ProjectInputArgs\n  ) {\n    data: queryProjectPage(\n      paginationInputArgs: $paginationInputArgs\n      projectInputArgs: $projectInputArgs\n    ) {\n      records {\n        id\n        name\n        logo\n        describe\n        website\n        twitter\n        discord\n        telegram\n        github\n        categories {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.ProjectsDocument,
    "\n  query queryProjectCategoryList($projectCategoryInputArgs: ProjectCategoryInputArgs) {\n    queryProjectCategoryList(projectCategoryInputArgs: $projectCategoryInputArgs) {\n      id\n      name\n    }\n  }\n": types.QueryProjectCategoryListDocument,
    "\n  query queryProjectPage(\n    $paginationInputArgs: PaginationInputArgs\n    $projectInputArgs: ProjectInputArgs\n  ) {\n    queryProjectPage(\n      paginationInputArgs: $paginationInputArgs\n      projectInputArgs: $projectInputArgs\n    ) {\n      records {\n        id\n        name\n        logo\n        website\n        twitter\n        discord\n        categories {\n          id\n        }\n      }\n    }\n  }\n": types.QueryProjectPageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProjectsCategories($projectCategoryInputArgs: ProjectCategoryInputArgs) {\n    data: queryProjectCategoryList(projectCategoryInputArgs: $projectCategoryInputArgs) {\n      id\n      name\n      sort\n      count\n      subcategories {\n        id\n        name\n        sort\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProjectsCategories($projectCategoryInputArgs: ProjectCategoryInputArgs) {\n    data: queryProjectCategoryList(projectCategoryInputArgs: $projectCategoryInputArgs) {\n      id\n      name\n      sort\n      count\n      subcategories {\n        id\n        name\n        sort\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Projects(\n    $paginationInputArgs: PaginationInputArgs\n    $projectInputArgs: ProjectInputArgs\n  ) {\n    data: queryProjectPage(\n      paginationInputArgs: $paginationInputArgs\n      projectInputArgs: $projectInputArgs\n    ) {\n      records {\n        id\n        name\n        logo\n        describe\n        website\n        twitter\n        discord\n        telegram\n        github\n        categories {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Projects(\n    $paginationInputArgs: PaginationInputArgs\n    $projectInputArgs: ProjectInputArgs\n  ) {\n    data: queryProjectPage(\n      paginationInputArgs: $paginationInputArgs\n      projectInputArgs: $projectInputArgs\n    ) {\n      records {\n        id\n        name\n        logo\n        describe\n        website\n        twitter\n        discord\n        telegram\n        github\n        categories {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query queryProjectCategoryList($projectCategoryInputArgs: ProjectCategoryInputArgs) {\n    queryProjectCategoryList(projectCategoryInputArgs: $projectCategoryInputArgs) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query queryProjectCategoryList($projectCategoryInputArgs: ProjectCategoryInputArgs) {\n    queryProjectCategoryList(projectCategoryInputArgs: $projectCategoryInputArgs) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query queryProjectPage(\n    $paginationInputArgs: PaginationInputArgs\n    $projectInputArgs: ProjectInputArgs\n  ) {\n    queryProjectPage(\n      paginationInputArgs: $paginationInputArgs\n      projectInputArgs: $projectInputArgs\n    ) {\n      records {\n        id\n        name\n        logo\n        website\n        twitter\n        discord\n        categories {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query queryProjectPage(\n    $paginationInputArgs: PaginationInputArgs\n    $projectInputArgs: ProjectInputArgs\n  ) {\n    queryProjectPage(\n      paginationInputArgs: $paginationInputArgs\n      projectInputArgs: $projectInputArgs\n    ) {\n      records {\n        id\n        name\n        logo\n        website\n        twitter\n        discord\n        categories {\n          id\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;