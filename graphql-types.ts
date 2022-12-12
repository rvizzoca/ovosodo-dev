export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
  /** Hashed string values */
  CMSData_Hash: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  CMSData_JSON: any;
  /** A Float or a String */
  CMSData_GraphQLStringOrFloat: any;
  /** ISO8601 Date values */
  CMSData_Date: any;
  /** BigInt value */
  CMSData_GraphQLBigInt: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  graphqlTypegen?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type GraphQlSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type CmsData_Home = {
  id: Scalars['ID'];
  user_updated?: Maybe<CmsData_Directus_Users>;
  date_updated?: Maybe<Scalars['CMSData_Date']>;
  date_updated_func?: Maybe<CmsData_Datetime_Functions>;
  translations?: Maybe<Array<Maybe<CmsData_Home_Translations>>>;
  translations_func?: Maybe<CmsData_Count_Functions>;
  categories_list?: Maybe<Array<Maybe<CmsData_Home_Gallery_Categories>>>;
  categories_list_func?: Maybe<CmsData_Count_Functions>;
};


export type CmsData_HomeUser_UpdatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_HomeTranslationsArgs = {
  filter?: InputMaybe<CmsData_Home_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_HomeCategories_ListArgs = {
  filter?: InputMaybe<CmsData_Home_Gallery_Categories_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Directus_Users = {
  id: Scalars['ID'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['CMSData_Hash']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['CMSData_JSON']>;
  tags_func?: Maybe<CmsData_Count_Functions>;
  avatar?: Maybe<CmsData_Directus_Files>;
  language?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  tfa_secret?: Maybe<Scalars['CMSData_Hash']>;
  status?: Maybe<Scalars['String']>;
  role?: Maybe<CmsData_Directus_Roles>;
  token?: Maybe<Scalars['CMSData_Hash']>;
  last_access?: Maybe<Scalars['CMSData_Date']>;
  last_access_func?: Maybe<CmsData_Datetime_Functions>;
  last_page?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  external_identifier?: Maybe<Scalars['String']>;
  auth_data?: Maybe<Scalars['CMSData_JSON']>;
  auth_data_func?: Maybe<CmsData_Count_Functions>;
  email_notifications?: Maybe<Scalars['Boolean']>;
};


export type CmsData_Directus_UsersAvatarArgs = {
  filter?: InputMaybe<CmsData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Directus_UsersRoleArgs = {
  filter?: InputMaybe<CmsData_Directus_Roles_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Count_Functions = {
  count?: Maybe<Scalars['Int']>;
};

export type CmsData_Directus_Files = {
  id: Scalars['ID'];
  storage: Scalars['String'];
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  folder?: Maybe<CmsData_Directus_Folders>;
  uploaded_by?: Maybe<CmsData_Directus_Users>;
  uploaded_on?: Maybe<Scalars['CMSData_Date']>;
  uploaded_on_func?: Maybe<CmsData_Datetime_Functions>;
  modified_by?: Maybe<CmsData_Directus_Users>;
  modified_on?: Maybe<Scalars['CMSData_Date']>;
  modified_on_func?: Maybe<CmsData_Datetime_Functions>;
  charset?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['CMSData_GraphQLBigInt']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['CMSData_JSON']>;
  tags_func?: Maybe<CmsData_Count_Functions>;
  metadata?: Maybe<Scalars['CMSData_JSON']>;
  metadata_func?: Maybe<CmsData_Count_Functions>;
  file?: Maybe<File>;
};


export type CmsData_Directus_FilesFolderArgs = {
  filter?: InputMaybe<CmsData_Directus_Folders_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Directus_Folders = {
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<CmsData_Directus_Folders>;
};


export type CmsData_Directus_FoldersParentArgs = {
  filter?: InputMaybe<CmsData_Directus_Folders_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Directus_Folders_Filter = {
  id?: InputMaybe<CmsData_String_Filter_Operators>;
  name?: InputMaybe<CmsData_String_Filter_Operators>;
  parent?: InputMaybe<CmsData_Directus_Folders_Filter>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Directus_Folders_Filter>>>;
};

export type CmsData_String_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _contains?: InputMaybe<Scalars['String']>;
  _icontains?: InputMaybe<Scalars['String']>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _starts_with?: InputMaybe<Scalars['String']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
};

export type CmsData_Directus_Users_Filter = {
  id?: InputMaybe<CmsData_String_Filter_Operators>;
  first_name?: InputMaybe<CmsData_String_Filter_Operators>;
  last_name?: InputMaybe<CmsData_String_Filter_Operators>;
  email?: InputMaybe<CmsData_String_Filter_Operators>;
  password?: InputMaybe<CmsData_Hash_Filter_Operators>;
  location?: InputMaybe<CmsData_String_Filter_Operators>;
  title?: InputMaybe<CmsData_String_Filter_Operators>;
  description?: InputMaybe<CmsData_String_Filter_Operators>;
  tags?: InputMaybe<CmsData_String_Filter_Operators>;
  tags_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  avatar?: InputMaybe<CmsData_Directus_Files_Filter>;
  language?: InputMaybe<CmsData_String_Filter_Operators>;
  theme?: InputMaybe<CmsData_String_Filter_Operators>;
  tfa_secret?: InputMaybe<CmsData_Hash_Filter_Operators>;
  status?: InputMaybe<CmsData_String_Filter_Operators>;
  role?: InputMaybe<CmsData_Directus_Roles_Filter>;
  token?: InputMaybe<CmsData_Hash_Filter_Operators>;
  last_access?: InputMaybe<CmsData_Date_Filter_Operators>;
  last_access_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  last_page?: InputMaybe<CmsData_String_Filter_Operators>;
  provider?: InputMaybe<CmsData_String_Filter_Operators>;
  external_identifier?: InputMaybe<CmsData_String_Filter_Operators>;
  auth_data?: InputMaybe<CmsData_String_Filter_Operators>;
  auth_data_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  email_notifications?: InputMaybe<CmsData_Boolean_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Directus_Users_Filter>>>;
};

export type CmsData_Hash_Filter_Operators = {
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
};

export type CmsData_Count_Function_Filter_Operators = {
  count?: InputMaybe<CmsData_Number_Filter_Operators>;
};

export type CmsData_Number_Filter_Operators = {
  _eq?: InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>;
  _neq?: InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>>>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>>>;
  _gt?: InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>;
  _lt?: InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _between?: InputMaybe<Array<InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>>>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>>>;
};

export type CmsData_Directus_Files_Filter = {
  id?: InputMaybe<CmsData_String_Filter_Operators>;
  storage?: InputMaybe<CmsData_String_Filter_Operators>;
  filename_disk?: InputMaybe<CmsData_String_Filter_Operators>;
  filename_download?: InputMaybe<CmsData_String_Filter_Operators>;
  title?: InputMaybe<CmsData_String_Filter_Operators>;
  type?: InputMaybe<CmsData_String_Filter_Operators>;
  folder?: InputMaybe<CmsData_Directus_Folders_Filter>;
  uploaded_by?: InputMaybe<CmsData_Directus_Users_Filter>;
  uploaded_on?: InputMaybe<CmsData_Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  modified_by?: InputMaybe<CmsData_Directus_Users_Filter>;
  modified_on?: InputMaybe<CmsData_Date_Filter_Operators>;
  modified_on_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  charset?: InputMaybe<CmsData_String_Filter_Operators>;
  filesize?: InputMaybe<CmsData_Number_Filter_Operators>;
  width?: InputMaybe<CmsData_Number_Filter_Operators>;
  height?: InputMaybe<CmsData_Number_Filter_Operators>;
  duration?: InputMaybe<CmsData_Number_Filter_Operators>;
  embed?: InputMaybe<CmsData_String_Filter_Operators>;
  description?: InputMaybe<CmsData_String_Filter_Operators>;
  location?: InputMaybe<CmsData_String_Filter_Operators>;
  tags?: InputMaybe<CmsData_String_Filter_Operators>;
  tags_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  metadata?: InputMaybe<CmsData_String_Filter_Operators>;
  metadata_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Directus_Files_Filter>>>;
};

export type CmsData_Date_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _between?: InputMaybe<Array<InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>>>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['CMSData_GraphQLStringOrFloat']>>>;
};

export type CmsData_Datetime_Function_Filter_Operators = {
  year?: InputMaybe<CmsData_Number_Filter_Operators>;
  month?: InputMaybe<CmsData_Number_Filter_Operators>;
  week?: InputMaybe<CmsData_Number_Filter_Operators>;
  day?: InputMaybe<CmsData_Number_Filter_Operators>;
  weekday?: InputMaybe<CmsData_Number_Filter_Operators>;
  hour?: InputMaybe<CmsData_Number_Filter_Operators>;
  minute?: InputMaybe<CmsData_Number_Filter_Operators>;
  second?: InputMaybe<CmsData_Number_Filter_Operators>;
};

export type CmsData_Directus_Roles_Filter = {
  id?: InputMaybe<CmsData_String_Filter_Operators>;
  name?: InputMaybe<CmsData_String_Filter_Operators>;
  icon?: InputMaybe<CmsData_String_Filter_Operators>;
  description?: InputMaybe<CmsData_String_Filter_Operators>;
  ip_access?: InputMaybe<CmsData_String_Filter_Operators>;
  enforce_tfa?: InputMaybe<CmsData_Boolean_Filter_Operators>;
  admin_access?: InputMaybe<CmsData_Boolean_Filter_Operators>;
  app_access?: InputMaybe<CmsData_Boolean_Filter_Operators>;
  users?: InputMaybe<CmsData_Directus_Users_Filter>;
  users_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Directus_Roles_Filter>>>;
};

export type CmsData_Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
};

export type CmsData_Datetime_Functions = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
};

export type CmsData_Directus_Roles = {
  id: Scalars['ID'];
  name: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  enforce_tfa: Scalars['Boolean'];
  admin_access: Scalars['Boolean'];
  app_access?: Maybe<Scalars['Boolean']>;
  users?: Maybe<Array<Maybe<CmsData_Directus_Users>>>;
  users_func?: Maybe<CmsData_Count_Functions>;
};


export type CmsData_Directus_RolesUsersArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Home_Translations = {
  id: Scalars['ID'];
  home_id?: Maybe<CmsData_Home>;
  languages_id?: Maybe<CmsData_Languages>;
  metatag_title?: Maybe<Scalars['String']>;
  metatag_description?: Maybe<Scalars['String']>;
  test_list?: Maybe<Scalars['CMSData_JSON']>;
  test_list_func?: Maybe<CmsData_Count_Functions>;
  video_file?: Maybe<CmsData_Directus_Files>;
  cards_list?: Maybe<Array<Maybe<CmsData_Home_Translations_Card>>>;
  cards_list_func?: Maybe<CmsData_Count_Functions>;
  slides_list?: Maybe<Array<Maybe<CmsData_Home_Translations_Slide>>>;
  slides_list_func?: Maybe<CmsData_Count_Functions>;
};


export type CmsData_Home_TranslationsHome_IdArgs = {
  filter?: InputMaybe<CmsData_Home_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Home_TranslationsLanguages_IdArgs = {
  filter?: InputMaybe<CmsData_Languages_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Home_TranslationsVideo_FileArgs = {
  filter?: InputMaybe<CmsData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Home_TranslationsCards_ListArgs = {
  filter?: InputMaybe<CmsData_Home_Translations_Card_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Home_TranslationsSlides_ListArgs = {
  filter?: InputMaybe<CmsData_Home_Translations_Slide_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Home_Filter = {
  id?: InputMaybe<CmsData_String_Filter_Operators>;
  user_updated?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_updated?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  translations?: InputMaybe<CmsData_Home_Translations_Filter>;
  translations_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  categories_list?: InputMaybe<CmsData_Home_Gallery_Categories_Filter>;
  categories_list_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Home_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Home_Filter>>>;
};

export type CmsData_Home_Translations_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  home_id?: InputMaybe<CmsData_Home_Filter>;
  languages_id?: InputMaybe<CmsData_Languages_Filter>;
  metatag_title?: InputMaybe<CmsData_String_Filter_Operators>;
  metatag_description?: InputMaybe<CmsData_String_Filter_Operators>;
  test_list?: InputMaybe<CmsData_String_Filter_Operators>;
  test_list_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  video_file?: InputMaybe<CmsData_Directus_Files_Filter>;
  cards_list?: InputMaybe<CmsData_Home_Translations_Card_Filter>;
  cards_list_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  slides_list?: InputMaybe<CmsData_Home_Translations_Slide_Filter>;
  slides_list_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Home_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Home_Translations_Filter>>>;
};

export type CmsData_Languages_Filter = {
  code?: InputMaybe<CmsData_String_Filter_Operators>;
  name?: InputMaybe<CmsData_String_Filter_Operators>;
  direction?: InputMaybe<CmsData_String_Filter_Operators>;
  prefix?: InputMaybe<CmsData_String_Filter_Operators>;
  sort?: InputMaybe<CmsData_Number_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Languages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Languages_Filter>>>;
};

export type CmsData_Home_Translations_Card_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  home_translations_id?: InputMaybe<CmsData_Home_Translations_Filter>;
  card_id?: InputMaybe<CmsData_Card_Filter>;
  sort?: InputMaybe<CmsData_Number_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Home_Translations_Card_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Home_Translations_Card_Filter>>>;
};

export type CmsData_Card_Filter = {
  id?: InputMaybe<CmsData_String_Filter_Operators>;
  sort?: InputMaybe<CmsData_Number_Filter_Operators>;
  user_created?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_created?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_created_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  user_updated?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_updated?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  identifier?: InputMaybe<CmsData_String_Filter_Operators>;
  icon?: InputMaybe<CmsData_Directus_Files_Filter>;
  translations?: InputMaybe<CmsData_Card_Translations_Filter>;
  translations_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  home_translations?: InputMaybe<CmsData_Home_Translations_Card_Filter>;
  home_translations_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Card_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Card_Filter>>>;
};

export type CmsData_Card_Translations_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  card_id?: InputMaybe<CmsData_Card_Filter>;
  languages_code?: InputMaybe<CmsData_Languages_Filter>;
  title?: InputMaybe<CmsData_String_Filter_Operators>;
  description?: InputMaybe<CmsData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Card_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Card_Translations_Filter>>>;
};

export type CmsData_Home_Translations_Slide_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  home_translations_id?: InputMaybe<CmsData_Home_Translations_Filter>;
  slide_id?: InputMaybe<CmsData_Slide_Filter>;
  sort?: InputMaybe<CmsData_Number_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Home_Translations_Slide_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Home_Translations_Slide_Filter>>>;
};

export type CmsData_Slide_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  sort?: InputMaybe<CmsData_Number_Filter_Operators>;
  user_created?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_created?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_created_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  user_updated?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_updated?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  identifier?: InputMaybe<CmsData_String_Filter_Operators>;
  image?: InputMaybe<CmsData_Directus_Files_Filter>;
  home_translations?: InputMaybe<CmsData_Home_Translations_Slide_Filter>;
  home_translations_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  translations?: InputMaybe<CmsData_Slide_Translations_Filter>;
  translations_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Slide_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Slide_Filter>>>;
};

export type CmsData_Slide_Translations_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  slide_id?: InputMaybe<CmsData_Slide_Filter>;
  languages_code?: InputMaybe<CmsData_Languages_Filter>;
  title?: InputMaybe<CmsData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Slide_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Slide_Translations_Filter>>>;
};

export type CmsData_Home_Gallery_Categories_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  home_id?: InputMaybe<CmsData_Home_Filter>;
  gallery_categories_id?: InputMaybe<CmsData_Gallery_Categories_Filter>;
  sort?: InputMaybe<CmsData_Number_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Home_Gallery_Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Home_Gallery_Categories_Filter>>>;
};

export type CmsData_Gallery_Categories_Filter = {
  id?: InputMaybe<CmsData_String_Filter_Operators>;
  sort?: InputMaybe<CmsData_Number_Filter_Operators>;
  user_created?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_created?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_created_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  user_updated?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_updated?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  identifier?: InputMaybe<CmsData_String_Filter_Operators>;
  translations?: InputMaybe<CmsData_Gallery_Categories_Translations_Filter>;
  translations_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  images?: InputMaybe<CmsData_Gallery_Categories_Files_Filter>;
  images_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  home?: InputMaybe<CmsData_Home_Gallery_Categories_Filter>;
  home_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Gallery_Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Gallery_Categories_Filter>>>;
};

export type CmsData_Gallery_Categories_Translations_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  gallery_categories_id?: InputMaybe<CmsData_Gallery_Categories_Filter>;
  languages_code?: InputMaybe<CmsData_Languages_Filter>;
  title?: InputMaybe<CmsData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Gallery_Categories_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Gallery_Categories_Translations_Filter>>>;
};

