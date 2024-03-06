import { Paragraph, Table, TableRow, TableCell, WidthType} from "docx";

/**
 * ******************************************************************************************************************
 * Tables
 * ******************************************************************************************************************
 */

export interface RevisionHistoryTableContent {
    version : string;
    date : string;
    description : string;
};

export function RevisionHistoryTable(contents : RevisionHistoryTableContent[]) {
    return new Table({
        alignment : 'center',
        layout : "autofit",
        width : {
            size : 200 * 45,
            type : WidthType.DXA,
        },
        rows : [
            //Header
            generateStdTableHeader(["Version", "Date", "Description"]),
            // Contents
            ...contents.map((content) => {
                return new TableRow({
                    children : [
                        new TableCell({
                            children : [new Paragraph({text : content.version})]
                        }),
                        new TableCell({
                            children : [new Paragraph({text : content.date})]
                        }),
                        new TableCell({
                            children : [new Paragraph({text : content.description})]
                        }),
                    ]
                });
            }),
        ],
    });
}


export interface AuthorDocumentTableContent {
    name : string;
    assignment : string;
    sign : string;
    date : string;
}

export function AuthorDocumentTable(contents : AuthorDocumentTableContent[]){
    return new Table({
        width : {
            size : 200 * 45,
            type : WidthType.DXA,
        },
        rows : [
            //Header
            generateStdTableHeader(["Name", "Assignment", "Sign", "Date"]),
            // Contents
            ...contents.map((content) => {
                return new TableRow({
                    children : [
                        new TableCell({
                            children : [new Paragraph({text : content.name})]
                        }),
                        new TableCell({
                            children : [new Paragraph({text : content.assignment})]
                        }),
                        new TableCell({
                            children : [new Paragraph({text : content.sign})]
                        }),
                        new TableCell({
                            children : [new Paragraph({text : content.date})]
                        }),
                    ]
                });
            }),
        ],
    });
}

export interface ContactInformationTableContent {
    company : string;
    name : string;
    email : string;
}

export function ContactInformationTable(contents : ContactInformationTableContent[]){

    return new Table({
        width : {
            size : 200 * 45,
            type : WidthType.DXA,
        },
        rows : [
            //Header
            generateStdTableHeader(["Company", "Name", "Email"]),
            // Contents
            ...contents.map((content) => {
                return new TableRow({
                    children : [
                        new TableCell({
                            children : [new Paragraph({text : content.company})]
                        }),
                        new TableCell({
                            children : [new Paragraph({text : content.name})]
                        }),
                        new TableCell({
                            children : [new Paragraph({text : content.email})]
                        }),
                    ]
                });
            }),
        ],
    });
}

export function generateStdTableHeader(headers){
    return new TableRow({
        children : headers.map((header) => {
            return new TableCell({
                children : [
                    new Paragraph({
                        text : header,
                    })
                ],
            });
        }),
    });
}