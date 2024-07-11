
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
 * Model PrismaHabit
 * 
 */
export type PrismaHabit = $Result.DefaultSelection<Prisma.$PrismaHabitPayload>
/**
 * Model PrismaDay
 * 
 */
export type PrismaDay = $Result.DefaultSelection<Prisma.$PrismaDayPayload>
/**
 * Model PrismaDayHabit
 * 
 */
export type PrismaDayHabit = $Result.DefaultSelection<Prisma.$PrismaDayHabitPayload>
/**
 * Model PrismaWeekDayHabit
 * 
 */
export type PrismaWeekDayHabit = $Result.DefaultSelection<Prisma.$PrismaWeekDayHabitPayload>
/**
 * Model PrismaUser
 * 
 */
export type PrismaUser = $Result.DefaultSelection<Prisma.$PrismaUserPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PrismaHabits
 * const prismaHabits = await prisma.prismaHabit.findMany()
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
   * // Fetch zero or more PrismaHabits
   * const prismaHabits = await prisma.prismaHabit.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.prismaHabit`: Exposes CRUD operations for the **PrismaHabit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrismaHabits
    * const prismaHabits = await prisma.prismaHabit.findMany()
    * ```
    */
  get prismaHabit(): Prisma.PrismaHabitDelegate<ExtArgs>;

  /**
   * `prisma.prismaDay`: Exposes CRUD operations for the **PrismaDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrismaDays
    * const prismaDays = await prisma.prismaDay.findMany()
    * ```
    */
  get prismaDay(): Prisma.PrismaDayDelegate<ExtArgs>;

  /**
   * `prisma.prismaDayHabit`: Exposes CRUD operations for the **PrismaDayHabit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrismaDayHabits
    * const prismaDayHabits = await prisma.prismaDayHabit.findMany()
    * ```
    */
  get prismaDayHabit(): Prisma.PrismaDayHabitDelegate<ExtArgs>;

  /**
   * `prisma.prismaWeekDayHabit`: Exposes CRUD operations for the **PrismaWeekDayHabit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrismaWeekDayHabits
    * const prismaWeekDayHabits = await prisma.prismaWeekDayHabit.findMany()
    * ```
    */
  get prismaWeekDayHabit(): Prisma.PrismaWeekDayHabitDelegate<ExtArgs>;

  /**
   * `prisma.prismaUser`: Exposes CRUD operations for the **PrismaUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrismaUsers
    * const prismaUsers = await prisma.prismaUser.findMany()
    * ```
    */
  get prismaUser(): Prisma.PrismaUserDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    PrismaHabit: 'PrismaHabit',
    PrismaDay: 'PrismaDay',
    PrismaDayHabit: 'PrismaDayHabit',
    PrismaWeekDayHabit: 'PrismaWeekDayHabit',
    PrismaUser: 'PrismaUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "prismaHabit" | "prismaDay" | "prismaDayHabit" | "prismaWeekDayHabit" | "prismaUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PrismaHabit: {
        payload: Prisma.$PrismaHabitPayload<ExtArgs>
        fields: Prisma.PrismaHabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrismaHabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaHabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrismaHabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaHabitPayload>
          }
          findFirst: {
            args: Prisma.PrismaHabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaHabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrismaHabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaHabitPayload>
          }
          findMany: {
            args: Prisma.PrismaHabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaHabitPayload>[]
          }
          create: {
            args: Prisma.PrismaHabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaHabitPayload>
          }
          createMany: {
            args: Prisma.PrismaHabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrismaHabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaHabitPayload>[]
          }
          delete: {
            args: Prisma.PrismaHabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaHabitPayload>
          }
          update: {
            args: Prisma.PrismaHabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaHabitPayload>
          }
          deleteMany: {
            args: Prisma.PrismaHabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrismaHabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrismaHabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaHabitPayload>
          }
          aggregate: {
            args: Prisma.PrismaHabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrismaHabit>
          }
          groupBy: {
            args: Prisma.PrismaHabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrismaHabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrismaHabitCountArgs<ExtArgs>
            result: $Utils.Optional<PrismaHabitCountAggregateOutputType> | number
          }
        }
      }
      PrismaDay: {
        payload: Prisma.$PrismaDayPayload<ExtArgs>
        fields: Prisma.PrismaDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrismaDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrismaDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayPayload>
          }
          findFirst: {
            args: Prisma.PrismaDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrismaDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayPayload>
          }
          findMany: {
            args: Prisma.PrismaDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayPayload>[]
          }
          create: {
            args: Prisma.PrismaDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayPayload>
          }
          createMany: {
            args: Prisma.PrismaDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrismaDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayPayload>[]
          }
          delete: {
            args: Prisma.PrismaDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayPayload>
          }
          update: {
            args: Prisma.PrismaDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayPayload>
          }
          deleteMany: {
            args: Prisma.PrismaDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrismaDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrismaDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayPayload>
          }
          aggregate: {
            args: Prisma.PrismaDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrismaDay>
          }
          groupBy: {
            args: Prisma.PrismaDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrismaDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrismaDayCountArgs<ExtArgs>
            result: $Utils.Optional<PrismaDayCountAggregateOutputType> | number
          }
        }
      }
      PrismaDayHabit: {
        payload: Prisma.$PrismaDayHabitPayload<ExtArgs>
        fields: Prisma.PrismaDayHabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrismaDayHabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayHabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrismaDayHabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayHabitPayload>
          }
          findFirst: {
            args: Prisma.PrismaDayHabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayHabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrismaDayHabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayHabitPayload>
          }
          findMany: {
            args: Prisma.PrismaDayHabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayHabitPayload>[]
          }
          create: {
            args: Prisma.PrismaDayHabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayHabitPayload>
          }
          createMany: {
            args: Prisma.PrismaDayHabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrismaDayHabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayHabitPayload>[]
          }
          delete: {
            args: Prisma.PrismaDayHabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayHabitPayload>
          }
          update: {
            args: Prisma.PrismaDayHabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayHabitPayload>
          }
          deleteMany: {
            args: Prisma.PrismaDayHabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrismaDayHabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrismaDayHabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaDayHabitPayload>
          }
          aggregate: {
            args: Prisma.PrismaDayHabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrismaDayHabit>
          }
          groupBy: {
            args: Prisma.PrismaDayHabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrismaDayHabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrismaDayHabitCountArgs<ExtArgs>
            result: $Utils.Optional<PrismaDayHabitCountAggregateOutputType> | number
          }
        }
      }
      PrismaWeekDayHabit: {
        payload: Prisma.$PrismaWeekDayHabitPayload<ExtArgs>
        fields: Prisma.PrismaWeekDayHabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrismaWeekDayHabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaWeekDayHabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrismaWeekDayHabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaWeekDayHabitPayload>
          }
          findFirst: {
            args: Prisma.PrismaWeekDayHabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaWeekDayHabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrismaWeekDayHabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaWeekDayHabitPayload>
          }
          findMany: {
            args: Prisma.PrismaWeekDayHabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaWeekDayHabitPayload>[]
          }
          create: {
            args: Prisma.PrismaWeekDayHabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaWeekDayHabitPayload>
          }
          createMany: {
            args: Prisma.PrismaWeekDayHabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrismaWeekDayHabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaWeekDayHabitPayload>[]
          }
          delete: {
            args: Prisma.PrismaWeekDayHabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaWeekDayHabitPayload>
          }
          update: {
            args: Prisma.PrismaWeekDayHabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaWeekDayHabitPayload>
          }
          deleteMany: {
            args: Prisma.PrismaWeekDayHabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrismaWeekDayHabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrismaWeekDayHabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaWeekDayHabitPayload>
          }
          aggregate: {
            args: Prisma.PrismaWeekDayHabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrismaWeekDayHabit>
          }
          groupBy: {
            args: Prisma.PrismaWeekDayHabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrismaWeekDayHabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrismaWeekDayHabitCountArgs<ExtArgs>
            result: $Utils.Optional<PrismaWeekDayHabitCountAggregateOutputType> | number
          }
        }
      }
      PrismaUser: {
        payload: Prisma.$PrismaUserPayload<ExtArgs>
        fields: Prisma.PrismaUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrismaUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrismaUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaUserPayload>
          }
          findFirst: {
            args: Prisma.PrismaUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrismaUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaUserPayload>
          }
          findMany: {
            args: Prisma.PrismaUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaUserPayload>[]
          }
          create: {
            args: Prisma.PrismaUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaUserPayload>
          }
          createMany: {
            args: Prisma.PrismaUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrismaUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaUserPayload>[]
          }
          delete: {
            args: Prisma.PrismaUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaUserPayload>
          }
          update: {
            args: Prisma.PrismaUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaUserPayload>
          }
          deleteMany: {
            args: Prisma.PrismaUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrismaUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrismaUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrismaUserPayload>
          }
          aggregate: {
            args: Prisma.PrismaUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrismaUser>
          }
          groupBy: {
            args: Prisma.PrismaUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrismaUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrismaUserCountArgs<ExtArgs>
            result: $Utils.Optional<PrismaUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Count Type PrismaHabitCountOutputType
   */

  export type PrismaHabitCountOutputType = {
    prismaDayHabits: number
    prismaHabitWeekDays: number
  }

  export type PrismaHabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prismaDayHabits?: boolean | PrismaHabitCountOutputTypeCountPrismaDayHabitsArgs
    prismaHabitWeekDays?: boolean | PrismaHabitCountOutputTypeCountPrismaHabitWeekDaysArgs
  }

  // Custom InputTypes
  /**
   * PrismaHabitCountOutputType without action
   */
  export type PrismaHabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabitCountOutputType
     */
    select?: PrismaHabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrismaHabitCountOutputType without action
   */
  export type PrismaHabitCountOutputTypeCountPrismaDayHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrismaDayHabitWhereInput
  }

  /**
   * PrismaHabitCountOutputType without action
   */
  export type PrismaHabitCountOutputTypeCountPrismaHabitWeekDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrismaWeekDayHabitWhereInput
  }


  /**
   * Count Type PrismaDayCountOutputType
   */

  export type PrismaDayCountOutputType = {
    prismaDayHabits: number
  }

  export type PrismaDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prismaDayHabits?: boolean | PrismaDayCountOutputTypeCountPrismaDayHabitsArgs
  }

  // Custom InputTypes
  /**
   * PrismaDayCountOutputType without action
   */
  export type PrismaDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayCountOutputType
     */
    select?: PrismaDayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrismaDayCountOutputType without action
   */
  export type PrismaDayCountOutputTypeCountPrismaDayHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrismaDayHabitWhereInput
  }


  /**
   * Count Type PrismaUserCountOutputType
   */

  export type PrismaUserCountOutputType = {
    prismaDayHabits: number
    prismaHabitWeekDays: number
    prismaDays: number
  }

  export type PrismaUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prismaDayHabits?: boolean | PrismaUserCountOutputTypeCountPrismaDayHabitsArgs
    prismaHabitWeekDays?: boolean | PrismaUserCountOutputTypeCountPrismaHabitWeekDaysArgs
    prismaDays?: boolean | PrismaUserCountOutputTypeCountPrismaDaysArgs
  }

  // Custom InputTypes
  /**
   * PrismaUserCountOutputType without action
   */
  export type PrismaUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUserCountOutputType
     */
    select?: PrismaUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrismaUserCountOutputType without action
   */
  export type PrismaUserCountOutputTypeCountPrismaDayHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrismaDayHabitWhereInput
  }

  /**
   * PrismaUserCountOutputType without action
   */
  export type PrismaUserCountOutputTypeCountPrismaHabitWeekDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrismaWeekDayHabitWhereInput
  }

  /**
   * PrismaUserCountOutputType without action
   */
  export type PrismaUserCountOutputTypeCountPrismaDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrismaDayWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PrismaHabit
   */

  export type AggregatePrismaHabit = {
    _count: PrismaHabitCountAggregateOutputType | null
    _min: PrismaHabitMinAggregateOutputType | null
    _max: PrismaHabitMaxAggregateOutputType | null
  }

  export type PrismaHabitMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type PrismaHabitMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type PrismaHabitCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    userId: number
    _all: number
  }


  export type PrismaHabitMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    userId?: true
  }

  export type PrismaHabitMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    userId?: true
  }

  export type PrismaHabitCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type PrismaHabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrismaHabit to aggregate.
     */
    where?: PrismaHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaHabits to fetch.
     */
    orderBy?: PrismaHabitOrderByWithRelationInput | PrismaHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrismaHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrismaHabits
    **/
    _count?: true | PrismaHabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrismaHabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrismaHabitMaxAggregateInputType
  }

  export type GetPrismaHabitAggregateType<T extends PrismaHabitAggregateArgs> = {
        [P in keyof T & keyof AggregatePrismaHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrismaHabit[P]>
      : GetScalarType<T[P], AggregatePrismaHabit[P]>
  }




  export type PrismaHabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrismaHabitWhereInput
    orderBy?: PrismaHabitOrderByWithAggregationInput | PrismaHabitOrderByWithAggregationInput[]
    by: PrismaHabitScalarFieldEnum[] | PrismaHabitScalarFieldEnum
    having?: PrismaHabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrismaHabitCountAggregateInputType | true
    _min?: PrismaHabitMinAggregateInputType
    _max?: PrismaHabitMaxAggregateInputType
  }

  export type PrismaHabitGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    userId: string
    _count: PrismaHabitCountAggregateOutputType | null
    _min: PrismaHabitMinAggregateOutputType | null
    _max: PrismaHabitMaxAggregateOutputType | null
  }

  type GetPrismaHabitGroupByPayload<T extends PrismaHabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrismaHabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrismaHabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrismaHabitGroupByOutputType[P]>
            : GetScalarType<T[P], PrismaHabitGroupByOutputType[P]>
        }
      >
    >


  export type PrismaHabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    userId?: boolean
    prismaDayHabits?: boolean | PrismaHabit$prismaDayHabitsArgs<ExtArgs>
    prismaHabitWeekDays?: boolean | PrismaHabit$prismaHabitWeekDaysArgs<ExtArgs>
    _count?: boolean | PrismaHabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prismaHabit"]>

  export type PrismaHabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["prismaHabit"]>

  export type PrismaHabitSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type PrismaHabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prismaDayHabits?: boolean | PrismaHabit$prismaDayHabitsArgs<ExtArgs>
    prismaHabitWeekDays?: boolean | PrismaHabit$prismaHabitWeekDaysArgs<ExtArgs>
    _count?: boolean | PrismaHabitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrismaHabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PrismaHabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrismaHabit"
    objects: {
      prismaDayHabits: Prisma.$PrismaDayHabitPayload<ExtArgs>[]
      prismaHabitWeekDays: Prisma.$PrismaWeekDayHabitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["prismaHabit"]>
    composites: {}
  }

  type PrismaHabitGetPayload<S extends boolean | null | undefined | PrismaHabitDefaultArgs> = $Result.GetResult<Prisma.$PrismaHabitPayload, S>

  type PrismaHabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PrismaHabitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PrismaHabitCountAggregateInputType | true
    }

  export interface PrismaHabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrismaHabit'], meta: { name: 'PrismaHabit' } }
    /**
     * Find zero or one PrismaHabit that matches the filter.
     * @param {PrismaHabitFindUniqueArgs} args - Arguments to find a PrismaHabit
     * @example
     * // Get one PrismaHabit
     * const prismaHabit = await prisma.prismaHabit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrismaHabitFindUniqueArgs>(args: SelectSubset<T, PrismaHabitFindUniqueArgs<ExtArgs>>): Prisma__PrismaHabitClient<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PrismaHabit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PrismaHabitFindUniqueOrThrowArgs} args - Arguments to find a PrismaHabit
     * @example
     * // Get one PrismaHabit
     * const prismaHabit = await prisma.prismaHabit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrismaHabitFindUniqueOrThrowArgs>(args: SelectSubset<T, PrismaHabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrismaHabitClient<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PrismaHabit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaHabitFindFirstArgs} args - Arguments to find a PrismaHabit
     * @example
     * // Get one PrismaHabit
     * const prismaHabit = await prisma.prismaHabit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrismaHabitFindFirstArgs>(args?: SelectSubset<T, PrismaHabitFindFirstArgs<ExtArgs>>): Prisma__PrismaHabitClient<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PrismaHabit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaHabitFindFirstOrThrowArgs} args - Arguments to find a PrismaHabit
     * @example
     * // Get one PrismaHabit
     * const prismaHabit = await prisma.prismaHabit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrismaHabitFindFirstOrThrowArgs>(args?: SelectSubset<T, PrismaHabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrismaHabitClient<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PrismaHabits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaHabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrismaHabits
     * const prismaHabits = await prisma.prismaHabit.findMany()
     * 
     * // Get first 10 PrismaHabits
     * const prismaHabits = await prisma.prismaHabit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prismaHabitWithIdOnly = await prisma.prismaHabit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrismaHabitFindManyArgs>(args?: SelectSubset<T, PrismaHabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PrismaHabit.
     * @param {PrismaHabitCreateArgs} args - Arguments to create a PrismaHabit.
     * @example
     * // Create one PrismaHabit
     * const PrismaHabit = await prisma.prismaHabit.create({
     *   data: {
     *     // ... data to create a PrismaHabit
     *   }
     * })
     * 
     */
    create<T extends PrismaHabitCreateArgs>(args: SelectSubset<T, PrismaHabitCreateArgs<ExtArgs>>): Prisma__PrismaHabitClient<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PrismaHabits.
     * @param {PrismaHabitCreateManyArgs} args - Arguments to create many PrismaHabits.
     * @example
     * // Create many PrismaHabits
     * const prismaHabit = await prisma.prismaHabit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrismaHabitCreateManyArgs>(args?: SelectSubset<T, PrismaHabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrismaHabits and returns the data saved in the database.
     * @param {PrismaHabitCreateManyAndReturnArgs} args - Arguments to create many PrismaHabits.
     * @example
     * // Create many PrismaHabits
     * const prismaHabit = await prisma.prismaHabit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrismaHabits and only return the `id`
     * const prismaHabitWithIdOnly = await prisma.prismaHabit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrismaHabitCreateManyAndReturnArgs>(args?: SelectSubset<T, PrismaHabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PrismaHabit.
     * @param {PrismaHabitDeleteArgs} args - Arguments to delete one PrismaHabit.
     * @example
     * // Delete one PrismaHabit
     * const PrismaHabit = await prisma.prismaHabit.delete({
     *   where: {
     *     // ... filter to delete one PrismaHabit
     *   }
     * })
     * 
     */
    delete<T extends PrismaHabitDeleteArgs>(args: SelectSubset<T, PrismaHabitDeleteArgs<ExtArgs>>): Prisma__PrismaHabitClient<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PrismaHabit.
     * @param {PrismaHabitUpdateArgs} args - Arguments to update one PrismaHabit.
     * @example
     * // Update one PrismaHabit
     * const prismaHabit = await prisma.prismaHabit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrismaHabitUpdateArgs>(args: SelectSubset<T, PrismaHabitUpdateArgs<ExtArgs>>): Prisma__PrismaHabitClient<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PrismaHabits.
     * @param {PrismaHabitDeleteManyArgs} args - Arguments to filter PrismaHabits to delete.
     * @example
     * // Delete a few PrismaHabits
     * const { count } = await prisma.prismaHabit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrismaHabitDeleteManyArgs>(args?: SelectSubset<T, PrismaHabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrismaHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaHabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrismaHabits
     * const prismaHabit = await prisma.prismaHabit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrismaHabitUpdateManyArgs>(args: SelectSubset<T, PrismaHabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrismaHabit.
     * @param {PrismaHabitUpsertArgs} args - Arguments to update or create a PrismaHabit.
     * @example
     * // Update or create a PrismaHabit
     * const prismaHabit = await prisma.prismaHabit.upsert({
     *   create: {
     *     // ... data to create a PrismaHabit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrismaHabit we want to update
     *   }
     * })
     */
    upsert<T extends PrismaHabitUpsertArgs>(args: SelectSubset<T, PrismaHabitUpsertArgs<ExtArgs>>): Prisma__PrismaHabitClient<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PrismaHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaHabitCountArgs} args - Arguments to filter PrismaHabits to count.
     * @example
     * // Count the number of PrismaHabits
     * const count = await prisma.prismaHabit.count({
     *   where: {
     *     // ... the filter for the PrismaHabits we want to count
     *   }
     * })
    **/
    count<T extends PrismaHabitCountArgs>(
      args?: Subset<T, PrismaHabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrismaHabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrismaHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaHabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrismaHabitAggregateArgs>(args: Subset<T, PrismaHabitAggregateArgs>): Prisma.PrismaPromise<GetPrismaHabitAggregateType<T>>

    /**
     * Group by PrismaHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaHabitGroupByArgs} args - Group by arguments.
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
      T extends PrismaHabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrismaHabitGroupByArgs['orderBy'] }
        : { orderBy?: PrismaHabitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrismaHabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrismaHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrismaHabit model
   */
  readonly fields: PrismaHabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrismaHabit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrismaHabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prismaDayHabits<T extends PrismaHabit$prismaDayHabitsArgs<ExtArgs> = {}>(args?: Subset<T, PrismaHabit$prismaDayHabitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "findMany"> | Null>
    prismaHabitWeekDays<T extends PrismaHabit$prismaHabitWeekDaysArgs<ExtArgs> = {}>(args?: Subset<T, PrismaHabit$prismaHabitWeekDaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PrismaHabit model
   */ 
  interface PrismaHabitFieldRefs {
    readonly id: FieldRef<"PrismaHabit", 'String'>
    readonly title: FieldRef<"PrismaHabit", 'String'>
    readonly createdAt: FieldRef<"PrismaHabit", 'DateTime'>
    readonly userId: FieldRef<"PrismaHabit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PrismaHabit findUnique
   */
  export type PrismaHabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabit
     */
    select?: PrismaHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaHabit to fetch.
     */
    where: PrismaHabitWhereUniqueInput
  }

  /**
   * PrismaHabit findUniqueOrThrow
   */
  export type PrismaHabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabit
     */
    select?: PrismaHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaHabit to fetch.
     */
    where: PrismaHabitWhereUniqueInput
  }

  /**
   * PrismaHabit findFirst
   */
  export type PrismaHabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabit
     */
    select?: PrismaHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaHabit to fetch.
     */
    where?: PrismaHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaHabits to fetch.
     */
    orderBy?: PrismaHabitOrderByWithRelationInput | PrismaHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrismaHabits.
     */
    cursor?: PrismaHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrismaHabits.
     */
    distinct?: PrismaHabitScalarFieldEnum | PrismaHabitScalarFieldEnum[]
  }

  /**
   * PrismaHabit findFirstOrThrow
   */
  export type PrismaHabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabit
     */
    select?: PrismaHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaHabit to fetch.
     */
    where?: PrismaHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaHabits to fetch.
     */
    orderBy?: PrismaHabitOrderByWithRelationInput | PrismaHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrismaHabits.
     */
    cursor?: PrismaHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrismaHabits.
     */
    distinct?: PrismaHabitScalarFieldEnum | PrismaHabitScalarFieldEnum[]
  }

  /**
   * PrismaHabit findMany
   */
  export type PrismaHabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabit
     */
    select?: PrismaHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaHabits to fetch.
     */
    where?: PrismaHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaHabits to fetch.
     */
    orderBy?: PrismaHabitOrderByWithRelationInput | PrismaHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrismaHabits.
     */
    cursor?: PrismaHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaHabits.
     */
    skip?: number
    distinct?: PrismaHabitScalarFieldEnum | PrismaHabitScalarFieldEnum[]
  }

  /**
   * PrismaHabit create
   */
  export type PrismaHabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabit
     */
    select?: PrismaHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaHabitInclude<ExtArgs> | null
    /**
     * The data needed to create a PrismaHabit.
     */
    data: XOR<PrismaHabitCreateInput, PrismaHabitUncheckedCreateInput>
  }

  /**
   * PrismaHabit createMany
   */
  export type PrismaHabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrismaHabits.
     */
    data: PrismaHabitCreateManyInput | PrismaHabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrismaHabit createManyAndReturn
   */
  export type PrismaHabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabit
     */
    select?: PrismaHabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PrismaHabits.
     */
    data: PrismaHabitCreateManyInput | PrismaHabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrismaHabit update
   */
  export type PrismaHabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabit
     */
    select?: PrismaHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaHabitInclude<ExtArgs> | null
    /**
     * The data needed to update a PrismaHabit.
     */
    data: XOR<PrismaHabitUpdateInput, PrismaHabitUncheckedUpdateInput>
    /**
     * Choose, which PrismaHabit to update.
     */
    where: PrismaHabitWhereUniqueInput
  }

  /**
   * PrismaHabit updateMany
   */
  export type PrismaHabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrismaHabits.
     */
    data: XOR<PrismaHabitUpdateManyMutationInput, PrismaHabitUncheckedUpdateManyInput>
    /**
     * Filter which PrismaHabits to update
     */
    where?: PrismaHabitWhereInput
  }

  /**
   * PrismaHabit upsert
   */
  export type PrismaHabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabit
     */
    select?: PrismaHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaHabitInclude<ExtArgs> | null
    /**
     * The filter to search for the PrismaHabit to update in case it exists.
     */
    where: PrismaHabitWhereUniqueInput
    /**
     * In case the PrismaHabit found by the `where` argument doesn't exist, create a new PrismaHabit with this data.
     */
    create: XOR<PrismaHabitCreateInput, PrismaHabitUncheckedCreateInput>
    /**
     * In case the PrismaHabit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrismaHabitUpdateInput, PrismaHabitUncheckedUpdateInput>
  }

  /**
   * PrismaHabit delete
   */
  export type PrismaHabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabit
     */
    select?: PrismaHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaHabitInclude<ExtArgs> | null
    /**
     * Filter which PrismaHabit to delete.
     */
    where: PrismaHabitWhereUniqueInput
  }

  /**
   * PrismaHabit deleteMany
   */
  export type PrismaHabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrismaHabits to delete
     */
    where?: PrismaHabitWhereInput
  }

  /**
   * PrismaHabit.prismaDayHabits
   */
  export type PrismaHabit$prismaDayHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    where?: PrismaDayHabitWhereInput
    orderBy?: PrismaDayHabitOrderByWithRelationInput | PrismaDayHabitOrderByWithRelationInput[]
    cursor?: PrismaDayHabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrismaDayHabitScalarFieldEnum | PrismaDayHabitScalarFieldEnum[]
  }

  /**
   * PrismaHabit.prismaHabitWeekDays
   */
  export type PrismaHabit$prismaHabitWeekDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
    where?: PrismaWeekDayHabitWhereInput
    orderBy?: PrismaWeekDayHabitOrderByWithRelationInput | PrismaWeekDayHabitOrderByWithRelationInput[]
    cursor?: PrismaWeekDayHabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrismaWeekDayHabitScalarFieldEnum | PrismaWeekDayHabitScalarFieldEnum[]
  }

  /**
   * PrismaHabit without action
   */
  export type PrismaHabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaHabit
     */
    select?: PrismaHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaHabitInclude<ExtArgs> | null
  }


  /**
   * Model PrismaDay
   */

  export type AggregatePrismaDay = {
    _count: PrismaDayCountAggregateOutputType | null
    _min: PrismaDayMinAggregateOutputType | null
    _max: PrismaDayMaxAggregateOutputType | null
  }

  export type PrismaDayMinAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrismaDayMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrismaDayCountAggregateOutputType = {
    id: number
    date: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrismaDayMinAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrismaDayMaxAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrismaDayCountAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrismaDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrismaDay to aggregate.
     */
    where?: PrismaDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaDays to fetch.
     */
    orderBy?: PrismaDayOrderByWithRelationInput | PrismaDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrismaDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrismaDays
    **/
    _count?: true | PrismaDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrismaDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrismaDayMaxAggregateInputType
  }

  export type GetPrismaDayAggregateType<T extends PrismaDayAggregateArgs> = {
        [P in keyof T & keyof AggregatePrismaDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrismaDay[P]>
      : GetScalarType<T[P], AggregatePrismaDay[P]>
  }




  export type PrismaDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrismaDayWhereInput
    orderBy?: PrismaDayOrderByWithAggregationInput | PrismaDayOrderByWithAggregationInput[]
    by: PrismaDayScalarFieldEnum[] | PrismaDayScalarFieldEnum
    having?: PrismaDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrismaDayCountAggregateInputType | true
    _min?: PrismaDayMinAggregateInputType
    _max?: PrismaDayMaxAggregateInputType
  }

  export type PrismaDayGroupByOutputType = {
    id: string
    date: Date
    userId: string
    createdAt: Date
    updatedAt: Date | null
    _count: PrismaDayCountAggregateOutputType | null
    _min: PrismaDayMinAggregateOutputType | null
    _max: PrismaDayMaxAggregateOutputType | null
  }

  type GetPrismaDayGroupByPayload<T extends PrismaDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrismaDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrismaDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrismaDayGroupByOutputType[P]>
            : GetScalarType<T[P], PrismaDayGroupByOutputType[P]>
        }
      >
    >


  export type PrismaDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
    prismaDayHabits?: boolean | PrismaDay$prismaDayHabitsArgs<ExtArgs>
    _count?: boolean | PrismaDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prismaDay"]>

  export type PrismaDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prismaDay"]>

  export type PrismaDaySelectScalar = {
    id?: boolean
    date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PrismaDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
    prismaDayHabits?: boolean | PrismaDay$prismaDayHabitsArgs<ExtArgs>
    _count?: boolean | PrismaDayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrismaDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
  }

  export type $PrismaDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrismaDay"
    objects: {
      user: Prisma.$PrismaUserPayload<ExtArgs>
      prismaDayHabits: Prisma.$PrismaDayHabitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      userId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["prismaDay"]>
    composites: {}
  }

  type PrismaDayGetPayload<S extends boolean | null | undefined | PrismaDayDefaultArgs> = $Result.GetResult<Prisma.$PrismaDayPayload, S>

  type PrismaDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PrismaDayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PrismaDayCountAggregateInputType | true
    }

  export interface PrismaDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrismaDay'], meta: { name: 'PrismaDay' } }
    /**
     * Find zero or one PrismaDay that matches the filter.
     * @param {PrismaDayFindUniqueArgs} args - Arguments to find a PrismaDay
     * @example
     * // Get one PrismaDay
     * const prismaDay = await prisma.prismaDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrismaDayFindUniqueArgs>(args: SelectSubset<T, PrismaDayFindUniqueArgs<ExtArgs>>): Prisma__PrismaDayClient<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PrismaDay that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PrismaDayFindUniqueOrThrowArgs} args - Arguments to find a PrismaDay
     * @example
     * // Get one PrismaDay
     * const prismaDay = await prisma.prismaDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrismaDayFindUniqueOrThrowArgs>(args: SelectSubset<T, PrismaDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrismaDayClient<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PrismaDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayFindFirstArgs} args - Arguments to find a PrismaDay
     * @example
     * // Get one PrismaDay
     * const prismaDay = await prisma.prismaDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrismaDayFindFirstArgs>(args?: SelectSubset<T, PrismaDayFindFirstArgs<ExtArgs>>): Prisma__PrismaDayClient<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PrismaDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayFindFirstOrThrowArgs} args - Arguments to find a PrismaDay
     * @example
     * // Get one PrismaDay
     * const prismaDay = await prisma.prismaDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrismaDayFindFirstOrThrowArgs>(args?: SelectSubset<T, PrismaDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrismaDayClient<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PrismaDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrismaDays
     * const prismaDays = await prisma.prismaDay.findMany()
     * 
     * // Get first 10 PrismaDays
     * const prismaDays = await prisma.prismaDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prismaDayWithIdOnly = await prisma.prismaDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrismaDayFindManyArgs>(args?: SelectSubset<T, PrismaDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PrismaDay.
     * @param {PrismaDayCreateArgs} args - Arguments to create a PrismaDay.
     * @example
     * // Create one PrismaDay
     * const PrismaDay = await prisma.prismaDay.create({
     *   data: {
     *     // ... data to create a PrismaDay
     *   }
     * })
     * 
     */
    create<T extends PrismaDayCreateArgs>(args: SelectSubset<T, PrismaDayCreateArgs<ExtArgs>>): Prisma__PrismaDayClient<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PrismaDays.
     * @param {PrismaDayCreateManyArgs} args - Arguments to create many PrismaDays.
     * @example
     * // Create many PrismaDays
     * const prismaDay = await prisma.prismaDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrismaDayCreateManyArgs>(args?: SelectSubset<T, PrismaDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrismaDays and returns the data saved in the database.
     * @param {PrismaDayCreateManyAndReturnArgs} args - Arguments to create many PrismaDays.
     * @example
     * // Create many PrismaDays
     * const prismaDay = await prisma.prismaDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrismaDays and only return the `id`
     * const prismaDayWithIdOnly = await prisma.prismaDay.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrismaDayCreateManyAndReturnArgs>(args?: SelectSubset<T, PrismaDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PrismaDay.
     * @param {PrismaDayDeleteArgs} args - Arguments to delete one PrismaDay.
     * @example
     * // Delete one PrismaDay
     * const PrismaDay = await prisma.prismaDay.delete({
     *   where: {
     *     // ... filter to delete one PrismaDay
     *   }
     * })
     * 
     */
    delete<T extends PrismaDayDeleteArgs>(args: SelectSubset<T, PrismaDayDeleteArgs<ExtArgs>>): Prisma__PrismaDayClient<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PrismaDay.
     * @param {PrismaDayUpdateArgs} args - Arguments to update one PrismaDay.
     * @example
     * // Update one PrismaDay
     * const prismaDay = await prisma.prismaDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrismaDayUpdateArgs>(args: SelectSubset<T, PrismaDayUpdateArgs<ExtArgs>>): Prisma__PrismaDayClient<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PrismaDays.
     * @param {PrismaDayDeleteManyArgs} args - Arguments to filter PrismaDays to delete.
     * @example
     * // Delete a few PrismaDays
     * const { count } = await prisma.prismaDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrismaDayDeleteManyArgs>(args?: SelectSubset<T, PrismaDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrismaDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrismaDays
     * const prismaDay = await prisma.prismaDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrismaDayUpdateManyArgs>(args: SelectSubset<T, PrismaDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrismaDay.
     * @param {PrismaDayUpsertArgs} args - Arguments to update or create a PrismaDay.
     * @example
     * // Update or create a PrismaDay
     * const prismaDay = await prisma.prismaDay.upsert({
     *   create: {
     *     // ... data to create a PrismaDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrismaDay we want to update
     *   }
     * })
     */
    upsert<T extends PrismaDayUpsertArgs>(args: SelectSubset<T, PrismaDayUpsertArgs<ExtArgs>>): Prisma__PrismaDayClient<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PrismaDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayCountArgs} args - Arguments to filter PrismaDays to count.
     * @example
     * // Count the number of PrismaDays
     * const count = await prisma.prismaDay.count({
     *   where: {
     *     // ... the filter for the PrismaDays we want to count
     *   }
     * })
    **/
    count<T extends PrismaDayCountArgs>(
      args?: Subset<T, PrismaDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrismaDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrismaDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrismaDayAggregateArgs>(args: Subset<T, PrismaDayAggregateArgs>): Prisma.PrismaPromise<GetPrismaDayAggregateType<T>>

    /**
     * Group by PrismaDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayGroupByArgs} args - Group by arguments.
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
      T extends PrismaDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrismaDayGroupByArgs['orderBy'] }
        : { orderBy?: PrismaDayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrismaDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrismaDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrismaDay model
   */
  readonly fields: PrismaDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrismaDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrismaDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends PrismaUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrismaUserDefaultArgs<ExtArgs>>): Prisma__PrismaUserClient<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    prismaDayHabits<T extends PrismaDay$prismaDayHabitsArgs<ExtArgs> = {}>(args?: Subset<T, PrismaDay$prismaDayHabitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PrismaDay model
   */ 
  interface PrismaDayFieldRefs {
    readonly id: FieldRef<"PrismaDay", 'String'>
    readonly date: FieldRef<"PrismaDay", 'DateTime'>
    readonly userId: FieldRef<"PrismaDay", 'String'>
    readonly createdAt: FieldRef<"PrismaDay", 'DateTime'>
    readonly updatedAt: FieldRef<"PrismaDay", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrismaDay findUnique
   */
  export type PrismaDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayInclude<ExtArgs> | null
    /**
     * Filter, which PrismaDay to fetch.
     */
    where: PrismaDayWhereUniqueInput
  }

  /**
   * PrismaDay findUniqueOrThrow
   */
  export type PrismaDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayInclude<ExtArgs> | null
    /**
     * Filter, which PrismaDay to fetch.
     */
    where: PrismaDayWhereUniqueInput
  }

  /**
   * PrismaDay findFirst
   */
  export type PrismaDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayInclude<ExtArgs> | null
    /**
     * Filter, which PrismaDay to fetch.
     */
    where?: PrismaDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaDays to fetch.
     */
    orderBy?: PrismaDayOrderByWithRelationInput | PrismaDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrismaDays.
     */
    cursor?: PrismaDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrismaDays.
     */
    distinct?: PrismaDayScalarFieldEnum | PrismaDayScalarFieldEnum[]
  }

  /**
   * PrismaDay findFirstOrThrow
   */
  export type PrismaDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayInclude<ExtArgs> | null
    /**
     * Filter, which PrismaDay to fetch.
     */
    where?: PrismaDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaDays to fetch.
     */
    orderBy?: PrismaDayOrderByWithRelationInput | PrismaDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrismaDays.
     */
    cursor?: PrismaDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrismaDays.
     */
    distinct?: PrismaDayScalarFieldEnum | PrismaDayScalarFieldEnum[]
  }

  /**
   * PrismaDay findMany
   */
  export type PrismaDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayInclude<ExtArgs> | null
    /**
     * Filter, which PrismaDays to fetch.
     */
    where?: PrismaDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaDays to fetch.
     */
    orderBy?: PrismaDayOrderByWithRelationInput | PrismaDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrismaDays.
     */
    cursor?: PrismaDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaDays.
     */
    skip?: number
    distinct?: PrismaDayScalarFieldEnum | PrismaDayScalarFieldEnum[]
  }

  /**
   * PrismaDay create
   */
  export type PrismaDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayInclude<ExtArgs> | null
    /**
     * The data needed to create a PrismaDay.
     */
    data: XOR<PrismaDayCreateInput, PrismaDayUncheckedCreateInput>
  }

  /**
   * PrismaDay createMany
   */
  export type PrismaDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrismaDays.
     */
    data: PrismaDayCreateManyInput | PrismaDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrismaDay createManyAndReturn
   */
  export type PrismaDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PrismaDays.
     */
    data: PrismaDayCreateManyInput | PrismaDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrismaDay update
   */
  export type PrismaDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayInclude<ExtArgs> | null
    /**
     * The data needed to update a PrismaDay.
     */
    data: XOR<PrismaDayUpdateInput, PrismaDayUncheckedUpdateInput>
    /**
     * Choose, which PrismaDay to update.
     */
    where: PrismaDayWhereUniqueInput
  }

  /**
   * PrismaDay updateMany
   */
  export type PrismaDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrismaDays.
     */
    data: XOR<PrismaDayUpdateManyMutationInput, PrismaDayUncheckedUpdateManyInput>
    /**
     * Filter which PrismaDays to update
     */
    where?: PrismaDayWhereInput
  }

  /**
   * PrismaDay upsert
   */
  export type PrismaDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayInclude<ExtArgs> | null
    /**
     * The filter to search for the PrismaDay to update in case it exists.
     */
    where: PrismaDayWhereUniqueInput
    /**
     * In case the PrismaDay found by the `where` argument doesn't exist, create a new PrismaDay with this data.
     */
    create: XOR<PrismaDayCreateInput, PrismaDayUncheckedCreateInput>
    /**
     * In case the PrismaDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrismaDayUpdateInput, PrismaDayUncheckedUpdateInput>
  }

  /**
   * PrismaDay delete
   */
  export type PrismaDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayInclude<ExtArgs> | null
    /**
     * Filter which PrismaDay to delete.
     */
    where: PrismaDayWhereUniqueInput
  }

  /**
   * PrismaDay deleteMany
   */
  export type PrismaDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrismaDays to delete
     */
    where?: PrismaDayWhereInput
  }

  /**
   * PrismaDay.prismaDayHabits
   */
  export type PrismaDay$prismaDayHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    where?: PrismaDayHabitWhereInput
    orderBy?: PrismaDayHabitOrderByWithRelationInput | PrismaDayHabitOrderByWithRelationInput[]
    cursor?: PrismaDayHabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrismaDayHabitScalarFieldEnum | PrismaDayHabitScalarFieldEnum[]
  }

  /**
   * PrismaDay without action
   */
  export type PrismaDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayInclude<ExtArgs> | null
  }


  /**
   * Model PrismaDayHabit
   */

  export type AggregatePrismaDayHabit = {
    _count: PrismaDayHabitCountAggregateOutputType | null
    _min: PrismaDayHabitMinAggregateOutputType | null
    _max: PrismaDayHabitMaxAggregateOutputType | null
  }

  export type PrismaDayHabitMinAggregateOutputType = {
    id: string | null
    habitId: string | null
    dayId: string | null
    userId: string | null
  }

  export type PrismaDayHabitMaxAggregateOutputType = {
    id: string | null
    habitId: string | null
    dayId: string | null
    userId: string | null
  }

  export type PrismaDayHabitCountAggregateOutputType = {
    id: number
    habitId: number
    dayId: number
    userId: number
    _all: number
  }


  export type PrismaDayHabitMinAggregateInputType = {
    id?: true
    habitId?: true
    dayId?: true
    userId?: true
  }

  export type PrismaDayHabitMaxAggregateInputType = {
    id?: true
    habitId?: true
    dayId?: true
    userId?: true
  }

  export type PrismaDayHabitCountAggregateInputType = {
    id?: true
    habitId?: true
    dayId?: true
    userId?: true
    _all?: true
  }

  export type PrismaDayHabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrismaDayHabit to aggregate.
     */
    where?: PrismaDayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaDayHabits to fetch.
     */
    orderBy?: PrismaDayHabitOrderByWithRelationInput | PrismaDayHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrismaDayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaDayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaDayHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrismaDayHabits
    **/
    _count?: true | PrismaDayHabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrismaDayHabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrismaDayHabitMaxAggregateInputType
  }

  export type GetPrismaDayHabitAggregateType<T extends PrismaDayHabitAggregateArgs> = {
        [P in keyof T & keyof AggregatePrismaDayHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrismaDayHabit[P]>
      : GetScalarType<T[P], AggregatePrismaDayHabit[P]>
  }




  export type PrismaDayHabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrismaDayHabitWhereInput
    orderBy?: PrismaDayHabitOrderByWithAggregationInput | PrismaDayHabitOrderByWithAggregationInput[]
    by: PrismaDayHabitScalarFieldEnum[] | PrismaDayHabitScalarFieldEnum
    having?: PrismaDayHabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrismaDayHabitCountAggregateInputType | true
    _min?: PrismaDayHabitMinAggregateInputType
    _max?: PrismaDayHabitMaxAggregateInputType
  }

  export type PrismaDayHabitGroupByOutputType = {
    id: string
    habitId: string
    dayId: string
    userId: string
    _count: PrismaDayHabitCountAggregateOutputType | null
    _min: PrismaDayHabitMinAggregateOutputType | null
    _max: PrismaDayHabitMaxAggregateOutputType | null
  }

  type GetPrismaDayHabitGroupByPayload<T extends PrismaDayHabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrismaDayHabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrismaDayHabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrismaDayHabitGroupByOutputType[P]>
            : GetScalarType<T[P], PrismaDayHabitGroupByOutputType[P]>
        }
      >
    >


  export type PrismaDayHabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    dayId?: boolean
    userId?: boolean
    habit?: boolean | PrismaHabitDefaultArgs<ExtArgs>
    day?: boolean | PrismaDayDefaultArgs<ExtArgs>
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prismaDayHabit"]>

  export type PrismaDayHabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    dayId?: boolean
    userId?: boolean
    habit?: boolean | PrismaHabitDefaultArgs<ExtArgs>
    day?: boolean | PrismaDayDefaultArgs<ExtArgs>
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prismaDayHabit"]>

  export type PrismaDayHabitSelectScalar = {
    id?: boolean
    habitId?: boolean
    dayId?: boolean
    userId?: boolean
  }

  export type PrismaDayHabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | PrismaHabitDefaultArgs<ExtArgs>
    day?: boolean | PrismaDayDefaultArgs<ExtArgs>
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
  }
  export type PrismaDayHabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | PrismaHabitDefaultArgs<ExtArgs>
    day?: boolean | PrismaDayDefaultArgs<ExtArgs>
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
  }

  export type $PrismaDayHabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrismaDayHabit"
    objects: {
      habit: Prisma.$PrismaHabitPayload<ExtArgs>
      day: Prisma.$PrismaDayPayload<ExtArgs>
      user: Prisma.$PrismaUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      habitId: string
      dayId: string
      userId: string
    }, ExtArgs["result"]["prismaDayHabit"]>
    composites: {}
  }

  type PrismaDayHabitGetPayload<S extends boolean | null | undefined | PrismaDayHabitDefaultArgs> = $Result.GetResult<Prisma.$PrismaDayHabitPayload, S>

  type PrismaDayHabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PrismaDayHabitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PrismaDayHabitCountAggregateInputType | true
    }

  export interface PrismaDayHabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrismaDayHabit'], meta: { name: 'PrismaDayHabit' } }
    /**
     * Find zero or one PrismaDayHabit that matches the filter.
     * @param {PrismaDayHabitFindUniqueArgs} args - Arguments to find a PrismaDayHabit
     * @example
     * // Get one PrismaDayHabit
     * const prismaDayHabit = await prisma.prismaDayHabit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrismaDayHabitFindUniqueArgs>(args: SelectSubset<T, PrismaDayHabitFindUniqueArgs<ExtArgs>>): Prisma__PrismaDayHabitClient<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PrismaDayHabit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PrismaDayHabitFindUniqueOrThrowArgs} args - Arguments to find a PrismaDayHabit
     * @example
     * // Get one PrismaDayHabit
     * const prismaDayHabit = await prisma.prismaDayHabit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrismaDayHabitFindUniqueOrThrowArgs>(args: SelectSubset<T, PrismaDayHabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrismaDayHabitClient<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PrismaDayHabit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayHabitFindFirstArgs} args - Arguments to find a PrismaDayHabit
     * @example
     * // Get one PrismaDayHabit
     * const prismaDayHabit = await prisma.prismaDayHabit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrismaDayHabitFindFirstArgs>(args?: SelectSubset<T, PrismaDayHabitFindFirstArgs<ExtArgs>>): Prisma__PrismaDayHabitClient<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PrismaDayHabit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayHabitFindFirstOrThrowArgs} args - Arguments to find a PrismaDayHabit
     * @example
     * // Get one PrismaDayHabit
     * const prismaDayHabit = await prisma.prismaDayHabit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrismaDayHabitFindFirstOrThrowArgs>(args?: SelectSubset<T, PrismaDayHabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrismaDayHabitClient<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PrismaDayHabits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayHabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrismaDayHabits
     * const prismaDayHabits = await prisma.prismaDayHabit.findMany()
     * 
     * // Get first 10 PrismaDayHabits
     * const prismaDayHabits = await prisma.prismaDayHabit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prismaDayHabitWithIdOnly = await prisma.prismaDayHabit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrismaDayHabitFindManyArgs>(args?: SelectSubset<T, PrismaDayHabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PrismaDayHabit.
     * @param {PrismaDayHabitCreateArgs} args - Arguments to create a PrismaDayHabit.
     * @example
     * // Create one PrismaDayHabit
     * const PrismaDayHabit = await prisma.prismaDayHabit.create({
     *   data: {
     *     // ... data to create a PrismaDayHabit
     *   }
     * })
     * 
     */
    create<T extends PrismaDayHabitCreateArgs>(args: SelectSubset<T, PrismaDayHabitCreateArgs<ExtArgs>>): Prisma__PrismaDayHabitClient<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PrismaDayHabits.
     * @param {PrismaDayHabitCreateManyArgs} args - Arguments to create many PrismaDayHabits.
     * @example
     * // Create many PrismaDayHabits
     * const prismaDayHabit = await prisma.prismaDayHabit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrismaDayHabitCreateManyArgs>(args?: SelectSubset<T, PrismaDayHabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrismaDayHabits and returns the data saved in the database.
     * @param {PrismaDayHabitCreateManyAndReturnArgs} args - Arguments to create many PrismaDayHabits.
     * @example
     * // Create many PrismaDayHabits
     * const prismaDayHabit = await prisma.prismaDayHabit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrismaDayHabits and only return the `id`
     * const prismaDayHabitWithIdOnly = await prisma.prismaDayHabit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrismaDayHabitCreateManyAndReturnArgs>(args?: SelectSubset<T, PrismaDayHabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PrismaDayHabit.
     * @param {PrismaDayHabitDeleteArgs} args - Arguments to delete one PrismaDayHabit.
     * @example
     * // Delete one PrismaDayHabit
     * const PrismaDayHabit = await prisma.prismaDayHabit.delete({
     *   where: {
     *     // ... filter to delete one PrismaDayHabit
     *   }
     * })
     * 
     */
    delete<T extends PrismaDayHabitDeleteArgs>(args: SelectSubset<T, PrismaDayHabitDeleteArgs<ExtArgs>>): Prisma__PrismaDayHabitClient<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PrismaDayHabit.
     * @param {PrismaDayHabitUpdateArgs} args - Arguments to update one PrismaDayHabit.
     * @example
     * // Update one PrismaDayHabit
     * const prismaDayHabit = await prisma.prismaDayHabit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrismaDayHabitUpdateArgs>(args: SelectSubset<T, PrismaDayHabitUpdateArgs<ExtArgs>>): Prisma__PrismaDayHabitClient<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PrismaDayHabits.
     * @param {PrismaDayHabitDeleteManyArgs} args - Arguments to filter PrismaDayHabits to delete.
     * @example
     * // Delete a few PrismaDayHabits
     * const { count } = await prisma.prismaDayHabit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrismaDayHabitDeleteManyArgs>(args?: SelectSubset<T, PrismaDayHabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrismaDayHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayHabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrismaDayHabits
     * const prismaDayHabit = await prisma.prismaDayHabit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrismaDayHabitUpdateManyArgs>(args: SelectSubset<T, PrismaDayHabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrismaDayHabit.
     * @param {PrismaDayHabitUpsertArgs} args - Arguments to update or create a PrismaDayHabit.
     * @example
     * // Update or create a PrismaDayHabit
     * const prismaDayHabit = await prisma.prismaDayHabit.upsert({
     *   create: {
     *     // ... data to create a PrismaDayHabit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrismaDayHabit we want to update
     *   }
     * })
     */
    upsert<T extends PrismaDayHabitUpsertArgs>(args: SelectSubset<T, PrismaDayHabitUpsertArgs<ExtArgs>>): Prisma__PrismaDayHabitClient<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PrismaDayHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayHabitCountArgs} args - Arguments to filter PrismaDayHabits to count.
     * @example
     * // Count the number of PrismaDayHabits
     * const count = await prisma.prismaDayHabit.count({
     *   where: {
     *     // ... the filter for the PrismaDayHabits we want to count
     *   }
     * })
    **/
    count<T extends PrismaDayHabitCountArgs>(
      args?: Subset<T, PrismaDayHabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrismaDayHabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrismaDayHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayHabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrismaDayHabitAggregateArgs>(args: Subset<T, PrismaDayHabitAggregateArgs>): Prisma.PrismaPromise<GetPrismaDayHabitAggregateType<T>>

    /**
     * Group by PrismaDayHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaDayHabitGroupByArgs} args - Group by arguments.
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
      T extends PrismaDayHabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrismaDayHabitGroupByArgs['orderBy'] }
        : { orderBy?: PrismaDayHabitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrismaDayHabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrismaDayHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrismaDayHabit model
   */
  readonly fields: PrismaDayHabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrismaDayHabit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrismaDayHabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends PrismaHabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrismaHabitDefaultArgs<ExtArgs>>): Prisma__PrismaHabitClient<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    day<T extends PrismaDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrismaDayDefaultArgs<ExtArgs>>): Prisma__PrismaDayClient<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends PrismaUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrismaUserDefaultArgs<ExtArgs>>): Prisma__PrismaUserClient<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PrismaDayHabit model
   */ 
  interface PrismaDayHabitFieldRefs {
    readonly id: FieldRef<"PrismaDayHabit", 'String'>
    readonly habitId: FieldRef<"PrismaDayHabit", 'String'>
    readonly dayId: FieldRef<"PrismaDayHabit", 'String'>
    readonly userId: FieldRef<"PrismaDayHabit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PrismaDayHabit findUnique
   */
  export type PrismaDayHabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaDayHabit to fetch.
     */
    where: PrismaDayHabitWhereUniqueInput
  }

  /**
   * PrismaDayHabit findUniqueOrThrow
   */
  export type PrismaDayHabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaDayHabit to fetch.
     */
    where: PrismaDayHabitWhereUniqueInput
  }

  /**
   * PrismaDayHabit findFirst
   */
  export type PrismaDayHabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaDayHabit to fetch.
     */
    where?: PrismaDayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaDayHabits to fetch.
     */
    orderBy?: PrismaDayHabitOrderByWithRelationInput | PrismaDayHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrismaDayHabits.
     */
    cursor?: PrismaDayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaDayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaDayHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrismaDayHabits.
     */
    distinct?: PrismaDayHabitScalarFieldEnum | PrismaDayHabitScalarFieldEnum[]
  }

  /**
   * PrismaDayHabit findFirstOrThrow
   */
  export type PrismaDayHabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaDayHabit to fetch.
     */
    where?: PrismaDayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaDayHabits to fetch.
     */
    orderBy?: PrismaDayHabitOrderByWithRelationInput | PrismaDayHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrismaDayHabits.
     */
    cursor?: PrismaDayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaDayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaDayHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrismaDayHabits.
     */
    distinct?: PrismaDayHabitScalarFieldEnum | PrismaDayHabitScalarFieldEnum[]
  }

  /**
   * PrismaDayHabit findMany
   */
  export type PrismaDayHabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaDayHabits to fetch.
     */
    where?: PrismaDayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaDayHabits to fetch.
     */
    orderBy?: PrismaDayHabitOrderByWithRelationInput | PrismaDayHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrismaDayHabits.
     */
    cursor?: PrismaDayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaDayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaDayHabits.
     */
    skip?: number
    distinct?: PrismaDayHabitScalarFieldEnum | PrismaDayHabitScalarFieldEnum[]
  }

  /**
   * PrismaDayHabit create
   */
  export type PrismaDayHabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    /**
     * The data needed to create a PrismaDayHabit.
     */
    data: XOR<PrismaDayHabitCreateInput, PrismaDayHabitUncheckedCreateInput>
  }

  /**
   * PrismaDayHabit createMany
   */
  export type PrismaDayHabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrismaDayHabits.
     */
    data: PrismaDayHabitCreateManyInput | PrismaDayHabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrismaDayHabit createManyAndReturn
   */
  export type PrismaDayHabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PrismaDayHabits.
     */
    data: PrismaDayHabitCreateManyInput | PrismaDayHabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrismaDayHabit update
   */
  export type PrismaDayHabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    /**
     * The data needed to update a PrismaDayHabit.
     */
    data: XOR<PrismaDayHabitUpdateInput, PrismaDayHabitUncheckedUpdateInput>
    /**
     * Choose, which PrismaDayHabit to update.
     */
    where: PrismaDayHabitWhereUniqueInput
  }

  /**
   * PrismaDayHabit updateMany
   */
  export type PrismaDayHabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrismaDayHabits.
     */
    data: XOR<PrismaDayHabitUpdateManyMutationInput, PrismaDayHabitUncheckedUpdateManyInput>
    /**
     * Filter which PrismaDayHabits to update
     */
    where?: PrismaDayHabitWhereInput
  }

  /**
   * PrismaDayHabit upsert
   */
  export type PrismaDayHabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    /**
     * The filter to search for the PrismaDayHabit to update in case it exists.
     */
    where: PrismaDayHabitWhereUniqueInput
    /**
     * In case the PrismaDayHabit found by the `where` argument doesn't exist, create a new PrismaDayHabit with this data.
     */
    create: XOR<PrismaDayHabitCreateInput, PrismaDayHabitUncheckedCreateInput>
    /**
     * In case the PrismaDayHabit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrismaDayHabitUpdateInput, PrismaDayHabitUncheckedUpdateInput>
  }

  /**
   * PrismaDayHabit delete
   */
  export type PrismaDayHabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    /**
     * Filter which PrismaDayHabit to delete.
     */
    where: PrismaDayHabitWhereUniqueInput
  }

  /**
   * PrismaDayHabit deleteMany
   */
  export type PrismaDayHabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrismaDayHabits to delete
     */
    where?: PrismaDayHabitWhereInput
  }

  /**
   * PrismaDayHabit without action
   */
  export type PrismaDayHabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
  }


  /**
   * Model PrismaWeekDayHabit
   */

  export type AggregatePrismaWeekDayHabit = {
    _count: PrismaWeekDayHabitCountAggregateOutputType | null
    _avg: PrismaWeekDayHabitAvgAggregateOutputType | null
    _sum: PrismaWeekDayHabitSumAggregateOutputType | null
    _min: PrismaWeekDayHabitMinAggregateOutputType | null
    _max: PrismaWeekDayHabitMaxAggregateOutputType | null
  }

  export type PrismaWeekDayHabitAvgAggregateOutputType = {
    weekDay: number | null
  }

  export type PrismaWeekDayHabitSumAggregateOutputType = {
    weekDay: number | null
  }

  export type PrismaWeekDayHabitMinAggregateOutputType = {
    id: string | null
    habitId: string | null
    weekDay: number | null
    userId: string | null
  }

  export type PrismaWeekDayHabitMaxAggregateOutputType = {
    id: string | null
    habitId: string | null
    weekDay: number | null
    userId: string | null
  }

  export type PrismaWeekDayHabitCountAggregateOutputType = {
    id: number
    habitId: number
    weekDay: number
    userId: number
    _all: number
  }


  export type PrismaWeekDayHabitAvgAggregateInputType = {
    weekDay?: true
  }

  export type PrismaWeekDayHabitSumAggregateInputType = {
    weekDay?: true
  }

  export type PrismaWeekDayHabitMinAggregateInputType = {
    id?: true
    habitId?: true
    weekDay?: true
    userId?: true
  }

  export type PrismaWeekDayHabitMaxAggregateInputType = {
    id?: true
    habitId?: true
    weekDay?: true
    userId?: true
  }

  export type PrismaWeekDayHabitCountAggregateInputType = {
    id?: true
    habitId?: true
    weekDay?: true
    userId?: true
    _all?: true
  }

  export type PrismaWeekDayHabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrismaWeekDayHabit to aggregate.
     */
    where?: PrismaWeekDayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaWeekDayHabits to fetch.
     */
    orderBy?: PrismaWeekDayHabitOrderByWithRelationInput | PrismaWeekDayHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrismaWeekDayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaWeekDayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaWeekDayHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrismaWeekDayHabits
    **/
    _count?: true | PrismaWeekDayHabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrismaWeekDayHabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrismaWeekDayHabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrismaWeekDayHabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrismaWeekDayHabitMaxAggregateInputType
  }

  export type GetPrismaWeekDayHabitAggregateType<T extends PrismaWeekDayHabitAggregateArgs> = {
        [P in keyof T & keyof AggregatePrismaWeekDayHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrismaWeekDayHabit[P]>
      : GetScalarType<T[P], AggregatePrismaWeekDayHabit[P]>
  }




  export type PrismaWeekDayHabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrismaWeekDayHabitWhereInput
    orderBy?: PrismaWeekDayHabitOrderByWithAggregationInput | PrismaWeekDayHabitOrderByWithAggregationInput[]
    by: PrismaWeekDayHabitScalarFieldEnum[] | PrismaWeekDayHabitScalarFieldEnum
    having?: PrismaWeekDayHabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrismaWeekDayHabitCountAggregateInputType | true
    _avg?: PrismaWeekDayHabitAvgAggregateInputType
    _sum?: PrismaWeekDayHabitSumAggregateInputType
    _min?: PrismaWeekDayHabitMinAggregateInputType
    _max?: PrismaWeekDayHabitMaxAggregateInputType
  }

  export type PrismaWeekDayHabitGroupByOutputType = {
    id: string
    habitId: string
    weekDay: number
    userId: string
    _count: PrismaWeekDayHabitCountAggregateOutputType | null
    _avg: PrismaWeekDayHabitAvgAggregateOutputType | null
    _sum: PrismaWeekDayHabitSumAggregateOutputType | null
    _min: PrismaWeekDayHabitMinAggregateOutputType | null
    _max: PrismaWeekDayHabitMaxAggregateOutputType | null
  }

  type GetPrismaWeekDayHabitGroupByPayload<T extends PrismaWeekDayHabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrismaWeekDayHabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrismaWeekDayHabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrismaWeekDayHabitGroupByOutputType[P]>
            : GetScalarType<T[P], PrismaWeekDayHabitGroupByOutputType[P]>
        }
      >
    >


  export type PrismaWeekDayHabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    weekDay?: boolean
    userId?: boolean
    habit?: boolean | PrismaHabitDefaultArgs<ExtArgs>
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prismaWeekDayHabit"]>

  export type PrismaWeekDayHabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    weekDay?: boolean
    userId?: boolean
    habit?: boolean | PrismaHabitDefaultArgs<ExtArgs>
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prismaWeekDayHabit"]>

  export type PrismaWeekDayHabitSelectScalar = {
    id?: boolean
    habitId?: boolean
    weekDay?: boolean
    userId?: boolean
  }

  export type PrismaWeekDayHabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | PrismaHabitDefaultArgs<ExtArgs>
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
  }
  export type PrismaWeekDayHabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | PrismaHabitDefaultArgs<ExtArgs>
    user?: boolean | PrismaUserDefaultArgs<ExtArgs>
  }

  export type $PrismaWeekDayHabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrismaWeekDayHabit"
    objects: {
      habit: Prisma.$PrismaHabitPayload<ExtArgs>
      user: Prisma.$PrismaUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      habitId: string
      weekDay: number
      userId: string
    }, ExtArgs["result"]["prismaWeekDayHabit"]>
    composites: {}
  }

  type PrismaWeekDayHabitGetPayload<S extends boolean | null | undefined | PrismaWeekDayHabitDefaultArgs> = $Result.GetResult<Prisma.$PrismaWeekDayHabitPayload, S>

  type PrismaWeekDayHabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PrismaWeekDayHabitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PrismaWeekDayHabitCountAggregateInputType | true
    }

  export interface PrismaWeekDayHabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrismaWeekDayHabit'], meta: { name: 'PrismaWeekDayHabit' } }
    /**
     * Find zero or one PrismaWeekDayHabit that matches the filter.
     * @param {PrismaWeekDayHabitFindUniqueArgs} args - Arguments to find a PrismaWeekDayHabit
     * @example
     * // Get one PrismaWeekDayHabit
     * const prismaWeekDayHabit = await prisma.prismaWeekDayHabit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrismaWeekDayHabitFindUniqueArgs>(args: SelectSubset<T, PrismaWeekDayHabitFindUniqueArgs<ExtArgs>>): Prisma__PrismaWeekDayHabitClient<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PrismaWeekDayHabit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PrismaWeekDayHabitFindUniqueOrThrowArgs} args - Arguments to find a PrismaWeekDayHabit
     * @example
     * // Get one PrismaWeekDayHabit
     * const prismaWeekDayHabit = await prisma.prismaWeekDayHabit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrismaWeekDayHabitFindUniqueOrThrowArgs>(args: SelectSubset<T, PrismaWeekDayHabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrismaWeekDayHabitClient<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PrismaWeekDayHabit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaWeekDayHabitFindFirstArgs} args - Arguments to find a PrismaWeekDayHabit
     * @example
     * // Get one PrismaWeekDayHabit
     * const prismaWeekDayHabit = await prisma.prismaWeekDayHabit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrismaWeekDayHabitFindFirstArgs>(args?: SelectSubset<T, PrismaWeekDayHabitFindFirstArgs<ExtArgs>>): Prisma__PrismaWeekDayHabitClient<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PrismaWeekDayHabit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaWeekDayHabitFindFirstOrThrowArgs} args - Arguments to find a PrismaWeekDayHabit
     * @example
     * // Get one PrismaWeekDayHabit
     * const prismaWeekDayHabit = await prisma.prismaWeekDayHabit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrismaWeekDayHabitFindFirstOrThrowArgs>(args?: SelectSubset<T, PrismaWeekDayHabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrismaWeekDayHabitClient<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PrismaWeekDayHabits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaWeekDayHabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrismaWeekDayHabits
     * const prismaWeekDayHabits = await prisma.prismaWeekDayHabit.findMany()
     * 
     * // Get first 10 PrismaWeekDayHabits
     * const prismaWeekDayHabits = await prisma.prismaWeekDayHabit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prismaWeekDayHabitWithIdOnly = await prisma.prismaWeekDayHabit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrismaWeekDayHabitFindManyArgs>(args?: SelectSubset<T, PrismaWeekDayHabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PrismaWeekDayHabit.
     * @param {PrismaWeekDayHabitCreateArgs} args - Arguments to create a PrismaWeekDayHabit.
     * @example
     * // Create one PrismaWeekDayHabit
     * const PrismaWeekDayHabit = await prisma.prismaWeekDayHabit.create({
     *   data: {
     *     // ... data to create a PrismaWeekDayHabit
     *   }
     * })
     * 
     */
    create<T extends PrismaWeekDayHabitCreateArgs>(args: SelectSubset<T, PrismaWeekDayHabitCreateArgs<ExtArgs>>): Prisma__PrismaWeekDayHabitClient<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PrismaWeekDayHabits.
     * @param {PrismaWeekDayHabitCreateManyArgs} args - Arguments to create many PrismaWeekDayHabits.
     * @example
     * // Create many PrismaWeekDayHabits
     * const prismaWeekDayHabit = await prisma.prismaWeekDayHabit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrismaWeekDayHabitCreateManyArgs>(args?: SelectSubset<T, PrismaWeekDayHabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrismaWeekDayHabits and returns the data saved in the database.
     * @param {PrismaWeekDayHabitCreateManyAndReturnArgs} args - Arguments to create many PrismaWeekDayHabits.
     * @example
     * // Create many PrismaWeekDayHabits
     * const prismaWeekDayHabit = await prisma.prismaWeekDayHabit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrismaWeekDayHabits and only return the `id`
     * const prismaWeekDayHabitWithIdOnly = await prisma.prismaWeekDayHabit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrismaWeekDayHabitCreateManyAndReturnArgs>(args?: SelectSubset<T, PrismaWeekDayHabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PrismaWeekDayHabit.
     * @param {PrismaWeekDayHabitDeleteArgs} args - Arguments to delete one PrismaWeekDayHabit.
     * @example
     * // Delete one PrismaWeekDayHabit
     * const PrismaWeekDayHabit = await prisma.prismaWeekDayHabit.delete({
     *   where: {
     *     // ... filter to delete one PrismaWeekDayHabit
     *   }
     * })
     * 
     */
    delete<T extends PrismaWeekDayHabitDeleteArgs>(args: SelectSubset<T, PrismaWeekDayHabitDeleteArgs<ExtArgs>>): Prisma__PrismaWeekDayHabitClient<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PrismaWeekDayHabit.
     * @param {PrismaWeekDayHabitUpdateArgs} args - Arguments to update one PrismaWeekDayHabit.
     * @example
     * // Update one PrismaWeekDayHabit
     * const prismaWeekDayHabit = await prisma.prismaWeekDayHabit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrismaWeekDayHabitUpdateArgs>(args: SelectSubset<T, PrismaWeekDayHabitUpdateArgs<ExtArgs>>): Prisma__PrismaWeekDayHabitClient<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PrismaWeekDayHabits.
     * @param {PrismaWeekDayHabitDeleteManyArgs} args - Arguments to filter PrismaWeekDayHabits to delete.
     * @example
     * // Delete a few PrismaWeekDayHabits
     * const { count } = await prisma.prismaWeekDayHabit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrismaWeekDayHabitDeleteManyArgs>(args?: SelectSubset<T, PrismaWeekDayHabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrismaWeekDayHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaWeekDayHabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrismaWeekDayHabits
     * const prismaWeekDayHabit = await prisma.prismaWeekDayHabit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrismaWeekDayHabitUpdateManyArgs>(args: SelectSubset<T, PrismaWeekDayHabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrismaWeekDayHabit.
     * @param {PrismaWeekDayHabitUpsertArgs} args - Arguments to update or create a PrismaWeekDayHabit.
     * @example
     * // Update or create a PrismaWeekDayHabit
     * const prismaWeekDayHabit = await prisma.prismaWeekDayHabit.upsert({
     *   create: {
     *     // ... data to create a PrismaWeekDayHabit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrismaWeekDayHabit we want to update
     *   }
     * })
     */
    upsert<T extends PrismaWeekDayHabitUpsertArgs>(args: SelectSubset<T, PrismaWeekDayHabitUpsertArgs<ExtArgs>>): Prisma__PrismaWeekDayHabitClient<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PrismaWeekDayHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaWeekDayHabitCountArgs} args - Arguments to filter PrismaWeekDayHabits to count.
     * @example
     * // Count the number of PrismaWeekDayHabits
     * const count = await prisma.prismaWeekDayHabit.count({
     *   where: {
     *     // ... the filter for the PrismaWeekDayHabits we want to count
     *   }
     * })
    **/
    count<T extends PrismaWeekDayHabitCountArgs>(
      args?: Subset<T, PrismaWeekDayHabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrismaWeekDayHabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrismaWeekDayHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaWeekDayHabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrismaWeekDayHabitAggregateArgs>(args: Subset<T, PrismaWeekDayHabitAggregateArgs>): Prisma.PrismaPromise<GetPrismaWeekDayHabitAggregateType<T>>

    /**
     * Group by PrismaWeekDayHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaWeekDayHabitGroupByArgs} args - Group by arguments.
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
      T extends PrismaWeekDayHabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrismaWeekDayHabitGroupByArgs['orderBy'] }
        : { orderBy?: PrismaWeekDayHabitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrismaWeekDayHabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrismaWeekDayHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrismaWeekDayHabit model
   */
  readonly fields: PrismaWeekDayHabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrismaWeekDayHabit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrismaWeekDayHabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends PrismaHabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrismaHabitDefaultArgs<ExtArgs>>): Prisma__PrismaHabitClient<$Result.GetResult<Prisma.$PrismaHabitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends PrismaUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrismaUserDefaultArgs<ExtArgs>>): Prisma__PrismaUserClient<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PrismaWeekDayHabit model
   */ 
  interface PrismaWeekDayHabitFieldRefs {
    readonly id: FieldRef<"PrismaWeekDayHabit", 'String'>
    readonly habitId: FieldRef<"PrismaWeekDayHabit", 'String'>
    readonly weekDay: FieldRef<"PrismaWeekDayHabit", 'Int'>
    readonly userId: FieldRef<"PrismaWeekDayHabit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PrismaWeekDayHabit findUnique
   */
  export type PrismaWeekDayHabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaWeekDayHabit to fetch.
     */
    where: PrismaWeekDayHabitWhereUniqueInput
  }

  /**
   * PrismaWeekDayHabit findUniqueOrThrow
   */
  export type PrismaWeekDayHabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaWeekDayHabit to fetch.
     */
    where: PrismaWeekDayHabitWhereUniqueInput
  }

  /**
   * PrismaWeekDayHabit findFirst
   */
  export type PrismaWeekDayHabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaWeekDayHabit to fetch.
     */
    where?: PrismaWeekDayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaWeekDayHabits to fetch.
     */
    orderBy?: PrismaWeekDayHabitOrderByWithRelationInput | PrismaWeekDayHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrismaWeekDayHabits.
     */
    cursor?: PrismaWeekDayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaWeekDayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaWeekDayHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrismaWeekDayHabits.
     */
    distinct?: PrismaWeekDayHabitScalarFieldEnum | PrismaWeekDayHabitScalarFieldEnum[]
  }

  /**
   * PrismaWeekDayHabit findFirstOrThrow
   */
  export type PrismaWeekDayHabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaWeekDayHabit to fetch.
     */
    where?: PrismaWeekDayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaWeekDayHabits to fetch.
     */
    orderBy?: PrismaWeekDayHabitOrderByWithRelationInput | PrismaWeekDayHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrismaWeekDayHabits.
     */
    cursor?: PrismaWeekDayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaWeekDayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaWeekDayHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrismaWeekDayHabits.
     */
    distinct?: PrismaWeekDayHabitScalarFieldEnum | PrismaWeekDayHabitScalarFieldEnum[]
  }

  /**
   * PrismaWeekDayHabit findMany
   */
  export type PrismaWeekDayHabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
    /**
     * Filter, which PrismaWeekDayHabits to fetch.
     */
    where?: PrismaWeekDayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaWeekDayHabits to fetch.
     */
    orderBy?: PrismaWeekDayHabitOrderByWithRelationInput | PrismaWeekDayHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrismaWeekDayHabits.
     */
    cursor?: PrismaWeekDayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaWeekDayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaWeekDayHabits.
     */
    skip?: number
    distinct?: PrismaWeekDayHabitScalarFieldEnum | PrismaWeekDayHabitScalarFieldEnum[]
  }

  /**
   * PrismaWeekDayHabit create
   */
  export type PrismaWeekDayHabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
    /**
     * The data needed to create a PrismaWeekDayHabit.
     */
    data: XOR<PrismaWeekDayHabitCreateInput, PrismaWeekDayHabitUncheckedCreateInput>
  }

  /**
   * PrismaWeekDayHabit createMany
   */
  export type PrismaWeekDayHabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrismaWeekDayHabits.
     */
    data: PrismaWeekDayHabitCreateManyInput | PrismaWeekDayHabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrismaWeekDayHabit createManyAndReturn
   */
  export type PrismaWeekDayHabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PrismaWeekDayHabits.
     */
    data: PrismaWeekDayHabitCreateManyInput | PrismaWeekDayHabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrismaWeekDayHabit update
   */
  export type PrismaWeekDayHabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
    /**
     * The data needed to update a PrismaWeekDayHabit.
     */
    data: XOR<PrismaWeekDayHabitUpdateInput, PrismaWeekDayHabitUncheckedUpdateInput>
    /**
     * Choose, which PrismaWeekDayHabit to update.
     */
    where: PrismaWeekDayHabitWhereUniqueInput
  }

  /**
   * PrismaWeekDayHabit updateMany
   */
  export type PrismaWeekDayHabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrismaWeekDayHabits.
     */
    data: XOR<PrismaWeekDayHabitUpdateManyMutationInput, PrismaWeekDayHabitUncheckedUpdateManyInput>
    /**
     * Filter which PrismaWeekDayHabits to update
     */
    where?: PrismaWeekDayHabitWhereInput
  }

  /**
   * PrismaWeekDayHabit upsert
   */
  export type PrismaWeekDayHabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
    /**
     * The filter to search for the PrismaWeekDayHabit to update in case it exists.
     */
    where: PrismaWeekDayHabitWhereUniqueInput
    /**
     * In case the PrismaWeekDayHabit found by the `where` argument doesn't exist, create a new PrismaWeekDayHabit with this data.
     */
    create: XOR<PrismaWeekDayHabitCreateInput, PrismaWeekDayHabitUncheckedCreateInput>
    /**
     * In case the PrismaWeekDayHabit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrismaWeekDayHabitUpdateInput, PrismaWeekDayHabitUncheckedUpdateInput>
  }

  /**
   * PrismaWeekDayHabit delete
   */
  export type PrismaWeekDayHabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
    /**
     * Filter which PrismaWeekDayHabit to delete.
     */
    where: PrismaWeekDayHabitWhereUniqueInput
  }

  /**
   * PrismaWeekDayHabit deleteMany
   */
  export type PrismaWeekDayHabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrismaWeekDayHabits to delete
     */
    where?: PrismaWeekDayHabitWhereInput
  }

  /**
   * PrismaWeekDayHabit without action
   */
  export type PrismaWeekDayHabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
  }


  /**
   * Model PrismaUser
   */

  export type AggregatePrismaUser = {
    _count: PrismaUserCountAggregateOutputType | null
    _min: PrismaUserMinAggregateOutputType | null
    _max: PrismaUserMaxAggregateOutputType | null
  }

  export type PrismaUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrismaUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrismaUserCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrismaUserMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrismaUserMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrismaUserCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrismaUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrismaUser to aggregate.
     */
    where?: PrismaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaUsers to fetch.
     */
    orderBy?: PrismaUserOrderByWithRelationInput | PrismaUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrismaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrismaUsers
    **/
    _count?: true | PrismaUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrismaUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrismaUserMaxAggregateInputType
  }

  export type GetPrismaUserAggregateType<T extends PrismaUserAggregateArgs> = {
        [P in keyof T & keyof AggregatePrismaUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrismaUser[P]>
      : GetScalarType<T[P], AggregatePrismaUser[P]>
  }




  export type PrismaUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrismaUserWhereInput
    orderBy?: PrismaUserOrderByWithAggregationInput | PrismaUserOrderByWithAggregationInput[]
    by: PrismaUserScalarFieldEnum[] | PrismaUserScalarFieldEnum
    having?: PrismaUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrismaUserCountAggregateInputType | true
    _min?: PrismaUserMinAggregateInputType
    _max?: PrismaUserMaxAggregateInputType
  }

  export type PrismaUserGroupByOutputType = {
    id: string
    email: string
    password_hash: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: PrismaUserCountAggregateOutputType | null
    _min: PrismaUserMinAggregateOutputType | null
    _max: PrismaUserMaxAggregateOutputType | null
  }

  type GetPrismaUserGroupByPayload<T extends PrismaUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrismaUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrismaUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrismaUserGroupByOutputType[P]>
            : GetScalarType<T[P], PrismaUserGroupByOutputType[P]>
        }
      >
    >


  export type PrismaUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prismaDayHabits?: boolean | PrismaUser$prismaDayHabitsArgs<ExtArgs>
    prismaHabitWeekDays?: boolean | PrismaUser$prismaHabitWeekDaysArgs<ExtArgs>
    prismaDays?: boolean | PrismaUser$prismaDaysArgs<ExtArgs>
    _count?: boolean | PrismaUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prismaUser"]>

  export type PrismaUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["prismaUser"]>

  export type PrismaUserSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PrismaUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prismaDayHabits?: boolean | PrismaUser$prismaDayHabitsArgs<ExtArgs>
    prismaHabitWeekDays?: boolean | PrismaUser$prismaHabitWeekDaysArgs<ExtArgs>
    prismaDays?: boolean | PrismaUser$prismaDaysArgs<ExtArgs>
    _count?: boolean | PrismaUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrismaUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PrismaUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrismaUser"
    objects: {
      prismaDayHabits: Prisma.$PrismaDayHabitPayload<ExtArgs>[]
      prismaHabitWeekDays: Prisma.$PrismaWeekDayHabitPayload<ExtArgs>[]
      prismaDays: Prisma.$PrismaDayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["prismaUser"]>
    composites: {}
  }

  type PrismaUserGetPayload<S extends boolean | null | undefined | PrismaUserDefaultArgs> = $Result.GetResult<Prisma.$PrismaUserPayload, S>

  type PrismaUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PrismaUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PrismaUserCountAggregateInputType | true
    }

  export interface PrismaUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrismaUser'], meta: { name: 'PrismaUser' } }
    /**
     * Find zero or one PrismaUser that matches the filter.
     * @param {PrismaUserFindUniqueArgs} args - Arguments to find a PrismaUser
     * @example
     * // Get one PrismaUser
     * const prismaUser = await prisma.prismaUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrismaUserFindUniqueArgs>(args: SelectSubset<T, PrismaUserFindUniqueArgs<ExtArgs>>): Prisma__PrismaUserClient<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PrismaUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PrismaUserFindUniqueOrThrowArgs} args - Arguments to find a PrismaUser
     * @example
     * // Get one PrismaUser
     * const prismaUser = await prisma.prismaUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrismaUserFindUniqueOrThrowArgs>(args: SelectSubset<T, PrismaUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrismaUserClient<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PrismaUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaUserFindFirstArgs} args - Arguments to find a PrismaUser
     * @example
     * // Get one PrismaUser
     * const prismaUser = await prisma.prismaUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrismaUserFindFirstArgs>(args?: SelectSubset<T, PrismaUserFindFirstArgs<ExtArgs>>): Prisma__PrismaUserClient<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PrismaUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaUserFindFirstOrThrowArgs} args - Arguments to find a PrismaUser
     * @example
     * // Get one PrismaUser
     * const prismaUser = await prisma.prismaUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrismaUserFindFirstOrThrowArgs>(args?: SelectSubset<T, PrismaUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrismaUserClient<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PrismaUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrismaUsers
     * const prismaUsers = await prisma.prismaUser.findMany()
     * 
     * // Get first 10 PrismaUsers
     * const prismaUsers = await prisma.prismaUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prismaUserWithIdOnly = await prisma.prismaUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrismaUserFindManyArgs>(args?: SelectSubset<T, PrismaUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PrismaUser.
     * @param {PrismaUserCreateArgs} args - Arguments to create a PrismaUser.
     * @example
     * // Create one PrismaUser
     * const PrismaUser = await prisma.prismaUser.create({
     *   data: {
     *     // ... data to create a PrismaUser
     *   }
     * })
     * 
     */
    create<T extends PrismaUserCreateArgs>(args: SelectSubset<T, PrismaUserCreateArgs<ExtArgs>>): Prisma__PrismaUserClient<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PrismaUsers.
     * @param {PrismaUserCreateManyArgs} args - Arguments to create many PrismaUsers.
     * @example
     * // Create many PrismaUsers
     * const prismaUser = await prisma.prismaUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrismaUserCreateManyArgs>(args?: SelectSubset<T, PrismaUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrismaUsers and returns the data saved in the database.
     * @param {PrismaUserCreateManyAndReturnArgs} args - Arguments to create many PrismaUsers.
     * @example
     * // Create many PrismaUsers
     * const prismaUser = await prisma.prismaUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrismaUsers and only return the `id`
     * const prismaUserWithIdOnly = await prisma.prismaUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrismaUserCreateManyAndReturnArgs>(args?: SelectSubset<T, PrismaUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PrismaUser.
     * @param {PrismaUserDeleteArgs} args - Arguments to delete one PrismaUser.
     * @example
     * // Delete one PrismaUser
     * const PrismaUser = await prisma.prismaUser.delete({
     *   where: {
     *     // ... filter to delete one PrismaUser
     *   }
     * })
     * 
     */
    delete<T extends PrismaUserDeleteArgs>(args: SelectSubset<T, PrismaUserDeleteArgs<ExtArgs>>): Prisma__PrismaUserClient<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PrismaUser.
     * @param {PrismaUserUpdateArgs} args - Arguments to update one PrismaUser.
     * @example
     * // Update one PrismaUser
     * const prismaUser = await prisma.prismaUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrismaUserUpdateArgs>(args: SelectSubset<T, PrismaUserUpdateArgs<ExtArgs>>): Prisma__PrismaUserClient<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PrismaUsers.
     * @param {PrismaUserDeleteManyArgs} args - Arguments to filter PrismaUsers to delete.
     * @example
     * // Delete a few PrismaUsers
     * const { count } = await prisma.prismaUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrismaUserDeleteManyArgs>(args?: SelectSubset<T, PrismaUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrismaUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrismaUsers
     * const prismaUser = await prisma.prismaUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrismaUserUpdateManyArgs>(args: SelectSubset<T, PrismaUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrismaUser.
     * @param {PrismaUserUpsertArgs} args - Arguments to update or create a PrismaUser.
     * @example
     * // Update or create a PrismaUser
     * const prismaUser = await prisma.prismaUser.upsert({
     *   create: {
     *     // ... data to create a PrismaUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrismaUser we want to update
     *   }
     * })
     */
    upsert<T extends PrismaUserUpsertArgs>(args: SelectSubset<T, PrismaUserUpsertArgs<ExtArgs>>): Prisma__PrismaUserClient<$Result.GetResult<Prisma.$PrismaUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PrismaUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaUserCountArgs} args - Arguments to filter PrismaUsers to count.
     * @example
     * // Count the number of PrismaUsers
     * const count = await prisma.prismaUser.count({
     *   where: {
     *     // ... the filter for the PrismaUsers we want to count
     *   }
     * })
    **/
    count<T extends PrismaUserCountArgs>(
      args?: Subset<T, PrismaUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrismaUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrismaUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrismaUserAggregateArgs>(args: Subset<T, PrismaUserAggregateArgs>): Prisma.PrismaPromise<GetPrismaUserAggregateType<T>>

    /**
     * Group by PrismaUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaUserGroupByArgs} args - Group by arguments.
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
      T extends PrismaUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrismaUserGroupByArgs['orderBy'] }
        : { orderBy?: PrismaUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrismaUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrismaUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrismaUser model
   */
  readonly fields: PrismaUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrismaUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrismaUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prismaDayHabits<T extends PrismaUser$prismaDayHabitsArgs<ExtArgs> = {}>(args?: Subset<T, PrismaUser$prismaDayHabitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaDayHabitPayload<ExtArgs>, T, "findMany"> | Null>
    prismaHabitWeekDays<T extends PrismaUser$prismaHabitWeekDaysArgs<ExtArgs> = {}>(args?: Subset<T, PrismaUser$prismaHabitWeekDaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaWeekDayHabitPayload<ExtArgs>, T, "findMany"> | Null>
    prismaDays<T extends PrismaUser$prismaDaysArgs<ExtArgs> = {}>(args?: Subset<T, PrismaUser$prismaDaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrismaDayPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PrismaUser model
   */ 
  interface PrismaUserFieldRefs {
    readonly id: FieldRef<"PrismaUser", 'String'>
    readonly email: FieldRef<"PrismaUser", 'String'>
    readonly password_hash: FieldRef<"PrismaUser", 'String'>
    readonly createdAt: FieldRef<"PrismaUser", 'DateTime'>
    readonly updatedAt: FieldRef<"PrismaUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrismaUser findUnique
   */
  export type PrismaUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUser
     */
    select?: PrismaUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaUserInclude<ExtArgs> | null
    /**
     * Filter, which PrismaUser to fetch.
     */
    where: PrismaUserWhereUniqueInput
  }

  /**
   * PrismaUser findUniqueOrThrow
   */
  export type PrismaUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUser
     */
    select?: PrismaUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaUserInclude<ExtArgs> | null
    /**
     * Filter, which PrismaUser to fetch.
     */
    where: PrismaUserWhereUniqueInput
  }

  /**
   * PrismaUser findFirst
   */
  export type PrismaUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUser
     */
    select?: PrismaUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaUserInclude<ExtArgs> | null
    /**
     * Filter, which PrismaUser to fetch.
     */
    where?: PrismaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaUsers to fetch.
     */
    orderBy?: PrismaUserOrderByWithRelationInput | PrismaUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrismaUsers.
     */
    cursor?: PrismaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrismaUsers.
     */
    distinct?: PrismaUserScalarFieldEnum | PrismaUserScalarFieldEnum[]
  }

  /**
   * PrismaUser findFirstOrThrow
   */
  export type PrismaUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUser
     */
    select?: PrismaUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaUserInclude<ExtArgs> | null
    /**
     * Filter, which PrismaUser to fetch.
     */
    where?: PrismaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaUsers to fetch.
     */
    orderBy?: PrismaUserOrderByWithRelationInput | PrismaUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrismaUsers.
     */
    cursor?: PrismaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrismaUsers.
     */
    distinct?: PrismaUserScalarFieldEnum | PrismaUserScalarFieldEnum[]
  }

  /**
   * PrismaUser findMany
   */
  export type PrismaUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUser
     */
    select?: PrismaUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaUserInclude<ExtArgs> | null
    /**
     * Filter, which PrismaUsers to fetch.
     */
    where?: PrismaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaUsers to fetch.
     */
    orderBy?: PrismaUserOrderByWithRelationInput | PrismaUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrismaUsers.
     */
    cursor?: PrismaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaUsers.
     */
    skip?: number
    distinct?: PrismaUserScalarFieldEnum | PrismaUserScalarFieldEnum[]
  }

  /**
   * PrismaUser create
   */
  export type PrismaUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUser
     */
    select?: PrismaUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaUserInclude<ExtArgs> | null
    /**
     * The data needed to create a PrismaUser.
     */
    data: XOR<PrismaUserCreateInput, PrismaUserUncheckedCreateInput>
  }

  /**
   * PrismaUser createMany
   */
  export type PrismaUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrismaUsers.
     */
    data: PrismaUserCreateManyInput | PrismaUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrismaUser createManyAndReturn
   */
  export type PrismaUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUser
     */
    select?: PrismaUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PrismaUsers.
     */
    data: PrismaUserCreateManyInput | PrismaUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrismaUser update
   */
  export type PrismaUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUser
     */
    select?: PrismaUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaUserInclude<ExtArgs> | null
    /**
     * The data needed to update a PrismaUser.
     */
    data: XOR<PrismaUserUpdateInput, PrismaUserUncheckedUpdateInput>
    /**
     * Choose, which PrismaUser to update.
     */
    where: PrismaUserWhereUniqueInput
  }

  /**
   * PrismaUser updateMany
   */
  export type PrismaUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrismaUsers.
     */
    data: XOR<PrismaUserUpdateManyMutationInput, PrismaUserUncheckedUpdateManyInput>
    /**
     * Filter which PrismaUsers to update
     */
    where?: PrismaUserWhereInput
  }

  /**
   * PrismaUser upsert
   */
  export type PrismaUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUser
     */
    select?: PrismaUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaUserInclude<ExtArgs> | null
    /**
     * The filter to search for the PrismaUser to update in case it exists.
     */
    where: PrismaUserWhereUniqueInput
    /**
     * In case the PrismaUser found by the `where` argument doesn't exist, create a new PrismaUser with this data.
     */
    create: XOR<PrismaUserCreateInput, PrismaUserUncheckedCreateInput>
    /**
     * In case the PrismaUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrismaUserUpdateInput, PrismaUserUncheckedUpdateInput>
  }

  /**
   * PrismaUser delete
   */
  export type PrismaUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUser
     */
    select?: PrismaUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaUserInclude<ExtArgs> | null
    /**
     * Filter which PrismaUser to delete.
     */
    where: PrismaUserWhereUniqueInput
  }

  /**
   * PrismaUser deleteMany
   */
  export type PrismaUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrismaUsers to delete
     */
    where?: PrismaUserWhereInput
  }

  /**
   * PrismaUser.prismaDayHabits
   */
  export type PrismaUser$prismaDayHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDayHabit
     */
    select?: PrismaDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayHabitInclude<ExtArgs> | null
    where?: PrismaDayHabitWhereInput
    orderBy?: PrismaDayHabitOrderByWithRelationInput | PrismaDayHabitOrderByWithRelationInput[]
    cursor?: PrismaDayHabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrismaDayHabitScalarFieldEnum | PrismaDayHabitScalarFieldEnum[]
  }

  /**
   * PrismaUser.prismaHabitWeekDays
   */
  export type PrismaUser$prismaHabitWeekDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaWeekDayHabit
     */
    select?: PrismaWeekDayHabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaWeekDayHabitInclude<ExtArgs> | null
    where?: PrismaWeekDayHabitWhereInput
    orderBy?: PrismaWeekDayHabitOrderByWithRelationInput | PrismaWeekDayHabitOrderByWithRelationInput[]
    cursor?: PrismaWeekDayHabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrismaWeekDayHabitScalarFieldEnum | PrismaWeekDayHabitScalarFieldEnum[]
  }

  /**
   * PrismaUser.prismaDays
   */
  export type PrismaUser$prismaDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaDay
     */
    select?: PrismaDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaDayInclude<ExtArgs> | null
    where?: PrismaDayWhereInput
    orderBy?: PrismaDayOrderByWithRelationInput | PrismaDayOrderByWithRelationInput[]
    cursor?: PrismaDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrismaDayScalarFieldEnum | PrismaDayScalarFieldEnum[]
  }

  /**
   * PrismaUser without action
   */
  export type PrismaUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrismaUser
     */
    select?: PrismaUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrismaUserInclude<ExtArgs> | null
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


  export const PrismaHabitScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type PrismaHabitScalarFieldEnum = (typeof PrismaHabitScalarFieldEnum)[keyof typeof PrismaHabitScalarFieldEnum]


  export const PrismaDayScalarFieldEnum: {
    id: 'id',
    date: 'date',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrismaDayScalarFieldEnum = (typeof PrismaDayScalarFieldEnum)[keyof typeof PrismaDayScalarFieldEnum]


  export const PrismaDayHabitScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    dayId: 'dayId',
    userId: 'userId'
  };

  export type PrismaDayHabitScalarFieldEnum = (typeof PrismaDayHabitScalarFieldEnum)[keyof typeof PrismaDayHabitScalarFieldEnum]


  export const PrismaWeekDayHabitScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    weekDay: 'weekDay',
    userId: 'userId'
  };

  export type PrismaWeekDayHabitScalarFieldEnum = (typeof PrismaWeekDayHabitScalarFieldEnum)[keyof typeof PrismaWeekDayHabitScalarFieldEnum]


  export const PrismaUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrismaUserScalarFieldEnum = (typeof PrismaUserScalarFieldEnum)[keyof typeof PrismaUserScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type PrismaHabitWhereInput = {
    AND?: PrismaHabitWhereInput | PrismaHabitWhereInput[]
    OR?: PrismaHabitWhereInput[]
    NOT?: PrismaHabitWhereInput | PrismaHabitWhereInput[]
    id?: StringFilter<"PrismaHabit"> | string
    title?: StringFilter<"PrismaHabit"> | string
    createdAt?: DateTimeFilter<"PrismaHabit"> | Date | string
    userId?: StringFilter<"PrismaHabit"> | string
    prismaDayHabits?: PrismaDayHabitListRelationFilter
    prismaHabitWeekDays?: PrismaWeekDayHabitListRelationFilter
  }

  export type PrismaHabitOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    prismaDayHabits?: PrismaDayHabitOrderByRelationAggregateInput
    prismaHabitWeekDays?: PrismaWeekDayHabitOrderByRelationAggregateInput
  }

  export type PrismaHabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrismaHabitWhereInput | PrismaHabitWhereInput[]
    OR?: PrismaHabitWhereInput[]
    NOT?: PrismaHabitWhereInput | PrismaHabitWhereInput[]
    title?: StringFilter<"PrismaHabit"> | string
    createdAt?: DateTimeFilter<"PrismaHabit"> | Date | string
    userId?: StringFilter<"PrismaHabit"> | string
    prismaDayHabits?: PrismaDayHabitListRelationFilter
    prismaHabitWeekDays?: PrismaWeekDayHabitListRelationFilter
  }, "id">

  export type PrismaHabitOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: PrismaHabitCountOrderByAggregateInput
    _max?: PrismaHabitMaxOrderByAggregateInput
    _min?: PrismaHabitMinOrderByAggregateInput
  }

  export type PrismaHabitScalarWhereWithAggregatesInput = {
    AND?: PrismaHabitScalarWhereWithAggregatesInput | PrismaHabitScalarWhereWithAggregatesInput[]
    OR?: PrismaHabitScalarWhereWithAggregatesInput[]
    NOT?: PrismaHabitScalarWhereWithAggregatesInput | PrismaHabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrismaHabit"> | string
    title?: StringWithAggregatesFilter<"PrismaHabit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PrismaHabit"> | Date | string
    userId?: StringWithAggregatesFilter<"PrismaHabit"> | string
  }

  export type PrismaDayWhereInput = {
    AND?: PrismaDayWhereInput | PrismaDayWhereInput[]
    OR?: PrismaDayWhereInput[]
    NOT?: PrismaDayWhereInput | PrismaDayWhereInput[]
    id?: StringFilter<"PrismaDay"> | string
    date?: DateTimeFilter<"PrismaDay"> | Date | string
    userId?: StringFilter<"PrismaDay"> | string
    createdAt?: DateTimeFilter<"PrismaDay"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PrismaDay"> | Date | string | null
    user?: XOR<PrismaUserRelationFilter, PrismaUserWhereInput>
    prismaDayHabits?: PrismaDayHabitListRelationFilter
  }

  export type PrismaDayOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: PrismaUserOrderByWithRelationInput
    prismaDayHabits?: PrismaDayHabitOrderByRelationAggregateInput
  }

  export type PrismaDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date_userId?: PrismaDayDateUserIdCompoundUniqueInput
    AND?: PrismaDayWhereInput | PrismaDayWhereInput[]
    OR?: PrismaDayWhereInput[]
    NOT?: PrismaDayWhereInput | PrismaDayWhereInput[]
    date?: DateTimeFilter<"PrismaDay"> | Date | string
    userId?: StringFilter<"PrismaDay"> | string
    createdAt?: DateTimeFilter<"PrismaDay"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PrismaDay"> | Date | string | null
    user?: XOR<PrismaUserRelationFilter, PrismaUserWhereInput>
    prismaDayHabits?: PrismaDayHabitListRelationFilter
  }, "id" | "date_userId">

  export type PrismaDayOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PrismaDayCountOrderByAggregateInput
    _max?: PrismaDayMaxOrderByAggregateInput
    _min?: PrismaDayMinOrderByAggregateInput
  }

  export type PrismaDayScalarWhereWithAggregatesInput = {
    AND?: PrismaDayScalarWhereWithAggregatesInput | PrismaDayScalarWhereWithAggregatesInput[]
    OR?: PrismaDayScalarWhereWithAggregatesInput[]
    NOT?: PrismaDayScalarWhereWithAggregatesInput | PrismaDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrismaDay"> | string
    date?: DateTimeWithAggregatesFilter<"PrismaDay"> | Date | string
    userId?: StringWithAggregatesFilter<"PrismaDay"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PrismaDay"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PrismaDay"> | Date | string | null
  }

  export type PrismaDayHabitWhereInput = {
    AND?: PrismaDayHabitWhereInput | PrismaDayHabitWhereInput[]
    OR?: PrismaDayHabitWhereInput[]
    NOT?: PrismaDayHabitWhereInput | PrismaDayHabitWhereInput[]
    id?: StringFilter<"PrismaDayHabit"> | string
    habitId?: StringFilter<"PrismaDayHabit"> | string
    dayId?: StringFilter<"PrismaDayHabit"> | string
    userId?: StringFilter<"PrismaDayHabit"> | string
    habit?: XOR<PrismaHabitRelationFilter, PrismaHabitWhereInput>
    day?: XOR<PrismaDayRelationFilter, PrismaDayWhereInput>
    user?: XOR<PrismaUserRelationFilter, PrismaUserWhereInput>
  }

  export type PrismaDayHabitOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
    habit?: PrismaHabitOrderByWithRelationInput
    day?: PrismaDayOrderByWithRelationInput
    user?: PrismaUserOrderByWithRelationInput
  }

  export type PrismaDayHabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    habitId_dayId_userId?: PrismaDayHabitHabitIdDayIdUserIdCompoundUniqueInput
    AND?: PrismaDayHabitWhereInput | PrismaDayHabitWhereInput[]
    OR?: PrismaDayHabitWhereInput[]
    NOT?: PrismaDayHabitWhereInput | PrismaDayHabitWhereInput[]
    habitId?: StringFilter<"PrismaDayHabit"> | string
    dayId?: StringFilter<"PrismaDayHabit"> | string
    userId?: StringFilter<"PrismaDayHabit"> | string
    habit?: XOR<PrismaHabitRelationFilter, PrismaHabitWhereInput>
    day?: XOR<PrismaDayRelationFilter, PrismaDayWhereInput>
    user?: XOR<PrismaUserRelationFilter, PrismaUserWhereInput>
  }, "id" | "habitId_dayId_userId">

  export type PrismaDayHabitOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
    _count?: PrismaDayHabitCountOrderByAggregateInput
    _max?: PrismaDayHabitMaxOrderByAggregateInput
    _min?: PrismaDayHabitMinOrderByAggregateInput
  }

  export type PrismaDayHabitScalarWhereWithAggregatesInput = {
    AND?: PrismaDayHabitScalarWhereWithAggregatesInput | PrismaDayHabitScalarWhereWithAggregatesInput[]
    OR?: PrismaDayHabitScalarWhereWithAggregatesInput[]
    NOT?: PrismaDayHabitScalarWhereWithAggregatesInput | PrismaDayHabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrismaDayHabit"> | string
    habitId?: StringWithAggregatesFilter<"PrismaDayHabit"> | string
    dayId?: StringWithAggregatesFilter<"PrismaDayHabit"> | string
    userId?: StringWithAggregatesFilter<"PrismaDayHabit"> | string
  }

  export type PrismaWeekDayHabitWhereInput = {
    AND?: PrismaWeekDayHabitWhereInput | PrismaWeekDayHabitWhereInput[]
    OR?: PrismaWeekDayHabitWhereInput[]
    NOT?: PrismaWeekDayHabitWhereInput | PrismaWeekDayHabitWhereInput[]
    id?: StringFilter<"PrismaWeekDayHabit"> | string
    habitId?: StringFilter<"PrismaWeekDayHabit"> | string
    weekDay?: IntFilter<"PrismaWeekDayHabit"> | number
    userId?: StringFilter<"PrismaWeekDayHabit"> | string
    habit?: XOR<PrismaHabitRelationFilter, PrismaHabitWhereInput>
    user?: XOR<PrismaUserRelationFilter, PrismaUserWhereInput>
  }

  export type PrismaWeekDayHabitOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    weekDay?: SortOrder
    userId?: SortOrder
    habit?: PrismaHabitOrderByWithRelationInput
    user?: PrismaUserOrderByWithRelationInput
  }

  export type PrismaWeekDayHabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    habitId_weekDay_userId?: PrismaWeekDayHabitHabitIdWeekDayUserIdCompoundUniqueInput
    AND?: PrismaWeekDayHabitWhereInput | PrismaWeekDayHabitWhereInput[]
    OR?: PrismaWeekDayHabitWhereInput[]
    NOT?: PrismaWeekDayHabitWhereInput | PrismaWeekDayHabitWhereInput[]
    habitId?: StringFilter<"PrismaWeekDayHabit"> | string
    weekDay?: IntFilter<"PrismaWeekDayHabit"> | number
    userId?: StringFilter<"PrismaWeekDayHabit"> | string
    habit?: XOR<PrismaHabitRelationFilter, PrismaHabitWhereInput>
    user?: XOR<PrismaUserRelationFilter, PrismaUserWhereInput>
  }, "id" | "habitId_weekDay_userId">

  export type PrismaWeekDayHabitOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    weekDay?: SortOrder
    userId?: SortOrder
    _count?: PrismaWeekDayHabitCountOrderByAggregateInput
    _avg?: PrismaWeekDayHabitAvgOrderByAggregateInput
    _max?: PrismaWeekDayHabitMaxOrderByAggregateInput
    _min?: PrismaWeekDayHabitMinOrderByAggregateInput
    _sum?: PrismaWeekDayHabitSumOrderByAggregateInput
  }

  export type PrismaWeekDayHabitScalarWhereWithAggregatesInput = {
    AND?: PrismaWeekDayHabitScalarWhereWithAggregatesInput | PrismaWeekDayHabitScalarWhereWithAggregatesInput[]
    OR?: PrismaWeekDayHabitScalarWhereWithAggregatesInput[]
    NOT?: PrismaWeekDayHabitScalarWhereWithAggregatesInput | PrismaWeekDayHabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrismaWeekDayHabit"> | string
    habitId?: StringWithAggregatesFilter<"PrismaWeekDayHabit"> | string
    weekDay?: IntWithAggregatesFilter<"PrismaWeekDayHabit"> | number
    userId?: StringWithAggregatesFilter<"PrismaWeekDayHabit"> | string
  }

  export type PrismaUserWhereInput = {
    AND?: PrismaUserWhereInput | PrismaUserWhereInput[]
    OR?: PrismaUserWhereInput[]
    NOT?: PrismaUserWhereInput | PrismaUserWhereInput[]
    id?: StringFilter<"PrismaUser"> | string
    email?: StringFilter<"PrismaUser"> | string
    password_hash?: StringNullableFilter<"PrismaUser"> | string | null
    createdAt?: DateTimeFilter<"PrismaUser"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PrismaUser"> | Date | string | null
    prismaDayHabits?: PrismaDayHabitListRelationFilter
    prismaHabitWeekDays?: PrismaWeekDayHabitListRelationFilter
    prismaDays?: PrismaDayListRelationFilter
  }

  export type PrismaUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    prismaDayHabits?: PrismaDayHabitOrderByRelationAggregateInput
    prismaHabitWeekDays?: PrismaWeekDayHabitOrderByRelationAggregateInput
    prismaDays?: PrismaDayOrderByRelationAggregateInput
  }

  export type PrismaUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PrismaUserWhereInput | PrismaUserWhereInput[]
    OR?: PrismaUserWhereInput[]
    NOT?: PrismaUserWhereInput | PrismaUserWhereInput[]
    password_hash?: StringNullableFilter<"PrismaUser"> | string | null
    createdAt?: DateTimeFilter<"PrismaUser"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PrismaUser"> | Date | string | null
    prismaDayHabits?: PrismaDayHabitListRelationFilter
    prismaHabitWeekDays?: PrismaWeekDayHabitListRelationFilter
    prismaDays?: PrismaDayListRelationFilter
  }, "id" | "email">

  export type PrismaUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PrismaUserCountOrderByAggregateInput
    _max?: PrismaUserMaxOrderByAggregateInput
    _min?: PrismaUserMinOrderByAggregateInput
  }

  export type PrismaUserScalarWhereWithAggregatesInput = {
    AND?: PrismaUserScalarWhereWithAggregatesInput | PrismaUserScalarWhereWithAggregatesInput[]
    OR?: PrismaUserScalarWhereWithAggregatesInput[]
    NOT?: PrismaUserScalarWhereWithAggregatesInput | PrismaUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrismaUser"> | string
    email?: StringWithAggregatesFilter<"PrismaUser"> | string
    password_hash?: StringNullableWithAggregatesFilter<"PrismaUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PrismaUser"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PrismaUser"> | Date | string | null
  }

  export type PrismaHabitCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    userId: string
    prismaDayHabits?: PrismaDayHabitCreateNestedManyWithoutHabitInput
    prismaHabitWeekDays?: PrismaWeekDayHabitCreateNestedManyWithoutHabitInput
  }

  export type PrismaHabitUncheckedCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    userId: string
    prismaDayHabits?: PrismaDayHabitUncheckedCreateNestedManyWithoutHabitInput
    prismaHabitWeekDays?: PrismaWeekDayHabitUncheckedCreateNestedManyWithoutHabitInput
  }

  export type PrismaHabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    prismaDayHabits?: PrismaDayHabitUpdateManyWithoutHabitNestedInput
    prismaHabitWeekDays?: PrismaWeekDayHabitUpdateManyWithoutHabitNestedInput
  }

  export type PrismaHabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    prismaDayHabits?: PrismaDayHabitUncheckedUpdateManyWithoutHabitNestedInput
    prismaHabitWeekDays?: PrismaWeekDayHabitUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type PrismaHabitCreateManyInput = {
    id?: string
    title: string
    createdAt?: Date | string
    userId: string
  }

  export type PrismaHabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaHabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaDayCreateInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: PrismaUserCreateNestedOneWithoutPrismaDaysInput
    prismaDayHabits?: PrismaDayHabitCreateNestedManyWithoutDayInput
  }

  export type PrismaDayUncheckedCreateInput = {
    id?: string
    date: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    prismaDayHabits?: PrismaDayHabitUncheckedCreateNestedManyWithoutDayInput
  }

  export type PrismaDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: PrismaUserUpdateOneRequiredWithoutPrismaDaysNestedInput
    prismaDayHabits?: PrismaDayHabitUpdateManyWithoutDayNestedInput
  }

  export type PrismaDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prismaDayHabits?: PrismaDayHabitUncheckedUpdateManyWithoutDayNestedInput
  }

  export type PrismaDayCreateManyInput = {
    id?: string
    date: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PrismaDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrismaDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrismaDayHabitCreateInput = {
    id?: string
    habit: PrismaHabitCreateNestedOneWithoutPrismaDayHabitsInput
    day: PrismaDayCreateNestedOneWithoutPrismaDayHabitsInput
    user: PrismaUserCreateNestedOneWithoutPrismaDayHabitsInput
  }

  export type PrismaDayHabitUncheckedCreateInput = {
    id?: string
    habitId: string
    dayId: string
    userId: string
  }

  export type PrismaDayHabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit?: PrismaHabitUpdateOneRequiredWithoutPrismaDayHabitsNestedInput
    day?: PrismaDayUpdateOneRequiredWithoutPrismaDayHabitsNestedInput
    user?: PrismaUserUpdateOneRequiredWithoutPrismaDayHabitsNestedInput
  }

  export type PrismaDayHabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaDayHabitCreateManyInput = {
    id?: string
    habitId: string
    dayId: string
    userId: string
  }

  export type PrismaDayHabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaDayHabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaWeekDayHabitCreateInput = {
    id?: string
    weekDay: number
    habit: PrismaHabitCreateNestedOneWithoutPrismaHabitWeekDaysInput
    user: PrismaUserCreateNestedOneWithoutPrismaHabitWeekDaysInput
  }

  export type PrismaWeekDayHabitUncheckedCreateInput = {
    id?: string
    habitId: string
    weekDay: number
    userId: string
  }

  export type PrismaWeekDayHabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekDay?: IntFieldUpdateOperationsInput | number
    habit?: PrismaHabitUpdateOneRequiredWithoutPrismaHabitWeekDaysNestedInput
    user?: PrismaUserUpdateOneRequiredWithoutPrismaHabitWeekDaysNestedInput
  }

  export type PrismaWeekDayHabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    weekDay?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaWeekDayHabitCreateManyInput = {
    id?: string
    habitId: string
    weekDay: number
    userId: string
  }

  export type PrismaWeekDayHabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekDay?: IntFieldUpdateOperationsInput | number
  }

  export type PrismaWeekDayHabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    weekDay?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaUserCreateInput = {
    id?: string
    email: string
    password_hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    prismaDayHabits?: PrismaDayHabitCreateNestedManyWithoutUserInput
    prismaHabitWeekDays?: PrismaWeekDayHabitCreateNestedManyWithoutUserInput
    prismaDays?: PrismaDayCreateNestedManyWithoutUserInput
  }

  export type PrismaUserUncheckedCreateInput = {
    id?: string
    email: string
    password_hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    prismaDayHabits?: PrismaDayHabitUncheckedCreateNestedManyWithoutUserInput
    prismaHabitWeekDays?: PrismaWeekDayHabitUncheckedCreateNestedManyWithoutUserInput
    prismaDays?: PrismaDayUncheckedCreateNestedManyWithoutUserInput
  }

  export type PrismaUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prismaDayHabits?: PrismaDayHabitUpdateManyWithoutUserNestedInput
    prismaHabitWeekDays?: PrismaWeekDayHabitUpdateManyWithoutUserNestedInput
    prismaDays?: PrismaDayUpdateManyWithoutUserNestedInput
  }

  export type PrismaUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prismaDayHabits?: PrismaDayHabitUncheckedUpdateManyWithoutUserNestedInput
    prismaHabitWeekDays?: PrismaWeekDayHabitUncheckedUpdateManyWithoutUserNestedInput
    prismaDays?: PrismaDayUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PrismaUserCreateManyInput = {
    id?: string
    email: string
    password_hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PrismaUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrismaUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type PrismaDayHabitListRelationFilter = {
    every?: PrismaDayHabitWhereInput
    some?: PrismaDayHabitWhereInput
    none?: PrismaDayHabitWhereInput
  }

  export type PrismaWeekDayHabitListRelationFilter = {
    every?: PrismaWeekDayHabitWhereInput
    some?: PrismaWeekDayHabitWhereInput
    none?: PrismaWeekDayHabitWhereInput
  }

  export type PrismaDayHabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrismaWeekDayHabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrismaHabitCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PrismaHabitMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PrismaHabitMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PrismaUserRelationFilter = {
    is?: PrismaUserWhereInput
    isNot?: PrismaUserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PrismaDayDateUserIdCompoundUniqueInput = {
    date: Date | string
    userId: string
  }

  export type PrismaDayCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrismaDayMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrismaDayMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PrismaHabitRelationFilter = {
    is?: PrismaHabitWhereInput
    isNot?: PrismaHabitWhereInput
  }

  export type PrismaDayRelationFilter = {
    is?: PrismaDayWhereInput
    isNot?: PrismaDayWhereInput
  }

  export type PrismaDayHabitHabitIdDayIdUserIdCompoundUniqueInput = {
    habitId: string
    dayId: string
    userId: string
  }

  export type PrismaDayHabitCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
  }

  export type PrismaDayHabitMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
  }

  export type PrismaDayHabitMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
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

  export type PrismaWeekDayHabitHabitIdWeekDayUserIdCompoundUniqueInput = {
    habitId: string
    weekDay: number
    userId: string
  }

  export type PrismaWeekDayHabitCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    weekDay?: SortOrder
    userId?: SortOrder
  }

  export type PrismaWeekDayHabitAvgOrderByAggregateInput = {
    weekDay?: SortOrder
  }

  export type PrismaWeekDayHabitMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    weekDay?: SortOrder
    userId?: SortOrder
  }

  export type PrismaWeekDayHabitMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    weekDay?: SortOrder
    userId?: SortOrder
  }

  export type PrismaWeekDayHabitSumOrderByAggregateInput = {
    weekDay?: SortOrder
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

  export type PrismaDayListRelationFilter = {
    every?: PrismaDayWhereInput
    some?: PrismaDayWhereInput
    none?: PrismaDayWhereInput
  }

  export type PrismaDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrismaUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrismaUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrismaUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type PrismaDayHabitCreateNestedManyWithoutHabitInput = {
    create?: XOR<PrismaDayHabitCreateWithoutHabitInput, PrismaDayHabitUncheckedCreateWithoutHabitInput> | PrismaDayHabitCreateWithoutHabitInput[] | PrismaDayHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutHabitInput | PrismaDayHabitCreateOrConnectWithoutHabitInput[]
    createMany?: PrismaDayHabitCreateManyHabitInputEnvelope
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
  }

  export type PrismaWeekDayHabitCreateNestedManyWithoutHabitInput = {
    create?: XOR<PrismaWeekDayHabitCreateWithoutHabitInput, PrismaWeekDayHabitUncheckedCreateWithoutHabitInput> | PrismaWeekDayHabitCreateWithoutHabitInput[] | PrismaWeekDayHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PrismaWeekDayHabitCreateOrConnectWithoutHabitInput | PrismaWeekDayHabitCreateOrConnectWithoutHabitInput[]
    createMany?: PrismaWeekDayHabitCreateManyHabitInputEnvelope
    connect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
  }

  export type PrismaDayHabitUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<PrismaDayHabitCreateWithoutHabitInput, PrismaDayHabitUncheckedCreateWithoutHabitInput> | PrismaDayHabitCreateWithoutHabitInput[] | PrismaDayHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutHabitInput | PrismaDayHabitCreateOrConnectWithoutHabitInput[]
    createMany?: PrismaDayHabitCreateManyHabitInputEnvelope
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
  }

  export type PrismaWeekDayHabitUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<PrismaWeekDayHabitCreateWithoutHabitInput, PrismaWeekDayHabitUncheckedCreateWithoutHabitInput> | PrismaWeekDayHabitCreateWithoutHabitInput[] | PrismaWeekDayHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PrismaWeekDayHabitCreateOrConnectWithoutHabitInput | PrismaWeekDayHabitCreateOrConnectWithoutHabitInput[]
    createMany?: PrismaWeekDayHabitCreateManyHabitInputEnvelope
    connect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PrismaDayHabitUpdateManyWithoutHabitNestedInput = {
    create?: XOR<PrismaDayHabitCreateWithoutHabitInput, PrismaDayHabitUncheckedCreateWithoutHabitInput> | PrismaDayHabitCreateWithoutHabitInput[] | PrismaDayHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutHabitInput | PrismaDayHabitCreateOrConnectWithoutHabitInput[]
    upsert?: PrismaDayHabitUpsertWithWhereUniqueWithoutHabitInput | PrismaDayHabitUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: PrismaDayHabitCreateManyHabitInputEnvelope
    set?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    disconnect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    delete?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    update?: PrismaDayHabitUpdateWithWhereUniqueWithoutHabitInput | PrismaDayHabitUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: PrismaDayHabitUpdateManyWithWhereWithoutHabitInput | PrismaDayHabitUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: PrismaDayHabitScalarWhereInput | PrismaDayHabitScalarWhereInput[]
  }

  export type PrismaWeekDayHabitUpdateManyWithoutHabitNestedInput = {
    create?: XOR<PrismaWeekDayHabitCreateWithoutHabitInput, PrismaWeekDayHabitUncheckedCreateWithoutHabitInput> | PrismaWeekDayHabitCreateWithoutHabitInput[] | PrismaWeekDayHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PrismaWeekDayHabitCreateOrConnectWithoutHabitInput | PrismaWeekDayHabitCreateOrConnectWithoutHabitInput[]
    upsert?: PrismaWeekDayHabitUpsertWithWhereUniqueWithoutHabitInput | PrismaWeekDayHabitUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: PrismaWeekDayHabitCreateManyHabitInputEnvelope
    set?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    disconnect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    delete?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    connect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    update?: PrismaWeekDayHabitUpdateWithWhereUniqueWithoutHabitInput | PrismaWeekDayHabitUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: PrismaWeekDayHabitUpdateManyWithWhereWithoutHabitInput | PrismaWeekDayHabitUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: PrismaWeekDayHabitScalarWhereInput | PrismaWeekDayHabitScalarWhereInput[]
  }

  export type PrismaDayHabitUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<PrismaDayHabitCreateWithoutHabitInput, PrismaDayHabitUncheckedCreateWithoutHabitInput> | PrismaDayHabitCreateWithoutHabitInput[] | PrismaDayHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutHabitInput | PrismaDayHabitCreateOrConnectWithoutHabitInput[]
    upsert?: PrismaDayHabitUpsertWithWhereUniqueWithoutHabitInput | PrismaDayHabitUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: PrismaDayHabitCreateManyHabitInputEnvelope
    set?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    disconnect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    delete?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    update?: PrismaDayHabitUpdateWithWhereUniqueWithoutHabitInput | PrismaDayHabitUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: PrismaDayHabitUpdateManyWithWhereWithoutHabitInput | PrismaDayHabitUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: PrismaDayHabitScalarWhereInput | PrismaDayHabitScalarWhereInput[]
  }

  export type PrismaWeekDayHabitUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<PrismaWeekDayHabitCreateWithoutHabitInput, PrismaWeekDayHabitUncheckedCreateWithoutHabitInput> | PrismaWeekDayHabitCreateWithoutHabitInput[] | PrismaWeekDayHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PrismaWeekDayHabitCreateOrConnectWithoutHabitInput | PrismaWeekDayHabitCreateOrConnectWithoutHabitInput[]
    upsert?: PrismaWeekDayHabitUpsertWithWhereUniqueWithoutHabitInput | PrismaWeekDayHabitUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: PrismaWeekDayHabitCreateManyHabitInputEnvelope
    set?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    disconnect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    delete?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    connect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    update?: PrismaWeekDayHabitUpdateWithWhereUniqueWithoutHabitInput | PrismaWeekDayHabitUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: PrismaWeekDayHabitUpdateManyWithWhereWithoutHabitInput | PrismaWeekDayHabitUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: PrismaWeekDayHabitScalarWhereInput | PrismaWeekDayHabitScalarWhereInput[]
  }

  export type PrismaUserCreateNestedOneWithoutPrismaDaysInput = {
    create?: XOR<PrismaUserCreateWithoutPrismaDaysInput, PrismaUserUncheckedCreateWithoutPrismaDaysInput>
    connectOrCreate?: PrismaUserCreateOrConnectWithoutPrismaDaysInput
    connect?: PrismaUserWhereUniqueInput
  }

  export type PrismaDayHabitCreateNestedManyWithoutDayInput = {
    create?: XOR<PrismaDayHabitCreateWithoutDayInput, PrismaDayHabitUncheckedCreateWithoutDayInput> | PrismaDayHabitCreateWithoutDayInput[] | PrismaDayHabitUncheckedCreateWithoutDayInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutDayInput | PrismaDayHabitCreateOrConnectWithoutDayInput[]
    createMany?: PrismaDayHabitCreateManyDayInputEnvelope
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
  }

  export type PrismaDayHabitUncheckedCreateNestedManyWithoutDayInput = {
    create?: XOR<PrismaDayHabitCreateWithoutDayInput, PrismaDayHabitUncheckedCreateWithoutDayInput> | PrismaDayHabitCreateWithoutDayInput[] | PrismaDayHabitUncheckedCreateWithoutDayInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutDayInput | PrismaDayHabitCreateOrConnectWithoutDayInput[]
    createMany?: PrismaDayHabitCreateManyDayInputEnvelope
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PrismaUserUpdateOneRequiredWithoutPrismaDaysNestedInput = {
    create?: XOR<PrismaUserCreateWithoutPrismaDaysInput, PrismaUserUncheckedCreateWithoutPrismaDaysInput>
    connectOrCreate?: PrismaUserCreateOrConnectWithoutPrismaDaysInput
    upsert?: PrismaUserUpsertWithoutPrismaDaysInput
    connect?: PrismaUserWhereUniqueInput
    update?: XOR<XOR<PrismaUserUpdateToOneWithWhereWithoutPrismaDaysInput, PrismaUserUpdateWithoutPrismaDaysInput>, PrismaUserUncheckedUpdateWithoutPrismaDaysInput>
  }

  export type PrismaDayHabitUpdateManyWithoutDayNestedInput = {
    create?: XOR<PrismaDayHabitCreateWithoutDayInput, PrismaDayHabitUncheckedCreateWithoutDayInput> | PrismaDayHabitCreateWithoutDayInput[] | PrismaDayHabitUncheckedCreateWithoutDayInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutDayInput | PrismaDayHabitCreateOrConnectWithoutDayInput[]
    upsert?: PrismaDayHabitUpsertWithWhereUniqueWithoutDayInput | PrismaDayHabitUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: PrismaDayHabitCreateManyDayInputEnvelope
    set?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    disconnect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    delete?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    update?: PrismaDayHabitUpdateWithWhereUniqueWithoutDayInput | PrismaDayHabitUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: PrismaDayHabitUpdateManyWithWhereWithoutDayInput | PrismaDayHabitUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: PrismaDayHabitScalarWhereInput | PrismaDayHabitScalarWhereInput[]
  }

  export type PrismaDayHabitUncheckedUpdateManyWithoutDayNestedInput = {
    create?: XOR<PrismaDayHabitCreateWithoutDayInput, PrismaDayHabitUncheckedCreateWithoutDayInput> | PrismaDayHabitCreateWithoutDayInput[] | PrismaDayHabitUncheckedCreateWithoutDayInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutDayInput | PrismaDayHabitCreateOrConnectWithoutDayInput[]
    upsert?: PrismaDayHabitUpsertWithWhereUniqueWithoutDayInput | PrismaDayHabitUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: PrismaDayHabitCreateManyDayInputEnvelope
    set?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    disconnect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    delete?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    update?: PrismaDayHabitUpdateWithWhereUniqueWithoutDayInput | PrismaDayHabitUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: PrismaDayHabitUpdateManyWithWhereWithoutDayInput | PrismaDayHabitUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: PrismaDayHabitScalarWhereInput | PrismaDayHabitScalarWhereInput[]
  }

  export type PrismaHabitCreateNestedOneWithoutPrismaDayHabitsInput = {
    create?: XOR<PrismaHabitCreateWithoutPrismaDayHabitsInput, PrismaHabitUncheckedCreateWithoutPrismaDayHabitsInput>
    connectOrCreate?: PrismaHabitCreateOrConnectWithoutPrismaDayHabitsInput
    connect?: PrismaHabitWhereUniqueInput
  }

  export type PrismaDayCreateNestedOneWithoutPrismaDayHabitsInput = {
    create?: XOR<PrismaDayCreateWithoutPrismaDayHabitsInput, PrismaDayUncheckedCreateWithoutPrismaDayHabitsInput>
    connectOrCreate?: PrismaDayCreateOrConnectWithoutPrismaDayHabitsInput
    connect?: PrismaDayWhereUniqueInput
  }

  export type PrismaUserCreateNestedOneWithoutPrismaDayHabitsInput = {
    create?: XOR<PrismaUserCreateWithoutPrismaDayHabitsInput, PrismaUserUncheckedCreateWithoutPrismaDayHabitsInput>
    connectOrCreate?: PrismaUserCreateOrConnectWithoutPrismaDayHabitsInput
    connect?: PrismaUserWhereUniqueInput
  }

  export type PrismaHabitUpdateOneRequiredWithoutPrismaDayHabitsNestedInput = {
    create?: XOR<PrismaHabitCreateWithoutPrismaDayHabitsInput, PrismaHabitUncheckedCreateWithoutPrismaDayHabitsInput>
    connectOrCreate?: PrismaHabitCreateOrConnectWithoutPrismaDayHabitsInput
    upsert?: PrismaHabitUpsertWithoutPrismaDayHabitsInput
    connect?: PrismaHabitWhereUniqueInput
    update?: XOR<XOR<PrismaHabitUpdateToOneWithWhereWithoutPrismaDayHabitsInput, PrismaHabitUpdateWithoutPrismaDayHabitsInput>, PrismaHabitUncheckedUpdateWithoutPrismaDayHabitsInput>
  }

  export type PrismaDayUpdateOneRequiredWithoutPrismaDayHabitsNestedInput = {
    create?: XOR<PrismaDayCreateWithoutPrismaDayHabitsInput, PrismaDayUncheckedCreateWithoutPrismaDayHabitsInput>
    connectOrCreate?: PrismaDayCreateOrConnectWithoutPrismaDayHabitsInput
    upsert?: PrismaDayUpsertWithoutPrismaDayHabitsInput
    connect?: PrismaDayWhereUniqueInput
    update?: XOR<XOR<PrismaDayUpdateToOneWithWhereWithoutPrismaDayHabitsInput, PrismaDayUpdateWithoutPrismaDayHabitsInput>, PrismaDayUncheckedUpdateWithoutPrismaDayHabitsInput>
  }

  export type PrismaUserUpdateOneRequiredWithoutPrismaDayHabitsNestedInput = {
    create?: XOR<PrismaUserCreateWithoutPrismaDayHabitsInput, PrismaUserUncheckedCreateWithoutPrismaDayHabitsInput>
    connectOrCreate?: PrismaUserCreateOrConnectWithoutPrismaDayHabitsInput
    upsert?: PrismaUserUpsertWithoutPrismaDayHabitsInput
    connect?: PrismaUserWhereUniqueInput
    update?: XOR<XOR<PrismaUserUpdateToOneWithWhereWithoutPrismaDayHabitsInput, PrismaUserUpdateWithoutPrismaDayHabitsInput>, PrismaUserUncheckedUpdateWithoutPrismaDayHabitsInput>
  }

  export type PrismaHabitCreateNestedOneWithoutPrismaHabitWeekDaysInput = {
    create?: XOR<PrismaHabitCreateWithoutPrismaHabitWeekDaysInput, PrismaHabitUncheckedCreateWithoutPrismaHabitWeekDaysInput>
    connectOrCreate?: PrismaHabitCreateOrConnectWithoutPrismaHabitWeekDaysInput
    connect?: PrismaHabitWhereUniqueInput
  }

  export type PrismaUserCreateNestedOneWithoutPrismaHabitWeekDaysInput = {
    create?: XOR<PrismaUserCreateWithoutPrismaHabitWeekDaysInput, PrismaUserUncheckedCreateWithoutPrismaHabitWeekDaysInput>
    connectOrCreate?: PrismaUserCreateOrConnectWithoutPrismaHabitWeekDaysInput
    connect?: PrismaUserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrismaHabitUpdateOneRequiredWithoutPrismaHabitWeekDaysNestedInput = {
    create?: XOR<PrismaHabitCreateWithoutPrismaHabitWeekDaysInput, PrismaHabitUncheckedCreateWithoutPrismaHabitWeekDaysInput>
    connectOrCreate?: PrismaHabitCreateOrConnectWithoutPrismaHabitWeekDaysInput
    upsert?: PrismaHabitUpsertWithoutPrismaHabitWeekDaysInput
    connect?: PrismaHabitWhereUniqueInput
    update?: XOR<XOR<PrismaHabitUpdateToOneWithWhereWithoutPrismaHabitWeekDaysInput, PrismaHabitUpdateWithoutPrismaHabitWeekDaysInput>, PrismaHabitUncheckedUpdateWithoutPrismaHabitWeekDaysInput>
  }

  export type PrismaUserUpdateOneRequiredWithoutPrismaHabitWeekDaysNestedInput = {
    create?: XOR<PrismaUserCreateWithoutPrismaHabitWeekDaysInput, PrismaUserUncheckedCreateWithoutPrismaHabitWeekDaysInput>
    connectOrCreate?: PrismaUserCreateOrConnectWithoutPrismaHabitWeekDaysInput
    upsert?: PrismaUserUpsertWithoutPrismaHabitWeekDaysInput
    connect?: PrismaUserWhereUniqueInput
    update?: XOR<XOR<PrismaUserUpdateToOneWithWhereWithoutPrismaHabitWeekDaysInput, PrismaUserUpdateWithoutPrismaHabitWeekDaysInput>, PrismaUserUncheckedUpdateWithoutPrismaHabitWeekDaysInput>
  }

  export type PrismaDayHabitCreateNestedManyWithoutUserInput = {
    create?: XOR<PrismaDayHabitCreateWithoutUserInput, PrismaDayHabitUncheckedCreateWithoutUserInput> | PrismaDayHabitCreateWithoutUserInput[] | PrismaDayHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutUserInput | PrismaDayHabitCreateOrConnectWithoutUserInput[]
    createMany?: PrismaDayHabitCreateManyUserInputEnvelope
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
  }

  export type PrismaWeekDayHabitCreateNestedManyWithoutUserInput = {
    create?: XOR<PrismaWeekDayHabitCreateWithoutUserInput, PrismaWeekDayHabitUncheckedCreateWithoutUserInput> | PrismaWeekDayHabitCreateWithoutUserInput[] | PrismaWeekDayHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaWeekDayHabitCreateOrConnectWithoutUserInput | PrismaWeekDayHabitCreateOrConnectWithoutUserInput[]
    createMany?: PrismaWeekDayHabitCreateManyUserInputEnvelope
    connect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
  }

  export type PrismaDayCreateNestedManyWithoutUserInput = {
    create?: XOR<PrismaDayCreateWithoutUserInput, PrismaDayUncheckedCreateWithoutUserInput> | PrismaDayCreateWithoutUserInput[] | PrismaDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaDayCreateOrConnectWithoutUserInput | PrismaDayCreateOrConnectWithoutUserInput[]
    createMany?: PrismaDayCreateManyUserInputEnvelope
    connect?: PrismaDayWhereUniqueInput | PrismaDayWhereUniqueInput[]
  }

  export type PrismaDayHabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PrismaDayHabitCreateWithoutUserInput, PrismaDayHabitUncheckedCreateWithoutUserInput> | PrismaDayHabitCreateWithoutUserInput[] | PrismaDayHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutUserInput | PrismaDayHabitCreateOrConnectWithoutUserInput[]
    createMany?: PrismaDayHabitCreateManyUserInputEnvelope
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
  }

  export type PrismaWeekDayHabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PrismaWeekDayHabitCreateWithoutUserInput, PrismaWeekDayHabitUncheckedCreateWithoutUserInput> | PrismaWeekDayHabitCreateWithoutUserInput[] | PrismaWeekDayHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaWeekDayHabitCreateOrConnectWithoutUserInput | PrismaWeekDayHabitCreateOrConnectWithoutUserInput[]
    createMany?: PrismaWeekDayHabitCreateManyUserInputEnvelope
    connect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
  }

  export type PrismaDayUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PrismaDayCreateWithoutUserInput, PrismaDayUncheckedCreateWithoutUserInput> | PrismaDayCreateWithoutUserInput[] | PrismaDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaDayCreateOrConnectWithoutUserInput | PrismaDayCreateOrConnectWithoutUserInput[]
    createMany?: PrismaDayCreateManyUserInputEnvelope
    connect?: PrismaDayWhereUniqueInput | PrismaDayWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PrismaDayHabitUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrismaDayHabitCreateWithoutUserInput, PrismaDayHabitUncheckedCreateWithoutUserInput> | PrismaDayHabitCreateWithoutUserInput[] | PrismaDayHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutUserInput | PrismaDayHabitCreateOrConnectWithoutUserInput[]
    upsert?: PrismaDayHabitUpsertWithWhereUniqueWithoutUserInput | PrismaDayHabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrismaDayHabitCreateManyUserInputEnvelope
    set?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    disconnect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    delete?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    update?: PrismaDayHabitUpdateWithWhereUniqueWithoutUserInput | PrismaDayHabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrismaDayHabitUpdateManyWithWhereWithoutUserInput | PrismaDayHabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrismaDayHabitScalarWhereInput | PrismaDayHabitScalarWhereInput[]
  }

  export type PrismaWeekDayHabitUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrismaWeekDayHabitCreateWithoutUserInput, PrismaWeekDayHabitUncheckedCreateWithoutUserInput> | PrismaWeekDayHabitCreateWithoutUserInput[] | PrismaWeekDayHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaWeekDayHabitCreateOrConnectWithoutUserInput | PrismaWeekDayHabitCreateOrConnectWithoutUserInput[]
    upsert?: PrismaWeekDayHabitUpsertWithWhereUniqueWithoutUserInput | PrismaWeekDayHabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrismaWeekDayHabitCreateManyUserInputEnvelope
    set?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    disconnect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    delete?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    connect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    update?: PrismaWeekDayHabitUpdateWithWhereUniqueWithoutUserInput | PrismaWeekDayHabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrismaWeekDayHabitUpdateManyWithWhereWithoutUserInput | PrismaWeekDayHabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrismaWeekDayHabitScalarWhereInput | PrismaWeekDayHabitScalarWhereInput[]
  }

  export type PrismaDayUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrismaDayCreateWithoutUserInput, PrismaDayUncheckedCreateWithoutUserInput> | PrismaDayCreateWithoutUserInput[] | PrismaDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaDayCreateOrConnectWithoutUserInput | PrismaDayCreateOrConnectWithoutUserInput[]
    upsert?: PrismaDayUpsertWithWhereUniqueWithoutUserInput | PrismaDayUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrismaDayCreateManyUserInputEnvelope
    set?: PrismaDayWhereUniqueInput | PrismaDayWhereUniqueInput[]
    disconnect?: PrismaDayWhereUniqueInput | PrismaDayWhereUniqueInput[]
    delete?: PrismaDayWhereUniqueInput | PrismaDayWhereUniqueInput[]
    connect?: PrismaDayWhereUniqueInput | PrismaDayWhereUniqueInput[]
    update?: PrismaDayUpdateWithWhereUniqueWithoutUserInput | PrismaDayUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrismaDayUpdateManyWithWhereWithoutUserInput | PrismaDayUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrismaDayScalarWhereInput | PrismaDayScalarWhereInput[]
  }

  export type PrismaDayHabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrismaDayHabitCreateWithoutUserInput, PrismaDayHabitUncheckedCreateWithoutUserInput> | PrismaDayHabitCreateWithoutUserInput[] | PrismaDayHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaDayHabitCreateOrConnectWithoutUserInput | PrismaDayHabitCreateOrConnectWithoutUserInput[]
    upsert?: PrismaDayHabitUpsertWithWhereUniqueWithoutUserInput | PrismaDayHabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrismaDayHabitCreateManyUserInputEnvelope
    set?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    disconnect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    delete?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    connect?: PrismaDayHabitWhereUniqueInput | PrismaDayHabitWhereUniqueInput[]
    update?: PrismaDayHabitUpdateWithWhereUniqueWithoutUserInput | PrismaDayHabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrismaDayHabitUpdateManyWithWhereWithoutUserInput | PrismaDayHabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrismaDayHabitScalarWhereInput | PrismaDayHabitScalarWhereInput[]
  }

  export type PrismaWeekDayHabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrismaWeekDayHabitCreateWithoutUserInput, PrismaWeekDayHabitUncheckedCreateWithoutUserInput> | PrismaWeekDayHabitCreateWithoutUserInput[] | PrismaWeekDayHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaWeekDayHabitCreateOrConnectWithoutUserInput | PrismaWeekDayHabitCreateOrConnectWithoutUserInput[]
    upsert?: PrismaWeekDayHabitUpsertWithWhereUniqueWithoutUserInput | PrismaWeekDayHabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrismaWeekDayHabitCreateManyUserInputEnvelope
    set?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    disconnect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    delete?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    connect?: PrismaWeekDayHabitWhereUniqueInput | PrismaWeekDayHabitWhereUniqueInput[]
    update?: PrismaWeekDayHabitUpdateWithWhereUniqueWithoutUserInput | PrismaWeekDayHabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrismaWeekDayHabitUpdateManyWithWhereWithoutUserInput | PrismaWeekDayHabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrismaWeekDayHabitScalarWhereInput | PrismaWeekDayHabitScalarWhereInput[]
  }

  export type PrismaDayUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrismaDayCreateWithoutUserInput, PrismaDayUncheckedCreateWithoutUserInput> | PrismaDayCreateWithoutUserInput[] | PrismaDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrismaDayCreateOrConnectWithoutUserInput | PrismaDayCreateOrConnectWithoutUserInput[]
    upsert?: PrismaDayUpsertWithWhereUniqueWithoutUserInput | PrismaDayUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrismaDayCreateManyUserInputEnvelope
    set?: PrismaDayWhereUniqueInput | PrismaDayWhereUniqueInput[]
    disconnect?: PrismaDayWhereUniqueInput | PrismaDayWhereUniqueInput[]
    delete?: PrismaDayWhereUniqueInput | PrismaDayWhereUniqueInput[]
    connect?: PrismaDayWhereUniqueInput | PrismaDayWhereUniqueInput[]
    update?: PrismaDayUpdateWithWhereUniqueWithoutUserInput | PrismaDayUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrismaDayUpdateManyWithWhereWithoutUserInput | PrismaDayUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrismaDayScalarWhereInput | PrismaDayScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type PrismaDayHabitCreateWithoutHabitInput = {
    id?: string
    day: PrismaDayCreateNestedOneWithoutPrismaDayHabitsInput
    user: PrismaUserCreateNestedOneWithoutPrismaDayHabitsInput
  }

  export type PrismaDayHabitUncheckedCreateWithoutHabitInput = {
    id?: string
    dayId: string
    userId: string
  }

  export type PrismaDayHabitCreateOrConnectWithoutHabitInput = {
    where: PrismaDayHabitWhereUniqueInput
    create: XOR<PrismaDayHabitCreateWithoutHabitInput, PrismaDayHabitUncheckedCreateWithoutHabitInput>
  }

  export type PrismaDayHabitCreateManyHabitInputEnvelope = {
    data: PrismaDayHabitCreateManyHabitInput | PrismaDayHabitCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type PrismaWeekDayHabitCreateWithoutHabitInput = {
    id?: string
    weekDay: number
    user: PrismaUserCreateNestedOneWithoutPrismaHabitWeekDaysInput
  }

  export type PrismaWeekDayHabitUncheckedCreateWithoutHabitInput = {
    id?: string
    weekDay: number
    userId: string
  }

  export type PrismaWeekDayHabitCreateOrConnectWithoutHabitInput = {
    where: PrismaWeekDayHabitWhereUniqueInput
    create: XOR<PrismaWeekDayHabitCreateWithoutHabitInput, PrismaWeekDayHabitUncheckedCreateWithoutHabitInput>
  }

  export type PrismaWeekDayHabitCreateManyHabitInputEnvelope = {
    data: PrismaWeekDayHabitCreateManyHabitInput | PrismaWeekDayHabitCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type PrismaDayHabitUpsertWithWhereUniqueWithoutHabitInput = {
    where: PrismaDayHabitWhereUniqueInput
    update: XOR<PrismaDayHabitUpdateWithoutHabitInput, PrismaDayHabitUncheckedUpdateWithoutHabitInput>
    create: XOR<PrismaDayHabitCreateWithoutHabitInput, PrismaDayHabitUncheckedCreateWithoutHabitInput>
  }

  export type PrismaDayHabitUpdateWithWhereUniqueWithoutHabitInput = {
    where: PrismaDayHabitWhereUniqueInput
    data: XOR<PrismaDayHabitUpdateWithoutHabitInput, PrismaDayHabitUncheckedUpdateWithoutHabitInput>
  }

  export type PrismaDayHabitUpdateManyWithWhereWithoutHabitInput = {
    where: PrismaDayHabitScalarWhereInput
    data: XOR<PrismaDayHabitUpdateManyMutationInput, PrismaDayHabitUncheckedUpdateManyWithoutHabitInput>
  }

  export type PrismaDayHabitScalarWhereInput = {
    AND?: PrismaDayHabitScalarWhereInput | PrismaDayHabitScalarWhereInput[]
    OR?: PrismaDayHabitScalarWhereInput[]
    NOT?: PrismaDayHabitScalarWhereInput | PrismaDayHabitScalarWhereInput[]
    id?: StringFilter<"PrismaDayHabit"> | string
    habitId?: StringFilter<"PrismaDayHabit"> | string
    dayId?: StringFilter<"PrismaDayHabit"> | string
    userId?: StringFilter<"PrismaDayHabit"> | string
  }

  export type PrismaWeekDayHabitUpsertWithWhereUniqueWithoutHabitInput = {
    where: PrismaWeekDayHabitWhereUniqueInput
    update: XOR<PrismaWeekDayHabitUpdateWithoutHabitInput, PrismaWeekDayHabitUncheckedUpdateWithoutHabitInput>
    create: XOR<PrismaWeekDayHabitCreateWithoutHabitInput, PrismaWeekDayHabitUncheckedCreateWithoutHabitInput>
  }

  export type PrismaWeekDayHabitUpdateWithWhereUniqueWithoutHabitInput = {
    where: PrismaWeekDayHabitWhereUniqueInput
    data: XOR<PrismaWeekDayHabitUpdateWithoutHabitInput, PrismaWeekDayHabitUncheckedUpdateWithoutHabitInput>
  }

  export type PrismaWeekDayHabitUpdateManyWithWhereWithoutHabitInput = {
    where: PrismaWeekDayHabitScalarWhereInput
    data: XOR<PrismaWeekDayHabitUpdateManyMutationInput, PrismaWeekDayHabitUncheckedUpdateManyWithoutHabitInput>
  }

  export type PrismaWeekDayHabitScalarWhereInput = {
    AND?: PrismaWeekDayHabitScalarWhereInput | PrismaWeekDayHabitScalarWhereInput[]
    OR?: PrismaWeekDayHabitScalarWhereInput[]
    NOT?: PrismaWeekDayHabitScalarWhereInput | PrismaWeekDayHabitScalarWhereInput[]
    id?: StringFilter<"PrismaWeekDayHabit"> | string
    habitId?: StringFilter<"PrismaWeekDayHabit"> | string
    weekDay?: IntFilter<"PrismaWeekDayHabit"> | number
    userId?: StringFilter<"PrismaWeekDayHabit"> | string
  }

  export type PrismaUserCreateWithoutPrismaDaysInput = {
    id?: string
    email: string
    password_hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    prismaDayHabits?: PrismaDayHabitCreateNestedManyWithoutUserInput
    prismaHabitWeekDays?: PrismaWeekDayHabitCreateNestedManyWithoutUserInput
  }

  export type PrismaUserUncheckedCreateWithoutPrismaDaysInput = {
    id?: string
    email: string
    password_hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    prismaDayHabits?: PrismaDayHabitUncheckedCreateNestedManyWithoutUserInput
    prismaHabitWeekDays?: PrismaWeekDayHabitUncheckedCreateNestedManyWithoutUserInput
  }

  export type PrismaUserCreateOrConnectWithoutPrismaDaysInput = {
    where: PrismaUserWhereUniqueInput
    create: XOR<PrismaUserCreateWithoutPrismaDaysInput, PrismaUserUncheckedCreateWithoutPrismaDaysInput>
  }

  export type PrismaDayHabitCreateWithoutDayInput = {
    id?: string
    habit: PrismaHabitCreateNestedOneWithoutPrismaDayHabitsInput
    user: PrismaUserCreateNestedOneWithoutPrismaDayHabitsInput
  }

  export type PrismaDayHabitUncheckedCreateWithoutDayInput = {
    id?: string
    habitId: string
    userId: string
  }

  export type PrismaDayHabitCreateOrConnectWithoutDayInput = {
    where: PrismaDayHabitWhereUniqueInput
    create: XOR<PrismaDayHabitCreateWithoutDayInput, PrismaDayHabitUncheckedCreateWithoutDayInput>
  }

  export type PrismaDayHabitCreateManyDayInputEnvelope = {
    data: PrismaDayHabitCreateManyDayInput | PrismaDayHabitCreateManyDayInput[]
    skipDuplicates?: boolean
  }

  export type PrismaUserUpsertWithoutPrismaDaysInput = {
    update: XOR<PrismaUserUpdateWithoutPrismaDaysInput, PrismaUserUncheckedUpdateWithoutPrismaDaysInput>
    create: XOR<PrismaUserCreateWithoutPrismaDaysInput, PrismaUserUncheckedCreateWithoutPrismaDaysInput>
    where?: PrismaUserWhereInput
  }

  export type PrismaUserUpdateToOneWithWhereWithoutPrismaDaysInput = {
    where?: PrismaUserWhereInput
    data: XOR<PrismaUserUpdateWithoutPrismaDaysInput, PrismaUserUncheckedUpdateWithoutPrismaDaysInput>
  }

  export type PrismaUserUpdateWithoutPrismaDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prismaDayHabits?: PrismaDayHabitUpdateManyWithoutUserNestedInput
    prismaHabitWeekDays?: PrismaWeekDayHabitUpdateManyWithoutUserNestedInput
  }

  export type PrismaUserUncheckedUpdateWithoutPrismaDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prismaDayHabits?: PrismaDayHabitUncheckedUpdateManyWithoutUserNestedInput
    prismaHabitWeekDays?: PrismaWeekDayHabitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PrismaDayHabitUpsertWithWhereUniqueWithoutDayInput = {
    where: PrismaDayHabitWhereUniqueInput
    update: XOR<PrismaDayHabitUpdateWithoutDayInput, PrismaDayHabitUncheckedUpdateWithoutDayInput>
    create: XOR<PrismaDayHabitCreateWithoutDayInput, PrismaDayHabitUncheckedCreateWithoutDayInput>
  }

  export type PrismaDayHabitUpdateWithWhereUniqueWithoutDayInput = {
    where: PrismaDayHabitWhereUniqueInput
    data: XOR<PrismaDayHabitUpdateWithoutDayInput, PrismaDayHabitUncheckedUpdateWithoutDayInput>
  }

  export type PrismaDayHabitUpdateManyWithWhereWithoutDayInput = {
    where: PrismaDayHabitScalarWhereInput
    data: XOR<PrismaDayHabitUpdateManyMutationInput, PrismaDayHabitUncheckedUpdateManyWithoutDayInput>
  }

  export type PrismaHabitCreateWithoutPrismaDayHabitsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    userId: string
    prismaHabitWeekDays?: PrismaWeekDayHabitCreateNestedManyWithoutHabitInput
  }

  export type PrismaHabitUncheckedCreateWithoutPrismaDayHabitsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    userId: string
    prismaHabitWeekDays?: PrismaWeekDayHabitUncheckedCreateNestedManyWithoutHabitInput
  }

  export type PrismaHabitCreateOrConnectWithoutPrismaDayHabitsInput = {
    where: PrismaHabitWhereUniqueInput
    create: XOR<PrismaHabitCreateWithoutPrismaDayHabitsInput, PrismaHabitUncheckedCreateWithoutPrismaDayHabitsInput>
  }

  export type PrismaDayCreateWithoutPrismaDayHabitsInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: PrismaUserCreateNestedOneWithoutPrismaDaysInput
  }

  export type PrismaDayUncheckedCreateWithoutPrismaDayHabitsInput = {
    id?: string
    date: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PrismaDayCreateOrConnectWithoutPrismaDayHabitsInput = {
    where: PrismaDayWhereUniqueInput
    create: XOR<PrismaDayCreateWithoutPrismaDayHabitsInput, PrismaDayUncheckedCreateWithoutPrismaDayHabitsInput>
  }

  export type PrismaUserCreateWithoutPrismaDayHabitsInput = {
    id?: string
    email: string
    password_hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    prismaHabitWeekDays?: PrismaWeekDayHabitCreateNestedManyWithoutUserInput
    prismaDays?: PrismaDayCreateNestedManyWithoutUserInput
  }

  export type PrismaUserUncheckedCreateWithoutPrismaDayHabitsInput = {
    id?: string
    email: string
    password_hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    prismaHabitWeekDays?: PrismaWeekDayHabitUncheckedCreateNestedManyWithoutUserInput
    prismaDays?: PrismaDayUncheckedCreateNestedManyWithoutUserInput
  }

  export type PrismaUserCreateOrConnectWithoutPrismaDayHabitsInput = {
    where: PrismaUserWhereUniqueInput
    create: XOR<PrismaUserCreateWithoutPrismaDayHabitsInput, PrismaUserUncheckedCreateWithoutPrismaDayHabitsInput>
  }

  export type PrismaHabitUpsertWithoutPrismaDayHabitsInput = {
    update: XOR<PrismaHabitUpdateWithoutPrismaDayHabitsInput, PrismaHabitUncheckedUpdateWithoutPrismaDayHabitsInput>
    create: XOR<PrismaHabitCreateWithoutPrismaDayHabitsInput, PrismaHabitUncheckedCreateWithoutPrismaDayHabitsInput>
    where?: PrismaHabitWhereInput
  }

  export type PrismaHabitUpdateToOneWithWhereWithoutPrismaDayHabitsInput = {
    where?: PrismaHabitWhereInput
    data: XOR<PrismaHabitUpdateWithoutPrismaDayHabitsInput, PrismaHabitUncheckedUpdateWithoutPrismaDayHabitsInput>
  }

  export type PrismaHabitUpdateWithoutPrismaDayHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    prismaHabitWeekDays?: PrismaWeekDayHabitUpdateManyWithoutHabitNestedInput
  }

  export type PrismaHabitUncheckedUpdateWithoutPrismaDayHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    prismaHabitWeekDays?: PrismaWeekDayHabitUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type PrismaDayUpsertWithoutPrismaDayHabitsInput = {
    update: XOR<PrismaDayUpdateWithoutPrismaDayHabitsInput, PrismaDayUncheckedUpdateWithoutPrismaDayHabitsInput>
    create: XOR<PrismaDayCreateWithoutPrismaDayHabitsInput, PrismaDayUncheckedCreateWithoutPrismaDayHabitsInput>
    where?: PrismaDayWhereInput
  }

  export type PrismaDayUpdateToOneWithWhereWithoutPrismaDayHabitsInput = {
    where?: PrismaDayWhereInput
    data: XOR<PrismaDayUpdateWithoutPrismaDayHabitsInput, PrismaDayUncheckedUpdateWithoutPrismaDayHabitsInput>
  }

  export type PrismaDayUpdateWithoutPrismaDayHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: PrismaUserUpdateOneRequiredWithoutPrismaDaysNestedInput
  }

  export type PrismaDayUncheckedUpdateWithoutPrismaDayHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrismaUserUpsertWithoutPrismaDayHabitsInput = {
    update: XOR<PrismaUserUpdateWithoutPrismaDayHabitsInput, PrismaUserUncheckedUpdateWithoutPrismaDayHabitsInput>
    create: XOR<PrismaUserCreateWithoutPrismaDayHabitsInput, PrismaUserUncheckedCreateWithoutPrismaDayHabitsInput>
    where?: PrismaUserWhereInput
  }

  export type PrismaUserUpdateToOneWithWhereWithoutPrismaDayHabitsInput = {
    where?: PrismaUserWhereInput
    data: XOR<PrismaUserUpdateWithoutPrismaDayHabitsInput, PrismaUserUncheckedUpdateWithoutPrismaDayHabitsInput>
  }

  export type PrismaUserUpdateWithoutPrismaDayHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prismaHabitWeekDays?: PrismaWeekDayHabitUpdateManyWithoutUserNestedInput
    prismaDays?: PrismaDayUpdateManyWithoutUserNestedInput
  }

  export type PrismaUserUncheckedUpdateWithoutPrismaDayHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prismaHabitWeekDays?: PrismaWeekDayHabitUncheckedUpdateManyWithoutUserNestedInput
    prismaDays?: PrismaDayUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PrismaHabitCreateWithoutPrismaHabitWeekDaysInput = {
    id?: string
    title: string
    createdAt?: Date | string
    userId: string
    prismaDayHabits?: PrismaDayHabitCreateNestedManyWithoutHabitInput
  }

  export type PrismaHabitUncheckedCreateWithoutPrismaHabitWeekDaysInput = {
    id?: string
    title: string
    createdAt?: Date | string
    userId: string
    prismaDayHabits?: PrismaDayHabitUncheckedCreateNestedManyWithoutHabitInput
  }

  export type PrismaHabitCreateOrConnectWithoutPrismaHabitWeekDaysInput = {
    where: PrismaHabitWhereUniqueInput
    create: XOR<PrismaHabitCreateWithoutPrismaHabitWeekDaysInput, PrismaHabitUncheckedCreateWithoutPrismaHabitWeekDaysInput>
  }

  export type PrismaUserCreateWithoutPrismaHabitWeekDaysInput = {
    id?: string
    email: string
    password_hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    prismaDayHabits?: PrismaDayHabitCreateNestedManyWithoutUserInput
    prismaDays?: PrismaDayCreateNestedManyWithoutUserInput
  }

  export type PrismaUserUncheckedCreateWithoutPrismaHabitWeekDaysInput = {
    id?: string
    email: string
    password_hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    prismaDayHabits?: PrismaDayHabitUncheckedCreateNestedManyWithoutUserInput
    prismaDays?: PrismaDayUncheckedCreateNestedManyWithoutUserInput
  }

  export type PrismaUserCreateOrConnectWithoutPrismaHabitWeekDaysInput = {
    where: PrismaUserWhereUniqueInput
    create: XOR<PrismaUserCreateWithoutPrismaHabitWeekDaysInput, PrismaUserUncheckedCreateWithoutPrismaHabitWeekDaysInput>
  }

  export type PrismaHabitUpsertWithoutPrismaHabitWeekDaysInput = {
    update: XOR<PrismaHabitUpdateWithoutPrismaHabitWeekDaysInput, PrismaHabitUncheckedUpdateWithoutPrismaHabitWeekDaysInput>
    create: XOR<PrismaHabitCreateWithoutPrismaHabitWeekDaysInput, PrismaHabitUncheckedCreateWithoutPrismaHabitWeekDaysInput>
    where?: PrismaHabitWhereInput
  }

  export type PrismaHabitUpdateToOneWithWhereWithoutPrismaHabitWeekDaysInput = {
    where?: PrismaHabitWhereInput
    data: XOR<PrismaHabitUpdateWithoutPrismaHabitWeekDaysInput, PrismaHabitUncheckedUpdateWithoutPrismaHabitWeekDaysInput>
  }

  export type PrismaHabitUpdateWithoutPrismaHabitWeekDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    prismaDayHabits?: PrismaDayHabitUpdateManyWithoutHabitNestedInput
  }

  export type PrismaHabitUncheckedUpdateWithoutPrismaHabitWeekDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    prismaDayHabits?: PrismaDayHabitUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type PrismaUserUpsertWithoutPrismaHabitWeekDaysInput = {
    update: XOR<PrismaUserUpdateWithoutPrismaHabitWeekDaysInput, PrismaUserUncheckedUpdateWithoutPrismaHabitWeekDaysInput>
    create: XOR<PrismaUserCreateWithoutPrismaHabitWeekDaysInput, PrismaUserUncheckedCreateWithoutPrismaHabitWeekDaysInput>
    where?: PrismaUserWhereInput
  }

  export type PrismaUserUpdateToOneWithWhereWithoutPrismaHabitWeekDaysInput = {
    where?: PrismaUserWhereInput
    data: XOR<PrismaUserUpdateWithoutPrismaHabitWeekDaysInput, PrismaUserUncheckedUpdateWithoutPrismaHabitWeekDaysInput>
  }

  export type PrismaUserUpdateWithoutPrismaHabitWeekDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prismaDayHabits?: PrismaDayHabitUpdateManyWithoutUserNestedInput
    prismaDays?: PrismaDayUpdateManyWithoutUserNestedInput
  }

  export type PrismaUserUncheckedUpdateWithoutPrismaHabitWeekDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prismaDayHabits?: PrismaDayHabitUncheckedUpdateManyWithoutUserNestedInput
    prismaDays?: PrismaDayUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PrismaDayHabitCreateWithoutUserInput = {
    id?: string
    habit: PrismaHabitCreateNestedOneWithoutPrismaDayHabitsInput
    day: PrismaDayCreateNestedOneWithoutPrismaDayHabitsInput
  }

  export type PrismaDayHabitUncheckedCreateWithoutUserInput = {
    id?: string
    habitId: string
    dayId: string
  }

  export type PrismaDayHabitCreateOrConnectWithoutUserInput = {
    where: PrismaDayHabitWhereUniqueInput
    create: XOR<PrismaDayHabitCreateWithoutUserInput, PrismaDayHabitUncheckedCreateWithoutUserInput>
  }

  export type PrismaDayHabitCreateManyUserInputEnvelope = {
    data: PrismaDayHabitCreateManyUserInput | PrismaDayHabitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PrismaWeekDayHabitCreateWithoutUserInput = {
    id?: string
    weekDay: number
    habit: PrismaHabitCreateNestedOneWithoutPrismaHabitWeekDaysInput
  }

  export type PrismaWeekDayHabitUncheckedCreateWithoutUserInput = {
    id?: string
    habitId: string
    weekDay: number
  }

  export type PrismaWeekDayHabitCreateOrConnectWithoutUserInput = {
    where: PrismaWeekDayHabitWhereUniqueInput
    create: XOR<PrismaWeekDayHabitCreateWithoutUserInput, PrismaWeekDayHabitUncheckedCreateWithoutUserInput>
  }

  export type PrismaWeekDayHabitCreateManyUserInputEnvelope = {
    data: PrismaWeekDayHabitCreateManyUserInput | PrismaWeekDayHabitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PrismaDayCreateWithoutUserInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    prismaDayHabits?: PrismaDayHabitCreateNestedManyWithoutDayInput
  }

  export type PrismaDayUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    prismaDayHabits?: PrismaDayHabitUncheckedCreateNestedManyWithoutDayInput
  }

  export type PrismaDayCreateOrConnectWithoutUserInput = {
    where: PrismaDayWhereUniqueInput
    create: XOR<PrismaDayCreateWithoutUserInput, PrismaDayUncheckedCreateWithoutUserInput>
  }

  export type PrismaDayCreateManyUserInputEnvelope = {
    data: PrismaDayCreateManyUserInput | PrismaDayCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PrismaDayHabitUpsertWithWhereUniqueWithoutUserInput = {
    where: PrismaDayHabitWhereUniqueInput
    update: XOR<PrismaDayHabitUpdateWithoutUserInput, PrismaDayHabitUncheckedUpdateWithoutUserInput>
    create: XOR<PrismaDayHabitCreateWithoutUserInput, PrismaDayHabitUncheckedCreateWithoutUserInput>
  }

  export type PrismaDayHabitUpdateWithWhereUniqueWithoutUserInput = {
    where: PrismaDayHabitWhereUniqueInput
    data: XOR<PrismaDayHabitUpdateWithoutUserInput, PrismaDayHabitUncheckedUpdateWithoutUserInput>
  }

  export type PrismaDayHabitUpdateManyWithWhereWithoutUserInput = {
    where: PrismaDayHabitScalarWhereInput
    data: XOR<PrismaDayHabitUpdateManyMutationInput, PrismaDayHabitUncheckedUpdateManyWithoutUserInput>
  }

  export type PrismaWeekDayHabitUpsertWithWhereUniqueWithoutUserInput = {
    where: PrismaWeekDayHabitWhereUniqueInput
    update: XOR<PrismaWeekDayHabitUpdateWithoutUserInput, PrismaWeekDayHabitUncheckedUpdateWithoutUserInput>
    create: XOR<PrismaWeekDayHabitCreateWithoutUserInput, PrismaWeekDayHabitUncheckedCreateWithoutUserInput>
  }

  export type PrismaWeekDayHabitUpdateWithWhereUniqueWithoutUserInput = {
    where: PrismaWeekDayHabitWhereUniqueInput
    data: XOR<PrismaWeekDayHabitUpdateWithoutUserInput, PrismaWeekDayHabitUncheckedUpdateWithoutUserInput>
  }

  export type PrismaWeekDayHabitUpdateManyWithWhereWithoutUserInput = {
    where: PrismaWeekDayHabitScalarWhereInput
    data: XOR<PrismaWeekDayHabitUpdateManyMutationInput, PrismaWeekDayHabitUncheckedUpdateManyWithoutUserInput>
  }

  export type PrismaDayUpsertWithWhereUniqueWithoutUserInput = {
    where: PrismaDayWhereUniqueInput
    update: XOR<PrismaDayUpdateWithoutUserInput, PrismaDayUncheckedUpdateWithoutUserInput>
    create: XOR<PrismaDayCreateWithoutUserInput, PrismaDayUncheckedCreateWithoutUserInput>
  }

  export type PrismaDayUpdateWithWhereUniqueWithoutUserInput = {
    where: PrismaDayWhereUniqueInput
    data: XOR<PrismaDayUpdateWithoutUserInput, PrismaDayUncheckedUpdateWithoutUserInput>
  }

  export type PrismaDayUpdateManyWithWhereWithoutUserInput = {
    where: PrismaDayScalarWhereInput
    data: XOR<PrismaDayUpdateManyMutationInput, PrismaDayUncheckedUpdateManyWithoutUserInput>
  }

  export type PrismaDayScalarWhereInput = {
    AND?: PrismaDayScalarWhereInput | PrismaDayScalarWhereInput[]
    OR?: PrismaDayScalarWhereInput[]
    NOT?: PrismaDayScalarWhereInput | PrismaDayScalarWhereInput[]
    id?: StringFilter<"PrismaDay"> | string
    date?: DateTimeFilter<"PrismaDay"> | Date | string
    userId?: StringFilter<"PrismaDay"> | string
    createdAt?: DateTimeFilter<"PrismaDay"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PrismaDay"> | Date | string | null
  }

  export type PrismaDayHabitCreateManyHabitInput = {
    id?: string
    dayId: string
    userId: string
  }

  export type PrismaWeekDayHabitCreateManyHabitInput = {
    id?: string
    weekDay: number
    userId: string
  }

  export type PrismaDayHabitUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: PrismaDayUpdateOneRequiredWithoutPrismaDayHabitsNestedInput
    user?: PrismaUserUpdateOneRequiredWithoutPrismaDayHabitsNestedInput
  }

  export type PrismaDayHabitUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaDayHabitUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaWeekDayHabitUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekDay?: IntFieldUpdateOperationsInput | number
    user?: PrismaUserUpdateOneRequiredWithoutPrismaHabitWeekDaysNestedInput
  }

  export type PrismaWeekDayHabitUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekDay?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaWeekDayHabitUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekDay?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaDayHabitCreateManyDayInput = {
    id?: string
    habitId: string
    userId: string
  }

  export type PrismaDayHabitUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit?: PrismaHabitUpdateOneRequiredWithoutPrismaDayHabitsNestedInput
    user?: PrismaUserUpdateOneRequiredWithoutPrismaDayHabitsNestedInput
  }

  export type PrismaDayHabitUncheckedUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaDayHabitUncheckedUpdateManyWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaDayHabitCreateManyUserInput = {
    id?: string
    habitId: string
    dayId: string
  }

  export type PrismaWeekDayHabitCreateManyUserInput = {
    id?: string
    habitId: string
    weekDay: number
  }

  export type PrismaDayCreateManyUserInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PrismaDayHabitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit?: PrismaHabitUpdateOneRequiredWithoutPrismaDayHabitsNestedInput
    day?: PrismaDayUpdateOneRequiredWithoutPrismaDayHabitsNestedInput
  }

  export type PrismaDayHabitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaDayHabitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaWeekDayHabitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekDay?: IntFieldUpdateOperationsInput | number
    habit?: PrismaHabitUpdateOneRequiredWithoutPrismaHabitWeekDaysNestedInput
  }

  export type PrismaWeekDayHabitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    weekDay?: IntFieldUpdateOperationsInput | number
  }

  export type PrismaWeekDayHabitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    weekDay?: IntFieldUpdateOperationsInput | number
  }

  export type PrismaDayUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prismaDayHabits?: PrismaDayHabitUpdateManyWithoutDayNestedInput
  }

  export type PrismaDayUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prismaDayHabits?: PrismaDayHabitUncheckedUpdateManyWithoutDayNestedInput
  }

  export type PrismaDayUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PrismaHabitCountOutputTypeDefaultArgs instead
     */
    export type PrismaHabitCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrismaHabitCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrismaDayCountOutputTypeDefaultArgs instead
     */
    export type PrismaDayCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrismaDayCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrismaUserCountOutputTypeDefaultArgs instead
     */
    export type PrismaUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrismaUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrismaHabitDefaultArgs instead
     */
    export type PrismaHabitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrismaHabitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrismaDayDefaultArgs instead
     */
    export type PrismaDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrismaDayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrismaDayHabitDefaultArgs instead
     */
    export type PrismaDayHabitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrismaDayHabitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrismaWeekDayHabitDefaultArgs instead
     */
    export type PrismaWeekDayHabitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrismaWeekDayHabitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrismaUserDefaultArgs instead
     */
    export type PrismaUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrismaUserDefaultArgs<ExtArgs>

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