export type CmsData_Gallery_Categories_Files_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  gallery_categories_id?: InputMaybe<CmsData_Gallery_Categories_Filter>;
  directus_files_id?: InputMaybe<CmsData_Directus_Files_Filter>;
  sort?: InputMaybe<CmsData_Number_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Gallery_Categories_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Gallery_Categories_Files_Filter>>>;
};

export type CmsData_Languages = {
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  direction?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};

export type CmsData_Home_Translations_Card = {
  id: Scalars['ID'];
  home_translations_id?: Maybe<CmsData_Home_Translations>;
  card_id?: Maybe<CmsData_Card>;
  sort?: Maybe<Scalars['Int']>;
};


export type CmsData_Home_Translations_CardHome_Translations_IdArgs = {
  filter?: InputMaybe<CmsData_Home_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Home_Translations_CardCard_IdArgs = {
  filter?: InputMaybe<CmsData_Card_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Card = {
  id: Scalars['ID'];
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<CmsData_Directus_Users>;
  date_created?: Maybe<Scalars['CMSData_Date']>;
  date_created_func?: Maybe<CmsData_Datetime_Functions>;
  user_updated?: Maybe<CmsData_Directus_Users>;
  date_updated?: Maybe<Scalars['CMSData_Date']>;
  date_updated_func?: Maybe<CmsData_Datetime_Functions>;
  identifier: Scalars['String'];
  icon?: Maybe<CmsData_Directus_Files>;
  translations?: Maybe<Array<Maybe<CmsData_Card_Translations>>>;
  translations_func?: Maybe<CmsData_Count_Functions>;
  home_translations?: Maybe<Array<Maybe<CmsData_Home_Translations_Card>>>;
  home_translations_func?: Maybe<CmsData_Count_Functions>;
};


export type CmsData_CardUser_CreatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_CardUser_UpdatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_CardIconArgs = {
  filter?: InputMaybe<CmsData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_CardTranslationsArgs = {
  filter?: InputMaybe<CmsData_Card_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_CardHome_TranslationsArgs = {
  filter?: InputMaybe<CmsData_Home_Translations_Card_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Card_Translations = {
  id: Scalars['ID'];
  card_id?: Maybe<CmsData_Card>;
  languages_code?: Maybe<CmsData_Languages>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type CmsData_Card_TranslationsCard_IdArgs = {
  filter?: InputMaybe<CmsData_Card_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Card_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<CmsData_Languages_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Home_Translations_Slide = {
  id: Scalars['ID'];
  home_translations_id?: Maybe<CmsData_Home_Translations>;
  slide_id?: Maybe<CmsData_Slide>;
  sort?: Maybe<Scalars['Int']>;
};


export type CmsData_Home_Translations_SlideHome_Translations_IdArgs = {
  filter?: InputMaybe<CmsData_Home_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Home_Translations_SlideSlide_IdArgs = {
  filter?: InputMaybe<CmsData_Slide_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Slide = {
  id: Scalars['ID'];
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<CmsData_Directus_Users>;
  date_created?: Maybe<Scalars['CMSData_Date']>;
  date_created_func?: Maybe<CmsData_Datetime_Functions>;
  user_updated?: Maybe<CmsData_Directus_Users>;
  date_updated?: Maybe<Scalars['CMSData_Date']>;
  date_updated_func?: Maybe<CmsData_Datetime_Functions>;
  identifier: Scalars['String'];
  image?: Maybe<CmsData_Directus_Files>;
  home_translations?: Maybe<Array<Maybe<CmsData_Home_Translations_Slide>>>;
  home_translations_func?: Maybe<CmsData_Count_Functions>;
  translations?: Maybe<Array<Maybe<CmsData_Slide_Translations>>>;
  translations_func?: Maybe<CmsData_Count_Functions>;
};


export type CmsData_SlideUser_CreatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_SlideUser_UpdatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_SlideImageArgs = {
  filter?: InputMaybe<CmsData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_SlideHome_TranslationsArgs = {
  filter?: InputMaybe<CmsData_Home_Translations_Slide_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_SlideTranslationsArgs = {
  filter?: InputMaybe<CmsData_Slide_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Slide_Translations = {
  id: Scalars['ID'];
  slide_id?: Maybe<CmsData_Slide>;
  languages_code?: Maybe<CmsData_Languages>;
  title?: Maybe<Scalars['String']>;
};


export type CmsData_Slide_TranslationsSlide_IdArgs = {
  filter?: InputMaybe<CmsData_Slide_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Slide_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<CmsData_Languages_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Home_Gallery_Categories = {
  id: Scalars['ID'];
  home_id?: Maybe<CmsData_Home>;
  gallery_categories_id?: Maybe<CmsData_Gallery_Categories>;
  sort?: Maybe<Scalars['Int']>;
};


export type CmsData_Home_Gallery_CategoriesHome_IdArgs = {
  filter?: InputMaybe<CmsData_Home_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Home_Gallery_CategoriesGallery_Categories_IdArgs = {
  filter?: InputMaybe<CmsData_Gallery_Categories_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Gallery_Categories = {
  id: Scalars['ID'];
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<CmsData_Directus_Users>;
  date_created?: Maybe<Scalars['CMSData_Date']>;
  date_created_func?: Maybe<CmsData_Datetime_Functions>;
  user_updated?: Maybe<CmsData_Directus_Users>;
  date_updated?: Maybe<Scalars['CMSData_Date']>;
  date_updated_func?: Maybe<CmsData_Datetime_Functions>;
  identifier: Scalars['String'];
  translations?: Maybe<Array<Maybe<CmsData_Gallery_Categories_Translations>>>;
  translations_func?: Maybe<CmsData_Count_Functions>;
  images?: Maybe<Array<Maybe<CmsData_Gallery_Categories_Files>>>;
  images_func?: Maybe<CmsData_Count_Functions>;
  home?: Maybe<Array<Maybe<CmsData_Home_Gallery_Categories>>>;
  home_func?: Maybe<CmsData_Count_Functions>;
};


export type CmsData_Gallery_CategoriesUser_CreatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Gallery_CategoriesUser_UpdatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Gallery_CategoriesTranslationsArgs = {
  filter?: InputMaybe<CmsData_Gallery_Categories_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Gallery_CategoriesImagesArgs = {
  filter?: InputMaybe<CmsData_Gallery_Categories_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Gallery_CategoriesHomeArgs = {
  filter?: InputMaybe<CmsData_Home_Gallery_Categories_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Gallery_Categories_Translations = {
  id: Scalars['ID'];
  gallery_categories_id?: Maybe<CmsData_Gallery_Categories>;
  languages_code?: Maybe<CmsData_Languages>;
  title: Scalars['String'];
};


export type CmsData_Gallery_Categories_TranslationsGallery_Categories_IdArgs = {
  filter?: InputMaybe<CmsData_Gallery_Categories_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Gallery_Categories_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<CmsData_Languages_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Gallery_Categories_Files = {
  id: Scalars['ID'];
  gallery_categories_id?: Maybe<CmsData_Gallery_Categories>;
  directus_files_id?: Maybe<CmsData_Directus_Files>;
  sort?: Maybe<Scalars['Int']>;
};


export type CmsData_Gallery_Categories_FilesGallery_Categories_IdArgs = {
  filter?: InputMaybe<CmsData_Gallery_Categories_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Gallery_Categories_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<CmsData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Languages_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Languages_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Languages_Aggregated_Count>;
  avg?: Maybe<CmsData_Languages_Aggregated_Fields>;
  sum?: Maybe<CmsData_Languages_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Languages_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Languages_Aggregated_Fields>;
  min?: Maybe<CmsData_Languages_Aggregated_Fields>;
  max?: Maybe<CmsData_Languages_Aggregated_Fields>;
};

export type CmsData_Languages_Aggregated_Count = {
  code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  direction?: Maybe<Scalars['Int']>;
  prefix?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
};

export type CmsData_Languages_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']>;
};

export type CmsData_Card_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Card_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Card_Aggregated_Count>;
  avg?: Maybe<CmsData_Card_Aggregated_Fields>;
  sum?: Maybe<CmsData_Card_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Card_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Card_Aggregated_Fields>;
  min?: Maybe<CmsData_Card_Aggregated_Fields>;
  max?: Maybe<CmsData_Card_Aggregated_Fields>;
};

export type CmsData_Card_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['Int']>;
  translations?: Maybe<Scalars['Int']>;
  home_translations?: Maybe<Scalars['Int']>;
};

export type CmsData_Card_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']>;
};

export type CmsData_Card_Translations_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Card_Translations_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Card_Translations_Aggregated_Count>;
  avg?: Maybe<CmsData_Card_Translations_Aggregated_Fields>;
  sum?: Maybe<CmsData_Card_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Card_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Card_Translations_Aggregated_Fields>;
  min?: Maybe<CmsData_Card_Translations_Aggregated_Fields>;
  max?: Maybe<CmsData_Card_Translations_Aggregated_Fields>;
};

export type CmsData_Card_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  card_id?: Maybe<Scalars['Int']>;
  languages_code?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type CmsData_Card_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
};

export type CmsData_Home_Translations_Card_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Home_Translations_Card_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Home_Translations_Card_Aggregated_Count>;
  avg?: Maybe<CmsData_Home_Translations_Card_Aggregated_Fields>;
  sum?: Maybe<CmsData_Home_Translations_Card_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Home_Translations_Card_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Home_Translations_Card_Aggregated_Fields>;
  min?: Maybe<CmsData_Home_Translations_Card_Aggregated_Fields>;
  max?: Maybe<CmsData_Home_Translations_Card_Aggregated_Fields>;
};

export type CmsData_Home_Translations_Card_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  home_translations_id?: Maybe<Scalars['Int']>;
  card_id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
};

export type CmsData_Home_Translations_Card_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
  home_translations_id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type CmsData_Slide_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Slide_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Slide_Aggregated_Count>;
  avg?: Maybe<CmsData_Slide_Aggregated_Fields>;
  sum?: Maybe<CmsData_Slide_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Slide_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Slide_Aggregated_Fields>;
  min?: Maybe<CmsData_Slide_Aggregated_Fields>;
  max?: Maybe<CmsData_Slide_Aggregated_Fields>;
};

export type CmsData_Slide_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  home_translations?: Maybe<Scalars['Int']>;
  translations?: Maybe<Scalars['Int']>;
};

export type CmsData_Slide_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type CmsData_Home_Translations_Slide_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Home_Translations_Slide_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Home_Translations_Slide_Aggregated_Count>;
  avg?: Maybe<CmsData_Home_Translations_Slide_Aggregated_Fields>;
  sum?: Maybe<CmsData_Home_Translations_Slide_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Home_Translations_Slide_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Home_Translations_Slide_Aggregated_Fields>;
  min?: Maybe<CmsData_Home_Translations_Slide_Aggregated_Fields>;
  max?: Maybe<CmsData_Home_Translations_Slide_Aggregated_Fields>;
};

export type CmsData_Home_Translations_Slide_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  home_translations_id?: Maybe<Scalars['Int']>;
  slide_id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
};

export type CmsData_Home_Translations_Slide_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
  home_translations_id?: Maybe<Scalars['Float']>;
  slide_id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type CmsData_Slide_Translations_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Slide_Translations_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Slide_Translations_Aggregated_Count>;
  avg?: Maybe<CmsData_Slide_Translations_Aggregated_Fields>;
  sum?: Maybe<CmsData_Slide_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Slide_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Slide_Translations_Aggregated_Fields>;
  min?: Maybe<CmsData_Slide_Translations_Aggregated_Fields>;
  max?: Maybe<CmsData_Slide_Translations_Aggregated_Fields>;
};

export type CmsData_Slide_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  slide_id?: Maybe<Scalars['Int']>;
  languages_code?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

export type CmsData_Slide_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
  slide_id?: Maybe<Scalars['Float']>;
};

export type CmsData_Home_Translations_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Home_Translations_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Home_Translations_Aggregated_Count>;
  avg?: Maybe<CmsData_Home_Translations_Aggregated_Fields>;
  sum?: Maybe<CmsData_Home_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Home_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Home_Translations_Aggregated_Fields>;
  min?: Maybe<CmsData_Home_Translations_Aggregated_Fields>;
  max?: Maybe<CmsData_Home_Translations_Aggregated_Fields>;
};

export type CmsData_Home_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  home_id?: Maybe<Scalars['Int']>;
  languages_id?: Maybe<Scalars['Int']>;
  metatag_title?: Maybe<Scalars['Int']>;
  metatag_description?: Maybe<Scalars['Int']>;
  test_list?: Maybe<Scalars['Int']>;
  video_file?: Maybe<Scalars['Int']>;
  cards_list?: Maybe<Scalars['Int']>;
  slides_list?: Maybe<Scalars['Int']>;
};

export type CmsData_Home_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
};

export type CmsData_Vocabulary = {
  id: Scalars['ID'];
  user_created?: Maybe<CmsData_Directus_Users>;
  date_created?: Maybe<Scalars['CMSData_Date']>;
  date_created_func?: Maybe<CmsData_Datetime_Functions>;
  user_updated?: Maybe<CmsData_Directus_Users>;
  date_updated?: Maybe<Scalars['CMSData_Date']>;
  date_updated_func?: Maybe<CmsData_Datetime_Functions>;
  code: Scalars['String'];
  translations?: Maybe<Array<Maybe<CmsData_Vocabulary_Translations>>>;
  translations_func?: Maybe<CmsData_Count_Functions>;
};


export type CmsData_VocabularyUser_CreatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_VocabularyUser_UpdatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_VocabularyTranslationsArgs = {
  filter?: InputMaybe<CmsData_Vocabulary_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Vocabulary_Translations = {
  id: Scalars['ID'];
  vocabulary_id?: Maybe<CmsData_Vocabulary>;
  languages_code?: Maybe<CmsData_Languages>;
  label: Scalars['String'];
};


export type CmsData_Vocabulary_TranslationsVocabulary_IdArgs = {
  filter?: InputMaybe<CmsData_Vocabulary_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Vocabulary_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<CmsData_Languages_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Vocabulary_Filter = {
  id?: InputMaybe<CmsData_String_Filter_Operators>;
  user_created?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_created?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_created_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  user_updated?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_updated?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  code?: InputMaybe<CmsData_String_Filter_Operators>;
  translations?: InputMaybe<CmsData_Vocabulary_Translations_Filter>;
  translations_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Vocabulary_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Vocabulary_Filter>>>;
};

export type CmsData_Vocabulary_Translations_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  vocabulary_id?: InputMaybe<CmsData_Vocabulary_Filter>;
  languages_code?: InputMaybe<CmsData_Languages_Filter>;
  label?: InputMaybe<CmsData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Vocabulary_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Vocabulary_Translations_Filter>>>;
};

export type CmsData_Vocabulary_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Vocabulary_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Vocabulary_Aggregated_Count>;
};

export type CmsData_Vocabulary_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  translations?: Maybe<Scalars['Int']>;
};

export type CmsData_Vocabulary_Translations_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Vocabulary_Translations_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Vocabulary_Translations_Aggregated_Count>;
  avg?: Maybe<CmsData_Vocabulary_Translations_Aggregated_Fields>;
  sum?: Maybe<CmsData_Vocabulary_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Vocabulary_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Vocabulary_Translations_Aggregated_Fields>;
  min?: Maybe<CmsData_Vocabulary_Translations_Aggregated_Fields>;
  max?: Maybe<CmsData_Vocabulary_Translations_Aggregated_Fields>;
};

