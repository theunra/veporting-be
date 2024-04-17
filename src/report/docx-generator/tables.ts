import { Paragraph, Table, TableRow, TableCell, WidthType, Tab} from "docx";

/**
 * ******************************************************************************************************************
 * Tables
 * ******************************************************************************************************************
 */

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

export interface ExecutiveSummaryTableContent {
    critical : number;
    high : number;
    medium : number;
    low : number;
}

export function ExecutiveSummaryTable(content : ExecutiveSummaryTableContent) : Table{
    const total = content.critical + content.high + content.medium + content.low;

    return new Table({
        width : {
            size : 200 * 45,
            type : WidthType.DXA,
        },
        rows : [
            //Header
            generateStdTableHeader(["Critical", "High", "Medium", "Low", "Total"]),
            //Content
            new TableRow({
                children : [
                    new TableCell({
                        children : [new Paragraph({text : `${content.critical}`})]
                    }),
                    new TableCell({
                        children : [new Paragraph({text : `${content.high}`})]
                    }),
                    new TableCell({
                        children : [new Paragraph({text : `${content.medium}`})]
                    }),
                    new TableCell({
                        children : [new Paragraph({text : `${content.low}`})]
                    }),
                    new TableCell({
                        children : [new Paragraph({text : `${total}`})]
                    }),
                ],
            }),
        ]
    });
}

export interface ScopeApplicationTableContent {
    client_name : string;
    category : string;
    approach : string;
    urls : string[];
    credential_username : string;
    credential_password : string;
};

export function ScopeApplicationTable(content : ScopeApplicationTableContent) : Table {
    return new Table({
        width : {
            size : 200 * 45,
            type : WidthType.DXA,
        },
        rows : [
            new TableRow({
                children : [
                    new TableCell({
                        children : [new Paragraph({text : `Client`})],
                    }),
                    new TableCell({
                        children : [new Paragraph({text : `${content.client_name}`})],
                    }),
                ],
            }),
            new TableRow({
                children : [
                    new TableCell({
                        children : [new Paragraph({text : `Category`})],
                    }),
                    new TableCell({
                        children : [new Paragraph({text : `${content.category}`})],
                    }),
                ],
            }),
            new TableRow({
                children : [
                    new TableCell({
                        children : [new Paragraph({text : `Approach`})],
                    }),
                    new TableCell({
                        children : [new Paragraph({text : `${content.approach}`})],
                    }),
                ],
            }),
            new TableRow({
                children : [
                    new TableCell({
                        children : [new Paragraph({text : `URLs/App`})],
                    }),
                    new TableCell({
                        children : content.urls.map((url) => new Paragraph({text : `${url}`})),
                    }),
                ],
            }),
            new TableRow({
                children : [
                    new TableCell({
                        children : [new Paragraph({text : `Approach`})],
                    }),
                    new TableCell({
                        children : [
                            new Paragraph({text : `${content.credential_username}`}),
                            new Paragraph({text : `${content.credential_password}`})
                        ],
                    }),
                ],
            }),
        ]
    });
}

export enum VulnerabilityAnalysisCVSS {
    CRITICAL = "Critical"
};

export enum VulnerabilityAnalysisStatus {
    CLOSED = "Closed",
    OPEN = "Open"
}

export interface VulnerabilityAnalysisTableContent{
    finding : string;
    severity : number;
    cvss : VulnerabilityAnalysisCVSS;
    status : VulnerabilityAnalysisStatus;
}
export function VulnerabilityAnalysisTable(contents : VulnerabilityAnalysisTableContent[]) : Table {
    let counter = 0;
    return new Table({
        width : {
            size : 200 * 45,
            type : WidthType.DXA,
        },
        rows : [
            //Header
            generateStdTableHeader(["No", "Finding", "Severity", "CVSS", "Status"]),
            //Content
            ...contents.map((content) => {
                counter++;
                return new TableRow({
                    children: [
                        new TableCell({
                            children : [new Paragraph({text : `${counter}`})]
                        }),
                        new TableCell({
                            children : [new Paragraph({text : `${content.finding}`})]
                        }),
                        new TableCell({
                            children : [new Paragraph({text : `${content.severity}`})]
                        }),
                        new TableCell({
                            children : [new Paragraph({text : `${content.cvss}`})]
                        }),
                        new TableCell({
                            children : [new Paragraph({text : `${content.status}`})]
                        }),
                    ],
                });
            }),
            
        ],
    });
}

export interface FindingVulnerabilitiesTableContent{
    vulnerability_analysis: VulnerabilityAnalysisTableContent,
    target_systems: string[],
    description: string,
    impacts: string[],
    evidence_image_srcs: string[],
    recommendations: string[],
    references: string[],
    responses: string[],
}

export function FindingVulnerabilitiesTable(content : FindingVulnerabilitiesTableContent) : Table {
    return new Table({
        width : {
            size : 200 * 45,
            type : WidthType.DXA,
        },
        rows : [
            new TableRow({
                children: [
                    new TableCell({
                        rowSpan: 2,
                        children : [
                            new Paragraph({text : `${content.vulnerability_analysis.severity}`}),
                            new Paragraph({text : `${content.vulnerability_analysis.cvss}`}),
                        ]
                    }),
                    new TableCell({
                        children : [
                            new Paragraph({text : `${content.vulnerability_analysis.severity}`}),
                            new Paragraph({text : `${content.vulnerability_analysis.cvss}`}),
                        ]
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children : [
                            new Paragraph({text : `${content.vulnerability_analysis.severity}`}),
                            new Paragraph({text : `${content.vulnerability_analysis.cvss}`}),
                        ]
                    }),
                ],
            }),
        ]
    });
}