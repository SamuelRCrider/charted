
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Industry
 * 
 */
export type Industry = $Result.DefaultSelection<Prisma.$IndustryPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Acquisition
 * 
 */
export type Acquisition = $Result.DefaultSelection<Prisma.$AcquisitionPayload>
/**
 * Model Tool
 * 
 */
export type Tool = $Result.DefaultSelection<Prisma.$ToolPayload>
/**
 * Model FundingRound
 * 
 */
export type FundingRound = $Result.DefaultSelection<Prisma.$FundingRoundPayload>
/**
 * Model UseCaseCard
 * 
 */
export type UseCaseCard = $Result.DefaultSelection<Prisma.$UseCaseCardPayload>
/**
 * Model CompanyTag
 * 
 */
export type CompanyTag = $Result.DefaultSelection<Prisma.$CompanyTagPayload>
/**
 * Model ToolTag
 * 
 */
export type ToolTag = $Result.DefaultSelection<Prisma.$ToolTagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ModelType: {
  LLM: 'LLM',
  CV: 'CV',
  RL: 'RL',
  ClassicalML: 'ClassicalML',
  MultiModal: 'MultiModal',
  Other: 'Other'
};

export type ModelType = (typeof ModelType)[keyof typeof ModelType]

}

export type ModelType = $Enums.ModelType