export type CmsData_Vocabulary_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  vocabulary_id?: Maybe<Scalars['Int']>;
  languages_code?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['Int']>;
};

export type CmsData_Vocabulary_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
};

export type CmsData_Gallery_Categories_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Gallery_Categories_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Gallery_Categories_Aggregated_Count>;
  avg?: Maybe<CmsData_Gallery_Categories_Aggregated_Fields>;
  sum?: Maybe<CmsData_Gallery_Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Gallery_Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Gallery_Categories_Aggregated_Fields>;
  min?: Maybe<CmsData_Gallery_Categories_Aggregated_Fields>;
  max?: Maybe<CmsData_Gallery_Categories_Aggregated_Fields>;
};

export type CmsData_Gallery_Categories_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['Int']>;
  translations?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['Int']>;
  home?: Maybe<Scalars['Int']>;
};

export type CmsData_Gallery_Categories_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']>;
};

export type CmsData_Gallery_Categories_Translations_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Gallery_Categories_Translations_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Gallery_Categories_Translations_Aggregated_Count>;
  avg?: Maybe<CmsData_Gallery_Categories_Translations_Aggregated_Fields>;
  sum?: Maybe<CmsData_Gallery_Categories_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Gallery_Categories_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Gallery_Categories_Translations_Aggregated_Fields>;
  min?: Maybe<CmsData_Gallery_Categories_Translations_Aggregated_Fields>;
  max?: Maybe<CmsData_Gallery_Categories_Translations_Aggregated_Fields>;
};

