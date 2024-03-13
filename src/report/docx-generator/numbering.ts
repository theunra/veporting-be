import { AlignmentType, ILevelsOptions, LevelFormat, LevelSuffix } from "docx"

interface Numbering {
    reference : string;
    levels : ILevelsOptions[];
};

const Point0Level : ILevelsOptions = {
    level : 0,
    text : "%1.",
    // format : LevelFormat.NONE,
    alignment : AlignmentType.START,
};

const Point1Level : ILevelsOptions = {
    level : 1,
    text : "%1.%2",
    // format : LevelFormat.NONE,
    alignment : AlignmentType.START,
};

export const Point0Numbering : Numbering = {
    reference : "point-0-numbering",
    levels : [
        Point0Level,
        Point1Level
    ],
};

// const Point1Level4 : ILevelsOptions = {
//     level : 0,
//     text : "%1.",
//     // format : LevelFormat.NONE,
//     alignment : AlignmentType.START,

// };

// export const Point1Numbering4 : Numbering = {
//     reference : "point-0-numbering",
//     levels : [
//         Point0Level
//     ],
// };