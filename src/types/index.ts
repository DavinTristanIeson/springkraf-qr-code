export interface UnknownObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type DotType = "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded";
export type CornerDotType = "dot" | "square" | "extra-rounded";
export type CornerSquareType = "dot" | "square" | "extra-rounded";
export type FileExtension = "svg" | "png" | "jpeg" | "webp";
export type GradientType = "radial" | "linear";
export type DrawType = "canvas" | "svg";
export type ShapeType = "square" | "circle";
export type RoundedCornerSquareDrawMode = "elliptical" | "bezier";

export type Gradient = {
  type: GradientType;
  rotation?: number;
  colorStops: {
    offset: number;
    color: string;
  }[];
};

export interface DotTypes {
  [key: string]: DotType;
}

export interface GradientTypes {
  [key: string]: GradientType;
}

export interface CornerDotTypes {
  [key: string]: CornerDotType;
}

export interface CornerSquareTypes {
  [key: string]: CornerSquareType;
}

export interface DrawTypes {
  [key: string]: DrawType;
}

export interface ShapeTypes {
  [key: string]: ShapeType;
}

export type TypeNumber =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40;

export type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";
export type Mode = "Numeric" | "Alphanumeric" | "Byte" | "Kanji";
export interface QRCode {
  addData(data: string, mode?: Mode): void;
  make(): void;
  getModuleCount(): number;
  isDark(row: number, col: number): boolean;
  createImgTag(cellSize?: number, margin?: number): string;
  createSvgTag(cellSize?: number, margin?: number): string;
  createSvgTag(opts?: { cellSize?: number; margin?: number; scalable?: boolean }): string;
  createDataURL(cellSize?: number, margin?: number): string;
  createTableTag(cellSize?: number, margin?: number): string;
  createASCII(cellSize?: number, margin?: number): string;
  renderTo2dContext(context: CanvasRenderingContext2D, cellSize?: number): void;
}

export type Options = {
  type?: DrawType;
  shape?: ShapeType;
  width?: number;
  height?: number;
  margin?: number;
  data?: string;
  image?: string;
  qrOptions?: {
    typeNumber?: TypeNumber;
    mode?: Mode;
    errorCorrectionLevel?: ErrorCorrectionLevel;
  };
  imageOptions?: {
    hideBackgroundDots?: boolean;
    imageSize?: number;
    crossOrigin?: string;
    margin?: number;
  };
  dotsOptions?: {
    type?: DotType;
    color?: string;
    gradient?: Gradient;
    /** Controls how big the dot should be drawn. Range is [0, 1). Only applies if the type is dot. */
    scale?: number;
  };
  cornersSquareOptions?: {
    type?: CornerSquareType;
    color?: string;
    gradient?: Gradient;
    /** Only applicable when type is ``extra-rounded``. Sets how the corners of the square are drawn using SVG. */
    drawMode?: RoundedCornerSquareDrawMode;
    /**
     * If user wants to create a custom SVG for the corner square, just in case the defaults do not match their intentions. This only applies if type is ``extra-rounded`` or ``square``. User is fully responsible for the customization of the SVG element.
     *
     * The element parameter contains a ``path`` svg element.
     */
    customSvg?(params: { x: number; y: number; size: number; dotSize: number; element: SVGElement }): string;
  };
  cornersDotOptions?: {
    type?: CornerDotType;
    color?: string;
    gradient?: Gradient;
    /** Only applies when type is ``extra-rounded``. Determines the border radius of the corner dots. This value should contain a number in the range [0, 1) as it is a relative value dependent on the size of the corner dot itself, not an absolute value. */
    radius?: number;
  };
  backgroundOptions?: {
    round?: number;
    color?: string;
    gradient?: Gradient;
  };
};

export type FilterFunction = (i: number, j: number) => boolean;

export type DownloadOptions = {
  name?: string;
  extension?: FileExtension;
};

export type DrawArgs = {
  x: number;
  y: number;
  size: number;
  rotation?: number;
  getNeighbor?: GetNeighbor;
};

export type BasicFigureDrawArgs = {
  x: number;
  y: number;
  size: number;
  rotation?: number;
};

export type RotateFigureArgs = {
  x: number;
  y: number;
  size: number;
  rotation?: number;
  draw: () => void;
};

export type GetNeighbor = (x: number, y: number) => boolean;

export type ExtensionFunction = (svg: SVGElement, options: Options) => void;