export type CmsData_Gallery_Categories_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  gallery_categories_id?: Maybe<Scalars['Int']>;
  languages_code?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

export type CmsData_Gallery_Categories_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
};

export type CmsData_Gallery_Categories_Files_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Gallery_Categories_Files_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Gallery_Categories_Files_Aggregated_Count>;
  avg?: Maybe<CmsData_Gallery_Categories_Files_Aggregated_Fields>;
  sum?: Maybe<CmsData_Gallery_Categories_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Gallery_Categories_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Gallery_Categories_Files_Aggregated_Fields>;
  min?: Maybe<CmsData_Gallery_Categories_Files_Aggregated_Fields>;
  max?: Maybe<CmsData_Gallery_Categories_Files_Aggregated_Fields>;
};

export type CmsData_Gallery_Categories_Files_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  gallery_categories_id?: Maybe<Scalars['Int']>;
  directus_files_id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
};

export type CmsData_Gallery_Categories_Files_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type CmsData_Home_Gallery_Categories_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Home_Gallery_Categories_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Home_Gallery_Categories_Aggregated_Count>;
  avg?: Maybe<CmsData_Home_Gallery_Categories_Aggregated_Fields>;
  sum?: Maybe<CmsData_Home_Gallery_Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Home_Gallery_Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Home_Gallery_Categories_Aggregated_Fields>;
  min?: Maybe<CmsData_Home_Gallery_Categories_Aggregated_Fields>;
  max?: Maybe<CmsData_Home_Gallery_Categories_Aggregated_Fields>;
};

export type CmsData_Home_Gallery_Categories_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  home_id?: Maybe<Scalars['Int']>;
  gallery_categories_id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
};

export type CmsData_Home_Gallery_Categories_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type CmsData_Rooms = {
  id: Scalars['ID'];
  user_updated?: Maybe<CmsData_Directus_Users>;
  date_updated?: Maybe<Scalars['CMSData_Date']>;
  date_updated_func?: Maybe<CmsData_Datetime_Functions>;
  translations?: Maybe<Array<Maybe<CmsData_Rooms_Translations>>>;
  translations_func?: Maybe<CmsData_Count_Functions>;
};


