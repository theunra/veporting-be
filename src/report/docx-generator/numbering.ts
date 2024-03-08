import { AlignmentType, ILevelsOptions, LevelFormat, LevelSuffix } from "docx"

interface Numbering {
    reference : string;
    levels : ILevelsOptions[];
};

const MyLevel : ILevelsOptions = {
    level : 0,
    text : "%1.",
    // format : LevelFormat.NONE,
    alignment : AlignmentType.START,

};

export const MyNumbering : Numbering = {
    reference : "my-numbering",
    levels : [
        MyLevel
    ],
};