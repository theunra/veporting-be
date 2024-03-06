import { IParagraphStyleOptions, convertMillimetersToTwip } from 'docx';
/**
 * ******************************************************************************************************************
 * Paragraph Styles
 * ******************************************************************************************************************
 */

export const CoverDateParagraphStyle : IParagraphStyleOptions = {
    id : "coverDate",
    name : "Cover Date",
    basedOn : "Normal",
    run : {
        size : 16 * 2,
        font : "Verdana",
    },
};

export const CoverReportTypeParagraphStyle : IParagraphStyleOptions = {
    id : "coverReportType",
    name : "Cover Report Type",
    basedOn : "Normal",
    run : {
        size : 26 * 2,
        bold : true,
        font : "Cambria",
    },
    paragraph : {
        indent : {
            left : convertMillimetersToTwip(10.0),
        },
    },
};

export const NormalParagraphStyle : IParagraphStyleOptions = {
    id: "normal",
    name : "Normal",
    run : {
        size : 11 * 2,
        font : "Tahoma",
    },
    paragraph : {
        spacing: {
            line: 300,
        },
    }
};

export const TableHeadingParagraphStyle : IParagraphStyleOptions = {
    id: "tableHeading",
    name : "Table Heading",
    run : {
        size : 14 * 2,
        font : "Verdana",
        color : "#1B5488",
    },
    paragraph : {
        spacing : {
            // after : 230,
        }
    }
};


export const CoverReportInfoParagraphStyle : IParagraphStyleOptions = {
    id : "coverReportInfo",
    name : "Cover Report Info",
    basedOn : "Normal",
    run : {
        size : 18 * 2,
        bold : true,
        font : "Tahoma",
    },
    paragraph : {
        indent : {
            firstLine : convertMillimetersToTwip(10.0),
        },
    },
};

export const normalIndented : IParagraphStyleOptions = {
    ...NormalParagraphStyle,
    id : "normalIndented",
    name : "Normal Indented",
    paragraph : {
        indent : {
            firstLine : convertMillimetersToTwip(10.0),
        },
    },
};