export type CmsData_RoomsUser_UpdatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_RoomsTranslationsArgs = {
  filter?: InputMaybe<CmsData_Rooms_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Rooms_Translations = {
  id: Scalars['ID'];
  rooms_id?: Maybe<CmsData_Rooms>;
  languages_code?: Maybe<CmsData_Languages>;
  metatag_title?: Maybe<Scalars['String']>;
  metatag_description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  services_list?: Maybe<Array<Maybe<CmsData_Rooms_Translations_Service>>>;
  services_list_func?: Maybe<CmsData_Count_Functions>;
};


export type CmsData_Rooms_TranslationsRooms_IdArgs = {
  filter?: InputMaybe<CmsData_Rooms_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Rooms_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<CmsData_Languages_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Rooms_TranslationsServices_ListArgs = {
  filter?: InputMaybe<CmsData_Rooms_Translations_Service_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Rooms_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  user_updated?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_updated?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  translations?: InputMaybe<CmsData_Rooms_Translations_Filter>;
  translations_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Rooms_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Rooms_Filter>>>;
};

export type CmsData_Rooms_Translations_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  rooms_id?: InputMaybe<CmsData_Rooms_Filter>;
  languages_code?: InputMaybe<CmsData_Languages_Filter>;
  metatag_title?: InputMaybe<CmsData_String_Filter_Operators>;
  metatag_description?: InputMaybe<CmsData_String_Filter_Operators>;
  title?: InputMaybe<CmsData_String_Filter_Operators>;
  slug?: InputMaybe<CmsData_String_Filter_Operators>;
  services_list?: InputMaybe<CmsData_Rooms_Translations_Service_Filter>;
  services_list_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Rooms_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Rooms_Translations_Filter>>>;
};

export type CmsData_Rooms_Translations_Service_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  rooms_translations_id?: InputMaybe<CmsData_Rooms_Translations_Filter>;
  service_id?: InputMaybe<CmsData_Service_Filter>;
  sort?: InputMaybe<CmsData_Number_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Rooms_Translations_Service_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Rooms_Translations_Service_Filter>>>;
};

export type CmsData_Service_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  sort?: InputMaybe<CmsData_Number_Filter_Operators>;
  user_created?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_created?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_created_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  user_updated?: InputMaybe<CmsData_Directus_Users_Filter>;
  date_updated?: InputMaybe<CmsData_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<CmsData_Datetime_Function_Filter_Operators>;
  identifier?: InputMaybe<CmsData_String_Filter_Operators>;
  image?: InputMaybe<CmsData_Directus_Files_Filter>;
  translations?: InputMaybe<CmsData_Service_Translations_Filter>;
  translations_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  rooms_translations?: InputMaybe<CmsData_Rooms_Translations_Service_Filter>;
  rooms_translations_func?: InputMaybe<CmsData_Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Service_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Service_Filter>>>;
};

export type CmsData_Service_Translations_Filter = {
  id?: InputMaybe<CmsData_Number_Filter_Operators>;
  service_id?: InputMaybe<CmsData_Service_Filter>;
  languages_code?: InputMaybe<CmsData_Languages_Filter>;
  title?: InputMaybe<CmsData_String_Filter_Operators>;
  description?: InputMaybe<CmsData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<CmsData_Service_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<CmsData_Service_Translations_Filter>>>;
};

export type CmsData_Rooms_Translations_Service = {
  id: Scalars['ID'];
  rooms_translations_id?: Maybe<CmsData_Rooms_Translations>;
  service_id?: Maybe<CmsData_Service>;
  sort?: Maybe<Scalars['Int']>;
};


export type CmsData_Rooms_Translations_ServiceRooms_Translations_IdArgs = {
  filter?: InputMaybe<CmsData_Rooms_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Rooms_Translations_ServiceService_IdArgs = {
  filter?: InputMaybe<CmsData_Service_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Service = {
  id: Scalars['ID'];
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<CmsData_Directus_Users>;
  date_created?: Maybe<Scalars['CMSData_Date']>;
  date_created_func?: Maybe<CmsData_Datetime_Functions>;
  user_updated?: Maybe<CmsData_Directus_Users>;
  date_updated?: Maybe<Scalars['CMSData_Date']>;
  date_updated_func?: Maybe<CmsData_Datetime_Functions>;
  identifier: Scalars['String'];
  image?: Maybe<CmsData_Directus_Files>;
  translations?: Maybe<Array<Maybe<CmsData_Service_Translations>>>;
  translations_func?: Maybe<CmsData_Count_Functions>;
  rooms_translations?: Maybe<Array<Maybe<CmsData_Rooms_Translations_Service>>>;
  rooms_translations_func?: Maybe<CmsData_Count_Functions>;
};


export type CmsData_ServiceUser_CreatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_ServiceUser_UpdatedArgs = {
  filter?: InputMaybe<CmsData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_ServiceImageArgs = {
  filter?: InputMaybe<CmsData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_ServiceTranslationsArgs = {
  filter?: InputMaybe<CmsData_Service_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_ServiceRooms_TranslationsArgs = {
  filter?: InputMaybe<CmsData_Rooms_Translations_Service_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Service_Translations = {
  id: Scalars['ID'];
  service_id?: Maybe<CmsData_Service>;
  languages_code?: Maybe<CmsData_Languages>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type CmsData_Service_TranslationsService_IdArgs = {
  filter?: InputMaybe<CmsData_Service_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsData_Service_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<CmsData_Languages_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CmsData_Rooms_Translations_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Rooms_Translations_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Rooms_Translations_Aggregated_Count>;
  avg?: Maybe<CmsData_Rooms_Translations_Aggregated_Fields>;
  sum?: Maybe<CmsData_Rooms_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Rooms_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Rooms_Translations_Aggregated_Fields>;
  min?: Maybe<CmsData_Rooms_Translations_Aggregated_Fields>;
  max?: Maybe<CmsData_Rooms_Translations_Aggregated_Fields>;
};

export type CmsData_Rooms_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  rooms_id?: Maybe<Scalars['Int']>;
  languages_code?: Maybe<Scalars['Int']>;
  metatag_title?: Maybe<Scalars['Int']>;
  metatag_description?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  services_list?: Maybe<Scalars['Int']>;
};

export type CmsData_Rooms_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
  rooms_id?: Maybe<Scalars['Float']>;
};

export type CmsData_Service_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Service_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Service_Aggregated_Count>;
  avg?: Maybe<CmsData_Service_Aggregated_Fields>;
  sum?: Maybe<CmsData_Service_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Service_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Service_Aggregated_Fields>;
  min?: Maybe<CmsData_Service_Aggregated_Fields>;
  max?: Maybe<CmsData_Service_Aggregated_Fields>;
};

export type CmsData_Service_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  translations?: Maybe<Scalars['Int']>;
  rooms_translations?: Maybe<Scalars['Int']>;
};

export type CmsData_Service_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type CmsData_Service_Translations_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Service_Translations_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Service_Translations_Aggregated_Count>;
  avg?: Maybe<CmsData_Service_Translations_Aggregated_Fields>;
  sum?: Maybe<CmsData_Service_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Service_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Service_Translations_Aggregated_Fields>;
  min?: Maybe<CmsData_Service_Translations_Aggregated_Fields>;
  max?: Maybe<CmsData_Service_Translations_Aggregated_Fields>;
};

export type CmsData_Service_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
  languages_code?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type CmsData_Service_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
};

export type CmsData_Rooms_Translations_Service_Aggregated = {
  group?: Maybe<Scalars['CMSData_JSON']>;
  countAll?: Maybe<Scalars['Int']>;
  count?: Maybe<CmsData_Rooms_Translations_Service_Aggregated_Count>;
  countDistinct?: Maybe<CmsData_Rooms_Translations_Service_Aggregated_Count>;
  avg?: Maybe<CmsData_Rooms_Translations_Service_Aggregated_Fields>;
  sum?: Maybe<CmsData_Rooms_Translations_Service_Aggregated_Fields>;
  avgDistinct?: Maybe<CmsData_Rooms_Translations_Service_Aggregated_Fields>;
  sumDistinct?: Maybe<CmsData_Rooms_Translations_Service_Aggregated_Fields>;
  min?: Maybe<CmsData_Rooms_Translations_Service_Aggregated_Fields>;
  max?: Maybe<CmsData_Rooms_Translations_Service_Aggregated_Fields>;
};

export type CmsData_Rooms_Translations_Service_Aggregated_Count = {
  id?: Maybe<Scalars['Int']>;
  rooms_translations_id?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
};

export type CmsData_Rooms_Translations_Service_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']>;
  rooms_translations_id?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type CmsData_Create_Languages_Input = {
  code: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  direction?: InputMaybe<Scalars['String']>;
  prefix?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Create_Card_Input = {
  id?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['Int']>;
  user_created?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['CMSData_Date']>;
  user_updated?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  identifier: Scalars['String'];
  icon?: InputMaybe<CmsData_Create_Directus_Files_Input>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Create_Card_Translations_Input>>>;
  home_translations?: InputMaybe<Array<InputMaybe<CmsData_Create_Home_Translations_Card_Input>>>;
};

export type CmsData_Create_Directus_Users_Input = {
  id?: InputMaybe<Scalars['ID']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['CMSData_Hash']>;
  location?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['CMSData_JSON']>;
  avatar?: InputMaybe<CmsData_Create_Directus_Files_Input>;
  language?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  tfa_secret?: InputMaybe<Scalars['CMSData_Hash']>;
  status?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<CmsData_Create_Directus_Roles_Input>;
  token?: InputMaybe<Scalars['CMSData_Hash']>;
  last_access?: InputMaybe<Scalars['CMSData_Date']>;
  last_page?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  auth_data?: InputMaybe<Scalars['CMSData_JSON']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
};

export type CmsData_Create_Directus_Files_Input = {
  id?: InputMaybe<Scalars['ID']>;
  storage: Scalars['String'];
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<CmsData_Create_Directus_Folders_Input>;
  uploaded_by?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['CMSData_Date']>;
  modified_by?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['CMSData_Date']>;
  charset?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['CMSData_GraphQLBigInt']>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['CMSData_JSON']>;
  metadata?: InputMaybe<Scalars['CMSData_JSON']>;
};

export type CmsData_Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: InputMaybe<CmsData_Create_Directus_Folders_Input>;
};

export type CmsData_Create_Directus_Roles_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enforce_tfa: Scalars['Boolean'];
  admin_access: Scalars['Boolean'];
  app_access?: InputMaybe<Scalars['Boolean']>;
  users?: InputMaybe<Array<InputMaybe<CmsData_Create_Directus_Users_Input>>>;
};