export const ModelType: typeof $Enums.ModelType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Industries
 * const industries = await prisma.industry.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Industries
   * const industries = await prisma.industry.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.industry`: Exposes CRUD operations for the **Industry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Industries
    * const industries = await prisma.industry.findMany()
    * ```
    */
  get industry(): Prisma.IndustryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.acquisition`: Exposes CRUD operations for the **Acquisition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Acquisitions
    * const acquisitions = await prisma.acquisition.findMany()
    * ```
    */
  get acquisition(): Prisma.AcquisitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tool`: Exposes CRUD operations for the **Tool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tools
    * const tools = await prisma.tool.findMany()
    * ```
    */
  get tool(): Prisma.ToolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fundingRound`: Exposes CRUD operations for the **FundingRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FundingRounds
    * const fundingRounds = await prisma.fundingRound.findMany()
    * ```
    */
  get fundingRound(): Prisma.FundingRoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.useCaseCard`: Exposes CRUD operations for the **UseCaseCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UseCaseCards
    * const useCaseCards = await prisma.useCaseCard.findMany()
    * ```
    */
  get useCaseCard(): Prisma.UseCaseCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyTag`: Exposes CRUD operations for the **CompanyTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyTags
    * const companyTags = await prisma.companyTag.findMany()
    * ```
    */
  get companyTag(): Prisma.CompanyTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toolTag`: Exposes CRUD operations for the **ToolTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToolTags
    * const toolTags = await prisma.toolTag.findMany()
    * ```
    */
  get toolTag(): Prisma.ToolTagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Industry: 'Industry',
    Company: 'Company',
    Acquisition: 'Acquisition',
    Tool: 'Tool',
    FundingRound: 'FundingRound',
    UseCaseCard: 'UseCaseCard',
    CompanyTag: 'CompanyTag',
    ToolTag: 'ToolTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "industry" | "company" | "acquisition" | "tool" | "fundingRound" | "useCaseCard" | "companyTag" | "toolTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Industry: {
        payload: Prisma.$IndustryPayload<ExtArgs>
        fields: Prisma.IndustryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndustryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndustryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          findFirst: {
            args: Prisma.IndustryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndustryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          findMany: {
            args: Prisma.IndustryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>[]
          }
          create: {
            args: Prisma.IndustryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          createMany: {
            args: Prisma.IndustryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndustryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>[]
          }
          delete: {
            args: Prisma.IndustryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          update: {
            args: Prisma.IndustryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          deleteMany: {
            args: Prisma.IndustryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndustryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndustryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>[]
          }
          upsert: {
            args: Prisma.IndustryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          aggregate: {
            args: Prisma.IndustryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndustry>
          }
          groupBy: {
            args: Prisma.IndustryGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndustryGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndustryCountArgs<ExtArgs>
            result: $Utils.Optional<IndustryCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Acquisition: {
        payload: Prisma.$AcquisitionPayload<ExtArgs>
        fields: Prisma.AcquisitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcquisitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcquisitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcquisitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcquisitionPayload>
          }
          findFirst: {
            args: Prisma.AcquisitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcquisitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcquisitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcquisitionPayload>
          }
          findMany: {
            args: Prisma.AcquisitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcquisitionPayload>[]
          }
          create: {
            args: Prisma.AcquisitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcquisitionPayload>
          }
          createMany: {
            args: Prisma.AcquisitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcquisitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcquisitionPayload>[]
          }
          delete: {
            args: Prisma.AcquisitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcquisitionPayload>
          }
          update: {
            args: Prisma.AcquisitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcquisitionPayload>
          }
          deleteMany: {
            args: Prisma.AcquisitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcquisitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcquisitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcquisitionPayload>[]
          }
          upsert: {
            args: Prisma.AcquisitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcquisitionPayload>
          }
          aggregate: {
            args: Prisma.AcquisitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcquisition>
          }
          groupBy: {
            args: Prisma.AcquisitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcquisitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcquisitionCountArgs<ExtArgs>
            result: $Utils.Optional<AcquisitionCountAggregateOutputType> | number
          }
        }
      }
      Tool: {
        payload: Prisma.$ToolPayload<ExtArgs>
        fields: Prisma.ToolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          findFirst: {
            args: Prisma.ToolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          findMany: {
            args: Prisma.ToolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          create: {
            args: Prisma.ToolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          createMany: {
            args: Prisma.ToolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          delete: {
            args: Prisma.ToolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          update: {
            args: Prisma.ToolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          deleteMany: {
            args: Prisma.ToolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          upsert: {
            args: Prisma.ToolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          aggregate: {
            args: Prisma.ToolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTool>
          }
          groupBy: {
            args: Prisma.ToolGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolCountArgs<ExtArgs>
            result: $Utils.Optional<ToolCountAggregateOutputType> | number
          }
        }
      }
      FundingRound: {
        payload: Prisma.$FundingRoundPayload<ExtArgs>
        fields: Prisma.FundingRoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundingRoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundingRoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          findFirst: {
            args: Prisma.FundingRoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundingRoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          findMany: {
            args: Prisma.FundingRoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>[]
          }
          create: {
            args: Prisma.FundingRoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          createMany: {
            args: Prisma.FundingRoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FundingRoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>[]
          }
          delete: {
            args: Prisma.FundingRoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          update: {
            args: Prisma.FundingRoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          deleteMany: {
            args: Prisma.FundingRoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundingRoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FundingRoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>[]
          }
          upsert: {
            args: Prisma.FundingRoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          aggregate: {
            args: Prisma.FundingRoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFundingRound>
          }
          groupBy: {
            args: Prisma.FundingRoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundingRoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundingRoundCountArgs<ExtArgs>
            result: $Utils.Optional<FundingRoundCountAggregateOutputType> | number
          }
        }
      }
      UseCaseCard: {
        payload: Prisma.$UseCaseCardPayload<ExtArgs>
        fields: Prisma.UseCaseCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UseCaseCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UseCaseCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UseCaseCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UseCaseCardPayload>
          }
          findFirst: {
            args: Prisma.UseCaseCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UseCaseCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UseCaseCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UseCaseCardPayload>
          }
          findMany: {
            args: Prisma.UseCaseCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UseCaseCardPayload>[]
          }
          create: {
            args: Prisma.UseCaseCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UseCaseCardPayload>
          }
          createMany: {
            args: Prisma.UseCaseCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UseCaseCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UseCaseCardPayload>[]
          }
          delete: {
            args: Prisma.UseCaseCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UseCaseCardPayload>
          }
          update: {
            args: Prisma.UseCaseCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UseCaseCardPayload>
          }
          deleteMany: {
            args: Prisma.UseCaseCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UseCaseCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UseCaseCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UseCaseCardPayload>[]
          }
          upsert: {
            args: Prisma.UseCaseCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UseCaseCardPayload>
          }
          aggregate: {
            args: Prisma.UseCaseCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUseCaseCard>
          }
          groupBy: {
            args: Prisma.UseCaseCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<UseCaseCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.UseCaseCardCountArgs<ExtArgs>
            result: $Utils.Optional<UseCaseCardCountAggregateOutputType> | number
          }
        }
      }
      CompanyTag: {
        payload: Prisma.$CompanyTagPayload<ExtArgs>
        fields: Prisma.CompanyTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          findFirst: {
            args: Prisma.CompanyTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          findMany: {
            args: Prisma.CompanyTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>[]
          }
          create: {
            args: Prisma.CompanyTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          createMany: {
            args: Prisma.CompanyTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>[]
          }
          delete: {
            args: Prisma.CompanyTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          update: {
            args: Prisma.CompanyTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          deleteMany: {
            args: Prisma.CompanyTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>[]
          }
          upsert: {
            args: Prisma.CompanyTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          aggregate: {
            args: Prisma.CompanyTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyTag>
          }
          groupBy: {
            args: Prisma.CompanyTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyTagCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyTagCountAggregateOutputType> | number
          }
        }
      }
      ToolTag: {
        payload: Prisma.$ToolTagPayload<ExtArgs>
        fields: Prisma.ToolTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          findFirst: {
            args: Prisma.ToolTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          findMany: {
            args: Prisma.ToolTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>[]
          }
          create: {
            args: Prisma.ToolTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          createMany: {
            args: Prisma.ToolTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>[]
          }
          delete: {
            args: Prisma.ToolTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          update: {
            args: Prisma.ToolTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          deleteMany: {
            args: Prisma.ToolTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>[]
          }
          upsert: {
            args: Prisma.ToolTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolTagPayload>
          }
          aggregate: {
            args: Prisma.ToolTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToolTag>
          }
          groupBy: {
            args: Prisma.ToolTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolTagCountArgs<ExtArgs>
            result: $Utils.Optional<ToolTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    industry?: IndustryOmit
    company?: CompanyOmit
    acquisition?: AcquisitionOmit
    tool?: ToolOmit
    fundingRound?: FundingRoundOmit
    useCaseCard?: UseCaseCardOmit
    companyTag?: CompanyTagOmit
    toolTag?: ToolTagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type IndustryCountOutputType
   */

  export type IndustryCountOutputType = {
    companies: number
    tools: number
    useCases: number
  }

  export type IndustryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | IndustryCountOutputTypeCountCompaniesArgs
    tools?: boolean | IndustryCountOutputTypeCountToolsArgs
    useCases?: boolean | IndustryCountOutputTypeCountUseCasesArgs
  }

  // Custom InputTypes
  /**
   * IndustryCountOutputType without action
   */
  export type IndustryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCountOutputType
     */
    select?: IndustryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndustryCountOutputType without action
   */
  export type IndustryCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }

  /**
   * IndustryCountOutputType without action
   */
  export type IndustryCountOutputTypeCountToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
  }

  /**
   * IndustryCountOutputType without action
   */
  export type IndustryCountOutputTypeCountUseCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UseCaseCardWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    tools: number
    fundingRounds: number
    acquisitions: number
    useCaseCards: number
    tags: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | CompanyCountOutputTypeCountToolsArgs
    fundingRounds?: boolean | CompanyCountOutputTypeCountFundingRoundsArgs
    acquisitions?: boolean | CompanyCountOutputTypeCountAcquisitionsArgs
    useCaseCards?: boolean | CompanyCountOutputTypeCountUseCaseCardsArgs
    tags?: boolean | CompanyCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFundingRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundingRoundWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountAcquisitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcquisitionWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUseCaseCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UseCaseCardWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyTagWhereInput
  }


  /**
   * Count Type ToolCountOutputType
   */

  export type ToolCountOutputType = {
    tags: number
  }

  export type ToolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | ToolCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCountOutputType
     */
    select?: ToolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Industry
   */

  export type AggregateIndustry = {
    _count: IndustryCountAggregateOutputType | null
    _avg: IndustryAvgAggregateOutputType | null
    _sum: IndustrySumAggregateOutputType | null
    _min: IndustryMinAggregateOutputType | null
    _max: IndustryMaxAggregateOutputType | null
  }

  export type IndustryAvgAggregateOutputType = {
    id: number | null
  }

  export type IndustrySumAggregateOutputType = {
    id: number | null
  }

  export type IndustryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndustryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndustryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IndustryAvgAggregateInputType = {
    id?: true
  }

  export type IndustrySumAggregateInputType = {
    id?: true
  }

  export type IndustryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndustryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndustryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IndustryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Industry to aggregate.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Industries
    **/
    _count?: true | IndustryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndustryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndustrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndustryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndustryMaxAggregateInputType
  }

  export type GetIndustryAggregateType<T extends IndustryAggregateArgs> = {
        [P in keyof T & keyof AggregateIndustry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndustry[P]>
      : GetScalarType<T[P], AggregateIndustry[P]>
  }




  export type IndustryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndustryWhereInput
    orderBy?: IndustryOrderByWithAggregationInput | IndustryOrderByWithAggregationInput[]
    by: IndustryScalarFieldEnum[] | IndustryScalarFieldEnum
    having?: IndustryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndustryCountAggregateInputType | true
    _avg?: IndustryAvgAggregateInputType
    _sum?: IndustrySumAggregateInputType
    _min?: IndustryMinAggregateInputType
    _max?: IndustryMaxAggregateInputType
  }

  export type IndustryGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: IndustryCountAggregateOutputType | null
    _avg: IndustryAvgAggregateOutputType | null
    _sum: IndustrySumAggregateOutputType | null
    _min: IndustryMinAggregateOutputType | null
    _max: IndustryMaxAggregateOutputType | null
  }

  type GetIndustryGroupByPayload<T extends IndustryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndustryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndustryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndustryGroupByOutputType[P]>
            : GetScalarType<T[P], IndustryGroupByOutputType[P]>
        }
      >
    >


  export type IndustrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companies?: boolean | Industry$companiesArgs<ExtArgs>
    tools?: boolean | Industry$toolsArgs<ExtArgs>
    useCases?: boolean | Industry$useCasesArgs<ExtArgs>
    _count?: boolean | IndustryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IndustryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["industry"]>
  export type IndustryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | Industry$companiesArgs<ExtArgs>
    tools?: boolean | Industry$toolsArgs<ExtArgs>
    useCases?: boolean | Industry$useCasesArgs<ExtArgs>
    _count?: boolean | IndustryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndustryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IndustryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IndustryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Industry"
    objects: {
      companies: Prisma.$CompanyPayload<ExtArgs>[]
      tools: Prisma.$ToolPayload<ExtArgs>[]
      useCases: Prisma.$UseCaseCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["industry"]>
    composites: {}
  }

  type IndustryGetPayload<S extends boolean | null | undefined | IndustryDefaultArgs> = $Result.GetResult<Prisma.$IndustryPayload, S>

  type IndustryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndustryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndustryCountAggregateInputType | true
    }

  export interface IndustryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Industry'], meta: { name: 'Industry' } }
    /**
     * Find zero or one Industry that matches the filter.
     * @param {IndustryFindUniqueArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndustryFindUniqueArgs>(args: SelectSubset<T, IndustryFindUniqueArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Industry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndustryFindUniqueOrThrowArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndustryFindUniqueOrThrowArgs>(args: SelectSubset<T, IndustryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Industry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryFindFirstArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndustryFindFirstArgs>(args?: SelectSubset<T, IndustryFindFirstArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Industry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryFindFirstOrThrowArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndustryFindFirstOrThrowArgs>(args?: SelectSubset<T, IndustryFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Industries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Industries
     * const industries = await prisma.industry.findMany()
     * 
     * // Get first 10 Industries
     * const industries = await prisma.industry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const industryWithIdOnly = await prisma.industry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndustryFindManyArgs>(args?: SelectSubset<T, IndustryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Industry.
     * @param {IndustryCreateArgs} args - Arguments to create a Industry.
     * @example
     * // Create one Industry
     * const Industry = await prisma.industry.create({
     *   data: {
     *     // ... data to create a Industry
     *   }
     * })
     * 
     */
    create<T extends IndustryCreateArgs>(args: SelectSubset<T, IndustryCreateArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Industries.
     * @param {IndustryCreateManyArgs} args - Arguments to create many Industries.
     * @example
     * // Create many Industries
     * const industry = await prisma.industry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndustryCreateManyArgs>(args?: SelectSubset<T, IndustryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Industries and returns the data saved in the database.
     * @param {IndustryCreateManyAndReturnArgs} args - Arguments to create many Industries.
     * @example
     * // Create many Industries
     * const industry = await prisma.industry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Industries and only return the `id`
     * const industryWithIdOnly = await prisma.industry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndustryCreateManyAndReturnArgs>(args?: SelectSubset<T, IndustryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Industry.
     * @param {IndustryDeleteArgs} args - Arguments to delete one Industry.
     * @example
     * // Delete one Industry
     * const Industry = await prisma.industry.delete({
     *   where: {
     *     // ... filter to delete one Industry
     *   }
     * })
     * 
     */
    delete<T extends IndustryDeleteArgs>(args: SelectSubset<T, IndustryDeleteArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Industry.
     * @param {IndustryUpdateArgs} args - Arguments to update one Industry.
     * @example
     * // Update one Industry
     * const industry = await prisma.industry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndustryUpdateArgs>(args: SelectSubset<T, IndustryUpdateArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Industries.
     * @param {IndustryDeleteManyArgs} args - Arguments to filter Industries to delete.
     * @example
     * // Delete a few Industries
     * const { count } = await prisma.industry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndustryDeleteManyArgs>(args?: SelectSubset<T, IndustryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Industries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Industries
     * const industry = await prisma.industry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndustryUpdateManyArgs>(args: SelectSubset<T, IndustryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Industries and returns the data updated in the database.
     * @param {IndustryUpdateManyAndReturnArgs} args - Arguments to update many Industries.
     * @example
     * // Update many Industries
     * const industry = await prisma.industry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Industries and only return the `id`
     * const industryWithIdOnly = await prisma.industry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndustryUpdateManyAndReturnArgs>(args: SelectSubset<T, IndustryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Industry.
     * @param {IndustryUpsertArgs} args - Arguments to update or create a Industry.
     * @example
     * // Update or create a Industry
     * const industry = await prisma.industry.upsert({
     *   create: {
     *     // ... data to create a Industry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Industry we want to update
     *   }
     * })
     */
    upsert<T extends IndustryUpsertArgs>(args: SelectSubset<T, IndustryUpsertArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Industries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryCountArgs} args - Arguments to filter Industries to count.
     * @example
     * // Count the number of Industries
     * const count = await prisma.industry.count({
     *   where: {
     *     // ... the filter for the Industries we want to count
     *   }
     * })
    **/
    count<T extends IndustryCountArgs>(
      args?: Subset<T, IndustryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndustryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Industry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndustryAggregateArgs>(args: Subset<T, IndustryAggregateArgs>): Prisma.PrismaPromise<GetIndustryAggregateType<T>>

    /**
     * Group by Industry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndustryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndustryGroupByArgs['orderBy'] }
        : { orderBy?: IndustryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndustryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndustryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Industry model
   */
  readonly fields: IndustryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Industry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndustryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companies<T extends Industry$companiesArgs<ExtArgs> = {}>(args?: Subset<T, Industry$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tools<T extends Industry$toolsArgs<ExtArgs> = {}>(args?: Subset<T, Industry$toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    useCases<T extends Industry$useCasesArgs<ExtArgs> = {}>(args?: Subset<T, Industry$useCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Industry model
   */
  interface IndustryFieldRefs {
    readonly id: FieldRef<"Industry", 'Int'>
    readonly name: FieldRef<"Industry", 'String'>
    readonly slug: FieldRef<"Industry", 'String'>
    readonly description: FieldRef<"Industry", 'String'>
    readonly createdAt: FieldRef<"Industry", 'DateTime'>
    readonly updatedAt: FieldRef<"Industry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Industry findUnique
   */
  export type IndustryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry findUniqueOrThrow
   */
  export type IndustryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry findFirst
   */
  export type IndustryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Industries.
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Industries.
     */
    distinct?: IndustryScalarFieldEnum | IndustryScalarFieldEnum[]
  }

  /**
   * Industry findFirstOrThrow
   */
  export type IndustryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Industries.
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Industries.
     */
    distinct?: IndustryScalarFieldEnum | IndustryScalarFieldEnum[]
  }

  /**
   * Industry findMany
   */
  export type IndustryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industries to fetch.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Industries.
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    distinct?: IndustryScalarFieldEnum | IndustryScalarFieldEnum[]
  }

  /**
   * Industry create
   */
  export type IndustryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * The data needed to create a Industry.
     */
    data: XOR<IndustryCreateInput, IndustryUncheckedCreateInput>
  }

  /**
   * Industry createMany
   */
  export type IndustryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Industries.
     */
    data: IndustryCreateManyInput | IndustryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Industry createManyAndReturn
   */
  export type IndustryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * The data used to create many Industries.
     */
    data: IndustryCreateManyInput | IndustryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Industry update
   */
  export type IndustryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * The data needed to update a Industry.
     */
    data: XOR<IndustryUpdateInput, IndustryUncheckedUpdateInput>
    /**
     * Choose, which Industry to update.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry updateMany
   */
  export type IndustryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Industries.
     */
    data: XOR<IndustryUpdateManyMutationInput, IndustryUncheckedUpdateManyInput>
    /**
     * Filter which Industries to update
     */
    where?: IndustryWhereInput
    /**
     * Limit how many Industries to update.
     */
    limit?: number
  }

  /**
   * Industry updateManyAndReturn
   */
  export type IndustryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * The data used to update Industries.
     */
    data: XOR<IndustryUpdateManyMutationInput, IndustryUncheckedUpdateManyInput>
    /**
     * Filter which Industries to update
     */
    where?: IndustryWhereInput
    /**
     * Limit how many Industries to update.
     */
    limit?: number
  }

  /**
   * Industry upsert
   */
  export type IndustryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * The filter to search for the Industry to update in case it exists.
     */
    where: IndustryWhereUniqueInput
    /**
     * In case the Industry found by the `where` argument doesn't exist, create a new Industry with this data.
     */
    create: XOR<IndustryCreateInput, IndustryUncheckedCreateInput>
    /**
     * In case the Industry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndustryUpdateInput, IndustryUncheckedUpdateInput>
  }

  /**
   * Industry delete
   */
  export type IndustryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter which Industry to delete.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry deleteMany
   */
  export type IndustryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Industries to delete
     */
    where?: IndustryWhereInput
    /**
     * Limit how many Industries to delete.
     */
    limit?: number
  }

  /**
   * Industry.companies
   */
  export type Industry$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Industry.tools
   */
  export type Industry$toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    cursor?: ToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Industry.useCases
   */
  export type Industry$useCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
    where?: UseCaseCardWhereInput
    orderBy?: UseCaseCardOrderByWithRelationInput | UseCaseCardOrderByWithRelationInput[]
    cursor?: UseCaseCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UseCaseCardScalarFieldEnum | UseCaseCardScalarFieldEnum[]
  }

  /**
   * Industry without action
   */
  export type IndustryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    foundedYear: number | null
    totalFundingUsd: number | null
    industryId: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
    foundedYear: number | null
    totalFundingUsd: number | null
    industryId: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    websiteUrl: string | null
    foundedYear: number | null
    totalFundingUsd: number | null
    approachSummary: string | null
    modelType: $Enums.ModelType | null
    industryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    websiteUrl: string | null
    foundedYear: number | null
    totalFundingUsd: number | null
    approachSummary: string | null
    modelType: $Enums.ModelType | null
    industryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    websiteUrl: number
    foundedYear: number
    totalFundingUsd: number
    approachSummary: number
    modelType: number
    industryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    foundedYear?: true
    totalFundingUsd?: true
    industryId?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    foundedYear?: true
    totalFundingUsd?: true
    industryId?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    websiteUrl?: true
    foundedYear?: true
    totalFundingUsd?: true
    approachSummary?: true
    modelType?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    websiteUrl?: true
    foundedYear?: true
    totalFundingUsd?: true
    approachSummary?: true
    modelType?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    websiteUrl?: true
    foundedYear?: true
    totalFundingUsd?: true
    approachSummary?: true
    modelType?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear: number | null
    totalFundingUsd: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    industryId: number
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    websiteUrl?: boolean
    foundedYear?: boolean
    totalFundingUsd?: boolean
    approachSummary?: boolean
    modelType?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
    tools?: boolean | Company$toolsArgs<ExtArgs>
    fundingRounds?: boolean | Company$fundingRoundsArgs<ExtArgs>
    acquisitions?: boolean | Company$acquisitionsArgs<ExtArgs>
    useCaseCards?: boolean | Company$useCaseCardsArgs<ExtArgs>
    acquiredBy?: boolean | Company$acquiredByArgs<ExtArgs>
    tags?: boolean | Company$tagsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    websiteUrl?: boolean
    foundedYear?: boolean
    totalFundingUsd?: boolean
    approachSummary?: boolean
    modelType?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    websiteUrl?: boolean
    foundedYear?: boolean
    totalFundingUsd?: boolean
    approachSummary?: boolean
    modelType?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    websiteUrl?: boolean
    foundedYear?: boolean
    totalFundingUsd?: boolean
    approachSummary?: boolean
    modelType?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "websiteUrl" | "foundedYear" | "totalFundingUsd" | "approachSummary" | "modelType" | "industryId" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
    tools?: boolean | Company$toolsArgs<ExtArgs>
    fundingRounds?: boolean | Company$fundingRoundsArgs<ExtArgs>
    acquisitions?: boolean | Company$acquisitionsArgs<ExtArgs>
    useCaseCards?: boolean | Company$useCaseCardsArgs<ExtArgs>
    acquiredBy?: boolean | Company$acquiredByArgs<ExtArgs>
    tags?: boolean | Company$tagsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      industry: Prisma.$IndustryPayload<ExtArgs>
      tools: Prisma.$ToolPayload<ExtArgs>[]
      fundingRounds: Prisma.$FundingRoundPayload<ExtArgs>[]
      acquisitions: Prisma.$AcquisitionPayload<ExtArgs>[]
      useCaseCards: Prisma.$UseCaseCardPayload<ExtArgs>[]
      acquiredBy: Prisma.$AcquisitionPayload<ExtArgs> | null
      tags: Prisma.$CompanyTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string
      websiteUrl: string
      foundedYear: number | null
      totalFundingUsd: number | null
      approachSummary: string
      modelType: $Enums.ModelType
      industryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    industry<T extends IndustryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IndustryDefaultArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tools<T extends Company$toolsArgs<ExtArgs> = {}>(args?: Subset<T, Company$toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fundingRounds<T extends Company$fundingRoundsArgs<ExtArgs> = {}>(args?: Subset<T, Company$fundingRoundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acquisitions<T extends Company$acquisitionsArgs<ExtArgs> = {}>(args?: Subset<T, Company$acquisitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    useCaseCards<T extends Company$useCaseCardsArgs<ExtArgs> = {}>(args?: Subset<T, Company$useCaseCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acquiredBy<T extends Company$acquiredByArgs<ExtArgs> = {}>(args?: Subset<T, Company$acquiredByArgs<ExtArgs>>): Prisma__AcquisitionClient<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tags<T extends Company$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Company$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly slug: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly websiteUrl: FieldRef<"Company", 'String'>
    readonly foundedYear: FieldRef<"Company", 'Int'>
    readonly totalFundingUsd: FieldRef<"Company", 'Int'>
    readonly approachSummary: FieldRef<"Company", 'String'>
    readonly modelType: FieldRef<"Company", 'ModelType'>
    readonly industryId: FieldRef<"Company", 'Int'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.tools
   */
  export type Company$toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    cursor?: ToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Company.fundingRounds
   */
  export type Company$fundingRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    where?: FundingRoundWhereInput
    orderBy?: FundingRoundOrderByWithRelationInput | FundingRoundOrderByWithRelationInput[]
    cursor?: FundingRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FundingRoundScalarFieldEnum | FundingRoundScalarFieldEnum[]
  }

  /**
   * Company.acquisitions
   */
  export type Company$acquisitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
    where?: AcquisitionWhereInput
    orderBy?: AcquisitionOrderByWithRelationInput | AcquisitionOrderByWithRelationInput[]
    cursor?: AcquisitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcquisitionScalarFieldEnum | AcquisitionScalarFieldEnum[]
  }

  /**
   * Company.useCaseCards
   */
  export type Company$useCaseCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
    where?: UseCaseCardWhereInput
    orderBy?: UseCaseCardOrderByWithRelationInput | UseCaseCardOrderByWithRelationInput[]
    cursor?: UseCaseCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UseCaseCardScalarFieldEnum | UseCaseCardScalarFieldEnum[]
  }

  /**
   * Company.acquiredBy
   */
  export type Company$acquiredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
    where?: AcquisitionWhereInput
  }

  /**
   * Company.tags
   */
  export type Company$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    where?: CompanyTagWhereInput
    orderBy?: CompanyTagOrderByWithRelationInput | CompanyTagOrderByWithRelationInput[]
    cursor?: CompanyTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyTagScalarFieldEnum | CompanyTagScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Acquisition
   */

  export type AggregateAcquisition = {
    _count: AcquisitionCountAggregateOutputType | null
    _avg: AcquisitionAvgAggregateOutputType | null
    _sum: AcquisitionSumAggregateOutputType | null
    _min: AcquisitionMinAggregateOutputType | null
    _max: AcquisitionMaxAggregateOutputType | null
  }

  export type AcquisitionAvgAggregateOutputType = {
    id: number | null
    acquiringCompanyId: number | null
    acquiredCompanyId: number | null
    amountUsd: number | null
  }

  export type AcquisitionSumAggregateOutputType = {
    id: number | null
    acquiringCompanyId: number | null
    acquiredCompanyId: number | null
    amountUsd: number | null
  }

  export type AcquisitionMinAggregateOutputType = {
    id: number | null
    acquiringCompanyId: number | null
    acquiredCompanyId: number | null
    amountUsd: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcquisitionMaxAggregateOutputType = {
    id: number | null
    acquiringCompanyId: number | null
    acquiredCompanyId: number | null
    amountUsd: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcquisitionCountAggregateOutputType = {
    id: number
    acquiringCompanyId: number
    acquiredCompanyId: number
    amountUsd: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AcquisitionAvgAggregateInputType = {
    id?: true
    acquiringCompanyId?: true
    acquiredCompanyId?: true
    amountUsd?: true
  }

  export type AcquisitionSumAggregateInputType = {
    id?: true
    acquiringCompanyId?: true
    acquiredCompanyId?: true
    amountUsd?: true
  }

  export type AcquisitionMinAggregateInputType = {
    id?: true
    acquiringCompanyId?: true
    acquiredCompanyId?: true
    amountUsd?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcquisitionMaxAggregateInputType = {
    id?: true
    acquiringCompanyId?: true
    acquiredCompanyId?: true
    amountUsd?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcquisitionCountAggregateInputType = {
    id?: true
    acquiringCompanyId?: true
    acquiredCompanyId?: true
    amountUsd?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AcquisitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acquisition to aggregate.
     */
    where?: AcquisitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acquisitions to fetch.
     */
    orderBy?: AcquisitionOrderByWithRelationInput | AcquisitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcquisitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acquisitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acquisitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Acquisitions
    **/
    _count?: true | AcquisitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcquisitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcquisitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcquisitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcquisitionMaxAggregateInputType
  }

  export type GetAcquisitionAggregateType<T extends AcquisitionAggregateArgs> = {
        [P in keyof T & keyof AggregateAcquisition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcquisition[P]>
      : GetScalarType<T[P], AggregateAcquisition[P]>
  }




  export type AcquisitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcquisitionWhereInput
    orderBy?: AcquisitionOrderByWithAggregationInput | AcquisitionOrderByWithAggregationInput[]
    by: AcquisitionScalarFieldEnum[] | AcquisitionScalarFieldEnum
    having?: AcquisitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcquisitionCountAggregateInputType | true
    _avg?: AcquisitionAvgAggregateInputType
    _sum?: AcquisitionSumAggregateInputType
    _min?: AcquisitionMinAggregateInputType
    _max?: AcquisitionMaxAggregateInputType
  }

  export type AcquisitionGroupByOutputType = {
    id: number
    acquiringCompanyId: number
    acquiredCompanyId: number
    amountUsd: number | null
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: AcquisitionCountAggregateOutputType | null
    _avg: AcquisitionAvgAggregateOutputType | null
    _sum: AcquisitionSumAggregateOutputType | null
    _min: AcquisitionMinAggregateOutputType | null
    _max: AcquisitionMaxAggregateOutputType | null
  }

  type GetAcquisitionGroupByPayload<T extends AcquisitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcquisitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcquisitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcquisitionGroupByOutputType[P]>
            : GetScalarType<T[P], AcquisitionGroupByOutputType[P]>
        }
      >
    >


  export type AcquisitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    acquiringCompanyId?: boolean
    acquiredCompanyId?: boolean
    amountUsd?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    acquiringCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    acquiredCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acquisition"]>

  export type AcquisitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    acquiringCompanyId?: boolean
    acquiredCompanyId?: boolean
    amountUsd?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    acquiringCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    acquiredCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acquisition"]>

  export type AcquisitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    acquiringCompanyId?: boolean
    acquiredCompanyId?: boolean
    amountUsd?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    acquiringCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    acquiredCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acquisition"]>

  export type AcquisitionSelectScalar = {
    id?: boolean
    acquiringCompanyId?: boolean
    acquiredCompanyId?: boolean
    amountUsd?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AcquisitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "acquiringCompanyId" | "acquiredCompanyId" | "amountUsd" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["acquisition"]>
  export type AcquisitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acquiringCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    acquiredCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type AcquisitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acquiringCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    acquiredCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type AcquisitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acquiringCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    acquiredCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $AcquisitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Acquisition"
    objects: {
      acquiringCompany: Prisma.$CompanyPayload<ExtArgs>
      acquiredCompany: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      acquiringCompanyId: number
      acquiredCompanyId: number
      amountUsd: number | null
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["acquisition"]>
    composites: {}
  }

  type AcquisitionGetPayload<S extends boolean | null | undefined | AcquisitionDefaultArgs> = $Result.GetResult<Prisma.$AcquisitionPayload, S>

  type AcquisitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcquisitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcquisitionCountAggregateInputType | true
    }

  export interface AcquisitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Acquisition'], meta: { name: 'Acquisition' } }
    /**
     * Find zero or one Acquisition that matches the filter.
     * @param {AcquisitionFindUniqueArgs} args - Arguments to find a Acquisition
     * @example
     * // Get one Acquisition
     * const acquisition = await prisma.acquisition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcquisitionFindUniqueArgs>(args: SelectSubset<T, AcquisitionFindUniqueArgs<ExtArgs>>): Prisma__AcquisitionClient<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Acquisition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcquisitionFindUniqueOrThrowArgs} args - Arguments to find a Acquisition
     * @example
     * // Get one Acquisition
     * const acquisition = await prisma.acquisition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcquisitionFindUniqueOrThrowArgs>(args: SelectSubset<T, AcquisitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcquisitionClient<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acquisition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionFindFirstArgs} args - Arguments to find a Acquisition
     * @example
     * // Get one Acquisition
     * const acquisition = await prisma.acquisition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcquisitionFindFirstArgs>(args?: SelectSubset<T, AcquisitionFindFirstArgs<ExtArgs>>): Prisma__AcquisitionClient<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acquisition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionFindFirstOrThrowArgs} args - Arguments to find a Acquisition
     * @example
     * // Get one Acquisition
     * const acquisition = await prisma.acquisition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcquisitionFindFirstOrThrowArgs>(args?: SelectSubset<T, AcquisitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcquisitionClient<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Acquisitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Acquisitions
     * const acquisitions = await prisma.acquisition.findMany()
     * 
     * // Get first 10 Acquisitions
     * const acquisitions = await prisma.acquisition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acquisitionWithIdOnly = await prisma.acquisition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcquisitionFindManyArgs>(args?: SelectSubset<T, AcquisitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Acquisition.
     * @param {AcquisitionCreateArgs} args - Arguments to create a Acquisition.
     * @example
     * // Create one Acquisition
     * const Acquisition = await prisma.acquisition.create({
     *   data: {
     *     // ... data to create a Acquisition
     *   }
     * })
     * 
     */
    create<T extends AcquisitionCreateArgs>(args: SelectSubset<T, AcquisitionCreateArgs<ExtArgs>>): Prisma__AcquisitionClient<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Acquisitions.
     * @param {AcquisitionCreateManyArgs} args - Arguments to create many Acquisitions.
     * @example
     * // Create many Acquisitions
     * const acquisition = await prisma.acquisition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcquisitionCreateManyArgs>(args?: SelectSubset<T, AcquisitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Acquisitions and returns the data saved in the database.
     * @param {AcquisitionCreateManyAndReturnArgs} args - Arguments to create many Acquisitions.
     * @example
     * // Create many Acquisitions
     * const acquisition = await prisma.acquisition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Acquisitions and only return the `id`
     * const acquisitionWithIdOnly = await prisma.acquisition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcquisitionCreateManyAndReturnArgs>(args?: SelectSubset<T, AcquisitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Acquisition.
     * @param {AcquisitionDeleteArgs} args - Arguments to delete one Acquisition.
     * @example
     * // Delete one Acquisition
     * const Acquisition = await prisma.acquisition.delete({
     *   where: {
     *     // ... filter to delete one Acquisition
     *   }
     * })
     * 
     */
    delete<T extends AcquisitionDeleteArgs>(args: SelectSubset<T, AcquisitionDeleteArgs<ExtArgs>>): Prisma__AcquisitionClient<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Acquisition.
     * @param {AcquisitionUpdateArgs} args - Arguments to update one Acquisition.
     * @example
     * // Update one Acquisition
     * const acquisition = await prisma.acquisition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcquisitionUpdateArgs>(args: SelectSubset<T, AcquisitionUpdateArgs<ExtArgs>>): Prisma__AcquisitionClient<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Acquisitions.
     * @param {AcquisitionDeleteManyArgs} args - Arguments to filter Acquisitions to delete.
     * @example
     * // Delete a few Acquisitions
     * const { count } = await prisma.acquisition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcquisitionDeleteManyArgs>(args?: SelectSubset<T, AcquisitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acquisitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Acquisitions
     * const acquisition = await prisma.acquisition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcquisitionUpdateManyArgs>(args: SelectSubset<T, AcquisitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acquisitions and returns the data updated in the database.
     * @param {AcquisitionUpdateManyAndReturnArgs} args - Arguments to update many Acquisitions.
     * @example
     * // Update many Acquisitions
     * const acquisition = await prisma.acquisition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Acquisitions and only return the `id`
     * const acquisitionWithIdOnly = await prisma.acquisition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AcquisitionUpdateManyAndReturnArgs>(args: SelectSubset<T, AcquisitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Acquisition.
     * @param {AcquisitionUpsertArgs} args - Arguments to update or create a Acquisition.
     * @example
     * // Update or create a Acquisition
     * const acquisition = await prisma.acquisition.upsert({
     *   create: {
     *     // ... data to create a Acquisition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acquisition we want to update
     *   }
     * })
     */
    upsert<T extends AcquisitionUpsertArgs>(args: SelectSubset<T, AcquisitionUpsertArgs<ExtArgs>>): Prisma__AcquisitionClient<$Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Acquisitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionCountArgs} args - Arguments to filter Acquisitions to count.
     * @example
     * // Count the number of Acquisitions
     * const count = await prisma.acquisition.count({
     *   where: {
     *     // ... the filter for the Acquisitions we want to count
     *   }
     * })
    **/
    count<T extends AcquisitionCountArgs>(
      args?: Subset<T, AcquisitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcquisitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Acquisition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcquisitionAggregateArgs>(args: Subset<T, AcquisitionAggregateArgs>): Prisma.PrismaPromise<GetAcquisitionAggregateType<T>>

    /**
     * Group by Acquisition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcquisitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcquisitionGroupByArgs['orderBy'] }
        : { orderBy?: AcquisitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcquisitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcquisitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Acquisition model
   */
  readonly fields: AcquisitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Acquisition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcquisitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    acquiringCompany<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    acquiredCompany<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Acquisition model
   */
  interface AcquisitionFieldRefs {
    readonly id: FieldRef<"Acquisition", 'Int'>
    readonly acquiringCompanyId: FieldRef<"Acquisition", 'Int'>
    readonly acquiredCompanyId: FieldRef<"Acquisition", 'Int'>
    readonly amountUsd: FieldRef<"Acquisition", 'Int'>
    readonly date: FieldRef<"Acquisition", 'DateTime'>
    readonly createdAt: FieldRef<"Acquisition", 'DateTime'>
    readonly updatedAt: FieldRef<"Acquisition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Acquisition findUnique
   */
  export type AcquisitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
    /**
     * Filter, which Acquisition to fetch.
     */
    where: AcquisitionWhereUniqueInput
  }

  /**
   * Acquisition findUniqueOrThrow
   */
  export type AcquisitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
    /**
     * Filter, which Acquisition to fetch.
     */
    where: AcquisitionWhereUniqueInput
  }

  /**
   * Acquisition findFirst
   */
  export type AcquisitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
    /**
     * Filter, which Acquisition to fetch.
     */
    where?: AcquisitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acquisitions to fetch.
     */
    orderBy?: AcquisitionOrderByWithRelationInput | AcquisitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acquisitions.
     */
    cursor?: AcquisitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acquisitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acquisitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acquisitions.
     */
    distinct?: AcquisitionScalarFieldEnum | AcquisitionScalarFieldEnum[]
  }

  /**
   * Acquisition findFirstOrThrow
   */
  export type AcquisitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
    /**
     * Filter, which Acquisition to fetch.
     */
    where?: AcquisitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acquisitions to fetch.
     */
    orderBy?: AcquisitionOrderByWithRelationInput | AcquisitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acquisitions.
     */
    cursor?: AcquisitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acquisitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acquisitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acquisitions.
     */
    distinct?: AcquisitionScalarFieldEnum | AcquisitionScalarFieldEnum[]
  }

  /**
   * Acquisition findMany
   */
  export type AcquisitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
    /**
     * Filter, which Acquisitions to fetch.
     */
    where?: AcquisitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acquisitions to fetch.
     */
    orderBy?: AcquisitionOrderByWithRelationInput | AcquisitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Acquisitions.
     */
    cursor?: AcquisitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acquisitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acquisitions.
     */
    skip?: number
    distinct?: AcquisitionScalarFieldEnum | AcquisitionScalarFieldEnum[]
  }

  /**
   * Acquisition create
   */
  export type AcquisitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Acquisition.
     */
    data: XOR<AcquisitionCreateInput, AcquisitionUncheckedCreateInput>
  }

  /**
   * Acquisition createMany
   */
  export type AcquisitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Acquisitions.
     */
    data: AcquisitionCreateManyInput | AcquisitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Acquisition createManyAndReturn
   */
  export type AcquisitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * The data used to create many Acquisitions.
     */
    data: AcquisitionCreateManyInput | AcquisitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Acquisition update
   */
  export type AcquisitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Acquisition.
     */
    data: XOR<AcquisitionUpdateInput, AcquisitionUncheckedUpdateInput>
    /**
     * Choose, which Acquisition to update.
     */
    where: AcquisitionWhereUniqueInput
  }

  /**
   * Acquisition updateMany
   */
  export type AcquisitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Acquisitions.
     */
    data: XOR<AcquisitionUpdateManyMutationInput, AcquisitionUncheckedUpdateManyInput>
    /**
     * Filter which Acquisitions to update
     */
    where?: AcquisitionWhereInput
    /**
     * Limit how many Acquisitions to update.
     */
    limit?: number
  }

  /**
   * Acquisition updateManyAndReturn
   */
  export type AcquisitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * The data used to update Acquisitions.
     */
    data: XOR<AcquisitionUpdateManyMutationInput, AcquisitionUncheckedUpdateManyInput>
    /**
     * Filter which Acquisitions to update
     */
    where?: AcquisitionWhereInput
    /**
     * Limit how many Acquisitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Acquisition upsert
   */
  export type AcquisitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Acquisition to update in case it exists.
     */
    where: AcquisitionWhereUniqueInput
    /**
     * In case the Acquisition found by the `where` argument doesn't exist, create a new Acquisition with this data.
     */
    create: XOR<AcquisitionCreateInput, AcquisitionUncheckedCreateInput>
    /**
     * In case the Acquisition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcquisitionUpdateInput, AcquisitionUncheckedUpdateInput>
  }

  /**
   * Acquisition delete
   */
  export type AcquisitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
    /**
     * Filter which Acquisition to delete.
     */
    where: AcquisitionWhereUniqueInput
  }

  /**
   * Acquisition deleteMany
   */
  export type AcquisitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acquisitions to delete
     */
    where?: AcquisitionWhereInput
    /**
     * Limit how many Acquisitions to delete.
     */
    limit?: number
  }

  /**
   * Acquisition without action
   */
  export type AcquisitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: AcquisitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: AcquisitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcquisitionInclude<ExtArgs> | null
  }


  /**
   * Model Tool
   */

  export type AggregateTool = {
    _count: ToolCountAggregateOutputType | null
    _avg: ToolAvgAggregateOutputType | null
    _sum: ToolSumAggregateOutputType | null
    _min: ToolMinAggregateOutputType | null
    _max: ToolMaxAggregateOutputType | null
  }

  export type ToolAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    industryId: number | null
  }

  export type ToolSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    industryId: number | null
  }

  export type ToolMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    websiteUrl: string | null
    isOpenSource: boolean | null
    useCase: string | null
    companyId: number | null
    industryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToolMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    websiteUrl: string | null
    isOpenSource: boolean | null
    useCase: string | null
    companyId: number | null
    industryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToolCountAggregateOutputType = {
    id: number
    name: number
    description: number
    websiteUrl: number
    isOpenSource: number
    useCase: number
    companyId: number
    industryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ToolAvgAggregateInputType = {
    id?: true
    companyId?: true
    industryId?: true
  }

  export type ToolSumAggregateInputType = {
    id?: true
    companyId?: true
    industryId?: true
  }

  export type ToolMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    websiteUrl?: true
    isOpenSource?: true
    useCase?: true
    companyId?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToolMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    websiteUrl?: true
    isOpenSource?: true
    useCase?: true
    companyId?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToolCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    websiteUrl?: true
    isOpenSource?: true
    useCase?: true
    companyId?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ToolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tool to aggregate.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tools
    **/
    _count?: true | ToolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolMaxAggregateInputType
  }

  export type GetToolAggregateType<T extends ToolAggregateArgs> = {
        [P in keyof T & keyof AggregateTool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTool[P]>
      : GetScalarType<T[P], AggregateTool[P]>
  }




  export type ToolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithAggregationInput | ToolOrderByWithAggregationInput[]
    by: ToolScalarFieldEnum[] | ToolScalarFieldEnum
    having?: ToolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolCountAggregateInputType | true
    _avg?: ToolAvgAggregateInputType
    _sum?: ToolSumAggregateInputType
    _min?: ToolMinAggregateInputType
    _max?: ToolMaxAggregateInputType
  }

  export type ToolGroupByOutputType = {
    id: number
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    companyId: number | null
    industryId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ToolCountAggregateOutputType | null
    _avg: ToolAvgAggregateOutputType | null
    _sum: ToolSumAggregateOutputType | null
    _min: ToolMinAggregateOutputType | null
    _max: ToolMaxAggregateOutputType | null
  }

  type GetToolGroupByPayload<T extends ToolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolGroupByOutputType[P]>
            : GetScalarType<T[P], ToolGroupByOutputType[P]>
        }
      >
    >


  export type ToolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    websiteUrl?: boolean
    isOpenSource?: boolean
    useCase?: boolean
    companyId?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Tool$companyArgs<ExtArgs>
    industry?: boolean | Tool$industryArgs<ExtArgs>
    tags?: boolean | Tool$tagsArgs<ExtArgs>
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    websiteUrl?: boolean
    isOpenSource?: boolean
    useCase?: boolean
    companyId?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Tool$companyArgs<ExtArgs>
    industry?: boolean | Tool$industryArgs<ExtArgs>
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    websiteUrl?: boolean
    isOpenSource?: boolean
    useCase?: boolean
    companyId?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Tool$companyArgs<ExtArgs>
    industry?: boolean | Tool$industryArgs<ExtArgs>
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    websiteUrl?: boolean
    isOpenSource?: boolean
    useCase?: boolean
    companyId?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ToolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "websiteUrl" | "isOpenSource" | "useCase" | "companyId" | "industryId" | "createdAt" | "updatedAt", ExtArgs["result"]["tool"]>
  export type ToolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Tool$companyArgs<ExtArgs>
    industry?: boolean | Tool$industryArgs<ExtArgs>
    tags?: boolean | Tool$tagsArgs<ExtArgs>
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ToolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Tool$companyArgs<ExtArgs>
    industry?: boolean | Tool$industryArgs<ExtArgs>
  }
  export type ToolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Tool$companyArgs<ExtArgs>
    industry?: boolean | Tool$industryArgs<ExtArgs>
  }

  export type $ToolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tool"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      industry: Prisma.$IndustryPayload<ExtArgs> | null
      tags: Prisma.$ToolTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      websiteUrl: string
      isOpenSource: boolean
      useCase: string
      companyId: number | null
      industryId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tool"]>
    composites: {}
  }

  type ToolGetPayload<S extends boolean | null | undefined | ToolDefaultArgs> = $Result.GetResult<Prisma.$ToolPayload, S>

  type ToolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolCountAggregateInputType | true
    }

  export interface ToolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tool'], meta: { name: 'Tool' } }
    /**
     * Find zero or one Tool that matches the filter.
     * @param {ToolFindUniqueArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolFindUniqueArgs>(args: SelectSubset<T, ToolFindUniqueArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolFindUniqueOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindFirstArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolFindFirstArgs>(args?: SelectSubset<T, ToolFindFirstArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindFirstOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tool.findMany()
     * 
     * // Get first 10 Tools
     * const tools = await prisma.tool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolWithIdOnly = await prisma.tool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToolFindManyArgs>(args?: SelectSubset<T, ToolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tool.
     * @param {ToolCreateArgs} args - Arguments to create a Tool.
     * @example
     * // Create one Tool
     * const Tool = await prisma.tool.create({
     *   data: {
     *     // ... data to create a Tool
     *   }
     * })
     * 
     */
    create<T extends ToolCreateArgs>(args: SelectSubset<T, ToolCreateArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tools.
     * @param {ToolCreateManyArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tool = await prisma.tool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolCreateManyArgs>(args?: SelectSubset<T, ToolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tools and returns the data saved in the database.
     * @param {ToolCreateManyAndReturnArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tool = await prisma.tool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tools and only return the `id`
     * const toolWithIdOnly = await prisma.tool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tool.
     * @param {ToolDeleteArgs} args - Arguments to delete one Tool.
     * @example
     * // Delete one Tool
     * const Tool = await prisma.tool.delete({
     *   where: {
     *     // ... filter to delete one Tool
     *   }
     * })
     * 
     */
    delete<T extends ToolDeleteArgs>(args: SelectSubset<T, ToolDeleteArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tool.
     * @param {ToolUpdateArgs} args - Arguments to update one Tool.
     * @example
     * // Update one Tool
     * const tool = await prisma.tool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolUpdateArgs>(args: SelectSubset<T, ToolUpdateArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tools.
     * @param {ToolDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolDeleteManyArgs>(args?: SelectSubset<T, ToolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolUpdateManyArgs>(args: SelectSubset<T, ToolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools and returns the data updated in the database.
     * @param {ToolUpdateManyAndReturnArgs} args - Arguments to update many Tools.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tools and only return the `id`
     * const toolWithIdOnly = await prisma.tool.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToolUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tool.
     * @param {ToolUpsertArgs} args - Arguments to update or create a Tool.
     * @example
     * // Update or create a Tool
     * const tool = await prisma.tool.upsert({
     *   create: {
     *     // ... data to create a Tool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tool we want to update
     *   }
     * })
     */
    upsert<T extends ToolUpsertArgs>(args: SelectSubset<T, ToolUpsertArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tool.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
    **/
    count<T extends ToolCountArgs>(
      args?: Subset<T, ToolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ToolAggregateArgs>(args: Subset<T, ToolAggregateArgs>): Prisma.PrismaPromise<GetToolAggregateType<T>>

    /**
     * Group by Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ToolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolGroupByArgs['orderBy'] }
        : { orderBy?: ToolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ToolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tool model
   */
  readonly fields: ToolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends Tool$companyArgs<ExtArgs> = {}>(args?: Subset<T, Tool$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    industry<T extends Tool$industryArgs<ExtArgs> = {}>(args?: Subset<T, Tool$industryArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tags<T extends Tool$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Tool$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tool model
   */
  interface ToolFieldRefs {
    readonly id: FieldRef<"Tool", 'Int'>
    readonly name: FieldRef<"Tool", 'String'>
    readonly description: FieldRef<"Tool", 'String'>
    readonly websiteUrl: FieldRef<"Tool", 'String'>
    readonly isOpenSource: FieldRef<"Tool", 'Boolean'>
    readonly useCase: FieldRef<"Tool", 'String'>
    readonly companyId: FieldRef<"Tool", 'Int'>
    readonly industryId: FieldRef<"Tool", 'Int'>
    readonly createdAt: FieldRef<"Tool", 'DateTime'>
    readonly updatedAt: FieldRef<"Tool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tool findUnique
   */
  export type ToolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool findUniqueOrThrow
   */
  export type ToolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool findFirst
   */
  export type ToolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool findFirstOrThrow
   */
  export type ToolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool findMany
   */
  export type ToolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool create
   */
  export type ToolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The data needed to create a Tool.
     */
    data: XOR<ToolCreateInput, ToolUncheckedCreateInput>
  }

  /**
   * Tool createMany
   */
  export type ToolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tools.
     */
    data: ToolCreateManyInput | ToolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tool createManyAndReturn
   */
  export type ToolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * The data used to create many Tools.
     */
    data: ToolCreateManyInput | ToolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tool update
   */
  export type ToolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The data needed to update a Tool.
     */
    data: XOR<ToolUpdateInput, ToolUncheckedUpdateInput>
    /**
     * Choose, which Tool to update.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool updateMany
   */
  export type ToolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tools.
     */
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyInput>
    /**
     * Filter which Tools to update
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to update.
     */
    limit?: number
  }

  /**
   * Tool updateManyAndReturn
   */
  export type ToolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * The data used to update Tools.
     */
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyInput>
    /**
     * Filter which Tools to update
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tool upsert
   */
  export type ToolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The filter to search for the Tool to update in case it exists.
     */
    where: ToolWhereUniqueInput
    /**
     * In case the Tool found by the `where` argument doesn't exist, create a new Tool with this data.
     */
    create: XOR<ToolCreateInput, ToolUncheckedCreateInput>
    /**
     * In case the Tool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolUpdateInput, ToolUncheckedUpdateInput>
  }

  /**
   * Tool delete
   */
  export type ToolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter which Tool to delete.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool deleteMany
   */
  export type ToolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tools to delete
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to delete.
     */
    limit?: number
  }

  /**
   * Tool.company
   */
  export type Tool$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Tool.industry
   */
  export type Tool$industryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    where?: IndustryWhereInput
  }

  /**
   * Tool.tags
   */
  export type Tool$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    where?: ToolTagWhereInput
    orderBy?: ToolTagOrderByWithRelationInput | ToolTagOrderByWithRelationInput[]
    cursor?: ToolTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolTagScalarFieldEnum | ToolTagScalarFieldEnum[]
  }

  /**
   * Tool without action
   */
  export type ToolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
  }


  /**
   * Model FundingRound
   */

  export type AggregateFundingRound = {
    _count: FundingRoundCountAggregateOutputType | null
    _avg: FundingRoundAvgAggregateOutputType | null
    _sum: FundingRoundSumAggregateOutputType | null
    _min: FundingRoundMinAggregateOutputType | null
    _max: FundingRoundMaxAggregateOutputType | null
  }

  export type FundingRoundAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    amountUsd: number | null
  }

  export type FundingRoundSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    amountUsd: number | null
  }

  export type FundingRoundMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    roundType: string | null
    amountUsd: number | null
    date: Date | null
    leadInvestor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FundingRoundMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    roundType: string | null
    amountUsd: number | null
    date: Date | null
    leadInvestor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FundingRoundCountAggregateOutputType = {
    id: number
    companyId: number
    roundType: number
    amountUsd: number
    date: number
    leadInvestor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FundingRoundAvgAggregateInputType = {
    id?: true
    companyId?: true
    amountUsd?: true
  }

  export type FundingRoundSumAggregateInputType = {
    id?: true
    companyId?: true
    amountUsd?: true
  }

  export type FundingRoundMinAggregateInputType = {
    id?: true
    companyId?: true
    roundType?: true
    amountUsd?: true
    date?: true
    leadInvestor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FundingRoundMaxAggregateInputType = {
    id?: true
    companyId?: true
    roundType?: true
    amountUsd?: true
    date?: true
    leadInvestor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FundingRoundCountAggregateInputType = {
    id?: true
    companyId?: true
    roundType?: true
    amountUsd?: true
    date?: true
    leadInvestor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FundingRoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundingRound to aggregate.
     */
    where?: FundingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingRounds to fetch.
     */
    orderBy?: FundingRoundOrderByWithRelationInput | FundingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FundingRounds
    **/
    _count?: true | FundingRoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundingRoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundingRoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundingRoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundingRoundMaxAggregateInputType
  }

  export type GetFundingRoundAggregateType<T extends FundingRoundAggregateArgs> = {
        [P in keyof T & keyof AggregateFundingRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFundingRound[P]>
      : GetScalarType<T[P], AggregateFundingRound[P]>
  }




  export type FundingRoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundingRoundWhereInput
    orderBy?: FundingRoundOrderByWithAggregationInput | FundingRoundOrderByWithAggregationInput[]
    by: FundingRoundScalarFieldEnum[] | FundingRoundScalarFieldEnum
    having?: FundingRoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundingRoundCountAggregateInputType | true
    _avg?: FundingRoundAvgAggregateInputType
    _sum?: FundingRoundSumAggregateInputType
    _min?: FundingRoundMinAggregateInputType
    _max?: FundingRoundMaxAggregateInputType
  }

  export type FundingRoundGroupByOutputType = {
    id: number
    companyId: number
    roundType: string
    amountUsd: number
    date: Date
    leadInvestor: string | null
    createdAt: Date
    updatedAt: Date
    _count: FundingRoundCountAggregateOutputType | null
    _avg: FundingRoundAvgAggregateOutputType | null
    _sum: FundingRoundSumAggregateOutputType | null
    _min: FundingRoundMinAggregateOutputType | null
    _max: FundingRoundMaxAggregateOutputType | null
  }

  type GetFundingRoundGroupByPayload<T extends FundingRoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundingRoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundingRoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundingRoundGroupByOutputType[P]>
            : GetScalarType<T[P], FundingRoundGroupByOutputType[P]>
        }
      >
    >


  export type FundingRoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    roundType?: boolean
    amountUsd?: boolean
    date?: boolean
    leadInvestor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundingRound"]>

  export type FundingRoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    roundType?: boolean
    amountUsd?: boolean
    date?: boolean
    leadInvestor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundingRound"]>

  export type FundingRoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    roundType?: boolean
    amountUsd?: boolean
    date?: boolean
    leadInvestor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundingRound"]>

  export type FundingRoundSelectScalar = {
    id?: boolean
    companyId?: boolean
    roundType?: boolean
    amountUsd?: boolean
    date?: boolean
    leadInvestor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FundingRoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "roundType" | "amountUsd" | "date" | "leadInvestor" | "createdAt" | "updatedAt", ExtArgs["result"]["fundingRound"]>
  export type FundingRoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type FundingRoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type FundingRoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $FundingRoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FundingRound"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      roundType: string
      amountUsd: number
      date: Date
      leadInvestor: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fundingRound"]>
    composites: {}
  }

  type FundingRoundGetPayload<S extends boolean | null | undefined | FundingRoundDefaultArgs> = $Result.GetResult<Prisma.$FundingRoundPayload, S>

  type FundingRoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundingRoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundingRoundCountAggregateInputType | true
    }

  export interface FundingRoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FundingRound'], meta: { name: 'FundingRound' } }
    /**
     * Find zero or one FundingRound that matches the filter.
     * @param {FundingRoundFindUniqueArgs} args - Arguments to find a FundingRound
     * @example
     * // Get one FundingRound
     * const fundingRound = await prisma.fundingRound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundingRoundFindUniqueArgs>(args: SelectSubset<T, FundingRoundFindUniqueArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FundingRound that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundingRoundFindUniqueOrThrowArgs} args - Arguments to find a FundingRound
     * @example
     * // Get one FundingRound
     * const fundingRound = await prisma.fundingRound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundingRoundFindUniqueOrThrowArgs>(args: SelectSubset<T, FundingRoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundingRound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundFindFirstArgs} args - Arguments to find a FundingRound
     * @example
     * // Get one FundingRound
     * const fundingRound = await prisma.fundingRound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundingRoundFindFirstArgs>(args?: SelectSubset<T, FundingRoundFindFirstArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundingRound that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundFindFirstOrThrowArgs} args - Arguments to find a FundingRound
     * @example
     * // Get one FundingRound
     * const fundingRound = await prisma.fundingRound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundingRoundFindFirstOrThrowArgs>(args?: SelectSubset<T, FundingRoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FundingRounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FundingRounds
     * const fundingRounds = await prisma.fundingRound.findMany()
     * 
     * // Get first 10 FundingRounds
     * const fundingRounds = await prisma.fundingRound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundingRoundWithIdOnly = await prisma.fundingRound.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundingRoundFindManyArgs>(args?: SelectSubset<T, FundingRoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FundingRound.
     * @param {FundingRoundCreateArgs} args - Arguments to create a FundingRound.
     * @example
     * // Create one FundingRound
     * const FundingRound = await prisma.fundingRound.create({
     *   data: {
     *     // ... data to create a FundingRound
     *   }
     * })
     * 
     */
    create<T extends FundingRoundCreateArgs>(args: SelectSubset<T, FundingRoundCreateArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FundingRounds.
     * @param {FundingRoundCreateManyArgs} args - Arguments to create many FundingRounds.
     * @example
     * // Create many FundingRounds
     * const fundingRound = await prisma.fundingRound.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundingRoundCreateManyArgs>(args?: SelectSubset<T, FundingRoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FundingRounds and returns the data saved in the database.
     * @param {FundingRoundCreateManyAndReturnArgs} args - Arguments to create many FundingRounds.
     * @example
     * // Create many FundingRounds
     * const fundingRound = await prisma.fundingRound.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FundingRounds and only return the `id`
     * const fundingRoundWithIdOnly = await prisma.fundingRound.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FundingRoundCreateManyAndReturnArgs>(args?: SelectSubset<T, FundingRoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FundingRound.
     * @param {FundingRoundDeleteArgs} args - Arguments to delete one FundingRound.
     * @example
     * // Delete one FundingRound
     * const FundingRound = await prisma.fundingRound.delete({
     *   where: {
     *     // ... filter to delete one FundingRound
     *   }
     * })
     * 
     */
    delete<T extends FundingRoundDeleteArgs>(args: SelectSubset<T, FundingRoundDeleteArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FundingRound.
     * @param {FundingRoundUpdateArgs} args - Arguments to update one FundingRound.
     * @example
     * // Update one FundingRound
     * const fundingRound = await prisma.fundingRound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundingRoundUpdateArgs>(args: SelectSubset<T, FundingRoundUpdateArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FundingRounds.
     * @param {FundingRoundDeleteManyArgs} args - Arguments to filter FundingRounds to delete.
     * @example
     * // Delete a few FundingRounds
     * const { count } = await prisma.fundingRound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundingRoundDeleteManyArgs>(args?: SelectSubset<T, FundingRoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundingRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FundingRounds
     * const fundingRound = await prisma.fundingRound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundingRoundUpdateManyArgs>(args: SelectSubset<T, FundingRoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundingRounds and returns the data updated in the database.
     * @param {FundingRoundUpdateManyAndReturnArgs} args - Arguments to update many FundingRounds.
     * @example
     * // Update many FundingRounds
     * const fundingRound = await prisma.fundingRound.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FundingRounds and only return the `id`
     * const fundingRoundWithIdOnly = await prisma.fundingRound.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FundingRoundUpdateManyAndReturnArgs>(args: SelectSubset<T, FundingRoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FundingRound.
     * @param {FundingRoundUpsertArgs} args - Arguments to update or create a FundingRound.
     * @example
     * // Update or create a FundingRound
     * const fundingRound = await prisma.fundingRound.upsert({
     *   create: {
     *     // ... data to create a FundingRound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FundingRound we want to update
     *   }
     * })
     */
    upsert<T extends FundingRoundUpsertArgs>(args: SelectSubset<T, FundingRoundUpsertArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FundingRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundCountArgs} args - Arguments to filter FundingRounds to count.
     * @example
     * // Count the number of FundingRounds
     * const count = await prisma.fundingRound.count({
     *   where: {
     *     // ... the filter for the FundingRounds we want to count
     *   }
     * })
    **/
    count<T extends FundingRoundCountArgs>(
      args?: Subset<T, FundingRoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundingRoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FundingRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FundingRoundAggregateArgs>(args: Subset<T, FundingRoundAggregateArgs>): Prisma.PrismaPromise<GetFundingRoundAggregateType<T>>

    /**
     * Group by FundingRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FundingRoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundingRoundGroupByArgs['orderBy'] }
        : { orderBy?: FundingRoundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FundingRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundingRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FundingRound model
   */
  readonly fields: FundingRoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FundingRound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundingRoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FundingRound model
   */
  interface FundingRoundFieldRefs {
    readonly id: FieldRef<"FundingRound", 'Int'>
    readonly companyId: FieldRef<"FundingRound", 'Int'>
    readonly roundType: FieldRef<"FundingRound", 'String'>
    readonly amountUsd: FieldRef<"FundingRound", 'Int'>
    readonly date: FieldRef<"FundingRound", 'DateTime'>
    readonly leadInvestor: FieldRef<"FundingRound", 'String'>
    readonly createdAt: FieldRef<"FundingRound", 'DateTime'>
    readonly updatedAt: FieldRef<"FundingRound", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FundingRound findUnique
   */
  export type FundingRoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter, which FundingRound to fetch.
     */
    where: FundingRoundWhereUniqueInput
  }

  /**
   * FundingRound findUniqueOrThrow
   */
  export type FundingRoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter, which FundingRound to fetch.
     */
    where: FundingRoundWhereUniqueInput
  }

  /**
   * FundingRound findFirst
   */
  export type FundingRoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter, which FundingRound to fetch.
     */
    where?: FundingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingRounds to fetch.
     */
    orderBy?: FundingRoundOrderByWithRelationInput | FundingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundingRounds.
     */
    cursor?: FundingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundingRounds.
     */
    distinct?: FundingRoundScalarFieldEnum | FundingRoundScalarFieldEnum[]
  }

  /**
   * FundingRound findFirstOrThrow
   */
  export type FundingRoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter, which FundingRound to fetch.
     */
    where?: FundingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingRounds to fetch.
     */
    orderBy?: FundingRoundOrderByWithRelationInput | FundingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundingRounds.
     */
    cursor?: FundingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundingRounds.
     */
    distinct?: FundingRoundScalarFieldEnum | FundingRoundScalarFieldEnum[]
  }

  /**
   * FundingRound findMany
   */
  export type FundingRoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter, which FundingRounds to fetch.
     */
    where?: FundingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingRounds to fetch.
     */
    orderBy?: FundingRoundOrderByWithRelationInput | FundingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FundingRounds.
     */
    cursor?: FundingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingRounds.
     */
    skip?: number
    distinct?: FundingRoundScalarFieldEnum | FundingRoundScalarFieldEnum[]
  }

  /**
   * FundingRound create
   */
  export type FundingRoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * The data needed to create a FundingRound.
     */
    data: XOR<FundingRoundCreateInput, FundingRoundUncheckedCreateInput>
  }

  /**
   * FundingRound createMany
   */
  export type FundingRoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FundingRounds.
     */
    data: FundingRoundCreateManyInput | FundingRoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FundingRound createManyAndReturn
   */
  export type FundingRoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * The data used to create many FundingRounds.
     */
    data: FundingRoundCreateManyInput | FundingRoundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FundingRound update
   */
  export type FundingRoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * The data needed to update a FundingRound.
     */
    data: XOR<FundingRoundUpdateInput, FundingRoundUncheckedUpdateInput>
    /**
     * Choose, which FundingRound to update.
     */
    where: FundingRoundWhereUniqueInput
  }

  /**
   * FundingRound updateMany
   */
  export type FundingRoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FundingRounds.
     */
    data: XOR<FundingRoundUpdateManyMutationInput, FundingRoundUncheckedUpdateManyInput>
    /**
     * Filter which FundingRounds to update
     */
    where?: FundingRoundWhereInput
    /**
     * Limit how many FundingRounds to update.
     */
    limit?: number
  }

  /**
   * FundingRound updateManyAndReturn
   */
  export type FundingRoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * The data used to update FundingRounds.
     */
    data: XOR<FundingRoundUpdateManyMutationInput, FundingRoundUncheckedUpdateManyInput>
    /**
     * Filter which FundingRounds to update
     */
    where?: FundingRoundWhereInput
    /**
     * Limit how many FundingRounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FundingRound upsert
   */
  export type FundingRoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * The filter to search for the FundingRound to update in case it exists.
     */
    where: FundingRoundWhereUniqueInput
    /**
     * In case the FundingRound found by the `where` argument doesn't exist, create a new FundingRound with this data.
     */
    create: XOR<FundingRoundCreateInput, FundingRoundUncheckedCreateInput>
    /**
     * In case the FundingRound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundingRoundUpdateInput, FundingRoundUncheckedUpdateInput>
  }

  /**
   * FundingRound delete
   */
  export type FundingRoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter which FundingRound to delete.
     */
    where: FundingRoundWhereUniqueInput
  }

  /**
   * FundingRound deleteMany
   */
  export type FundingRoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundingRounds to delete
     */
    where?: FundingRoundWhereInput
    /**
     * Limit how many FundingRounds to delete.
     */
    limit?: number
  }

  /**
   * FundingRound without action
   */
  export type FundingRoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
  }


  /**
   * Model UseCaseCard
   */

  export type AggregateUseCaseCard = {
    _count: UseCaseCardCountAggregateOutputType | null
    _avg: UseCaseCardAvgAggregateOutputType | null
    _sum: UseCaseCardSumAggregateOutputType | null
    _min: UseCaseCardMinAggregateOutputType | null
    _max: UseCaseCardMaxAggregateOutputType | null
  }

  export type UseCaseCardAvgAggregateOutputType = {
    id: number | null
    exampleCompanyId: number | null
    industryId: number | null
  }

  export type UseCaseCardSumAggregateOutputType = {
    id: number | null
    exampleCompanyId: number | null
    industryId: number | null
  }

  export type UseCaseCardMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    exampleCompanyId: number | null
    industryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UseCaseCardMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    exampleCompanyId: number | null
    industryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UseCaseCardCountAggregateOutputType = {
    id: number
    title: number
    description: number
    exampleCompanyId: number
    industryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UseCaseCardAvgAggregateInputType = {
    id?: true
    exampleCompanyId?: true
    industryId?: true
  }

  export type UseCaseCardSumAggregateInputType = {
    id?: true
    exampleCompanyId?: true
    industryId?: true
  }

  export type UseCaseCardMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    exampleCompanyId?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UseCaseCardMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    exampleCompanyId?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UseCaseCardCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    exampleCompanyId?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UseCaseCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UseCaseCard to aggregate.
     */
    where?: UseCaseCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UseCaseCards to fetch.
     */
    orderBy?: UseCaseCardOrderByWithRelationInput | UseCaseCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UseCaseCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UseCaseCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UseCaseCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UseCaseCards
    **/
    _count?: true | UseCaseCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UseCaseCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UseCaseCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UseCaseCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UseCaseCardMaxAggregateInputType
  }

  export type GetUseCaseCardAggregateType<T extends UseCaseCardAggregateArgs> = {
        [P in keyof T & keyof AggregateUseCaseCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUseCaseCard[P]>
      : GetScalarType<T[P], AggregateUseCaseCard[P]>
  }




  export type UseCaseCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UseCaseCardWhereInput
    orderBy?: UseCaseCardOrderByWithAggregationInput | UseCaseCardOrderByWithAggregationInput[]
    by: UseCaseCardScalarFieldEnum[] | UseCaseCardScalarFieldEnum
    having?: UseCaseCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UseCaseCardCountAggregateInputType | true
    _avg?: UseCaseCardAvgAggregateInputType
    _sum?: UseCaseCardSumAggregateInputType
    _min?: UseCaseCardMinAggregateInputType
    _max?: UseCaseCardMaxAggregateInputType
  }

  export type UseCaseCardGroupByOutputType = {
    id: number
    title: string
    description: string
    exampleCompanyId: number | null
    industryId: number
    createdAt: Date
    updatedAt: Date
    _count: UseCaseCardCountAggregateOutputType | null
    _avg: UseCaseCardAvgAggregateOutputType | null
    _sum: UseCaseCardSumAggregateOutputType | null
    _min: UseCaseCardMinAggregateOutputType | null
    _max: UseCaseCardMaxAggregateOutputType | null
  }

  type GetUseCaseCardGroupByPayload<T extends UseCaseCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UseCaseCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UseCaseCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UseCaseCardGroupByOutputType[P]>
            : GetScalarType<T[P], UseCaseCardGroupByOutputType[P]>
        }
      >
    >


  export type UseCaseCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    exampleCompanyId?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exampleCompany?: boolean | UseCaseCard$exampleCompanyArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["useCaseCard"]>

  export type UseCaseCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    exampleCompanyId?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exampleCompany?: boolean | UseCaseCard$exampleCompanyArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["useCaseCard"]>

  export type UseCaseCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    exampleCompanyId?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exampleCompany?: boolean | UseCaseCard$exampleCompanyArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["useCaseCard"]>

  export type UseCaseCardSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    exampleCompanyId?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UseCaseCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "exampleCompanyId" | "industryId" | "createdAt" | "updatedAt", ExtArgs["result"]["useCaseCard"]>
  export type UseCaseCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exampleCompany?: boolean | UseCaseCard$exampleCompanyArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }
  export type UseCaseCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exampleCompany?: boolean | UseCaseCard$exampleCompanyArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }
  export type UseCaseCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exampleCompany?: boolean | UseCaseCard$exampleCompanyArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }

  export type $UseCaseCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UseCaseCard"
    objects: {
      exampleCompany: Prisma.$CompanyPayload<ExtArgs> | null
      industry: Prisma.$IndustryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      exampleCompanyId: number | null
      industryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["useCaseCard"]>
    composites: {}
  }

  type UseCaseCardGetPayload<S extends boolean | null | undefined | UseCaseCardDefaultArgs> = $Result.GetResult<Prisma.$UseCaseCardPayload, S>

  type UseCaseCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UseCaseCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UseCaseCardCountAggregateInputType | true
    }

  export interface UseCaseCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UseCaseCard'], meta: { name: 'UseCaseCard' } }
    /**
     * Find zero or one UseCaseCard that matches the filter.
     * @param {UseCaseCardFindUniqueArgs} args - Arguments to find a UseCaseCard
     * @example
     * // Get one UseCaseCard
     * const useCaseCard = await prisma.useCaseCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UseCaseCardFindUniqueArgs>(args: SelectSubset<T, UseCaseCardFindUniqueArgs<ExtArgs>>): Prisma__UseCaseCardClient<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UseCaseCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UseCaseCardFindUniqueOrThrowArgs} args - Arguments to find a UseCaseCard
     * @example
     * // Get one UseCaseCard
     * const useCaseCard = await prisma.useCaseCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UseCaseCardFindUniqueOrThrowArgs>(args: SelectSubset<T, UseCaseCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UseCaseCardClient<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UseCaseCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseCaseCardFindFirstArgs} args - Arguments to find a UseCaseCard
     * @example
     * // Get one UseCaseCard
     * const useCaseCard = await prisma.useCaseCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UseCaseCardFindFirstArgs>(args?: SelectSubset<T, UseCaseCardFindFirstArgs<ExtArgs>>): Prisma__UseCaseCardClient<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UseCaseCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseCaseCardFindFirstOrThrowArgs} args - Arguments to find a UseCaseCard
     * @example
     * // Get one UseCaseCard
     * const useCaseCard = await prisma.useCaseCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UseCaseCardFindFirstOrThrowArgs>(args?: SelectSubset<T, UseCaseCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__UseCaseCardClient<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UseCaseCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseCaseCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UseCaseCards
     * const useCaseCards = await prisma.useCaseCard.findMany()
     * 
     * // Get first 10 UseCaseCards
     * const useCaseCards = await prisma.useCaseCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const useCaseCardWithIdOnly = await prisma.useCaseCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UseCaseCardFindManyArgs>(args?: SelectSubset<T, UseCaseCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UseCaseCard.
     * @param {UseCaseCardCreateArgs} args - Arguments to create a UseCaseCard.
     * @example
     * // Create one UseCaseCard
     * const UseCaseCard = await prisma.useCaseCard.create({
     *   data: {
     *     // ... data to create a UseCaseCard
     *   }
     * })
     * 
     */
    create<T extends UseCaseCardCreateArgs>(args: SelectSubset<T, UseCaseCardCreateArgs<ExtArgs>>): Prisma__UseCaseCardClient<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UseCaseCards.
     * @param {UseCaseCardCreateManyArgs} args - Arguments to create many UseCaseCards.
     * @example
     * // Create many UseCaseCards
     * const useCaseCard = await prisma.useCaseCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UseCaseCardCreateManyArgs>(args?: SelectSubset<T, UseCaseCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UseCaseCards and returns the data saved in the database.
     * @param {UseCaseCardCreateManyAndReturnArgs} args - Arguments to create many UseCaseCards.
     * @example
     * // Create many UseCaseCards
     * const useCaseCard = await prisma.useCaseCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UseCaseCards and only return the `id`
     * const useCaseCardWithIdOnly = await prisma.useCaseCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UseCaseCardCreateManyAndReturnArgs>(args?: SelectSubset<T, UseCaseCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UseCaseCard.
     * @param {UseCaseCardDeleteArgs} args - Arguments to delete one UseCaseCard.
     * @example
     * // Delete one UseCaseCard
     * const UseCaseCard = await prisma.useCaseCard.delete({
     *   where: {
     *     // ... filter to delete one UseCaseCard
     *   }
     * })
     * 
     */
    delete<T extends UseCaseCardDeleteArgs>(args: SelectSubset<T, UseCaseCardDeleteArgs<ExtArgs>>): Prisma__UseCaseCardClient<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UseCaseCard.
     * @param {UseCaseCardUpdateArgs} args - Arguments to update one UseCaseCard.
     * @example
     * // Update one UseCaseCard
     * const useCaseCard = await prisma.useCaseCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UseCaseCardUpdateArgs>(args: SelectSubset<T, UseCaseCardUpdateArgs<ExtArgs>>): Prisma__UseCaseCardClient<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UseCaseCards.
     * @param {UseCaseCardDeleteManyArgs} args - Arguments to filter UseCaseCards to delete.
     * @example
     * // Delete a few UseCaseCards
     * const { count } = await prisma.useCaseCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UseCaseCardDeleteManyArgs>(args?: SelectSubset<T, UseCaseCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UseCaseCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseCaseCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UseCaseCards
     * const useCaseCard = await prisma.useCaseCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UseCaseCardUpdateManyArgs>(args: SelectSubset<T, UseCaseCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UseCaseCards and returns the data updated in the database.
     * @param {UseCaseCardUpdateManyAndReturnArgs} args - Arguments to update many UseCaseCards.
     * @example
     * // Update many UseCaseCards
     * const useCaseCard = await prisma.useCaseCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UseCaseCards and only return the `id`
     * const useCaseCardWithIdOnly = await prisma.useCaseCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UseCaseCardUpdateManyAndReturnArgs>(args: SelectSubset<T, UseCaseCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UseCaseCard.
     * @param {UseCaseCardUpsertArgs} args - Arguments to update or create a UseCaseCard.
     * @example
     * // Update or create a UseCaseCard
     * const useCaseCard = await prisma.useCaseCard.upsert({
     *   create: {
     *     // ... data to create a UseCaseCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UseCaseCard we want to update
     *   }
     * })
     */
    upsert<T extends UseCaseCardUpsertArgs>(args: SelectSubset<T, UseCaseCardUpsertArgs<ExtArgs>>): Prisma__UseCaseCardClient<$Result.GetResult<Prisma.$UseCaseCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UseCaseCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseCaseCardCountArgs} args - Arguments to filter UseCaseCards to count.
     * @example
     * // Count the number of UseCaseCards
     * const count = await prisma.useCaseCard.count({
     *   where: {
     *     // ... the filter for the UseCaseCards we want to count
     *   }
     * })
    **/
    count<T extends UseCaseCardCountArgs>(
      args?: Subset<T, UseCaseCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UseCaseCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UseCaseCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseCaseCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UseCaseCardAggregateArgs>(args: Subset<T, UseCaseCardAggregateArgs>): Prisma.PrismaPromise<GetUseCaseCardAggregateType<T>>

    /**
     * Group by UseCaseCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UseCaseCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UseCaseCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UseCaseCardGroupByArgs['orderBy'] }
        : { orderBy?: UseCaseCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UseCaseCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUseCaseCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UseCaseCard model
   */
  readonly fields: UseCaseCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UseCaseCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UseCaseCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exampleCompany<T extends UseCaseCard$exampleCompanyArgs<ExtArgs> = {}>(args?: Subset<T, UseCaseCard$exampleCompanyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    industry<T extends IndustryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IndustryDefaultArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UseCaseCard model
   */
  interface UseCaseCardFieldRefs {
    readonly id: FieldRef<"UseCaseCard", 'Int'>
    readonly title: FieldRef<"UseCaseCard", 'String'>
    readonly description: FieldRef<"UseCaseCard", 'String'>
    readonly exampleCompanyId: FieldRef<"UseCaseCard", 'Int'>
    readonly industryId: FieldRef<"UseCaseCard", 'Int'>
    readonly createdAt: FieldRef<"UseCaseCard", 'DateTime'>
    readonly updatedAt: FieldRef<"UseCaseCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UseCaseCard findUnique
   */
  export type UseCaseCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
    /**
     * Filter, which UseCaseCard to fetch.
     */
    where: UseCaseCardWhereUniqueInput
  }

  /**
   * UseCaseCard findUniqueOrThrow
   */
  export type UseCaseCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
    /**
     * Filter, which UseCaseCard to fetch.
     */
    where: UseCaseCardWhereUniqueInput
  }

  /**
   * UseCaseCard findFirst
   */
  export type UseCaseCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
    /**
     * Filter, which UseCaseCard to fetch.
     */
    where?: UseCaseCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UseCaseCards to fetch.
     */
    orderBy?: UseCaseCardOrderByWithRelationInput | UseCaseCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UseCaseCards.
     */
    cursor?: UseCaseCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UseCaseCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UseCaseCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UseCaseCards.
     */
    distinct?: UseCaseCardScalarFieldEnum | UseCaseCardScalarFieldEnum[]
  }

  /**
   * UseCaseCard findFirstOrThrow
   */
  export type UseCaseCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
    /**
     * Filter, which UseCaseCard to fetch.
     */
    where?: UseCaseCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UseCaseCards to fetch.
     */
    orderBy?: UseCaseCardOrderByWithRelationInput | UseCaseCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UseCaseCards.
     */
    cursor?: UseCaseCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UseCaseCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UseCaseCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UseCaseCards.
     */
    distinct?: UseCaseCardScalarFieldEnum | UseCaseCardScalarFieldEnum[]
  }

  /**
   * UseCaseCard findMany
   */
  export type UseCaseCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
    /**
     * Filter, which UseCaseCards to fetch.
     */
    where?: UseCaseCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UseCaseCards to fetch.
     */
    orderBy?: UseCaseCardOrderByWithRelationInput | UseCaseCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UseCaseCards.
     */
    cursor?: UseCaseCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UseCaseCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UseCaseCards.
     */
    skip?: number
    distinct?: UseCaseCardScalarFieldEnum | UseCaseCardScalarFieldEnum[]
  }

  /**
   * UseCaseCard create
   */
  export type UseCaseCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
    /**
     * The data needed to create a UseCaseCard.
     */
    data: XOR<UseCaseCardCreateInput, UseCaseCardUncheckedCreateInput>
  }

  /**
   * UseCaseCard createMany
   */
  export type UseCaseCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UseCaseCards.
     */
    data: UseCaseCardCreateManyInput | UseCaseCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UseCaseCard createManyAndReturn
   */
  export type UseCaseCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * The data used to create many UseCaseCards.
     */
    data: UseCaseCardCreateManyInput | UseCaseCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UseCaseCard update
   */
  export type UseCaseCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
    /**
     * The data needed to update a UseCaseCard.
     */
    data: XOR<UseCaseCardUpdateInput, UseCaseCardUncheckedUpdateInput>
    /**
     * Choose, which UseCaseCard to update.
     */
    where: UseCaseCardWhereUniqueInput
  }

  /**
   * UseCaseCard updateMany
   */
  export type UseCaseCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UseCaseCards.
     */
    data: XOR<UseCaseCardUpdateManyMutationInput, UseCaseCardUncheckedUpdateManyInput>
    /**
     * Filter which UseCaseCards to update
     */
    where?: UseCaseCardWhereInput
    /**
     * Limit how many UseCaseCards to update.
     */
    limit?: number
  }

  /**
   * UseCaseCard updateManyAndReturn
   */
  export type UseCaseCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * The data used to update UseCaseCards.
     */
    data: XOR<UseCaseCardUpdateManyMutationInput, UseCaseCardUncheckedUpdateManyInput>
    /**
     * Filter which UseCaseCards to update
     */
    where?: UseCaseCardWhereInput
    /**
     * Limit how many UseCaseCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UseCaseCard upsert
   */
  export type UseCaseCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
    /**
     * The filter to search for the UseCaseCard to update in case it exists.
     */
    where: UseCaseCardWhereUniqueInput
    /**
     * In case the UseCaseCard found by the `where` argument doesn't exist, create a new UseCaseCard with this data.
     */
    create: XOR<UseCaseCardCreateInput, UseCaseCardUncheckedCreateInput>
    /**
     * In case the UseCaseCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UseCaseCardUpdateInput, UseCaseCardUncheckedUpdateInput>
  }

  /**
   * UseCaseCard delete
   */
  export type UseCaseCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
    /**
     * Filter which UseCaseCard to delete.
     */
    where: UseCaseCardWhereUniqueInput
  }

  /**
   * UseCaseCard deleteMany
   */
  export type UseCaseCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UseCaseCards to delete
     */
    where?: UseCaseCardWhereInput
    /**
     * Limit how many UseCaseCards to delete.
     */
    limit?: number
  }

  /**
   * UseCaseCard.exampleCompany
   */
  export type UseCaseCard$exampleCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * UseCaseCard without action
   */
  export type UseCaseCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UseCaseCard
     */
    select?: UseCaseCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UseCaseCard
     */
    omit?: UseCaseCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UseCaseCardInclude<ExtArgs> | null
  }


  /**
   * Model CompanyTag
   */

  export type AggregateCompanyTag = {
    _count: CompanyTagCountAggregateOutputType | null
    _avg: CompanyTagAvgAggregateOutputType | null
    _sum: CompanyTagSumAggregateOutputType | null
    _min: CompanyTagMinAggregateOutputType | null
    _max: CompanyTagMaxAggregateOutputType | null
  }

  export type CompanyTagAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CompanyTagSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CompanyTagMinAggregateOutputType = {
    id: number | null
    label: string | null
    companyId: number | null
  }

  export type CompanyTagMaxAggregateOutputType = {
    id: number | null
    label: string | null
    companyId: number | null
  }

  export type CompanyTagCountAggregateOutputType = {
    id: number
    label: number
    companyId: number
    _all: number
  }


  export type CompanyTagAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CompanyTagSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CompanyTagMinAggregateInputType = {
    id?: true
    label?: true
    companyId?: true
  }

  export type CompanyTagMaxAggregateInputType = {
    id?: true
    label?: true
    companyId?: true
  }

  export type CompanyTagCountAggregateInputType = {
    id?: true
    label?: true
    companyId?: true
    _all?: true
  }

  export type CompanyTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyTag to aggregate.
     */
    where?: CompanyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyTags to fetch.
     */
    orderBy?: CompanyTagOrderByWithRelationInput | CompanyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyTags
    **/
    _count?: true | CompanyTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyTagMaxAggregateInputType
  }

  export type GetCompanyTagAggregateType<T extends CompanyTagAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyTag[P]>
      : GetScalarType<T[P], AggregateCompanyTag[P]>
  }




  export type CompanyTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyTagWhereInput
    orderBy?: CompanyTagOrderByWithAggregationInput | CompanyTagOrderByWithAggregationInput[]
    by: CompanyTagScalarFieldEnum[] | CompanyTagScalarFieldEnum
    having?: CompanyTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyTagCountAggregateInputType | true
    _avg?: CompanyTagAvgAggregateInputType
    _sum?: CompanyTagSumAggregateInputType
    _min?: CompanyTagMinAggregateInputType
    _max?: CompanyTagMaxAggregateInputType
  }

  export type CompanyTagGroupByOutputType = {
    id: number
    label: string
    companyId: number
    _count: CompanyTagCountAggregateOutputType | null
    _avg: CompanyTagAvgAggregateOutputType | null
    _sum: CompanyTagSumAggregateOutputType | null
    _min: CompanyTagMinAggregateOutputType | null
    _max: CompanyTagMaxAggregateOutputType | null
  }

  type GetCompanyTagGroupByPayload<T extends CompanyTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyTagGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyTagGroupByOutputType[P]>
        }
      >
    >


  export type CompanyTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyTag"]>

  export type CompanyTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyTag"]>

  export type CompanyTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyTag"]>

  export type CompanyTagSelectScalar = {
    id?: boolean
    label?: boolean
    companyId?: boolean
  }

  export type CompanyTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "companyId", ExtArgs["result"]["companyTag"]>
  export type CompanyTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompanyTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyTag"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      companyId: number
    }, ExtArgs["result"]["companyTag"]>
    composites: {}
  }

  type CompanyTagGetPayload<S extends boolean | null | undefined | CompanyTagDefaultArgs> = $Result.GetResult<Prisma.$CompanyTagPayload, S>

  type CompanyTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyTagCountAggregateInputType | true
    }

  export interface CompanyTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyTag'], meta: { name: 'CompanyTag' } }
    /**
     * Find zero or one CompanyTag that matches the filter.
     * @param {CompanyTagFindUniqueArgs} args - Arguments to find a CompanyTag
     * @example
     * // Get one CompanyTag
     * const companyTag = await prisma.companyTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyTagFindUniqueArgs>(args: SelectSubset<T, CompanyTagFindUniqueArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyTagFindUniqueOrThrowArgs} args - Arguments to find a CompanyTag
     * @example
     * // Get one CompanyTag
     * const companyTag = await prisma.companyTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyTagFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagFindFirstArgs} args - Arguments to find a CompanyTag
     * @example
     * // Get one CompanyTag
     * const companyTag = await prisma.companyTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyTagFindFirstArgs>(args?: SelectSubset<T, CompanyTagFindFirstArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagFindFirstOrThrowArgs} args - Arguments to find a CompanyTag
     * @example
     * // Get one CompanyTag
     * const companyTag = await prisma.companyTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyTagFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyTags
     * const companyTags = await prisma.companyTag.findMany()
     * 
     * // Get first 10 CompanyTags
     * const companyTags = await prisma.companyTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyTagWithIdOnly = await prisma.companyTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyTagFindManyArgs>(args?: SelectSubset<T, CompanyTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyTag.
     * @param {CompanyTagCreateArgs} args - Arguments to create a CompanyTag.
     * @example
     * // Create one CompanyTag
     * const CompanyTag = await prisma.companyTag.create({
     *   data: {
     *     // ... data to create a CompanyTag
     *   }
     * })
     * 
     */
    create<T extends CompanyTagCreateArgs>(args: SelectSubset<T, CompanyTagCreateArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyTags.
     * @param {CompanyTagCreateManyArgs} args - Arguments to create many CompanyTags.
     * @example
     * // Create many CompanyTags
     * const companyTag = await prisma.companyTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyTagCreateManyArgs>(args?: SelectSubset<T, CompanyTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyTags and returns the data saved in the database.
     * @param {CompanyTagCreateManyAndReturnArgs} args - Arguments to create many CompanyTags.
     * @example
     * // Create many CompanyTags
     * const companyTag = await prisma.companyTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyTags and only return the `id`
     * const companyTagWithIdOnly = await prisma.companyTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyTagCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyTag.
     * @param {CompanyTagDeleteArgs} args - Arguments to delete one CompanyTag.
     * @example
     * // Delete one CompanyTag
     * const CompanyTag = await prisma.companyTag.delete({
     *   where: {
     *     // ... filter to delete one CompanyTag
     *   }
     * })
     * 
     */
    delete<T extends CompanyTagDeleteArgs>(args: SelectSubset<T, CompanyTagDeleteArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyTag.
     * @param {CompanyTagUpdateArgs} args - Arguments to update one CompanyTag.
     * @example
     * // Update one CompanyTag
     * const companyTag = await prisma.companyTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyTagUpdateArgs>(args: SelectSubset<T, CompanyTagUpdateArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyTags.
     * @param {CompanyTagDeleteManyArgs} args - Arguments to filter CompanyTags to delete.
     * @example
     * // Delete a few CompanyTags
     * const { count } = await prisma.companyTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyTagDeleteManyArgs>(args?: SelectSubset<T, CompanyTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyTags
     * const companyTag = await prisma.companyTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyTagUpdateManyArgs>(args: SelectSubset<T, CompanyTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyTags and returns the data updated in the database.
     * @param {CompanyTagUpdateManyAndReturnArgs} args - Arguments to update many CompanyTags.
     * @example
     * // Update many CompanyTags
     * const companyTag = await prisma.companyTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyTags and only return the `id`
     * const companyTagWithIdOnly = await prisma.companyTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyTagUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyTag.
     * @param {CompanyTagUpsertArgs} args - Arguments to update or create a CompanyTag.
     * @example
     * // Update or create a CompanyTag
     * const companyTag = await prisma.companyTag.upsert({
     *   create: {
     *     // ... data to create a CompanyTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyTag we want to update
     *   }
     * })
     */
    upsert<T extends CompanyTagUpsertArgs>(args: SelectSubset<T, CompanyTagUpsertArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagCountArgs} args - Arguments to filter CompanyTags to count.
     * @example
     * // Count the number of CompanyTags
     * const count = await prisma.companyTag.count({
     *   where: {
     *     // ... the filter for the CompanyTags we want to count
     *   }
     * })
    **/
    count<T extends CompanyTagCountArgs>(
      args?: Subset<T, CompanyTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyTagAggregateArgs>(args: Subset<T, CompanyTagAggregateArgs>): Prisma.PrismaPromise<GetCompanyTagAggregateType<T>>

    /**
     * Group by CompanyTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyTagGroupByArgs['orderBy'] }
        : { orderBy?: CompanyTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyTag model
   */
  readonly fields: CompanyTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyTag model
   */
  interface CompanyTagFieldRefs {
    readonly id: FieldRef<"CompanyTag", 'Int'>
    readonly label: FieldRef<"CompanyTag", 'String'>
    readonly companyId: FieldRef<"CompanyTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CompanyTag findUnique
   */
  export type CompanyTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter, which CompanyTag to fetch.
     */
    where: CompanyTagWhereUniqueInput
  }

  /**
   * CompanyTag findUniqueOrThrow
   */
  export type CompanyTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter, which CompanyTag to fetch.
     */
    where: CompanyTagWhereUniqueInput
  }

  /**
   * CompanyTag findFirst
   */
  export type CompanyTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter, which CompanyTag to fetch.
     */
    where?: CompanyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyTags to fetch.
     */
    orderBy?: CompanyTagOrderByWithRelationInput | CompanyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyTags.
     */
    cursor?: CompanyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyTags.
     */
    distinct?: CompanyTagScalarFieldEnum | CompanyTagScalarFieldEnum[]
  }

  /**
   * CompanyTag findFirstOrThrow
   */
  export type CompanyTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter, which CompanyTag to fetch.
     */
    where?: CompanyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyTags to fetch.
     */
    orderBy?: CompanyTagOrderByWithRelationInput | CompanyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyTags.
     */
    cursor?: CompanyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyTags.
     */
    distinct?: CompanyTagScalarFieldEnum | CompanyTagScalarFieldEnum[]
  }

  /**
   * CompanyTag findMany
   */
  export type CompanyTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter, which CompanyTags to fetch.
     */
    where?: CompanyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyTags to fetch.
     */
    orderBy?: CompanyTagOrderByWithRelationInput | CompanyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyTags.
     */
    cursor?: CompanyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyTags.
     */
    skip?: number
    distinct?: CompanyTagScalarFieldEnum | CompanyTagScalarFieldEnum[]
  }

  /**
   * CompanyTag create
   */
  export type CompanyTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyTag.
     */
    data: XOR<CompanyTagCreateInput, CompanyTagUncheckedCreateInput>
  }

  /**
   * CompanyTag createMany
   */
  export type CompanyTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyTags.
     */
    data: CompanyTagCreateManyInput | CompanyTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyTag createManyAndReturn
   */
  export type CompanyTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyTags.
     */
    data: CompanyTagCreateManyInput | CompanyTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyTag update
   */
  export type CompanyTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyTag.
     */
    data: XOR<CompanyTagUpdateInput, CompanyTagUncheckedUpdateInput>
    /**
     * Choose, which CompanyTag to update.
     */
    where: CompanyTagWhereUniqueInput
  }

  /**
   * CompanyTag updateMany
   */
  export type CompanyTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyTags.
     */
    data: XOR<CompanyTagUpdateManyMutationInput, CompanyTagUncheckedUpdateManyInput>
    /**
     * Filter which CompanyTags to update
     */
    where?: CompanyTagWhereInput
    /**
     * Limit how many CompanyTags to update.
     */
    limit?: number
  }

  /**
   * CompanyTag updateManyAndReturn
   */
  export type CompanyTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * The data used to update CompanyTags.
     */
    data: XOR<CompanyTagUpdateManyMutationInput, CompanyTagUncheckedUpdateManyInput>
    /**
     * Filter which CompanyTags to update
     */
    where?: CompanyTagWhereInput
    /**
     * Limit how many CompanyTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyTag upsert
   */
  export type CompanyTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyTag to update in case it exists.
     */
    where: CompanyTagWhereUniqueInput
    /**
     * In case the CompanyTag found by the `where` argument doesn't exist, create a new CompanyTag with this data.
     */
    create: XOR<CompanyTagCreateInput, CompanyTagUncheckedCreateInput>
    /**
     * In case the CompanyTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyTagUpdateInput, CompanyTagUncheckedUpdateInput>
  }

  /**
   * CompanyTag delete
   */
  export type CompanyTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter which CompanyTag to delete.
     */
    where: CompanyTagWhereUniqueInput
  }

  /**
   * CompanyTag deleteMany
   */
  export type CompanyTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyTags to delete
     */
    where?: CompanyTagWhereInput
    /**
     * Limit how many CompanyTags to delete.
     */
    limit?: number
  }

  /**
   * CompanyTag without action
   */
  export type CompanyTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
  }


  /**
   * Model ToolTag
   */

  export type AggregateToolTag = {
    _count: ToolTagCountAggregateOutputType | null
    _avg: ToolTagAvgAggregateOutputType | null
    _sum: ToolTagSumAggregateOutputType | null
    _min: ToolTagMinAggregateOutputType | null
    _max: ToolTagMaxAggregateOutputType | null
  }

  export type ToolTagAvgAggregateOutputType = {
    id: number | null
    toolId: number | null
  }

  export type ToolTagSumAggregateOutputType = {
    id: number | null
    toolId: number | null
  }

  export type ToolTagMinAggregateOutputType = {
    id: number | null
    label: string | null
    toolId: number | null
  }

  export type ToolTagMaxAggregateOutputType = {
    id: number | null
    label: string | null
    toolId: number | null
  }

  export type ToolTagCountAggregateOutputType = {
    id: number
    label: number
    toolId: number
    _all: number
  }


  export type ToolTagAvgAggregateInputType = {
    id?: true
    toolId?: true
  }

  export type ToolTagSumAggregateInputType = {
    id?: true
    toolId?: true
  }

  export type ToolTagMinAggregateInputType = {
    id?: true
    label?: true
    toolId?: true
  }

  export type ToolTagMaxAggregateInputType = {
    id?: true
    label?: true
    toolId?: true
  }

  export type ToolTagCountAggregateInputType = {
    id?: true
    label?: true
    toolId?: true
    _all?: true
  }

  export type ToolTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolTag to aggregate.
     */
    where?: ToolTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolTags to fetch.
     */
    orderBy?: ToolTagOrderByWithRelationInput | ToolTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToolTags
    **/
    _count?: true | ToolTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolTagMaxAggregateInputType
  }

  export type GetToolTagAggregateType<T extends ToolTagAggregateArgs> = {
        [P in keyof T & keyof AggregateToolTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToolTag[P]>
      : GetScalarType<T[P], AggregateToolTag[P]>
  }




  export type ToolTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolTagWhereInput
    orderBy?: ToolTagOrderByWithAggregationInput | ToolTagOrderByWithAggregationInput[]
    by: ToolTagScalarFieldEnum[] | ToolTagScalarFieldEnum
    having?: ToolTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolTagCountAggregateInputType | true
    _avg?: ToolTagAvgAggregateInputType
    _sum?: ToolTagSumAggregateInputType
    _min?: ToolTagMinAggregateInputType
    _max?: ToolTagMaxAggregateInputType
  }

  export type ToolTagGroupByOutputType = {
    id: number
    label: string
    toolId: number
    _count: ToolTagCountAggregateOutputType | null
    _avg: ToolTagAvgAggregateOutputType | null
    _sum: ToolTagSumAggregateOutputType | null
    _min: ToolTagMinAggregateOutputType | null
    _max: ToolTagMaxAggregateOutputType | null
  }

  type GetToolTagGroupByPayload<T extends ToolTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolTagGroupByOutputType[P]>
            : GetScalarType<T[P], ToolTagGroupByOutputType[P]>
        }
      >
    >


  export type ToolTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    toolId?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolTag"]>

  export type ToolTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    toolId?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolTag"]>

  export type ToolTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    toolId?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolTag"]>

  export type ToolTagSelectScalar = {
    id?: boolean
    label?: boolean
    toolId?: boolean
  }

  export type ToolTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "toolId", ExtArgs["result"]["toolTag"]>
  export type ToolTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type ToolTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type ToolTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }

  export type $ToolTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToolTag"
    objects: {
      tool: Prisma.$ToolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      toolId: number
    }, ExtArgs["result"]["toolTag"]>
    composites: {}
  }

  type ToolTagGetPayload<S extends boolean | null | undefined | ToolTagDefaultArgs> = $Result.GetResult<Prisma.$ToolTagPayload, S>

  type ToolTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolTagCountAggregateInputType | true
    }

  export interface ToolTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToolTag'], meta: { name: 'ToolTag' } }
    /**
     * Find zero or one ToolTag that matches the filter.
     * @param {ToolTagFindUniqueArgs} args - Arguments to find a ToolTag
     * @example
     * // Get one ToolTag
     * const toolTag = await prisma.toolTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolTagFindUniqueArgs>(args: SelectSubset<T, ToolTagFindUniqueArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToolTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolTagFindUniqueOrThrowArgs} args - Arguments to find a ToolTag
     * @example
     * // Get one ToolTag
     * const toolTag = await prisma.toolTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagFindFirstArgs} args - Arguments to find a ToolTag
     * @example
     * // Get one ToolTag
     * const toolTag = await prisma.toolTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolTagFindFirstArgs>(args?: SelectSubset<T, ToolTagFindFirstArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagFindFirstOrThrowArgs} args - Arguments to find a ToolTag
     * @example
     * // Get one ToolTag
     * const toolTag = await prisma.toolTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToolTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToolTags
     * const toolTags = await prisma.toolTag.findMany()
     * 
     * // Get first 10 ToolTags
     * const toolTags = await prisma.toolTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolTagWithIdOnly = await prisma.toolTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToolTagFindManyArgs>(args?: SelectSubset<T, ToolTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToolTag.
     * @param {ToolTagCreateArgs} args - Arguments to create a ToolTag.
     * @example
     * // Create one ToolTag
     * const ToolTag = await prisma.toolTag.create({
     *   data: {
     *     // ... data to create a ToolTag
     *   }
     * })
     * 
     */
    create<T extends ToolTagCreateArgs>(args: SelectSubset<T, ToolTagCreateArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToolTags.
     * @param {ToolTagCreateManyArgs} args - Arguments to create many ToolTags.
     * @example
     * // Create many ToolTags
     * const toolTag = await prisma.toolTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolTagCreateManyArgs>(args?: SelectSubset<T, ToolTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToolTags and returns the data saved in the database.
     * @param {ToolTagCreateManyAndReturnArgs} args - Arguments to create many ToolTags.
     * @example
     * // Create many ToolTags
     * const toolTag = await prisma.toolTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToolTags and only return the `id`
     * const toolTagWithIdOnly = await prisma.toolTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToolTag.
     * @param {ToolTagDeleteArgs} args - Arguments to delete one ToolTag.
     * @example
     * // Delete one ToolTag
     * const ToolTag = await prisma.toolTag.delete({
     *   where: {
     *     // ... filter to delete one ToolTag
     *   }
     * })
     * 
     */
    delete<T extends ToolTagDeleteArgs>(args: SelectSubset<T, ToolTagDeleteArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToolTag.
     * @param {ToolTagUpdateArgs} args - Arguments to update one ToolTag.
     * @example
     * // Update one ToolTag
     * const toolTag = await prisma.toolTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolTagUpdateArgs>(args: SelectSubset<T, ToolTagUpdateArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToolTags.
     * @param {ToolTagDeleteManyArgs} args - Arguments to filter ToolTags to delete.
     * @example
     * // Delete a few ToolTags
     * const { count } = await prisma.toolTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolTagDeleteManyArgs>(args?: SelectSubset<T, ToolTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToolTags
     * const toolTag = await prisma.toolTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolTagUpdateManyArgs>(args: SelectSubset<T, ToolTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolTags and returns the data updated in the database.
     * @param {ToolTagUpdateManyAndReturnArgs} args - Arguments to update many ToolTags.
     * @example
     * // Update many ToolTags
     * const toolTag = await prisma.toolTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToolTags and only return the `id`
     * const toolTagWithIdOnly = await prisma.toolTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToolTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToolTag.
     * @param {ToolTagUpsertArgs} args - Arguments to update or create a ToolTag.
     * @example
     * // Update or create a ToolTag
     * const toolTag = await prisma.toolTag.upsert({
     *   create: {
     *     // ... data to create a ToolTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToolTag we want to update
     *   }
     * })
     */
    upsert<T extends ToolTagUpsertArgs>(args: SelectSubset<T, ToolTagUpsertArgs<ExtArgs>>): Prisma__ToolTagClient<$Result.GetResult<Prisma.$ToolTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToolTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagCountArgs} args - Arguments to filter ToolTags to count.
     * @example
     * // Count the number of ToolTags
     * const count = await prisma.toolTag.count({
     *   where: {
     *     // ... the filter for the ToolTags we want to count
     *   }
     * })
    **/
    count<T extends ToolTagCountArgs>(
      args?: Subset<T, ToolTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToolTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ToolTagAggregateArgs>(args: Subset<T, ToolTagAggregateArgs>): Prisma.PrismaPromise<GetToolTagAggregateType<T>>

    /**
     * Group by ToolTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ToolTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolTagGroupByArgs['orderBy'] }
        : { orderBy?: ToolTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ToolTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToolTag model
   */
  readonly fields: ToolTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToolTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ToolTag model
   */
  interface ToolTagFieldRefs {
    readonly id: FieldRef<"ToolTag", 'Int'>
    readonly label: FieldRef<"ToolTag", 'String'>
    readonly toolId: FieldRef<"ToolTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ToolTag findUnique
   */
  export type ToolTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter, which ToolTag to fetch.
     */
    where: ToolTagWhereUniqueInput
  }

  /**
   * ToolTag findUniqueOrThrow
   */
  export type ToolTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter, which ToolTag to fetch.
     */
    where: ToolTagWhereUniqueInput
  }

  /**
   * ToolTag findFirst
   */
  export type ToolTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter, which ToolTag to fetch.
     */
    where?: ToolTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolTags to fetch.
     */
    orderBy?: ToolTagOrderByWithRelationInput | ToolTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolTags.
     */
    cursor?: ToolTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolTags.
     */
    distinct?: ToolTagScalarFieldEnum | ToolTagScalarFieldEnum[]
  }

  /**
   * ToolTag findFirstOrThrow
   */
  export type ToolTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter, which ToolTag to fetch.
     */
    where?: ToolTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolTags to fetch.
     */
    orderBy?: ToolTagOrderByWithRelationInput | ToolTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolTags.
     */
    cursor?: ToolTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolTags.
     */
    distinct?: ToolTagScalarFieldEnum | ToolTagScalarFieldEnum[]
  }

  /**
   * ToolTag findMany
   */
  export type ToolTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter, which ToolTags to fetch.
     */
    where?: ToolTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolTags to fetch.
     */
    orderBy?: ToolTagOrderByWithRelationInput | ToolTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToolTags.
     */
    cursor?: ToolTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolTags.
     */
    skip?: number
    distinct?: ToolTagScalarFieldEnum | ToolTagScalarFieldEnum[]
  }

  /**
   * ToolTag create
   */
  export type ToolTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ToolTag.
     */
    data: XOR<ToolTagCreateInput, ToolTagUncheckedCreateInput>
  }

  /**
   * ToolTag createMany
   */
  export type ToolTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToolTags.
     */
    data: ToolTagCreateManyInput | ToolTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToolTag createManyAndReturn
   */
  export type ToolTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * The data used to create many ToolTags.
     */
    data: ToolTagCreateManyInput | ToolTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolTag update
   */
  export type ToolTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ToolTag.
     */
    data: XOR<ToolTagUpdateInput, ToolTagUncheckedUpdateInput>
    /**
     * Choose, which ToolTag to update.
     */
    where: ToolTagWhereUniqueInput
  }

  /**
   * ToolTag updateMany
   */
  export type ToolTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToolTags.
     */
    data: XOR<ToolTagUpdateManyMutationInput, ToolTagUncheckedUpdateManyInput>
    /**
     * Filter which ToolTags to update
     */
    where?: ToolTagWhereInput
    /**
     * Limit how many ToolTags to update.
     */
    limit?: number
  }

  /**
   * ToolTag updateManyAndReturn
   */
  export type ToolTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * The data used to update ToolTags.
     */
    data: XOR<ToolTagUpdateManyMutationInput, ToolTagUncheckedUpdateManyInput>
    /**
     * Filter which ToolTags to update
     */
    where?: ToolTagWhereInput
    /**
     * Limit how many ToolTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolTag upsert
   */
  export type ToolTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ToolTag to update in case it exists.
     */
    where: ToolTagWhereUniqueInput
    /**
     * In case the ToolTag found by the `where` argument doesn't exist, create a new ToolTag with this data.
     */
    create: XOR<ToolTagCreateInput, ToolTagUncheckedCreateInput>
    /**
     * In case the ToolTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolTagUpdateInput, ToolTagUncheckedUpdateInput>
  }

  /**
   * ToolTag delete
   */
  export type ToolTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
    /**
     * Filter which ToolTag to delete.
     */
    where: ToolTagWhereUniqueInput
  }

  /**
   * ToolTag deleteMany
   */
  export type ToolTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolTags to delete
     */
    where?: ToolTagWhereInput
    /**
     * Limit how many ToolTags to delete.
     */
    limit?: number
  }

  /**
   * ToolTag without action
   */
  export type ToolTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolTag
     */
    select?: ToolTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolTag
     */
    omit?: ToolTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const IndustryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IndustryScalarFieldEnum = (typeof IndustryScalarFieldEnum)[keyof typeof IndustryScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    websiteUrl: 'websiteUrl',
    foundedYear: 'foundedYear',
    totalFundingUsd: 'totalFundingUsd',
    approachSummary: 'approachSummary',
    modelType: 'modelType',
    industryId: 'industryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const AcquisitionScalarFieldEnum: {
    id: 'id',
    acquiringCompanyId: 'acquiringCompanyId',
    acquiredCompanyId: 'acquiredCompanyId',
    amountUsd: 'amountUsd',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AcquisitionScalarFieldEnum = (typeof AcquisitionScalarFieldEnum)[keyof typeof AcquisitionScalarFieldEnum]


  export const ToolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    websiteUrl: 'websiteUrl',
    isOpenSource: 'isOpenSource',
    useCase: 'useCase',
    companyId: 'companyId',
    industryId: 'industryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ToolScalarFieldEnum = (typeof ToolScalarFieldEnum)[keyof typeof ToolScalarFieldEnum]


  export const FundingRoundScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    roundType: 'roundType',
    amountUsd: 'amountUsd',
    date: 'date',
    leadInvestor: 'leadInvestor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FundingRoundScalarFieldEnum = (typeof FundingRoundScalarFieldEnum)[keyof typeof FundingRoundScalarFieldEnum]


  export const UseCaseCardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    exampleCompanyId: 'exampleCompanyId',
    industryId: 'industryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UseCaseCardScalarFieldEnum = (typeof UseCaseCardScalarFieldEnum)[keyof typeof UseCaseCardScalarFieldEnum]


  export const CompanyTagScalarFieldEnum: {
    id: 'id',
    label: 'label',
    companyId: 'companyId'
  };

  export type CompanyTagScalarFieldEnum = (typeof CompanyTagScalarFieldEnum)[keyof typeof CompanyTagScalarFieldEnum]


  export const ToolTagScalarFieldEnum: {
    id: 'id',
    label: 'label',
    toolId: 'toolId'
  };

  export type ToolTagScalarFieldEnum = (typeof ToolTagScalarFieldEnum)[keyof typeof ToolTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ModelType'
   */
  export type EnumModelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelType'>
    


  /**
   * Reference to a field of type 'ModelType[]'
   */
  export type ListEnumModelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type IndustryWhereInput = {
    AND?: IndustryWhereInput | IndustryWhereInput[]
    OR?: IndustryWhereInput[]
    NOT?: IndustryWhereInput | IndustryWhereInput[]
    id?: IntFilter<"Industry"> | number
    name?: StringFilter<"Industry"> | string
    slug?: StringFilter<"Industry"> | string
    description?: StringFilter<"Industry"> | string
    createdAt?: DateTimeFilter<"Industry"> | Date | string
    updatedAt?: DateTimeFilter<"Industry"> | Date | string
    companies?: CompanyListRelationFilter
    tools?: ToolListRelationFilter
    useCases?: UseCaseCardListRelationFilter
  }

  export type IndustryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companies?: CompanyOrderByRelationAggregateInput
    tools?: ToolOrderByRelationAggregateInput
    useCases?: UseCaseCardOrderByRelationAggregateInput
  }

  export type IndustryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: IndustryWhereInput | IndustryWhereInput[]
    OR?: IndustryWhereInput[]
    NOT?: IndustryWhereInput | IndustryWhereInput[]
    description?: StringFilter<"Industry"> | string
    createdAt?: DateTimeFilter<"Industry"> | Date | string
    updatedAt?: DateTimeFilter<"Industry"> | Date | string
    companies?: CompanyListRelationFilter
    tools?: ToolListRelationFilter
    useCases?: UseCaseCardListRelationFilter
  }, "id" | "name" | "slug">

  export type IndustryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IndustryCountOrderByAggregateInput
    _avg?: IndustryAvgOrderByAggregateInput
    _max?: IndustryMaxOrderByAggregateInput
    _min?: IndustryMinOrderByAggregateInput
    _sum?: IndustrySumOrderByAggregateInput
  }

  export type IndustryScalarWhereWithAggregatesInput = {
    AND?: IndustryScalarWhereWithAggregatesInput | IndustryScalarWhereWithAggregatesInput[]
    OR?: IndustryScalarWhereWithAggregatesInput[]
    NOT?: IndustryScalarWhereWithAggregatesInput | IndustryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Industry"> | number
    name?: StringWithAggregatesFilter<"Industry"> | string
    slug?: StringWithAggregatesFilter<"Industry"> | string
    description?: StringWithAggregatesFilter<"Industry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Industry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Industry"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    slug?: StringFilter<"Company"> | string
    description?: StringFilter<"Company"> | string
    websiteUrl?: StringFilter<"Company"> | string
    foundedYear?: IntNullableFilter<"Company"> | number | null
    totalFundingUsd?: IntNullableFilter<"Company"> | number | null
    approachSummary?: StringFilter<"Company"> | string
    modelType?: EnumModelTypeFilter<"Company"> | $Enums.ModelType
    industryId?: IntFilter<"Company"> | number
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    industry?: XOR<IndustryScalarRelationFilter, IndustryWhereInput>
    tools?: ToolListRelationFilter
    fundingRounds?: FundingRoundListRelationFilter
    acquisitions?: AcquisitionListRelationFilter
    useCaseCards?: UseCaseCardListRelationFilter
    acquiredBy?: XOR<AcquisitionNullableScalarRelationFilter, AcquisitionWhereInput> | null
    tags?: CompanyTagListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    foundedYear?: SortOrderInput | SortOrder
    totalFundingUsd?: SortOrderInput | SortOrder
    approachSummary?: SortOrder
    modelType?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    industry?: IndustryOrderByWithRelationInput
    tools?: ToolOrderByRelationAggregateInput
    fundingRounds?: FundingRoundOrderByRelationAggregateInput
    acquisitions?: AcquisitionOrderByRelationAggregateInput
    useCaseCards?: UseCaseCardOrderByRelationAggregateInput
    acquiredBy?: AcquisitionOrderByWithRelationInput
    tags?: CompanyTagOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    description?: StringFilter<"Company"> | string
    websiteUrl?: StringFilter<"Company"> | string
    foundedYear?: IntNullableFilter<"Company"> | number | null
    totalFundingUsd?: IntNullableFilter<"Company"> | number | null
    approachSummary?: StringFilter<"Company"> | string
    modelType?: EnumModelTypeFilter<"Company"> | $Enums.ModelType
    industryId?: IntFilter<"Company"> | number
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    industry?: XOR<IndustryScalarRelationFilter, IndustryWhereInput>
    tools?: ToolListRelationFilter
    fundingRounds?: FundingRoundListRelationFilter
    acquisitions?: AcquisitionListRelationFilter
    useCaseCards?: UseCaseCardListRelationFilter
    acquiredBy?: XOR<AcquisitionNullableScalarRelationFilter, AcquisitionWhereInput> | null
    tags?: CompanyTagListRelationFilter
  }, "id" | "name" | "slug">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    foundedYear?: SortOrderInput | SortOrder
    totalFundingUsd?: SortOrderInput | SortOrder
    approachSummary?: SortOrder
    modelType?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    slug?: StringWithAggregatesFilter<"Company"> | string
    description?: StringWithAggregatesFilter<"Company"> | string
    websiteUrl?: StringWithAggregatesFilter<"Company"> | string
    foundedYear?: IntNullableWithAggregatesFilter<"Company"> | number | null
    totalFundingUsd?: IntNullableWithAggregatesFilter<"Company"> | number | null
    approachSummary?: StringWithAggregatesFilter<"Company"> | string
    modelType?: EnumModelTypeWithAggregatesFilter<"Company"> | $Enums.ModelType
    industryId?: IntWithAggregatesFilter<"Company"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type AcquisitionWhereInput = {
    AND?: AcquisitionWhereInput | AcquisitionWhereInput[]
    OR?: AcquisitionWhereInput[]
    NOT?: AcquisitionWhereInput | AcquisitionWhereInput[]
    id?: IntFilter<"Acquisition"> | number
    acquiringCompanyId?: IntFilter<"Acquisition"> | number
    acquiredCompanyId?: IntFilter<"Acquisition"> | number
    amountUsd?: IntNullableFilter<"Acquisition"> | number | null
    date?: DateTimeFilter<"Acquisition"> | Date | string
    createdAt?: DateTimeFilter<"Acquisition"> | Date | string
    updatedAt?: DateTimeFilter<"Acquisition"> | Date | string
    acquiringCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    acquiredCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type AcquisitionOrderByWithRelationInput = {
    id?: SortOrder
    acquiringCompanyId?: SortOrder
    acquiredCompanyId?: SortOrder
    amountUsd?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acquiringCompany?: CompanyOrderByWithRelationInput
    acquiredCompany?: CompanyOrderByWithRelationInput
  }

  export type AcquisitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    acquiredCompanyId?: number
    AND?: AcquisitionWhereInput | AcquisitionWhereInput[]
    OR?: AcquisitionWhereInput[]
    NOT?: AcquisitionWhereInput | AcquisitionWhereInput[]
    acquiringCompanyId?: IntFilter<"Acquisition"> | number
    amountUsd?: IntNullableFilter<"Acquisition"> | number | null
    date?: DateTimeFilter<"Acquisition"> | Date | string
    createdAt?: DateTimeFilter<"Acquisition"> | Date | string
    updatedAt?: DateTimeFilter<"Acquisition"> | Date | string
    acquiringCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    acquiredCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "acquiredCompanyId">

  export type AcquisitionOrderByWithAggregationInput = {
    id?: SortOrder
    acquiringCompanyId?: SortOrder
    acquiredCompanyId?: SortOrder
    amountUsd?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AcquisitionCountOrderByAggregateInput
    _avg?: AcquisitionAvgOrderByAggregateInput
    _max?: AcquisitionMaxOrderByAggregateInput
    _min?: AcquisitionMinOrderByAggregateInput
    _sum?: AcquisitionSumOrderByAggregateInput
  }

  export type AcquisitionScalarWhereWithAggregatesInput = {
    AND?: AcquisitionScalarWhereWithAggregatesInput | AcquisitionScalarWhereWithAggregatesInput[]
    OR?: AcquisitionScalarWhereWithAggregatesInput[]
    NOT?: AcquisitionScalarWhereWithAggregatesInput | AcquisitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Acquisition"> | number
    acquiringCompanyId?: IntWithAggregatesFilter<"Acquisition"> | number
    acquiredCompanyId?: IntWithAggregatesFilter<"Acquisition"> | number
    amountUsd?: IntNullableWithAggregatesFilter<"Acquisition"> | number | null
    date?: DateTimeWithAggregatesFilter<"Acquisition"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Acquisition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Acquisition"> | Date | string
  }

  export type ToolWhereInput = {
    AND?: ToolWhereInput | ToolWhereInput[]
    OR?: ToolWhereInput[]
    NOT?: ToolWhereInput | ToolWhereInput[]
    id?: IntFilter<"Tool"> | number
    name?: StringFilter<"Tool"> | string
    description?: StringFilter<"Tool"> | string
    websiteUrl?: StringFilter<"Tool"> | string
    isOpenSource?: BoolFilter<"Tool"> | boolean
    useCase?: StringFilter<"Tool"> | string
    companyId?: IntNullableFilter<"Tool"> | number | null
    industryId?: IntNullableFilter<"Tool"> | number | null
    createdAt?: DateTimeFilter<"Tool"> | Date | string
    updatedAt?: DateTimeFilter<"Tool"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    industry?: XOR<IndustryNullableScalarRelationFilter, IndustryWhereInput> | null
    tags?: ToolTagListRelationFilter
  }

  export type ToolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    isOpenSource?: SortOrder
    useCase?: SortOrder
    companyId?: SortOrderInput | SortOrder
    industryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    industry?: IndustryOrderByWithRelationInput
    tags?: ToolTagOrderByRelationAggregateInput
  }

  export type ToolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ToolWhereInput | ToolWhereInput[]
    OR?: ToolWhereInput[]
    NOT?: ToolWhereInput | ToolWhereInput[]
    description?: StringFilter<"Tool"> | string
    websiteUrl?: StringFilter<"Tool"> | string
    isOpenSource?: BoolFilter<"Tool"> | boolean
    useCase?: StringFilter<"Tool"> | string
    companyId?: IntNullableFilter<"Tool"> | number | null
    industryId?: IntNullableFilter<"Tool"> | number | null
    createdAt?: DateTimeFilter<"Tool"> | Date | string
    updatedAt?: DateTimeFilter<"Tool"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    industry?: XOR<IndustryNullableScalarRelationFilter, IndustryWhereInput> | null
    tags?: ToolTagListRelationFilter
  }, "id" | "name">

  export type ToolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    isOpenSource?: SortOrder
    useCase?: SortOrder
    companyId?: SortOrderInput | SortOrder
    industryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ToolCountOrderByAggregateInput
    _avg?: ToolAvgOrderByAggregateInput
    _max?: ToolMaxOrderByAggregateInput
    _min?: ToolMinOrderByAggregateInput
    _sum?: ToolSumOrderByAggregateInput
  }

  export type ToolScalarWhereWithAggregatesInput = {
    AND?: ToolScalarWhereWithAggregatesInput | ToolScalarWhereWithAggregatesInput[]
    OR?: ToolScalarWhereWithAggregatesInput[]
    NOT?: ToolScalarWhereWithAggregatesInput | ToolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tool"> | number
    name?: StringWithAggregatesFilter<"Tool"> | string
    description?: StringWithAggregatesFilter<"Tool"> | string
    websiteUrl?: StringWithAggregatesFilter<"Tool"> | string
    isOpenSource?: BoolWithAggregatesFilter<"Tool"> | boolean
    useCase?: StringWithAggregatesFilter<"Tool"> | string
    companyId?: IntNullableWithAggregatesFilter<"Tool"> | number | null
    industryId?: IntNullableWithAggregatesFilter<"Tool"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Tool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tool"> | Date | string
  }

  export type FundingRoundWhereInput = {
    AND?: FundingRoundWhereInput | FundingRoundWhereInput[]
    OR?: FundingRoundWhereInput[]
    NOT?: FundingRoundWhereInput | FundingRoundWhereInput[]
    id?: IntFilter<"FundingRound"> | number
    companyId?: IntFilter<"FundingRound"> | number
    roundType?: StringFilter<"FundingRound"> | string
    amountUsd?: IntFilter<"FundingRound"> | number
    date?: DateTimeFilter<"FundingRound"> | Date | string
    leadInvestor?: StringNullableFilter<"FundingRound"> | string | null
    createdAt?: DateTimeFilter<"FundingRound"> | Date | string
    updatedAt?: DateTimeFilter<"FundingRound"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type FundingRoundOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    roundType?: SortOrder
    amountUsd?: SortOrder
    date?: SortOrder
    leadInvestor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type FundingRoundWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FundingRoundWhereInput | FundingRoundWhereInput[]
    OR?: FundingRoundWhereInput[]
    NOT?: FundingRoundWhereInput | FundingRoundWhereInput[]
    companyId?: IntFilter<"FundingRound"> | number
    roundType?: StringFilter<"FundingRound"> | string
    amountUsd?: IntFilter<"FundingRound"> | number
    date?: DateTimeFilter<"FundingRound"> | Date | string
    leadInvestor?: StringNullableFilter<"FundingRound"> | string | null
    createdAt?: DateTimeFilter<"FundingRound"> | Date | string
    updatedAt?: DateTimeFilter<"FundingRound"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type FundingRoundOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    roundType?: SortOrder
    amountUsd?: SortOrder
    date?: SortOrder
    leadInvestor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FundingRoundCountOrderByAggregateInput
    _avg?: FundingRoundAvgOrderByAggregateInput
    _max?: FundingRoundMaxOrderByAggregateInput
    _min?: FundingRoundMinOrderByAggregateInput
    _sum?: FundingRoundSumOrderByAggregateInput
  }

  export type FundingRoundScalarWhereWithAggregatesInput = {
    AND?: FundingRoundScalarWhereWithAggregatesInput | FundingRoundScalarWhereWithAggregatesInput[]
    OR?: FundingRoundScalarWhereWithAggregatesInput[]
    NOT?: FundingRoundScalarWhereWithAggregatesInput | FundingRoundScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FundingRound"> | number
    companyId?: IntWithAggregatesFilter<"FundingRound"> | number
    roundType?: StringWithAggregatesFilter<"FundingRound"> | string
    amountUsd?: IntWithAggregatesFilter<"FundingRound"> | number
    date?: DateTimeWithAggregatesFilter<"FundingRound"> | Date | string
    leadInvestor?: StringNullableWithAggregatesFilter<"FundingRound"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FundingRound"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FundingRound"> | Date | string
  }

  export type UseCaseCardWhereInput = {
    AND?: UseCaseCardWhereInput | UseCaseCardWhereInput[]
    OR?: UseCaseCardWhereInput[]
    NOT?: UseCaseCardWhereInput | UseCaseCardWhereInput[]
    id?: IntFilter<"UseCaseCard"> | number
    title?: StringFilter<"UseCaseCard"> | string
    description?: StringFilter<"UseCaseCard"> | string
    exampleCompanyId?: IntNullableFilter<"UseCaseCard"> | number | null
    industryId?: IntFilter<"UseCaseCard"> | number
    createdAt?: DateTimeFilter<"UseCaseCard"> | Date | string
    updatedAt?: DateTimeFilter<"UseCaseCard"> | Date | string
    exampleCompany?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    industry?: XOR<IndustryScalarRelationFilter, IndustryWhereInput>
  }

  export type UseCaseCardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    exampleCompanyId?: SortOrderInput | SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exampleCompany?: CompanyOrderByWithRelationInput
    industry?: IndustryOrderByWithRelationInput
  }

  export type UseCaseCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UseCaseCardWhereInput | UseCaseCardWhereInput[]
    OR?: UseCaseCardWhereInput[]
    NOT?: UseCaseCardWhereInput | UseCaseCardWhereInput[]
    title?: StringFilter<"UseCaseCard"> | string
    description?: StringFilter<"UseCaseCard"> | string
    exampleCompanyId?: IntNullableFilter<"UseCaseCard"> | number | null
    industryId?: IntFilter<"UseCaseCard"> | number
    createdAt?: DateTimeFilter<"UseCaseCard"> | Date | string
    updatedAt?: DateTimeFilter<"UseCaseCard"> | Date | string
    exampleCompany?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    industry?: XOR<IndustryScalarRelationFilter, IndustryWhereInput>
  }, "id">

  export type UseCaseCardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    exampleCompanyId?: SortOrderInput | SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UseCaseCardCountOrderByAggregateInput
    _avg?: UseCaseCardAvgOrderByAggregateInput
    _max?: UseCaseCardMaxOrderByAggregateInput
    _min?: UseCaseCardMinOrderByAggregateInput
    _sum?: UseCaseCardSumOrderByAggregateInput
  }

  export type UseCaseCardScalarWhereWithAggregatesInput = {
    AND?: UseCaseCardScalarWhereWithAggregatesInput | UseCaseCardScalarWhereWithAggregatesInput[]
    OR?: UseCaseCardScalarWhereWithAggregatesInput[]
    NOT?: UseCaseCardScalarWhereWithAggregatesInput | UseCaseCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UseCaseCard"> | number
    title?: StringWithAggregatesFilter<"UseCaseCard"> | string
    description?: StringWithAggregatesFilter<"UseCaseCard"> | string
    exampleCompanyId?: IntNullableWithAggregatesFilter<"UseCaseCard"> | number | null
    industryId?: IntWithAggregatesFilter<"UseCaseCard"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UseCaseCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UseCaseCard"> | Date | string
  }

  export type CompanyTagWhereInput = {
    AND?: CompanyTagWhereInput | CompanyTagWhereInput[]
    OR?: CompanyTagWhereInput[]
    NOT?: CompanyTagWhereInput | CompanyTagWhereInput[]
    id?: IntFilter<"CompanyTag"> | number
    label?: StringFilter<"CompanyTag"> | string
    companyId?: IntFilter<"CompanyTag"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CompanyTagOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    companyId?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CompanyTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyTagWhereInput | CompanyTagWhereInput[]
    OR?: CompanyTagWhereInput[]
    NOT?: CompanyTagWhereInput | CompanyTagWhereInput[]
    label?: StringFilter<"CompanyTag"> | string
    companyId?: IntFilter<"CompanyTag"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type CompanyTagOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    companyId?: SortOrder
    _count?: CompanyTagCountOrderByAggregateInput
    _avg?: CompanyTagAvgOrderByAggregateInput
    _max?: CompanyTagMaxOrderByAggregateInput
    _min?: CompanyTagMinOrderByAggregateInput
    _sum?: CompanyTagSumOrderByAggregateInput
  }

  export type CompanyTagScalarWhereWithAggregatesInput = {
    AND?: CompanyTagScalarWhereWithAggregatesInput | CompanyTagScalarWhereWithAggregatesInput[]
    OR?: CompanyTagScalarWhereWithAggregatesInput[]
    NOT?: CompanyTagScalarWhereWithAggregatesInput | CompanyTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanyTag"> | number
    label?: StringWithAggregatesFilter<"CompanyTag"> | string
    companyId?: IntWithAggregatesFilter<"CompanyTag"> | number
  }

  export type ToolTagWhereInput = {
    AND?: ToolTagWhereInput | ToolTagWhereInput[]
    OR?: ToolTagWhereInput[]
    NOT?: ToolTagWhereInput | ToolTagWhereInput[]
    id?: IntFilter<"ToolTag"> | number
    label?: StringFilter<"ToolTag"> | string
    toolId?: IntFilter<"ToolTag"> | number
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }

  export type ToolTagOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    toolId?: SortOrder
    tool?: ToolOrderByWithRelationInput
  }

  export type ToolTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ToolTagWhereInput | ToolTagWhereInput[]
    OR?: ToolTagWhereInput[]
    NOT?: ToolTagWhereInput | ToolTagWhereInput[]
    label?: StringFilter<"ToolTag"> | string
    toolId?: IntFilter<"ToolTag"> | number
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }, "id">

  export type ToolTagOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    toolId?: SortOrder
    _count?: ToolTagCountOrderByAggregateInput
    _avg?: ToolTagAvgOrderByAggregateInput
    _max?: ToolTagMaxOrderByAggregateInput
    _min?: ToolTagMinOrderByAggregateInput
    _sum?: ToolTagSumOrderByAggregateInput
  }

  export type ToolTagScalarWhereWithAggregatesInput = {
    AND?: ToolTagScalarWhereWithAggregatesInput | ToolTagScalarWhereWithAggregatesInput[]
    OR?: ToolTagScalarWhereWithAggregatesInput[]
    NOT?: ToolTagScalarWhereWithAggregatesInput | ToolTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ToolTag"> | number
    label?: StringWithAggregatesFilter<"ToolTag"> | string
    toolId?: IntWithAggregatesFilter<"ToolTag"> | number
  }

  export type IndustryCreateInput = {
    name: string
    slug: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutIndustryInput
    tools?: ToolCreateNestedManyWithoutIndustryInput
    useCases?: UseCaseCardCreateNestedManyWithoutIndustryInput
  }

  export type IndustryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutIndustryInput
    tools?: ToolUncheckedCreateNestedManyWithoutIndustryInput
    useCases?: UseCaseCardUncheckedCreateNestedManyWithoutIndustryInput
  }

  export type IndustryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutIndustryNestedInput
    tools?: ToolUpdateManyWithoutIndustryNestedInput
    useCases?: UseCaseCardUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutIndustryNestedInput
    tools?: ToolUncheckedUpdateManyWithoutIndustryNestedInput
    useCases?: UseCaseCardUncheckedUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryCreateManyInput = {
    id?: number
    name: string
    slug: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndustryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutCompaniesInput
    tools?: ToolCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionUncheckedCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardUncheckedCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionUncheckedCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutCompaniesNestedInput
    tools?: ToolUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUncheckedUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUncheckedUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUncheckedUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcquisitionCreateInput = {
    amountUsd?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    acquiringCompany: CompanyCreateNestedOneWithoutAcquisitionsInput
    acquiredCompany: CompanyCreateNestedOneWithoutAcquiredByInput
  }

  export type AcquisitionUncheckedCreateInput = {
    id?: number
    acquiringCompanyId: number
    acquiredCompanyId: number
    amountUsd?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcquisitionUpdateInput = {
    amountUsd?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acquiringCompany?: CompanyUpdateOneRequiredWithoutAcquisitionsNestedInput
    acquiredCompany?: CompanyUpdateOneRequiredWithoutAcquiredByNestedInput
  }

  export type AcquisitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquiringCompanyId?: IntFieldUpdateOperationsInput | number
    acquiredCompanyId?: IntFieldUpdateOperationsInput | number
    amountUsd?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcquisitionCreateManyInput = {
    id?: number
    acquiringCompanyId: number
    acquiredCompanyId: number
    amountUsd?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcquisitionUpdateManyMutationInput = {
    amountUsd?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcquisitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquiringCompanyId?: IntFieldUpdateOperationsInput | number
    acquiredCompanyId?: IntFieldUpdateOperationsInput | number
    amountUsd?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCreateInput = {
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutToolsInput
    industry?: IndustryCreateNestedOneWithoutToolsInput
    tags?: ToolTagCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    companyId?: number | null
    industryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ToolTagUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutToolsNestedInput
    industry?: IndustryUpdateOneWithoutToolsNestedInput
    tags?: ToolTagUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    industryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ToolTagUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolCreateManyInput = {
    id?: number
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    companyId?: number | null
    industryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    industryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingRoundCreateInput = {
    roundType: string
    amountUsd: number
    date: Date | string
    leadInvestor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutFundingRoundsInput
  }

  export type FundingRoundUncheckedCreateInput = {
    id?: number
    companyId: number
    roundType: string
    amountUsd: number
    date: Date | string
    leadInvestor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundingRoundUpdateInput = {
    roundType?: StringFieldUpdateOperationsInput | string
    amountUsd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leadInvestor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutFundingRoundsNestedInput
  }

  export type FundingRoundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    roundType?: StringFieldUpdateOperationsInput | string
    amountUsd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leadInvestor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingRoundCreateManyInput = {
    id?: number
    companyId: number
    roundType: string
    amountUsd: number
    date: Date | string
    leadInvestor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundingRoundUpdateManyMutationInput = {
    roundType?: StringFieldUpdateOperationsInput | string
    amountUsd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leadInvestor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingRoundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    roundType?: StringFieldUpdateOperationsInput | string
    amountUsd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leadInvestor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UseCaseCardCreateInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    exampleCompany?: CompanyCreateNestedOneWithoutUseCaseCardsInput
    industry: IndustryCreateNestedOneWithoutUseCasesInput
  }

  export type UseCaseCardUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    exampleCompanyId?: number | null
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UseCaseCardUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exampleCompany?: CompanyUpdateOneWithoutUseCaseCardsNestedInput
    industry?: IndustryUpdateOneRequiredWithoutUseCasesNestedInput
  }

  export type UseCaseCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exampleCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UseCaseCardCreateManyInput = {
    id?: number
    title: string
    description: string
    exampleCompanyId?: number | null
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UseCaseCardUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UseCaseCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exampleCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyTagCreateInput = {
    label: string
    company: CompanyCreateNestedOneWithoutTagsInput
  }

  export type CompanyTagUncheckedCreateInput = {
    id?: number
    label: string
    companyId: number
  }

  export type CompanyTagUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutTagsNestedInput
  }

  export type CompanyTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyTagCreateManyInput = {
    id?: number
    label: string
    companyId: number
  }

  export type CompanyTagUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type ToolTagCreateInput = {
    label: string
    tool: ToolCreateNestedOneWithoutTagsInput
  }

  export type ToolTagUncheckedCreateInput = {
    id?: number
    label: string
    toolId: number
  }

  export type ToolTagUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    tool?: ToolUpdateOneRequiredWithoutTagsNestedInput
  }

  export type ToolTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    toolId?: IntFieldUpdateOperationsInput | number
  }

  export type ToolTagCreateManyInput = {
    id?: number
    label: string
    toolId: number
  }

  export type ToolTagUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ToolTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    toolId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type ToolListRelationFilter = {
    every?: ToolWhereInput
    some?: ToolWhereInput
    none?: ToolWhereInput
  }

  export type UseCaseCardListRelationFilter = {
    every?: UseCaseCardWhereInput
    some?: UseCaseCardWhereInput
    none?: UseCaseCardWhereInput
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UseCaseCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndustryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndustryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IndustryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndustryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndustrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumModelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeFilter<$PrismaModel> | $Enums.ModelType
  }

  export type IndustryScalarRelationFilter = {
    is?: IndustryWhereInput
    isNot?: IndustryWhereInput
  }

  export type FundingRoundListRelationFilter = {
    every?: FundingRoundWhereInput
    some?: FundingRoundWhereInput
    none?: FundingRoundWhereInput
  }

  export type AcquisitionListRelationFilter = {
    every?: AcquisitionWhereInput
    some?: AcquisitionWhereInput
    none?: AcquisitionWhereInput
  }

  export type AcquisitionNullableScalarRelationFilter = {
    is?: AcquisitionWhereInput | null
    isNot?: AcquisitionWhereInput | null
  }

  export type CompanyTagListRelationFilter = {
    every?: CompanyTagWhereInput
    some?: CompanyTagWhereInput
    none?: CompanyTagWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FundingRoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcquisitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    foundedYear?: SortOrder
    totalFundingUsd?: SortOrder
    approachSummary?: SortOrder
    modelType?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    foundedYear?: SortOrder
    totalFundingUsd?: SortOrder
    industryId?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    foundedYear?: SortOrder
    totalFundingUsd?: SortOrder
    approachSummary?: SortOrder
    modelType?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    foundedYear?: SortOrder
    totalFundingUsd?: SortOrder
    approachSummary?: SortOrder
    modelType?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
    foundedYear?: SortOrder
    totalFundingUsd?: SortOrder
    industryId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumModelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeWithAggregatesFilter<$PrismaModel> | $Enums.ModelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelTypeFilter<$PrismaModel>
    _max?: NestedEnumModelTypeFilter<$PrismaModel>
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type AcquisitionCountOrderByAggregateInput = {
    id?: SortOrder
    acquiringCompanyId?: SortOrder
    acquiredCompanyId?: SortOrder
    amountUsd?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcquisitionAvgOrderByAggregateInput = {
    id?: SortOrder
    acquiringCompanyId?: SortOrder
    acquiredCompanyId?: SortOrder
    amountUsd?: SortOrder
  }

  export type AcquisitionMaxOrderByAggregateInput = {
    id?: SortOrder
    acquiringCompanyId?: SortOrder
    acquiredCompanyId?: SortOrder
    amountUsd?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcquisitionMinOrderByAggregateInput = {
    id?: SortOrder
    acquiringCompanyId?: SortOrder
    acquiredCompanyId?: SortOrder
    amountUsd?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcquisitionSumOrderByAggregateInput = {
    id?: SortOrder
    acquiringCompanyId?: SortOrder
    acquiredCompanyId?: SortOrder
    amountUsd?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type IndustryNullableScalarRelationFilter = {
    is?: IndustryWhereInput | null
    isNot?: IndustryWhereInput | null
  }

  export type ToolTagListRelationFilter = {
    every?: ToolTagWhereInput
    some?: ToolTagWhereInput
    none?: ToolTagWhereInput
  }

  export type ToolTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    isOpenSource?: SortOrder
    useCase?: SortOrder
    companyId?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToolAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    industryId?: SortOrder
  }

  export type ToolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    isOpenSource?: SortOrder
    useCase?: SortOrder
    companyId?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    isOpenSource?: SortOrder
    useCase?: SortOrder
    companyId?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToolSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    industryId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FundingRoundCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    roundType?: SortOrder
    amountUsd?: SortOrder
    date?: SortOrder
    leadInvestor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundingRoundAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    amountUsd?: SortOrder
  }

  export type FundingRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    roundType?: SortOrder
    amountUsd?: SortOrder
    date?: SortOrder
    leadInvestor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundingRoundMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    roundType?: SortOrder
    amountUsd?: SortOrder
    date?: SortOrder
    leadInvestor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundingRoundSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    amountUsd?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UseCaseCardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    exampleCompanyId?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UseCaseCardAvgOrderByAggregateInput = {
    id?: SortOrder
    exampleCompanyId?: SortOrder
    industryId?: SortOrder
  }

  export type UseCaseCardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    exampleCompanyId?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UseCaseCardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    exampleCompanyId?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UseCaseCardSumOrderByAggregateInput = {
    id?: SortOrder
    exampleCompanyId?: SortOrder
    industryId?: SortOrder
  }

  export type CompanyTagCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyTagAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyTagMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyTagMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyTagSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type ToolScalarRelationFilter = {
    is?: ToolWhereInput
    isNot?: ToolWhereInput
  }

  export type ToolTagCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    toolId?: SortOrder
  }

  export type ToolTagAvgOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
  }

  export type ToolTagMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    toolId?: SortOrder
  }

  export type ToolTagMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    toolId?: SortOrder
  }

  export type ToolTagSumOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
  }

  export type CompanyCreateNestedManyWithoutIndustryInput = {
    create?: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput> | CompanyCreateWithoutIndustryInput[] | CompanyUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutIndustryInput | CompanyCreateOrConnectWithoutIndustryInput[]
    createMany?: CompanyCreateManyIndustryInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type ToolCreateNestedManyWithoutIndustryInput = {
    create?: XOR<ToolCreateWithoutIndustryInput, ToolUncheckedCreateWithoutIndustryInput> | ToolCreateWithoutIndustryInput[] | ToolUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutIndustryInput | ToolCreateOrConnectWithoutIndustryInput[]
    createMany?: ToolCreateManyIndustryInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type UseCaseCardCreateNestedManyWithoutIndustryInput = {
    create?: XOR<UseCaseCardCreateWithoutIndustryInput, UseCaseCardUncheckedCreateWithoutIndustryInput> | UseCaseCardCreateWithoutIndustryInput[] | UseCaseCardUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: UseCaseCardCreateOrConnectWithoutIndustryInput | UseCaseCardCreateOrConnectWithoutIndustryInput[]
    createMany?: UseCaseCardCreateManyIndustryInputEnvelope
    connect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutIndustryInput = {
    create?: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput> | CompanyCreateWithoutIndustryInput[] | CompanyUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutIndustryInput | CompanyCreateOrConnectWithoutIndustryInput[]
    createMany?: CompanyCreateManyIndustryInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type ToolUncheckedCreateNestedManyWithoutIndustryInput = {
    create?: XOR<ToolCreateWithoutIndustryInput, ToolUncheckedCreateWithoutIndustryInput> | ToolCreateWithoutIndustryInput[] | ToolUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutIndustryInput | ToolCreateOrConnectWithoutIndustryInput[]
    createMany?: ToolCreateManyIndustryInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type UseCaseCardUncheckedCreateNestedManyWithoutIndustryInput = {
    create?: XOR<UseCaseCardCreateWithoutIndustryInput, UseCaseCardUncheckedCreateWithoutIndustryInput> | UseCaseCardCreateWithoutIndustryInput[] | UseCaseCardUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: UseCaseCardCreateOrConnectWithoutIndustryInput | UseCaseCardCreateOrConnectWithoutIndustryInput[]
    createMany?: UseCaseCardCreateManyIndustryInputEnvelope
    connect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompanyUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput> | CompanyCreateWithoutIndustryInput[] | CompanyUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutIndustryInput | CompanyCreateOrConnectWithoutIndustryInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutIndustryInput | CompanyUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: CompanyCreateManyIndustryInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutIndustryInput | CompanyUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutIndustryInput | CompanyUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type ToolUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<ToolCreateWithoutIndustryInput, ToolUncheckedCreateWithoutIndustryInput> | ToolCreateWithoutIndustryInput[] | ToolUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutIndustryInput | ToolCreateOrConnectWithoutIndustryInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutIndustryInput | ToolUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: ToolCreateManyIndustryInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutIndustryInput | ToolUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutIndustryInput | ToolUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type UseCaseCardUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<UseCaseCardCreateWithoutIndustryInput, UseCaseCardUncheckedCreateWithoutIndustryInput> | UseCaseCardCreateWithoutIndustryInput[] | UseCaseCardUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: UseCaseCardCreateOrConnectWithoutIndustryInput | UseCaseCardCreateOrConnectWithoutIndustryInput[]
    upsert?: UseCaseCardUpsertWithWhereUniqueWithoutIndustryInput | UseCaseCardUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: UseCaseCardCreateManyIndustryInputEnvelope
    set?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    disconnect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    delete?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    connect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    update?: UseCaseCardUpdateWithWhereUniqueWithoutIndustryInput | UseCaseCardUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: UseCaseCardUpdateManyWithWhereWithoutIndustryInput | UseCaseCardUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: UseCaseCardScalarWhereInput | UseCaseCardScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUncheckedUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput> | CompanyCreateWithoutIndustryInput[] | CompanyUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutIndustryInput | CompanyCreateOrConnectWithoutIndustryInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutIndustryInput | CompanyUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: CompanyCreateManyIndustryInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutIndustryInput | CompanyUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutIndustryInput | CompanyUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type ToolUncheckedUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<ToolCreateWithoutIndustryInput, ToolUncheckedCreateWithoutIndustryInput> | ToolCreateWithoutIndustryInput[] | ToolUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutIndustryInput | ToolCreateOrConnectWithoutIndustryInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutIndustryInput | ToolUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: ToolCreateManyIndustryInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutIndustryInput | ToolUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutIndustryInput | ToolUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type UseCaseCardUncheckedUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<UseCaseCardCreateWithoutIndustryInput, UseCaseCardUncheckedCreateWithoutIndustryInput> | UseCaseCardCreateWithoutIndustryInput[] | UseCaseCardUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: UseCaseCardCreateOrConnectWithoutIndustryInput | UseCaseCardCreateOrConnectWithoutIndustryInput[]
    upsert?: UseCaseCardUpsertWithWhereUniqueWithoutIndustryInput | UseCaseCardUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: UseCaseCardCreateManyIndustryInputEnvelope
    set?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    disconnect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    delete?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    connect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    update?: UseCaseCardUpdateWithWhereUniqueWithoutIndustryInput | UseCaseCardUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: UseCaseCardUpdateManyWithWhereWithoutIndustryInput | UseCaseCardUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: UseCaseCardScalarWhereInput | UseCaseCardScalarWhereInput[]
  }

  export type IndustryCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<IndustryCreateWithoutCompaniesInput, IndustryUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutCompaniesInput
    connect?: IndustryWhereUniqueInput
  }

  export type ToolCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ToolCreateWithoutCompanyInput, ToolUncheckedCreateWithoutCompanyInput> | ToolCreateWithoutCompanyInput[] | ToolUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCompanyInput | ToolCreateOrConnectWithoutCompanyInput[]
    createMany?: ToolCreateManyCompanyInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type FundingRoundCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput> | FundingRoundCreateWithoutCompanyInput[] | FundingRoundUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutCompanyInput | FundingRoundCreateOrConnectWithoutCompanyInput[]
    createMany?: FundingRoundCreateManyCompanyInputEnvelope
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
  }

  export type AcquisitionCreateNestedManyWithoutAcquiringCompanyInput = {
    create?: XOR<AcquisitionCreateWithoutAcquiringCompanyInput, AcquisitionUncheckedCreateWithoutAcquiringCompanyInput> | AcquisitionCreateWithoutAcquiringCompanyInput[] | AcquisitionUncheckedCreateWithoutAcquiringCompanyInput[]
    connectOrCreate?: AcquisitionCreateOrConnectWithoutAcquiringCompanyInput | AcquisitionCreateOrConnectWithoutAcquiringCompanyInput[]
    createMany?: AcquisitionCreateManyAcquiringCompanyInputEnvelope
    connect?: AcquisitionWhereUniqueInput | AcquisitionWhereUniqueInput[]
  }

  export type UseCaseCardCreateNestedManyWithoutExampleCompanyInput = {
    create?: XOR<UseCaseCardCreateWithoutExampleCompanyInput, UseCaseCardUncheckedCreateWithoutExampleCompanyInput> | UseCaseCardCreateWithoutExampleCompanyInput[] | UseCaseCardUncheckedCreateWithoutExampleCompanyInput[]
    connectOrCreate?: UseCaseCardCreateOrConnectWithoutExampleCompanyInput | UseCaseCardCreateOrConnectWithoutExampleCompanyInput[]
    createMany?: UseCaseCardCreateManyExampleCompanyInputEnvelope
    connect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
  }

  export type AcquisitionCreateNestedOneWithoutAcquiredCompanyInput = {
    create?: XOR<AcquisitionCreateWithoutAcquiredCompanyInput, AcquisitionUncheckedCreateWithoutAcquiredCompanyInput>
    connectOrCreate?: AcquisitionCreateOrConnectWithoutAcquiredCompanyInput
    connect?: AcquisitionWhereUniqueInput
  }

  export type CompanyTagCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyTagCreateWithoutCompanyInput, CompanyTagUncheckedCreateWithoutCompanyInput> | CompanyTagCreateWithoutCompanyInput[] | CompanyTagUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyTagCreateOrConnectWithoutCompanyInput | CompanyTagCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyTagCreateManyCompanyInputEnvelope
    connect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
  }

  export type ToolUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ToolCreateWithoutCompanyInput, ToolUncheckedCreateWithoutCompanyInput> | ToolCreateWithoutCompanyInput[] | ToolUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCompanyInput | ToolCreateOrConnectWithoutCompanyInput[]
    createMany?: ToolCreateManyCompanyInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type FundingRoundUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput> | FundingRoundCreateWithoutCompanyInput[] | FundingRoundUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutCompanyInput | FundingRoundCreateOrConnectWithoutCompanyInput[]
    createMany?: FundingRoundCreateManyCompanyInputEnvelope
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
  }

  export type AcquisitionUncheckedCreateNestedManyWithoutAcquiringCompanyInput = {
    create?: XOR<AcquisitionCreateWithoutAcquiringCompanyInput, AcquisitionUncheckedCreateWithoutAcquiringCompanyInput> | AcquisitionCreateWithoutAcquiringCompanyInput[] | AcquisitionUncheckedCreateWithoutAcquiringCompanyInput[]
    connectOrCreate?: AcquisitionCreateOrConnectWithoutAcquiringCompanyInput | AcquisitionCreateOrConnectWithoutAcquiringCompanyInput[]
    createMany?: AcquisitionCreateManyAcquiringCompanyInputEnvelope
    connect?: AcquisitionWhereUniqueInput | AcquisitionWhereUniqueInput[]
  }

  export type UseCaseCardUncheckedCreateNestedManyWithoutExampleCompanyInput = {
    create?: XOR<UseCaseCardCreateWithoutExampleCompanyInput, UseCaseCardUncheckedCreateWithoutExampleCompanyInput> | UseCaseCardCreateWithoutExampleCompanyInput[] | UseCaseCardUncheckedCreateWithoutExampleCompanyInput[]
    connectOrCreate?: UseCaseCardCreateOrConnectWithoutExampleCompanyInput | UseCaseCardCreateOrConnectWithoutExampleCompanyInput[]
    createMany?: UseCaseCardCreateManyExampleCompanyInputEnvelope
    connect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
  }

  export type AcquisitionUncheckedCreateNestedOneWithoutAcquiredCompanyInput = {
    create?: XOR<AcquisitionCreateWithoutAcquiredCompanyInput, AcquisitionUncheckedCreateWithoutAcquiredCompanyInput>
    connectOrCreate?: AcquisitionCreateOrConnectWithoutAcquiredCompanyInput
    connect?: AcquisitionWhereUniqueInput
  }

  export type CompanyTagUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyTagCreateWithoutCompanyInput, CompanyTagUncheckedCreateWithoutCompanyInput> | CompanyTagCreateWithoutCompanyInput[] | CompanyTagUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyTagCreateOrConnectWithoutCompanyInput | CompanyTagCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyTagCreateManyCompanyInputEnvelope
    connect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumModelTypeFieldUpdateOperationsInput = {
    set?: $Enums.ModelType
  }

  export type IndustryUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<IndustryCreateWithoutCompaniesInput, IndustryUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutCompaniesInput
    upsert?: IndustryUpsertWithoutCompaniesInput
    connect?: IndustryWhereUniqueInput
    update?: XOR<XOR<IndustryUpdateToOneWithWhereWithoutCompaniesInput, IndustryUpdateWithoutCompaniesInput>, IndustryUncheckedUpdateWithoutCompaniesInput>
  }

  export type ToolUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ToolCreateWithoutCompanyInput, ToolUncheckedCreateWithoutCompanyInput> | ToolCreateWithoutCompanyInput[] | ToolUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCompanyInput | ToolCreateOrConnectWithoutCompanyInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutCompanyInput | ToolUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ToolCreateManyCompanyInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutCompanyInput | ToolUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutCompanyInput | ToolUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type FundingRoundUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput> | FundingRoundCreateWithoutCompanyInput[] | FundingRoundUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutCompanyInput | FundingRoundCreateOrConnectWithoutCompanyInput[]
    upsert?: FundingRoundUpsertWithWhereUniqueWithoutCompanyInput | FundingRoundUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FundingRoundCreateManyCompanyInputEnvelope
    set?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    disconnect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    delete?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    update?: FundingRoundUpdateWithWhereUniqueWithoutCompanyInput | FundingRoundUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FundingRoundUpdateManyWithWhereWithoutCompanyInput | FundingRoundUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FundingRoundScalarWhereInput | FundingRoundScalarWhereInput[]
  }

  export type AcquisitionUpdateManyWithoutAcquiringCompanyNestedInput = {
    create?: XOR<AcquisitionCreateWithoutAcquiringCompanyInput, AcquisitionUncheckedCreateWithoutAcquiringCompanyInput> | AcquisitionCreateWithoutAcquiringCompanyInput[] | AcquisitionUncheckedCreateWithoutAcquiringCompanyInput[]
    connectOrCreate?: AcquisitionCreateOrConnectWithoutAcquiringCompanyInput | AcquisitionCreateOrConnectWithoutAcquiringCompanyInput[]
    upsert?: AcquisitionUpsertWithWhereUniqueWithoutAcquiringCompanyInput | AcquisitionUpsertWithWhereUniqueWithoutAcquiringCompanyInput[]
    createMany?: AcquisitionCreateManyAcquiringCompanyInputEnvelope
    set?: AcquisitionWhereUniqueInput | AcquisitionWhereUniqueInput[]
    disconnect?: AcquisitionWhereUniqueInput | AcquisitionWhereUniqueInput[]
    delete?: AcquisitionWhereUniqueInput | AcquisitionWhereUniqueInput[]
    connect?: AcquisitionWhereUniqueInput | AcquisitionWhereUniqueInput[]
    update?: AcquisitionUpdateWithWhereUniqueWithoutAcquiringCompanyInput | AcquisitionUpdateWithWhereUniqueWithoutAcquiringCompanyInput[]
    updateMany?: AcquisitionUpdateManyWithWhereWithoutAcquiringCompanyInput | AcquisitionUpdateManyWithWhereWithoutAcquiringCompanyInput[]
    deleteMany?: AcquisitionScalarWhereInput | AcquisitionScalarWhereInput[]
  }

  export type UseCaseCardUpdateManyWithoutExampleCompanyNestedInput = {
    create?: XOR<UseCaseCardCreateWithoutExampleCompanyInput, UseCaseCardUncheckedCreateWithoutExampleCompanyInput> | UseCaseCardCreateWithoutExampleCompanyInput[] | UseCaseCardUncheckedCreateWithoutExampleCompanyInput[]
    connectOrCreate?: UseCaseCardCreateOrConnectWithoutExampleCompanyInput | UseCaseCardCreateOrConnectWithoutExampleCompanyInput[]
    upsert?: UseCaseCardUpsertWithWhereUniqueWithoutExampleCompanyInput | UseCaseCardUpsertWithWhereUniqueWithoutExampleCompanyInput[]
    createMany?: UseCaseCardCreateManyExampleCompanyInputEnvelope
    set?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    disconnect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    delete?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    connect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    update?: UseCaseCardUpdateWithWhereUniqueWithoutExampleCompanyInput | UseCaseCardUpdateWithWhereUniqueWithoutExampleCompanyInput[]
    updateMany?: UseCaseCardUpdateManyWithWhereWithoutExampleCompanyInput | UseCaseCardUpdateManyWithWhereWithoutExampleCompanyInput[]
    deleteMany?: UseCaseCardScalarWhereInput | UseCaseCardScalarWhereInput[]
  }

  export type AcquisitionUpdateOneWithoutAcquiredCompanyNestedInput = {
    create?: XOR<AcquisitionCreateWithoutAcquiredCompanyInput, AcquisitionUncheckedCreateWithoutAcquiredCompanyInput>
    connectOrCreate?: AcquisitionCreateOrConnectWithoutAcquiredCompanyInput
    upsert?: AcquisitionUpsertWithoutAcquiredCompanyInput
    disconnect?: AcquisitionWhereInput | boolean
    delete?: AcquisitionWhereInput | boolean
    connect?: AcquisitionWhereUniqueInput
    update?: XOR<XOR<AcquisitionUpdateToOneWithWhereWithoutAcquiredCompanyInput, AcquisitionUpdateWithoutAcquiredCompanyInput>, AcquisitionUncheckedUpdateWithoutAcquiredCompanyInput>
  }

  export type CompanyTagUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyTagCreateWithoutCompanyInput, CompanyTagUncheckedCreateWithoutCompanyInput> | CompanyTagCreateWithoutCompanyInput[] | CompanyTagUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyTagCreateOrConnectWithoutCompanyInput | CompanyTagCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyTagUpsertWithWhereUniqueWithoutCompanyInput | CompanyTagUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyTagCreateManyCompanyInputEnvelope
    set?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    disconnect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    delete?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    connect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    update?: CompanyTagUpdateWithWhereUniqueWithoutCompanyInput | CompanyTagUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyTagUpdateManyWithWhereWithoutCompanyInput | CompanyTagUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyTagScalarWhereInput | CompanyTagScalarWhereInput[]
  }

  export type ToolUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ToolCreateWithoutCompanyInput, ToolUncheckedCreateWithoutCompanyInput> | ToolCreateWithoutCompanyInput[] | ToolUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCompanyInput | ToolCreateOrConnectWithoutCompanyInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutCompanyInput | ToolUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ToolCreateManyCompanyInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutCompanyInput | ToolUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutCompanyInput | ToolUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput> | FundingRoundCreateWithoutCompanyInput[] | FundingRoundUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutCompanyInput | FundingRoundCreateOrConnectWithoutCompanyInput[]
    upsert?: FundingRoundUpsertWithWhereUniqueWithoutCompanyInput | FundingRoundUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FundingRoundCreateManyCompanyInputEnvelope
    set?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    disconnect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    delete?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    update?: FundingRoundUpdateWithWhereUniqueWithoutCompanyInput | FundingRoundUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FundingRoundUpdateManyWithWhereWithoutCompanyInput | FundingRoundUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FundingRoundScalarWhereInput | FundingRoundScalarWhereInput[]
  }

  export type AcquisitionUncheckedUpdateManyWithoutAcquiringCompanyNestedInput = {
    create?: XOR<AcquisitionCreateWithoutAcquiringCompanyInput, AcquisitionUncheckedCreateWithoutAcquiringCompanyInput> | AcquisitionCreateWithoutAcquiringCompanyInput[] | AcquisitionUncheckedCreateWithoutAcquiringCompanyInput[]
    connectOrCreate?: AcquisitionCreateOrConnectWithoutAcquiringCompanyInput | AcquisitionCreateOrConnectWithoutAcquiringCompanyInput[]
    upsert?: AcquisitionUpsertWithWhereUniqueWithoutAcquiringCompanyInput | AcquisitionUpsertWithWhereUniqueWithoutAcquiringCompanyInput[]
    createMany?: AcquisitionCreateManyAcquiringCompanyInputEnvelope
    set?: AcquisitionWhereUniqueInput | AcquisitionWhereUniqueInput[]
    disconnect?: AcquisitionWhereUniqueInput | AcquisitionWhereUniqueInput[]
    delete?: AcquisitionWhereUniqueInput | AcquisitionWhereUniqueInput[]
    connect?: AcquisitionWhereUniqueInput | AcquisitionWhereUniqueInput[]
    update?: AcquisitionUpdateWithWhereUniqueWithoutAcquiringCompanyInput | AcquisitionUpdateWithWhereUniqueWithoutAcquiringCompanyInput[]
    updateMany?: AcquisitionUpdateManyWithWhereWithoutAcquiringCompanyInput | AcquisitionUpdateManyWithWhereWithoutAcquiringCompanyInput[]
    deleteMany?: AcquisitionScalarWhereInput | AcquisitionScalarWhereInput[]
  }

  export type UseCaseCardUncheckedUpdateManyWithoutExampleCompanyNestedInput = {
    create?: XOR<UseCaseCardCreateWithoutExampleCompanyInput, UseCaseCardUncheckedCreateWithoutExampleCompanyInput> | UseCaseCardCreateWithoutExampleCompanyInput[] | UseCaseCardUncheckedCreateWithoutExampleCompanyInput[]
    connectOrCreate?: UseCaseCardCreateOrConnectWithoutExampleCompanyInput | UseCaseCardCreateOrConnectWithoutExampleCompanyInput[]
    upsert?: UseCaseCardUpsertWithWhereUniqueWithoutExampleCompanyInput | UseCaseCardUpsertWithWhereUniqueWithoutExampleCompanyInput[]
    createMany?: UseCaseCardCreateManyExampleCompanyInputEnvelope
    set?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    disconnect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    delete?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    connect?: UseCaseCardWhereUniqueInput | UseCaseCardWhereUniqueInput[]
    update?: UseCaseCardUpdateWithWhereUniqueWithoutExampleCompanyInput | UseCaseCardUpdateWithWhereUniqueWithoutExampleCompanyInput[]
    updateMany?: UseCaseCardUpdateManyWithWhereWithoutExampleCompanyInput | UseCaseCardUpdateManyWithWhereWithoutExampleCompanyInput[]
    deleteMany?: UseCaseCardScalarWhereInput | UseCaseCardScalarWhereInput[]
  }

  export type AcquisitionUncheckedUpdateOneWithoutAcquiredCompanyNestedInput = {
    create?: XOR<AcquisitionCreateWithoutAcquiredCompanyInput, AcquisitionUncheckedCreateWithoutAcquiredCompanyInput>
    connectOrCreate?: AcquisitionCreateOrConnectWithoutAcquiredCompanyInput
    upsert?: AcquisitionUpsertWithoutAcquiredCompanyInput
    disconnect?: AcquisitionWhereInput | boolean
    delete?: AcquisitionWhereInput | boolean
    connect?: AcquisitionWhereUniqueInput
    update?: XOR<XOR<AcquisitionUpdateToOneWithWhereWithoutAcquiredCompanyInput, AcquisitionUpdateWithoutAcquiredCompanyInput>, AcquisitionUncheckedUpdateWithoutAcquiredCompanyInput>
  }

  export type CompanyTagUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyTagCreateWithoutCompanyInput, CompanyTagUncheckedCreateWithoutCompanyInput> | CompanyTagCreateWithoutCompanyInput[] | CompanyTagUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyTagCreateOrConnectWithoutCompanyInput | CompanyTagCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyTagUpsertWithWhereUniqueWithoutCompanyInput | CompanyTagUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyTagCreateManyCompanyInputEnvelope
    set?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    disconnect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    delete?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    connect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    update?: CompanyTagUpdateWithWhereUniqueWithoutCompanyInput | CompanyTagUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyTagUpdateManyWithWhereWithoutCompanyInput | CompanyTagUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyTagScalarWhereInput | CompanyTagScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutAcquisitionsInput = {
    create?: XOR<CompanyCreateWithoutAcquisitionsInput, CompanyUncheckedCreateWithoutAcquisitionsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAcquisitionsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutAcquiredByInput = {
    create?: XOR<CompanyCreateWithoutAcquiredByInput, CompanyUncheckedCreateWithoutAcquiredByInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAcquiredByInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutAcquisitionsNestedInput = {
    create?: XOR<CompanyCreateWithoutAcquisitionsInput, CompanyUncheckedCreateWithoutAcquisitionsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAcquisitionsInput
    upsert?: CompanyUpsertWithoutAcquisitionsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutAcquisitionsInput, CompanyUpdateWithoutAcquisitionsInput>, CompanyUncheckedUpdateWithoutAcquisitionsInput>
  }

  export type CompanyUpdateOneRequiredWithoutAcquiredByNestedInput = {
    create?: XOR<CompanyCreateWithoutAcquiredByInput, CompanyUncheckedCreateWithoutAcquiredByInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAcquiredByInput
    upsert?: CompanyUpsertWithoutAcquiredByInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutAcquiredByInput, CompanyUpdateWithoutAcquiredByInput>, CompanyUncheckedUpdateWithoutAcquiredByInput>
  }

  export type CompanyCreateNestedOneWithoutToolsInput = {
    create?: XOR<CompanyCreateWithoutToolsInput, CompanyUncheckedCreateWithoutToolsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutToolsInput
    connect?: CompanyWhereUniqueInput
  }

  export type IndustryCreateNestedOneWithoutToolsInput = {
    create?: XOR<IndustryCreateWithoutToolsInput, IndustryUncheckedCreateWithoutToolsInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutToolsInput
    connect?: IndustryWhereUniqueInput
  }

  export type ToolTagCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput> | ToolTagCreateWithoutToolInput[] | ToolTagUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutToolInput | ToolTagCreateOrConnectWithoutToolInput[]
    createMany?: ToolTagCreateManyToolInputEnvelope
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
  }

  export type ToolTagUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput> | ToolTagCreateWithoutToolInput[] | ToolTagUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutToolInput | ToolTagCreateOrConnectWithoutToolInput[]
    createMany?: ToolTagCreateManyToolInputEnvelope
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneWithoutToolsNestedInput = {
    create?: XOR<CompanyCreateWithoutToolsInput, CompanyUncheckedCreateWithoutToolsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutToolsInput
    upsert?: CompanyUpsertWithoutToolsInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutToolsInput, CompanyUpdateWithoutToolsInput>, CompanyUncheckedUpdateWithoutToolsInput>
  }

  export type IndustryUpdateOneWithoutToolsNestedInput = {
    create?: XOR<IndustryCreateWithoutToolsInput, IndustryUncheckedCreateWithoutToolsInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutToolsInput
    upsert?: IndustryUpsertWithoutToolsInput
    disconnect?: IndustryWhereInput | boolean
    delete?: IndustryWhereInput | boolean
    connect?: IndustryWhereUniqueInput
    update?: XOR<XOR<IndustryUpdateToOneWithWhereWithoutToolsInput, IndustryUpdateWithoutToolsInput>, IndustryUncheckedUpdateWithoutToolsInput>
  }

  export type ToolTagUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput> | ToolTagCreateWithoutToolInput[] | ToolTagUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutToolInput | ToolTagCreateOrConnectWithoutToolInput[]
    upsert?: ToolTagUpsertWithWhereUniqueWithoutToolInput | ToolTagUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolTagCreateManyToolInputEnvelope
    set?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    disconnect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    delete?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    update?: ToolTagUpdateWithWhereUniqueWithoutToolInput | ToolTagUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolTagUpdateManyWithWhereWithoutToolInput | ToolTagUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolTagScalarWhereInput | ToolTagScalarWhereInput[]
  }

  export type ToolTagUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput> | ToolTagCreateWithoutToolInput[] | ToolTagUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolTagCreateOrConnectWithoutToolInput | ToolTagCreateOrConnectWithoutToolInput[]
    upsert?: ToolTagUpsertWithWhereUniqueWithoutToolInput | ToolTagUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolTagCreateManyToolInputEnvelope
    set?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    disconnect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    delete?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    connect?: ToolTagWhereUniqueInput | ToolTagWhereUniqueInput[]
    update?: ToolTagUpdateWithWhereUniqueWithoutToolInput | ToolTagUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolTagUpdateManyWithWhereWithoutToolInput | ToolTagUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolTagScalarWhereInput | ToolTagScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutFundingRoundsInput = {
    create?: XOR<CompanyCreateWithoutFundingRoundsInput, CompanyUncheckedCreateWithoutFundingRoundsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFundingRoundsInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CompanyUpdateOneRequiredWithoutFundingRoundsNestedInput = {
    create?: XOR<CompanyCreateWithoutFundingRoundsInput, CompanyUncheckedCreateWithoutFundingRoundsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFundingRoundsInput
    upsert?: CompanyUpsertWithoutFundingRoundsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutFundingRoundsInput, CompanyUpdateWithoutFundingRoundsInput>, CompanyUncheckedUpdateWithoutFundingRoundsInput>
  }

  export type CompanyCreateNestedOneWithoutUseCaseCardsInput = {
    create?: XOR<CompanyCreateWithoutUseCaseCardsInput, CompanyUncheckedCreateWithoutUseCaseCardsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUseCaseCardsInput
    connect?: CompanyWhereUniqueInput
  }

  export type IndustryCreateNestedOneWithoutUseCasesInput = {
    create?: XOR<IndustryCreateWithoutUseCasesInput, IndustryUncheckedCreateWithoutUseCasesInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutUseCasesInput
    connect?: IndustryWhereUniqueInput
  }

  export type CompanyUpdateOneWithoutUseCaseCardsNestedInput = {
    create?: XOR<CompanyCreateWithoutUseCaseCardsInput, CompanyUncheckedCreateWithoutUseCaseCardsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUseCaseCardsInput
    upsert?: CompanyUpsertWithoutUseCaseCardsInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUseCaseCardsInput, CompanyUpdateWithoutUseCaseCardsInput>, CompanyUncheckedUpdateWithoutUseCaseCardsInput>
  }

  export type IndustryUpdateOneRequiredWithoutUseCasesNestedInput = {
    create?: XOR<IndustryCreateWithoutUseCasesInput, IndustryUncheckedCreateWithoutUseCasesInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutUseCasesInput
    upsert?: IndustryUpsertWithoutUseCasesInput
    connect?: IndustryWhereUniqueInput
    update?: XOR<XOR<IndustryUpdateToOneWithWhereWithoutUseCasesInput, IndustryUpdateWithoutUseCasesInput>, IndustryUncheckedUpdateWithoutUseCasesInput>
  }

  export type CompanyCreateNestedOneWithoutTagsInput = {
    create?: XOR<CompanyCreateWithoutTagsInput, CompanyUncheckedCreateWithoutTagsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTagsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<CompanyCreateWithoutTagsInput, CompanyUncheckedCreateWithoutTagsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTagsInput
    upsert?: CompanyUpsertWithoutTagsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutTagsInput, CompanyUpdateWithoutTagsInput>, CompanyUncheckedUpdateWithoutTagsInput>
  }

  export type ToolCreateNestedOneWithoutTagsInput = {
    create?: XOR<ToolCreateWithoutTagsInput, ToolUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutTagsInput
    connect?: ToolWhereUniqueInput
  }

  export type ToolUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ToolCreateWithoutTagsInput, ToolUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutTagsInput
    upsert?: ToolUpsertWithoutTagsInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutTagsInput, ToolUpdateWithoutTagsInput>, ToolUncheckedUpdateWithoutTagsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumModelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeFilter<$PrismaModel> | $Enums.ModelType
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumModelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeWithAggregatesFilter<$PrismaModel> | $Enums.ModelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelTypeFilter<$PrismaModel>
    _max?: NestedEnumModelTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CompanyCreateWithoutIndustryInput = {
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutIndustryInput = {
    id?: number
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionUncheckedCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardUncheckedCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionUncheckedCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutIndustryInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput>
  }

  export type CompanyCreateManyIndustryInputEnvelope = {
    data: CompanyCreateManyIndustryInput | CompanyCreateManyIndustryInput[]
    skipDuplicates?: boolean
  }

  export type ToolCreateWithoutIndustryInput = {
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutToolsInput
    tags?: ToolTagCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutIndustryInput = {
    id?: number
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    companyId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ToolTagUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutIndustryInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutIndustryInput, ToolUncheckedCreateWithoutIndustryInput>
  }

  export type ToolCreateManyIndustryInputEnvelope = {
    data: ToolCreateManyIndustryInput | ToolCreateManyIndustryInput[]
    skipDuplicates?: boolean
  }

  export type UseCaseCardCreateWithoutIndustryInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    exampleCompany?: CompanyCreateNestedOneWithoutUseCaseCardsInput
  }

  export type UseCaseCardUncheckedCreateWithoutIndustryInput = {
    id?: number
    title: string
    description: string
    exampleCompanyId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UseCaseCardCreateOrConnectWithoutIndustryInput = {
    where: UseCaseCardWhereUniqueInput
    create: XOR<UseCaseCardCreateWithoutIndustryInput, UseCaseCardUncheckedCreateWithoutIndustryInput>
  }

  export type UseCaseCardCreateManyIndustryInputEnvelope = {
    data: UseCaseCardCreateManyIndustryInput | UseCaseCardCreateManyIndustryInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithWhereUniqueWithoutIndustryInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutIndustryInput, CompanyUncheckedUpdateWithoutIndustryInput>
    create: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutIndustryInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutIndustryInput, CompanyUncheckedUpdateWithoutIndustryInput>
  }

  export type CompanyUpdateManyWithWhereWithoutIndustryInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutIndustryInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    slug?: StringFilter<"Company"> | string
    description?: StringFilter<"Company"> | string
    websiteUrl?: StringFilter<"Company"> | string
    foundedYear?: IntNullableFilter<"Company"> | number | null
    totalFundingUsd?: IntNullableFilter<"Company"> | number | null
    approachSummary?: StringFilter<"Company"> | string
    modelType?: EnumModelTypeFilter<"Company"> | $Enums.ModelType
    industryId?: IntFilter<"Company"> | number
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
  }

  export type ToolUpsertWithWhereUniqueWithoutIndustryInput = {
    where: ToolWhereUniqueInput
    update: XOR<ToolUpdateWithoutIndustryInput, ToolUncheckedUpdateWithoutIndustryInput>
    create: XOR<ToolCreateWithoutIndustryInput, ToolUncheckedCreateWithoutIndustryInput>
  }

  export type ToolUpdateWithWhereUniqueWithoutIndustryInput = {
    where: ToolWhereUniqueInput
    data: XOR<ToolUpdateWithoutIndustryInput, ToolUncheckedUpdateWithoutIndustryInput>
  }

  export type ToolUpdateManyWithWhereWithoutIndustryInput = {
    where: ToolScalarWhereInput
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyWithoutIndustryInput>
  }

  export type ToolScalarWhereInput = {
    AND?: ToolScalarWhereInput | ToolScalarWhereInput[]
    OR?: ToolScalarWhereInput[]
    NOT?: ToolScalarWhereInput | ToolScalarWhereInput[]
    id?: IntFilter<"Tool"> | number
    name?: StringFilter<"Tool"> | string
    description?: StringFilter<"Tool"> | string
    websiteUrl?: StringFilter<"Tool"> | string
    isOpenSource?: BoolFilter<"Tool"> | boolean
    useCase?: StringFilter<"Tool"> | string
    companyId?: IntNullableFilter<"Tool"> | number | null
    industryId?: IntNullableFilter<"Tool"> | number | null
    createdAt?: DateTimeFilter<"Tool"> | Date | string
    updatedAt?: DateTimeFilter<"Tool"> | Date | string
  }

  export type UseCaseCardUpsertWithWhereUniqueWithoutIndustryInput = {
    where: UseCaseCardWhereUniqueInput
    update: XOR<UseCaseCardUpdateWithoutIndustryInput, UseCaseCardUncheckedUpdateWithoutIndustryInput>
    create: XOR<UseCaseCardCreateWithoutIndustryInput, UseCaseCardUncheckedCreateWithoutIndustryInput>
  }

  export type UseCaseCardUpdateWithWhereUniqueWithoutIndustryInput = {
    where: UseCaseCardWhereUniqueInput
    data: XOR<UseCaseCardUpdateWithoutIndustryInput, UseCaseCardUncheckedUpdateWithoutIndustryInput>
  }

  export type UseCaseCardUpdateManyWithWhereWithoutIndustryInput = {
    where: UseCaseCardScalarWhereInput
    data: XOR<UseCaseCardUpdateManyMutationInput, UseCaseCardUncheckedUpdateManyWithoutIndustryInput>
  }

  export type UseCaseCardScalarWhereInput = {
    AND?: UseCaseCardScalarWhereInput | UseCaseCardScalarWhereInput[]
    OR?: UseCaseCardScalarWhereInput[]
    NOT?: UseCaseCardScalarWhereInput | UseCaseCardScalarWhereInput[]
    id?: IntFilter<"UseCaseCard"> | number
    title?: StringFilter<"UseCaseCard"> | string
    description?: StringFilter<"UseCaseCard"> | string
    exampleCompanyId?: IntNullableFilter<"UseCaseCard"> | number | null
    industryId?: IntFilter<"UseCaseCard"> | number
    createdAt?: DateTimeFilter<"UseCaseCard"> | Date | string
    updatedAt?: DateTimeFilter<"UseCaseCard"> | Date | string
  }

  export type IndustryCreateWithoutCompaniesInput = {
    name: string
    slug: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolCreateNestedManyWithoutIndustryInput
    useCases?: UseCaseCardCreateNestedManyWithoutIndustryInput
  }

  export type IndustryUncheckedCreateWithoutCompaniesInput = {
    id?: number
    name: string
    slug: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutIndustryInput
    useCases?: UseCaseCardUncheckedCreateNestedManyWithoutIndustryInput
  }

  export type IndustryCreateOrConnectWithoutCompaniesInput = {
    where: IndustryWhereUniqueInput
    create: XOR<IndustryCreateWithoutCompaniesInput, IndustryUncheckedCreateWithoutCompaniesInput>
  }

  export type ToolCreateWithoutCompanyInput = {
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    createdAt?: Date | string
    updatedAt?: Date | string
    industry?: IndustryCreateNestedOneWithoutToolsInput
    tags?: ToolTagCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    industryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ToolTagUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutCompanyInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutCompanyInput, ToolUncheckedCreateWithoutCompanyInput>
  }

  export type ToolCreateManyCompanyInputEnvelope = {
    data: ToolCreateManyCompanyInput | ToolCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type FundingRoundCreateWithoutCompanyInput = {
    roundType: string
    amountUsd: number
    date: Date | string
    leadInvestor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundingRoundUncheckedCreateWithoutCompanyInput = {
    id?: number
    roundType: string
    amountUsd: number
    date: Date | string
    leadInvestor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundingRoundCreateOrConnectWithoutCompanyInput = {
    where: FundingRoundWhereUniqueInput
    create: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput>
  }

  export type FundingRoundCreateManyCompanyInputEnvelope = {
    data: FundingRoundCreateManyCompanyInput | FundingRoundCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type AcquisitionCreateWithoutAcquiringCompanyInput = {
    amountUsd?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    acquiredCompany: CompanyCreateNestedOneWithoutAcquiredByInput
  }

  export type AcquisitionUncheckedCreateWithoutAcquiringCompanyInput = {
    id?: number
    acquiredCompanyId: number
    amountUsd?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcquisitionCreateOrConnectWithoutAcquiringCompanyInput = {
    where: AcquisitionWhereUniqueInput
    create: XOR<AcquisitionCreateWithoutAcquiringCompanyInput, AcquisitionUncheckedCreateWithoutAcquiringCompanyInput>
  }

  export type AcquisitionCreateManyAcquiringCompanyInputEnvelope = {
    data: AcquisitionCreateManyAcquiringCompanyInput | AcquisitionCreateManyAcquiringCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UseCaseCardCreateWithoutExampleCompanyInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutUseCasesInput
  }

  export type UseCaseCardUncheckedCreateWithoutExampleCompanyInput = {
    id?: number
    title: string
    description: string
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UseCaseCardCreateOrConnectWithoutExampleCompanyInput = {
    where: UseCaseCardWhereUniqueInput
    create: XOR<UseCaseCardCreateWithoutExampleCompanyInput, UseCaseCardUncheckedCreateWithoutExampleCompanyInput>
  }

  export type UseCaseCardCreateManyExampleCompanyInputEnvelope = {
    data: UseCaseCardCreateManyExampleCompanyInput | UseCaseCardCreateManyExampleCompanyInput[]
    skipDuplicates?: boolean
  }

  export type AcquisitionCreateWithoutAcquiredCompanyInput = {
    amountUsd?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    acquiringCompany: CompanyCreateNestedOneWithoutAcquisitionsInput
  }

  export type AcquisitionUncheckedCreateWithoutAcquiredCompanyInput = {
    id?: number
    acquiringCompanyId: number
    amountUsd?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcquisitionCreateOrConnectWithoutAcquiredCompanyInput = {
    where: AcquisitionWhereUniqueInput
    create: XOR<AcquisitionCreateWithoutAcquiredCompanyInput, AcquisitionUncheckedCreateWithoutAcquiredCompanyInput>
  }

  export type CompanyTagCreateWithoutCompanyInput = {
    label: string
  }

  export type CompanyTagUncheckedCreateWithoutCompanyInput = {
    id?: number
    label: string
  }

  export type CompanyTagCreateOrConnectWithoutCompanyInput = {
    where: CompanyTagWhereUniqueInput
    create: XOR<CompanyTagCreateWithoutCompanyInput, CompanyTagUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyTagCreateManyCompanyInputEnvelope = {
    data: CompanyTagCreateManyCompanyInput | CompanyTagCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type IndustryUpsertWithoutCompaniesInput = {
    update: XOR<IndustryUpdateWithoutCompaniesInput, IndustryUncheckedUpdateWithoutCompaniesInput>
    create: XOR<IndustryCreateWithoutCompaniesInput, IndustryUncheckedCreateWithoutCompaniesInput>
    where?: IndustryWhereInput
  }

  export type IndustryUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: IndustryWhereInput
    data: XOR<IndustryUpdateWithoutCompaniesInput, IndustryUncheckedUpdateWithoutCompaniesInput>
  }

  export type IndustryUpdateWithoutCompaniesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUpdateManyWithoutIndustryNestedInput
    useCases?: UseCaseCardUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutIndustryNestedInput
    useCases?: UseCaseCardUncheckedUpdateManyWithoutIndustryNestedInput
  }

  export type ToolUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ToolWhereUniqueInput
    update: XOR<ToolUpdateWithoutCompanyInput, ToolUncheckedUpdateWithoutCompanyInput>
    create: XOR<ToolCreateWithoutCompanyInput, ToolUncheckedCreateWithoutCompanyInput>
  }

  export type ToolUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ToolWhereUniqueInput
    data: XOR<ToolUpdateWithoutCompanyInput, ToolUncheckedUpdateWithoutCompanyInput>
  }

  export type ToolUpdateManyWithWhereWithoutCompanyInput = {
    where: ToolScalarWhereInput
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyWithoutCompanyInput>
  }

  export type FundingRoundUpsertWithWhereUniqueWithoutCompanyInput = {
    where: FundingRoundWhereUniqueInput
    update: XOR<FundingRoundUpdateWithoutCompanyInput, FundingRoundUncheckedUpdateWithoutCompanyInput>
    create: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput>
  }

  export type FundingRoundUpdateWithWhereUniqueWithoutCompanyInput = {
    where: FundingRoundWhereUniqueInput
    data: XOR<FundingRoundUpdateWithoutCompanyInput, FundingRoundUncheckedUpdateWithoutCompanyInput>
  }

  export type FundingRoundUpdateManyWithWhereWithoutCompanyInput = {
    where: FundingRoundScalarWhereInput
    data: XOR<FundingRoundUpdateManyMutationInput, FundingRoundUncheckedUpdateManyWithoutCompanyInput>
  }

  export type FundingRoundScalarWhereInput = {
    AND?: FundingRoundScalarWhereInput | FundingRoundScalarWhereInput[]
    OR?: FundingRoundScalarWhereInput[]
    NOT?: FundingRoundScalarWhereInput | FundingRoundScalarWhereInput[]
    id?: IntFilter<"FundingRound"> | number
    companyId?: IntFilter<"FundingRound"> | number
    roundType?: StringFilter<"FundingRound"> | string
    amountUsd?: IntFilter<"FundingRound"> | number
    date?: DateTimeFilter<"FundingRound"> | Date | string
    leadInvestor?: StringNullableFilter<"FundingRound"> | string | null
    createdAt?: DateTimeFilter<"FundingRound"> | Date | string
    updatedAt?: DateTimeFilter<"FundingRound"> | Date | string
  }

  export type AcquisitionUpsertWithWhereUniqueWithoutAcquiringCompanyInput = {
    where: AcquisitionWhereUniqueInput
    update: XOR<AcquisitionUpdateWithoutAcquiringCompanyInput, AcquisitionUncheckedUpdateWithoutAcquiringCompanyInput>
    create: XOR<AcquisitionCreateWithoutAcquiringCompanyInput, AcquisitionUncheckedCreateWithoutAcquiringCompanyInput>
  }

  export type AcquisitionUpdateWithWhereUniqueWithoutAcquiringCompanyInput = {
    where: AcquisitionWhereUniqueInput
    data: XOR<AcquisitionUpdateWithoutAcquiringCompanyInput, AcquisitionUncheckedUpdateWithoutAcquiringCompanyInput>
  }

  export type AcquisitionUpdateManyWithWhereWithoutAcquiringCompanyInput = {
    where: AcquisitionScalarWhereInput
    data: XOR<AcquisitionUpdateManyMutationInput, AcquisitionUncheckedUpdateManyWithoutAcquiringCompanyInput>
  }

  export type AcquisitionScalarWhereInput = {
    AND?: AcquisitionScalarWhereInput | AcquisitionScalarWhereInput[]
    OR?: AcquisitionScalarWhereInput[]
    NOT?: AcquisitionScalarWhereInput | AcquisitionScalarWhereInput[]
    id?: IntFilter<"Acquisition"> | number
    acquiringCompanyId?: IntFilter<"Acquisition"> | number
    acquiredCompanyId?: IntFilter<"Acquisition"> | number
    amountUsd?: IntNullableFilter<"Acquisition"> | number | null
    date?: DateTimeFilter<"Acquisition"> | Date | string
    createdAt?: DateTimeFilter<"Acquisition"> | Date | string
    updatedAt?: DateTimeFilter<"Acquisition"> | Date | string
  }

  export type UseCaseCardUpsertWithWhereUniqueWithoutExampleCompanyInput = {
    where: UseCaseCardWhereUniqueInput
    update: XOR<UseCaseCardUpdateWithoutExampleCompanyInput, UseCaseCardUncheckedUpdateWithoutExampleCompanyInput>
    create: XOR<UseCaseCardCreateWithoutExampleCompanyInput, UseCaseCardUncheckedCreateWithoutExampleCompanyInput>
  }

  export type UseCaseCardUpdateWithWhereUniqueWithoutExampleCompanyInput = {
    where: UseCaseCardWhereUniqueInput
    data: XOR<UseCaseCardUpdateWithoutExampleCompanyInput, UseCaseCardUncheckedUpdateWithoutExampleCompanyInput>
  }

  export type UseCaseCardUpdateManyWithWhereWithoutExampleCompanyInput = {
    where: UseCaseCardScalarWhereInput
    data: XOR<UseCaseCardUpdateManyMutationInput, UseCaseCardUncheckedUpdateManyWithoutExampleCompanyInput>
  }

  export type AcquisitionUpsertWithoutAcquiredCompanyInput = {
    update: XOR<AcquisitionUpdateWithoutAcquiredCompanyInput, AcquisitionUncheckedUpdateWithoutAcquiredCompanyInput>
    create: XOR<AcquisitionCreateWithoutAcquiredCompanyInput, AcquisitionUncheckedCreateWithoutAcquiredCompanyInput>
    where?: AcquisitionWhereInput
  }

  export type AcquisitionUpdateToOneWithWhereWithoutAcquiredCompanyInput = {
    where?: AcquisitionWhereInput
    data: XOR<AcquisitionUpdateWithoutAcquiredCompanyInput, AcquisitionUncheckedUpdateWithoutAcquiredCompanyInput>
  }

  export type AcquisitionUpdateWithoutAcquiredCompanyInput = {
    amountUsd?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acquiringCompany?: CompanyUpdateOneRequiredWithoutAcquisitionsNestedInput
  }

  export type AcquisitionUncheckedUpdateWithoutAcquiredCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquiringCompanyId?: IntFieldUpdateOperationsInput | number
    amountUsd?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyTagUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyTagWhereUniqueInput
    update: XOR<CompanyTagUpdateWithoutCompanyInput, CompanyTagUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyTagCreateWithoutCompanyInput, CompanyTagUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyTagUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyTagWhereUniqueInput
    data: XOR<CompanyTagUpdateWithoutCompanyInput, CompanyTagUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyTagUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyTagScalarWhereInput
    data: XOR<CompanyTagUpdateManyMutationInput, CompanyTagUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyTagScalarWhereInput = {
    AND?: CompanyTagScalarWhereInput | CompanyTagScalarWhereInput[]
    OR?: CompanyTagScalarWhereInput[]
    NOT?: CompanyTagScalarWhereInput | CompanyTagScalarWhereInput[]
    id?: IntFilter<"CompanyTag"> | number
    label?: StringFilter<"CompanyTag"> | string
    companyId?: IntFilter<"CompanyTag"> | number
  }

  export type CompanyCreateWithoutAcquisitionsInput = {
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutCompaniesInput
    tools?: ToolCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    useCaseCards?: UseCaseCardCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutAcquisitionsInput = {
    id?: number
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    useCaseCards?: UseCaseCardUncheckedCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionUncheckedCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutAcquisitionsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutAcquisitionsInput, CompanyUncheckedCreateWithoutAcquisitionsInput>
  }

  export type CompanyCreateWithoutAcquiredByInput = {
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutCompaniesInput
    tools?: ToolCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardCreateNestedManyWithoutExampleCompanyInput
    tags?: CompanyTagCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutAcquiredByInput = {
    id?: number
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionUncheckedCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardUncheckedCreateNestedManyWithoutExampleCompanyInput
    tags?: CompanyTagUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutAcquiredByInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutAcquiredByInput, CompanyUncheckedCreateWithoutAcquiredByInput>
  }

  export type CompanyUpsertWithoutAcquisitionsInput = {
    update: XOR<CompanyUpdateWithoutAcquisitionsInput, CompanyUncheckedUpdateWithoutAcquisitionsInput>
    create: XOR<CompanyCreateWithoutAcquisitionsInput, CompanyUncheckedCreateWithoutAcquisitionsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutAcquisitionsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutAcquisitionsInput, CompanyUncheckedUpdateWithoutAcquisitionsInput>
  }

  export type CompanyUpdateWithoutAcquisitionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutCompaniesNestedInput
    tools?: ToolUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    useCaseCards?: UseCaseCardUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutAcquisitionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    useCaseCards?: UseCaseCardUncheckedUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUncheckedUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUpsertWithoutAcquiredByInput = {
    update: XOR<CompanyUpdateWithoutAcquiredByInput, CompanyUncheckedUpdateWithoutAcquiredByInput>
    create: XOR<CompanyCreateWithoutAcquiredByInput, CompanyUncheckedCreateWithoutAcquiredByInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutAcquiredByInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutAcquiredByInput, CompanyUncheckedUpdateWithoutAcquiredByInput>
  }

  export type CompanyUpdateWithoutAcquiredByInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutCompaniesNestedInput
    tools?: ToolUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUpdateManyWithoutExampleCompanyNestedInput
    tags?: CompanyTagUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutAcquiredByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUncheckedUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUncheckedUpdateManyWithoutExampleCompanyNestedInput
    tags?: CompanyTagUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutToolsInput = {
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutCompaniesInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutToolsInput = {
    id?: number
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionUncheckedCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardUncheckedCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionUncheckedCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutToolsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutToolsInput, CompanyUncheckedCreateWithoutToolsInput>
  }

  export type IndustryCreateWithoutToolsInput = {
    name: string
    slug: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutIndustryInput
    useCases?: UseCaseCardCreateNestedManyWithoutIndustryInput
  }

  export type IndustryUncheckedCreateWithoutToolsInput = {
    id?: number
    name: string
    slug: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutIndustryInput
    useCases?: UseCaseCardUncheckedCreateNestedManyWithoutIndustryInput
  }

  export type IndustryCreateOrConnectWithoutToolsInput = {
    where: IndustryWhereUniqueInput
    create: XOR<IndustryCreateWithoutToolsInput, IndustryUncheckedCreateWithoutToolsInput>
  }

  export type ToolTagCreateWithoutToolInput = {
    label: string
  }

  export type ToolTagUncheckedCreateWithoutToolInput = {
    id?: number
    label: string
  }

  export type ToolTagCreateOrConnectWithoutToolInput = {
    where: ToolTagWhereUniqueInput
    create: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput>
  }

  export type ToolTagCreateManyToolInputEnvelope = {
    data: ToolTagCreateManyToolInput | ToolTagCreateManyToolInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutToolsInput = {
    update: XOR<CompanyUpdateWithoutToolsInput, CompanyUncheckedUpdateWithoutToolsInput>
    create: XOR<CompanyCreateWithoutToolsInput, CompanyUncheckedCreateWithoutToolsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutToolsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutToolsInput, CompanyUncheckedUpdateWithoutToolsInput>
  }

  export type CompanyUpdateWithoutToolsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutCompaniesNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutToolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUncheckedUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUncheckedUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUncheckedUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type IndustryUpsertWithoutToolsInput = {
    update: XOR<IndustryUpdateWithoutToolsInput, IndustryUncheckedUpdateWithoutToolsInput>
    create: XOR<IndustryCreateWithoutToolsInput, IndustryUncheckedCreateWithoutToolsInput>
    where?: IndustryWhereInput
  }

  export type IndustryUpdateToOneWithWhereWithoutToolsInput = {
    where?: IndustryWhereInput
    data: XOR<IndustryUpdateWithoutToolsInput, IndustryUncheckedUpdateWithoutToolsInput>
  }

  export type IndustryUpdateWithoutToolsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutIndustryNestedInput
    useCases?: UseCaseCardUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryUncheckedUpdateWithoutToolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutIndustryNestedInput
    useCases?: UseCaseCardUncheckedUpdateManyWithoutIndustryNestedInput
  }

  export type ToolTagUpsertWithWhereUniqueWithoutToolInput = {
    where: ToolTagWhereUniqueInput
    update: XOR<ToolTagUpdateWithoutToolInput, ToolTagUncheckedUpdateWithoutToolInput>
    create: XOR<ToolTagCreateWithoutToolInput, ToolTagUncheckedCreateWithoutToolInput>
  }

  export type ToolTagUpdateWithWhereUniqueWithoutToolInput = {
    where: ToolTagWhereUniqueInput
    data: XOR<ToolTagUpdateWithoutToolInput, ToolTagUncheckedUpdateWithoutToolInput>
  }

  export type ToolTagUpdateManyWithWhereWithoutToolInput = {
    where: ToolTagScalarWhereInput
    data: XOR<ToolTagUpdateManyMutationInput, ToolTagUncheckedUpdateManyWithoutToolInput>
  }

  export type ToolTagScalarWhereInput = {
    AND?: ToolTagScalarWhereInput | ToolTagScalarWhereInput[]
    OR?: ToolTagScalarWhereInput[]
    NOT?: ToolTagScalarWhereInput | ToolTagScalarWhereInput[]
    id?: IntFilter<"ToolTag"> | number
    label?: StringFilter<"ToolTag"> | string
    toolId?: IntFilter<"ToolTag"> | number
  }

  export type CompanyCreateWithoutFundingRoundsInput = {
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutCompaniesInput
    tools?: ToolCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutFundingRoundsInput = {
    id?: number
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionUncheckedCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardUncheckedCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionUncheckedCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutFundingRoundsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutFundingRoundsInput, CompanyUncheckedCreateWithoutFundingRoundsInput>
  }

  export type CompanyUpsertWithoutFundingRoundsInput = {
    update: XOR<CompanyUpdateWithoutFundingRoundsInput, CompanyUncheckedUpdateWithoutFundingRoundsInput>
    create: XOR<CompanyCreateWithoutFundingRoundsInput, CompanyUncheckedCreateWithoutFundingRoundsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutFundingRoundsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutFundingRoundsInput, CompanyUncheckedUpdateWithoutFundingRoundsInput>
  }

  export type CompanyUpdateWithoutFundingRoundsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutCompaniesNestedInput
    tools?: ToolUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutFundingRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUncheckedUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUncheckedUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUncheckedUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutUseCaseCardsInput = {
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutCompaniesInput
    tools?: ToolCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionCreateNestedManyWithoutAcquiringCompanyInput
    acquiredBy?: AcquisitionCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUseCaseCardsInput = {
    id?: number
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionUncheckedCreateNestedManyWithoutAcquiringCompanyInput
    acquiredBy?: AcquisitionUncheckedCreateNestedOneWithoutAcquiredCompanyInput
    tags?: CompanyTagUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUseCaseCardsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUseCaseCardsInput, CompanyUncheckedCreateWithoutUseCaseCardsInput>
  }

  export type IndustryCreateWithoutUseCasesInput = {
    name: string
    slug: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutIndustryInput
    tools?: ToolCreateNestedManyWithoutIndustryInput
  }

  export type IndustryUncheckedCreateWithoutUseCasesInput = {
    id?: number
    name: string
    slug: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutIndustryInput
    tools?: ToolUncheckedCreateNestedManyWithoutIndustryInput
  }

  export type IndustryCreateOrConnectWithoutUseCasesInput = {
    where: IndustryWhereUniqueInput
    create: XOR<IndustryCreateWithoutUseCasesInput, IndustryUncheckedCreateWithoutUseCasesInput>
  }

  export type CompanyUpsertWithoutUseCaseCardsInput = {
    update: XOR<CompanyUpdateWithoutUseCaseCardsInput, CompanyUncheckedUpdateWithoutUseCaseCardsInput>
    create: XOR<CompanyCreateWithoutUseCaseCardsInput, CompanyUncheckedCreateWithoutUseCaseCardsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUseCaseCardsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUseCaseCardsInput, CompanyUncheckedUpdateWithoutUseCaseCardsInput>
  }

  export type CompanyUpdateWithoutUseCaseCardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutCompaniesNestedInput
    tools?: ToolUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUpdateManyWithoutAcquiringCompanyNestedInput
    acquiredBy?: AcquisitionUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUseCaseCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUncheckedUpdateManyWithoutAcquiringCompanyNestedInput
    acquiredBy?: AcquisitionUncheckedUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type IndustryUpsertWithoutUseCasesInput = {
    update: XOR<IndustryUpdateWithoutUseCasesInput, IndustryUncheckedUpdateWithoutUseCasesInput>
    create: XOR<IndustryCreateWithoutUseCasesInput, IndustryUncheckedCreateWithoutUseCasesInput>
    where?: IndustryWhereInput
  }

  export type IndustryUpdateToOneWithWhereWithoutUseCasesInput = {
    where?: IndustryWhereInput
    data: XOR<IndustryUpdateWithoutUseCasesInput, IndustryUncheckedUpdateWithoutUseCasesInput>
  }

  export type IndustryUpdateWithoutUseCasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutIndustryNestedInput
    tools?: ToolUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryUncheckedUpdateWithoutUseCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutIndustryNestedInput
    tools?: ToolUncheckedUpdateManyWithoutIndustryNestedInput
  }

  export type CompanyCreateWithoutTagsInput = {
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutCompaniesInput
    tools?: ToolCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionCreateNestedOneWithoutAcquiredCompanyInput
  }

  export type CompanyUncheckedCreateWithoutTagsInput = {
    id?: number
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    acquisitions?: AcquisitionUncheckedCreateNestedManyWithoutAcquiringCompanyInput
    useCaseCards?: UseCaseCardUncheckedCreateNestedManyWithoutExampleCompanyInput
    acquiredBy?: AcquisitionUncheckedCreateNestedOneWithoutAcquiredCompanyInput
  }

  export type CompanyCreateOrConnectWithoutTagsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTagsInput, CompanyUncheckedCreateWithoutTagsInput>
  }

  export type CompanyUpsertWithoutTagsInput = {
    update: XOR<CompanyUpdateWithoutTagsInput, CompanyUncheckedUpdateWithoutTagsInput>
    create: XOR<CompanyCreateWithoutTagsInput, CompanyUncheckedCreateWithoutTagsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutTagsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutTagsInput, CompanyUncheckedUpdateWithoutTagsInput>
  }

  export type CompanyUpdateWithoutTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutCompaniesNestedInput
    tools?: ToolUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUpdateOneWithoutAcquiredCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUncheckedUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUncheckedUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUncheckedUpdateOneWithoutAcquiredCompanyNestedInput
  }

  export type ToolCreateWithoutTagsInput = {
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutToolsInput
    industry?: IndustryCreateNestedOneWithoutToolsInput
  }

  export type ToolUncheckedCreateWithoutTagsInput = {
    id?: number
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    companyId?: number | null
    industryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToolCreateOrConnectWithoutTagsInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutTagsInput, ToolUncheckedCreateWithoutTagsInput>
  }

  export type ToolUpsertWithoutTagsInput = {
    update: XOR<ToolUpdateWithoutTagsInput, ToolUncheckedUpdateWithoutTagsInput>
    create: XOR<ToolCreateWithoutTagsInput, ToolUncheckedCreateWithoutTagsInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutTagsInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutTagsInput, ToolUncheckedUpdateWithoutTagsInput>
  }

  export type ToolUpdateWithoutTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutToolsNestedInput
    industry?: IndustryUpdateOneWithoutToolsNestedInput
  }

  export type ToolUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    industryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateManyIndustryInput = {
    id?: number
    name: string
    slug: string
    description: string
    websiteUrl: string
    foundedYear?: number | null
    totalFundingUsd?: number | null
    approachSummary: string
    modelType: $Enums.ModelType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToolCreateManyIndustryInput = {
    id?: number
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    companyId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UseCaseCardCreateManyIndustryInput = {
    id?: number
    title: string
    description: string
    exampleCompanyId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateWithoutIndustryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutIndustryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    acquisitions?: AcquisitionUncheckedUpdateManyWithoutAcquiringCompanyNestedInput
    useCaseCards?: UseCaseCardUncheckedUpdateManyWithoutExampleCompanyNestedInput
    acquiredBy?: AcquisitionUncheckedUpdateOneWithoutAcquiredCompanyNestedInput
    tags?: CompanyTagUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutIndustryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    totalFundingUsd?: NullableIntFieldUpdateOperationsInput | number | null
    approachSummary?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUpdateWithoutIndustryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutToolsNestedInput
    tags?: ToolTagUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutIndustryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ToolTagUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateManyWithoutIndustryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UseCaseCardUpdateWithoutIndustryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exampleCompany?: CompanyUpdateOneWithoutUseCaseCardsNestedInput
  }

  export type UseCaseCardUncheckedUpdateWithoutIndustryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exampleCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UseCaseCardUncheckedUpdateManyWithoutIndustryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exampleCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCreateManyCompanyInput = {
    id?: number
    name: string
    description: string
    websiteUrl: string
    isOpenSource: boolean
    useCase: string
    industryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundingRoundCreateManyCompanyInput = {
    id?: number
    roundType: string
    amountUsd: number
    date: Date | string
    leadInvestor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcquisitionCreateManyAcquiringCompanyInput = {
    id?: number
    acquiredCompanyId: number
    amountUsd?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UseCaseCardCreateManyExampleCompanyInput = {
    id?: number
    title: string
    description: string
    industryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyTagCreateManyCompanyInput = {
    id?: number
    label: string
  }

  export type ToolUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneWithoutToolsNestedInput
    tags?: ToolTagUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    industryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ToolTagUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    isOpenSource?: BoolFieldUpdateOperationsInput | boolean
    useCase?: StringFieldUpdateOperationsInput | string
    industryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingRoundUpdateWithoutCompanyInput = {
    roundType?: StringFieldUpdateOperationsInput | string
    amountUsd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leadInvestor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingRoundUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundType?: StringFieldUpdateOperationsInput | string
    amountUsd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leadInvestor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingRoundUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundType?: StringFieldUpdateOperationsInput | string
    amountUsd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leadInvestor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcquisitionUpdateWithoutAcquiringCompanyInput = {
    amountUsd?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acquiredCompany?: CompanyUpdateOneRequiredWithoutAcquiredByNestedInput
  }

  export type AcquisitionUncheckedUpdateWithoutAcquiringCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquiredCompanyId?: IntFieldUpdateOperationsInput | number
    amountUsd?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcquisitionUncheckedUpdateManyWithoutAcquiringCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquiredCompanyId?: IntFieldUpdateOperationsInput | number
    amountUsd?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UseCaseCardUpdateWithoutExampleCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutUseCasesNestedInput
  }

  export type UseCaseCardUncheckedUpdateWithoutExampleCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UseCaseCardUncheckedUpdateManyWithoutExampleCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    industryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyTagUpdateWithoutCompanyInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyTagUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyTagUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ToolTagCreateManyToolInput = {
    id?: number
    label: string
  }

  export type ToolTagUpdateWithoutToolInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ToolTagUncheckedUpdateWithoutToolInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ToolTagUncheckedUpdateManyWithoutToolInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}