export type CmsData_Create_Card_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  card_id?: InputMaybe<CmsData_Create_Card_Input>;
  languages_code?: InputMaybe<CmsData_Create_Languages_Input>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
};

export type CmsData_Create_Home_Translations_Card_Input = {
  id?: InputMaybe<Scalars['ID']>;
  home_translations_id?: InputMaybe<CmsData_Create_Home_Translations_Input>;
  card_id?: InputMaybe<CmsData_Create_Card_Input>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Create_Home_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  home_id?: InputMaybe<CmsData_Create_Home_Input>;
  languages_id?: InputMaybe<CmsData_Create_Languages_Input>;
  metatag_title?: InputMaybe<Scalars['String']>;
  metatag_description?: InputMaybe<Scalars['String']>;
  test_list?: InputMaybe<Scalars['CMSData_JSON']>;
  video_file?: InputMaybe<CmsData_Create_Directus_Files_Input>;
  cards_list?: InputMaybe<Array<InputMaybe<CmsData_Create_Home_Translations_Card_Input>>>;
  slides_list?: InputMaybe<Array<InputMaybe<CmsData_Create_Home_Translations_Slide_Input>>>;
};

export type CmsData_Create_Home_Input = {
  id?: InputMaybe<Scalars['ID']>;
  user_updated?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Create_Home_Translations_Input>>>;
  categories_list?: InputMaybe<Array<InputMaybe<CmsData_Create_Home_Gallery_Categories_Input>>>;
};

export type CmsData_Create_Home_Gallery_Categories_Input = {
  id?: InputMaybe<Scalars['ID']>;
  home_id?: InputMaybe<CmsData_Create_Home_Input>;
  gallery_categories_id?: InputMaybe<CmsData_Create_Gallery_Categories_Input>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Create_Gallery_Categories_Input = {
  id?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['Int']>;
  user_created?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['CMSData_Date']>;
  user_updated?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  identifier: Scalars['String'];
  translations?: InputMaybe<Array<InputMaybe<CmsData_Create_Gallery_Categories_Translations_Input>>>;
  images?: InputMaybe<Array<InputMaybe<CmsData_Create_Gallery_Categories_Files_Input>>>;
  home?: InputMaybe<Array<InputMaybe<CmsData_Create_Home_Gallery_Categories_Input>>>;
};

export type CmsData_Create_Gallery_Categories_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  gallery_categories_id?: InputMaybe<CmsData_Create_Gallery_Categories_Input>;
  languages_code?: InputMaybe<CmsData_Create_Languages_Input>;
  title: Scalars['String'];
};

export type CmsData_Create_Gallery_Categories_Files_Input = {
  id?: InputMaybe<Scalars['ID']>;
  gallery_categories_id?: InputMaybe<CmsData_Create_Gallery_Categories_Input>;
  directus_files_id?: InputMaybe<CmsData_Create_Directus_Files_Input>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Create_Home_Translations_Slide_Input = {
  id?: InputMaybe<Scalars['ID']>;
  home_translations_id?: InputMaybe<CmsData_Create_Home_Translations_Input>;
  slide_id?: InputMaybe<CmsData_Create_Slide_Input>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Create_Slide_Input = {
  id?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['Int']>;
  user_created?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['CMSData_Date']>;
  user_updated?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  identifier: Scalars['String'];
  image?: InputMaybe<CmsData_Create_Directus_Files_Input>;
  home_translations?: InputMaybe<Array<InputMaybe<CmsData_Create_Home_Translations_Slide_Input>>>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Create_Slide_Translations_Input>>>;
};

export type CmsData_Create_Slide_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  slide_id?: InputMaybe<CmsData_Create_Slide_Input>;
  languages_code?: InputMaybe<CmsData_Create_Languages_Input>;
  title?: InputMaybe<Scalars['String']>;
};

export type CmsData_Create_Vocabulary_Input = {
  id?: InputMaybe<Scalars['ID']>;
  user_created?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['CMSData_Date']>;
  user_updated?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  code: Scalars['String'];
  translations?: InputMaybe<Array<InputMaybe<CmsData_Create_Vocabulary_Translations_Input>>>;
};

export type CmsData_Create_Vocabulary_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  vocabulary_id?: InputMaybe<CmsData_Create_Vocabulary_Input>;
  languages_code?: InputMaybe<CmsData_Create_Languages_Input>;
  label: Scalars['String'];
};

export type CmsData_Create_Rooms_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  rooms_id?: InputMaybe<CmsData_Create_Rooms_Input>;
  languages_code?: InputMaybe<CmsData_Create_Languages_Input>;
  metatag_title?: InputMaybe<Scalars['String']>;
  metatag_description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  services_list?: InputMaybe<Array<InputMaybe<CmsData_Create_Rooms_Translations_Service_Input>>>;
};

export type CmsData_Create_Rooms_Input = {
  id?: InputMaybe<Scalars['ID']>;
  user_updated?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Create_Rooms_Translations_Input>>>;
};

export type CmsData_Create_Rooms_Translations_Service_Input = {
  id?: InputMaybe<Scalars['ID']>;
  rooms_translations_id?: InputMaybe<CmsData_Create_Rooms_Translations_Input>;
  service_id?: InputMaybe<CmsData_Create_Service_Input>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Create_Service_Input = {
  id?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['Int']>;
  user_created?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['CMSData_Date']>;
  user_updated?: InputMaybe<CmsData_Create_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  identifier: Scalars['String'];
  image?: InputMaybe<CmsData_Create_Directus_Files_Input>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Create_Service_Translations_Input>>>;
  rooms_translations?: InputMaybe<Array<InputMaybe<CmsData_Create_Rooms_Translations_Service_Input>>>;
};

export type CmsData_Create_Service_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  service_id?: InputMaybe<CmsData_Create_Service_Input>;
  languages_code?: InputMaybe<CmsData_Create_Languages_Input>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
};

export type CmsData_Update_Home_Input = {
  id?: InputMaybe<Scalars['ID']>;
  user_updated?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Update_Home_Translations_Input>>>;
  categories_list?: InputMaybe<Array<InputMaybe<CmsData_Update_Home_Gallery_Categories_Input>>>;
};

export type CmsData_Update_Directus_Users_Input = {
  id?: InputMaybe<Scalars['ID']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['CMSData_Hash']>;
  location?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['CMSData_JSON']>;
  avatar?: InputMaybe<CmsData_Update_Directus_Files_Input>;
  language?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  tfa_secret?: InputMaybe<Scalars['CMSData_Hash']>;
  status?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<CmsData_Update_Directus_Roles_Input>;
  token?: InputMaybe<Scalars['CMSData_Hash']>;
  last_access?: InputMaybe<Scalars['CMSData_Date']>;
  last_page?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  auth_data?: InputMaybe<Scalars['CMSData_JSON']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
};

export type CmsData_Update_Directus_Files_Input = {
  id?: InputMaybe<Scalars['ID']>;
  storage?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<CmsData_Update_Directus_Folders_Input>;
  uploaded_by?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['CMSData_Date']>;
  modified_by?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['CMSData_Date']>;
  charset?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['CMSData_GraphQLBigInt']>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['CMSData_JSON']>;
  metadata?: InputMaybe<Scalars['CMSData_JSON']>;
};

export type CmsData_Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<CmsData_Update_Directus_Folders_Input>;
};

export type CmsData_Update_Directus_Roles_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enforce_tfa?: InputMaybe<Scalars['Boolean']>;
  admin_access?: InputMaybe<Scalars['Boolean']>;
  app_access?: InputMaybe<Scalars['Boolean']>;
  users?: InputMaybe<Array<InputMaybe<CmsData_Update_Directus_Users_Input>>>;
};

export type CmsData_Update_Home_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  home_id?: InputMaybe<CmsData_Update_Home_Input>;
  languages_id?: InputMaybe<CmsData_Update_Languages_Input>;
  metatag_title?: InputMaybe<Scalars['String']>;
  metatag_description?: InputMaybe<Scalars['String']>;
  test_list?: InputMaybe<Scalars['CMSData_JSON']>;
  video_file?: InputMaybe<CmsData_Update_Directus_Files_Input>;
  cards_list?: InputMaybe<Array<InputMaybe<CmsData_Update_Home_Translations_Card_Input>>>;
  slides_list?: InputMaybe<Array<InputMaybe<CmsData_Update_Home_Translations_Slide_Input>>>;
};

export type CmsData_Update_Languages_Input = {
  code?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  direction?: InputMaybe<Scalars['String']>;
  prefix?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Update_Home_Translations_Card_Input = {
  id?: InputMaybe<Scalars['ID']>;
  home_translations_id?: InputMaybe<CmsData_Update_Home_Translations_Input>;
  card_id?: InputMaybe<CmsData_Update_Card_Input>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Update_Card_Input = {
  id?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['Int']>;
  user_created?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['CMSData_Date']>;
  user_updated?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  identifier?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<CmsData_Update_Directus_Files_Input>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Update_Card_Translations_Input>>>;
  home_translations?: InputMaybe<Array<InputMaybe<CmsData_Update_Home_Translations_Card_Input>>>;
};

export type CmsData_Update_Card_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  card_id?: InputMaybe<CmsData_Update_Card_Input>;
  languages_code?: InputMaybe<CmsData_Update_Languages_Input>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
};

export type CmsData_Update_Home_Translations_Slide_Input = {
  id?: InputMaybe<Scalars['ID']>;
  home_translations_id?: InputMaybe<CmsData_Update_Home_Translations_Input>;
  slide_id?: InputMaybe<CmsData_Update_Slide_Input>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Update_Slide_Input = {
  id?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['Int']>;
  user_created?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['CMSData_Date']>;
  user_updated?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  identifier?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<CmsData_Update_Directus_Files_Input>;
  home_translations?: InputMaybe<Array<InputMaybe<CmsData_Update_Home_Translations_Slide_Input>>>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Update_Slide_Translations_Input>>>;
};

export type CmsData_Update_Slide_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  slide_id?: InputMaybe<CmsData_Update_Slide_Input>;
  languages_code?: InputMaybe<CmsData_Update_Languages_Input>;
  title?: InputMaybe<Scalars['String']>;
};

export type CmsData_Update_Home_Gallery_Categories_Input = {
  id?: InputMaybe<Scalars['ID']>;
  home_id?: InputMaybe<CmsData_Update_Home_Input>;
  gallery_categories_id?: InputMaybe<CmsData_Update_Gallery_Categories_Input>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Update_Gallery_Categories_Input = {
  id?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['Int']>;
  user_created?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['CMSData_Date']>;
  user_updated?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  identifier?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Update_Gallery_Categories_Translations_Input>>>;
  images?: InputMaybe<Array<InputMaybe<CmsData_Update_Gallery_Categories_Files_Input>>>;
  home?: InputMaybe<Array<InputMaybe<CmsData_Update_Home_Gallery_Categories_Input>>>;
};

export type CmsData_Update_Gallery_Categories_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  gallery_categories_id?: InputMaybe<CmsData_Update_Gallery_Categories_Input>;
  languages_code?: InputMaybe<CmsData_Update_Languages_Input>;
  title?: InputMaybe<Scalars['String']>;
};

export type CmsData_Update_Gallery_Categories_Files_Input = {
  id?: InputMaybe<Scalars['ID']>;
  gallery_categories_id?: InputMaybe<CmsData_Update_Gallery_Categories_Input>;
  directus_files_id?: InputMaybe<CmsData_Update_Directus_Files_Input>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Update_Vocabulary_Input = {
  id?: InputMaybe<Scalars['ID']>;
  user_created?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['CMSData_Date']>;
  user_updated?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  code?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Update_Vocabulary_Translations_Input>>>;
};

export type CmsData_Update_Vocabulary_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  vocabulary_id?: InputMaybe<CmsData_Update_Vocabulary_Input>;
  languages_code?: InputMaybe<CmsData_Update_Languages_Input>;
  label?: InputMaybe<Scalars['String']>;
};

export type CmsData_Update_Rooms_Input = {
  id?: InputMaybe<Scalars['ID']>;
  user_updated?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Update_Rooms_Translations_Input>>>;
};

export type CmsData_Update_Rooms_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  rooms_id?: InputMaybe<CmsData_Update_Rooms_Input>;
  languages_code?: InputMaybe<CmsData_Update_Languages_Input>;
  metatag_title?: InputMaybe<Scalars['String']>;
  metatag_description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  services_list?: InputMaybe<Array<InputMaybe<CmsData_Update_Rooms_Translations_Service_Input>>>;
};

export type CmsData_Update_Rooms_Translations_Service_Input = {
  id?: InputMaybe<Scalars['ID']>;
  rooms_translations_id?: InputMaybe<CmsData_Update_Rooms_Translations_Input>;
  service_id?: InputMaybe<CmsData_Update_Service_Input>;
  sort?: InputMaybe<Scalars['Int']>;
};

export type CmsData_Update_Service_Input = {
  id?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['Int']>;
  user_created?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['CMSData_Date']>;
  user_updated?: InputMaybe<CmsData_Update_Directus_Users_Input>;
  date_updated?: InputMaybe<Scalars['CMSData_Date']>;
  identifier?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<CmsData_Update_Directus_Files_Input>;
  translations?: InputMaybe<Array<InputMaybe<CmsData_Update_Service_Translations_Input>>>;
  rooms_translations?: InputMaybe<Array<InputMaybe<CmsData_Update_Rooms_Translations_Service_Input>>>;
};

export type CmsData_Update_Service_Translations_Input = {
  id?: InputMaybe<Scalars['ID']>;
  service_id?: InputMaybe<CmsData_Update_Service_Input>;
  languages_code?: InputMaybe<CmsData_Update_Languages_Input>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
};

export type CmsData_Delete_Many = {
  ids: Array<Maybe<Scalars['ID']>>;
};

export type CmsData_Delete_One = {
  id: Scalars['ID'];
};

export type CmsData = {
  home?: Maybe<CmsData_Home>;
  languages: Array<CmsData_Languages>;
  languages_by_id?: Maybe<CmsData_Languages>;
  languages_aggregated: Array<CmsData_Languages_Aggregated>;
  card: Array<CmsData_Card>;
  card_by_id?: Maybe<CmsData_Card>;
  card_aggregated: Array<CmsData_Card_Aggregated>;
  card_translations: Array<CmsData_Card_Translations>;
  card_translations_by_id?: Maybe<CmsData_Card_Translations>;
  card_translations_aggregated: Array<CmsData_Card_Translations_Aggregated>;
  home_translations_card: Array<CmsData_Home_Translations_Card>;
  home_translations_card_by_id?: Maybe<CmsData_Home_Translations_Card>;
  home_translations_card_aggregated: Array<CmsData_Home_Translations_Card_Aggregated>;
  slide: Array<CmsData_Slide>;
  slide_by_id?: Maybe<CmsData_Slide>;
  slide_aggregated: Array<CmsData_Slide_Aggregated>;
  home_translations_slide: Array<CmsData_Home_Translations_Slide>;
  home_translations_slide_by_id?: Maybe<CmsData_Home_Translations_Slide>;
  home_translations_slide_aggregated: Array<CmsData_Home_Translations_Slide_Aggregated>;
  slide_translations: Array<CmsData_Slide_Translations>;
  slide_translations_by_id?: Maybe<CmsData_Slide_Translations>;
  slide_translations_aggregated: Array<CmsData_Slide_Translations_Aggregated>;
  home_translations: Array<CmsData_Home_Translations>;
  home_translations_by_id?: Maybe<CmsData_Home_Translations>;
  home_translations_aggregated: Array<CmsData_Home_Translations_Aggregated>;
  vocabulary: Array<CmsData_Vocabulary>;
  vocabulary_by_id?: Maybe<CmsData_Vocabulary>;
  vocabulary_aggregated: Array<CmsData_Vocabulary_Aggregated>;
  vocabulary_translations: Array<CmsData_Vocabulary_Translations>;
  vocabulary_translations_by_id?: Maybe<CmsData_Vocabulary_Translations>;
  vocabulary_translations_aggregated: Array<CmsData_Vocabulary_Translations_Aggregated>;
  gallery_categories: Array<CmsData_Gallery_Categories>;
  gallery_categories_by_id?: Maybe<CmsData_Gallery_Categories>;
  gallery_categories_aggregated: Array<CmsData_Gallery_Categories_Aggregated>;
  gallery_categories_translations: Array<CmsData_Gallery_Categories_Translations>;
  gallery_categories_translations_by_id?: Maybe<CmsData_Gallery_Categories_Translations>;
  gallery_categories_translations_aggregated: Array<CmsData_Gallery_Categories_Translations_Aggregated>;
  gallery_categories_files: Array<CmsData_Gallery_Categories_Files>;
  gallery_categories_files_by_id?: Maybe<CmsData_Gallery_Categories_Files>;
  gallery_categories_files_aggregated: Array<CmsData_Gallery_Categories_Files_Aggregated>;
  home_gallery_categories: Array<CmsData_Home_Gallery_Categories>;
  home_gallery_categories_by_id?: Maybe<CmsData_Home_Gallery_Categories>;
  home_gallery_categories_aggregated: Array<CmsData_Home_Gallery_Categories_Aggregated>;
  rooms?: Maybe<CmsData_Rooms>;
  rooms_translations: Array<CmsData_Rooms_Translations>;
  rooms_translations_by_id?: Maybe<CmsData_Rooms_Translations>;
  rooms_translations_aggregated: Array<CmsData_Rooms_Translations_Aggregated>;
  service: Array<CmsData_Service>;
  service_by_id?: Maybe<CmsData_Service>;
  service_aggregated: Array<CmsData_Service_Aggregated>;
  service_translations: Array<CmsData_Service_Translations>;
  service_translations_by_id?: Maybe<CmsData_Service_Translations>;
  service_translations_aggregated: Array<CmsData_Service_Translations_Aggregated>;
  rooms_translations_service: Array<CmsData_Rooms_Translations_Service>;
  rooms_translations_service_by_id?: Maybe<CmsData_Rooms_Translations_Service>;
  rooms_translations_service_aggregated: Array<CmsData_Rooms_Translations_Service_Aggregated>;
};


export type CmsDataLanguagesArgs = {
  filter?: InputMaybe<CmsData_Languages_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataLanguages_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataLanguages_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataCardArgs = {
  filter?: InputMaybe<CmsData_Card_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataCard_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataCard_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Card_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataCard_TranslationsArgs = {
  filter?: InputMaybe<CmsData_Card_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataCard_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataCard_Translations_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Card_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataHome_Translations_CardArgs = {
  filter?: InputMaybe<CmsData_Home_Translations_Card_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataHome_Translations_Card_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataHome_Translations_Card_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Home_Translations_Card_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataSlideArgs = {
  filter?: InputMaybe<CmsData_Slide_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataSlide_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataSlide_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Slide_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataHome_Translations_SlideArgs = {
  filter?: InputMaybe<CmsData_Home_Translations_Slide_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataHome_Translations_Slide_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataHome_Translations_Slide_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Home_Translations_Slide_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataSlide_TranslationsArgs = {
  filter?: InputMaybe<CmsData_Slide_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataSlide_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataSlide_Translations_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Slide_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataHome_TranslationsArgs = {
  filter?: InputMaybe<CmsData_Home_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataHome_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataHome_Translations_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Home_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataVocabularyArgs = {
  filter?: InputMaybe<CmsData_Vocabulary_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataVocabulary_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataVocabulary_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Vocabulary_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataVocabulary_TranslationsArgs = {
  filter?: InputMaybe<CmsData_Vocabulary_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataVocabulary_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataVocabulary_Translations_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Vocabulary_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataGallery_CategoriesArgs = {
  filter?: InputMaybe<CmsData_Gallery_Categories_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataGallery_Categories_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataGallery_Categories_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Gallery_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataGallery_Categories_TranslationsArgs = {
  filter?: InputMaybe<CmsData_Gallery_Categories_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataGallery_Categories_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataGallery_Categories_Translations_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Gallery_Categories_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataGallery_Categories_FilesArgs = {
  filter?: InputMaybe<CmsData_Gallery_Categories_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataGallery_Categories_Files_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataGallery_Categories_Files_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Gallery_Categories_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataHome_Gallery_CategoriesArgs = {
  filter?: InputMaybe<CmsData_Home_Gallery_Categories_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataHome_Gallery_Categories_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataHome_Gallery_Categories_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Home_Gallery_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataRooms_TranslationsArgs = {
  filter?: InputMaybe<CmsData_Rooms_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataRooms_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataRooms_Translations_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Rooms_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataServiceArgs = {
  filter?: InputMaybe<CmsData_Service_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataService_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataService_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Service_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataService_TranslationsArgs = {
  filter?: InputMaybe<CmsData_Service_Translations_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataService_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataService_Translations_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Service_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CmsDataRooms_Translations_ServiceArgs = {
  filter?: InputMaybe<CmsData_Rooms_Translations_Service_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CmsDataRooms_Translations_Service_By_IdArgs = {
  id: Scalars['ID'];
};


export type CmsDataRooms_Translations_Service_AggregatedArgs = {
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter?: InputMaybe<CmsData_Rooms_Translations_Service_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource: GraphQlSourceConnection;
  cms: CmsData;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphQlSourceArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  typeName?: InputMaybe<StringQueryOperatorInput>;
  fieldName?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllGraphQlSourceArgs = {
  filter?: InputMaybe<GraphQlSourceFilterInput>;
  sort?: InputMaybe<GraphQlSourceSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___parent___internal___contentFilePath'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___children___internal___contentFilePath'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childrenImageSharp___internal___contentFilePath'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___parent___internal___contentFilePath'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___children___internal___contentFilePath'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childImageSharp___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'graphqlTypegen'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___parent___internal___contentFilePath'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___children___internal___contentFilePath'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphQlSourceGroupConnection>;
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionMaxArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionMinArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionSumArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

export type GraphQlSourceFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'
  | 'typeName'
  | 'fieldName';

export type GraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphQlSourceGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphQlSourceGroupConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceGroupConnectionMaxArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceGroupConnectionMinArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceGroupConnectionSumArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  typeName?: InputMaybe<StringQueryOperatorInput>;
  fieldName?: InputMaybe<StringQueryOperatorInput>;
};

export type GraphQlSourceSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphQlSourceFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CreatePagesQueryVariables = Exact<{ [key: string]: never; }>;


export type CreatePagesQuery = { site?: { siteMetadata?: { title?: string | null, siteUrl?: string | null } | null } | null, cms: { languages: Array<{ code: string, prefix?: string | null }>, home?: { id: string, categories_list?: Array<{ gallery_categories_id?: { images?: Array<{ directus_files_id?: { id: string, title?: string | null, file?: { childImageSharp?: { gatsbyImageData: any, thumbnails: any, original?: { width?: number | null, height?: number | null } | null } | null } | null } | null } | null> | null, translations?: Array<{ title: string, languages_code?: { code: string } | null } | null> | null } | null } | null> | null, translations?: Array<{ metatag_title?: string | null, metatag_description?: string | null, test_list?: any | null, languages_id?: { code: string, prefix?: string | null, sort?: number | null } | null, video_file?: { id: string, filename_download: string, file?: { publicURL?: string | null } | null } | null, cards_list?: Array<{ card_id?: { icon?: { id: string, filename_download: string, file?: { publicURL?: string | null } | null } | null, translations?: Array<{ description?: string | null, title?: string | null, languages_code?: { code: string, prefix?: string | null } | null } | null> | null } | null } | null> | null, slides_list?: Array<{ slide_id?: { image?: { id: string, title?: string | null, filename_download: string, file?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, translations?: Array<{ title?: string | null, languages_code?: { code: string, prefix?: string | null } | null } | null> | null } | null } | null> | null } | null> | null } | null, rooms?: { id: string, translations?: Array<{ metatag_title?: string | null, metatag_description?: string | null, title?: string | null, slug?: string | null, languages_code?: { code: string, prefix?: string | null, sort?: number | null } | null, services_list?: Array<{ service_id?: { image?: { id: string, title?: string | null, filename_download: string, file?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, translations?: Array<{ title?: string | null, description?: string | null, languages_code?: { code: string, prefix?: string | null } | null } | null> | null } | null } | null> | null } | null> | null } | null } };

export type HomeQueryFragment = { home?: { id: string, categories_list?: Array<{ gallery_categories_id?: { images?: Array<{ directus_files_id?: { id: string, title?: string | null, file?: { childImageSharp?: { gatsbyImageData: any, thumbnails: any, original?: { width?: number | null, height?: number | null } | null } | null } | null } | null } | null> | null, translations?: Array<{ title: string, languages_code?: { code: string } | null } | null> | null } | null } | null> | null, translations?: Array<{ metatag_title?: string | null, metatag_description?: string | null, test_list?: any | null, languages_id?: { code: string, prefix?: string | null, sort?: number | null } | null, video_file?: { id: string, filename_download: string, file?: { publicURL?: string | null } | null } | null, cards_list?: Array<{ card_id?: { icon?: { id: string, filename_download: string, file?: { publicURL?: string | null } | null } | null, translations?: Array<{ description?: string | null, title?: string | null, languages_code?: { code: string, prefix?: string | null } | null } | null> | null } | null } | null> | null, slides_list?: Array<{ slide_id?: { image?: { id: string, title?: string | null, filename_download: string, file?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, translations?: Array<{ title?: string | null, languages_code?: { code: string, prefix?: string | null } | null } | null> | null } | null } | null> | null } | null> | null } | null };

export type RoomsQueryFragment = { rooms?: { id: string, translations?: Array<{ metatag_title?: string | null, metatag_description?: string | null, title?: string | null, slug?: string | null, languages_code?: { code: string, prefix?: string | null, sort?: number | null } | null, services_list?: Array<{ service_id?: { image?: { id: string, title?: string | null, filename_download: string, file?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, translations?: Array<{ title?: string | null, description?: string | null, languages_code?: { code: string, prefix?: string | null } | null } | null> | null } | null } | null> | null } | null> | null } | null };

export type VocabularyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type VocabularyQueryQuery = { cms: { vocabulary: Array<{ code: string, translations?: Array<{ label: string, languages_code?: { code: string, prefix?: string | null } | null } | null> | null }> } };
